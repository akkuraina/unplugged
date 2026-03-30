'use client'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

export default function Unplugged1() {
  return (
    <main className="relative">
      <NavBar />

      {/* Hero Section */}
      {/* <section className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover bg-no-repeat py-24" 
        style={{ backgroundImage: "url('/jurrasicpark.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />
        <div className="relative z-10 text-center max-w-4xl">
          <p className="text-amber-400/80 text-sm md:text-base font-semibold tracking-widest mb-4 uppercase">
            Our First Innovation
          </p>
          <h1 className="heading mb-8">UNPLUGGED 1.0</h1>
          <p className="text-amber-100/90 text-base md:text-lg mb-8">
            The journey that started it all.
          </p>
        </div>
      </section> */}

      {/* Content Section */}
      <section className="relative min-h-screen flex items-center justify-center py-24 top-1">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/jurrasicpark.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />
        
        <div className="relative z-10 w-full max-w-5xl px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-amber-300 mb-4">The Beginning</h2>
                <p className="text-amber-100/85 leading-relaxed">
                  Unplugged 1.0, organised by the IETE-ISF at Dwarkadas J. Sanghvi College of Engineering, was a 24-hour National Hardware Hackathon held on 9-10 March 2024. The event brought together talented engineering students from across India to design innovative hardware and IoT solutions for precision agriculture. Participants collaborated, experimented, and transformed ideas into functional prototypes within an intense 24-hour innovation sprint.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-amber-300 mb-4">Highlights</h2>
                <ul className="text-amber-100/85 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>24-hour national hardware hackathon focused on IoT innovation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Participation from engineering teams across India</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Real-world challenge on smart irrigation and water conservation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Hands-on PCB design using KiCad and hardware prototyping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Integration of IoT, sensors, AI/ML, and cloud technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Mentorship and evaluation by faculty and industry experts</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-amber-300 mb-4">Impact</h2>
                <p className="text-amber-100/85 leading-relaxed">
                  Unplugged 1.0 created a platform for students to explore hardware innovation and sustainable agricultural technology. The hackathon encouraged participants to develop scalable IoT solutions for efficient water management, highlighting how technology can support modern farming. The event successfully fostered collaboration, creativity, and practical learning, setting the stage for even bigger editions in the future.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-amber-300 mb-4">Winners</h2>
                <ul className="text-amber-100/85 space-y-2 leading-relaxed">
                  <li>Winner: Team LED - Hindustan Institute of Technology and Science (Rs 50,000)</li>
                  <li>First Runner-Up: Team Agro-Technoticians - Shri Vile Parle Kelavani Mandal&apos;s Dwarkadas J. Sanghvi College of Engineering (Rs 30,000)</li>
                  <li>Second Runner-Up: Team Cloud Crop - Jain College of Engineering, Belgaum (Rs 20,000)</li>
                </ul>
              </div>
            </div>

            {/* Event Image */}
            <div className="glass rounded-2xl h-96 overflow-hidden">
              <img
                src="/unplugged1.png"
                alt="Unplugged 1.0 event"
                className="w-full h-full object-cover"
              />
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
