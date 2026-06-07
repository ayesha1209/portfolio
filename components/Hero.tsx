import { profile } from "@/lib/data";
import ProfilePhoto from "@/components/ProfilePhoto";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">

      <h1 className="font-serif text-[clamp(2.8rem,7.5vw,5.5rem)] leading-[1.08] text-stone-900 mb-1">
        Hey, I&apos;m{" "}
        <span className="inline-flex items-end gap-3 leading-none">
          <span className="text-amber-500">Ayesha</span>
          <ProfilePhoto />
        </span>
      </h1>

      <p className="font-serif italic text-[clamp(2.8rem,7.5vw,5.5rem)] leading-[1.08] text-amber-500">
        I build the whole stack.
      </p>

      <p className="font-serif text-[clamp(1rem,2.6vw,1.75rem)] leading-[1.4] text-stone-900 mt-2 sm:whitespace-nowrap">
        Backends.{" "}
        <span className="text-stone-400">Frontends.</span>{" "}
        <span className="italic text-amber-500">AI models.</span>{" "}
        Databases.
      </p>

      <p className="font-serif text-[clamp(2rem,5.5vw,4rem)] leading-[1.12] text-stone-400 mt-1">
        From idea{" "}
        <span className="italic text-stone-900">→ deployed.</span>
      </p>


      <p className="text-2xl font-semibold text-stone-900 mt-10 mb-2">Fun fact about me!</p>
      <p className="text-base text-stone-500 leading-relaxed max-w-xl">
        I genuinely can't stop building things. I founded booKi while still in college. Won 1st at AtliQ Hackathon with EarliSense and placed 3rd at TinkerThon out of 400+ teams with PLANit. I build websites, AI tools, and full products for real clients. Backend, frontend, AI, infra — I cover everything end to end because I actually enjoy all of it.
      </p>

      <div className="flex flex-wrap gap-4 mt-6">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-stone-400 hover:text-stone-900 transition-colors"
        >
          <SiGithub size={24} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-stone-400 hover:text-stone-900 transition-colors"
        >
          <FaLinkedinIn size={24} />
        </a>
      </div>

    </section>
  );
}
