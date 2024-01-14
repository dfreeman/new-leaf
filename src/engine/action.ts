// import { distance } from 'fastest-levenshtein';
// import { Area, Description, Interaction, Scene } from './model';

// const stopWords = ['at', 'the', 'a', 'to'];

// function words(phrase: string) {
//   return phrase
//     .trim()
//     .toLowerCase()
//     .split(/\s+/g)
//     .filter((word) => !stopWords.includes(word));
// }

// function normalize(phrase: string) {
//   return words(phrase).join(' ');
// }

// function interactionRefs(interaction: Interaction): Array<string> {
//   return [...(interaction.prompt?.refs ?? []), ...interaction.description.refs];
// }

// function findArea(scene: Scene, rawTarget: string): Area | undefined {
//   const target = normalize(rawTarget);
//   const best = { distance: Infinity, area: scene.areas[0] };
//   for (const area of scene.areas) {
//     for (const ref of area.travelPrompt.refs) {
//       const dist = distance(target, normalize(ref));
//       if (dist < best.distance) {
//         best.distance = dist;
//         best.area = area;
//       }
//     }
//   }

//   if (best.distance < target.length / 1.5) {
//     return best.area;
//   }
// }

// function findInteraction(
//   area: Area,
//   rawTarget: string,
// ): Interaction | undefined {
//   const target = normalize(rawTarget);
//   const refs = area.interactions.flatMap((interaction) =>
//     interactionRefs(interaction).map((ref) => ({ interaction, ref })),
//   );
//   const best = { distance: Infinity, interaction: refs[0].interaction };
//   for (const { interaction, ref } of refs) {
//     const dist = distance(target, normalize(ref));
//     if (dist < best.distance) {
//       best.distance = dist;
//       best.interaction = interaction;
//     }
//   }

//   if (best.distance < target.length / 1.5) {
//     return best.interaction;
//   }
// }

// export type ActionResult =
//   | { kind: 'success'; content: Description }
//   | { kind: 'error'; message: string };

// export function performAction(
//   scene: Scene,
//   area: Area,
//   input: string,
// ): ActionResult {
//   const [verb, ...targetWords] = words(input);
//   const targetPhrase = targetWords.join(' ');
//   if (verb === 'go') {
//     const targetArea = findArea(scene, targetPhrase);
//     if (targetArea) {
//       // change areas
//     } else {
//       // trigger interaction, if applicable
//     }
//     return { kind: 'error', message: 'Dan still needs to implement `go`' };
//   } else if (verb === 'look') {
//     const target = findInteraction(area, targetPhrase);
//     if (target) {
//       return { kind: 'success', content: target.description };
//     } else {
//       return { kind: 'error', message: `Couldn't find '${targetPhrase}'` };
//     }
//   } else {
//     return { kind: 'error', message: `I don't know how to '${verb}'.` };
//   }
// }
