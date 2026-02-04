import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Committee", href: "/committee" },
    { name: "Evaluation", href: "/evaluation" },
    { name: "Previous", href: "/previous" },
    { name: "Timeline", href: "/timeline" },
    { name: "Register", href: "/register" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md p-4 flex justify-center gap-8 text-yellow-300">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="hover:text-yellow-500"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
