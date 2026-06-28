const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono), monospace",
};

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        style={{
          ...MONO,
          fontSize: "11px",
          letterSpacing: ".2em",
          color: "#6b7280",
          marginBottom: "6px",
        }}
      >
        {label}
      </div>
      <div style={{ ...MONO, fontSize: "13px", color: "#9aa0aa", lineHeight: 1.5 }}>
        {value}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "20px",
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
          EDUCATION
        </span>
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "linear-gradient(90deg, rgba(255,255,255,.1), transparent)",
          }}
        />
      </div>

      <div
        style={{
          background: "rgba(255,255,255,.02)",
          border: "1px solid rgba(255,255,255,.07)",
          borderLeft: "2px solid var(--accent)",
          borderRadius: "12px",
          padding: "28px 32px",
        }}
      >
        <div style={{ marginBottom: "22px" }}>
          <h3
            style={{
              fontWeight: 600,
              fontSize: "20px",
              color: "#f1f3f6",
              margin: "0 0 5px",
              letterSpacing: "-.01em",
            }}
          >
            Silpakorn University
          </h3>
          <p
            style={{
              ...MONO,
              fontSize: "13px",
              color: "var(--accent)",
              margin: 0,
            }}
          >
            Bachelor of Engineering — Electronics and Computer Systems Engineering
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "18px 32px",
          }}
        >
          <Field label="PERIOD" value="2021 – 2026" />
          <Field label="GPAX" value="3.67 / 4.00" />
          <Field label="DISTINCTION" value="First Class Honours Candidate" />
        </div>
      </div>
    </div>
  );
}
