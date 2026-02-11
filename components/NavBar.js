"use client";

import Image from "next/image";
import Link from "next/link";
import { UNSTOP_REGISTER_URL } from "@/lib/constants";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Evaluation", href: "#evaluation" },
  { name: "Timeline", href: "#timeline" },
  { name: "FAQ", href: "#faq" },
  { name: "Committee", href: "/committee" },
  { name: "Register", href: UNSTOP_REGISTER_URL, external: true },
];

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="flex items-center justify-between w-full min-h-[80px] px-8 md:px-12 lg:px-16 bg-gradient-to-b from-black/70 to-transparent backdrop-blur-sm">
        
        {/* Left: IETE + IIC Logos */}
        <div className="flex items-center gap-8 md:gap-12 shrink-0">
          <Link href="https://djsceietesf.wordpress.com/" target="_blank">
            <Image
              src="/iete.png"
              alt="IETE Logo"
              width={120}
              height={48}
              className="object-contain h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          <Link href="https://www.djsce.ac.in/iic" target="_blank">
            <Image
              src="/iic.png"
              alt="IIC Logo"
              width={120}
              height={48}
              className="object-contain h-10 md:h-12 w-auto"
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
