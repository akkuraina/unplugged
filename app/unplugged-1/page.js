'use client'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

export default function Unplugged1() {
  return (
    <main className="relative">
      <NavBar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover bg-no-repeat py-24" 
        style={{ backgroundImage: "url('/night.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />
        <div className="relative z-10 text-center max-w-4xl">
          <p className="text-amber-400/80 text-sm md:text-base font-semibold tracking-widest mb-4 uppercase">
            Our First Innovation
          </p>
          <h1 className="heading mb-8">UNPLUGGED 1.0</h1>
          <p className="text-amber-100/90 text-base md:text-lg mb-8">
            The journey that started it all. Unplugged 1.0 was the inaugural edition of our flagship hackathon, 
            bringing together innovators and creators from across the nation.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative min-h-screen flex items-center justify-center py-24">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/night.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />
        
        <div className="relative z-10 w-full max-w-5xl px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-amber-300 mb-4">The Beginning</h2>
                <p className="text-amber-100/85 leading-relaxed">
                  Unplugged 1.0 marked the beginning of a new era in hackathons. With innovation at its core, 
                  it brought together brilliant minds from various colleges and backgrounds to collaborate, 
                  compete, and create solutions to real-world problems.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-amber-300 mb-4">Highlights</h2>
                <ul className="text-amber-100/85 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>200+ participants from across the nation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>24-hour non-stop coding marathon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Multiple tracks spanning IoT, Web, and Mobile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Mentorship from industry experts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Prize pool of 2 lakhs</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-amber-300 mb-4">Impact</h2>
                <p className="text-amber-100/85 leading-relaxed">
                  Unplugged 1.0 set the foundation for what would become one of the most anticipated 
                  hackathons in the country. The event created an inspiring environment where creativity 
                  flourished and innovation took center stage.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="glass rounded-2xl h-96 flex items-center justify-center p-8">
              <div className="text-center">
                <p className="text-amber-400 text-lg font-semibold mb-4">Event Image</p>
                <p className="text-amber-100/60">Add your images here</p>
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
