'use client'
import { useState } from 'react'

export default function FaqCategory({ icon, category, questions, delay }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div
      className="glass rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-amber-500/50 hover:bg-white/10"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
        <span className="text-3xl md:text-4xl">{icon}</span>
        <h3 className="text-xl md:text-2xl font-bold tracking-wider text-amber-100">
          {category}
        </h3>
      </div>

      <div className="space-y-3">
        {questions.map((item, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-amber-500/30"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full text-left px-5 py-4 bg-black/20 hover:bg-black/40 transition-colors duration-300 flex justify-between items-center group"
            >
              <span className="text-amber-100 group-hover:text-amber-300 transition-colors">
                {item.q}
              </span>
              <span className={`text-amber-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            <div
              className={`px-5 bg-black/10 border-t border-white/5 transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? 'max-h-96 py-4 opacity-100'
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <p className="text-amber-100/90 leading-relaxed">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
