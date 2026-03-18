'use client'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

export default function VlsiTrackPage() {
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
              Verilog / VHDL
            </p>
            <h1 className="heading mb-6">Problem Statement</h1>
          </div>

          <div className="glass rounded-2xl border border-amber-500/40 overflow-hidden">
            <div
              className="h-56 md:h-72 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: "url('/vlsi.png')", backgroundColor: '#1a1a1a' }}
            />
            <div className="p-8 md:p-10 space-y-7">
              <p className="text-amber-100/90 text-base md:text-lg leading-relaxed">
                In a wildlife conservation system, remote camera traps continuously capture fixed-size grayscale image blocks (each pixel represented by an 8-bit unsigned value). Due to repeated triggers and environmental variations, a significant lot of captured images are visually similar.
              </p>

              <div>
                <h2 className="text-2xl font-bold text-amber-300 mb-3">Design Requirements</h2>
                <ul className="text-amber-100/85 leading-relaxed list-disc pl-5 space-y-1">
                  <li>Generate a 64-bit image signature from input intensity characteristics.</li>
                  <li>Ensure visually similar images produce similar signatures.</li>
                  <li>Compare two signatures and determine duplicate status.</li>
                  <li>Output duplicate signal when similarity exceeds a configurable threshold.</li>
                  <li>Design must be synthesizable and suitable for real-time embedded deployment.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-amber-300 mb-3">Deliverables</h2>
                <ul className="text-amber-100/85 leading-relaxed list-disc pl-5 space-y-1">
                  <li>Verilog source code</li>
                  <li>Testbench</li>
                  <li>Simulation waveform screenshot</li>
                  <li>Short design explanation (video/report)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-amber-300 mb-3">Component</h2>
                <p className="text-amber-100/85 leading-relaxed">Digilent Basys 3 Artix-7 FPGA</p>
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
