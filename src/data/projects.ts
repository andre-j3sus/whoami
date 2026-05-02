import type { TranslationKey } from "@/i18n/utils";

export interface Project {
  title: TranslationKey;
  subtitle: TranslationKey;
  description: TranslationKey;
  role: TranslationKey;
  githubUrl?: string;
  url?: string;
  startDate: string;
  endDate?: string;
  ongoing?: boolean;
  techStack: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "projects.radar.title",
    subtitle: "projects.radar.subtitle",
    description: "projects.radar.description",
    role: "projects.radar.role",
    url: "https://radar.cloudflare.com/",
    startDate: "2024-05",
    ongoing: true,
    techStack: ["TypeScript", "React", "Remix", "Cloudflare Workers", "Python", "FastAPI", "GraphQL"],
    tags: ["full-stack", "data-visualization"],
  },
  {
    title: "projects.vhive.title",
    subtitle: "projects.vhive.subtitle",
    description: "projects.vhive.description",
    role: "projects.vhive.role",
    githubUrl: "https://github.com/vhive-serverless/vHive",
    url: "https://vhive-serverless.github.io/",
    startDate: "2024-08",
    endDate: "2025-10",
    techStack: ["Go", "Docker", "Kubernetes", "Firecracker"],
    tags: ["research", "open-source", "thesis"],
  },
  {
    title: "projects.phyloviz.title",
    subtitle: "projects.phyloviz.subtitle",
    description: "projects.phyloviz.description",
    role: "projects.phyloviz.role",
    githubUrl: "https://github.com/phyloviz/phyloviz-web-platform",
    url: "https://www.phyloviz.net/",
    startDate: "2023-02",
    endDate: "2024-01",
    techStack: ["TypeScript", "React", "Java", "Spring", "Docker", "MongoDB"],
    tags: ["full-stack", "open-source", "research"],
  },
  {
    title: "projects.apto.title",
    subtitle: "projects.apto.subtitle",
    description: "projects.apto.description",
    role: "projects.apto.role",
    githubUrl: "https://github.com/andre-j3sus/apto-website",
    url: "https://apto.pt",
    startDate: "2025-07",
    techStack: ["React", "TypeScript", "Vite", "Cloudflare Workers"],
    tags: ["frontend"],
  },
  {
    title: "projects.notes.title",
    subtitle: "projects.notes.subtitle",
    description: "projects.notes.description",
    role: "projects.notes.role",
    githubUrl: "https://github.com/andre-j3sus/isel-leic-notes",
    url: "https://isel-leic-notes.andrejesus.com/",
    startDate: "2020-09",
    endDate: "2023-07",
    techStack: ["Astro", "TypeScript", "Cloudflare Workers"],
    tags: ["education", "frontend"],
  },
];
