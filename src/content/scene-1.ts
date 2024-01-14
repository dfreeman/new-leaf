import { Scene, desc, flag, interaction } from '../engine/model';
import shipArt from '../assets/ship.png';

export const seenDocsIntro = flag`
  Today is my first day working as a crewmate on this ship.
  My job today is to check on the passengers and crew to make
  sure everyone's safely aboard.
`;

export const metCaptainFirstMate = flag`
  I spoke with the Captain and met the First Mate today. The
  Captain is energetic and optimistic, the First Mate seems more dour.

  We are heading to the Lost Isles to retrieve lost relics for the
  Merchant Consortium. Our crew will split the rest of the bounty.

  The Captain and First Mate may have disagreed over whether to even
  take the Consortium job in the first place.
`;

export const firstMateScary = flag`
  When meeting the First Mate I noticed he carries a whip with him.
  He must be in charge of disciplining the crew...
`;

export const embarrassRep = flag`
  The Merchant Representative seems to have a lot of pride in his
  position at the Consortium. I'm not so sure if that pride is
  well-placed.
`;

export const seamanTattoo = flag`
  I helped the Consortium-hired crewmen with loading their cargo onto
  the ship. They seem less than impressed with the Merchant Representative
  who's been bossing them around.

  Based on their scars they seem to have gone through some rough times.
`;

