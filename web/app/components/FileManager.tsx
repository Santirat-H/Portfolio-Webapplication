"use client";

import { useState, useCallback, type RefObject } from "react";
import { work, projects, achievements } from "../lib/showcase";
import type { ShowcaseItem, ShowcasePhoto } from "../lib/showcase";
import FolderCard from "./FolderCard";
import PhotoLightbox from "./PhotoLightbox";

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
  winRef: RefObject<HTMLDivElement | null>;
  bodyRef: RefObject<HTMLDivElement | null>;
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
  const [lightbox, setLightbox] = useState<{ photos: ShowcasePhoto[]; index: number } | null>(null);

  const openLightbox = useCallback((photos: ShowcasePhoto[], index: number) => {
    setLightbox({ photos, index });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const changeLightbox = useCallback(
    (i: number) => setLightbox((prev) => prev ? { ...prev, index: i } : null),
    []
  );

  const workRows = buildRows(work, openId);
  const projectRows = buildRows(projects, openId);
  const achievementRows = buildRows(achievements, openId);

  return (
    <>
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
            width: "min(1400px, 100%)",
            height: "min(86vh, 840px)",
            animation: "pfWindowPop 540ms cubic-bezier(.34,1.4,.5,1) both",
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
          {/* Unified title bar */}
          <div
            style={{
              height: "46px",
              flex: "none",
              display: "flex",
              alignItems: "center",
              padding: "0 8px 0 20px",
              background: "rgba(255,255,255,.025)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(255,255,255,.06)",
              userSelect: "none",
            }}
          >
            {/* Path */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "6px", ...MONO, fontSize: "13px" }}>
              <span
                onClick={onGoHero}
                style={{ color: "#6b7280", cursor: "pointer", transition: "color 150ms" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#9aa0aa")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
              >~</span>
              <span style={{ color: "#2d3139" }}>/</span>
              <span style={{ color: "#5a606b" }}>santirat</span>
              <span style={{ color: "#2d3139" }}>/</span>
              <span style={{ color: "var(--accent)", fontWeight: 500 }}>portfolio</span>
            </div>

            {/* Window controls */}
            <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
              <WinBtn onClick={undefined}>
                <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                  <rect width="10" height="1.5" rx=".75" fill="#6b7280" />
                </svg>
              </WinBtn>
              <WinBtn onClick={undefined}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <rect x=".75" y=".75" width="8.5" height="8.5" rx="1.5" stroke="#6b7280" strokeWidth="1.5" />
                </svg>
              </WinBtn>
              <WinBtn onClick={onGoHero} danger>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 1l8 8M9 1l-8 8" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </WinBtn>
            </div>
          </div>

          {/* Scrollable body */}
          <div
            ref={bodyRef}
            style={{ flex: 1, overflowY: "auto", padding: "30px 26px 44px", position: "relative" }}
          >
            <span style={{
              position: "absolute",
              top: "14px",
              right: "26px",
              ...MONO,
              fontSize: "12px",
              color: "#4b5263",
              pointerEvents: "none",
            }}>
              3 dirs · {work.length + projects.length + achievements.length} items
            </span>

            {/* Work section */}
            <SectionHeader title="WORK" count={work.length} />
            {workRows.map((row, i) => (
              <RowGroup
                key={i}
                row={row}
                onToggle={onToggle}
                icon="folder"
                categoryTitle="TECH STACK"
                onOpenPhotos={openLightbox}
              />
            ))}

            {/* Projects section */}
            <SectionHeader title="PROJECTS" count={projects.length} top />
            {projectRows.map((row, i) => (
              <RowGroup
                key={i}
                row={row}
                onToggle={onToggle}
                icon="folder"
                categoryTitle="TECH STACK"
                onOpenPhotos={openLightbox}
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
                onOpenPhotos={openLightbox}
              />
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <PhotoLightbox
          photos={lightbox.photos}
          index={lightbox.index}
          onClose={closeLightbox}
          onChange={changeLightbox}
        />
      )}
    </>
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
  onOpenPhotos,
}: {
  row: Row;
  onToggle: (id: string) => void;
  icon: "folder" | "star";
  categoryTitle: string;
  onOpenPhotos: (photos: ShowcasePhoto[], index: number) => void;
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
        <DetailPanel
          item={row.openItem}
          categoryTitle={categoryTitle}
          onOpenPhotos={onOpenPhotos}
        />
      )}
    </div>
  );
}

function DetailPanel({
  item,
  categoryTitle,
  onOpenPhotos,
}: {
  item: ShowcaseItem;
  categoryTitle: string;
  onOpenPhotos: (photos: ShowcasePhoto[], index: number) => void;
}) {
  const photos = item.photos ?? [];

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
      {item.highlight && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            marginTop: "14px",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px",
            color: "var(--accent)",
            border: "1px solid color-mix(in srgb, var(--accent) 40%, transparent)",
            padding: "4px 10px",
            borderRadius: "5px",
          }}
        >
          <span>◆</span>
          {item.highlight}
        </div>
      )}
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
            {item.links.map((lk) =>
              lk.disabled ? (
                <div
                  key={lk.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "13px",
                    color: "#3d4450",
                    padding: "11px 13px",
                    border: "1px solid rgba(255,255,255,.06)",
                    borderRadius: "8px",
                    cursor: "default",
                  }}
                >
                  <span>{lk.label}</span>
                  {lk.note && (
                    <span style={{ fontSize: "11px", color: "#2d333f" }}>{lk.note}</span>
                  )}
                </div>
              ) : (
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
              )
            )}
          </div>
        </div>
      </div>

      {/* Photo strip */}
      {photos.length > 0 && (
        <>
          <div style={{ height: "1px", background: "rgba(255,255,255,.07)", margin: "22px 0 18px" }} />
          <div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "11px",
                letterSpacing: ".2em",
                color: "#6b7280",
                marginBottom: "12px",
              }}
            >
              PREVIEW
            </div>
            <div style={{ display: "flex", gap: "10px", overflowX: "auto", padding: "4px 4px 8px 4px" }}>
              {photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => onOpenPhotos(photos, i)}
                  style={{
                    flex: "none",
                    padding: 0,
                    border: "none",
                    borderRadius: "7px",
                    overflow: "hidden",
                    cursor: "pointer",
                    background: "rgba(0,0,0,.3)",
                    transition: "box-shadow 150ms, transform 150ms",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 0 2px var(--accent)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption ?? `Photo ${i + 1}`}
                    style={{
                      width: "160px",
                      height: "100px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function WinBtn({
  onClick,
  danger,
  children,
}: {
  onClick: (() => void) | undefined;
  danger?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "32px", height: "28px", borderRadius: "6px",
        background: "transparent", border: "none",
        cursor: onClick ? "pointer" : "default",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 150ms",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = danger
          ? "rgba(220,53,53,.25)"
          : "rgba(255,255,255,.08)";
      }}
      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
    >
      {children}
    </button>
  );
}
