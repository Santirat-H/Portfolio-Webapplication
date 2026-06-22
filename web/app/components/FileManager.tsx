import type { RefObject } from "react";
import { projects, achievements } from "../lib/showcase";
import type { ShowcaseItem } from "../lib/showcase";
import FolderCard from "./FolderCard";

type Row = {
  items: (ShowcaseItem & { isOpen: boolean })[];
  openItem: (ShowcaseItem & { isOpen: boolean }) | null;
};

function buildRows(items: ShowcaseItem[], openId: string | null): Row[] {
  const rows: Row[] = [];
  for (let i = 0; i < items.length; i += 3) {
    const slice = items.slice(i, i + 3).map((it) => ({
      ...it,
      isOpen: it.id === openId,
    }));
    rows.push({
      items: slice,
      openItem: slice.find((x) => x.isOpen) ?? null,
    });
  }
  return rows;
}

const MONO: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono), monospace",
};

type Props = {
  winRef: RefObject<HTMLDivElement>;
  bodyRef: RefObject<HTMLDivElement>;
  openId: string | null;
  onToggle: (id: string) => void;
  onGoHero: () => void;
};

export default function FileManager({
  winRef,
  bodyRef,
  openId,
  onToggle,
  onGoHero,
}: Props) {
  const projectRows = buildRows(projects, openId);
  const achievementRows = buildRows(achievements, openId);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "42px",
      }}
    >
      <div
        ref={winRef}
        style={{
          width: "min(1080px, 100%)",
          height: "min(86vh, 840px)",
          background: "#0d0f14",
          border: "1px solid rgba(255,255,255,.09)",
          borderRadius: "14px",
          boxShadow:
            "0 50px 130px rgba(0,0,0,.65), 0 0 0 1px rgba(255,255,255,.02), inset 0 1px 0 rgba(255,255,255,.04)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* macOS window chrome */}
        <div
          style={{
            height: "46px",
            flex: "none",
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            background: "linear-gradient(#14171e, #0f1218)",
            borderBottom: "1px solid rgba(255,255,255,.07)",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={onGoHero}
              title="Back to home"
              style={{
                width: "13px",
                height: "13px",
                borderRadius: "50%",
                background: "#ff5f57",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
            <span
              style={{
                width: "13px",
                height: "13px",
                borderRadius: "50%",
                background: "#febc2e",
                display: "block",
              }}
            />
            <span
              style={{
                width: "13px",
                height: "13px",
                borderRadius: "50%",
                background: "#28c840",
                display: "block",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              textAlign: "center",
              ...MONO,
              fontSize: "13px",
              color: "#6b7280",
              pointerEvents: "none",
            }}
          >
            santirat — ~/portfolio — zsh
          </div>
        </div>

        {/* Breadcrumb */}
        <div
          style={{
            flex: "none",
            padding: "14px 26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,.05)",
            ...MONO,
            fontSize: "13px",
          }}
        >
          <div style={{ color: "#6b7280" }}>
            <span
              onClick={onGoHero}
              style={{ cursor: "pointer", color: "#9aa0aa" }}
            >
              ~
            </span>
            <span style={{ color: "#3f444d" }}> / </span>santirat
            <span style={{ color: "#3f444d" }}> / </span>
            <span style={{ color: "var(--accent)" }}>portfolio</span>
          </div>
          <div style={{ color: "#5a606b", fontSize: "12px" }}>
            2 dirs · 6 items
          </div>
        </div>

        {/* Scrollable body */}
        <div
          ref={bodyRef}
          style={{ flex: 1, overflowY: "auto", padding: "30px 26px 44px" }}
        >
          {/* Projects section */}
          <SectionHeader title="PROJECTS" count={projects.length} />
          {projectRows.map((row, i) => (
            <RowGroup
              key={i}
              row={row}
              onToggle={onToggle}
              icon="folder"
              categoryTitle="TECH STACK"
            />
          ))}

          {/* Achievements section */}
          <SectionHeader title="ACHIEVEMENTS" count={achievements.length} top />
          {achievementRows.map((row, i) => (
            <RowGroup
              key={i}
              row={row}
              onToggle={onToggle}
              icon="star"
              categoryTitle="DETAILS"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  title,
  count,
  top,
}: {
  title: string;
  count: number;
  top?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        margin: top ? "32px 0 18px" : "0 0 18px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "12px",
          letterSpacing: ".24em",
          color: "#6b7280",
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "11px",
          color: "var(--accent)",
          border: "1px solid color-mix(in srgb, var(--accent) 40%, transparent)",
          padding: "1px 7px",
          borderRadius: "5px",
        }}
      >
        {count}
      </span>
      <div
        style={{
          flex: 1,
          height: "1px",
          background:
            "linear-gradient(90deg, rgba(255,255,255,.1), transparent)",
        }}
      />
    </div>
  );
}

function RowGroup({
  row,
  onToggle,
  icon,
  categoryTitle,
}: {
  row: Row;
  onToggle: (id: string) => void;
  icon: "folder" | "star";
  categoryTitle: string;
}) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "14px",
          marginBottom: "14px",
        }}
      >
        {row.items.map((item) => (
          <FolderCard
            key={item.id}
            item={item}
            isOpen={item.isOpen}
            icon={icon}
            onToggle={() => onToggle(item.id)}
          />
        ))}
      </div>

      {row.openItem && (
        <DetailPanel item={row.openItem} categoryTitle={categoryTitle} />
      )}
    </div>
  );
}

function DetailPanel({
  item,
  categoryTitle,
}: {
  item: ShowcaseItem;
  categoryTitle: string;
}) {
  return (
    <div
      style={{
        animation: "pfPanelIn 360ms cubic-bezier(.2,.7,.2,1) both",
        margin: "-2px 0 18px",
        background: "rgba(255,255,255,.02)",
        border: "1px solid rgba(255,255,255,.07)",
        borderLeft: "2px solid var(--accent)",
        borderRadius: "12px",
        padding: "26px 28px",
      }}
    >
      <h3
        style={{
          fontWeight: 600,
          fontSize: "23px",
          color: "#f1f3f6",
          margin: "0 0 5px",
          letterSpacing: "-.01em",
        }}
      >
        {item.name}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "13px",
          color: "var(--accent)",
          margin: "0 0 16px",
        }}
      >
        {item.tagline}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {item.meta.map((m) => (
          <span
            key={m}
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "11px",
              color: "#9aa0aa",
              border: "1px solid rgba(255,255,255,.1)",
              padding: "4px 9px",
              borderRadius: "6px",
              background: "rgba(255,255,255,.02)",
            }}
          >
            {m}
          </span>
        ))}
      </div>
      <div
        style={{
          height: "1px",
          background: "rgba(255,255,255,.07)",
          margin: "20px 0",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1.2fr .9fr",
          gap: "32px",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "11px",
              letterSpacing: ".2em",
              color: "#6b7280",
              marginBottom: "13px",
            }}
          >
            OVERVIEW
          </div>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.7,
              color: "#9aa0aa",
              margin: 0,
            }}
          >
            {item.overview}
          </p>
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "11px",
              letterSpacing: ".2em",
              color: "#6b7280",
              marginBottom: "13px",
            }}
          >
            {categoryTitle}
          </div>
          {item.categories.map((cat) => (
            <div key={cat.label} style={{ marginBottom: "15px" }}>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "11px",
                  color: "#5a606b",
                  marginBottom: "8px",
                }}
              >
                {cat.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {cat.items.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "12px",
                      color: "#c5c9d0",
                      padding: "5px 10px",
                      border: "1px solid rgba(255,255,255,.1)",
                      borderRadius: "6px",
                      background: "rgba(255,255,255,.02)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "11px",
              letterSpacing: ".2em",
              color: "#6b7280",
              marginBottom: "13px",
            }}
          >
            LINKS
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {item.links.map((lk) => (
              <a
                key={lk.label}
                href={lk.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "13px",
                  color: "#e6e8ec",
                  textDecoration: "none",
                  padding: "11px 13px",
                  border: "1px solid rgba(255,255,255,.12)",
                  borderRadius: "8px",
                }}
              >
                {lk.label}
                <span style={{ color: "#6b7280" }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
