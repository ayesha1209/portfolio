import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-stone-100 max-w-5xl mx-auto px-6 py-16">

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-stone-900 mb-3">Experience</h2>
        <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 leading-tight">
          Where I&apos;ve{" "}
          <span className="italic text-amber-500">worked.</span>
        </h2>
      </div>

      <div className="divide-y divide-stone-100">
        {experience.map((exp, i) => (
          <div key={i} className="py-8 grid sm:grid-cols-[1fr_180px] gap-4">
            <div>
              <p className="font-semibold text-stone-900 text-base">{exp.company}</p>
              <p className="text-sm text-stone-400 mb-3">{exp.role}</p>
              <p className="text-sm text-stone-600 leading-relaxed mb-4 max-w-xl">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {exp.stack.map((s) => (
                  <span key={s} className="text-xs font-mono bg-stone-100 text-stone-600 px-2 py-0.5">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-sm font-semibold text-stone-800 sm:text-right">
              <p>{exp.period}</p>
              <p className="text-stone-500 text-xs font-normal mt-1">{exp.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
