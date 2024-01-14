import { Scene, desc, flag, interaction } from '../engine/model';
import shipArt from '../assets/shipwreck.png';
import portMusic from '../assets/audio/03-stranded.mp3';
import { seamanTattoo } from './scene-1';

export const seenShipwreckIntro = flag`
  We started the day with bad weather, with a worse storm oncoming. We also saw an island
  on the horizon with a Merchant Consortium shipwreck on it.

  Instead of picking up the pace to dodge the storm, the Consortium convinced the Captain
  to beach at the island. They are trying to recover a logbook that they thought was
  forever lost by that now deceased crew.
`;

export const accident = flag`
  At the end of the day, one of the Consortium crewmen fell from the shipwreck onto the beach,
  injuring himself seriously. The Bosun and I brought over a stretcher to help carry him back.
`;

export const noticeTattoo = flag`
  As they carried him away, I noticed the injured crewman had a very unusual raised scar,
  attained long before today's fall. I've no idea what would cause an injury to heal in such
  a pattern.
`;

export const ritualTattoos = flag`
  The scar I saw on the injured man seemed almost exactly the same to the one I saw on a
  different Consortium crewman I met on the first day on board. It's not likely that the
  design was the result of an "accident."
`;

export const scholarBook = flag`
  At least at the end of things the Consortium acquired their precious ledgerbook. Though
  the Scholar seemed a bit baffled when I asked about it.
`;

export const longRest = flag`
  I decided to take a long rest to recover my muscles from hauling wet lumber all day.
`;

export const missingCrew = flag`
  I noticed that the Lookout and First Mate weren't around during the repairs.
`;

export const investigatedMissingCrew = flag`
  TODO
`;

export const mutiny = flag`
  TODO
`;

export const foundLookout = flag`
  TODO
`;

export const helpedRepair = flag`
  It was exhausting, but I helped the crew repair the damage to the ship's hull.
`;

