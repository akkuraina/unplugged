"use client";

import Image from "next/image";
import Link from "next/link";
import { UNSTOP_REGISTER_URL } from "@/lib/constants";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Evaluation", href: "#evaluation" },
  { name: "Timeline", href: "#timeline" },
  { name: "FAQ", href: "#faq" },
  { name: "Register", href: UNSTOP_REGISTER_URL, external: true },
];

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="flex items-center justify-between w-full min-h-[100px] px-8 md:px-12 lg:px-16 bg-gradient-to-b from-black/70 to-transparent backdrop-blur-sm">
        
        {/* Left: IETE + IIC + MicroMinds Logos */}
        <div className="flex items-center gap-6 md:gap-10 shrink-0">
          <Link href="https://djsceietesf.wordpress.com/" target="_blank">
            <Image
              src="/iete.png"
              alt="IETE Logo"
              width={140}
              height={56}
              className="object-contain h-14 md:h-16 w-auto"
              priority
            />
          </Link>

          <Link href="https://www.djsce.ac.in/iic" target="_blank">
            <Image
              src="/iic.png"
              alt="IIC Logo"
              width={140}
              height={56}
              className="object-contain h-14 md:h-16 w-auto"
            />
          </Link>

          <Link href="#" target="_blank">
            <Image
              src="/microminds.png"
              alt="MicroMinds Logo"
              width={140}
              height={56}
              className="object-contain h-14 md:h-16 w-auto"
            />
          </Link>
        </div>

        {/* Right: Nav Links */}
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
            ) : link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
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
