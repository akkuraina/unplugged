import ThemeSection from "@/components/ThemeSection";

export default function About() {
  return (
    <main className="min-h-screen px-8 md:px-24 py-16 flex flex-col gap-16">
      
      <section className="flex flex-col gap-6 text-lg leading-relaxed">
        <h1 className="text-5xl font-bold">About Unplugged</h1>
        <p>
          An adventure 65 million years in the making. Experience the wonder and
          majesty of creatures that once ruled our planet. Unplugged brings together
          the brightest minds to innovate, collaborate, and create groundbreaking
          solutions.
        </p>
      </section>

      <section className="flex flex-col gap-6 text-lg leading-relaxed">
        <h2 className="text-4xl font-semibold">Our Mission</h2>
        <p>
          To foster innovation and creativity among students by providing a platform where ideas
          come to life. We believe in the power of hackathons to transform concepts into reality
          and inspire the next generation of technologists.
        </p>
      </section>

      <section className="flex flex-col gap-6 text-lg leading-relaxed">
        <h2 className="text-4xl font-semibold">Why Unplugged?</h2>
        <p>
          Step away from the ordinary. Unplugged challenges participants to go beyond textbooks
          and embrace real-world problem-solving. It&apos;s where passion meets code, and ideas
          become innovations that matter.
        </p>
      </section>

      <section className="flex flex-col gap-6 text-lg leading-relaxed">
        <h2 className="text-4xl font-semibold">Journey Through Unplugged</h2>

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">Unplugged 1.0</h3>
          <p>
            The inaugural edition that started it all. Discover how Unplugged 1.0 brought innovation
            and creativity to the forefront of student engineering.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">Unplugged 2.0</h3>
          <p>
            The evolution continues. See how Unplugged 2.0 expanded the vision and brought
            more innovation, collaboration, and groundbreaking ideas.
          </p>
        </div>
      </section>

      <section className="flex justify-center mt-8">
        <ThemeSection href="https://djsceietesf.wordpress.com/" />
      </section>

    </main>
  );
}
