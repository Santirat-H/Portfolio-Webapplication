export type ShowcaseLink = { label: string; href: string; disabled?: boolean; note?: string };
export type ShowcaseCategory = { label: string; items: string[] };
export type ShowcasePhoto = { src: string; caption?: string };

export type ShowcaseItem = {
  id: string;
  name: string;
  tagline: string;
  meta: string[];
  overview: string;
  highlight?: string;
  categories: ShowcaseCategory[];
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
    name: "Portfolio",
    tagline: "This site",
    meta: ["Solo", "2025", "Live"],
    overview:
      "Personal portfolio built with Next.js, React 19, TypeScript, and Tailwind CSS v4. Dark-themed macOS-style file manager interface.",
    categories: [
      { label: "Frontend", items: ["Next.js", "React 19", "TypeScript", "Tailwind CSS v4"] },
      { label: "Infra", items: ["Vercel"] },
    ],
    links: [
      { label: "GitHub", href: "#" },
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
    name: "ECTI-CARD",
    tagline: "Placeholder — conference / award",
    meta: ["ECTI", "2024"],
    overview:
      "Placeholder — describe the ECTI-CARD achievement here.",
    categories: [
      { label: "Issued by", items: ["ECTI"] },
      { label: "Category", items: ["—"] },
    ],
    links: [{ label: "View details", href: "#" }],
  },
  {
    id: "japan",
    name: "Japan Exchange Program",
    tagline: "Placeholder — institution · year",
    meta: ["Exchange", "2024"],
    overview:
      "Placeholder — describe the Japan exchange program here.",
    categories: [
      { label: "Program", items: ["—"] },
      { label: "Duration", items: ["—"] },
    ],
    links: [],
  },
];
