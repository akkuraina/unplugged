'use client'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

export default function Unplugged2() {
  return (
    <main className="relative">
      <NavBar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover bg-no-repeat py-24" 
        style={{ backgroundImage: "url('/night.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />
        <div className="relative z-10 text-center max-w-4xl">
          <p className="text-amber-400/80 text-sm md:text-base font-semibold tracking-widest mb-4 uppercase">
            The Evolution Continues
          </p>
          <h1 className="heading mb-8">UNPLUGGED 2.0</h1>
          <p className="text-amber-100/90 text-base md:text-lg mb-8">
            Building on the success of Unplugged 1.0, this edition brought bigger challenges, 
            more opportunities, and an even stronger community of innovators.
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
            
            {/* Image Placeholder */}
            <div className="glass rounded-2xl h-96 flex items-center justify-center p-8 order-2 md:order-1">
              <div className="text-center">
                <p className="text-amber-400 text-lg font-semibold mb-4">Event Image</p>
                <p className="text-amber-100/60">Add your images here</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 md:order-2">
              <div>
                <h2 className="text-3xl font-bold text-amber-300 mb-4">Bigger & Better</h2>
                <p className="text-amber-100/85 leading-relaxed">
                  Unplugged 2.0 took everything that made the first edition successful and elevated it. 
                  With increased participation, more tracks, and enhanced mentorship opportunities, 
                  this edition became a landmark event in the student hackathon community.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-amber-300 mb-4">What Made It Special</h2>
                <ul className="text-amber-100/85 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>500+ participants from 50+ colleges nationwide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Expanded hackathon with AI/ML focus track</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Partnerships with leading tech companies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Enhanced prize pool with internship opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Interactive workshops and networking sessions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-amber-300 mb-4">Legacy</h2>
                <p className="text-amber-100/85 leading-relaxed">
                  Unplugged 2.0 established itself as a premier destination for student innovators. 
                  The event demonstrated the power of collaborative innovation and set the stage for 
                  even greater accomplishments to come.
                </p>
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
