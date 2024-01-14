import { Scene, desc, flag, interaction } from '../engine/model';
import shipArt from '../assets/ship.png';
import nightMusic from '../assets/audio/04-night.mp3';
import { mutiny, ritualTattoos as ritualTattoos2,foundLookout, missingCrew } from './scene-2';

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
      description: desc`
        TODO
      `,
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
          description: desc``,
          continue: [],
        }
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
          prompt: desc`The ${'Scholar'} has spent most of her time locked up in the guest quarters for the past several weeks, and is likely there now.`,
          description: desc``,
          continue: [],
        }
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
