"use client";

import { useState } from "react";

// DEV-ONLY color switcher. Cycles the --accent CSS variable across candidate
// colors so the palette can be compared at a glance. Remove this component
// (and its <AccentSwitcher /> usage in page.tsx) when no longer needed.

type AccentOption = { name: string; value: string };

const ACCENTS: AccentOption[] = [
  { name: "White", value: "#ffffff" },
  { name: "Violet", value: "#8b5cf6" }, // default (matches :root)
  { name: "Cyan", value: "#22d3ee" },
  { name: "Emerald", value: "#10b981" },
  { name: "Amber", value: "#f59e0b" },
];

export default function AccentSwitcher() {
  // Start on Violet — the default defined in globals.css :root.
  const [index, setIndex] = useState(1);
  const current = ACCENTS[index];

  function cycle() {
    const next = (index + 1) % ACCENTS.length;
    setIndex(next);
    document.documentElement.style.setProperty("--accent", ACCENTS[next].value);
  }

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Accent color: ${current.name}. Click to cycle.`}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-2 font-mono text-xs text-foreground shadow-lg backdrop-blur transition-colors hover:bg-surface-hover"
    >
      <span
        className="h-3 w-3 rounded-full ring-1 ring-border"
        style={{ backgroundColor: current.value }}
      />
      <span>{current.name}</span>
    </button>
  );
}
