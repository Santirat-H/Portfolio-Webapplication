export type ShowcaseLink = { label: string; href: string; disabled?: boolean; note?: string };
export type ShowcaseCategory = { label: string; items: string[] };
export type ShowcasePhoto = { src: string; caption?: string };

export type ShowcaseStat = { value: string; label: string };

export type ShowcaseItem = {
  id: string;
  name: string;
  tagline: string;
  subtitle?: string;
  meta: string[];
  overview: string;
  highlight?: string;
  categories: ShowcaseCategory[];
  stats?: ShowcaseStat[];
  paperTitle?: string;
  previewNote?: string;
  links: ShowcaseLink[];
  cover?: string;
  photos?: ShowcasePhoto[];
};

export type ShowcaseGroup = {
  title: string;
  items: ShowcaseItem[];
};

export const work: ShowcaseItem[] = [
  {
    id: "moph",
    name: "CIO Information Management System",
    tagline: "ICT Division, Ministry of Public Health Thailand",
    meta: ["Solo", "21 Apr – 10 Oct 2025", "Internal"],
    overview:
      "An internal web system built solo — from requirements through deployment — for Thailand's Ministry of Public Health. The system manages CIO-level personnel records including personal information, profile images, and yearly history logs, with a staff-facing view and a separate admin interface for adding and managing records. It replaced a legacy manual workflow and remains in active use.",
    highlight: "Built solo — requirements through deployment",
    categories: [
      { label: "Frontend", items: ["Next.js"] },
      { label: "Backend", items: ["NestJS", "PostgreSQL", "Prisma ORM", "MinIO", "JWT Auth"] },
      { label: "Infra", items: ["Docker", "GitHub Actions"] },
    ],
    links: [
      { label: "GitHub", href: "#", disabled: true, note: "Private — internal system" },
      { label: "Demo", href: "#", disabled: true, note: "Not available — internal deployment" },
    ],
    photos: [
      { src: "/ict-system/cio-admin-login.jpg", caption: "Authentication" },
      { src: "/ict-system/cio-portal-info.jpg", caption: "Personnel Profile View" },
      { src: "/ict-system/cio-portal-year-record.jpg", caption: "Yearly History Records" },
      { src: "/ict-system/cio-admin-create.jpg", caption: "Admin: Add Record" },
    ],
  },
];

