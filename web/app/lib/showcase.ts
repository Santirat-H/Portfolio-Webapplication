// Placeholder showcase content. Real content comes later — keep the shape
// stable so swapping in real data is a one-file change.

export type ShowcaseItem = {
  id: string;
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

export type ShowcaseGroup = {
  title: string;
  items: ShowcaseItem[];
};

export const showcase: ShowcaseGroup[] = [
  {
    title: "Projects",
    items: [
      {
        id: "project-alpha",
        name: "Project Alpha",
        description:
          "Placeholder description for a flagship full-stack application. Replace with a real summary later.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        github: "https://github.com/example/project-alpha",
        demo: "https://example.com/alpha",
      },
      {
        id: "project-beta",
        name: "Project Beta",
        description:
          "Placeholder description for a backend service or API project.",
        tech: ["NestJS", "PostgreSQL", "Prisma"],
        github: "https://github.com/example/project-beta",
        demo: "https://example.com/beta",
      },
      {
        id: "project-gamma",
        name: "Project Gamma",
        description:
          "Placeholder description for a tooling or open-source library.",
        tech: ["TypeScript", "Node.js", "Vite"],
        github: "https://github.com/example/project-gamma",
        demo: "https://example.com/gamma",
      },
      {
        id: "project-delta",
        name: "Project Delta",
        description:
          "Placeholder description for an experimental or side project.",
        tech: ["React", "WebSockets", "Redis"],
        github: "https://github.com/example/project-delta",
        demo: "https://example.com/delta",
      },
    ],
  },
  {
    title: "Achievements",
    items: [
      {
        id: "achievement-hackathon",
        name: "Hackathon Winner",
        description:
          "Placeholder achievement — first place at a placeholder hackathon.",
        tech: ["Teamwork", "Rapid Prototyping"],
        github: "https://github.com/example/hackathon",
        demo: "https://example.com/hackathon",
      },
      {
        id: "achievement-certification",
        name: "Cloud Certification",
        description:
          "Placeholder achievement — professional cloud certification.",
        tech: ["AWS", "DevOps"],
        github: "https://github.com/example/cert",
        demo: "https://example.com/cert",
      },
    ],
  },
];
