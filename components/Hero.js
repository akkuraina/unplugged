import Link from "next/link";
import { bebas } from "@/app/layout";
import { UNSTOP_REGISTER_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] relative flex items-center justify-center text-center">
      <img
        src="/jungle.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0a0f0a]/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f0a]/30 to-[#0a0f0a]/90" />

      <div className="relative z-10 max-w-6xl px-6">
        <h1 className={`${bebas.className} hero-title font-bold text-amber-400 mb-6`}>
          UNPLUGGED 3.0
        </h1>
        <p className="text-amber-500/90 text-lg md:text-xl mb-2 tracking-wide">
          WHEN INNOVATION MEETS THE WILD
        </p>
        <p className="text-amber-100/90 text-lg mb-10">
          A 24-hour National Level Hardware Hackathon by IETE DJSCE
        </p>
        <Link
          href={UNSTOP_REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block jurassic-btn tracking-widest"
        >
          ENTER THE PARK
        </Link>
      </div>
    </section>
  );
}
