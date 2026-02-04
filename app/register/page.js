import SectionPage from "../components/SectionPage";

export default function Register() {
  return (
    <SectionPage title="Enter The Expedition">
      <div className="flex flex-col items-center text-center gap-10">

        <p className="max-w-2xl text-lg">
          The gates are open. Teams from across the country are invited to step
          into a 24-hour hardware challenge where engineering meets the wild.
          Register now to begin your journey in Unplugged 3.0.
        </p>

        <a
          href="https://unstop.com"   // replace with your actual Unstop link
          target="_blank"
          className="glass text-2xl hover:bg-yellow-500/20 transition"
        >
          Register on Unstop
        </a>

        <p className="text-yellow-500 tracking-widest animate-pulse">
          ONLY THE CURIOUS SURVIVE
        </p>

      </div>
    </SectionPage>
  );
}