export const shipwreck = new Scene({
  date: 'Day 25',
  art: shipArt,
  music: portMusic,
  intro: [
    {
      setsFlags: [seenShipwreckIntro],
      description: desc`
        Several weeks have passed at sea. Today your duties are above deck, but the choppy waters
        and rain make it an unpleasant prospect. As you emerge from below, the Lookout passes by
        you and shouts a greeting.

        “This is just a light pissin’ compared to what’s comin,” he says, pointing out at the
        horizon. “Gonna be bad if we don’t get our arses out quick.”
        
        You look at where he’s pointing. Through the rain, even darker faraway clouds approach
        ominously. And despite the visibility, you also catch sight of a small island in the
        distance, surrounded by dagger-like stones jutting out of the ocean. A ship with a tattered
        red flag is wrecked on its shores.
        
        “Watch out for Cap this mornin, mate,” the Lookout says before he climbs back below deck.
        “Ye’ll hear why soon enough.” 
        
        Soon enough, tense voices in increasing volumes begin to reach your ears.
        
        “You kidding me?” You recognize the voice to be the Captain, and look up. “Yer little ‘pit
        stop’ wasn’t in the brief, and now there’s stormclouds on my ship’s arse!”
        
        “The Contract only states our explicit destination, yes,” says the Scholar, squinting in the
        rain. “Though now an opportunity is before that we, as the Consortium, cannot possibly miss.”
        
        “Your last crew’s ship got shipwrecked on that island for a reason. And probably on fair seas.
        I’m takin ye to the Lost Isles, capital letters, not here to get lost on some shit stop-over
        that you lot’s last boat got wrecked in. And even if we did make a miracle landing, to stay
        here any longer with that storm on our tail is bound to keep us from getting to the final
        destination at all!”
        
        The Expedition Leader cuts in, stamping his boot and sticking his face dangerously close to
        the Captain’s. “Listen here. We are the ones hiring you here. We are the Consortium. We are
        stopping on that island. We must recover the logbook. We will triple your pay.”
        
        The Representative chokes. “T-triple?!”
        
        The Expedition Leader continues unabated. “We triple your pay, or you will get nothing and
        the Consortium will drive your crew’s reputation into the grave.”
        
        The Captain is silent for a while. You see the First Mate go up to her and mutter something
        in her ear. She stalks off before you hear the First Mate say, “We’ll do it.”
        
        A few hours later, your ship narrowly navigates through the spiny boulders protecting the
        bay of the nearby island. As you get closer, you see with your own eyes the wreck of another
        ship, not too dissimilar from yours. Tattered flags, broken wood, and bleached viscera
        decorate the wreck like streamers. The rain has thinned somewhat, but the winds remain. As
        the ship approaches, a horrible ripping sound is made from below.
        
        Curse words flow unbounded from the Bosun’s lips. “Cap, we got damage on the hull!”
        
        “For gods sakes. Get us landed! Let the merchants find their fecking little logbook and
        everyone else all hands on deck! We got a hull to fix before that damn storm comes and
        drowns us all!”

      `,
    },
  ],
  outro: [
    {
      setsFlags: [accident, noticeTattoo],
      description: desc`
        As the day ends, you hear a deafening crack and a shout from the direction of the
        shipwreck. Despite your exhaustion from the repairs, you and the ship’s crew are
        sent out to investigate. From afar, you see the Scholar bent over a man laying on
        the ground. You and the Bosun bring a makeshift stretcher across the beach.

        The scene at the wreck is grisly. One of the seamen fell through a rotted board on
        an upper deck, crashing into the sand. Large wood splinters and blood decorates his
        skin.
        
        As you approach, the Bosun wrenches the stretcher from your hands and tosses it on
        the ground. “Well I hope you found your bloody book before the fall. Ye lot better
        damn well carry your own. We’ve been racing the storm trying to fix the damn ship
        while you went on your little treasure hunt.”
        
        The Scholar looks up with an unusual fierceness in her eyes. “This man is seriously
        wounded, bosun. He requires medical care, not your bitter derision.” She turns back
        to the Consortium crew. “Men. Load him up and take him to my quarters. I’ll care
        for him anon.”
        
        The Bosun crosses his arms gruffly as you both watch the scene unfold. As you watch
        them load the injured man onto the stretcher, you notice that just above a
        particularly gruesome splinter in the man’s leg is an intricately shaped, unusual
        raised scar.
      `,
    },
    {
      shouldDisplay: (state) => state.hasFlag(seamanTattoo),
      setsFlags: [ritualTattoos],
      description: desc`
        It is almost exactly the same as the one you saw on the arm of a different man on
        your first day on the ship. 
      `,
    },
    {
      setsFlags: [scholarBook],
      description: desc`
        You all hurry back in the rain, running to get to the ship in time to dodge the worst
        of the storm. As you all safely make it onto the deck, you find a moment to catch
        your breath with the Scholar.
        
        “So,” you begin politely. “Did you find the ledgerbook?”
        
        “The what?” she asks, briefly caught off-guard. “I-- oh. Yes.” Her eyes brighten.
        “Yes, we did.”      
      `,
    },
  ],
  areas: [
    {
      name: 'Shipwreck Island',
      travelPrompt: desc``,
      herePrompt: desc`You are currently on the beach of an unknown island.`,
      interactions: [
        interaction({
          start: {
            isAvailable: (state) =>
              !(
                state.hasFlag(longRest) ||
                state.hasFlag(investigatedMissingCrew)
              ),
            prompt: desc`
              You can see ${'the Bosun'} giving orders to the crew.
            `,
            description: desc`
              You approach the Bosun for orders.

              “We’re in a right state, sailor,” he sighs. “A bloody right state.”
            `,
            continue: ['whatAreMyOrders', 'whatAreWeDoing'],
          },
          whatAreMyOrders: {
            prompt: desc`“What’re my orders, bosun?”`,
            description: desc`
              The Bosun rubs his temples. “Gods. Just help unload the repair lumber from below
              deck onto the beach. We’ve got the ship’s carpenter on duty to do quick repairs
              before the storm sets in.”

              “I hope to hell and back that those Consortium gits make it back here in time
              for us to leave. I got half a mind to leave ‘em.” 
            `,
            continue: ['continue'],
          },
          whatAreWeDoing: {
            prompt: desc`“What the hell are we even doing here?”`,
            description: desc`
              “They dragged us all this way to get some damn… logbook, or ledger or whatever.
              Merchant business. Claims the last ship brought it here and lost it and that
              it’s important they get it.

              “I can’t pretend to understand this merchant shite. Why a bit of paper at sea
              is worth anything to them at this point. But they threatened the Cap’n and
              everything. She ain’t too pleased about it, but the First Mate forced the
              choice.”
            `,
            continue: ['continue'],
          },
          continue: {
            prompt: desc`Continue`,
            description: desc`
              With that you leave to help haul the lumber to the damaged hull. For about an
              hour you haul rain-soaked building materials out to the ship’s carpenter. The
              exhaustion in your muscles begins to set in.
            `,
            continue: ['longBreak', 'shortBreak', 'pushThrough'],
          },
          longBreak: {
            prompt: desc`Find a place to sit and take a break. The fatigue is too much.`,
            setsFlags: [longRest],
            description: desc`
              You walk halfway down the beach to an outcropping of palm trees, hoping to get
              some space from the others and shelter from the rain.

              You pass time there until you're feeling recovered, though at this point the
              repairs are mostly done. The bosun may not be happy.
            `,
            continue: ['end'],
          },
          shortBreak: {
            prompt: desc`Take a quick breather. The Bosun can’t rat you out for a few minutes’ rest.`,
            setsFlags: [missingCrew],
            description: desc`
              You take a moment to stretch and breathe. You look at the horizon, tracking the
              storm, then look back at the ship. As you absentmindedly scan the crew for faces,
              it occurs to you that the Lookout and First Mate don’t seem to be here.
            `,
            continue: ['end'],
          },
          pushThrough: {
            prompt: desc`
              Push through. You need to get this repair done for the ship to escape the storm
              in time.
            `,
            setsFlags: [helpedRepair],
            description: desc`
              You're exhausted, but you push through to make sure the repairs are done before
              the storm arrives.
            `,
            continue: ['end'],
          },
        }),
        interaction({
          start: {
            prompt: desc`
              You can see ${'the Bosun'} giving orders to the crew. In a brief moment of eye 
              contact, you see his eyes narrow upon you.
            `,
            isAvailable: (state) =>
              state.hasFlag(longRest) || state.hasFlag(investigatedMissingCrew),
            description: desc`
              TODO
            `,
          },
        }),
        interaction({
          start: {
            prompt: desc`You see ${'the Representative'} pacing about on the deck.`,
          },
        }),
        interaction({
          start: {
            prompt: desc`
              You can see the ship’s ${'damaged hull'}.
            `,
          },
        }),
      ],
    },
  ],
});
