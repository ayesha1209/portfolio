import { education, skills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-t border-stone-100 max-w-5xl mx-auto px-6 py-16">
      <div className="grid sm:grid-cols-2 gap-12">

        {/* Education — no GPA, clean */}
        <div>
          <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-6">
            Education
          </p>
          {education.map((ed) => (
            <div key={ed.institution}>
              <p className="font-semibold text-stone-900">{ed.institution}</p>
              <p className="text-sm text-stone-500 mt-1">{ed.degree}</p>
              <p className="text-sm text-stone-400 mt-1">{ed.period}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-6">
            Skills
          </p>
          <div className="space-y-4">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat}>
                <p className="text-xs text-stone-400 mb-2">{cat}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span key={item} className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
