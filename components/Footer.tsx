import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between text-xs text-stone-600">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Next.js · Tailwind CSS</span>
      </div>
    </footer>
  );
}
