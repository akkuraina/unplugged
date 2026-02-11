'use client'
import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <main className="relative">
      <NavBar />

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full flex justify-center">
          <div
            className="w-[90vw] max-w-[1072px] aspect-[1072/603] bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: "url('/unpluggedlogo.png')" }}
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/night.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl w-full">
          <div className="bg-black/40 backdrop-blur-sm p-12 rounded-lg border border-jp-yellow/30 mb-8">
            <h2 className="jp-font text-6xl text-jp-yellow mb-6 text-center">
              About Unplugged
            </h2>
            <p className="text-white text-xl leading-relaxed text-center">
              An adventure 65 million years in the making. Experience the wonder and majesty 
              of creatures that once ruled our planet.
            </p>
          </div>
        </div>
      </section>

      {/* Evaluation Section */}
      <section
        id="evaluation"
        className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/dino.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white text-4xl">
          Evaluation Content
        </div>
      </section>

      {/* Timeline Section */}
      <section
        id="timeline"
        className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/dino2.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white text-4xl">
          Timeline Content
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/night.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white text-4xl">
          FAQ Content
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 py-8 text-center">
        <p className="text-white/60 text-sm">
          © 2026 UNPLUGGED 3.0. All Rights Reserved.
        </p>
      </footer>
    </main>
  )
}