export const atTheDocks = new Scene({
  introFlag: seenDocsIntro,
  date: 'Day 1',
  art: shipArt,
  description: desc`
    Today is your first day as part of the crew.

    You came to the Port to start a new life. After a few months of
    working here and there as a day laborer, the Captain approached you.
    
    She said you’ve gained a reputation for yourself with the folk about
    Port. You’re reliable on the job. Which is all she needs, really.
    Whatever you do off-hours is none of her business. Why’d you come here?
    To start a new life? How about a new life at sea? Are we the Navy?
    Gods, no. Pirates? Closer. We’re mercenaries. Take jobs where we can get ‘em.
    
    You agreed.
    
    You and the crew set sail today. The weather is fair. The sun shines,
    a wind ambles the clouds across the sky, and seagulls bicker over a cod’s head
    on a nearby barnacled dock.
    
    Today your job is to ensure everyone who’s supposed to be aboard, makes it.

  `,
  areas: [
    {
      name: 'dock',
      herePrompt: desc`You are standing on the dock.`,
      travelPrompt: desc`
        You can still see several people holding conversations on ${'the dock'}.
      `,
      interactions: [
        interaction({
          start: {
            prompt: desc`
              From here, you see ${'the Captain'} discussing something with
              someone at the ${'helm'}.
            `,
            description: desc`
              You make your way to the helm. The Captain is standing by the ship’s wheel,
              speaking with a hardened-looking man, skin leathery from exposure to the elements.

              “You know how I feel about them merchant-types, Cap,” the leathery man says.
              
              “Sure, they’re a pain. But they’re worth their weight in coin.”
              
              “You so sure about that? To me sounds like these Lost Isles should’ve stayed lost.”
              
              “Ah, where’s your sense of adventure mate?” the Captain ribs. “You getting too old
              for this shite?”
              
              “I’m getting sick of wasting the time,” he responds. He looks over and notes your
              presence. “Seems we’ve got a visitor, Cap.”            
            `,
            continue: ['visitor'],
          },
          visitor: {
            prompt: desc`Continue`,
            description: desc`
              The Captain nods at you with acknowledgement. “Ahoy there--they’re crew, not guest.
              Just hired last week. Needed a few more hands on deck and the men at Port had good
              things to say. Ain’t that right?”
            `,
            continue: ['cheeky', 'modest'],
          },
          cheeky: {
            prompt: desc`“That’s right. And I’m as good as they say!”`,
            description: desc`
              The leathery man snorts. “Cheeky one, this.”

              “There’s the attitude. You get the brief? We’re heading out to the Lost Isles,
              sailor--Merchant Consortium hired us to go retrieve some fancy loot there.
              Apparently they’re looking for one or two big items and the rest of the cut’s
              for us. Not a bad deal, is it?”

              She pauses. “Ah, but mind me manners. This here is the First Mate. If I’m not
              around, you listen to what he says. But careful, he’s not nearly as understanding
              as I am.” She smiles.
              
              “Yer too soft on these curs.” The First Mate spits. He looks at you.
              “Shouldn’t you be off rounding up the passengers? Get to it.”            
            `,
            continue: ['agree', 'whip'],
          },
          modest: {
            prompt: desc`“I’m just here to get the job done, Captain.”`,
            description: desc`
              The leathery man gives you a short, acknowledging nod.

              “There’s the attitude. You get the brief? We’re heading out to the Lost Isles,
              sailor--Merchant Consortium hired us to go retrieve some fancy loot there.
              Apparently they’re looking for one or two big items and the rest of the cut’s
              for us. Not a bad deal, is it?”

              She pauses. “Ah, but mind me manners. This here is the First Mate. If I’m not
              around, you listen to what he says. But careful, he’s not nearly as understanding
              as I am.” She smiles.
              
              “Yer too soft on these curs.” The First Mate spits. He looks at you.
              “Shouldn’t you be off rounding up the passengers? Get to it.”            
            `,
            continue: ['agree', 'whip'],
          },
          agree: {
            prompt: desc`“Aye, sir.”`,
            description: desc`You return to the dock.`,
            setsFlags: [metCaptainFirstMate],
            continue: ['end'],
          },
          whip: {
            prompt: desc`“Should I be listening to him even if you’re around?”`,
            description: desc`
              The Captain laughs. “What, you spend time in Port lifting legal docs?”

              “Loopholes are for the noose, new blood,” the First Mate groans,
              turning towards you. “An’ cheek merits the whip. Get to work.” As
              he shifts, you notice a coiled whip attached to his belt.

              You decide to get to work and return to the dock.            
            `,
            setsFlags: [metCaptainFirstMate, firstMateScary],
            continue: ['end'],
          },
        }),
        interaction({
          start: {
            prompt: desc`
              A ${'frivolously dressed man'} is yapping orders at
              four ${'surly-looking men'}, by a set of ${'heavy crates'}.
            `,
            description: desc`
              You approach a group of men who are preparing to load several heavy-looking
              crates onto the ship. Four of them are quite burly and sweaty, wearing
              matching, somewhat plain and worn uniforms. The last one is wearing a
              frilly blouse underneath a pressed and embroidered jacket. His pants are
              stiff and starched, and he wears dangerously white long socks tucked neatly
              into shiny, buckled shoes.

              The frivolous man notices you and speaks first. “Ah, finally! Help from the
              crew. Here, these sorry lots are so useless. Why don’t you get your friends
              down here to come carry these crates up hither.”
              
              The four haulers don’t seem too pleased with this man’s presence.            
            `,
            continue: ['checkPassengers', 'muscle'],
          },
          checkPassengers: {
            prompt: desc`“I’m here to check in passengers first. Are you all on the list?”`,
            description: desc`
              Your question flusters him. “Gods, don’t you know who we are? I’m the
              Representative from the Merchant’s Consortium. We are the ones who
              commissioned this ship and attained your precious permit to set sail
              for the Lost Isles!”

              He pauses, noticing the flush in his face, then calms back down. He fixes his
              collar, then gestures at the men. “And ah. These are our hired help.”             
            `,
            continue: ['bigShot', 'apologies'],
          },
          muscle: {
            prompt: desc`“No problem at all. I’ll show this lot a thing or two about muscle!”`,
            description: desc`
              “Ah, we love a sense of initiative! Well, chop chop then! See you aboard!

              Without further ado, you help load the cargo.            
            `,
            continue: ['end'],
          },
          bigShot: {
            prompt: desc`“You some kind of big shot up at the Consortium?”`,
            description: desc`
              He looks flustered. “W-well, I. Of course! I am the Assistant Head of the
              Council!”
              
              You notice a brooch pinned to his chest. Under the Merchant Consortium’s
              logo is the title “Assistant to the Head Council.”            
            `,
            setsFlags: [embarrassRep],
            continue: ['bigAssistant', 'sayNothing'],
          },
          apologies: {
            prompt: desc`“Ah. My apologies.” Help load the cargo.`,
            description: desc`
              “Hmph. V-very good then.” The Representative stands aside and straightens
              his clothing.

              Without further ado, you help load the cargo aboard.
            `,
            continue: ['end'],
          },
          bigAssistant: {
            prompt: desc`“Aye there, Big Assistant.” Help load the cargo.`,
            description: desc`
              The Representative flushes. One of the men gives you a pat on the back as
              you help load the crates.

              As he moves his hand back, you note a curiously shaped, raised scar on the
              seaman’s arm. He notices you looking and gives you an acknowledging nod.
              “Work accident,” he grunts, before continuing to move the cargo.
            `,
            setsFlags: [seamanTattoo],
            continue: ['end'],
          },
          sayNothing: {
            prompt: desc`Say nothing and help load the cargo.`,
            description: desc`Without further ado, you help load the cargo aboard.`,
            continue: ['end'],
          },
        }),
      ],
    },
    {
      name: 'deck',
      herePrompt: desc`
        You make your way onto the deck. From here you see several crewmates busily
        getting the ship ready to sail.
      `,
      travelPrompt: desc`
        On ${'deck'}, you see other crew mates getting the ship sea-ready.
      `,
      interactions: [],
    },
  ],
});
