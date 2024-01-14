import { ReactNode } from 'react';
import { Description } from '../engine/model';
import styles from './utils.module.css';

export function Describe({
  content,
  action,
  ...props
}: {
  content: Description;
  action?: () => void;
}) {
  const segments: Array<ReactNode> = [];
  for (let i = 0; i <= content.refs.length; i++) {
    const paragraphs = content.text[i].split(/\s*\n\s*\n\s*/g);
    for (let j = 0; j < paragraphs.length; j++) {
      segments.push(
        <span key={`${i}:${j}`}>
          {paragraphs[j].replace(/\s*\n\s*/g, ' ')}
        </span>,
      );
      if (j < paragraphs.length - 1) {
        segments.push(<div className={styles.break} key={`${i}:${j}:break`} />);
      }
    }

    const ref = content.refs[i];
    if (ref) {
      if (action) {
        segments.push(
          <a
            key={`${i}:ref`}
            href="#"
            className={styles.ref}
            onClick={(e) => {
              e.preventDefault();
              action?.();
            }}
          >
            {ref}
          </a>,
        );
      } else {
        segments.push(
          <span key={`${i}:ref`} className={styles.ref}>
            {ref}
          </span>,
        );
      }
    }
  }

  return <span {...props}>{segments}</span>;
}

// function Log({
//   descriptions,
// }: {
//   descriptions: Array<Description | [Description, () => void]>;
// }) {
//   const [descIndex, setDescIndex] = useState(0);
//   const [offset, setOffset] = useState(0);
//   const leading = useMemo(
//     () => descriptions.slice(0, descIndex),
//     [descriptions, descIndex],
//   );
//   if (descIndex < descriptions.length) {
//     let total = 0;
//     let i = 0;
//     let partial = { text: [], refs: [] };
//     while (total < offset) {

//     }
//   }
// }

// function AreaLog(props: {
//   showScene: boolean;
//   scene: Scene;
//   area: Area;
//   state: GameState;
//   startInteraction: (int: Interaction) => void;
//   travelToArea: (area: Area) => void;
// }) {
//   return [
//     ...(props.showScene
//       ? [<Describe key="scene" content={props.scene.description} />]
//       : []),
//     <Describe key="here" content={props.area.herePrompt} />,
//     ...props.area.interactions
//       .filter((int) => props.state.isInteractionAvailable(int))
//       .map((int, i) => (
//         <Describe
//           key={`interaction ${i}`}
//           content={int.start.prompt}
//           action={() => props.startInteraction(int)}
//         />
//       )),
//     ...props.scene.areas
//       .filter((area) => area !== props.area)
//       .map((area, i) => (
//         <Describe
//           key={`area ${i}`}
//           content={area.travelPrompt}
//           action={() => props.travelToArea(area)}
//         />
//       )),
//   ];
// }

export function PlayerOptions(props: {
  actions: Array<{ description: Description; onClick: () => void }>;
}) {
  return (
    <div className={styles.playerOptions}>
      <ul>
        {props.actions.map((action, i) => (
          <li
            key={i}
            className={styles.playerOption}
            tabIndex={0}
            onClick={action.onClick}
          >
            <Describe content={action.description} />
          </li>
        ))}
      </ul>
    </div>
  );
}
