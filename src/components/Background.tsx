"use client";

import Image from "next/image";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Photo (no background-attachment: fixed jank) */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-road.jpg"
          alt=""
          priority
          fill
          sizes="100vw"
          // Keep horizon visible on phones; center on larger screens
          className="object-cover md:object-center"
          style={{
            objectPosition: "center 70%", // mobile focus lower (road)
          }}
          // slight clarity bump without over-sharpening
          quality={85}
        />
      </div>

      {/* Readability overlays */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Soft top + bottom gradients to protect headers/footers */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/45" />

      {/* Subtle vignette (radial) to avoid edge glow on ultra-wide */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(100%_60%_at_50%_40%,transparent_0%,transparent_60%,rgba(0,0,0,0.35)_100%)]" />
    </div>
  );
}
