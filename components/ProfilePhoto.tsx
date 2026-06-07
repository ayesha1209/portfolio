"use client";

export default function ProfilePhoto() {
  return (
    <span className="inline-block w-14 h-14 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-amber-200 bg-stone-100 mb-1 align-bottom shrink-0">
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
