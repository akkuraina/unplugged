export default function Timeline() {
  const events = [
    { date: "10 FEB", label: "Registrations Open" },
    { date: "10 MAR", label: "Round 1 Results" },
    { date: "5 APR", label: "Final Hackathon @ DJSCE" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-10 py-24">
      <h2 className="heading text-4xl md:text-5xl mb-20">
        EXPEDITION TIMELINE
      </h2>

      <div className="space-y-12 max-w-xl">
        {events.map((event, i) => (
          <div
            key={event.date}
            className="glass px-8 py-6 border-l-4 border-amber-500"
          >
            <p className="text-2xl md:text-3xl jurassic-gold font-bold mb-2">
              {event.date}
            </p>
            <p className="text-amber-100/90 text-lg">{event.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
