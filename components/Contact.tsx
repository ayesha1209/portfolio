import { profile } from "@/lib/data";

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=Let%27s%20connect%20with%20Ayesha%21`;

export default function Contact() {
  return (
    <section id="contact" className="border-t border-stone-100 bg-stone-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-6">
          Let&apos;s work together
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
          Got a project<br />in mind?
        </h2>
        <p className="text-stone-400 text-base mb-10 max-w-md">
          I&apos;m open to freelance projects, internships, and full-time roles: backends,
          databases, or anything full-stack.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 items-start sm:items-center">
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-stone-900 text-sm font-medium px-6 py-3 hover:bg-stone-200 transition-colors"
          >
            {profile.email}
          </a>
          <div className="flex gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white text-sm transition-colors"
            >
              GitHub →
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white text-sm transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
