"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Hero from "./Hero";
import FileManager from "./FileManager";
import BackgroundSection from "./BackgroundSection";
import AccentSwitcher from "./AccentSwitcher";

const ACCENTS = [
  { name: "Violet", hex: "#a78bfa" },
  { name: "Cyan", hex: "#38bdf8" },
  { name: "Emerald", hex: "#34d399" },
  { name: "Lime", hex: "#a3e635" },
  { name: "Amber", hex: "#f59e0b" },
  { name: "Rose", hex: "#fb7185" },
];

type Stage = "hero" | "files" | "background";
type Accent = { name: string; hex: string };

export default function Portfolio() {
  const [stage, setStage] = useState<Stage>("hero");
  const [openId, setOpenId] = useState<string | null>(null);
  const [accent, setAccentState] = useState<Accent>(ACCENTS[0]);

  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const winRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const bgBodyRef = useRef<HTMLDivElement>(null);
  const busy = useRef(false);
  const touchY = useRef<number | null>(null);

  useEffect(() => {
    let acc = ACCENTS[0];
    try {
      const s = localStorage.getItem("pf-accent");
      if (s) acc = JSON.parse(s);
    } catch {}
    setAccentState(acc);
    rootRef.current?.style.setProperty("--accent", acc.hex);

  }, []);

  useEffect(() => {
    if (stage === "files" && winRef.current) {
      winRef.current.style.animation =
        "pfWindowPop 540ms cubic-bezier(.34,1.4,.5,1) both";
    }
  }, [stage]);

  useEffect(() => {
    if (stage === "background" && bgRef.current) {
      bgRef.current.style.animation =
        "pfBgIn 540ms cubic-bezier(.2,.7,.2,1) both";
    }
  }, [stage]);

  const applyAccent = useCallback((hex: string) => {
    rootRef.current?.style.setProperty("--accent", hex);
  }, []);

  const setAccent = useCallback(
    (i: number) => {
      const a = ACCENTS[i];
      if (!a) return;
      setAccentState(a);
      applyAccent(a.hex);
      try {
        localStorage.setItem("pf-accent", JSON.stringify(a));
      } catch {}
    },
    [applyAccent]
  );

  const bodyAtTop = useCallback(
    () => !bodyRef.current || bodyRef.current.scrollTop <= 2,
    []
  );

  const bodyAtBottom = useCallback(() => {
    if (!bodyRef.current) return true;
    const { scrollTop, scrollHeight, clientHeight } = bodyRef.current;
    return scrollTop + clientHeight >= scrollHeight - 5;
  }, []);

  const goFiles = useCallback(() => {
    if (busy.current || stage !== "hero") return;
    busy.current = true;
    if (nameRef.current)
      nameRef.current.style.animation =
        "pfNameCrumble 560ms cubic-bezier(.7,0,.84,0) forwards";
    if (heroRef.current)
      heroRef.current.style.animation = "pfHeroDissolve 600ms ease forwards";
    setTimeout(() => {
      setStage("files");
      busy.current = false;
    }, 540);
  }, [stage]);

  const goHero = useCallback(() => {
    if (busy.current || stage !== "files") return;
    busy.current = true;
    if (winRef.current)
      winRef.current.style.animation = "pfWindowOut 340ms ease forwards";
    setTimeout(() => {
      setStage("hero");
      setOpenId(null);
      busy.current = false;
    }, 320);
  }, [stage]);

  const goBackground = useCallback(() => {
    if (busy.current || stage !== "files") return;
    busy.current = true;
    if (winRef.current)
      winRef.current.style.animation = "pfWindowOut 340ms ease forwards";
    setTimeout(() => {
      setStage("background");
      busy.current = false;
    }, 320);
  }, [stage]);

  const goBackToFiles = useCallback(() => {
    if (busy.current || stage !== "background") return;
    busy.current = true;
    if (bgRef.current)
      bgRef.current.style.animation = "pfBgOut 340ms ease forwards";
    setTimeout(() => {
      setStage("files");
      busy.current = false;
    }, 320);
  }, [stage]);

  const toggle = useCallback(
    (id: string) => setOpenId((prev) => (prev === id ? null : id)),
    []
  );

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (busy.current) return;
      const target = e.target instanceof Node ? e.target : null;
      if (stage === "hero" && e.deltaY > 12) {
        goFiles();
      } else if (stage === "files") {
        const inWin = target && winRef.current && winRef.current.contains(target);
        if (!inWin) {
          if (e.deltaY < -12) goHero();
          else if (e.deltaY > 12) goBackground();
        } else if (e.deltaY > 12 && bodyAtBottom()) {
          goBackground();
        }
      } else if (
        stage === "background" &&
        e.deltaY < -12 &&
        (bgBodyRef.current?.scrollTop ?? 1) <= 2
      ) {
        goBackToFiles();
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (stage === "files" && e.key === "Escape") {
        goHero();
        return;
      }
      if (stage === "background" && e.key === "Escape") {
        goBackToFiles();
        return;
      }
      if (
        stage === "hero" &&
        ["ArrowDown", "PageDown", " ", "Enter"].includes(e.key)
      ) {
        e.preventDefault();
        goFiles();
      }
    };
    const touchOutside = { current: false };
    const onTouchStart = (e: TouchEvent) => {
      touchY.current = e.touches[0].clientY;
      touchOutside.current =
        !!winRef.current && !winRef.current.contains(e.target as Node);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (touchY.current == null) return;
      const dy = touchY.current - e.touches[0].clientY;
      if (Math.abs(dy) > 36) {
        if (dy > 0 && stage === "hero") goFiles();
        else if (dy > 0 && stage === "files" && (touchOutside.current || bodyAtBottom())) goBackground();
        else if (dy < 0 && stage === "files" && touchOutside.current) goHero();
        else if (dy < 0 && stage === "background" && (bgBodyRef.current?.scrollTop ?? 1) <= 2) goBackToFiles();
        touchY.current = null;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [stage, goFiles, goHero, goBackground, goBackToFiles, bodyAtTop, bodyAtBottom]);

  return (
    <div
      ref={rootRef}
      style={{
        position: "fixed",
        inset: 0,
        fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
        color: "#e6e8ec",
        background:
          "radial-gradient(1100px 700px at 50% -10%, color-mix(in srgb, var(--accent) 9%, transparent), transparent 60%), #08090c",
      }}
    >
      {/* Grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
          backgroundSize: "46px 46px",
          pointerEvents: "none",
          maskImage:
            "radial-gradient(circle at 50% 40%, #000 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 40%, #000 30%, transparent 85%)",
        }}
      />
      {/* Scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,.018) 0px, rgba(255,255,255,.018) 1px, transparent 1px, transparent 3px)",
          pointerEvents: "none",
        }}
      />
      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(0,0,0,.55) 100%)",
          pointerEvents: "none",
        }}
      />

      {stage === "hero" && (
        <Hero heroRef={heroRef} nameRef={nameRef} onGoFiles={goFiles} />
      )}

      {stage === "files" && (
        <FileManager
          winRef={winRef}
          bodyRef={bodyRef}
          openId={openId}
          onToggle={toggle}
          onGoHero={goHero}
        />
      )}

      {stage === "background" && (
        <BackgroundSection
          bgRef={bgRef}
          bgBodyRef={bgBodyRef}
          onGoFiles={goBackToFiles}
        />
      )}

      <AccentSwitcher accentName={accent.name} onAccent={setAccent} />
    </div>
  );
}
