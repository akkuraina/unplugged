'use client';

import ParallaxBackground from '@/components/ParallaxBackground';

export default function Home() {
  return (
    <main className="relative min-h-[300vh]">
      {/* Parallax Background */}
      <ParallaxBackground />

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center">
            {/* UNPLUGGED 3.0 Logo */}
            <h1 className="jp-font text-8xl md:text-9xl font-bold text-jp-yellow mb-4 drop-shadow-[0_0_30px_rgba(220,0,0,0.8)]">
              UNPLUGGED 3.0
            </h1>
            <div className="h-2 w-96 mx-auto bg-gradient-to-r from-transparent via-jp-red to-transparent mb-8" />
            <p className="text-white text-2xl md:text-3xl font-light tracking-wider">
              Welcome to the Adventure
            </p>
          </div>
        </section>

        {/* Content Section 1 */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl bg-black/40 backdrop-blur-sm p-12 rounded-lg border border-jp-yellow/30">
            <h2 className="jp-font text-6xl text-jp-yellow mb-6">
              65 Million Years in the Making
            </h2>
            <p className="text-white text-xl leading-relaxed mb-6">
              An adventure 65 million years in the making. Experience the wonder and majesty 
              of creatures that once ruled our planet. Through the miracle of genetic engineering, 
              we've brought them back.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              But as you'll soon discover, life finds a way...
            </p>
          </div>
        </section>

        {/* Content Section 2 */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl bg-black/40 backdrop-blur-sm p-12 rounded-lg border border-jp-red/30">
            <h2 className="jp-font text-6xl text-jp-red mb-6">
              The Park Awaits
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-white">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-jp-yellow">Attractions</h3>
                <ul className="space-y-2 text-lg">
                  <li>• T-Rex Kingdom</li>
                  <li>• Raptor Paddock</li>
                  <li>• Triceratops Territory</li>
                  <li>• Pteranodon Peak</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-jp-yellow">Experiences</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Gyrosphere Valley</li>
                  <li>• Gentle Giants Petting Zoo</li>
                  <li>• Creation Lab Tours</li>
                  <li>• Jungle River Cruise</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 bg-black/60 backdrop-blur-sm py-8 text-center">
          <p className="text-white/60 text-sm">
            © 2026 UNPLUGGED 3.0. All Rights Reserved.
          </p>
          <p className="text-white/40 text-xs mt-2">
            InGen • International Genetic Technologies, Inc.
          </p>
        </footer>
      </div>
    </main>
  );
}