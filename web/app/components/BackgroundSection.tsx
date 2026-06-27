"use client";

import { type RefObject } from "react";
import Skills from "./Skills";
import Education from "./Education";

const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono), monospace",
};

const LANGS = [
  { name: "Thai", level: "Native" },
  { name: "English", level: "B2 · TOEIC 815 / 990" },
];

type Props = {
  bgRef: RefObject<HTMLDivElement>;
  bgBodyRef: RefObject<HTMLDivElement>;
  onGoFiles: () => void;
};

export default function BackgroundSection({ bgRef, bgBodyRef, onGoFiles }: Props) {
  return (
    <div ref={bgRef} style={{ position: "absolute", inset: 0, animation: "pfBgIn 540ms cubic-bezier(.2,.7,.2,1) both" }}>
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
        <span style={{ ...MONO, fontSize: "12px", letterSpacing: ".2em", color: "#5a606b" }}>
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
          onMouseEnter={(e) => { e.currentTarget.style.color = "#9aa0aa"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "#6b7280"; }}
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
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "48px 56px",
            alignItems: "flex-start",
          }}
        >
          {/* Left pane — Skills + Languages */}
          <div style={{ flex: "1 1 380px", minWidth: 0 }}>
            <Skills />

            {/* Languages */}
            <div style={{ marginTop: "40px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "18px",
                }}
              >
                <span
                  style={{
                    ...MONO,
                    fontSize: "12px",
                    letterSpacing: ".24em",
                    color: "#6b7280",
                  }}
                >
                  LANGUAGES
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background: "linear-gradient(90deg, rgba(255,255,255,.1), transparent)",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {LANGS.map(({ name, level }) => (
                  <div
                    key={name}
                    style={{ display: "flex", alignItems: "baseline", gap: "20px" }}
                  >
                    <span
                      style={{
                        ...MONO,
                        fontSize: "13px",
                        color: "#e6e8ec",
                        fontWeight: 600,
                        minWidth: "72px",
                      }}
                    >
                      {name}
                    </span>
                    <span style={{ fontSize: "14px", color: "#9aa0aa" }}>{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right pane — Education */}
          <div style={{ flex: "1 1 300px", minWidth: 0 }}>
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}
