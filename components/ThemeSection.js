export default function ThemeSection() {
  return (
    <section className="min-h-screen py-24 text-center px-10">
      <h2 className="heading text-4xl md:text-5xl mb-20">
        THE UNPLUGGED EXPEDITION
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
        <div className="glass text-left">
          <img
            src="/ai-future.jpg"
            alt=""
            className="rounded-lg w-full opacity-90 mb-6 border border-amber-500/20"
          />
          <p className="text-amber-100/90 text-lg">
            Yesterday&apos;s tech fades away. Build what survives.
          </p>
        </div>

        <div className="glass text-left">
          <img
            src="/old-tech.jpg"
            alt=""
            className="rounded-lg w-full opacity-90 mb-6 border border-amber-500/20"
          />
          <p className="text-amber-100/90 text-lg">
            Today, innovation decides the future. Your hardware, your rules.
          </p>
        </div>
      </div>
    </section>
  );
}
