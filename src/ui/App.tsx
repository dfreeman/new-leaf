import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Area,
  Description,
  GameState,
  Interaction,
  JournalFlag,
  Scene,
  desc,
} from '../engine/model';
import styles from './App.module.css';
import { Typewriter } from './Typewriter';
import { PersistenceStore } from '../engine/persistence';

export type Actions = {
  startInteraction: (area: Area, interaction: Interaction) => void;
  travelToArea: (area: Area) => void;
  endScene: () => void;
  addJournalFlags: (flags: Array<JournalFlag>) => void;
};

function linkify(description: Description): Description {
  return {
    text: ['\n\n-> ', ...description.text.slice(1), ''],
    refs: [description.text[0], ...description.refs],
  };
}

function SceneIntro(props: {
  phase: Extract<GamePhase, { name: 'scene-intro' }>;
  state: GameState;
  actions: Actions;
}) {
  return (
    <Typewriter
      content={[
        ...props.phase.scene.intro.filter(
          (bit) => bit.shouldDisplay?.(props.state) ?? true,
        ),
        {
          description: linkify(desc`Continue`),
          action() {
            props.actions.addJournalFlags(
              props.phase.scene.intro.flatMap((bit) => bit.setsFlags ?? []),
            );
            props.actions.travelToArea(props.phase.scene.areas[0]);
          },
        },
      ]}
    />
  );
}

function SceneOutro(props: {
  phase: Extract<GamePhase, { name: 'scene-outro' }>;
  state: GameState;
  actions: Actions;
  onContinue: () => void;
}) {
  return (
    <Typewriter
      content={[
        ...props.phase.scene.outro.filter(
          (bit) => bit.shouldDisplay?.(props.state) ?? true,
        ),
        {
          description: linkify(desc`Continue`),
          action() {
            props.actions.addJournalFlags(
              props.phase.scene.outro.flatMap((bit) => bit.setsFlags ?? []),
            );
            props.onContinue();
          },
        },
      ]}
    />
  );
}

function InArea(props: {
  phase: Extract<GamePhase, { name: 'in-area' }>;
  state: GameState;
  actions: Actions;
}) {
  return (
    <Typewriter
      key={props.phase.area.name}
      content={[
        { description: props.phase.area.herePrompt },
        ...props.phase.area.interactions
          .filter((int) => props.state.isInteractionAvailable(int))
          .map((int) => ({
            description: int.start.prompt,
            action: () => props.actions.startInteraction(props.phase.area, int),
          })),
        ...props.phase.scene.areas
          .filter((area) => area !== props.phase.area)
          .map((area) => ({
            description: area.travelPrompt,
            action: () => props.actions.travelToArea(area),
          })),
      ]}
    />
  );
}

function InInteraction(props: {
  phase: Extract<GamePhase, { name: 'in-interaction' }>;
  state: GameState;
  actions: Actions;
}) {
  const [key, setKey] = useState('start');
  const node = useMemo(
    () => props.phase.interaction[key],
    [key, props.phase.interaction],
  );
  const [flags, setFlags] = useState<Array<JournalFlag>>([]);
  const actions = useMemo(
    () =>
      node.continue
        .map((key) => ({ key, option: props.phase.interaction[key] }))
        .filter(
          ({ option }) => !option || props.state.isOptionAvailable(option),
        )
        .map(({ key, option }) => {
          if (option) {
            return {
              description: linkify(option.prompt),
              action: () => {
                setFlags((flags) => [...flags, ...(option.setsFlags ?? [])]);
                setKey(key);
              },
            };
          } else {
            return {
              description: linkify(desc`Done`),
              action: () => {
                props.actions.addJournalFlags(flags);
                if (key === 'end') {
                  props.actions.travelToArea(props.phase.area);
                } else if (key === 'end-scene') {
                  props.actions.endScene();
                }
              },
            };
          }
        }),
    [node, flags, props],
  );

  return (
    <Typewriter
      key={key}
      content={[{ description: node.description }, ...actions]}
    />
  );
}

