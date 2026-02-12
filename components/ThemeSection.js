export default function ThemeSection({ href }) {
  return (
    <section className="min-h-screen py-24 text-center px-10">
      <h2 className="heading text-4xl md:text-5xl mb-20">
        THE UNPLUGGED EXPEDITION
      </h2>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 text-xl font-semibold rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
      >
        Learn More on IETE Website
      </a>
    </section>
  );
}
