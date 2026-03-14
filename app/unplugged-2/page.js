'use client'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

export default function Unplugged2() {
  return (
    <main className="relative">
      <NavBar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover bg-no-repeat py-24" 
        style={{ backgroundImage: "url('/hero.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />
        <div className="relative z-10 text-center max-w-4xl">
          <p className="text-amber-400/80 text-sm md:text-base font-semibold tracking-widest mb-4 uppercase">
            The Evolution Continues
          </p>
          <h1 className="heading mb-8">UNPLUGGED 2.0</h1>
          <p className="text-amber-100/90 text-base md:text-lg mb-8">
            Bigger, broader, and bolder.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative min-h-screen flex items-center justify-center py-24">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />
        
        <div className="relative z-10 w-full max-w-5xl px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Event Image */}
            <div className="glass rounded-2xl h-96 overflow-hidden order-2 md:order-1">
              <img
                src="/unplugged2.png"
                alt="Unplugged 2.0 event"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 md:order-2">
              <div>
                <h2 className="text-3xl font-bold text-amber-300 mb-4">The Beginning</h2>
                <p className="text-amber-100/85 leading-relaxed">
                  Unplugged 2.0, organised by the IETE Students&apos; Forum at Dwarkadas J. Sanghvi College of Engineering, was the second edition of the 24-hour National Hardware Hackathon, held on 8-9 March 2025. Building upon the success of its inaugural edition, the event brought together 250 undergraduate engineering students from across India to develop innovative hardware solutions focused on Smart City Infrastructure and Sustainability.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-amber-300 mb-4">Highlights</h2>
                <ul className="text-amber-100/85 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>24-hour national hardware innovation hackathon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Participation from 250+ engineering students across India</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Theme focused on Smart City Infrastructure and Sustainability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Multi-round challenge including proposal design, PCB simulation, and prototype development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Hands-on design using KiCad, Fusion 360, IoT sensors, and AI models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Development of edge-AI driven smart city monitoring systems</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-amber-300 mb-4">Impact</h2>
                <p className="text-amber-100/85 leading-relaxed">
                  Unplugged 2.0 expanded the vision of the hackathon by encouraging participants to design intelligent urban systems using IoT, AI, and hardware integration. The event promoted system-level thinking, collaborative problem-solving, and practical engineering skills while addressing real-world urban challenges such as environmental monitoring, traffic management, and public safety.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-amber-300 mb-4">Winners</h2>
                <ul className="text-amber-100/85 space-y-2 leading-relaxed">
                  <li>Winner: Team MangoDB - Pillai College of Engineering (Rs 50,000)</li>
                  <li>First Runner-Up: Team LED - Hindustan Institute of Technology and Science (Rs 30,000)</li>
                  <li>Second Runner-Up: Team Eco-Wolves - Shri Eshwar College of Engineering (Rs 20,000)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-16 text-center">
            <Link
              href="/#about"
              className="inline-block jurassic-btn"
            >
              Back to Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
