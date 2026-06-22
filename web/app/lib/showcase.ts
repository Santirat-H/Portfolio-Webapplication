export type ShowcaseLink = { label: string; href: string };
export type ShowcaseCategory = { label: string; items: string[] };

export type ShowcaseItem = {
  id: string;
  name: string;
  tagline: string;
  meta: string[];
  overview: string;
  categories: ShowcaseCategory[];
  links: ShowcaseLink[];
};

export type ShowcaseGroup = {
  title: string;
  items: ShowcaseItem[];
};

export const projects: ShowcaseItem[] = [
  {
    id: "alpha",
    name: "Project Alpha",
    tagline: "Flagship full-stack platform",
    meta: ["Lead Developer", "2025", "Production"],
    overview:
      "A flagship full-stack application with real-time data sync, role-based auth, and a modular analytics dashboard. Placeholder copy — swap with a real summary later.",
    categories: [
      { label: "Frontend", items: ["Next.js", "TypeScript", "Tailwind"] },
      { label: "Backend", items: ["NestJS", "PostgreSQL", "Prisma"] },
      { label: "Infra & Tooling", items: ["Docker", "AWS", "GitHub Actions"] },
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live demo", href: "#" },
    ],
  },
  {
    id: "beta",
    name: "Project Beta",
    tagline: "Realtime collaboration tool",
    meta: ["Full-Stack", "2024", "Open Source"],
    overview:
      "A collaborative editor with presence, conflict-free sync and offline support. Placeholder copy — replace with the real story.",
    categories: [
      { label: "Frontend", items: ["React", "Vite", "Zustand"] },
      { label: "Backend", items: ["Node.js", "WebSocket", "Redis"] },
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live demo", href: "#" },
    ],
  },
  {
    id: "gamma",
    name: "Project Gamma",
    tagline: "Mobile-first commerce app",
    meta: ["Frontend Lead", "2024", "Shipped"],
    overview:
      "A storefront focused on speed and conversion, with edge rendering and a headless CMS. Placeholder copy.",
    categories: [
      { label: "Frontend", items: ["Next.js", "TypeScript", "Stripe"] },
      { label: "Backend", items: ["Sanity CMS", "Vercel Edge"] },
    ],
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    id: "delta",
    name: "Project Delta",
    tagline: "Internal devops dashboard",
    meta: ["Solo", "2023", "Internal"],
    overview:
      "A monitoring and deploy dashboard unifying logs, metrics and one-click rollbacks. Placeholder copy.",
    categories: [
      { label: "Frontend", items: ["SvelteKit", "D3"] },
      { label: "Backend", items: ["Go", "Prometheus", "Grafana"] },
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live demo", href: "#" },
    ],
  },
];

export const achievements: ShowcaseItem[] = [
  {
    id: "hack",
    name: "Hackathon Winner",
    tagline: "1st place · DevJam 2025",
    meta: ["DevJam 2025", "Best Full-Stack"],
    overview:
      "Won best full-stack project among 120 teams for a real-time crisis-response tool built in 36 hours. Placeholder copy.",
    categories: [
      { label: "Issued by", items: ["DevJam 2025"] },
      { label: "Category", items: ["Best Full-Stack"] },
    ],
    links: [{ label: "View details", href: "#" }],
  },
  {
    id: "cloud",
    name: "Cloud Certification",
    tagline: "AWS Solutions Architect",
    meta: ["Amazon Web Services", "SAA-C03"],
    overview:
      "Certified in designing distributed, fault-tolerant systems on AWS. Placeholder copy.",
    categories: [
      { label: "Issued by", items: ["Amazon Web Services"] },
      { label: "Credential", items: ["SAA-C03"] },
    ],
    links: [{ label: "Verify", href: "#" }],
  },
];
