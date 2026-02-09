"use client";

import Link from "next/link";
import { UNSTOP_REGISTER_URL } from "@/lib/constants";

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Evaluation", href: "/evaluation" },
  { name: "Timeline", href: "/timeline" },
  { name: "FAQ", href: "/faq" },
  { name: "Committee", href: "/committee" },
  { name: "Register", href: UNSTOP_REGISTER_URL, external: true },
];

export default function NavBar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full border-b-2 border-amber-500/60"
      style={{ width: "100vw" }}
    >
      <div className="fence-stripe h-1" />
      <nav className="flex items-center justify-between w-full min-h-[80px] px-8 md:px-12 lg:px-16 bg-[#0a0f0a]/95 backdrop-blur-md">
        {/* Left: Logo placeholders – IETE + IIC (add images later) */}
        <div className="flex items-center gap-8 md:gap-12 shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <div
              className="h-10 w-24 md:h-12 md:w-28 rounded-lg border-2 border-amber-500/50 bg-amber-950/30 flex items-center justify-center text-amber-600/80 text-xs font-semibold uppercase tracking-wider"
              aria-label="IETE logo placeholder"
            >
              IETE
            </div>
          </Link>
          <div
            className="h-10 w-24 md:h-12 md:w-28 rounded-lg border-2 border-amber-500/50 bg-amber-950/30 flex items-center justify-center text-amber-600/80 text-xs font-semibold uppercase tracking-wider"
            aria-label="IIC logo placeholder"
          >
            IIC
          </div>
        </div>

        {/* Right: nav links – generous spacing via globals.css so it can't be overridden */}
        <div className="flex items-center nav-links-spacing">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-100 hover:text-amber-400 font-medium tracking-wide transition-colors text-sm md:text-base py-3 px-5 md:px-6 rounded-lg hover:bg-amber-950/30 whitespace-nowrap"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-amber-100 hover:text-amber-400 font-medium tracking-wide transition-colors text-sm md:text-base py-3 px-5 md:px-6 rounded-lg hover:bg-amber-950/30 whitespace-nowrap"
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
