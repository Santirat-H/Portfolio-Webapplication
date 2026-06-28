import type { RefObject } from "react";

type Props = {
  heroRef: RefObject<HTMLDivElement | null>;
  nameRef: RefObject<HTMLHeadingElement | null>;
  onGoFiles: () => void;
};

export default function Hero({ heroRef, nameRef, onGoFiles }: Props) {
  return (
    <div
      ref={heroRef}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        animation: "pfHeroIn 600ms cubic-bezier(.2,.7,.2,1) both",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "34px",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "12px",
          letterSpacing: ".2em",
          color: "#5a606b",
        }}
      >
        // SANTIRAT.DEV
      </div>
      <div
        style={{
          position: "absolute",
          top: "30px",
          right: "34px",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "12px",
          letterSpacing: ".2em",
          color: "#5a606b",
        }}
      >
        AVAILABLE FOR WORK
      </div>

      <div
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "13px",
          letterSpacing: ".42em",
          color: "var(--accent)",
          textTransform: "uppercase",
          marginBottom: "30px",
        }}
      >
        Portfolio
      </div>

      <h1
        ref={nameRef}
        style={{
          fontWeight: 700,
          fontSize: "clamp(50px, 9.2vw, 148px)",
          lineHeight: 0.9,
          letterSpacing: "-.025em",
          color: "#f1f3f6",
          textAlign: "center",
          margin: 0,
        }}
      >
        SANTIRAT
        <br />
        HLAOP
      </h1>

      <div
        style={{
          width: "66px",
          height: "3px",
          background: "var(--accent)",
          margin: "36px 0 28px",
          borderRadius: "2px",
          boxShadow: "0 0 26px var(--accent)",
        }}
      />

      <p
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "clamp(13px, 1.5vw, 17px)",
          letterSpacing: ".03em",
          color: "#8b909a",
          margin: 0,
        }}
      >
        Full-Stack Developer{" "}
        <span style={{ color: "#3f444d" }}>—</span> TypeScript{" "}
        <span style={{ color: "var(--accent)" }}>·</span> Next.js{" "}
        <span style={{ color: "var(--accent)" }}>·</span> NestJS
        <span
          style={{
            color: "var(--accent)",
            animation: "pfBlink 1.1s steps(1) infinite",
            marginLeft: "3px",
          }}
        >
          ▍
        </span>
      </p>

      <button
        onClick={onGoFiles}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#6b7280",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "12px",
          letterSpacing: ".28em",
        }}
      >
        SCROLL
        <span
          style={{
            fontSize: "18px",
            color: "var(--accent)",
            animation: "pfBob 1.6s ease-in-out infinite",
          }}
        >
          ↓
        </span>
      </button>
    </div>
  );
}
