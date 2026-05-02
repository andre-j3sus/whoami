import type { TranslationKey } from "@/i18n/utils";

export interface Skill {
  name: string;
  icon: string;
  color: string;
  darkColor?: string;
  url?: string;
  hidden?: boolean;
  featured?: boolean;
}

export interface SkillCategory {
  title: TranslationKey;
  descriptions: TranslationKey[];
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "skills.programmingLanguages.title",
    descriptions: [
      "skills.programmingLanguages.desc.1",
      "skills.programmingLanguages.desc.2",
    ],
    skills: [
      {
        name: "JavaScript",
        icon: "javascript",
        color: "#B8A600",
        darkColor: "#F7DF1E",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        icon: "typescript",
        color: "#3178C6",
        url: "https://www.typescriptlang.org",
        featured: true,
      },
      {
        name: "Python",
        icon: "python",
        color: "#3776AB",
        url: "https://www.python.org",
        featured: true,
      },
      {
        name: "Kotlin",
        icon: "kotlin",
        color: "#B125EA",
        url: "https://kotlinlang.org",
      },
      {
        name: "Java",
        icon: "openjdk",
        color: "#007396",
        url: "https://openjdk.org",
      },
      {
        name: "Go",
        icon: "go",
        color: "#00ADD8",
        url: "https://go.dev",
        hidden: true,
      },
    ],
  },
  {
    title: "skills.backend.title",
    descriptions: [
      "skills.backend.desc.1",
      "skills.backend.desc.2",
      "skills.backend.desc.3",
    ],
    skills: [
      {
        name: "NodeJS",
        icon: "nodedotjs",
        color: "#339933",
        url: "https://nodejs.org",
      },
      {
        name: "FastAPI",
        icon: "fastapi",
        color: "#009688",
        url: "https://fastapi.tiangolo.com",
        featured: true,
      },
      {
        name: "GraphQL",
        icon: "graphql",
        color: "#E10098",
        url: "https://graphql.org",
      },
      {
        name: "Spring",
        icon: "spring",
        color: "#6DB33F",
        url: "https://spring.io",
      },
      {
        name: "PostgreSQL",
        icon: "postgresql",
        color: "#336791",
        darkColor: "#5B9BD5",
        url: "https://www.postgresql.org",
        featured: true,
      },
      {
        name: "MongoDB",
        icon: "mongodb",
        color: "#47A248",
        url: "https://www.mongodb.com",
      },
    ],
  },
  {
    title: "skills.frontend.title",
    descriptions: [
      "skills.frontend.desc.1",
      "skills.frontend.desc.2",
      "skills.frontend.desc.3",
      "skills.frontend.desc.4",
    ],
    skills: [
      {
        name: "HTML5",
        icon: "html5",
        color: "#E34F26",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        icon: "css",
        color: "#663399",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "React",
        icon: "react",
        color: "#61DAFB",
        url: "https://react.dev",
        featured: true,
      },
      {
        name: "Remix",
        icon: "remix",
        color: "#000000",
        darkColor: "#f4f4f5",
        url: "https://remix.run",
      },
      { name: "Vite", icon: "vite", color: "#646CFF", url: "https://vite.dev" },
      { name: "Astro", icon: "astro", color: "#BC52EE", url: "https://astro.build" },
    ],
  },
  {
    title: "skills.infrastructure.title",
    descriptions: [
      "skills.infrastructure.desc.1",
      "skills.infrastructure.desc.2",
      "skills.infrastructure.desc.3",
      "skills.infrastructure.desc.4",
      "skills.infrastructure.desc.5",
    ],
    skills: [
      {
        name: "Docker",
        icon: "docker",
        color: "#2496ED",
        url: "https://www.docker.com",
      },
      {
        name: "Kubernetes",
        icon: "kubernetes",
        color: "#326CE5",
        url: "https://kubernetes.io",
      },
      {
        name: "Cloudflare Workers",
        icon: "cloudflareworkers",
        color: "#F38020",
        url: "https://workers.cloudflare.com",
        featured: true,
      },
      {
        name: "Google Cloud Platform",
        icon: "googlecloud",
        color: "#4285F4",
        url: "https://cloud.google.com",
      },
      {
        name: "GitLab CI",
        icon: "gitlab",
        color: "#FC6D26",
        url: "https://docs.gitlab.com/ci/",
      },
      {
        name: "Prometheus",
        icon: "prometheus",
        color: "#E6522C",
        url: "https://prometheus.io",
      },
      {
        name: "Grafana",
        icon: "grafana",
        color: "#F46800",
        url: "https://grafana.com",
      },
      {
        name: "Terraform",
        icon: "terraform",
        color: "#844FBA",
        url: "https://www.terraform.io",
      },
      {
        name: "Sentry",
        icon: "sentry",
        color: "#362D59",
        darkColor: "#8B7FC7",
        url: "https://sentry.io",
      },
      {
        name: "Firecracker",
        icon: "lucide:flame",
        color: "#FF9900",
        url: "https://firecracker-microvm.github.io",
        hidden: true,
      },
    ],
  },
  {
    title: "skills.aiTools.title",
    descriptions: [
      "skills.aiTools.desc.1",
      "skills.aiTools.desc.2",
    ],
    skills: [
      {
        name: "OpenCode",
        icon: "lucide:terminal",
        color: "#F48024",
        url: "https://opencode.ai",
      },
      {
        name: "Windsurf",
        icon: "lucide:wind",
        color: "#0EA5E9",
        url: "https://windsurf.com",
      },
    ],
  },
];

/** Skills marked as `featured` across all categories, for the homepage tech grid. */
export const featuredSkills: Skill[] = skillCategories
  .flatMap((cat) => cat.skills)
  .filter((s) => s.featured);
