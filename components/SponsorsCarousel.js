"use client";

const SPONSORS = [
  "BeReal",
  "Replit",
  "Blues",
  "Unstop",
  "Devfolio",
  "Celo",
  "CollegePond",
  "Polygon Labs",
  "Solana",
  "Sakal Media Group",
  "Filecoin",
  "The Souled Store",
];

function SponsorCard({ name }) {
  return (
    <div
      className="sponsor-card shrink-0 w-[200px] md:w-[240px] h-[140px] md:h-[160px] rounded-xl border-2 border-amber-500/40 bg-[#0d1f12]/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 px-4 shadow-lg hover:border-amber-500/70 hover:shadow-amber-500/10 transition-all duration-300"
      style={{ boxShadow: "0 0 20px rgba(245, 158, 11, 0.08)" }}
    >
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-amber-950/50 border border-amber-500/30 flex items-center justify-center text-amber-500/80 font-bold text-sm uppercase">
        {name.slice(0, 2)}
      </div>
      <span className="text-amber-100 text-sm md:text-base font-medium text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

export default function SponsorsCarousel() {
  const duplicated = [...SPONSORS, ...SPONSORS];

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="text-center mb-14 px-6">
        <h2 className="heading text-3xl md:text-4xl lg:text-5xl mb-4">
          Our Past Sponsors
        </h2>
        <p className="text-amber-100/80 text-lg max-w-2xl mx-auto">
          UNPLUGGED is made possible thanks to our amazing sponsors.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="sponsors-track flex gap-6 w-max">
          {duplicated.map((name, i) => (
            <SponsorCard key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
