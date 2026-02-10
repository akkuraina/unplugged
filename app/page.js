'use client';

import ParallaxBackground from '@/components/ParallaxBackground';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <main className="relative min-h-[300vh]">
      {/* Parallax Background */}
      <ParallaxBackground />
      {/*navbar*/}
      <NavBar />
      {/* Content Layer */}
      <div className="relative z-10">
        {/* Hero Section */}
<section className="min-h-screen flex items-center justify-center px-4 relative">
  <div className="w-full flex justify-center">
    <div
      className="w-[90vw] max-w-[1072px] aspect-[1072/603] bg-center bg-contain bg-no-repeat"
      style={{ backgroundImage: "url('/unpluggedlogo.png')" }}
    />
  </div>
</section>


        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-8">
          <div className="max-w-6xl w-full">
            {/* Main Box */}
            <div className="bg-black/40 backdrop-blur-sm p-12 rounded-lg border border-jp-yellow/30 mb-8">
              <h2 className="jp-font text-6xl text-jp-yellow mb-6 text-center">
                About Unplugged
              </h2>
              <p className="text-white text-xl leading-relaxed text-center">
                An adventure 65 million years in the making. Experience the wonder and majesty 
                of creatures that once ruled our planet.
              </p>
            </div>

            {/* Connecting Lines */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-12 bg-jp-yellow/30"></div>
            </div>
            <div className="flex justify-center mb-8">
              <div className="w-2/3 h-px bg-jp-yellow/30 relative">
                <div className="absolute left-1/4 -translate-x-1/2 -top-6 w-px h-6 bg-jp-yellow/30"></div>
                <div className="absolute right-1/4 translate-x-1/2 -top-6 w-px h-6 bg-jp-yellow/30"></div>
              </div>
            </div>

            {/* Two Smaller Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-jp-yellow/30">
                <h3 className="jp-font text-4xl text-jp-yellow mb-4 text-center">
                  Unplugged 1.0
                </h3>
                <p className="text-white/80 text-lg leading-relaxed text-center">
                  Through the miracle of genetic engineering, we've brought them back.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-jp-yellow/30">
                <h3 className="jp-font text-4xl text-jp-yellow mb-4 text-center">
                  Unplugged 2.0
                </h3>
                <p className="text-white/80 text-lg leading-relaxed text-center">
                  But as you'll soon discover, life finds a way...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation Section */}
        <section id="evaluation" className="min-h-screen flex items-center justify-center px-4 py-8">
          <div className="max-w-4xl w-full bg-black/40 backdrop-blur-sm p-12 rounded-lg border border-jp-red/30">
            <h2 className="jp-font text-6xl text-jp-red mb-6 text-center">
              Evaluation Criteria
            </h2>
            <div className="text-white space-y-6">
              <div className="bg-black/30 p-6 rounded-lg border border-jp-yellow/20">
                <h3 className="text-2xl font-bold mb-3 text-jp-yellow">Innovation</h3>
                <p className="text-lg text-white/80">
                  Creativity and originality in your approach
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg border border-jp-yellow/20">
                <h3 className="text-2xl font-bold mb-3 text-jp-yellow">Technical Excellence</h3>
                <p className="text-lg text-white/80">
                  Quality of implementation and technical skills
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg border border-jp-yellow/20">
                <h3 className="text-2xl font-bold mb-3 text-jp-yellow">Impact</h3>
                <p className="text-lg text-white/80">
                  Potential real-world application and usefulness
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="min-h-screen flex items-center justify-center px-4 py-8">
          <div className="max-w-4xl w-full bg-black/40 backdrop-blur-sm p-12 rounded-lg border border-jp-red/30">
            <h2 className="jp-font text-6xl text-jp-yellow mb-6 text-center">
              Event Timeline
            </h2>
            <div className="space-y-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-jp-red rounded-full w-4 h-4 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl font-bold text-jp-yellow mb-2">Registration Opens</h3>
                  <p className="text-lg text-white/80">TBA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-jp-red rounded-full w-4 h-4 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl font-bold text-jp-yellow mb-2">Event Kickoff</h3>
                  <p className="text-lg text-white/80">TBA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-jp-red rounded-full w-4 h-4 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl font-bold text-jp-yellow mb-2">Submission Deadline</h3>
                  <p className="text-lg text-white/80">TBA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-jp-red rounded-full w-4 h-4 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl font-bold text-jp-yellow mb-2">Results Announcement</h3>
                  <p className="text-lg text-white/80">TBA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="min-h-screen flex items-center justify-center px-4 py-8">
          <div className="max-w-4xl w-full bg-black/40 backdrop-blur-sm p-12 rounded-lg border border-jp-red/30">
            <h2 className="jp-font text-6xl text-jp-red mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 text-white">
              <div className="bg-black/30 p-6 rounded-lg border border-jp-yellow/20">
                <h3 className="text-xl font-bold mb-3 text-jp-yellow">Who can participate?</h3>
                <p className="text-white/80">
                  Students from all backgrounds and skill levels are welcome to participate.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg border border-jp-yellow/20">
                <h3 className="text-xl font-bold mb-3 text-jp-yellow">Is there a registration fee?</h3>
                <p className="text-white/80">
                  Please check the registration page for current pricing information.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg border border-jp-yellow/20">
                <h3 className="text-xl font-bold mb-3 text-jp-yellow">What should I bring?</h3>
                <p className="text-white/80">
                  Bring your laptop, creativity, and enthusiasm for innovation!
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg border border-jp-yellow/20">
                <h3 className="text-xl font-bold mb-3 text-jp-yellow">Are teams allowed?</h3>
                <p className="text-white/80">
                  Yes! Team sizes and requirements will be specified during registration.
                </p>
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