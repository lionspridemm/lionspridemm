"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type FitMode = "cover" | "contain";

export default function Carousel({
  images,
  auto = false,
  intervalMs = 5000,
  fit = "contain", // fit to frame by default (no cropping)
}: {
  images: string[];
  auto?: boolean;
  intervalMs?: number;
  fit?: FitMode;
}) {
  const [i, setI] = useState(0);
  const count = images.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (next: number) => setI((next + count) % count);
  const prev = () => go(i - 1);
  const next = () => go(i + 1);

  // Auto-advance every {intervalMs}
  useEffect(() => {
    if (!auto || count <= 1) return;
    timer.current && clearInterval(timer.current);
    timer.current = setInterval(() => go(i + 1), intervalMs);
    return () => {
      timer.current && clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, auto, intervalMs, count]);

  const objectClass = useMemo(
    () => (fit === "cover" ? "object-cover" : "object-contain"),
    [fit]
  );

  if (count === 0) return null;

  return (
    <div className="relative rounded-2xl overflow-hidden border border-black/15 bg-white">
      {/* Taller frame (more than double the prior size) */}
      <div className="w-full" style={{ height: "70vh", minHeight: 720, maxHeight: 1100 }}>
        <div
          className="h-full flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {images.map((src, idx) => (
            <div key={src + idx} className="min-w-full h-full grid place-items-center bg-white">
              {/* Fit to frame; letterboxing is white to match card */}
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className={`max-h-full max-w-full w-auto h-auto ${objectClass} select-none`}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 text-white hover:bg-black/90"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 text-white hover:bg-black/90"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => go(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 w-2.5 rounded-full ${
              idx === i ? "bg-black" : "bg-black/30 hover:bg-black/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
