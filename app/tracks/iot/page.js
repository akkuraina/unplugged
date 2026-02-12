'use client'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

export default function IoTTrack() {
  return (
    <main className="relative">
      <NavBar />

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center px-4 relative py-24"
        style={{ backgroundImage: "url('/night.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />
        <div className="relative z-10 text-center max-w-4xl">
          <p className="text-amber-400/80 text-sm md:text-base font-semibold tracking-widest mb-4 uppercase">
            Internet of Things
          </p>
          <h1 className="heading mb-8">IOT TRACK</h1>
          <p className="text-amber-100/90 text-base md:text-lg mb-8">
            Build smart connected devices and solutions that shape the future of IoT
          </p>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center py-24"
        style={{ backgroundImage: "url('/night.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />
        
        <div className="relative z-10 w-full max-w-5xl px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Image Placeholder */}
            <div className="glass rounded-2xl h-96 flex items-center justify-center p-8">
              <div className="text-center">
                <p className="text-amber-400 text-lg font-semibold mb-4">Track Image</p>
                <p className="text-amber-100/60">Add your IoT track background image here</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-amber-300 mb-4">Problem Statement</h2>
                <p className="text-amber-100/85 leading-relaxed">
                  Design and develop an innovative IoT solution that solves a real-world problem using sensors, 
                  microcontrollers, cloud connectivity, and data analytics. Your solution should demonstrate 
                  practical applications in domains such as smart homes, industrial automation, healthcare monitoring, 
                  environmental sensing, or agricultural technology.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-300 mb-4">Requirements</h3>
                <ul className="text-amber-100/85 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Use at least 2 sensors for data collection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Microcontroller-based implementation (Arduino, ESP32, Raspberry Pi, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Cloud integration or local data processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Real-world applicability and impact demonstration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jp-yellow">✓</span>
                    <span>Documentation with circuit diagrams, code, and usage guide</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-300 mb-4">Judging Criteria</h3>
                <ul className="text-amber-100/85 space-y-2">
                  <li>• Innovation & Creativity (25%)</li>
                  <li>• Technical Implementation (25%)</li>
                  <li>• Practical Impact (25%)</li>
                  <li>• Presentation Quality (25%)</li>
                </ul>
              </div>

              <Link
                href="/#tracks"
                className="inline-block jurassic-btn mt-6"
              >
                Back to Tracks
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
