'use client'
import NavBar from '@/components/NavBar'
import { faq } from '@/app/data/faq'
import FaqCategory from '@/components/FaqCategory'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative">
      <NavBar />

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover bg-no-repeat pt-[100px]"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <p className="text-amber-100 text-sm md:text-base font-semibold tracking-widest mb-8 uppercase">
            IETE-SF X DJS MICROMINDS PRESENTS
          </p>
          <div
            className="w-[90vw] max-w-[1072px] aspect-[1072/603] bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: "url('/unpluggedlogo.png')" }}
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-24"
      >
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/night.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />

        <div className="relative z-20 w-full max-w-5xl px-6 mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400/80 text-sm md:text-base font-semibold tracking-widest mb-4 uppercase">
              Our Legacy
            </p>
            <h2 className="heading mb-8">About Unplugged</h2>
            <p className="text-amber-100/90 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              An adventure 65 million years in the making. Experience the wonder and majesty of creatures that once ruled our planet. Unplugged brings together the brightest minds to innovate, collaborate, and create groundbreaking solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass rounded-xl p-8">
              <h3 className="text-xl font-bold text-amber-300 mb-4">Our Mission</h3>
              <p className="text-amber-100/85 leading-relaxed">
                To foster innovation and creativity among students by providing a platform where ideas come to life. We believe in the power of hackathons to transform concepts into reality and inspire the next generation of technologists.
              </p>
            </div>
            <div className="glass rounded-xl p-8">
              <h3 className="text-xl font-bold text-amber-300 mb-4">Why Unplugged?</h3>
              <p className="text-amber-100/85 leading-relaxed">
                Step away from the ordinary. Unplugged challenges participants to go beyond textbooks and embrace real-world problem-solving. It's where passion meets code, and ideas become innovations that matter.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amber-300 text-center mb-12">Journey Through Unplugged</h3>
            <div className="grid md:grid-cols-2 gap-8">
              
              <Link href="/unplugged-1" className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 h-96">
                <div className="absolute inset-0 bg-center bg-cover bg-no-repeat group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: '#1a1a1a' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-amber-500/50" />
                <div className="relative z-10 h-full flex flex-col justify-end p-8 group-hover:shadow-inner">
                  <h4 className="text-3xl font-bold jp-font text-jp-yellow mb-3 group-hover:text-amber-300 transition-colors">
                    UNPLUGGED 1.0
                  </h4>
                  <p className="text-amber-100/80 group-hover:text-white transition-colors line-clamp-3">
                    The inaugural edition that started it all. Discover how Unplugged 1.0 brought innovation and creativity to the forefront of student engineering.
                  </p>
                </div>
              </Link>

              <Link href="/unplugged-2" className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 h-96">
                <div className="absolute inset-0 bg-center bg-cover bg-no-repeat group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: '#1a1a1a' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-amber-500/50" />
                <div className="relative z-10 h-full flex flex-col justify-end p-8 group-hover:shadow-inner">
                  <h4 className="text-3xl font-bold jp-font text-jp-yellow mb-3 group-hover:text-amber-300 transition-colors">
                    UNPLUGGED 2.0
                  </h4>
                  <p className="text-amber-100/80 group-hover:text-white transition-colors line-clamp-3">
                    The evolution continues. See how Unplugged 2.0 expanded the vision and brought more innovation, collaboration, and groundbreaking ideas.
                  </p>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-24"
      >
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/night.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />

        <div className="relative z-20 w-full max-w-4xl px-6 mx-auto">
          <div className="text-center mb-20">
            <p className="text-amber-400/80 text-sm md:text-base font-semibold tracking-widest mb-4 uppercase">
              You Asked. We Answered.
            </p>

            <h2 className="heading mb-8">FAQ</h2>

            <p className="text-amber-100/90 max-w-2xl mx-auto text-base md:text-lg">
              Before you step into the adventure of a lifetime, every question you have, answered right here.
            </p>
          </div>

          <div className="space-y-6">
            {faq.map((section, i) => (
              <FaqCategory
                key={i}
                icon={section.icon}
                category={section.category}
                questions={section.questions}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black/80 py-8 text-center">
        <p className="text-white/60 text-sm">
          © 2026 UNPLUGGED 3.0. All Rights Reserved.
        </p>
      </footer>
    </main>
  )
}