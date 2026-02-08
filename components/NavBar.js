import Link from "next/link";

export default function NavBar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Timeline", href: "/timeline" },
    { name: "Evaluation", href: "/evaluation" },
    { name: "Previous", href: "/previous" },
    { name: "Register", href: "/register" },
  ];

  return (
    <div className="absolute top-0 w-full flex flex-col items-center pt-6 z-50">
      
      <h1 className="text-6xl tracking-[0.3em] text-[#d4a24c] mb-4">
        UNPLUGGED 3.0
      </h1>

      {/* GOLD LINE */}
      <div className="w-3/4 h-px bg-[#d4a24c] opacity-60 mb-3"></div>

      <nav className="flex gap-12 text-[#e7d3a7] text-lg tracking-widest">
        {links.map((l) => (
          <Link key={l.name} href={l.href} className="hover:text-[#d4a24c] transition">
            {l.name}
          </Link>
        ))}
      </nav>

      {/* GOLD LINE */}
      <div className="w-3/4 h-px bg-[#d4a24c] opacity-60 mt-3"></div>
    </div>
  );
}
