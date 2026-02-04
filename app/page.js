import Navbar from "@/app/components/NavBar";

export default function Home() {
  return (
    <div className="overlay min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center h-screen gap-10 px-6">
        <p className="tracking-widest text-yellow-500 animate-pulse">
          WARNING: ENTER AT YOUR OWN RISK
        </p>

        <h1 className="heading">UNPLUGGED 3.0</h1>

        <p className="text-xl max-w-3xl">
          A 24-hour national level hardware hackathon where engineers step into
          the wild to build technology for wildlife conservation, environmental
          monitoring, and sustainable ecosystems.
        </p>

        <div className="flex gap-6">
          <a
            href="/register"
            className="glass text-xl hover:bg-yellow-500/20"
          >
            Enter The Park
          </a>

          <a
            href="/about"
            className="glass text-xl hover:bg-yellow-500/20"
          >
            Mission Briefing
          </a>
        </div>
      </div>
    </div>
  );
}
