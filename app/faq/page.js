"use client";

import { useState } from "react";
import { UNSTOP_REGISTER_URL } from "@/lib/constants";

const FAQ_ITEMS = [
  {
    q: "What is Unplugged 3.0?",
    a: "Unplugged 3.0 is a 24-hour National Level Hardware Hackathon organised by IETE DJSCE. Teams build hardware projects from idea to prototype.",
  },
  {
    q: "Who can participate?",
    a: "Students from any college can form teams and register. Check the Register page for team size and eligibility.",
    linkText: "Register on Unstop",
    linkHref: UNSTOP_REGISTER_URL,
  },
  {
    q: "When and where is the hackathon?",
    a: "The final hackathon is held at DJSCE. Registrations open in February; Round 1 results in March; finals in April. See the Timeline page for exact dates.",
  },
  {
    q: "What do we need to bring?",
    a: "Laptops, hardware components as per your idea, and enthusiasm. Power and internet will be provided at the venue.",
  },
  {
    q: "How are projects evaluated?",
    a: "Projects are judged on innovation, implementation, and impact. See the Evaluation page for the full rubric.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="glass border border-amber-500/30 rounded-xl overflow-hidden mb-4">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 text-amber-100 hover:bg-amber-950/20 transition-colors"
      >
        <span className="font-medium text-lg">{item.q}</span>
        <span
          className={`text-amber-500 text-2xl shrink-0 transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 pt-0 text-amber-100/80 border-t border-amber-500/20">
          {item.a}
          {item.linkHref && (
            <>
              {" "}
              <a
                href={item.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 underline"
              >
                {item.linkText || "Register"}
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="min-h-screen px-6 py-20 max-w-3xl mx-auto">
      <h1 className="heading text-4xl md:text-5xl mb-4 text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-amber-100/80 text-center mb-14">
        Everything you need to know about Unplugged 3.0.
      </p>
      {FAQ_ITEMS.map((item, i) => (
        <FaqItem
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </main>
  );
}
