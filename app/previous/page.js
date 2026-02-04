import SectionPage from "../components/SectionPage";
import Link from "next/link";

export default function Previous() {
  return (
    <SectionPage title="Fossil Records">
      <div className="flex flex-col md:flex-row gap-12 justify-center items-center">

        <Link href="/previous/one" className="glass w-80 hover:scale-105 transition">
          <h2 className="text-3xl text-yellow-400 font-bold mb-4">
            Unplugged 1.0
          </h2>
          <p>
            The origin of Unplugged. A hackathon rooted in IoT innovation where
            students explored the power of interconnected devices and smart
            sensing systems.
          </p>
        </Link>

        <Link href="/previous/two" className="glass w-80 hover:scale-105 transition">
          <h2 className="text-3xl text-yellow-400 font-bold mb-4">
            Unplugged 2.0
          </h2>
          <p>
            Inspired by the vision of a Smart Mumbai, this edition focused on
            urban problem solving through hardware, automation, and intelligent
            infrastructure.
          </p>
        </Link>

      </div>
    </SectionPage>
  );
}
