"use client";

import { useEffect, useCallback } from "react";
import type { ShowcasePhoto } from "../lib/showcase";

type Props = {
  photos: ShowcasePhoto[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
};

export default function PhotoLightbox({ photos, index, onClose, onChange }: Props) {
  const prev = useCallback(
    () => onChange((index - 1 + photos.length) % photos.length),
    [index, photos.length, onChange]
  );
  const next = useCallback(
    () => onChange((index + 1) % photos.length),
    [index, photos.length, onChange]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.stopPropagation(); onClose(); }
      else if (e.key === "ArrowLeft") { e.stopPropagation(); prev(); }
      else if (e.key === "ArrowRight") { e.stopPropagation(); next(); }
    };
    // capture phase so this fires before Portfolio's bubble-phase Escape handler
    window.addEventListener("keydown", handler, { capture: true });
    return () => window.removeEventListener("keydown", handler, { capture: true });
  }, [onClose, prev, next]);

  const photo = photos[index];
  const multi = photos.length > 1;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        animation: "pfLightboxIn 200ms ease both",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "20px",
          left: "24px",
          background: "rgba(255,255,255,.06)",
          border: "1px solid rgba(255,255,255,.1)",
          borderRadius: "8px",
          color: "#9aa0aa",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "11px",
          padding: "5px 10px",
          cursor: "pointer",
          letterSpacing: ".1em",
        }}
      >
        ESC
      </button>

      {multi && (
        <div
          style={{
            position: "absolute",
            top: "24px",
            right: "28px",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "13px",
            color: "rgba(255,255,255,.4)",
          }}
        >
          {index + 1} / {photos.length}
        </div>
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          maxWidth: "min(92vw, 1280px)",
          width: "100%",
          padding: "0 20px",
          justifyContent: "center",
        }}
      >
        <NavBtn onClick={prev} dir="prev" hide={!multi} />

        <img
          key={photo.src}
          src={photo.src}
          alt={photo.caption ?? `Photo ${index + 1}`}
          style={{
            maxWidth: "calc(min(92vw, 1280px) - 140px)",
            maxHeight: "72vh",
            objectFit: "contain",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,.08)",
            boxShadow: "0 32px 100px rgba(0,0,0,.65)",
            animation: "pfLightboxImg 220ms ease both",
            display: "block",
          }}
        />

        <NavBtn onClick={next} dir="next" hide={!multi} />
      </div>

      {photo.caption && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            marginTop: "18px",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "13px",
            color: "#9aa0aa",
            textAlign: "center",
            letterSpacing: ".01em",
          }}
        >
          {photo.caption}
        </div>
      )}

      {multi && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ display: "flex", gap: "8px", marginTop: "22px" }}
        >
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => onChange(i)}
              style={{
                width: i === index ? "20px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === index ? "var(--accent)" : "rgba(255,255,255,.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 200ms ease, background 200ms ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function NavBtn({
  onClick,
  dir,
  hide,
}: {
  onClick: () => void;
  dir: "prev" | "next";
  hide: boolean;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: "none",
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: "rgba(255,255,255,.06)",
        border: "1px solid rgba(255,255,255,.1)",
        color: "#e6e8ec",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "background 150ms",
        visibility: hide ? "hidden" : "visible",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.12)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.06)"; }}
    >
      {dir === "prev" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}
