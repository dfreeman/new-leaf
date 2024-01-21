import { Scene, desc, flag, interaction } from '../engine/model';
import shipArt from '../assets/ending.png';
import templeMusic from '../assets/audio/07-ending.mp3';
import { childCalmed } from './scene-5';
import { captainKey, repKey } from './scene-3';

export const allSaved = flag``;

export const sacCaptain = flag``;

export const sacBosun = flag``;

export const justWatched = flag``;

export default new Scene({
  date: 'Date Unknown.',
  art: shipArt,
  music: templeMusic,
  intro: [
    {
      shouldDisplay: state => !state.hasFlag(childCalmed),
      description: desc`
      In a blur, you and the crew make it back to the ship and set sail. The rumbling of the island sends hairline fractures through the hull and the nearby seas into a frenzy, but there is no other choice.

      You make your way out into the open sea and watch as the sea swallows the island whole. A low murmuring erupts from the deep below, as a strange whirlpool begins to form where the island once was. You watch as the egg, ever so slowly, begins to emerge from the water.
      `,
    },
    {
      shouldDisplay: state => state.hasFlag(childCalmed),
      description: desc`
      Your sense of your own body begins to fade. You feel your consciousness leave your mortal coil, and settle by the egg. The egg is warm, and envelops you. If your purpose was to care for the Child, at least physically, this feels like the inverse.
      `,
    },
  ],
  outro: [
    {
      shouldDisplay: state => !state.hasFlag(childCalmed) && state.hasFlag(captainKey) && state.hasFlag(repKey),
      description: desc`    
      Besides you, you see the Captain, the Bosun, the Representative, and what’s left of your skeleton crew. Perhaps together you’ll be able to warn the world of what’s to come…
      `,
    },
    {
      shouldDisplay: state => !state.hasFlag(childCalmed) && (!state.hasFlag(captainKey) || !state.hasFlag(repKey)),
      description: desc`
      You look around you on the ship. Neither the Captain or the Bosun made it. Barely anyone is left.
      
      You’ll just have to hope for the best that your word will mean a thing as you try to warn the world of what’s to come…
      `,
    },
    {
      shouldDisplay: state => state.hasFlag(childCalmed),
      description: desc`
      You watch as the cavern begins to rumble. You watch as, one-by-one, men fall into the pit, their tales absorbed by the Child.
      `,
    },
    {
      shouldDisplay: state => state.hasFlag(allSaved),
      description: desc` Inexplicably, your crew seems to dodge each obstacle.`,
    },
    {
      shouldDisplay: state => state.hasFlag(justWatched),
      description: desc`
      You watch as the cavern begins to rumble. You watch as, one-by-one, men fall into the pit, their tales absorbed by the Child.
          
      One man escapes the cavern, scrambling towards the ship. From here, he is miniscule. Just another grain of sand on the beach.
      
      He makes his way to the ship and sets sail off the island. How far he'll get alone is a tale for another time. A short one, most likely.
      
      And with that, you and the Child together watch as the island, the temple, your bodies, and all, are consumed by the ocean.
      `,
    }, {
      shouldDisplay: state => {
        return !state.hasFlag(justWatched) && state.hasFlag(sacBosun);
      },
      description: desc`
      You watch as the survivors make their way out of the temple, scrambling towards the ship. From here, they seem so far away, like ants.

      The skeleton crew makes their way to the ship and sets sail off the island. You watch as the island, the temple, your body, all of it, is consumed by the ocean.
      
      You watch as the Captain stares out from the bow of the ship, and wonder what sort of tale she’ll bring back to Port.
      `,
    }, {
      shouldDisplay: state => {
        return !state.hasFlag(justWatched) && state.hasFlag(sacCaptain);
      },
      description: desc`
      You watch as the survivors make their way out of the temple, scrambling towards the ship. From here, they seem so far away, like ants.

      The skeleton crew makes their way to the ship and sets sail off the island. You watch as the island, the temple, your body, all of it, is consumed by the ocean.
      
      You watch as the Bosun stares out from the bow of the ship, and wonder what sort of tale he’ll bring back to Port.
      `,
    }, {
      shouldDisplay: state => {
        return !state.hasFlag(justWatched) && state.hasFlag(allSaved);
      },
      description: desc`
      You watch as the survivors make their way out of the temple, scrambling towards the ship. From here, they seem so far away, like ants.

      The skeleton crew makes their way to the ship and sets sail off the island. You watch as the island, the temple, your body, all of it, is consumed by the ocean.
      
      You watch your crew. The Captain, the Bosun, and your mates are weathered and worse for wear. Idly, you wonder what sort of tale they’ll bring back to Port.
      `,
    },
    {
      description: desc`
      THE END.
      `
    },
  ],
  areas: [{
    name: 'somewhere',
    herePrompt: desc`
    You are in the middle of Somewhere.
    `,
    travelPrompt: desc`There is much to be seen ${'here'}.`,
    interactions: [
      interaction({
        start: {
          prompt: desc`
          ${'What will you do?'}
          `,
          description: desc`Well?`,
          continue: ['settle', 'escape'],
        },
        escape: {
          isAvailable: state => !state.hasFlag(childCalmed),
          prompt: desc`Press on.`,
          description: desc`With all that you have seen here, you must continue press on, even unto the end.`,
          continue: ['end-scene'],
        },
        settle: {
          isAvailable: state => state.hasFlag(childCalmed),
          prompt: desc`Become.`,
          description: desc`Your minds settle in together.
          
          (Why don’t we… watch this tale play out… together…)

          You watch the crew from above. You see your own body slump to the ground, limp. One of the Seamen goes over to check on you.

          (What do you think… should happen?)`,
          continue: ['letThemGo', 'letThemGoAllKeys', 'justWatch'],
        },
        letThemGo: {
          isAvailable: state => {
            return !state.hasFlag(repKey) || !state.hasFlag(captainKey);
          },
          prompt: desc`We should let them go.`,
          description: desc`(Hm... what a boring tale... no, let me keep one for mine own. Who shall it be...?)`,
          continue: ['keepConsortium', 'keepScholar'],
        },
        letThemGoAllKeys: {
          setsFlags: [allSaved],
          isAvailable: state => {
            return state.hasFlag(repKey) && state.hasFlag(captainKey);
          },
          prompt: desc`We should let them go.`,
          description: desc`(Ah… so you have chosen a side in this tale…)
          
          The Child gurgles.
          
          (The four men... and the Scholar... they have long been mind... but I suppose we may save the rest...)`,
          continue: ['end-scene'],
        },
        keepConsortium: {
          prompt: desc`You can have the whole Consortium crew.`,
          description: desc`The Child gurgles with discontentment.
          
          (No... they are mine already... choose someone else... choose one of your own.)

          Who will you sacrifice to the Child?`,
          continue: ['sacCap', 'sacBosun'],
        },
        keepScholar: {
          prompt: desc`The Scholar.`,
          description: desc`The Child gurgles with discontentment.
          
          (No... she is mine already... choose someone else... choose one of your own.)

          Who will you sacrifice to the Child?`,
          continue: ['sacCap', 'sacBosun'],
        },
        sacCap: {
          setsFlags: [sacCaptain],
          prompt: desc`The Captain.`,
          description: desc`The Child giggles with delight.
          
          From afar, you watch the ground split under the Captain's feet. You watch as she desperately seeks purchase on the stone. The Bosun reaches out for her hand, but the earth rattles them apart.
          
          The Captain falls into the viscous liquid at the bottom of the pit, her bones and flesh splitting into shards. As her remains are absorbed into the fluid, memories that were not previously yours begin to flow into your mind. Memories of being a young woman, born with nothing, not even expectation. Memories of a rough childhood and life, memories of clawing your way into a reputation. Memories of a crew, of friendship, and camaraderie. Memories of betrayal. Memories of stabbing, shooting, and clawing at anyone and anything who would harm the crew. Memories of you. And memories of this.`,
          continue: ['end-scene'],
        },
        sacBosun: {
          setsFlags: [sacBosun],
          prompt: desc`The Bosun.`,
          description: desc`The Child giggles with delight.
          
          From afar, you watch the ground split under the Bosun's feet. You watch as he desperately seeks purchase on the stone. The Captain reaches out for his hand, but the earth rattles them apart.
          
          The Bosun falls into the viscous liquid at the bottom of the pit, his bones and flesh splitting into shards. As his remains are absorbed into the fluid, memories that were not previously yours begin to flow into your mind. Memories of being a young man, born in Port. Memories of a rough childhood and life, memories of first forays into piracy. Memories of the Captain, pulling you from poverty. Memories of a crew, of friendship, and camaraderie. Memories of you. And memories of this.`,
          continue: ['end-scene'],
        },
        justWatch: {
          setsFlags: [justWatched],
          prompt: desc`Let's just see what happens.`,
          description: desc`The Child gurgles with amusement.
          
          (Perhaps you are right... we shall not author the tale, simply enjoy it...)`,
          continue: ['end-scene'],
        },
      }),
    ],
  }],
});
