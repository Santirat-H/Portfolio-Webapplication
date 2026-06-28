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
    name: "tygrade.me",
    tagline: "Placeholder tagline",
    meta: ["Solo", "2025", "Live"],
    overview:
      "Placeholder — describe tygrade.me here.",
    categories: [
      { label: "Frontend", items: ["—"] },
      { label: "Backend", items: ["—"] },
    ],
    links: [
      { label: "Live site", href: "https://tygrade.me" },
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
