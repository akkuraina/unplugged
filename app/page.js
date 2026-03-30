'use client'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import { faq } from '@/app/data/faq'
import FaqCategory from '@/components/FaqCategory'
import Link from 'next/link'
import ScrollAnimation from '@/components/ScrollAnimation'
import CustomCursor from '@/components/CustomCursor'
import JurassicLeaves from '@/components/JurassicLeaves'
import { useEffect, useRef, useState } from "react";
export default function Home() {

  const sectionRef = useRef(null);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRotate(true);
        }
      },
      { threshold: 0.5 } // triggers when 50% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <main className="relative">
      <JurassicLeaves />
      <ScrollAnimation />
      <CustomCursor />
      <NavBar />
      {/* ── Hero ── */}
      <section
        className="h-screen flex items-center justify-center px-4 relative overflow-hidden pt-[104px]"
      >
        <div className="relative z-10 w-full max-w-4xl mx-auto h-screen flex flex-col items-center justify-center text-center">

          {/* Unplugged Logo */}
          <div className="logo-glow-bounce">
            <Image
              src="/unpluggedlogo.png"
              alt="Unplugged Logo"
              width={1200}
              height={800}
              className="w-[1200px] md:w-[1000px] h-auto max-h-[120vh] object-contain"
              priority
            />
          </div>

          {/* Registration button */}
          <div className="absolute bottom-20 flex flex-col items-center gap-4">
            <a
              href="/round1-selected-teams.pdf"  // 👉 replace with your PDF link later
              target="_blank"
              rel="noopener noreferrer"
              className="jurassic-button group relative inline-flex items-center gap-3 px-6 md:px-7 py-2 md:py-2.5 rounded-full border border-red-500/60 bg-black/55 backdrop-blur-sm font-semibold text-xs md:text-sm transition-all duration-300 hover:scale-105 hover:border-red-400 hover:shadow-[0_0_30px_10px_rgba(239,68,68,0.55)]"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600" />
              </span>

              <span className="group-hover:text-amber-300">
                Round 1 Selected Teams (View List)
              </span>
            </a>
          </div>

          {/* Top Section */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 md:gap-0">

            {/* Logos */}
            <div className="flex items-center gap-4 md:gap-6">
              <Image
                src="/iete.png"
                alt="IETE Logo"
                width={100}
                height={100}
                className="w-16 md:w-24 h-auto object-contain"
              />

              <span className="jurassic-nav text-3xl md:text-5xl font-bold">×</span>

              <Image
                src="/microminds.png"
                alt="MicroMinds Logo"
                width={100}
                height={100}
                className="w-16 md:w-24 h-auto object-contain"
              />
            </div>

            {/* Text */}
            <p className="jurassic-nav text-base md:text-xl font-semibold tracking-widest uppercase">
              Proudly Presents
            </p>
          </div>

        </div>

        {/* 🔥 Maven - LEFT EDGE */}
        <div className="absolute bottom-8 left-12 z-20 flex flex-col items-center gap-2">
          <Image
            src="/maven.png"
            alt="Maven Silicon"
            width={100}
            height={100}
            className="w-16 md:w-24 h-auto object-contain"
          />
          <p className="text-amber-300/80 text-[8px] md:text-xs uppercase tracking-[0.18em] font-semibold text-center">
            Educational Sponsor
          </p>
        </div>

        {/* 🔥 Unstop - RIGHT EDGE */}
        <div className="absolute bottom-8 right-12 z-20 flex flex-col items-center gap-2">
          <Image
            src="/unstop.png"
            alt="Unstop"
            width={100}
            height={100}
            className="w-16 md:w-24 h-auto object-contain"
          />
          <p className="text-amber-300/80 text-[8px] md:text-xs uppercase tracking-[0.18em] font-semibold text-center">
            Powered By
          </p>
        </div>

      </section>

      <section
        id="about"
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-24 scroll-mt-20"
      >

        <div className="relative z-20 w-full max-w-5xl px-6 mx-auto">
          <div className="text-center mb-16">

            <h2 className="jurassic-heading jurassic-reveal mb-8" data-text="ABOUT UNPLUGGED">About Unplugged</h2>
            <div className="glass bg-black/50 backdrop-blur-md rounded-xl p-5 text-center">
              <p className="jurassic-body max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                Unplugged is a 24 hour hardware hackathon, birthed by DJSCE IETE-ISF in year 2024. As we embark on our third edition, we join hands with DJS Microminds, a brand new VLSI club of our department. We invite you to explore the wild with us!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass rounded-xl p-8 text-center">
              <h3 className="jurassic-subheading mb-4">DJSCE IETE-ISF</h3>
              <p className="jurassic-body leading-relaxed">
                Welcome to the IETE Students&apos; Forum at D.J. Sanghvi College of Engineering, a beacon of educational excellence and innovation since 2005. Here, we go beyond academics to provide a holistic learning experience enriched with dynamic extra-curricular activities. Over the years, our forum has been the birthplace of impactful events and transformative experiences — hosting Unplugged, a thrilling hardware hackathon unique in its kind, alongside sessions on drone flying, MATLAB, VLSI, armed forces, PLC, and many more to come.
              </p>
            </div>
            <div className="glass rounded-xl p-8 text-center">
              <h3 className="jurassic-subheading mb-4">DJS Microminds</h3>
              <p className="jurassic-body leading-relaxed">
                Welcome to DJS Microminds, the VLSI and Semiconductor Design community of DJ Sanghvi College of Engineering. Established in its inaugural tenure with a clear and ambitious vision — to build a strong, student-driven ecosystem focused on chip design, RTL development, and hardware innovation. Microminds emphasizes strong fundamentals in digital design with hands-on exposure through FPGA-based implementation and real-world VLSI workflows. True learning happens when theory meets silicon.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="jurassic-subheading text-center mb-12" data-text="JOURNEY THROUGH UNPLUGGED">Journey Through Unplugged</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Link
                href="/unplugged-1"
                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 h-96 hover:scale-[1.01]"
              >
                <div
                  className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: "url('/unplugged1.png')", backgroundColor: '#1a1a1a' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_0_2px_rgba(245,158,11,0.5)]" />
                <div className="relative z-10 h-full flex flex-col justify-end p-3">
                  <h4 className="jurassic-accent mb-2" data-text="UNPLUGGED 1.0">UNPLUGGED 1.0</h4>
                </div>
              </Link>

              <Link
                href="/unplugged-2"
                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 h-96 hover:scale-[1.01]"
              >
                <div
                  className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: "url('/unplugged2.png')", backgroundColor: '#1a1a1a' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_0_2px_rgba(245,158,11,0.5)]" />
                <div className="relative z-10 h-full flex flex-col justify-end p-3">
                  <h4 className="jurassic-accent mb-2" data-text="UNPLUGGED 2.0">UNPLUGGED 2.0</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem Statement ── */}
      <section
        id="problem-statements"
        className="relative w-full overflow-hidden py-16 scroll-mt-20"
      >
        <div className="relative z-20 w-full max-w-6xl px-6 mx-auto">
          <div className="text-center mb-20">
            <h2
              className="jurassic-heading jurassic-reveal mb-8"
              data-text="PROBLEM STATEMENT"
            >
              Problem Statement
            </h2>

            <div className="glass max-w-5xl mx-auto rounded-2xl border border-amber-500/40 p-6 md:p-8 text-center transition-all duration-500 hover:shadow-[0_0_36px_10px_rgba(245,158,11,0.22)] hover:border-amber-400/70 mb-8">
              <h3 className="jurassic-subheading mb-3">Overview</h3>
              <p className="jurassic-body leading-relaxed">
                Jungle safaris are controlled eco-tourism experiences within protected forest reserves, designed to promote wildlife conservation while allowing visitors to observe animals in their natural habitat. However, managing safari operations is increasingly complex. Most systems rely on manual logging, limited tracking, and fragmented wildlife data, making it difficult to monitor animal movement, regulate tourist flow, and prevent overcrowding in popular zones. The lack of real-time visibility and structured data restricts forest authorities from making informed, data-driven decisions for conservation planning and resource allocation. As eco-tourism grows, there is a critical need for a smarter, more organized safari management infrastructure that balances visitor engagement with long-term wildlife protection. Our initiative proposes a smart safari ecosystem to modernize operations. The system will track wildlife movement, tourist flow, and zone popularity, enabling forest authorities to optimize resources, reduce ecological impact, and enhance visitor experience. The goal is to build an intelligent, technology-driven safari infrastructure that strengthens both conservation efforts and sustainable tourism management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tracks ── */}
      <section
        id="tracks"
        className="relative w-full overflow-hidden py-16 scroll-mt-20"
      >
        <div className="relative z-20 w-full max-w-6xl px-6 mx-auto">
          <div className="text-center mb-20">
            <h2
              className="jurassic-heading jurassic-reveal mb-8"
              data-text="TRACKS"
            >
              TRACKS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <Link
              href="/tracks/iot"
              className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_32px_8px_rgba(245,158,11,0.35)]"
            >
              <div className="glass rounded-2xl border border-amber-500/40 overflow-hidden h-full">
                <div
                  className="h-44 bg-center bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: "url('/iot.png')", backgroundColor: "#1a1a1a" }}
                />
                <div className="p-7 space-y-4">
                  <h3 className="jurassic-accent mb-2" data-text="IOT">
                    IoT
                  </h3>
                  <p className="jurassic-body leading-relaxed text-base md:text-lg">
                    Click to explore problem statement.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/tracks/vlsi"
              className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_32px_8px_rgba(245,158,11,0.35)]"
            >
              <div className="glass rounded-2xl border border-amber-500/40 overflow-hidden h-full">
                <div
                  className="h-44 bg-center bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: "url('/vlsi.png')", backgroundColor: "#1a1a1a" }}
                />
                <div className="p-7 space-y-4">
                  <h3 className="jurassic-accent mb-2" data-text="VLSI">
                    VLSI
                  </h3>
                  <p className="jurassic-body leading-relaxed text-base md:text-lg">
                    Click to explore problem statement.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Prize Pool ── */}
      <section
        ref={sectionRef}  // ✅ IMPORTANT
        id="prizepool"
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-24 scroll-mt-20"
      >
        <div className="relative z-20 w-full max-w-6xl px-6 mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="jurassic-heading text-8xl md:text-8xl mb-4">
              PRIZE POOL
            </h2>
          </div>

          {/* Coins */}
          <div className="flex flex-col items-center gap-12">

            {/* First Prize */}
            <div className="flex flex-col items-center text-center">
              <div
                className={`relative w-[300px] h-[250px] transition-all duration-500 hover:scale-105 ${rotate ? "animate-spin-once" : ""
                  }`}
              >
                <img
                  src="/first.png"
                  alt="First place coin"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Second + Third */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-3xl place-items-center">

              {/* Second Prize */}
              <div className="flex flex-col items-center text-center">
                <div
                  className={`relative w-[300px] h-[250px] transition-all duration-500 hover:scale-105 ${rotate ? "animate-spin-once delay-200" : ""
                    }`}
                >
                  <img
                    src="/second.png"
                    alt="Second place coin"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Third Prize */}
              <div className="flex flex-col items-center text-center">
                <div
                  className={`relative w-[300px] h-[250px] transition-all duration-500 hover:scale-105 ${rotate ? "animate-spin-once delay-400" : ""
                    }`}
                >
                  <img
                    src="/third.png"
                    alt="Third place coin"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section
        id="timeline"
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-24 scroll-mt-20"
      >

        <div className="relative z-20 w-full max-w-6xl px-6 mx-auto">
          <div className="text-center mb-20">
            <h2 className="jurassic-heading jurassic-reveal mb-8" data-text="EXPEDITION TIMELINE">EXPEDITION TIMELINE</h2>
          </div>

          <div className="space-y-12">
            {/* Round 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative flex flex-col items-center">
                <div className="w-8 h-8 bg-jp-yellow rounded-full border-4 border-black/50 relative z-10" />
                <div className="w-1 h-32 md:h-0 md:w-32 bg-gradient-to-r from-jp-yellow/50 to-transparent" />
              </div>
              <div className="glass rounded-2xl p-8 flex-1 border-l-4 border-jp-yellow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🌍</span>
                  <div>
                    <h3 className="jurassic-subheading mb-2">ROUND 1: ONLINE ELIMINATION</h3>
                    <p className="text-amber-400 font-semibold mb-3">8th March - 20th March 2026</p>
                    <p className="text-amber-100/85 leading-relaxed mb-3">
                      The hunt begins! Submit your innovative ideas on Unstop platform. Teams will be judged on
                      problem statement clarity, feasibility, and innovation potential. Top teams advance to Round 2.
                    </p>
                    <p className="text-amber-100/70 text-sm">
                      📍 <strong>Platform:</strong> Unstop | <strong>Mode:</strong> Online
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://unstop.com/hackathons/unplugged-a-24-hour-hardware-hackathon-shri-vile-parle-kelavani-mandals-dwarkadas-j-sanghvi-college-of-engine-1655514"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600/20 border border-red-500 text-red-400 font-semibold text-sm hover:bg-red-600/40 hover:text-red-300 transition-all duration-300 hover:shadow-[0_0_18px_4px_rgba(239,68,68,0.5)]"
                      >
                        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
                        </span>
                        Registrations are live!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Round 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="relative flex flex-col items-center">
                <div className="w-8 h-8 bg-jp-yellow rounded-full border-4 border-black/50 relative z-10" />
                <div className="w-1 h-32 md:h-0 md:w-32 bg-gradient-to-l from-jp-yellow/50 to-transparent" />
              </div>
              <div className="glass rounded-2xl p-8 flex-1 border-l-4 border-jp-yellow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">⚡</span>
                  <div>
                    <h3 className="jurassic-subheading mb-2">ROUND 2: OFFLINE HACKATHON</h3>
                    <p className="text-amber-400 font-semibold mb-3">11th April 2026 | 9:00 AM onwards</p>
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
              <div className="relative flex flex-col items-center">
                <div className="w-8 h-8 bg-jp-yellow rounded-full border-4 border-black/50 relative z-10" />
              </div>
              <div className="glass rounded-2xl p-8 flex-1 border-l-4 border-jp-yellow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🏆</span>
                  <div>
                    <h3 className="jurassic-subheading mb-2">ROUND 3: FINALS & PITCH</h3>
                    <p className="text-amber-400 font-semibold mb-3">12th April 2026 | 5:00 PM onwards</p>
                    <p className="text-amber-100/85 leading-relaxed mb-3">
                      Same day as Round 2. Top 5-8 teams present their projects to a panel of expert judges.
                      Showcase your innovation, be judged, and celebrate the winners of Unplugged!
                    </p>
                    <p className="text-amber-100/70 text-sm">
                      📍 <strong>Venue:</strong> DJSCE Campus, Mumbai | <strong>Mode:</strong> Offline |{' '}
                      <span className="font-semibold text-amber-400">For Shortlisted Teams Only</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Venue Map */}
          <div className="mt-20">
            <h3 className="jurassic-subheading text-center mb-12" data-text="EVENT VENUE: DJSCE CAMPUS">EVENT VENUE: DJSCE CAMPUS</h3>
            <div className="grid md:grid-cols-2 gap-8">
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
              <div className="space-y-6">
                <div className="glass rounded-2xl p-8">
                  <h4 className="jurassic-subheading mb-4">CAMPUS ADDRESS</h4>
                  <p className="text-amber-100/85 leading-relaxed">
                    Dwarkadas J. Sanghvi College of Engineering, Vile Parle, Mumbai – 400056<br />
                    Maharashtra, India
                  </p>
                </div>
                <div className="glass rounded-2xl p-8">
                  <h4 className="jurassic-subheading mb-4">KEY DETAILS</h4>
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

      {/* ── FAQ ── */}
      <section
        id="faq"
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-24 scroll-mt-20"
      >

        <div className="relative z-20 w-full max-w-4xl px-6 mx-auto">
          <div className="text-center mb-20">
            <h2 className="jurassic-heading jurassic-reveal mb-8" data-text="FREQUENTLY ASKED QUESTIONS">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="jurassic-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Before you step into the adventure of a lifetime — every question you have, answered right here.
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

      {/* ── Footer ── */}
      <footer className="relative bg-black/90 border-t border-amber-900/30 py-10 text-center">
        <p className="text-amber-100/40 text-xs tracking-widest uppercase mb-3">
          IETE-SF × DJS Microminds
        </p>
        <p className="text-white/50 text-sm mb-4">
          © 2026 UNPLUGGED. All Rights Reserved.
        </p>
        <p className="text-amber-100/30 text-xs">
          D.J. Sanghvi College of Engineering, Vile Parle, Mumbai
        </p>
      </footer>
    </main>
  )
}