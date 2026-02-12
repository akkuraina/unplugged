'use client'
import NavBar from '@/components/NavBar'
import { useState } from 'react'
import '@/app/styles/faq.css'

const faqs = [
  {
    icon: '🌍',
    category: 'General',
    questions: [
      {
        q: 'What is Unplugged 3.0?',
        a: 'Unplugged 3.0 is an immersive experience 65 million years in the making. Step into a world where prehistoric giants walk the earth once more — a fully interactive adventure blending cutting-edge technology with the raw wonder of the ancient world.',
      },
      {
        q: 'Where and when does the event take place?',
        a: 'Unplugged 3.0 is scheduled for 2026. Venue details and exact dates will be announced soon. Keep an eye on our socials and this page for the latest updates.',
      },
      {
        q: 'Who can attend Unplugged 3.0?',
        a: 'The event is open to everyone — students, professionals, and curious minds of all backgrounds. Whether you are a seasoned tech enthusiast or a first-time attendee, something extraordinary awaits.',
      },
    ],
  },
  {
    icon: '📋',
    category: 'Registration',
    questions: [
      {
        q: 'How do I register for the event?',
        a: 'Registration details will be shared closer to the event date. Stay tuned to our official channels for the link and instructions. Early bird registrations will receive exclusive perks!',
      },
      {
        q: 'Is there a registration fee?',
        a: 'We strive to keep Unplugged accessible. Fee structure and category-wise pricing will be announced during registration launch. Certain tracks may have a nominal participation fee.',
      },
      {
        q: 'Can I register as a team?',
        a: "Yes! Several events at Unplugged 3.0 are team-based. Team size requirements vary by event — detailed information will be available on each event's dedicated page.",
      },
    ],
  },
  {
    icon: '🏆',
    category: 'Events & Competitions',
    questions: [
      {
        q: 'What kind of events are held at Unplugged?',
        a: "Unplugged features a diverse range of competitions — from technical hackathons, coding challenges, and robotics to creative arts, gaming, and cultural performances. There's a stage for every talent.",
      },
      {
        q: 'Can I participate in multiple events?',
        a: "Absolutely! You're encouraged to explore multiple events. However, please check the event schedule to avoid time conflicts. Clashing registrations won't be accommodated after confirmation.",
      },
      {
        q: 'Will there be prizes?',
        a: "Yes — and they're worth roaring about. Unplugged 3.0 features exciting prizes, certificates, trophies, and recognition for winners across all categories. Total prize pool details will be revealed soon.",
      },
    ],
  },
  {
    icon: '🗺️',
    category: 'Logistics',
    questions: [
      {
        q: 'Is accommodation provided for outstation participants?',
        a: 'Accommodation arrangements are being worked out for participants traveling from other cities. Details will be communicated to registered outstation participants closer to the event.',
      },
      {
        q: 'Will food be available at the venue?',
        a: "Yes, food stalls and refreshments will be available throughout the event. We'll cater to various dietary preferences to make sure you stay fueled for the adventure.",
      },
      {
        q: 'How can I contact the organizing team?',
        a: "You can reach us through our official social media handles or via the contact form on this website. Our team is happy to answer any questions — don't hesitate to get in touch!",
      },
    ],
  },
]

/* ── Question row (Level 2) ─────────────────── */
function FaqQuestion({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-q-row ${open ? 'is-open' : ''}`}>
      <button
        className="faq-q-btn"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="faq-q-dot" aria-hidden="true" />
        <span className="faq-q-text">{question}</span>
        <span className="faq-q-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <div className={`faq-a-drawer ${open ? 'expanded' : ''}`}>
        <div className="faq-a-inner">
          <p className="faq-answer-text">{answer}</p>
        </div>
      </div>
    </div>
  )
}

/* ── Category card (Level 1) ────────────────── */
function FaqCategory({ icon, category, questions, delay }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`faq-cat-card ${open ? 'is-open' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <button
        className="faq-cat-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="faq-cat-icon" aria-hidden="true">{icon}</span>
        <span className="faq-cat-meta">
          <span className="faq-cat-name">{category}</span>
          <span className="faq-cat-count">{questions.length} questions</span>
        </span>
        <span className="faq-cat-chevron" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      <div className={`faq-cat-body ${open ? 'expanded' : ''}`}>
        <div className="faq-cat-body-inner">
          <div className="faq-question-list">
            {questions.map((item, i) => (
              <FaqQuestion key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Page ────────────────────────────────────── */
export default function Home() {
  return (
    <main className="relative">
      <NavBar />

      {/* Hero */}
      <section
        className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full flex justify-center">
          <div
            className="w-[90vw] max-w-[1072px] aspect-[1072/603] bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: "url('/unpluggedlogo.png')" }}
          />
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/night.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl w-full">
          <div className="bg-black/40 backdrop-blur-sm p-12 rounded-lg border border-jp-yellow/30 mb-8">
            <h2 className="jp-font text-6xl text-jp-yellow mb-6 text-center">
              About Unplugged
            </h2>
            <p className="text-white text-xl leading-relaxed text-center">
              An adventure 65 million years in the making. Experience the wonder and majesty
              of creatures that once ruled our planet.
            </p>
          </div>
        </div>
      </section>

      {/* Evaluation */}
      <section
        id="evaluation"
        className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/dino.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white text-4xl">Evaluation Content</div>
      </section>

      {/* Timeline */}
      <section
        id="timeline"
        className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/dino2.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white text-4xl">Timeline Content</div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="min-h-screen flex items-center justify-center px-4 relative bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/night.png')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-3xl w-full py-24 mx-auto">

          {/* Cinematic Header */}
          <div className="faq-header">
            <div className="faq-eyebrow">
              <span className="faq-eyebrow-dot" />
              <span className="faq-eyebrow-text">You Asked. We Answered.</span>
            </div>

            <div className="faq-title-wrap">
              <span className="faq-title-ghost jp-font" aria-hidden="true">FAQ</span>
              <h2 className="faq-title jp-font">FAQ</h2>
            </div>

            <div className="faq-ornament">
              <span className="faq-orn-dot" />
              <span className="faq-orn-line" />
              <span className="faq-orn-diamond" />
              <span className="faq-orn-line r" />
              <span className="faq-orn-dot" />
            </div>

            <p className="faq-subtitle">
              Before you step into the <em>adventure of a lifetime</em> —{' '}
              <strong>every question you have, answered right here.</strong>
            </p>
          </div>

          {/* Two-level Accordion */}
          <div className="faq-sections">
            {faqs.map((section, i) => (
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
