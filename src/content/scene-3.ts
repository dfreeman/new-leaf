import { Scene, desc, flag, interaction } from '../engine/model';
import shipArt from '../assets/ship.png';
import nightMusic from '../assets/audio/04-night.mp3';
import { mutiny, ritualTattoos as ritualTattoos2,foundLookout, missingCrew } from './scene-2';
import { affirmedScholar } from './scene-1';

export const seenMysteryNightIntro = flag`
  We're nearly at the Lost Isles, but several things have made me feel uneasy since we began this journey.
  Tonight may be my last chance to get answers...
`;

export const tattleFM = flag`
  I told the Bosun about my suspicions about the First Mate. He was offended that I'd question a man that he's known for such a long time.
`;

export const captainKey = flag`
  Even if I've offended the Bosun with my line of questioning about the First Mate, I hope he takes what I've said to the Captain.
`

export const tattleLeader = flag`
  I told the Bosun about my suspicions about the Expedition Leader. He agreed with my suspicions, but didn't seem surprised. He's harbored a real grudge against the Consortium-types since the shipwreck incident.
`;

export const tattleLookout = flag`
  I told the Bosun about how the Lookout was missing on the day of the shipwreck. He seemed to not think much of it.
`;

export const repLocation = flag`
  I learned that the Representative is above deck during this rainstorm, vomiting into the ocean.
`;

export const grimoireCover = flag`
  The Bosun told me that the cover of the Scholar's "ledgerbook" has a "bizarre design." He also mentioned that she seems to be glued to the book day and night, which would be strange for a book of shipping records.
`;

export const repKey = flag`
  I found the Representative above deck. He had made an excuse about needing fresh air to get away from the rest of the his Consortium crew. Perhaps he needs a change in coworkers, if not occupation entirely.
`

export const boysClub = flag`
  I saw the Consortium seamen and the Lookout playing dice together in the crew quarters. It seems the Lookout has taken quite a shining to those folk.
`;

export const tattler = flag`
  The Consortium seamen and the Lookout were pretty tight-lipped around me. I suppose they don't find me trustworthy enough to discuss more sordid business.
`;

export const ritualTattoos = flag`
  More than one Consortium seaman has that strange raised scar. The patterns are so intricate; they can't possibly be a coincidence. Why do they all have this marking?
`;

export const lookoutTattoo = flag`
  The Lookout has an injury that looks like it's going to scar in a peculiar way.
`

export const lookoutTattooScholar = flag`
  The Scholar already knows about and has treated the Lookout's strange scar. She's also treated the scarred seamen in the past.
`;

export const grimoireLocation = flag`
  I saw that the mysterious book from the Lost Isles is being kept on the Scholar's desk.
`

export const hateScholarTattoo = flag`
  I told the Scholar that I think the Consortium's strange scars are unnatural.
`;

export const likeScholarTattoo = flag`
  I told the Scholar that I think the Consortium's strange scars are intriguing and hypnotic.
`;

export const likeScholarKnowledge = flag`
  I told the Scholar that I'm looking forward to finding out what sort of secret knowledge awaits us at the Lost Isles.
`;

export const hateScholarKnowledge = flag`
  I told the Scholar that if all that awaits us at the Isles is some historical texts, then this merchant's contract wasn't worth the coin.
`;

export const hateScholarSeed = flag`
  The Scholar claimed we're headed to the Lost Isles to find some kind of ancient "seed." I told her that's hardly believable.
`;

export const likeScholarSeed = flag`
  The Scholar claimed we're headed to the Lost Isles to find some kind of ancient "seed" that requires nurture and care. I told her I find that description oddly gentle, and wondered how we might care for it.
`;

export const knowScholarSeed = flag`
  The Scholar claimed we're headed to the Lost Isles to find some kind of ancient "seed" that requires nurture and care.
`;

export const knowScholarBook = flag`
  The Scholar admitted that what we retrieved from the shipwreck is not a shipping log. She claims to be under contract to not tell me what it it truly is, though.
`;

export const hateScholarBook = flag`
  The Scholar admitted that what we retrieved from the shipwreck is not a shipping log. I called her and her lot all liars.
`;

export const endCaptured = flag`
  I learned too much about the Consortium's plans.
`;

export const endConverted = flag`
  I spoke with the Scholar at length about the various phenomena that's occurred over our journey. She said I seemed "receptive to Our Greater Knowledge."
`;

export const mysteriousBook = flag`
  I need to find a way to access the book the Scholar is keeping at her desk. I need to find a way to get her away from it.
`;

export const scholarDistracted = flag`
  I came up with a distraction to pull the Scholar away from her quarters.
`;

export const grimoireKey = flag`
  I read the Ancient One's Grimoire.
`;

export const spokeWithScholar = flag`
  I went to the guest chambers to ask the Scholar some questions.
`;

