import { Scene, desc, flag, interaction } from '../engine/model';
import shipArt from '../assets/ship.png';
import templeMusic from '../assets/audio/06-temple.mp3';
import { grimoireKey } from './scene-3';

export const death = flag``;

export const childCalmed = flag``;

export const childTantrum = flag``;

export const struggled = flag``;

export const pled = flag``;

export const toldTale = flag``;

export const temple = new Scene({
  date: 'Day 51...?',
  art: shipArt,
  music: templeMusic,
  intro: [
    {
      description: desc`“You now stand before the Great Precipice. We shall restore your eyes, so you may see. An ancient power reborn lies before you. Together, we shall raise it, care for it, nurture it lovingly, so it may grow into its beautiful, Adult form, and usher humanity to her Ascension.”
      
      Your blindfold is removed, and finally, you see.`,
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
    herePrompt: desc`You are in an enormous stone cavern, perhaps the size of the entire dock itself back at Port.`,
    travelPrompt: desc`There is much to be seen in the ${'temple'}.`,
    interactions: [
      interaction({
        start: {
          prompt: desc`In the stone of the cave walls are reliefs carved in the shape of tentacles, kelp, and vines, wrapped around ${'something'}.`,
          description: desc`Upon closer inspection, you realize the kelp and vines are wrapped and writhe around human faces.`,
          continue: ['face'],
        },
        face: {
          prompt: desc`Whose faces are they?`,
          description: desc`They look rather like yours.`,
          continue: ['end'],
        },
      }),
      interaction({
        start: {
          prompt: desc`In the center of the chamber is a large, ${'egg'}-like monstrosity.`,
          description: desc`It is twice the size of your ship. It is suspended from the ceiling, held in place solely by the surface tension of an immense volume of blue-green placentic ichor. Through the thick, barely translucent membrane, you can make out the shape of the being inside. Below it lies a bellowing pit, filled with thick, fluorescent liquid.`,
          continue: ['breath'],
        },
        breath: {
          prompt: desc`There's something about it.`,
          description: desc`You listen closer.
          
          It breathes.`,
          continue: ['end'],
        },
      }),
      interaction({
        start: {
          prompt: desc`You must ${'find a way out'}.`,
          description: desc`You and your allies are bound and gagged. The Scholar and Expedition Leader are in complete control of the situation.
          
          What do you do?`,
          continue: ['struggle', 'plead', 'commune'],
        },
        struggle: {
          setsFlags: [struggled],
          prompt: desc`Try to break free.`,
          description: desc`You struggle against your binds. They’re too tight.`,
          continue: ['plead', 'commune'],
        },
        plead: {
          prompt: desc`Plead to be let go.`,
          description: desc`You struggle against your binds, and grunt audibly. You look around frantically, appealing for any shred of sympathy. Who do you look to?`,
          continue: ['pleadScholar', 'pleadLeader', 'pleadFM', 'pleadSeamen', 'pleadLookout', 'pleadRep', 'pleadRepKey', 'pleadLastResort', 'somethingElse'],
        },
        pleadScholar: {
          setsFlags: [pled],
          prompt: desc``,
          description: desc``,
          continue: [],
        },
        pleadLeader: {
          setsFlags: [pled],
          prompt: desc``,
          description: desc``,
          continue: [],
        },
        pleadFM: {
          setsFlags: [pled],
          prompt: desc``,
          description: desc``,
          continue: [],
        },
        pleadSeamen: {
          setsFlags: [pled],
          prompt: desc``,
          description: desc``,
          continue: [],
        },
        pleadLookout: {
          setsFlags: [pled],
          prompt: desc``,
          description: desc``,
          continue: [],
        },
        pleadRep: {
          setsFlags: [pled],
          prompt: desc``,
          description: desc``,
          continue: [],
        },
        pleadRepKey: {
          setsFlags: [pled],
          prompt: desc``,
          description: desc``,
          continue: [],
        },
        pleadLastResort: {
          isAvailable: state => {
            return !state.hasFlag(grimoireKey) && (state.hasFlag(struggled) || state.hasFlag(pled));
          },
          setsFlags: [death],
          prompt: desc`Do something... anything...!`,
          description: desc``,
          continue: ['end-scene'],
        },
        somethingElse: {
          prompt: desc`There must be something else.`,
          description: desc`You decide there must be some other way.`,
          continue: ['struggle', 'plead', 'commune']
        },
        commune: {
          isAvailable: state => {
            return state.hasFlag(grimoireKey) && (state.hasFlag(struggled) || state.hasFlag(pled));
          },
          prompt: desc`(You there... yes, you...)`,
          description: desc`What?
          
          (Aye... you there... won't you... tell me a story...)`,
          continue: ['communeStory', 'communeWho'],
        },
        communeStory: {
          prompt: desc`What kind of story?`,
          description: desc`(Mm… I want… a tale about your world…)
          
          What kind of story will you tell the Child?`,
          continue: ['storyAdventure', 'storyBetray', 'storyLove', 'storyRebirth', 'refuseStory'],
        },
        communeWho: {
          prompt: desc`Who are you?`,
          description: desc`(Please… oh pretty please…)

          You know Who this is. Your eyes fall upon the egg.`,
          continue: ['communeStory'],
        },
        storyAdventure: {
          setsFlags: [toldTale],
          prompt: desc`One of adventure.`,
          description: desc`Time seems to fall still. The struggle around you dulls.

          You tell the Child a tale of adventure on the high seas. Of pirates, treasure, and new lands to explore.
          
          The Child shudders with excitement. You feel your own mind tingling; your heart racing.`,
          continue: ['postStory'],
        },
        storyBetray: {
          setsFlags: [toldTale],
          prompt: desc`One of betrayal.`,
          description: desc`Time seems to fall still. The struggle around you dulls.

          You tell the Child a tale of two friends who grew up together and saw the world together. But then one became jealous of the other’s lover, and stabbed them in the back.
          
          The Child shudders with despair. You feel your own heart sinking; your stomach heavy and hardening.`,
          continue: ['postStory'],
        },
        storyLove: {
          setsFlags: [toldTale],
          prompt: desc`One of love.`,
          description: desc`Time seems to fall still. The struggle around you dulls.

          You tell the Child a tale of two young lovers who felt a spark at their first meeting. Their lives and families kept them apart, however, until much later in life, where they reunited at old age and lived briefly together before they died.
          
          The Child croons. You feel your heart warm and flutter with bittersweetness.`,
          continue: ['postStory'],
        },
        storyRebirth: {
          setsFlags: [toldTale],
          prompt: desc`One of rebirth.`,
          description: desc`Time seems to fall still. The struggle around you dulls.

          You tell the Child about your past, and how you came to be here to find a new life. How this life--this here--was not you were expecting at all.
          
          The Child burbles and giggles. You feel butterflies in your stomach. What a curious and unexpected tale.`,
          continue: ['postStory'],
        },
        refuseStory: {
          setsFlags: [childTantrum],
          prompt: desc`I have no time for tales! You’re killing us!`,
          description: desc`The Child begins to wail. Your heart feels as if it’ll explode with sadness. The cave floor rumbles around you.

          (...w-w…ah! All I wanted was… a story-tale! W…w…)`,
          continue: ['end-scene'],
        },
        postStory: {
          prompt: desc`Observe your emotions.`,
          description: desc`After a while, both you and the Child seem to settle down.
          
          (What a lovely emotion that was… a lovely tale…)

          (I’m very… tired… they tell me to wake… but must I? I’d simply rather… hear these tales…)`,
          continue: ['shouldWake', 'shouldSleep'],
        },
        shouldWake: {
          prompt: desc`You should listen to them. You should wake up.`,
          description: desc`(But why… simply stay here… tell me your stories…)`,
          continue: ['shouldWake2', 'changeMindWake'],
        },
        shouldWake2: {
          setsFlags: [childTantrum],
          prompt: desc`Are you a child or a god? Who could possibly want to stay here forever?`,
          description: desc`The fetus shivers with anger. You feel your bones stirring.
          
          (No…! No, no, no! It’s… not… fair!)`,
          continue: ['end-scene'],
        },
        changeMindWake: {
          prompt: desc`Well… maybe you don’t have to wake.`,
          description: desc`(Yes… that’s right… what if I simply wish to sleep… forever…)

          The two of You continue to observe each other.
          
          (I wish to sleep… but… but not alone… it’s hard to sleep… without these tales…)`,
          continue: ['whoTellsTales', 'stayTellTales'],
        },
        shouldSleep: {
          prompt: desc``,
          description: desc`(Yes… that’s right… what if I simply wish to sleep… forever…)

          The two of You continue to observe each other.
          
          (I wish to sleep… but… but not alone… it’s hard to sleep… without these tales…)`,
          continue: ['whoTellsTales', 'stayTellTales'],
        },
        whoTellsTales: {
          prompt: desc`Who usually tells you tales?`,
          description: desc`(Hm… well… just before you… I heard a tale… a carpenter… who worked on a sailing ship… much like yours…)`,
          continue: ['whoTellsTales2'],
        },
        whoTellsTales2: {
          prompt: desc`The carpenter? The man who just fell into the pit?`,
          description: desc`(Hmmm… that is how his tale ended… a rush of colors and wind, followed by cracks and darkness...)
          
          (Funny you also should have heard this tale before…)`,
          continue: ['stayTellTales'],
        },
        stayTellTales: {
          prompt: desc`I suppose I can tell you more tales.`,
          description: desc`(Truly…? You’ll stay…? And tell me these tales… forever?)`,
          continue: ['notForever', 'yesForever'],
        },
        notForever: {
          prompt: desc`Well, not forever.`,
          description: desc`Incredulity. (But… but why not…? You told me… that you’d… tell me… tales…!)`,
          continue: ['notForever2', 'fineForever'],
        },
        notForever2: {},
        fineForever: {},
        yesForever: {
          setsFlags: [childCalmed],
          prompt: desc`Yes. I’ll tell you tales forever.`,
          description: desc`Euphoria. (Yes…! Yes…! Tales…! Forever…!)`,
          continue: ['end-scene'],
        },
        template: {
          prompt: desc``,
          description: desc``,
          continue: [],
        },
      })
    ],
  }],
});
