import ThemeSection from "@/components/ThemeSection";

export default function About() {
  return (
    <main className="min-h-screen px-8 md:px-24 py-16 flex flex-col gap-16">
      
      <section className="flex flex-col gap-6 text-lg leading-relaxed">
        <h1 className="text-5xl font-bold">About Unplugged</h1>
        <p>
          Unplugged is the flagship national-level hackathon organized by Team DJSCE IETE-ISF.
          It is not just a coding competition, but a 24-hour experience where creativity,
          problem-solving, technology, and collaboration come together under one roof.
          Students from across the country gather to build solutions, push their limits,
          and transform ideas into working prototypes within a single day.
        </p>
        <p>
          What makes Unplugged unique is its focus on innovation with purpose.
          Participants are encouraged to work on real-world problem statements spanning
          healthcare, sustainability, AI, IoT, smart systems, and social impact.
          The environment is intense, exciting, and deeply inspiring — filled with
          mentors, workshops, midnight debugging sessions, and the thrill of building
          something meaningful from scratch.
        </p>
        <p>
          Over the years, Unplugged has grown from a college event into a nationally
          recognized hackathon with thousands of impressions, hundreds of participants,
          and a reputation for delivering an unforgettable tech experience.
        </p>
      </section>

      <section className="flex flex-col gap-6 text-lg leading-relaxed">
        <h2 className="text-4xl font-semibold">Unplugged 1.0</h2>
        <p>
          The first edition of Unplugged laid the foundation for what would become a
          legacy event. Conducted with the aim of bringing passionate developers,
          designers, and innovators together, Unplugged 1.0 witnessed enthusiastic
          participation and set the tone for a hackathon that values creativity over
          convention.
        </p>
        <p>
          Participants worked through the night, guided by mentors and fueled by the
          excitement of building something impactful. The success of this edition proved
          that there was a strong appetite for meaningful hackathons that go beyond
          just coding and focus on solving genuine problems.
        </p>
      </section>

      <section className="flex flex-col gap-6 text-lg leading-relaxed">
        <h2 className="text-4xl font-semibold">Unplugged 2.0</h2>
        <p>
          Building upon the success of the first edition, Unplugged 2.0 expanded in
          scale, reach, and impact. With increased national participation and wider
          visibility on platforms like Unstop, the hackathon attracted some of the
          brightest student minds from across India.
        </p>
        <p>
          This edition introduced more refined problem statements, stronger mentorship,
          better judging criteria, and an even more electrifying atmosphere. Teams
          produced remarkable solutions ranging from AI-driven applications to IoT
          systems and web platforms aimed at solving pressing societal challenges.
        </p>
        <p>
          Unplugged 2.0 firmly established the event as a serious, high-quality
          hackathon that participants eagerly looked forward to every year.
        </p>
      </section>

      <section className="flex flex-col gap-6 text-lg leading-relaxed">
        <h2 className="text-4xl font-semibold">What to Expect from Unplugged 3.0</h2>
        <p>
          With each edition, Unplugged evolves — and the upcoming version promises to
          be bigger, better, and more impactful than ever. With hundreds of expected
          participants, stronger partnerships, and exciting challenges, Unplugged 3.0
          aims to create an ecosystem where innovation thrives and ideas turn into
          reality within 24 hours.
        </p>
        <p>
          From brainstorming sessions to final presentations, the journey is intense,
          collaborative, and unforgettable. It’s where students don’t just participate
          in a hackathon — they live through an experience.
        </p>
      </section>

      <section className="flex justify-center mt-8">
        <ThemeSection href="https://djsceietesf.wordpress.com/" />
      </section>

    </main>
  );
}
