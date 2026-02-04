import SectionPage from "../components/SectionPage";

export default function Timeline() {
  return (
    <SectionPage title="Expedition Plan">
      <div className="relative flex flex-col items-center">

        <div className="absolute h-full w-1 bg-yellow-500/30"></div>

        <TimelineItem
          side="left"
          date="10 February"
          title="Live on Unstop — Register for Round 1"
          desc="The expedition begins. Teams from across the country register and submit their ideas for the first round of evaluation."
        />

        <TimelineItem
          side="right"
          date="10 March"
          title="Round 1 Results Announced"
          desc="Selected teams move forward in the journey and prepare for the final on-ground hardware expedition."
        />

        <TimelineItem
          side="left"
          date="5 April — Morning"
          title="Round 2 Begins at DJ Sanghvi"
          desc="Qualified teams report at the venue and begin the 24-hour hardware hackathon challenge."
        />

        <TimelineItem
          side="right"
          date="5 April — Venue"
          title="Final Hackathon Location"
          desc="Dwarkadas J. Sanghvi College of Engineering, Mumbai."
          link="https://maps.google.com/?q=DJ+Sanghvi+College+of+Engineering"
        />

      </div>
    </SectionPage>
  );
}

function TimelineItem({ side, date, title, desc, link }) {
  return (
    <div className={`w-full flex ${side === "left" ? "justify-start" : "justify-end"} my-12`}>
      <div className="glass w-[320px] relative">
        <p className="text-yellow-500 font-bold">{date}</p>
        <h3 className="text-2xl text-yellow-400 font-bold mb-2">{title}</h3>
        <p className="mb-2">{desc}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            className="text-yellow-300 underline"
          >
            View Location
          </a>
        )}
      </div>
    </div>
  );
}
