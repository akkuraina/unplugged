import Link from "next/link";

export default function Navbar() {
  const links = ["Home","About","Committee","Sponsors","Evaluation","Previous","Timeline","Register"];

  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md p-4 flex justify-center gap-8 text-yellow-300">
      {links.map((item) => (
        <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-yellow-500">
          {item}
        </Link>
      ))}
    </nav>
  );
}
