"use client";

import { useEffect, useMemo, useState } from "react";

type Mode = "AGENDA" | "WEEK" | "MONTH";

function buildSrc(calId: string, timeZone: string, mode: Mode) {
  // bgcolor is white so the calendar reads cleanly over the photo.
  // color is your ice-blue for event accent.
  const params = new URLSearchParams({
    mode,
    showTitle: "0",
    showNav: "1",
    showDate: "1",
    showPrint: "0",
    showTabs: "1",
    showTz: "0",
    wkst: "1",
    bgcolor: "#ffffff",
    ctz: timeZone,
    src: calId,
    color: "#7cc5ff",
  });

  return `https://calendar.google.com/calendar/embed?${params.toString()}`;
}

export default function CalendarEmbed({
  calId,
  timeZone,
  initialMode,
}: {
  calId: string;
  timeZone: string;
  initialMode?: Mode;
}) {
  const [mode, setMode] = useState<Mode>(initialMode ?? "AGENDA");
  const [height, setHeight] = useState<number>(760);

  // Choose sensible defaults and heights per device + view.
  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
    const defaultMode: Mode = initialMode ? initialMode : isMobile ? "AGENDA" : "AGENDA";
    setMode(defaultMode);

    const computeHeight = (m: Mode, mobile: boolean) => {
      if (mobile) {
        if (m === "AGENDA") return 620;
        if (m === "WEEK") return 900;
        return 1000; // MONTH
      }
      // desktop
      if (m === "AGENDA") return 680;
      if (m === "WEEK") return 980;
      return 1100; // MONTH
    };
    setHeight(computeHeight(defaultMode, isMobile));
  }, [initialMode]);

  // Update height when user switches modes.
  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
    const computeHeight = (m: Mode, mobile: boolean) => {
      if (mobile) {
        if (m === "AGENDA") return 620;
        if (m === "WEEK") return 900;
        return 1000;
      }
      if (m === "AGENDA") return 680;
      if (m === "WEEK") return 980;
      return 1100;
    };
    setHeight(computeHeight(mode, isMobile));
  }, [mode]);

  const src = useMemo(() => buildSrc(calId, timeZone, mode), [calId, timeZone, mode]);

  return (
    <div className="space-y-3">
      {/* View toggles */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setMode("AGENDA")}
          className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${
            mode === "AGENDA" ? "bg-[--lp-ice] text-black" : "border border-[--lp-border] hover:opacity-90"
          }`}
        >
          Agenda
        </button>
        <button
          onClick={() => setMode("WEEK")}
          className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${
            mode === "WEEK" ? "bg-[--lp-ice] text-black" : "border border-[--lp-border] hover:opacity-90"
          }`}
        >
          Week
        </button>
        <button
          onClick={() => setMode("MONTH")}
          className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${
            mode === "MONTH" ? "bg-[--lp-ice] text-black" : "border border-[--lp-border] hover:opacity-90"
          }`}
        >
          Month
        </button>
      </div>

      {/* Solid, high-contrast card for the calendar */}
      <div
        className="rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
        style={{
          backgroundColor: "rgba(255,255,255,0.98)",
          // nice visual separation from the photo background
          backdropFilter: "saturate(1.1)",
        }}
      >
        <div className="w-full" style={{ height }}>
          <iframe
            key={mode} // reload when mode changes so layout recalculates
            title="Lion’s Pride MM Calendar"
            src={src}
            className="w-full h-full"
            frameBorder={0}
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
}
