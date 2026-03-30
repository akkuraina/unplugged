"use client";

import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },               // ✅ NEW
  { name: "Problem Statements", href: "#problem-statements" },   // ✅ SAME SECTION
  { name: "Prize Pool", href: "#prizepool" },
  { name: "Timeline", href: "#timeline" },
  { name: "FAQ", href: "#faq" },
];

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="flex items-center justify-center w-full min-h-[100px] px-5 md:px-8 lg:px-10 bg-gradient-to-b from-black/70 to-transparent backdrop-blur-sm">

        {/* Left: Logos (kept commented as is) */}
        {/*
        <div className="flex items-center gap-4 md:gap-6 shrink-0">
          <Link href="https://djsceietesf.wordpress.com/" target="_blank">
            <Image
              src="/iete.png"
              alt="IETE Logo"
              width={200}
              height={56}
              className="object-contain h-14 md:h-16 w-[20px] md:w-[24px] brightness-125"
              priority
            />
          </Link>

          <Link href="https://www.djsce.ac.in/iic" target="_blank">
            <Image
              src="/iic.png"
              alt="IIC Logo"
              width={190}
              height={56}
              className="object-contain h-14 md:h-16 w-[19px] md:w-[23px] brightness-125"
            />
          </Link>

          <Link href="#" target="_blank">
            <Image
              src="/microminds.png"
              alt="MicroMinds Logo"
              width={190}
              height={56}
              className="object-contain h-14 md:h-16 w-[19px] md:w-[23px] brightness-125"
            />
          </Link>
        </div>
        */}

        {/* Right: Nav Links */}
        <div className="flex items-center nav-links-spacing">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="jurassic-nav text-amber-100 hover:text-amber-400 font-medium tracking-wide transition-colors text-sm md:text-base py-3 px-3 md:px-4 rounded-lg hover:bg-amber-950/30 whitespace-nowrap"
              >
                {link.name}
              </a>
            ) : link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                className="jurassic-nav text-amber-100 hover:text-amber-400 font-medium tracking-wide transition-colors text-sm md:text-base py-3 px-3 md:px-4 rounded-lg hover:bg-amber-950/30 whitespace-nowrap"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="jurassic-nav text-amber-100 hover:text-amber-400 font-medium tracking-wide transition-colors text-sm md:text-base py-3 px-3 md:px-4 rounded-lg hover:bg-amber-950/30 whitespace-nowrap"
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