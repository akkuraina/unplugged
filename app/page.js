import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="overlay min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center h-screen gap-8">
        <h1 className="heading">UNPLUGGED 3.0</h1>
        <p className="text-xl max-w-2xl">
          A 24-hour hardware expedition where engineers build technology to protect the wild.
        </p>
        <a href="/register" className="glass text-xl hover:bg-yellow-500/20">
          Enter The Park
        </a>
      </div>
    </div>
  );
}
