"use client";

import { useState, useEffect } from "react";

export type Section = {
  id: string;
  label: string;
};

type Props = {
  sections: readonly Section[];
  currentId: string;
  onSelect: (id: string) => void;
  accent: string;
  /**
   * Whether the bar is currently in its visible state.
   * Parent is responsible for delaying unmount until the fade-out finishes.
   */
  visible?: boolean;
};

export default function ScrollProgress({
  sections,
  currentId,
  onSelect,
  accent,
  visible = true,
}: Props) {
  const currentIndex = Math.max(
    0,
    sections.findIndex((s) => s.id === currentId)
  );

  // Total height between the first and last marker.
  const BAR_HEIGHT = 280;

  // Position of the gliding active overlay, as a percentage of bar height.
  const activeTopPct =
    sections.length > 1 ? (currentIndex / (sections.length - 1)) * 100 : 50;

  return (
    <nav
      aria-label="Section navigation"
      style={{
        position: "fixed",
        left: "28px",
        top: "50%",
        height: `${BAR_HEIGHT}px`,
        width: "20px", // wider hit area around each marker
        transform: `translateY(-50%) translateX(${visible ? "0" : "-6px"})`,
        opacity: visible ? 1 : 0,
        zIndex: 50,
        transition:
          "opacity 420ms ease, transform 420ms cubic-bezier(.5,0,.2,1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Vertical track line (back layer) */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: "1px",
          transform: "translateX(-50%)",
          background: "rgba(255,255,255,0.12)",
        }}
      />

      {/* Static hollow marker buttons (clickable layer) */}
      {sections.map((section, i) => {
        const topPct =
          sections.length > 1 ? (i / (sections.length - 1)) * 100 : 50;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => onSelect(section.id)}
            aria-label={`Go to ${section.label}`}
            aria-current={section.id === currentId ? "step" : undefined}
            className="pf-progress-marker"
            style={{
              position: "absolute",
              left: "50%",
              top: `${topPct}%`,
              transform: "translate(-50%, -50%)",
              width: "20px",
              height: "20px",
              padding: 0,
              border: "none",
              background: "transparent",
              cursor: "pointer",
              outline: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              aria-hidden
              style={{
                display: "block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.45)",
                boxSizing: "border-box",
                transition: "border-color 220ms ease",
              }}
            />
          </button>
        );
      })}

      {/* Active marker overlay — a single element that glides between
          positions when the section changes (top layer, non-interactive). */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          top: `${activeTopPct}%`,
          transform: "translate(-50%, -50%)",
          width: "9px",
          height: "9px",
          borderRadius: "50%",
          background: accent,
          pointerEvents: "none",
          transition:
            "top 480ms cubic-bezier(.5,0,.2,1), background 420ms ease",
        }}
      />
    </nav>
  );
}