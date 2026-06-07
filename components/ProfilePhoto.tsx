"use client";

export default function ProfilePhoto() {
  return (
    <span className="inline-block w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-amber-200 bg-stone-100 mb-1 align-bottom shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/photo.jpg"
        alt="Ayesha Patel"
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </span>
  );
}
