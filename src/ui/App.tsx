import { useCallback, useMemo, useState } from 'react';
import { atTheDocks } from '../content/scene-1';
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

export type Actions = {
  startInteraction: (area: Area, interaction: Interaction) => void;
  travelToArea: (area: Area) => void;
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
  actions: Actions;
}) {
  return (
    <Typewriter
      content={[
        { description: props.phase.scene.description },
        {
          description: linkify(desc`Continue`),
          action() {
            props.actions.addJournalFlags([props.phase.scene.introFlag]);
            props.actions.travelToArea(props.phase.scene.areas[0]);
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
                props.actions.travelToArea(props.phase.area);
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

type GamePhase =
  | { name: 'scene-intro'; scene: Scene }
  | { name: 'in-area'; scene: Scene; area: Area }
  | {
      name: 'in-interaction';
      scene: Scene;
      area: Area;
      interaction: Interaction;
    };

export function App() {
  const state = useMemo(() => {
    const state = new GameState();
    console.log(state);
    return state;
  }, []);
  const [journal, setJournal] = useState<Array<JournalFlag>>([]);
  const [phase, setPhase] = useState<GamePhase>({
    name: 'scene-intro',
    scene: atTheDocks,
  });

  const actions: Actions = {
    travelToArea: useCallback((area) => {
      setPhase((prev) => ({ name: 'in-area', scene: prev.scene, area }));
    }, []),
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

  return (
    <div className={styles.root}>
      <div className={`${styles.art} ${styles.panel}`}>
        <img src={phase.scene.art} style={{ width: '100%' }} />
      </div>
      <div className={`${styles.text} ${styles.panel}`}>
        {phase.name === 'scene-intro' ? (
          <SceneIntro phase={phase} actions={actions} />
        ) : phase.name === 'in-area' ? (
          <InArea phase={phase} state={state} actions={actions} />
        ) : (
          <InInteraction phase={phase} state={state} actions={actions} />
        )}
      </div>
      <div className={`${styles.status} ${styles.panel}`}>
        {phase.scene.date}
      </div>
      <div className={`${styles.journal} ${styles.panel}`}>
        <Typewriter
          content={journal.flatMap((flag) => [
            { description: flag.description },
            { description: desc`\n\n` },
          ])}
        />
      </div>
    </div>
  );
}
