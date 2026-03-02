import ThemeSection from "@/components/ThemeSection";

export default function About() {
  return (
    <main className="min-h-screen px-8 md:px-24 py-16 flex flex-col gap-16">
      
      <section className="flex flex-col gap-6 text-lg leading-relaxed">
        <h1 className="text-5xl font-bold">About Unplugged</h1>
        <p>
          An adventure 65 million years in the making. Experience the wonder and majesty of creatures that once ruled our planet.
          Unplugged brings together the brightest minds to innovate, collaborate, and create groundbreaking solutions.
        </p>
        <p>
          Our Mission: To foster innovation and creativity among students by providing a platform where ideas come to life.
          We believe in the power of hackathons to transform concepts into reality and inspire the next generation of technologists.
        </p>
        <p>
          Why Unplugged? Step away from the ordinary. Unplugged challenges participants to go beyond textbooks and embrace
          real-world problem-solving. It's where passion meets code, and ideas become innovations that matter.
        </p>
      </section>

      <section className="flex flex-col gap-6 text-lg leading-relaxed">
        <h2 className="text-4xl font-semibold">Unplugged 1.0</h2>
        <p>
          Unplugged 1.0 marked the beginning of a new era in hackathons. With innovation at its core,
          it brought together brilliant minds from various colleges and backgrounds to collaborate,
          compete, and create solutions to real-world problems.
        </p>
        <p>
          Unplugged 1.0 set the foundation for what would become one of the most anticipated hackathons in the country.
          The event created an inspiring environment where creativity flourished and innovation took center stage.
        </p>
      </section>

      <section className="flex flex-col gap-6 text-lg leading-relaxed">
        <h2 className="text-4xl font-semibold">Unplugged 2.0</h2>
        <p>
          Unplugged 2.0 took everything that made the first edition successful and elevated it.
          With increased participation, more tracks, and enhanced mentorship opportunities,
          this edition became a landmark event in the student hackathon community.
        </p>
        <p>
          Unplugged 2.0 established itself as a premier destination for student innovators.
          The event demonstrated the power of collaborative innovation and set the stage for even greater accomplishments to come.
        </p>
      </section>

      <section className="flex flex-col gap-6 text-lg leading-relaxed">
        <h2 className="text-4xl font-semibold">Unplugged 3.0</h2>
        <p>
          Bigger, bolder, and more innovative than ever, Unplugged 3.0 continues the legacy
          by bringing together passionate innovators across IoT and VLSI domains.
        </p>
        <p>
          From idea submission to final presentations, the journey is intense,
          collaborative, and unforgettable — a true celebration of technology and innovation.
        </p>
      </section>

      <section className="flex justify-center mt-8">
        <ThemeSection href="https://djsceietesf.wordpress.com/" />
      </section>

    </main>
  );
};