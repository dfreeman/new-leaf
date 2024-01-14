import { Scene, desc, flag, interaction } from '../engine/model';
import shipArt from '../assets/ship.png';
import portMusic from '../assets/audio/01-port.mp3';

export const seenShipwreckIntro = flag``;

export const mutiny = flag``;

export const ritualTattoos = flag``;

export const foundLookout = flag``;

export const missingCrew = flag``;

export const shiwreck = new Scene({
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
      description: desc`
        TODO
      `,
    },
  ],
  areas: [{}],
});
