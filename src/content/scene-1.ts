import { Scene, desc, flag, interaction } from '../engine/model';
import shipArt from '../assets/ship.png';
import portMusic from '../assets/audio/01-port.mp3';

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

export const metLookout = flag`
  I met our youngest crewmate today, the Lookout. He acts his age,
  though seems to mean well.
`;

export const spurnedLookout = flag`
  I met a lazy young crewmate on the deck today.
`;

export const loadedCargo = flag`
  We were hired by the Merchant Consortium to go the Lost Isles. They
  have sent four additional Seamen to add to our crew. They also assigned
  an administrative Representative to watch over the proceedings.
`;

export const spurnedExpedition = flag`
  The Expedition Leader mentioned that the Lost Isles are full of danger
  and treasure, but it all seems too fantastical for my taste.
`;

export const metLeaderAndScholar = flag`
  Today I met the Expedition Leader and Scholar who were hired by the
  Merchant's Consortium. Rather than doing much at sea, their main
  responsibilities seem to begin once we make landfall on our destination.
`;

export const scholarMedic = flag`
  The Scholar seems to have some knowledge of medicine.
`;

export const affirmedScholar = flag`
  The Scholar told me that the Lost Isles have been referenced in mythological
  and history books for centuries, but have only been discovered by civilization
  recently.

  The last crew to have discovered the islands were lost, save for one man who
  returned to give his testimony. Something happened to him, though, where he
  was not sound of mind when he returned.

  The Scholar seems more than happy to share details of the Isles with me.
`;

export const snubbedScholar = flag`
  The Scholar told me that the Lost Isles have been referenced in mythological
  and history books for centuries, but have only been discovered by civilization
  recently.

  The last crews to have discovered the islands were lost, save for one man who
  returned to give his testimony. Something happened to him, though, where he was
  not sound of mind when he returned.

  This all sounds a bit too fantastical for my taste. I feel like she might be
  exaggerating.
`;

