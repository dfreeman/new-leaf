import { Scene, desc, interaction } from '../engine/model';
import shipArt from '../assets/ship.png';
import mutinyMusic from '../assets/audio/05-mutiny.mp3';
import { captainKey, repKey } from './scene-3';

export const mutinyScene = new Scene({
  date: 'Day 52?',
  art: shipArt,
  music: mutinyMusic,
  intro: [
    {
      description: desc`
      You awaken above deck. It’s day time, and the sky is overcast.

      You are bound in rope and gagged. In front of you is the Captain, who is also tied up and leashed to you by rope. You turn your head behind you. Each and every original crew member of this ship is tied together on this rope.
      
      Near the back of the line you see the Bosun.
      `,
    },
    {
      shouldDisplay: state => state.hasFlag(captainKey),
      description: desc`
      The Bosun's eyes narrow and he gestures his head forward. You look in front of you and catch sight of the Captain nervously twitching her wrists. Upon closer inspection, you see the tiniest glint of a concealed, folding blade poking out of the heel of her shoe. It appears to be jammed in an awkward angle.
      `,
    },
    {
      description: desc`
      Towering above you are the four Consortium seamen. Up ahead you see the Expedition Leader, Scholar and First Mate discussing something while looking out to shore. Behind them the Representative and Lookout kick about their feet, nervously.
      `,
    },
    {
      shouldDisplay: state => state.hasFlag(repKey),
      description: desc`
      You and the Representative briefly make eye contact. He quickly turns away.
      `,
    },
    {
      description: desc`
      The Expedition Leader and Scholar finish their discussion, and the First Mate shouts an order to the Seamen. One-by-one, they blindfold you each.
      `,
    },
    {
      shouldDisplay: state => state.hasFlag(captainKey),
      description: desc`
      As the seamen approach you, you pretend to struggle and stand. As they shove you to the ground, you kick your foot into the heel of the Captain’s shoe, hopefully unjambing the blade.

      “Fecking idiot,” you hear the Seaman say.
      `,
    },
    {
      description: desc`
      Once they're done, you feel yourself getting dragged up to a standing position by the neck, and soon you are all shoved forward, dragged single file off the boat and onto the sands of the beach.
      `,
    },
  ],
  outro: [
    {
      description: desc`
      “Stop,” you hear the Scholar say, her voice echoing throughout the space. You hear her move in front of your crew.
      `,
    },
  ],
  areas: [{
    name: 'blindfolded',
    herePrompt: desc`
    You're blindfolded.
    `,
    travelPrompt: desc`You're ${'blindfolded'}.`,
    interactions: [
      interaction({
        start: {
          prompt: desc`From here, you may only move ${'forward'}.`,
          description: desc`
          You keep pace with the group. Your boots sink into the sand; you feel the sand shift into earth. You feel the brush encroaching higher on your body, you begin to feel tree branches and leaves whip and slice past your face. Eventually you feel the ground under your feet harden to stone.
          
          You are guided clumsily down a set of uneven stairs. The sound of your heels click and echo around you. The whitish glow of the sun’s light that haloed your blindfold fades into darkness.
          `,
          continue: ['march'],
        },
        march: {
          prompt: desc`Press on, into the unknown.`,
          description: desc`
          As if there is any other choice. As you delve deeper into the abyss, the shuffling, grunting, and breathing of your crewmates quieten. You catch yourself holding your breath, to hear. To listen. To the rhythmic sound of… the tide? No… it is not the tide. It is breath.
          
          As you march forward, you begin to feel a current of wind at your legs. It comes in waves, alternating between slightly lifting you off your feet and suctioning you to the stone. It is not a pleasant, sea breeze. It is a thick, moist breath, salted, and slimed.
      
          The echoes of your footsteps were once quiet and gradual, but have become grander, and grander. You and your crew mates march in unison. Together, you’ve become an funerary procession.

          Dead men walking.
          `,
          continue: ['end-scene'],
        },
      }),
    ],
  }],
});
