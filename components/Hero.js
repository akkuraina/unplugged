export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center text-center">

      <img
        src="/forest.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* LIGHT RAYS (cinematic feel) */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/80"></div>

      <div className="relative z-10 max-w-4xl px-6">
        <h2 className="text-5xl text-[#d4a24c] tracking-widest mb-6">
          WHEN INNOVATORS RISE
        </h2>

        <p className="text-xl text-[#e7d3a7] mb-8">
          A 24-hour National Level Hackathon by IETE DJSCE
        </p>

        <button className="border border-[#d4a24c] px-8 py-3 text-[#d4a24c] tracking-widest hover:bg-[#d4a24c] hover:text-black transition">
          REGISTER NOW
        </button>
      </div>
    </section>
  );
}
