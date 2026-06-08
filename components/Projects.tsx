"use client";

import { useState, useEffect } from "react";
import { projects } from "@/lib/data";

function WebPreview({ urls }: { urls: string[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="relative w-full aspect-video overflow-hidden bg-stone-100 group">
      <div className="absolute inset-0 w-[200%] h-[200%] scale-50 origin-top-left pointer-events-none">
        <iframe src={urls[active]} className="w-full h-full border-0" title="Site preview" />
      </div>
      <a href={urls[active]} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label="Open site" />
      {urls.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {urls.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.preventDefault(); setActive(i); }}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === active ? "bg-stone-900" : "bg-stone-400"}`}
            />
          ))}
        </div>
      )}
      <div className="absolute top-2 right-2 z-20 bg-white/80 text-stone-600 text-xs px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        click to open ↗
      </div>
    </div>
  );
}

function ImageSlot({
  images,
  title,
  video,
  variant = "card",
}: {
  images: string[];
  title: string;
  video?: string;
  variant?: "card" | "featured" | "wide";
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % images.length), 2000);
    return () => clearInterval(id);
  }, [images.length, paused]);

  if (video) {
    return (
      <div className={`w-full overflow-hidden bg-stone-100 ${variant === "wide" ? "h-full min-h-[320px]" : "aspect-[3/4]"}`}>
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-125 contrast-110 saturate-150 brightness-105"
        />
      </div>
    );
  }

  if (!images.length) {
    return (
      <div className={`w-full bg-stone-100 flex items-center justify-center ${variant === "featured" ? "aspect-[16/7]" : variant === "wide" ? "h-full min-h-[280px]" : "aspect-video"}`}>
        <span className="text-stone-300 text-xs font-mono">photo coming soon</span>
      </div>
    );
  }

  const prev = () => setActive((a) => (a - 1 + images.length) % images.length);
  const next = () => setActive((a) => (a + 1) % images.length);

  const imgCls =
    variant === "featured"
      ? "w-full aspect-[16/7] object-contain bg-stone-50 block"
      : variant === "wide"
      ? "w-full h-full min-h-[280px] object-contain bg-stone-50 block"
      : "w-full h-96 object-contain block bg-stone-50";

  return (
    <div
      className="relative w-full overflow-hidden bg-stone-50 group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={images[active]} alt={title} className={imgCls} />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-opacity opacity-0 group-hover:opacity-100"
            aria-label="Previous"
          >
            <svg className="w-4 h-4 text-stone-900" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-opacity opacity-0 group-hover:opacity-100"
            aria-label="Next"
          >
            <svg className="w-4 h-4 text-stone-900" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === active ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function SectionLabel({ label, personal }: { label: string; personal?: boolean }) {
  return (
    <div className="flex items-center gap-5 mt-14 mb-6">
      {personal ? (
        <span className="font-serif italic text-2xl text-stone-500">{label}</span>
      ) : (
        <span className="text-2xl font-bold text-stone-900">{label}</span>
      )}
      <div className="flex-1 h-px bg-stone-200" />
    </div>
  );
}

function ExtLink({ href }: { href: string | null | undefined }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="text-stone-300 hover:text-stone-700 shrink-0 transition-colors mt-0.5">
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    </a>
  );
}

type Project = (typeof projects)[number];

function WideCard({ p }: { p: Project }) {
  return (
    <div className="border border-stone-200 overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="p-6 flex flex-col justify-between gap-4">
          <div>
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-stone-900 text-base leading-tight">{p.title}</h3>
              <ExtLink href={p.link} />
            </div>
            <p className="text-xs text-stone-400 mb-0.5">{(p as any).subtitle}</p>
            <p className="text-xs text-amber-500 font-medium mb-4">{p.tag}</p>
            <p className="text-[15px] text-stone-900 leading-relaxed">{p.description}</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="text-xs font-mono bg-stone-100 text-stone-600 px-2 py-0.5">{s}</span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden bg-stone-50">
          {(p as any).previewUrls
            ? <WebPreview urls={(p as any).previewUrls} />
            : <ImageSlot images={p.images} title={p.title} video={(p as any).video} variant="wide" />
          }
        </div>
      </div>
    </div>
  );
}

function RegularCard({ p }: { p: Project }) {
  return (
    <div className="border border-stone-200 overflow-hidden flex flex-col">
      {(p as any).previewUrls
        ? <WebPreview urls={(p as any).previewUrls} />
        : <ImageSlot images={p.images} title={p.title} video={(p as any).video} />
      }
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-stone-900 text-sm leading-tight">{p.title}</h3>
            <ExtLink href={p.link} />
          </div>
          <p className="text-xs text-stone-400 mt-0.5 mb-0.5">{(p as any).subtitle}</p>
          <p className="text-xs text-amber-500 font-medium">{p.tag}</p>
        </div>
        <p className="text-[15px] text-stone-900 leading-relaxed flex-1">{p.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {p.stack.map((s) => (
            <span key={s} className="text-xs font-mono bg-stone-100 text-stone-600 px-2 py-0.5">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CardGrid({ items }: { items: Project[] }) {
  if (!items.length) return null;
  if (items.length === 1) {
    return (
      <div className="sm:w-1/2 sm:mx-auto">
        <RegularCard p={items[0]} />
      </div>
    );
  }
  if (items.length === 3) {
    return (
      <div className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <RegularCard p={items[0]} />
          <RegularCard p={items[1]} />
        </div>
        <div className="sm:w-1/2 sm:mx-auto">
          <RegularCard p={items[2]} />
        </div>
      </div>
    );
  }
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((p, i) => <RegularCard key={i} p={p} />)}
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => (p as any).featured);
  const rest = projects.filter((p) => !(p as any).featured);

  const startup   = rest.filter((p) => p.category === "startup");
  const client    = rest.filter((p) => p.category === "client");
  const events    = rest.filter((p) => p.title.includes("FootPrints"));
  const personal  = rest.filter(
    (p) =>
      p.category === "personal" &&
      !p.title.includes("FootPrints") &&
      !p.tag.includes("Hackathon") &&
      !p.tag.includes("TinkerThon")
  );
  const hackathon = rest.filter((p) => p.tag.includes("Hackathon") || p.tag.includes("TinkerThon"));

  return (
    <section id="work" className="max-w-5xl mx-auto px-6 py-16">

      <div className="mb-10">
        <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 leading-tight">
          Things I&apos;ve{" "}
          <span className="italic text-amber-500">built & shipped.</span>
        </h2>
      </div>

      {/* ── Featured ── */}
      <SectionLabel label="the one I loved building the most" personal />
      {featured && (
        <div className="border border-stone-200 overflow-hidden">
          <ImageSlot images={featured.images} title={featured.title} video={(featured as any).video} variant="featured" />
          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs bg-amber-500 text-white px-2.5 py-0.5 font-semibold tracking-wide uppercase">
                  Featured
                </span>
              </div>
              <h3 className="font-serif text-3xl text-stone-900 mb-1">{featured.title}</h3>
              <p className="text-sm text-stone-400 mb-4">{(featured as any).subtitle}</p>
              <p className="text-base font-semibold text-stone-900 mb-3">{featured.description}</p>
              {(featured as any).bullets && (
                <ul className="space-y-1.5">
                  {(featured as any).bullets.map((b: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-700 leading-relaxed">
                      <span className="text-amber-500 mt-0.5 shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex flex-col gap-4 justify-start">
              <div className="flex flex-wrap gap-1.5">
                {featured.stack.map((s) => (
                  <span key={s} className="text-xs font-mono bg-stone-100 text-stone-600 px-2 py-0.5">{s}</span>
                ))}
              </div>
              {featured.link && (
                <a href={featured.link} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium text-stone-900 underline underline-offset-4 self-start">
                  View project →
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Startup / Founded ── */}
      {startup.length > 0 && (
        <>
          <SectionLabel label="Startup · Founded" />
          <div className="flex flex-col gap-4">
            {startup.map((p, i) => <WideCard key={i} p={p} />)}
          </div>
        </>
      )}

      {/* ── Freelance & Client Work ── */}
      {client.length > 0 && (
        <>
          <SectionLabel label="Freelance & Client Work" />
          <CardGrid items={client} />
        </>
      )}

      {/* ── Events & Platforms ── */}
      {events.length > 0 && (
        <>
          <SectionLabel label="Events & Platforms" />
          <CardGrid items={events} />
        </>
      )}

      {/* ── Personal Projects ── */}
      {personal.length > 0 && (
        <>
          <SectionLabel label="Personal Projects" />
          <div className="flex flex-col gap-4">
            {personal.map((p, i) =>
              (p as any).wide ? <WideCard key={i} p={p} /> : <RegularCard key={i} p={p} />
            )}
          </div>
        </>
      )}

      {/* ── Hackathon — last ── */}
      {hackathon.length > 0 && (
        <>
          <SectionLabel label="Hackathon" />
          <CardGrid items={hackathon} />
        </>
      )}

      {/* ── Closing note ── */}
      <div className="mt-16 pt-10 border-t border-stone-100 text-center">
        <p className="font-serif italic text-2xl sm:text-3xl text-stone-400 leading-relaxed">
          & honestly? I&apos;ve built so much more
        </p>
        <p className="font-serif italic text-2xl sm:text-3xl text-stone-900 leading-relaxed mt-1">
          side experiments, weekend hacks, tools I made just because I wanted to.
        </p>
        <p className="text-sm text-stone-400 mt-4">This is just what made the cut.</p>
      </div>

    </section>
  );
}
