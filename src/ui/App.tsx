import { useCallback, useMemo, useState } from 'react';
import { atTheDocks } from '../content/scene-1';
import {
  Area,
  GameState,
  Interaction,
  JournalFlag,
  Scene,
  desc,
} from '../engine/model';
import styles from './App.module.css';
import { Describe, PlayerOptions } from './utils';

export type Actions = {
  startInteraction: (area: Area, interaction: Interaction) => void;
  travelToArea: (area: Area) => void;
  addJournalFlags: (flags: Array<JournalFlag>) => void;
};

function SceneIntro(props: {
  phase: Extract<GamePhase, { name: 'scene-intro' }>;
  actions: Actions;
}) {
  return (
    <>
      <Describe content={props.phase.scene.description} />
      <PlayerOptions
        actions={[
          {
            description: desc`Continue`,
            onClick: () => {
              props.actions.addJournalFlags([props.phase.scene.flag]);
              props.actions.travelToArea(props.phase.scene.areas[0]);
            },
          },
        ]}
      />
    </>
  );
}

function InArea(props: {
  phase: Extract<GamePhase, { name: 'in-area' }>;
  state: GameState;
  actions: Actions;
}) {
  return (
    <>
      <Describe content={props.phase.area.herePrompt} />
      {props.phase.area.interactions
        .filter((int) => props.state.isInteractionAvailable(int))
        .map((int, i) => (
          <Describe
            key={`interaction ${i}`}
            content={int.start.prompt}
            action={() => props.actions.startInteraction(props.phase.area, int)}
          />
        ))}
      {props.phase.scene.areas
        .filter((area) => area !== props.phase.area)
        .map((area, i) => (
          <Describe
            key={`area ${i}`}
            content={area.travelPrompt}
            action={() => props.actions.travelToArea(area)}
          />
        ))}
    </>
  );
}

function InInteraction(props: {
  phase: Extract<GamePhase, { name: 'in-interaction' }>;
  state: GameState;
  actions: Actions;
}) {
  const [node, setNode] = useState(props.phase.interaction.start);
  const [flags, setFlags] = useState<Array<JournalFlag>>([]);
  const actions = useMemo(
    () =>
      node.continue
        .map((key) => props.phase.interaction[key])
        .filter((option) => !option || props.state.isOptionAvailable(option))
        .map((option) => {
          if (option) {
            return {
              description: option.prompt,
              onClick: () => {
                setFlags((flags) => [...flags, ...(option.setsFlags ?? [])]);
                setNode(option);
              },
            };
          } else {
            return {
              description: desc`Done.`,
              onClick: () => {
                props.actions.addJournalFlags(flags);
                props.actions.travelToArea(props.phase.area);
              },
            };
          }
        }),
    [node, flags, props],
  );

  return (
    <>
      <Describe content={node.description} />
      <PlayerOptions actions={actions} />
    </>
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
      <div className={styles.art}></div>
      <div className={styles.text}>
        {phase.name === 'scene-intro' ? (
          <SceneIntro phase={phase} actions={actions} />
        ) : phase.name === 'in-area' ? (
          <InArea phase={phase} state={state} actions={actions} />
        ) : (
          <InInteraction phase={phase} state={state} actions={actions} />
        )}
      </div>
      <div className={styles.status}></div>
      <div className={styles.menu}></div>
      <div className={styles.menuContent}>
        <ul>
          {journal.map((flag, i) => (
            <li key={i}>
              <Describe content={flag.description} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