export const mysteryNight = new Scene({
  date: 'Day 51',
  art: shipArt,
  music: nightMusic,
  intro: [
    {
      setsFlags: [seenMysteryNightIntro],
      description: desc`
        Several weeks have passed since the incident at the beach. You, the crew, and the ship made it out of the storm alive, if not a little worse for wear. And now, you're merely nights away from making landfall at the Lost Isles. 

        The sun has set. You're off-duty tonight and in dire need of rest, but certain things have been gnawing at the back of your mind…
      `,
    },
    {
      shouldDisplay: (state) => state.hasFlag(mutiny),
      description: desc`
        The conversation you overheard in the jungle, back on the shipwreck island. Someone, if not several people, are plotting something against the ship’s Captain.
      `,
    },
    {
      shouldDisplay: (state) => state.hasFlag(ritualTattoos2),
      description: desc`
        The raised scars you saw on not one, but two of the Consortium crewmates, seems too strange to ignore. The design was truly so intricate, and so similar. What sort of relationship might they have?
      `,
    },
    {
      shouldDisplay: (state) => state.hasFlag(foundLookout),
      description: desc`
        You wonder why the Lookout abandoned the rest of the crew at the shipwreck island just to watch the Consortium crew. Why is he so involved in the Consortium?
      `,
    },
    {
      description: desc`
        The moment that the Scholar looked at you so cluelessly when you asked after the Consortium ledgerbook still strikes you as odd. They were so desperate to find it… why was she caught so off guard?

        And of course, the Lost Isles themselves are shrouded in mystery. You’re approaching an uncharted land--one that tens, if not hundreds of unnamed men and women have gone and presumably died to find. Is this the kind of life you imagined for yourself, when you first came to Port? When you accepted the Captain’s offer for a new life at sea?
      `,
    }
  ],
  outro: [
    {
      description: desc`You awaken above deck. It’s day time, and the sky is overcast.

      You are bound in rope and gagged. In front of you is the Captain, who is also tied up and leashed to you by rope. You turn your head behind you. Each and every original crew member of this ship is tied together on this rope. Near the back of the line you see the Bosun.`,
    },
    {
      shouldDisplay: state => state.hasFlag(captainKey),
      description: desc`The Bosun's eyes narrow and he gestures his head forward. You look in front of you and catch sight of the Captain nervously twitching her wrists. Upon closer inspection, you see the tiniest glint of a concealed, folding blade poking out of the heel of her shoe. It appears to be jammed in an awkward angle.`,
    },
    {
      description: desc`Towering above you are the four Consortium seamen. Up ahead you see the Expedition Leader, Scholar and First Mate discussing something while looking out to shore. Behind them the Representative and Lookout kick about their feet, nervously.`,
    },
    {
      shouldDisplay: state => state.hasFlag(repKey),
      description: desc`You and the Representative briefly make eye contact. He quickly turns away.`,
    },
    {
      description: desc`The Expedition Leader and Scholar finish their discussion, and the First Mate shouts an order to the Seamen. One-by-one, they blindfold you each.`,
    },
    {
      shouldDisplay: state => state.hasFlag(captainKey),
      description: desc`As the seamen approach you, you pretend to struggle and stand. As they shove you to the ground, you kick your foot into the heel of the Captain’s shoe, hopefully unjambing the blade.

      “Fecking idiot,” you hear the Seaman say as he ties the blindfold around you.`,
    },
    {
      description: desc`You feel yourself getting dragged up to a standing position by the neck, and soon you are all shoved forward, dragged single file off the boat and onto the sands of the beach.`,
    },
  ],
  areas: [{
    name: 'below deck',
    herePrompt: desc`You are below deck, in the crew quarters.`,
    travelPrompt: desc`There is still plenty to be investigated ${'below deck'}.`,
    interactions: [
      interaction({
        start: {
          prompt: desc`You see the ${'Lookout'} and the Consortium ${'Seamen'} playing dice together.`,
          description: desc`You approach the five Consortium sailors. They are gathered around a table, gambling with a set of dice. One of the men--the one wrapped in bandages from the fall--looks up at you and cracks a wry smile.`,
          continue: ['tattled', 'gamer'],
        },
        tattled: {
          isAvailable: state => {
            return state.hasFlag(tattleFM) || state.hasFlag(tattleLeader) || state.hasFlag(tattleLookout);
          },
          prompt: desc`"Ahoy."`,
          description: desc`“Well, if it ain’t the bosun’s favorite. Ain’t that right, mate?” he asks, nudging his tablemate.

          Another sailor snorts. “Brown-nosin the bosun all day an’ night I reckon.”
          
          “You gonna tell on us for gamblin in the crew quarters?” asks the fallen sailor. “Go off runnin to your pappy bosun? Well yer outta luck, ‘coz we’re off duty. Ain’t nothin you can do about ‘et.”
          
          “H-hah!” the Lookout pipes in, a little too forcefully. “Yeah, thas’ right! Beat it, brown-noser.”`,
          continue: ['tattleLookMen', 'tattleLookLookout'],
        },
        tattleLookMen: {
          prompt: desc`Take one last look at the sailors.`,
          description: desc`The sailor who took the fall is certainly worse for wear, but he’s upright and wrapped neatly in bandages. This is likely the Scholar’s work. You think it’s amazing she even was able to set him right at all.

          “Wot’re you lookin at?” asks another sailor, waving you off with a burly arm. “We said get.”
          
          As you step away, you catch sight of something on the sailor’s forearm. Another raised scar, similar to one you’ve seen before, with an unsettlingly intricate pattern.
          
          The men here have seen your allegiances. You aren’t welcome here.`,
          continue: ['end'],
        },
        tattleLookLookout: {
          prompt: desc`Take one last look at the Lookout.`,
          description: desc`The Lookout seems paler than usual. You notice he keeps grasping his left shoulder every now and then, which is poorly wrapped in bandages.`,
          continue: ['tattleLookoutChummy', 'tattleLookoutShoulder', 'leave'],
        },
        leave: {
          prompt: desc`Leave.`,
          description: desc`You take your leave.`,
          continue: ['end'],
        },
        tattleLookoutChummy: {
          prompt: desc`“You’ve become rather chummy with the Consortium lately haven’t you? Lookin’ to change crews?”`,
          description: desc`“Sod off, mate,” the Lookout spits. “It’s none of your business. ‘Sides, they’re better company than you lot anyway. Bunch a’ brown-nosers and goody-two-shoes.”

          “Look, sailor,” another man cuts in, rolling his eyes. “Ye ain’t welcome here.”
          
          These men have seen your allegiances. You step away from the table.`,
          continue: ['end'],
        },
        tattleLookoutShoulder: {
          prompt: desc`"What happened to your shoulder?"`,
          description: desc`“Sod off, mate,” the Lookout spits. “Scholar’s already seen to it. It’s none of your business.”

          “Ye really fecked up those bandages, though, mate. Yer a lost cause,” says another sailor.
          
          As the Lookout struggles to hide his wound from you, you can’t help but catch sight of some peculiarly arranged raised welts peeking out from under the bandages.
          
          With that, the men turn away from you. You aren’t welcome here.`,
          continue: ['end'],
        },
        gamer: {
          isAvailable: state => {
            return !state.hasFlag(tattleFM) && !state.hasFlag(tattleLeader) && !state.hasFlag(tattleLookout);
          },
          prompt: desc`You approach the five sailors. They are gathered around a table, gambling with a set of dice. One of the men looks up at you and gestures his head towards an empty space at the table.

          “Ye care for a game of dice? All types a’ coin are welcome at the table.”`,
          description: desc``,
          continue: ['join', 'notGamer'],
        },
        join: {
          prompt: desc`Take a seat at the table. “Aye. Ante up.`,
          description: desc`You sit down at the table.

          “Games’ called Fourteens, it’s easy. Everyone throws a coin in the pot, and everyone rolls one die, an’ keeps it secret.
          
          Dealer rolls three dice and shows ye only two of ‘em. Then ye lot tell me you want in or out. If yer in, dealer shows my dice. You add yer number to the total of what the dealer rolled. Whoever’s dice adds up to closest to 14 without beatin’ it wins.”
          `,
          continue: ['bet', 'notGamer'],
        },
        bet: {
          prompt: desc`“Sure, I’m in.” Bet a coin and roll a die.`,
          description: desc`You’ve rolled a 4.

          The dealer reveals a 3 and a 2.`,
          continue: ['in', 'fold'],
        },
        in: {
          prompt: desc`"I'm in."`,
          description: desc`The three other seamen fold. The Lookout proudly shouts, “I’m in!”

          You reveal your 4.
          The Lookout reveals a 3.
          The dealer reveals a 6.
          
          Your sum is 15. The Lookout’s is 14, exactly.
          
          The dealer clicks his tongue and laughs. “Heh. Close, but no cigar, sailor.”`,
          continue: ['lookoutWin'],
        },
        fold: {
          prompt: desc`"I fold."`,
          description: desc`You and two other seamen fold. The Lookout proudly shouts, “I’m in!”

          The seaman reveals a 2.
          The Lookout reveals a 3.
          The dealer reveals a 6.
          
          The seaman’s sum is 13. The Lookout’s is 14, exactly.`,
          continue: ['lookoutWin'],
        },
        lookoutWin: {
          prompt: desc`Shrug.`,
          description: desc`The Lookout jumps out of his sit and pumps his fist into the air. “Yea--yeowch!” He falters, grasping his shoulder. You notice bandages poorly wrapped around it.`,
          continue: ['arm', 'endGame'],
        },
        arm: {
          setsFlags: [lookoutTattoo],
          prompt: desc`“Aye. Did something happen to your shoulder?”`,
          description: desc`The Lookout flushes pink. “I--what? No! Nothing! I mean, ah, just a little climbing accident. That’s all. Did somethin funny to it as I was climbin up the watch tower. Pulled my shoulder.”

          As he struggles to hide his wound from you, you can’t help but catch sight of some peculiarly arranged welts peeking out from under the bandages.
          
          Now are you gonna play another game with us or what?”`,
          continue: ['armScholar', 'whereRep', 'endGame'],
        },
        armScholar: {
          setsFlags: [lookoutTattooScholar],
          prompt: desc`“Shouldn’t the Scholar take a look at your injury?”`,
          description: desc`The Lookout looks away nervously. “I-I mean, she’s looked at it--but she’s busy, and I’m not a kid anymore! I can change my own damn bandages!”

          One of the seamen gives you a sidelong glance. “Kid talks about it like it’s a damn diaper.”`,
          continue: ['endGame'],
        },
        whereRep: {
          setsFlags: [repLocation],
          prompt: desc`“Actually, I wanted to ask something. Have you seen the Representative?”`,
          description: desc`One of the seamen bursts into laughter. “That sorry sod? Aye, he’s up above deck in the rain chucking his guts out into the sea. The bloke’s been on the open ocean for nearly a month and he still can barely hold his dinner!”

          The rest of the table joins in on the laughter.`,
          continue: ['endGame'],
        },
        endGame: {
          prompt: desc`Take your leave.`,
          description: desc`"Thanks for the game," you say. A seaman grunts in assent. You leave the table.`,
          continue: ['end'],
        },
        notGamer: {
          prompt: desc`“Actually, I’m not one for games of chance.”`,
          description: desc`The seaman shrugs. “Suit yerself.”

          The Lookout gives you a sidelong glance and laughs, snidely.`,
          continue: ['end'],
        },
      }),
      interaction({
        start: {
          prompt: desc`You saw the ${'Bosun'} in the crew mess not too long ago.`,
          description: desc`You head into the crew mess to find the Bosun. He’s sitting alone in a corner, busying himself with ale, gruel, and a few strips of jerky.

          He looks up from his meal and nods at you. “Sailor. Off-duty, are ye?”`,
          continue: ['leave', 'question'],
        },
        leave: {
          prompt: desc`“Aye, sir.” Leave him to his meal.`,
          description: desc`You return to the crew quarters.`,
          continue: ['end']
        },
        question: {
          prompt: desc`“Aye, sir. I wanted to ask you something.”`,
          description: desc`“Aye. What is it?”

          Ask about…`,
          continue: ['captain', 'fm', 'exp', 'lookout', 'seamen', 'rep', 'scholar', 'endQuestioning'],
        },
        captain: {
          prompt: desc`The Captain`,
          description: desc`“What about her?”`,
          continue: ['capSeen', 'capThink'],
        },
        capSeen: {
          prompt: desc`“Have you seen her?”`,
          description: desc`“Aye, she’s in her quarters. Best not to bother her, though. Stressed out of her mind and busy as all hell, though, what with landfall being so soon.”`,
          continue: ['capThink', 'drop'],
        },
        capThink: {
          prompt: desc`“What do you think of her?”`,
          description: desc`“The hell kind of question is that?” he grunts.“I think she’s doing the best she can with a ship full a’ you sorry lot.”`,
          continue: ['capSeen', 'drop'],
        },
        fm: {
          prompt: desc`The First Mate`,
          description: desc`“What about him?”`,
          continue: ['fmSeen', 'fmThink', 'fmMissing'],
        },
        fmSeen: {
          prompt: desc`"Have you seen him?"`,
          description: desc`He pauses. “Come to think of it, nay. Not for a while. Check his quarters if you like, though I personally wouldn’t risk bothering the ornery sod.”`,
          continue: ['fmThink', 'fmMissing', 'drop']
        },
        fmMissing: {
          prompt: desc`“I noticed on the day of the shipwreck that he wasn’t helping with the repairs.”`,
          description: desc`The Bosun frowns. “Honestly I can’t tell ye what he was doin. But it ain’t my place to question the First Mate.”`,
          continue: ['drop', 'fmMutiny'],
        },
        drop: {
          prompt: desc`Drop the subject.`,
          description: desc`You drop the subject. "Aye. Ye wanted to ask anything else?"`,
          continue: ['captain', 'fm', 'exp', 'lookout', 'seamen', 'rep', 'scholar', 'endQuestioning'],
        },
        endQuestioning: {
          prompt: desc`"I've nothing else to ask."`,
          description: desc`"Aye then. Dismissed."
          
          You return to the crew quarters.`,
          continue: ['end'],
        },
        fmThink: {
          prompt: desc`"What do you think of him?"`,
          description: desc`The Bosun looks unimpressed with your question. “I think the same of him as I ever did, sailor. He’s a loyal man. Been around a long time.”`,
          continue: ['fmSeen', 'fmMutiny', 'drop'],
        },
        fmMutiny: {
          isAvailable: (state) => state.hasFlag(mutiny),
          setsFlags: [tattleFM],
          prompt: desc`“I went looking for him. I think he might’ve been talking with the Expedition Lead about… something.”`,
          description: desc`The Bosun looks about and leans in towards you. “Look, sailor. The Consortium man, I get. But I’d maybe watch what you’re sayin and where before ye get any further with this line a’ thinkin. I known the First Mate longer than you, and he’s known the ship longer than any of us have.”`,
          continue: ['fmMutiny2', 'drop'],
        },
        fmMutiny2: {
          setsFlags: [captainKey],
          prompt: desc`“And wouldn’t that mean he feels more indebted to the ship than the crew?”`,
          description: desc`The Bosun leans back in his chair and places his tankard on the table with heavy thunk.

          “Sailor, it’s been a long day. And we got a serious journey ahead.”
          
          He looks up at you. “I’m gonna order ye to drop the subject and head back to yer quarters. Understood?”
          
          The Bosun no longer wishes to speak with you. You return to the crew quarters.`,
          continue: ['end'],
        },
        exp: {
          prompt: desc`The Expedition Leader`,
          description: desc`He spits on the floor beside him. “Tch. What about him?”`,
          continue: ['expSeen', 'expThink', 'expMutiny'],
        },
        expSeen: {
          prompt: desc`“Have you seen him?”`,
          description: desc`“No? I don’t really bother with that landlubber.”`,
          continue: ['expThink', 'expMutiny', 'drop'],
        },
        expThink: {
          prompt: desc`“What do you think of him?”`,
          description: desc`“I think he’s a piece a’ shite.” He takes a swig of his ale. “Next question?”`,
          continue: ['expSeen', 'expMutiny', 'drop'],
        },
        expMutiny: {
          setsFlags: [tattleLeader],
          isAvailable: (state) => state.hasFlag(mutiny),
          prompt: desc`“When we were at the shipwreck island, I overheard him talking with someone about… the Captain.”`,
          description: desc`The Bosun’s eyes narrow knowingly. “That so?”

          He wipes his face on a grimy napkin. “Feckin knew that sod wasn’t to be trusted. That said, ye ain’t telling me what I don’t already know. We been keepin’ an eye on the Consortium folk.” He leans back in his chair. “I appreciate ye telling me though. Crew’s got to stick together against these smarmy types.”`,
          continue: ['drop'],
        },
        lookout: {
          prompt: desc`The Lookout`,
          description: desc`“What about him?”`,
          continue: ['lookoutThink', 'lookoutMutiny'],
        },
        lookoutThink: {
          prompt: desc`“What do you think of him?”`,
          description: desc`“He’s just a brat. What else you want from me? Not to mention he keeps getting wrapped up in what those Consortium crewmen keep doing. Gambling, messing about, wasting time. Maybe by the end of this he’ll leave us alone and go join that damn Merchant’s band.”

          The Bosun’s expression betrays his words. He seems to be a bit saddened at the prospect of losing the Lookout to another crew.`,
          continue: ['lookoutMutiny', 'drop'],
        },
        lookoutMutiny: {
          setsFlags: [tattleLookout],
          isAvailable: (state) => state.hasFlag(missingCrew),
          prompt: desc`“I noticed he was missing when we were repairing the ship.”`,
          description: desc`The Bosun spits. “What else is new. Can’t say I’m as crop-happy as the First Mate but can’t help but wonder if the kid’ll shape up without it.”`,
          continue: ['lookoutMutiny2', 'drop'],
        },
        lookoutMutiny2: {
          prompt: desc`“I found him. He was watching the Consortium crew search the shipwreck, for some reason.”`,
          description: desc`“That so? Curious as ever, the kid, about all the wrong things.”

          He doesn’t seem to have much else to say about the topic.`,
          continue: ['drop'],
        },
        seamen: {
          prompt: desc`The Consortium Seamen`,
          description: desc`“They’re a sorry lot. Next question.” He takes another swig of ale.`,
          continue: ['drop'],
        },
        rep: {
          prompt: desc`The Representative`,
          description: desc`The Bosun rolls his eyes. “Can’t imagine what you’d want with him. That sorry sod’s up above deck in the rain, chucking his insides out into the sea.”`,
          continue: ['drop'],
        },
        scholar: {
          prompt: desc`The Scholar`,
          description: desc`“Another Consortium broad. Next question.”`,
          continue: ['scholarBook', 'drop'],
        },
        scholarBook: {
          prompt: desc`“What do you think’s in that book of hers that they found?”`,
          description: desc`The Bosun spits. “Beats me. She pores through that thing nonstop. Can’t imagine what’s so interesting about shipping records.”

          “Not to mention it has a bloody bizarre cover. Weird design. She hid it away though once I said something about it, though. Must’ve embarrassed her.”`,
          continue: ['drop'],
        },
      }),
      interaction({
        start: {
          isAvailable: state => {
            return state.hasFlag(lookoutTattooScholar) || state.hasFlag(repLocation);
          }, 
          prompt: desc`The ${'Scholar'} has spent most of her time locked up in the ${'guest quarters'} for the past several weeks, and is likely there now.`,
          description: desc`You approach the guest quarters, where the Scholar is staying. The door to her room is shut tight.`,
          continue: ['knock', 'listen'],
        },
        knock: {
          prompt: desc`Knock on the door.`,
          description: desc`After a moment, you hear the Scholar reply. “Please. I’m busy.”`,
          continue: ['question', 'emergency'],
        },
        listen: {
          prompt: desc`Listen at the door.`,
          description: desc`You look around to make sure the coast is clear before pressing your ear to the door. You hear the Scholar whispering something in low, furtive tones, barely taking the chance to take breaths.`,
          continue: ['knock'],
        },
        question: {
          isAvailable: state => state.hasFlag(affirmedScholar),
          setsFlags: [spokeWithScholar],
          prompt: desc`“Please. I wanted to ask you about something.”`,
          description: desc`You wait quite a while before you hear her footsteps padding towards the door. As the door opens to reveal her, you can’t help but notice deep, dark circles under her eyes. Despite her clear tiredness, she offers you the same placid smile.

          “When a curious mind desires knowledge, I cannot help but oblige to enlighten. Come in.”
          
          Her room is adorned with emerald curtains with golden embroidery. In the center of the room is a mahogany desk, upon which is a velvet cloth covering something book-shaped.
          
          “What did you want to ask about?”`,
          continue: ['tattoos', 'isles', 'ledger'],
        },
        tattoos: {
          isAvailable: state => {
            return state.hasFlag(ritualTattoos) || state.hasFlag(ritualTattoos2);
          },
          prompt: desc`“I’ve noticed strange raised scars on several crewmates. You’ve likely seen or treated many of them. What do you think of them?”`,
          description: desc`The Scholar closes her eyes to think for a moment. “Yes, I have treated them. Truly strange patterns, aren’t they? Certainly they aren’t made by mistake. They must be crafted carefully, and deliberately. But by whose hands?

          “What do you think of them?”`,
          continue: ['tattooHot', 'tattooGross'],
        },
        tattooGross: {
          prompt: desc`“They’re unsettling and unnatural. And for several of them to all have it seems rather suspicious.”`,
          description: desc`She nods, frowning a bit. “I see. Yes, to the layman’s eye they must seem rather grotesque.”`,
          continue: ['isles', 'ledger'],
        },
        tattooHot: {
          prompt: desc`“I find them intriguing. They’re strangely hypnotic.”`,
          description: desc`She nods. “Ah, I see you agree. They are strangely… beautiful, in a way.”`,
          continue: ['isles', 'ledger'],
        },
        isles: {
          prompt: desc`“What will you do once we get to the Lost Isles?”`,
          description: desc`“Well, there’s a relic we must recover for the sake of the Consortium. We shall seek it out, and your crew shall be blessed with all the other treasures within,” she says pleasantly.

          The relic is… a bit difficult for me to describe to someone outside the community. I’d think of it as a… seed, perhaps. A rare element needed to grow into something greater, but not without nurture or care.”`,
          continue: ['dumbPlant', 'coolPlant'],
        },
        dumbPlant: {
          prompt: desc`“So we’ve come all this way for a plant? I hardly believe that.”`,
          description: desc`She shrugs.`,
          continue: ['tattoos', 'ledger'],
        },
        coolPlant: {
          prompt: desc`“That surprisingly… gentle. Do you think we’re equipped to care for it?”`,
          description: desc`"Oh, I know we are."`,
          continue: ['tattoos', 'ledger'],
        },
        ledger: {
          prompt: desc`“The ledger from the shipwreck. Is it really a merchant’s shipping log?”`,
          description: desc`The Scholar smiles, tiredly. “No, it is not.”`,
          continue: ['whatIsTheBook'],
        },
        whatIsTheBook: {
          prompt: desc`"Then what is it?"`,
          description: desc`“A little too nosy for your own good, aren’t you? You bloody well should know better.”

          You look behind you and catch sight of the Expedition Leader, right before he hits you in the head with something, hard.`,
          continue: ['end-scene'],
        },
        emergency: {
          prompt: desc`“It’s a medical emergency.”`,
          description: desc`After a beat. “What is it?”`,
          continue: ['rep', 'lookout'],
        },
        rep: {
          prompt: desc`“The Representative is above deck, throwing up into the ocean in the rain.”`,
          description: desc`She sighs. “...alright. I’ll take a look at him.”

          You step aside from the door and wait. She then emerges from the door and locks it behind her before moving past you wordlessly.`,
          continue: ['enter', 'wait'],
        },
        lookout: {
          prompt: desc`“The Lookout hurt his shoulder and ruined the dressings. His arm might get gangrenous.”`,
          description: desc`She sighs. “...alright. I’ll take a look at him.”

          You step aside from the door and wait. She then emerges from the door and locks it behind her before moving past you wordlessly.`,
          continue: ['enter', 'wait'],
        },
        enter: {
          prompt: desc`Attempt to enter the room.`,
          description: desc`You came to Port to start a new life, and leave a sordid past behind you. It turns out, old habits die hard.

          You look up and down the hallway and slip a rusty lockpick out of your pocket. Your muscle memory does not betray you (or perhaps it does, depending on your perspective). You hear the lock open with a satisfying click, and enter the room.
          
          The Scholar’s room is adorned with emerald curtains with golden embroidery. In the center of the room is a mahogany desk. The desk is covered in stacks of used parchment, frayed quills, and half-filled jars of ink. Upon the center of the desk is a velvet cloth covering a rectangular object. `,
          continue: ['papers', 'unveil'],
        },
        papers: {
          prompt: desc`Read the papers scattered upon the desk.`,
          description: desc`You make your way to the Scholar’s desk and start to leaf through the parchment. Her writings dated earlier in your journey are neat and organized, but devolve over the weeks into more scribbles, diagrams, and symbols you do not understand.

          On the most recent page you can find, you note an unsettling passage written in a scrawled hand. The parchment is stained with tears.
          
          Ṭ̶̼̆̽̊H̶̡̫͌̅͘ͅE̷̪̯̰͑̈́̑ ̷̭͖͎͗̈́̒Ỏ̸̳̯̾͠L̸̪̥͒̏͘D̵̰̅͠ ̵̙̂O̶̜̬̔͜N̴̲̦̓̚E̴̖̺̚ ̵̣́̈́I̴̩̕S̷͉̫̱̑̏͂ ̵̞̜̼̔B̸̧̫͂Ó̵͚̰͒̔R̷̹͋̽͠N̷͖̥͈̒͒͠ ̶̮̿͋A̶͕̣͙̽Ñ̶͈̖̟̆̈E̴̼̯̓̿W̵̪̮̍̊ ̷̯͇̔W̶̤̓È̶̱͋ ̷̰͆͝S̸̡̟͈͒͒̔H̸̩̟̄͒Á̷̛͉͜L̶̡̠̆͊L̷̪̜̲͗̓̕ ̴͎̦̑̊̕R̴͙̞̝͂Ô̶̟̇Ȕ̷̢̲͝͝Ş̶͂̋̎Ẻ̶̢̺̱̓͛ ̴̭͊́T̶͚̟̬͆̕͝H̴̜̫̼̿̍̇E̶̻̟̟̊̇͝M̸͔̠̋̏ ̵̳͖̞̽́̚F̵̝̬̖̌̈͝R̵̬̩͝Õ̷̼͚̕Ṃ̶̙̉ ̷̮͈̤͗̇S̴͇͗̈́͒L̸̢̛̘U̴̬͛͋̽Ṁ̷̭̩͘B̷̠̹̎̔̆Ë̴̜̲̩́R̸̻̿,̷̗͕̘̎̌͒ ̵̫́̑̇T̵͔̮͊́͠O̵̹͗̐ ̷̲̔͠Ṳ̵̄̊͘S̶̛̞̪͙H̴̦͝E̴̱͒̇ͅR̸͓̫̈́͜ ̶̻̍U̸̢̳̯̓̀S̷̺̀̂̏ ̷͙̖͒Ḭ̵̊N̶̟̠͓̐͘͝Ť̶̢̙͆͝O̵̟̘̐ ̷̡̭́A̷̮̍͂̂S̵̤̟̪̀̿C̵̻̹̰̈̕E̵͇̫͓͋̔N̶͕̐͝S̵͖̉͊̈ͅI̶͎͝Õ̷̥N̶̢͔̺̊͋,̴̥̎̅͋ͅ ̸̧̱̈́͑M̵͚̦̤̋O̷͖̣̘̔͂Ĺ̵̫͓͜D̷̡̎̈ ̸̼͉̄̏U̷̮̲̓S̸̞̤̓͠ ̶̟̙́̔̍I̸̳͊̽͐Ń̷̪͙͔̌T̸̹̎O̵͓͕͆̓̈́ ̴͕̾̂͜Ť̴͉̭͔͘͝H̸͓͚͓̽Ė̶̛̙̽ ̸̹̄̌̾A̶̗͖͈̎͘N̴̺͌̿C̶̖̑̃̚I̴̢͐̉E̴͉̹͗N̶̢͗̊̓T̵̫͚̅́ ̵͎̳́̒̓Ḑ̴͓̦̓E̷͖͆S̵̫̠̀Ỉ̷̝̗̕͝Ḡ̶̪͎̦̆́Ǹ̶͇,̶̨͚̊ ̶͇̑T̸̙̼̱̑̅͆H̸̭̣͕́Ĕ̴͓͛̆ ̴̰̅I̴̲̿̒Ḋ̵̟̯E̵̯͋A̷̝̳̳͠L̷̖͊͌ ̸͎̙̻̉Į̸̟̤̆̚͠M̴͎̂͑̒Á̶̗͑ͅG̶̲̮͆͐͘Ë̴̯̤́͆͠
          `,
          continue: ['unveil'],
        },
        unveil: {
          prompt: desc`Unveil the object.`,
          description: desc`You remove the velvet cloth from atop the desk. Underneath, you see a large tome. It smells vaguely of rotting fish and seawater.

          Upon the cover is an intricately designed relief of what you take to be a face, of some sort, but twisted. Knotted in something. The book does not move, but you feel it writhing.`,
          continue: ['deskTry', 'paperTry', 'clueTry', 'openGrimoire'],
        },
        openGrimoire: {
          setsFlags: [grimoireKey],
          prompt: desc`Open the book.`,
          description: desc`You open the book and begin to read.
          
          …
          
          …
          
          …
          
          …
          
          You are changed.
          You close the book, and look up.
          
          “A little too nosy for your own good, aren’t you? You bloody well should know better.”
          
          You look behind you and catch sight of the Expedition Leader, right before he hits you in the head with something, hard.`,
          continue: ['end-scene'],
        },
        deskTry: {
          prompt: desc`Check the desk drawers.`,
          description: desc`You cannot bring yourself to look away from the book.`,
          continue: ['paperTry', 'clueTry', 'openGrimoire'],
        },
        paperTry: {
          prompt: desc`Check the desk drawers.`,
          description: desc`You cannot bring yourself to look away from the book.`,
          continue: ['deskTry', 'clueTry', 'openGrimoire'],
        },
        clueTry: {
          prompt: desc`Check the desk drawers.`,
          description: desc`You cannot bring yourself to look away from the book.`,
          continue: ['paperTry', 'clueTry', 'openGrimoire'],
        },
        wait: {
          prompt: desc`Wait for her.`,
          description: desc`You wait by her door for quite a while. She returns after a bit and sees you waiting there. “It wasn’t too serious,” she says, before opening the door again.

          She pauses. “Why have you waited for me this long?”`,
          continue: ['question2', 'watching'],
        },
        watching: {
          prompt: desc`“I was just watching your room for you.”`,
          description: desc`“Ah. I see. …well, thank you,” she says. She pauses. "Why don't you join me inside?"
          
          You follow her into the chamber. Her room is adorned with emerald curtains with golden embroidery. In the center of the room is a mahogany desk, upon which is a velvet cloth covering something book-shaped.          
          
          “You seem like a curious type. Surely you must have some questions I can answer, in exchange for the favor you've done for me.”`,
          continue: ['tattoos', 'isles', 'ledger'],
        },
        question2: {
          prompt: desc`“Please. I wanted to ask you about something.”`,
          description: desc`“Ah. Well… come in, then.” You follow the Scholar in.

          Her room is adorned with emerald curtains with golden embroidery. In the center of the room is a mahogany desk, upon which is a velvet cloth covering something book-shaped.          
          
          “What did you want to ask about?”`,
          continue: ['tattoos', 'isles', 'ledger'],
        },
      }),
      interaction({
        start: {
          isAvailable: (state) => state.hasFlag(repLocation),
          prompt: desc`You heard the ${'Representative'} was last seen above deck.`,
          description: desc`You head above deck to look for the Representative. Rather than having seasickness into the ocean, he is just standing under an awning looking out into the stormy waters.`,
          continue: ['rain', 'mess'],
        },
        rain: {
          prompt: desc`“You should get out of the rain.”`,
          description: desc`You startled him. “Oh--I, ah, yes. Of course. I’ll be down just shortly. Did someone call me for something?”`,
          continue: ['sick', 'mess'],
        },
        sick: {
          prompt: desc`“I heard you were sick and came to check on you.”`,
          description: desc`He seems rather taken aback by your comment. “Oh. That’s quite kind of you. No, I’m rather fine. Was, ahm. Just looking for an excuse to get some space from my… cohort.”`,
          continue: ['unkind'],
        },
        unkind: {
          prompt: desc`“They don’t seem the like the kindest lot.”`,
          description: desc`“Well, the Consortium hires who they see fit for the job and it’s my duty to ensure that everyone can still ah… work together, smoothly.”`,
          continue: ['respect', 'leave'],
        },
        respect: {
          setsFlags: [repKey],
          prompt: desc`“It doesn’t seem like they offer you that same respect.”`,
          description: desc`He pauses. “I… suppose not.”`,
          continue: ['leave'],
        },
        leave: {
          prompt: desc`“Hm. I'll leave you to it, then.”`,
          description: desc`“Of course. Good evening, sailor.”`,
          continue: ['end'],
        },
        mess: {
          prompt: desc`“I heard you were throwing up and came to make sure you weren’t making a damn mess.”`,
          description: desc`He flushes and you see the stress tense up his body. “I told those sea dogs that I was simply coming up for some fresh air.”

          “I’m so sorry to disappoint you, but you’ll just have to head back below deck,” he huffs. “There’s no free show for you to see here tonight.”
          
          You take your leave and return below quarters.`,
          continue: ['end'],
        },
      }),
    ],
  }],
});
