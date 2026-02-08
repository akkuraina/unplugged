export default function ThemeSection() {
  return (
    <section id="theme" className="min-h-screen py-24 text-center px-10">
      <h2 className="text-5xl text-yellow-400 mb-20">
        THE UNPLUGGED WARNING
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src="/ai-future.jpg" className="rounded-lg opacity-70 w-full" />
          <p className="mt-6 text-lg">Yesterday's tech fades away.</p>
        </div>

        <div className="relative">
          <img src="/ai-future.jpg" className="rounded-lg opacity-70 w-full" />
          <p className="mt-6 text-lg">
            Today, innovation decides the future.
          </p>
        </div>
      </div>
    </section>
  );
}
