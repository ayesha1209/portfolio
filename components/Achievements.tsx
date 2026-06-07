const highlights = [
  {
    title: "booKi",
    label: "Startup · Founder",
    detail:
      "AI-powered reading app for Gen Z. Raised ₹2.5L seed funding, worked with a Stanford mentor, and shipped MVP ahead of schedule.",
    year: "2024",
  },
  {
    title: "PLANit",
    label: "TinkerThon 2025 · 3rd Place",
    detail:
      "Smart event management platform. Secured 3rd place among 400+ teams at a national-level hackathon.",
    year: "2025",
  },
  {
    title: "EarliSense",
    label: "AtliQ Hackathon",
    detail:
      "AI-powered call intelligence platform that listens, understands tone and sentiment in real time, and routes only genuinely interested customers to human agents, turning random calls into meaningful conversations and saving thousands of hours.",
    year: "2025",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="border-t border-stone-100 max-w-5xl mx-auto px-6 py-16">

      <div className="mb-10">
        <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 leading-tight">
          Highlights &{" "}
          <span className="italic text-amber-500">achievements.</span>
        </h2>
      </div>

      <div className="divide-y divide-stone-100">
        {highlights.map((a, i) => (
          <div key={i} className="py-6 grid sm:grid-cols-[1fr_100px] gap-3">
            <div>
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <span className="font-semibold text-stone-900">{a.title}</span>
                <span className="text-xs text-amber-500 font-medium">{a.label}</span>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed max-w-xl">{a.detail}</p>
            </div>
            {a.year && (
              <p className="text-sm font-bold text-stone-800 sm:text-right self-start">{a.year}</p>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
