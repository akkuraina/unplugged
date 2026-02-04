import SectionPage from "@/app/components/SectionPage";
import Image from "next/image";

const members = {
  chairperson: {
    name: "Name Here",
    post: "Chairperson",
    img: "/committee/chairperson.jpg",
  },
  core: [
    {
      name: "Name Here",
      post: "Vice Chairperson",
      img: "/committee/vice.jpg",
    },
    {
      name: "Name Here",
      post: "Secretary",
      img: "/committee/secretary.jpg",
    },
    {
      name: "Name Here",
      post: "Treasurer",
      img: "/committee/treasurer.jpg",
    },
  ],
  heads: [
    { name: "Name", post: "Technical Head", img: "/committee/tech.jpg" },
    { name: "Name", post: "Infotech Head", img: "/committee/infotech.jpg" },
    { name: "Name", post: "Editorial Head", img: "/committee/edi.jpg" },
    { name: "Name", post: "Creatives Head", img: "/committee/creatives.jpg" },
    { name: "Name", post: "Publicity Head", img: "/committee/pubs.jpg" },
    { name: "Name", post: "Marketing Head", img: "/committee/marketing.jpg" },
    { name: "Name", post: "Strike Head", img: "/committee/strike.jpg" },
  ],
};

function Card({ person }) {
  return (
    <div className="glass flex flex-col items-center text-center w-60">
      <Image
        src={person.img}
        alt={person.name}
        width={120}
        height={120}
        className="rounded-full border-2 border-yellow-500 mb-4"
      />
      <h3 className="text-xl font-bold text-yellow-400">{person.name}</h3>
      <p className="text-sm text-yellow-200">{person.post}</p>
    </div>
  );
}

export default function Committee() {
  return (
    <SectionPage title="Research Team">
      <div className="flex flex-col items-center gap-16">

        <Card person={members.chairperson} />

        <div className="flex flex-wrap justify-center gap-10">
          {members.core.map((p, i) => (
            <Card key={i} person={p} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {members.heads.map((p, i) => (
            <Card key={i} person={p} />
          ))}
        </div>

      </div>
    </SectionPage>
  );
}