export const projects: ShowcaseItem[] = [
  {
    id: "tygrade",
    name: "AI Report Grader — tygrade.me",
    tagline: "AI-assisted academic report grading, production deployed",
    meta: ["Solo", "2025", "Live"],
    overview:
      "A production web application for AI-assisted academic report grading, built and deployed end-to-end. The system processes Thai-language PDF reports through an LLM evaluation pipeline using Typhoon 2.1 via Ollama, returning structured JSON scores across four grading dimensions. Includes a dashboard for managing grading projects, an AI evaluation trigger interface, and a human-in-the-loop review page where evaluators can inspect and adjust AI-generated scores. Deployed on DigitalOcean with GitHub Actions CI/CD.",
    highlight: "Presented at ECTI-CARD 2026 — r = 0.888 correlation with human graders",
    categories: [
      { label: "Frontend", items: ["Next.js", "TypeScript", "TailwindCSS"] },
      { label: "Backend", items: ["NestJS", "Prisma", "Python", "PyMuPDF", "Pandas", "Ollama", "Typhoon 2.1"] },
      { label: "Infra", items: ["DigitalOcean", "GitHub Actions"] },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Santirat-H/ai-report-grader" },
      { label: "Demo", href: "https://tygrade.me/project/0a5d5836-667f-416d-a7fc-12a6ea2f39c4" },
    ],
    photos: [
      { src: "/tygrade/tygrade-create-project.jpg", caption: "Create Grading Project" },
      { src: "/tygrade/tygrade-project-dashboard.jpg", caption: "Project Dashboard" },
      { src: "/tygrade/tygrade-human-review.jpg", caption: "Human Review Interface" },
      { src: "/tygrade/tygrade-human-edit.jpg", caption: "Score Adjustment" },
    ],
  },
  {
    id: "portfolio",
    name: "Portfolio Site — this site",
    tagline: "Personal portfolio with a macOS file-manager interface",
    meta: ["Solo", "2025", "Live"],
    overview:
      "Personal portfolio built around a macOS-style file-manager window as the primary interface. Three scroll-driven sections — a hero landing, this file-manager, and a background panel — connected by wheel, keyboard, and touch navigation. Monorepo (portfolio-web) with a Next.js 16 frontend and a NestJS API, dark-themed at #08090c with a six-color accent system persisted in localStorage.",
    highlight: "Designed and built from scratch — monorepo, dark theme, file-system UI",
    categories: [
      { label: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4"] },
      { label: "API", items: ["NestJS 11"] },
    ],
    previewNote: "You're looking at it.",
    links: [
      { label: "GitHub", href: "#", disabled: true, note: "Coming soon" },
      { label: "Demo", href: "#", disabled: true, note: "You're here" },
    ],
  },
  {
    id: "taskboard",
    name: "Task Board",
    tagline: "In progress",
    meta: ["Solo", "2025", "In Progress"],
    overview:
      "Placeholder — describe the task board here.",
    categories: [
      { label: "Frontend", items: ["—"] },
      { label: "Backend", items: ["—"] },
    ],
    links: [],
  },
];

export const achievements: ShowcaseItem[] = [
  {
    id: "ecti-card",
    name: "ECTI-CARD 2026 — Conference Paper",
    tagline: "",
    subtitle: "18th ECTI-CARD 2026 · Nakhon Ratchasima, Thailand · 27–29 April 2026",
    meta: ["Research Paper", "ECTI-CARD", "April 2026"],
    overview:
      "Research paper presented at the 18th ECTI Conference on Application Research and Development (ECTI-CARD 2026). The paper proposes and evaluates a Thai-context automated grading system using the Typhoon 2.1 large language model, tested against assessments from 4 human teaching assistants across 31 student reports.",
    categories: [
      { label: "Conference", items: ["ECTI-CARD 2026"] },
      { label: "Field", items: ["Applied Research"] },
    ],
    stats: [
      { value: "r = 0.888", label: "Pearson Correlation with Human Graders" },
      { value: "MAE = 0.927/5", label: "Mean Absolute Error" },
      { value: ">90%", label: "Cases within ±1 point of human score" },
    ],
    paperTitle:
      "Application of Large Language Models for Automated Subjective Assessment: A Thai-Context Grading System using Typhoon 2.1",
    links: [],
  },
  {
    id: "japan",
    name: "Global PBL — Silpakorn × Shibaura Institute of Technology (Japan)",
    tagline: "",
    subtitle: "Global Project Based Learning Program · June 2024 · 10 days",
    meta: ["Exchange", "June 2024", "10 days"],
    overview:
      "Participated in a joint engineering program between Silpakorn University (Thailand) and Shibaura Institute of Technology (Japan). Collaborated cross-culturally with Japanese engineering students to design, build, and deliver a portable sound detector from component level — overcoming language barriers to meet a strict delivery deadline. Technical contributions included Arduino (C++) programming to process analog microphone signals, convert readings into decibel (dB) units, and implement a real-time data logging system writing to SD card storage. Also contributed to circuit schematic design, component sourcing (ICs and sensors), and hardware assembly.",
    highlight: "Cross-cultural engineering — delivered a working hardware prototype in 10 days",
    categories: [],
    links: [],
    photos: [
      { src: "/gpbl/gpbl-prototype1.jpg", caption: "Sound Detector Prototype" },
      { src: "/gpbl/gpbl-prototype2.jpg", caption: "Hardware Assembly" },
      { src: "/gpbl/gpbl-group.jpg", caption: "Team — Silpakorn × Shibaura" },
      { src: "/gpbl/certification-thailand.jpg", caption: "Certificate — Silpakorn University" },
      { src: "/gpbl/certification-japan.jpg", caption: "Certificate — Shibaura Institute of Technology" },
    ],
  },
];
