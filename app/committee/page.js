const COMMITTEE = [
  { name: "Anmol Parekh", post: "Chairperson" },
  { name: "Krish Tawde", post: "Vice-Chairperson" },
  { name: "Jiya Mevada", post: "Secretary" },
  { name: "Ahaan Deshpande", post: "Treasurer" },
  { name: "Payal Vaishnav", post: "Strike Co-ordinator" },
  { name: "Om Kulkarni", post: "Strike Co-ordinator" },
  { name: "Tanvi Mehta", post: "Marketing Head" },
  { name: "Krishna Mishra", post: "Marketing Head" },
  { name: "Akanksha Raina", post: "Editorial Head" },
  { name: "Garima Singh", post: "Editorial Head" },
  { name: "Shubham Tayade", post: "Technical Head" },
  { name: "Abbas Damaniya", post: "Technical Head" },
  { name: "Aditya Ralhan", post: "Info-Tech Head" },
  { name: "Agrim Tavani", post: "Info-Tech Head" },
  { name: "Jyotiraditya Bhat", post: "Creatives Head" },
  { name: "Prayag Kartha", post: "Events Head" },
  { name: "Aryan Bhalkar", post: "Events Head" },
  { name: "Advait Sawant", post: "Publicity Head" },
  { name: "Rudra Nisar", post: "Publicity Head" },
  { name: "Om Kulkarni", post: "Book and Component Bank Head" },
];

function MemberCard({ name, post }) {
  return (
    <div className="glass border border-amber-500/30 rounded-lg overflow-hidden text-center hover:border-amber-500/50 transition-colors w-[100px] mx-auto">
      <div
        className="w-full aspect-[3/4] max-h-20 bg-amber-950/50 border-b border-amber-500/20 flex items-center justify-center text-amber-600/40 text-[9px]"
        aria-hidden
      >
        Photo
      </div>
      <div className="p-1.5">
        <p className="text-amber-100 font-medium text-[11px] leading-tight">{name}</p>
        <p className="text-amber-500/80 text-[9px] mt-0.5 leading-tight">{post}</p>
      </div>
    </div>
  );
}

function LeafIcon({ className }) {
  return (
    <svg viewBox="0 0 16 24" className={className} fill="currentColor" aria-hidden>
      <path d="M8 2C4 8 2 14 2 22c0 0 4-4 6-6s4-2 6 0 4 4 6 6c0-8-2-14-6-20S8 2 8 2z" opacity="0.6" />
    </svg>
  );
}

export default function Committee() {
  return (
    <main className="min-h-screen px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto relative">
        <h1 className="heading text-3xl md:text-4xl mb-2 text-center">
          THE COMMITTEE
        </h1>
        <p className="text-amber-100/80 text-sm text-center max-w-xl mx-auto mb-8">
          Meet the minds behind Unplugged 3.0.
        </p>

        <div className="committee-grid-wrapper relative py-6 px-4 rounded-2xl border border-amber-500/20 bg-amber-950/10">
          {/* Vine & leaf background – connects the section visually */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl overflow-hidden text-amber-600/40" aria-hidden>
            <defs>
              <pattern id="committee-leaves" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M14 5c-.8 1.2-.8 2.5 0 3.5s1.5.8 2.5 0 .8-2 0-3.5-1.5-.8-2.5 0z" fill="currentColor" opacity="0.45" />
              </pattern>
              <pattern id="committee-vine" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q5 5 10 10 T20 10" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#committee-leaves)" />
            <rect x="0" y="0" width="100%" height="100%" fill="url(#committee-vine)" opacity="0.5" />
          </svg>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-5 gap-y-6 relative z-10">
            {COMMITTEE.map((member, i) => (
              <div key={`${member.name}-${member.post}-${i}`} className="flex flex-col items-center">
                <MemberCard name={member.name} post={member.post} />
              </div>
            ))}
          </div>

          <LeafIcon className="absolute top-3 left-3 w-5 h-6 text-amber-600/55" />
          <LeafIcon className="absolute top-3 right-3 w-5 h-6 text-amber-600/55 scale-x-[-1]" />
          <LeafIcon className="absolute bottom-3 left-3 w-5 h-6 text-amber-600/55 scale-y-[-1]" />
          <LeafIcon className="absolute bottom-3 right-3 w-5 h-6 text-amber-600/55 scale-[-1]" />
        </div>
      </div>
    </main>
  );
}
