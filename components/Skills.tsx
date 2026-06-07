import {
  SiPython, SiReact, SiNextdotjs, SiFastapi, SiPostgresql, SiMysql,
  SiFirebase, SiOpencv, SiGit, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiDocker, SiScikitlearn, SiMongodb, SiTypescript,
} from "react-icons/si";
import {
  TbBrandAws, TbBrandAzure, TbBrandWindows, TbServer, TbNetwork,
} from "react-icons/tb";
import { MdDns, MdEmail } from "react-icons/md";
import { FaJava, FaDatabase } from "react-icons/fa";
import type { IconType } from "react-icons";

type Skill = { icon: IconType; label: string; color: string };

const row1: Skill[] = [
  { icon: SiPython,       label: "Python",       color: "#3776AB" },
  { icon: SiReact,        label: "React",         color: "#61DAFB" },
  { icon: SiNextdotjs,    label: "Next.js",       color: "#111827" },
  { icon: SiFastapi,      label: "FastAPI",       color: "#009688" },
  { icon: SiPostgresql,   label: "PostgreSQL",    color: "#4169E1" },
  { icon: SiMysql,        label: "MySQL",         color: "#4479A1" },
  { icon: SiFirebase,     label: "Firebase",      color: "#DD2C00" },
  { icon: TbBrandAws,     label: "AWS",           color: "#FF9900" },
  { icon: SiTypescript,   label: "TypeScript",    color: "#3178C6" },
  { icon: SiJavascript,   label: "JavaScript",    color: "#CA8A04" },
  { icon: SiNodedotjs,    label: "Node.js",       color: "#15803D" },
  { icon: SiTailwindcss,  label: "Tailwind CSS",  color: "#0891B2" },
];

const row2: Skill[] = [
  { icon: SiOpencv,       label: "OpenCV",        color: "#5C3EE8" },
  { icon: SiScikitlearn,  label: "Scikit-learn",  color: "#F97316" },
  { icon: FaJava,         label: "Java",          color: "#1D4ED8" },
  { icon: SiGit,          label: "Git",           color: "#DC2626" },
  { icon: MdDns,          label: "DNS & Hosting", color: "#57534e" },
  { icon: MdEmail,        label: "Email Setup",   color: "#57534e" },
  { icon: TbBrandWindows, label: "Microsoft 365", color: "#0078D4" },
  { icon: TbBrandAzure,   label: "Azure / Cloud", color: "#0078D4" },
  { icon: TbServer,       label: "Domain Config", color: "#57534e" },
  { icon: FaDatabase,     label: "Schema Design", color: "#57534e" },
  { icon: SiMongodb,      label: "MongoDB",       color: "#16A34A" },
  { icon: SiDocker,       label: "Docker",        color: "#2496ED" },
];

function SkillPill({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <div className="flex items-center gap-2.5 bg-white border border-stone-200 px-5 py-3 mx-2 shrink-0">
      <Icon style={{ color: skill.color }} size={20} />
      <span className="text-sm font-medium text-stone-700 whitespace-nowrap">
        {skill.label}
      </span>
    </div>
  );
}

function Row({ items, direction }: { items: Skill[]; direction: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`marquee-track ${direction === "left" ? "marquee-left" : "marquee-right"}`}>
        {doubled.map((skill, i) => (
          <SkillPill key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="border-t border-stone-100 py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-10">
        <h2 className="text-2xl font-bold text-stone-900 mb-3">Skills &amp; Tools</h2>
        <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 leading-tight">
          What I work{" "}
          <span className="italic text-amber-500">with.</span>
        </h2>
      </div>

      <div className="space-y-3">
        <Row items={row1} direction="left" />
        <Row items={row2} direction="right" />
      </div>
    </section>
  );
}
