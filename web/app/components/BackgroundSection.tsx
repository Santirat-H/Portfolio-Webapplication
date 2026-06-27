"use client";

import { type RefObject } from "react";
import Skills from "./Skills";
import Education from "./Education";

const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono), monospace",
};

type Props = {
  bgRef: RefObject<HTMLDivElement>;
  bgBodyRef: RefObject<HTMLDivElement>;
  onGoFiles: () => void;
};

export default function BackgroundSection({ bgRef, bgBodyRef, onGoFiles }: Props) {
  return (
    <div
      ref={bgRef}
      style={{ position: "absolute", inset: 0 }}
    >
      {/* Top bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "54px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 34px",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            ...MONO,
            fontSize: "12px",
            letterSpacing: ".2em",
            color: "#5a606b",
          }}
        >
          // BACKGROUND
        </span>
        <button
          onClick={onGoFiles}
          style={{
            ...MONO,
            pointerEvents: "auto",
            fontSize: "12px",
            letterSpacing: ".12em",
            color: "#6b7280",
            background: "none",
            border: "none",
            cursor: "pointer",
            transition: "color 150ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#9aa0aa";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#6b7280";
          }}
        >
          ← FILES
        </button>
      </div>

      {/* Scrollable content */}
      <div
        ref={bgBodyRef}
        style={{
          position: "absolute",
          inset: 0,
          overflowY: "auto",
          paddingTop: "80px",
          paddingBottom: "60px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Skills />
          <Education />

          {/* Languages */}
          <div
            style={{
              marginTop: "48px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255,255,255,.07)",
              textAlign: "center",
              ...MONO,
              fontSize: "13px",
              color: "#5a606b",
              letterSpacing: ".06em",
            }}
          >
            Thai (Native) · English B2 — TOEIC 815 / 990
          </div>
        </div>
      </div>
    </div>
  );
}