export type GamePhase =
  | { name: 'scene-intro'; scene: Scene }
  | { name: 'scene-outro'; scene: Scene }
  | { name: 'in-area'; scene: Scene; area: Area }
  | {
      name: 'in-interaction';
      scene: Scene;
      area: Area;
      interaction: Interaction;
    };

const store = new PersistenceStore();

export function App() {
  const [mode, setMode] = useState<'start' | 'playing' | 'end'>('start');
  const newGame = useCallback(() => {
    store.clear();
    setMode('playing');
  }, []);

  const continueGame = useCallback(() => setMode('playing'), []);

  if (mode === 'playing') {
    const { state, phase } = store.load();
    return (
      <Game state={state} initialPhase={phase} onEnd={() => setMode('end')} />
    );
  } else if (mode === 'start') {
    return (
      <div className={styles.splash}>
        {store.hasSaveGame() && (
          <div className={styles.start} onClick={continueGame}>
            Continue Game
          </div>
        )}
        <div className={styles.start} onClick={newGame}>
          New Game
        </div>
      </div>
    );
  } else {
    return <div className={styles.splash}>Done!</div>;
  }
}

function Game({
  state,
  initialPhase,
  onEnd,
}: {
  state: GameState;
  initialPhase: GamePhase;
  onEnd: (state: GameState) => void;
}) {
  const savedJournalEntries = useMemo(() => state.flags.length, [state]);
  const [journal, setJournal] = useState<Array<JournalFlag>>(state.flags);
  const [phase, setPhase] = useState<GamePhase>(initialPhase);

  useEffect(() => store.save(phase, state), [state, phase]);

  const actions: Actions = {
    travelToArea: useCallback((area) => {
      setPhase((prev) => ({ name: 'in-area', scene: prev.scene, area }));
    }, []),
    endScene: useCallback(() => {
      setPhase({ name: 'scene-outro', scene: phase.scene });
    }, [phase]),
    addJournalFlags: useCallback(
      (flags) => {
        for (const flag of flags) {
          state.setFlag(flag);
        }
        setJournal((oldFlags) => [...oldFlags, ...flags]);
      },
      [state],
    ),
    startInteraction: useCallback(
      (area, interaction) => {
        state.beginInteraction(interaction);
        setPhase((prev) => ({
          name: 'in-interaction',
          scene: prev.scene,
          area,
          interaction,
        }));
      },
      [state],
    ),
  };

  const startNextScene = useCallback(() => {
    const next = store.scenes[store.scenes.indexOf(phase.scene) + 1];
    if (next) {
      return setPhase({ name: 'scene-intro', scene: next });
    } else {
      return onEnd(state);
    }
  }, [onEnd, state, phase]);

  return (
    <div className={styles.root}>
      <audio src={phase.scene.music} autoPlay={true} loop={true} />
      <div className={`${styles.art} ${styles.panel}`}>
        <img src={phase.scene.art} style={{ width: '100%' }} />
      </div>
      <div className={`${styles.text} ${styles.panel}`}>
        {phase.name === 'scene-intro' ? (
          <SceneIntro phase={phase} state={state} actions={actions} />
        ) : phase.name === 'in-area' ? (
          <InArea phase={phase} state={state} actions={actions} />
        ) : phase.name === 'in-interaction' ? (
          <InInteraction phase={phase} state={state} actions={actions} />
        ) : (
          <SceneOutro
            phase={phase}
            state={state}
            actions={actions}
            onContinue={startNextScene}
          />
        )}
      </div>
      <div className={`${styles.status} ${styles.panel}`}>
        {phase.scene.date}
        <div className={styles.fill} />
        {store.scenes.indexOf(phase.scene) < store.scenes.length - 1 && (
          <div className={styles.end} onClick={actions.endScene}>
            End Day
          </div>
        )}
      </div>
      <div className={`${styles.journal} ${styles.panel}`}>
        <Typewriter
          startAt={savedJournalEntries * 2 + 1}
          content={[
            { description: desc`Journal` },
            ...journal.flatMap((flag) => [
              { description: desc`\n\n` },
              { description: flag.description },
            ]),
          ]}
        />
      </div>
    </div>
  );
}
