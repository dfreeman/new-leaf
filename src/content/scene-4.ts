import { Scene, desc, flag, interaction } from '../engine/model';
import shipArt from '../assets/ship.png';
import nightMusic from '../assets/audio/05-mutiny.mp3';
// @TODO might hack this into two scenes so both songs can play

export const seenMysteryNightIntro = flag``;

export const mysteryNight = new Scene({
  date: 'Day 53',
  art: shipArt,
  music: nightMusic,
  intro: [
    {
      description: desc`You and the crew begin your march. You feel your boots sink into the sand; you feel the sand shift into earth. You feel the brush encroaching higher on your body, you begin to feel tree branches and leaves whip and slice past your face. Eventually you feel the ground under your feet harden to stone. You are guided clumsily down a set of uneven stairs. The sound of your heels begin to click and echo around you. The whitish glow of the sun’s light that haloed your blindfold fades into darkness.

      The shuffling, grunting, and breathing of your crewmates quieten. You catch yourself holding your breath, to hear. To listen. To the rhythmic sound of… the tide? No… it is not the tide. It is breath.
      
      As you march forward, you begin to feel a current of wind at your legs. It comes in waves, alternating between slightly lifting you off your feet and suctioning you to the stone. It is not a pleasant, sea breeze. It is a thick, moist breath, salted, and slimed.
      
      The echoes of your footsteps were once quiet and gradual, but have become grander, and grander. You and your crew mates march in unison. Together, you’ve become an orchestral procession.
      
      “Stop,” you hear the Scholar say, her voice echoing throughout the space. You hear her move in front of your crew.
      
      “You now stand before the Great Precipice. We shall restore your eyes, so you may see. An ancient power reborn lies before you. Together, we shall raise it, care for it, nurture it lovingly, so it may grow into its beautiful, Adult form, and usher humanity to her Ascension.”
      
      Your blindfold is removed, and you see.`,
    },
    {
      description: desc`You are in an enormous stone cavern, perhaps the size of the entire dock itself back at Port. In the stone of the cave walls are reliefs carved in the shape of tentacles, kelp, and vines, wrapped around many faces. Human faces. But not quite. [if scene3GrimoireKey] Faces like yours. [/if]

      In the center of the chamber is a large… egg. It is twice the size of your ship. It is suspended from the ceiling, held in place solely by the surface tension of an enormous volume of briny, blue-green placentic ichor. Through the thick, translucent membrane, you can barely make out the shape of the being inside. Below lies a bellowing pit, filled with thick, fluorescent liquid.
      
      It breathes.`,
    },
    {
      description: desc`“We shall now begin the sacrifice,” the Scholar says. “The ancient one must feed, so it may grow strong, be born unto this world, and bring forth our salvation.”

      The seamen lines you and the crew before the egg, Captain in front. Beginning with the back of the line, they cut the carpenter off from the rest of the rope. He struggles and begins to stumble away, but two seamen grasp him firmly by the arms and drag him to the front, and unto the precipice. 
      
      They shove him into the waters below.
      
      His screams are muffled. He falls what must be hundreds of feet into the depths. Instead of a large splash, you hear his body slap into the viscous liquid below. Sharp cracking, snapping and squelching sounds echo throughout the chamber. Followed by the sound of a slow suction, and a sickening bubbling as a vacuum closes over.
      
      They cut loose the next person in line.`,
    }
  ],
  outro: [
    {
      description: desc``,
    }
  ],
  areas: [{
    name: 'temple',
    herePrompt: desc`You are in the temple of the Ancient One.`,
    travelPrompt: desc`There is much to be seen in the ${'temple'}.`,
    interactions: [
      interaction({
        start: {
          prompt: desc``,
          description: desc``,
          continue: [],
        },
      }),
    ],
  }],
});
