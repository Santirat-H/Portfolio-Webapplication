"use client";

const ACCENTS = [
  { name: "Violet", hex: "#a78bfa" },
  { name: "Cyan", hex: "#38bdf8" },
  { name: "Emerald", hex: "#34d399" },
  { name: "Lime", hex: "#a3e635" },
  { name: "Amber", hex: "#f59e0b" },
  { name: "Rose", hex: "#fb7185" },
];

type Props = {
  accentName: string;
  onAccent: (index: number) => void;
};

export default function AccentSwitcher({ accentName, onAccent }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "22px",
        right: "22px",
        zIndex: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "10px",
        fontFamily: "var(--font-jetbrains-mono), monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "11px",
          letterSpacing: ".16em",
          color: "#8b909a",
          textTransform: "uppercase",
        }}
      >
        <span
          style={{
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            background: "var(--accent)",
            boxShadow: "0 0 11px var(--accent)",
          }}
        />
        <span>{accentName}</span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "8px",
          padding: "9px",
          background: "rgba(13,15,20,.82)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,.09)",
          borderRadius: "11px",
        }}
      >
        {ACCENTS.map((a, i) => (
          <button
            key={a.name}
            onClick={() => onAccent(i)}
            title={a.name}
            style={{
              width: "19px",
              height: "19px",
              borderRadius: "6px",
              border: "1px solid rgba(255,255,255,.18)",
              cursor: "pointer",
              padding: 0,
              background: a.hex,
            }}
          />
        ))}
      </div>
    </div>
  );
}
