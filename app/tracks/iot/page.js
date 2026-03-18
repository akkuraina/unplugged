'use client'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

export default function IoTTrackPage() {
  return (
    <main className="relative">
      <NavBar />

      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-24 scroll-mt-20">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/jurrasicpark.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />

        <div className="relative z-20 w-full max-w-6xl px-6 mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-400/80 text-sm md:text-base font-semibold tracking-widest mb-4 uppercase">
              IoT / Embedded
            </p>
            <h1 className="heading mb-6">Problem Statement</h1>
          </div>

          <div className="glass rounded-2xl border border-amber-500/40 overflow-hidden">
            <div
              className="h-56 md:h-72 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: "url('/iot.png')", backgroundColor: '#1a1a1a' }}
            />
            <div className="p-8 md:p-10 space-y-7">
              <p className="text-amber-100/90 text-base md:text-lg leading-relaxed">
                Design an integrated IOT-based smart safari management system that enhances wildlife monitoring, visitor experience, operational efficiency, and conservation analytics within a controlled jungle safari ecosystem.
              </p>

              <div>
                <h2 className="text-2xl font-bold text-amber-300 mb-3">Compulsory Task</h2>
                <p className="text-amber-100/85 leading-relaxed">
                  PPT Submission - Concept and System Design. The presentation should clearly communicate innovation, technical depth, and practical implementation strategy. Teams to strictly only refer to the PPT layout attached.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-amber-300 mb-3">Optional Tasks (Choose Any One or Both)</h2>
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-semibold text-jp-yellow mb-2">Task 1: Software Track - Safari Ticketing and Monitoring System</h3>
                    <ul className="text-amber-100/85 leading-relaxed list-disc pl-5 space-y-1">
                      <li>Online ticket booking system</li>
                      <li>Real-time tracking of safari vehicles</li>
                      <li>Dynamic slot allocation based on active vehicle count</li>
                      <li>Live dashboard for animals spotted, weather updates, zone activity, and other real-time safari changes</li>
                      <li>Real-time data may be simulated but must use a real-time database architecture</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-jp-yellow mb-2">Task 2: Hardware Track - Animal Detection System</h3>
                    <ul className="text-amber-100/85 leading-relaxed list-disc pl-5 space-y-1">
                      <li>Develop and train a computer vision model to detect safari animals</li>
                      <li>Must use ESP32-CAM and a microcontroller-based system</li>
                      <li>Raspberry Pi or equivalent boards are strictly prohibited</li>
                      <li>Should demonstrate real-time or near real-time detection</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-amber-300 mb-3">Components</h2>
                <p className="text-amber-100/85 leading-relaxed">
                  ESP-32, ESP32-CAM Module, RFID Module, Neo-6M (GPS Module), IR Sensor
                </p>
              </div>

              <div className="pt-2">
                <Link href="/#tracks" className="inline-block jurassic-btn">
                  Back to Problem Statements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
