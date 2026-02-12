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
        {/* Background */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/night.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />

        {/* Content */}
        <div className="relative z-20 w-full max-w-5xl px-6 mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-amber-400/80 text-sm md:text-base font-semibold tracking-widest mb-4 uppercase">
              Our Legacy
            </p>
            <h2 className="heading mb-8">About Unplugged</h2>
            <p className="text-amber-100/90 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              An adventure 65 million years in the making. Experience the wonder and majesty of creatures that once ruled our planet. Unplugged brings together the brightest minds to innovate, collaborate, and create groundbreaking solutions.
            </p>
          </div>

          {/* Content */}
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

          {/* Events History */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amber-300 text-center mb-12">Journey Through Unplugged</h3>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Unplugged 1.0 Card */}
              <Link
                href="/unplugged-1"
                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 h-96"
              >
                <div
                  className="absolute inset-0 bg-center bg-cover bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: '#1a1a1a' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Glow effect on hover */}
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

              {/* Unplugged 2.0 Card */}
              <Link
                href="/unplugged-2"
                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 h-96"
              >
                <div
                  className="absolute inset-0 bg-center bg-cover bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: '#1a1a1a' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Glow effect on hover */}
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

      {/* Tracks Section */}
      <section
        id="tracks"
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-24"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/night.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />

        {/* Content */}
        <div className="relative z-20 w-full max-w-5xl px-6 mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-amber-400/80 text-sm md:text-base font-semibold tracking-widest mb-4 uppercase">
              Choose Your Path
            </p>
            <h2 className="heading mb-8">Competition Tracks</h2>
            <p className="text-amber-100/90 max-w-2xl mx-auto text-base md:text-lg">
              Pick your specialty and dive into the challenge that excites you!
            </p>
          </div>

          {/* Tracks Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* IoT Track */}
            <Link
              href="/tracks/iot"
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-96 transition-all duration-500"
            >
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundColor: '#1a1a1a' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-amber-500/50 rounded-2xl" />
              
              <div className="relative z-10 h-full flex flex-col justify-end p-8 group-hover:shadow-inner">
                <h3 className="text-4xl font-bold jp-font text-jp-yellow mb-3 group-hover:text-amber-300 transition-colors">
                  IoT
                </h3>
                <p className="text-amber-100/80 group-hover:text-white transition-colors">
                  Internet of Things. Build smart connected devices and solutions. Explore sensors, microcontrollers, 
                  and wireless communication to create the future of connected systems.
                </p>
              </div>
            </Link>

            {/* VLSI Track */}
            <Link
              href="/tracks/vlsi"
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-96 transition-all duration-500"
            >
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundColor: '#1a1a1a' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-amber-500/50 rounded-2xl" />
              
              <div className="relative z-10 h-full flex flex-col justify-end p-8 group-hover:shadow-inner">
                <h3 className="text-4xl font-bold jp-font text-jp-yellow mb-3 group-hover:text-amber-300 transition-colors">
                  VLSI
                </h3>
                <p className="text-amber-100/80 group-hover:text-white transition-colors">
                  Very Large Scale Integration. Design and implement digital systems. Work with HDL, circuit design, 
                  and hardware optimization to push the boundaries of silicon innovation.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Evaluation Section */}
      <section
        id="evaluation"
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-24"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/dino.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />

        {/* Content */}
        <div className="relative z-20 w-full max-w-6xl px-6 mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-amber-400/80 text-sm md:text-base font-semibold tracking-widest mb-4 uppercase">
              How We Judge
            </p>
            <h2 className="heading mb-8">Evaluation Criteria</h2>
          </div>

          {/* Criteria Boxes with Vine Connectors */}
          <div className="relative">
            {/* SVG Vine Connectors */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ minHeight: '600px' }}
              preserveAspectRatio="none"
            >
              {/* Horizontal vine */}
              <path
                d="M 25% 50% Q 50% 45%, 75% 50%"
                stroke="#FFC500"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
              />
              {/* Vertical vine left */}
              <path
                d="M 25% 30% Q 20% 40%, 25% 50% Q 30% 60%, 25% 70%"
                stroke="#FFC500"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
              />
              {/* Vertical vine right */}
              <path
                d="M 75% 30% Q 80% 40%, 75% 50% Q 70% 60%, 75% 70%"
                stroke="#FFC500"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
              />
              {/* Leafy decorations */}
              <circle cx="25%" cy="30%" r="12" fill="#FFC500" opacity="0.5" />
              <circle cx="75%" cy="30%" r="12" fill="#FFC500" opacity="0.5" />
              <circle cx="50%" cy="45%" r="10" fill="#FFC500" opacity="0.5" />
              <circle cx="25%" cy="70%" r="12" fill="#FFC500" opacity="0.5" />
              <circle cx="75%" cy="70%" r="12" fill="#FFC500" opacity="0.5" />
            </svg>

            {/* 4 Criteria Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              
              {/* Box 1: Innovation */}
              <div className="glass rounded-2xl p-8 border-l-4 border-amber-500">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">💡</span>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-300 mb-4">Innovation</h3>
                    <p className="text-amber-100/85 leading-relaxed">
                      How innovative and creative is your solution? Does it offer a unique approach to problem-solving? 
                      Creativity and originality are at the heart of great projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Box 2: Technical Execution */}
              <div className="glass rounded-2xl p-8 border-l-4 border-amber-500">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">⚙️</span>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-300 mb-4">Technical Execution</h3>
                    <p className="text-amber-100/85 leading-relaxed">
                      Quality of code, implementation proficiency, and technical depth. Does it work smoothly? 
                      Is the architecture sound? Technical excellence matters.
                    </p>
                  </div>
                </div>
              </div>

              {/* Box 3: Practical Impact */}
              <div className="glass rounded-2xl p-8 border-l-4 border-amber-500">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🎯</span>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-300 mb-4">Practical Impact</h3>
                    <p className="text-amber-100/85 leading-relaxed">
                      Real-world applicability and usefulness. Does it solve a genuine problem? 
                      How scalable is the solution? Impact on the community is crucial.
                    </p>
                  </div>
                </div>
              </div>

              {/* Box 4: Presentation */}
              <div className="glass rounded-2xl p-8 border-l-4 border-amber-500">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🎤</span>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-300 mb-4">Presentation</h3>
                    <p className="text-amber-100/85 leading-relaxed">
                      How well do you present your idea? Clarity, demo quality, and communication skills. 
                      Can you inspire and engage the judges with your pitch?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bonus Section */}
          <div className="mt-12 text-center p-8 border-t border-amber-500/30">
            <p className="text-amber-100 text-lg">
              <span className="font-bold text-amber-300">Bonus Marks:</span> Additional points awarded for exceptional creativity, 
              use of hardware/IoT components, and projects that address sustainability and social good!
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        id="timeline"
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-24"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/dino2.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />

        {/* Content */}
        <div className="relative z-20 w-full max-w-6xl px-6 mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-amber-400/80 text-sm md:text-base font-semibold tracking-widest mb-4 uppercase">
              The Journey Begins
            </p>
            <h2 className="heading mb-8">Expedition Timeline</h2>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            
            {/* Round 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Timeline dot */}
              <div className="relative flex flex-col items-center">
                <div className="w-8 h-8 bg-jp-yellow rounded-full border-4 border-black/50 relative z-10" />
                <div className="w-1 h-32 md:h-0 md:w-32 bg-gradient-to-r from-jp-yellow/50 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="glass rounded-2xl p-8 flex-1 border-l-4 border-jp-yellow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🌍</span>
                  <div>
                    <h3 className="text-2xl font-bold text-jp-yellow mb-2">Round 1: Online Elimination</h3>
                    <p className="text-amber-400 font-semibold mb-3">15th February - 15th March 2026</p>
                    <p className="text-amber-100/85 leading-relaxed mb-3">
                      The hunt begins! Submit your innovative ideas on Unstop platform. Teams will be judged on 
                      problem statement clarity, feasibility, and innovation potential. Top teams advance to Round 2.
                    </p>
                    <p className="text-amber-100/70 text-sm">
                      📍 <strong>Platform:</strong> Unstop | <strong>Mode:</strong> Online
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Round 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              {/* Timeline dot */}
              <div className="relative flex flex-col items-center">
                <div className="w-8 h-8 bg-jp-yellow rounded-full border-4 border-black/50 relative z-10" />
                <div className="w-1 h-32 md:h-0 md:w-32 bg-gradient-to-l from-jp-yellow/50 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="glass rounded-2xl p-8 flex-1 border-l-4 border-jp-yellow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">⚡</span>
                  <div>
                    <h3 className="text-2xl font-bold text-jp-yellow mb-2">Round 2: Offline Hackathon</h3>
                    <p className="text-amber-400 font-semibold mb-3">4th April 2026 | 9:00 AM onwards</p>
                    <p className="text-amber-100/85 leading-relaxed mb-3">
                      Shortlisted teams from Round 1 gather on campus for an intense 24-hour hackathon. 
                      Build, code, and innovate in real-time with mentorship and resources available throughout.
                    </p>
                    <p className="text-amber-100/70 text-sm">
                      📍 <strong>Venue:</strong> DJSCE Campus, Mumbai | <strong>Mode:</strong> Offline
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Round 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Timeline dot */}
              <div className="relative flex flex-col items-center">
                <div className="w-8 h-8 bg-jp-yellow rounded-full border-4 border-black/50 relative z-10" />
              </div>
              
              {/* Content */}
              <div className="glass rounded-2xl p-8 flex-1 border-l-4 border-jp-yellow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🏆</span>
                  <div>
                    <h3 className="text-2xl font-bold text-jp-yellow mb-2">Round 3: Finals & Pitch</h3>
                    <p className="text-amber-400 font-semibold mb-3">5th April 2026 | 5:00 PM onwards</p>
                    <p className="text-amber-100/85 leading-relaxed mb-3">
                      Same day as Round 2. Top 5-8 teams present their projects to a panel of expert judges. 
                      Showcase your innovation, be judged, and celebrate the winners of Unplugged 3.0!
                    </p>
                    <p className="text-amber-100/70 text-sm">
                      📍 <strong>Venue:</strong> DJSCE Campus, Mumbai | <strong>Mode:</strong> Offline | 
                      <span className="font-semibold text-amber-400"> For Shortlisted Teams Only</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DJSCE Location Map Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-amber-300 text-center mb-12">Event Venue: DJSCE Campus</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Map */}
              <div className="glass rounded-2xl overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9328484721733!2d72.83856999999999!3d19.054999999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce63e97e1e9f%3A0x4fd6f6c5d6b5e5e5!2sDJSCE%20Chatushringi!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DJSCE Location Map"
                />
              </div>

              {/* Venue Details */}
              <div className="space-y-6">
                <div className="glass rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-amber-300 mb-4">Campus Address</h4>
                  <p className="text-amber-100/85 leading-relaxed">
                    Dwarkadas J. Sanghvi College of Engineering<br/>
                    Vile Parle, Mumbai – 400056<br/>
                    Maharashtra, India
                  </p>
                </div>

                <div className="glass rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-amber-300 mb-4">Key Details</h4>
                  <ul className="text-amber-100/85 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-jp-yellow">📍</span>
                      <span>Located in Vile Parle, easily accessible by local transport</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-jp-yellow">🅿️</span>
                      <span>Ample parking available for participants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-jp-yellow">🍽️</span>
                      <span>Food and refreshments available throughout the event</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-jp-yellow">💻</span>
                      <span>High-speed internet and workstations provided</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* FAQ */}
<section
  id="faq"
  className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-24"
>
  {/* Background */}
  <div
    className="absolute inset-0 bg-center bg-cover bg-no-repeat"
    style={{ backgroundImage: "url('/night.png')" }}
  />

  {/* Dark gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />

  {/* Content */}
  <div className="relative z-20 w-full max-w-4xl px-6 mx-auto">

    {/* Header */}
    <div className="text-center mb-20">
      <p className="text-amber-400/80 text-sm md:text-base font-semibold tracking-widest mb-4 uppercase">
        You Asked. We Answered.
      </p>

      <h2 className="heading mb-8">FAQ</h2>

      <p className="text-amber-100/90 max-w-2xl mx-auto text-base md:text-lg">
        Before you step into the <em>adventure of a lifetime</em> — every question you have, answered right here.
      </p>
    </div>

    {/* Accordion */}
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



      {/* Footer */}
      <footer className="bg-black/80 py-8 text-center">
        <p className="text-white/60 text-sm">
          © 2026 UNPLUGGED 3.0. All Rights Reserved.
        </p>
      </footer>
    </main>
  )
}
