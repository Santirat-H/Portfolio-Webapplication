const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono), monospace",
};

const SKILL_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Programming",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "OOP"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TailwindCSS", "HTML", "CSS"],
  },
  {
    label: "Backend & API",
    items: ["NestJS", "RESTful APIs", "Node.js", "JWT Authentication"],
  },
  {
    label: "Database & Storage",
    items: ["PostgreSQL", "Prisma ORM", "MinIO", "Relational Database Design"],
  },
  {
    label: "Tools & Infrastructure",
    items: ["Docker", "Git", "Linux Basics", "Postman"],
  },
  {
    label: "Testing & Workflows",
    items: [
      "CI/CD (GitHub Actions)",
      "Functional & API Testing",
      "Test Automation (Robot Framework / SeleniumLibrary)",
      "Debugging & Troubleshooting",
    ],
  },
  {
    label: "Generative AI",
    items: ["Prompt Engineering", "Structured JSON Output", "Ollama", "LLM Integration"],
  },
];

export default function Skills() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "24px",
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
          SKILLS
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
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "20px 40px",
        }}
      >
        {SKILL_GROUPS.map((group) => (
          <div key={group.label}>
            <div
              style={{
                ...MONO,
                fontSize: "11px",
                letterSpacing: ".18em",
                color: "#e6e8ec",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              {group.label}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{
                    ...MONO,
                    fontSize: "12px",
                    color: "#c5c9d0",
                    padding: "4px 10px",
                    border:
                      "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
                    background:
                      "color-mix(in srgb, var(--accent) 7%, transparent)",
                    borderRadius: "6px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
