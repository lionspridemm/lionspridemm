"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, MouseEvent } from "react";
import { X } from "lucide-react";

type Officer = {
  name: string;
  title: string;
  image: string | null;
  testimony: string; // may be "" for blank modal
};

export default function OfficerGallery({ officers }: { officers: Officer[] }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Officer | null>(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const openModal = (off: Officer) => {
    setSelected(off);
    setOpen(true);
  };

  // Hover open (desktop) — tied to the CTA, not the name
  const hoverTimer = useRef<number | null>(null);
  const onCtaEnter = (off: Officer) => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => openModal(off), 150);
  };
  const onCtaLeave = () => {
    if (hoverTimer.current) {
      window.clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };

  // Render selected testimony with verse de-dup; blank if no content
  const renderSelectedTestimony = () => {
    if (!selected) return null;

    // Treat "Testimony coming soon." or empty/whitespace as NO CONTENT
    const raw = (selected.testimony ?? "").trim();
    const hasContent =
      raw.length > 0 && raw !== "Testimony coming soon.";

    if (!hasContent) {
      // Blank modal body (intentionally empty)
      return <div className="text-white/80"></div>;
    }

    const paras = raw.split("\n").map((p) => p.trim()).filter(Boolean);
    const hasVerse = paras.some((p) => /\bMatthew\s*6:33\b/i.test(p));
    const bodyParas = hasVerse
      ? paras.filter((p) => !/\bMatthew\s*6:33\b/i.test(p))
      : paras;

    return (
      <>
        <div className="space-y-4 text-[15px] leading-relaxed">
          {bodyParas.map((para, i) => (
            <p key={i} className="text-white/90">
              {para}
            </p>
          ))}
        </div>

        {hasVerse && (
          <footer className="mt-6 border-t border-[--lp-border] pt-4">
            <blockquote className="italic text-[--lp-muted]">
              “But seek first the kingdom of God and His righteousness, and all these things
              will be added to you.” — Matthew 6:33
            </blockquote>
          </footer>
        )}
      </>
    );
  };

  return (
    <>
      {/* Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {officers.map((off) => (
          <li key={off.name} className="card overflow-hidden group">
            {/* Card click opens modal (mobile/tablet friendly) */}
            <button
              onClick={() => openModal(off)}
              className="w-full text-left"
              aria-label={`Open bio for ${off.name}`}
            >
              <div className="relative aspect-[5/3] w-full overflow-hidden bg-black/40">
                {off.image ? (
                  <Image
                    src={off.image}
                    alt={`${off.name} headshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain transition scale-100 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-white/60 text-xs">
                    No Photo
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              <div className="p-4">
                <p className="text-xs uppercase tracking-wide text-[--lp-muted]">
                  {off.title}
                </p>
                {/* Name is no longer the hover target */}
                <div className="mt-1">
                  <span className="block text-lg font-semibold">{off.name}</span>
                  {("nickname" in off && off.nickname) && (
                    <span className="inline-block mt-0.5 text-sm text-[--lp-ice] font-medium">
                      “{off.nickname}”
                    </span>
                  )}
                </div>

                {/* CTA line: hover target for desktop; click works everywhere */}
                <div className="mt-3">
                  <button
                    type="button"
                    onMouseEnter={() => onCtaEnter(off)}
                    onMouseLeave={onCtaLeave}
                    onClick={(e) => {
                      e.stopPropagation(); // prevent double open
                      openModal(off);
                    }}
                    className="text-sm font-semibold text-[--lp-ice] underline underline-offset-4 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[--lp-ice] rounded"
                    aria-label={`Show testimony for ${off.name}`}
                    title="Opens testimony"
                  >
                    View my testimony!
                  </button>
                </div>

                {/* If you want to keep the encouragement nudge for blanks, uncomment:
                {!off.testimony?.trim() || off.testimony === "Testimony coming soon." ? (
                  <p className="mt-3 text-xs text-[--lp-muted]">
                    <Link href="/contact" className="hover:text-[--lp-ice] underline underline-offset-4">
                      Encourage {off.name.split(" ")[0]}
                    </Link>{" "}
                    to share a short testimony.
                  </p>
                ) : null}
                */}
              </div>
            </button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {open && selected && (
        <Modal onClose={() => setOpen(false)}>
          <article className="max-w-2xl">
            <header className="mb-4">
              <h2 className="text-2xl font-bold">
                {selected.name}
                {("nickname" in selected && selected.nickname) && (
                    <span className="ml-2 text-[--lp-ice] font-semibold text-lg">
                      “{selected.nickname}”
                    </span>
                  )}
              </h2>
              <p className="prose-muted">{selected.title}</p>
            </header>
            {renderSelectedTestimony()}
          </article>
        </Modal>
      )}
    </>
  );
}

/* ---------- Modal (constrained between header + footer) ---------- */

function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={handleBackdrop}
      className="fixed inset-x-0 z-[60] grid place-items-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto"
      style={{
        top: "calc(7rem + env(safe-area-inset-top))",
        bottom: "calc(5.5rem + env(safe-area-inset-bottom))",
      }}
    >
      <div
        ref={ref}
        tabIndex={-1}
        className="card w-full max-w-3xl p-6 outline-none max-h-full overflow-y-auto"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm uppercase tracking-wide text-[--lp-muted]">
            Officer Testimony
          </span>
          <button
            className="rounded-md p-2 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[--lp-ice]"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