export default new Scene({
  date: 'Day 1',
  art: shipArt,
  music: portMusic,
  intro: [
    {
      setsFlags: [seenDocsIntro],
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
    },
  ],
  outro: [
    {
      description: desc`
        Once you’ve accounted for all the crew and passengers, you make your way to the Bosun
        to make your final report. With that, you all set sail for the Lost Isles...
      `,
    },
  ],
  areas: [
    {
      name: 'dock',
      herePrompt: desc`
      You are standing on the dock.
      `,
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
            setsFlags: [loadedCargo],
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
      interactions: [
        interaction({
          start: {
            prompt: desc`
              A ${'put-together man'} is announcing orders to the crowd, while keeping pretty
              busy himself.
            `,
            description: desc`
              You approach the man giving orders on deck. He takes note of your presence.

              “You there. You’re the newest crewmate, aren’t I right?”
              
              You nod.
              
              He nods curtly, arms akimbo. “Good to meet you. I’m the bosun; I keep things
              running ship-shape around here. Hope you’ll be as useful as the Port-folk say
              you are. Now don’t you got a job to do or are ye twiddlin’ your thumbs?”            
            `,
            continue: [
              'justLoadedCargo',
              'gettingPassengersAboard',
              'twiddlingThumbs',
              'youKnowALot',
              'makeMyselfBusy',
            ],
          },
          justLoadedCargo: {
            isAvailable: (state) => state.hasFlag(loadedCargo),
            prompt: desc`“I just helped load the last of the passenger’s cargo, sir.”`,
            description: desc`
              The Bosun raises his eyebrows. “Well then. We like a sailor who takes
              initiative.” He looks over at the Consortium Representative and his lackeys.
              “So. What d’ye make of that lot, hm?”
            `,
            continue: ['shrug', 'upHisAss'],
          },
          shrug: {
            prompt: desc`Shrug. “They seem like any other folk.”`,
            description: desc`
              “All I’m sayin is that fop or whatever. Seems like not much must be goin on in
              that lil head of his. Can’t imagine why they’d pick som’on like that to send
              out to sea.”

              He pauses thoughtfully, then mutters. “Well. Maybe if I needed to get rid of
              someone for a while.”

              He leans back. “In any case. Make yeself busy and we’ll set sail soon while
              the wind’s still good.”

              You nod and return to the deck.
            `,
            continue: ['end'],
          },
          upHisAss: {
            isAvailable: (state) => state.hasFlag(embarrassRep),
            prompt: desc`
              “That merchant bloke’s head seems so far up his ass it looks put on straight.
              Sir.”
            `,
            description: desc`
              The Bosun breaks out into a wide grin. “Ha! Seems the Cap was right in thinkin’
              ye’d fit right in, then.”
            `,
            continue: ['continue'],
          },
          continue: {
            prompt: desc`Continue`,
            description: desc`
              “All I’m sayin is that fop or whatever. Seems like not much must be goin on in
              that lil head of his. Can’t imagine why they’d pick som’on like that to send
              out to sea.”

              He pauses thoughtfully, then mutters. “Well. Maybe if I needed to get rid of
              someone for a while.”

              He leans back. “In any case. Make yeself busy and we’ll set sail soon while
              the wind’s still good.”

              You nod and return to the deck.
            `,
            continue: ['end'],
          },
          gettingPassengersAboard: {
            isAvailable: (state) => !state.hasFlag(loadedCargo),
            prompt: desc`“I’m off to get the passengers aboard, sir.”`,
            description: desc`
              “Then get to it, sailor.” The Bosun gives you an expectant look and you return
              to the deck.
            `,
            continue: ['end'],
          },
          twiddlingThumbs: {
            isAvailable: (state) => state.hasFlag(spurnedLookout),
            prompt: desc`“Twiddling thumbs? Like that kid over there?”`,
            description: desc`
              The Bosun sighs. “Ye talkin’ about the lookout? Captain took a shine to him for
              summat reason. Just hope he shapes up with time.” He wipes his brow.
            `,
            continue: ['youKnowALot', 'makeMyselfBusy'],
          },
          youKnowALot: {
            prompt: desc`“You seem to know a lot about who and what’s on the ship.”`,
            description: desc`
              “That’s my job, sailor. What, you want to ask me something? If so, make it quick.”
            `,
            continue: [
              'askAboutCaptain',
              'askAboutMate',
              'askAboutScholar',
              'askAboutConsortium',
              'makeMyselfBusy',
            ],
          },
          askAboutCaptain: {
            isAvailable: (state) => state.hasFlag(metCaptainFirstMate),
            prompt: desc`“What do you know about the Captain?”`,
            description: desc`
              “Well, she’s a fine Captain. A tad young for a lead, but she’s got a good head
              on her shoulders, and doesn’t rule by the rod. Sailors don’t take well to too
              many rules and restrictions. They want to trust their lead to be firm but not
              an ass.”
            
              “Anything else?”            
            `,
            continue: [
              'askAboutMate',
              'askAboutScholar',
              'askAboutConsortium',
              'makeMyselfBusy',
            ],
          },
          askAboutMate: {
            isAvailable: (state) => state.hasFlag(metCaptainFirstMate),
            prompt: desc`“What do you know about the First Mate?”`,
            description: desc`
              “Hm. He’s been crew longer than most. Knows the ship inside and out. About as
              high up you can get in position without bein’ Captain, mind, but a little too
              happy with that crop of his if you catch my drift. Cap keeps him in check,
              somehow.”
              
              “Anything else?”            
            `,
            continue: [
              'askAboutCaptain',
              'askAboutScholar',
              'askAboutConsortium',
              'makeMyselfBusy',
            ],
          },
          askAboutScholar: {
            isAvailable: (state) => state.hasFlag(metLeaderAndScholar),
            prompt: desc`“What do you think of the Expedition Lead and Scholar?”`,
            description: desc`
              He shrugs. “Landlubbers. They’ll get seasick within a day and wish they were home
              within two.

              “From what I understand they’re the real VIP’s sent from the Consortium, though.”

              “Anything else?”            
            `,
            continue: [
              'askAboutCaptain',
              'askAboutMate',
              'askAboutConsortium',
              'makeMyselfBusy',
            ],
          },
          askAboutConsortium: {
            isAvailable: (state) => state.hasFlag(loadedCargo),
            prompt: desc`“What do you think of the Merchant Consortium?”`,
            description: desc`
              “That fop? Who cares? We take him to the destination and back, then we never
              think of him again.”

              “Anything else?”            
            `,
            continue: [
              'askAboutCaptain',
              'askAboutMate',
              'askAboutScholar',
              'makeMyselfBusy',
            ],
          },
          makeMyselfBusy: {
            prompt: desc`“I’ll make myself busy, sir.”`,
            description: desc`“That you will,” he says. You return to the deck.`,
            continue: ['end'],
          },
        }),
        interaction({
          start: {
            prompt: desc`
              In the crowd, you spot a ${'gangly teen'} sitting atop the taffrail who seems to be
              doing not much of anything.
            `,
            description: desc`
              As you approach, you note he’s probably the youngest member of the crew.
              His skin is burned pink and speckled with blemishes, and he’s likely no older
              than sixteen or seventeen. His hair is bright red.

              “Ahoy there, mate!” He says to you, grinning. He waves wildly; his smile reveals
              a rather big gap between his two front teeth. “What can I do ye for?”            
            `,
            continue: [
              'shouldntYouDoSomething',
              'newToTheCrew',
              'teensTheseDays',
            ],
          },
          shouldntYouDoSomething: {
            prompt: desc`“Shouldn’t you be doing something right now?”`,
            description: desc`
              The kid laughs. “Well I could say the same to you, couldn’t I? You just waltzin
              about sayin hello to this and that?”
            `,
            continue: ['jumpOffBanister'],
          },
          newToTheCrew: {
            prompt: desc`“I’m new to the crew. Just getting to know everyone aboard.”`,
            description: desc`“Ayyye, I thought ye might be the new face.”`,
            continue: ['jumpOffBanister'],
          },
          teensTheseDays: {
            prompt: desc`Teens these days. “Quit lounging around and get yourself to work, kid.”`,
            description: desc`
              As you turn around, you hear the kid spit in your direction. You return to the deck.
            `,
            setsFlags: [spurnedLookout],
            continue: ['end'],
          },
          jumpOffBanister: {
            prompt: desc`Continue`,
            description: desc`
              He jumps off the bannister and sticks his hand out for a handshake. “I’m
              the ship’s lookout. New to the crew, kinda like you. I been on one job s’far
              but nothin crazy.”
            `,
            continue: ['shakeHand', 'dontShakeHand'],
          },
          shakeHand: {
            prompt: desc`Shake his hand. “Hope you’ll keep us safe on the open sea, then.”`,
            description: desc`
              The kid smiles. “You bet! Now back to my very important business.” He winks and
              jumps back onto the bannister to people watch.
            `,
            setsFlags: [metLookout],
            continue: ['end'],
          },
          dontShakeHand: {
            prompt: desc`
              Don’t shake his hand. “There’s plenty for a lookout to do on a ship even if
              we’re not sailing yet.”
            `,
            description: desc`
              The kid smiles and rolls his eyes. “Oh boy, do ye got that wrong. I got plenty
              to look out for. Sods like you fer example who are doin’ an equal amount of nuthin.”

              He winks and jumps back onto the bannister to people watch.
            `,
            setsFlags: [spurnedLookout],
            continue: ['end'],
          },
        }),
        interaction({
          start: {
            prompt: desc`
              You also see an ${'adventurous-looking man'} and ${'scholarly-looking woman'} poring 
              over a ${'large map'} spread out over a table.
            `,
            setsFlags: [metLeaderAndScholar],
            description: desc`
              A man dressed in a matching tan jacket and pants, covered with pockets, belts and
              tools, stands here with a scholarly-looking woman.

              “If my calculations are correct,” the woman says, “it should take about five weeks
              to arrive at the Lost Isles. You can see the course I’ve plotted here.”
              
              At that moment she notices you. “Ah. It seems we have a guest.”
              
              The man smiles. “I actually think we may be the guests here, on this good sailor’s
              ship. How do you do? I’m the Expedition Leader, and this here is our personal Lost
              Isles Scholar.”            
            `,
            continue: ['youLead', 'expeditionLeader', 'scholar'],
          },
          youLead: {
            isAvailable: (state) => state.hasFlag(loadedCargo),
            prompt: desc`
              “You lead the Merchant Consortium’s lot? I thought that man at the dock was in
              charge.”
            `,
            description: desc`
              The man smiles blithely. “Ah, him. Well, the Merchant’s Consortium does love their
              paperwork. And they always find a way to bring someone along who can push said paper.”
            `,
            continue: ['expeditionLeader', 'scholar'],
          },
          expeditionLeader: {
            prompt: desc`“Expedition Leader? We already have a Captain aboard.”`,
            description: desc`
              The man’s smile tenses, momentarily. “Well. Not all of us are blessed with the ah,
              ill-gotten capital to get a seaborn vessel, are we? But I was hired by the Merchant
              Consortium to lead the expedition once we’ve made landfall on the Lost Isles. I’ve
              spent many years exploring different locales and researching the dangers that could
              await us, you see.”
            `,
            continue: ['stolenArtifacts', 'lostIsles'],
          },
          stolenArtifacts: {
            prompt: desc`“Stolen artifacts are also ill-gotten capital, for what it’s worth.”`,
            description: desc`
              The man’s grin somehow stiffens even more. “Of course.”

              “You know, as a crewmate of this ship, shouldn’t you be scurrying about getting
              the ship ready? I’m sure the First Mate or the Bosun would hate to see you
              lollygagging about like this.”
              
              The man and the scholar roll up their map and head elsewhere to continue to
              discussion in hushed tones.
              
              You return to the deck.            
            `,
            setsFlags: [spurnedExpedition],
            continue: ['end'],
          },
          scholar: {
            prompt: desc`“A scholar? What need for books and letters do we have at sea?”`,
            description: desc`
              “Oh, I make myself useful,” the scholar says with a smile. “Aside from poring
              over books, I’m trained in both navigation and a bit of medicine. Though perhaps
              preparing our little expedition team here for the dangers that await us in the Lost
              Isles will be my foremost use.”
            `,
            continue: ['medicine', 'lostIsles'],
          },
          medicine: {
            prompt: desc`“Medicine? You’re a doctor?”`,
            setsFlags: [scholarMedic],
            description: desc`
              “I know enough to patch up a few blisters and bruises, sew up a few cuts,” she
              says pleasantly. “And of course, other simple seafaring ailments.
              Scurvy. Seasickness.” 

              She pauses, and her eyes glint momentarily. “Gangrene.”            
            `,
            continue: ['lostIsles'],
          },
          lostIsles: {
            prompt: desc`“What can you tell me about the Lost Isles?”`,
            description: desc`
              The scholar pauses thoughtfully. “The Lost Isles have been referenced in many
              mythological texts and seafarer’s journals over the centuries, though they’ve been
              considered a fantasy by most cartographers. However, a contingent of particularly
              devoted scholars never gave up towards finding them, despite the doubts and derision
              of the rest of the naval community.

              “The first recorded discovery of the Lost Isles in modern times was about ten years
              ago at this point. The crew made landfall and went to explore the ruins, but only
              one man returned to provide testimony with regards to what happened.
              
              “The man was… a bit out of sorts when he returned. His testimony was rather
              scattered--I suppose months alone at sea would do that to a man--but over the years
              we’ve been able to piece together records to re-plot the path their ship took and
              hopefully lay eyes upon the ruins that lay there.
              
              “The Consortium commissioned one other crew to make their way there, though I’m
              afraid they were lost at sea as well.”            
            `,
            continue: ['whatsImportantOnLostIsles', 'whatHappenedToOtherCrews'],
          },
          whatHappenedToOtherCrews: {
            prompt: desc`“What do you think happened to the other crews?”`,
            description: desc`
              “The latest? They likely didn’t have as skilled a navigator as I to plot their
              course,” she says with a light laugh. “As for the second? Perhaps we shall find
              out while we’re there.”

              You notice the Expedition Leader shifting his weight.
            `,
            continue: ['whatsImportantOnLostIsles'],
          },
          whatsImportantOnLostIsles: {
            prompt: desc`“What’s on the Isles that could possibly be so important?”`,
            description: desc`
              The Expedition Leader steps in. “Treasure of course,” he says. “The Consortium
              is looking for one particular artifact of historical importance, and the rest
              of what we find will be free for you and your crew to squab--ah, split among
              yourselves.”

              He turns to the scholar. “I think we’ve chit-chatted enough with the crew now,
              haven’t we? Wouldn’t want to waste their time any further.”
              
              The scholar touches a finger to her chin. “Was it a waste? I find it’s always a
              good use of time to enlighten those who wish to be granted knowledge.”
            `,
            continue: ['notAWaste', 'unicornShit'],
          },
          notAWaste: {
            prompt: desc`“It wasn’t a waste at all. Thank you.”`,
            setsFlags: [affirmedScholar],
            description: desc`
              She smiles. “You’re very welcome then.”

              The Expedition Leader gives you a somewhat stern look. “Well, if you’ll excuse
              us. We’d like to continue our discussion in private, if you please. Merchant
              Consortium business.” He  heads off.

              You consider the pecking order and decide to return to the deck. The scholar
              offers you a polite bow as you leave.
            `,
            continue: ['end'],
          },
          unicornShit: {
            prompt: desc`
              “This all sounds like a load of unicorn-shit to me. But if there’s a bounty to be
              had, then sure.”
            `,
            setsFlags: [snubbedScholar],
            description: desc`
              “That’s the spirit!” the Leader exclaims. The scholar frowns slightly and starts
              rolling up her map.

              “Hm. Well, if you’ll excuse us,” she mutters before stepping away.
              
              The Leader looks back and forth between the two of you, gives you a quick salute
              before following her away.
              
              You return to the deck.            
            `,
            continue: ['end'],
          },
        }),
      ],
    },
  ],
});
