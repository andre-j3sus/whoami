export interface Skill {
  name: string;
  icon: string;
  color: string;
  darkColor?: string;
  url?: string;
  hidden?: boolean;
}

export interface SkillCategory {
  title: string;
  descriptions: string[];
  skills: Skill[];
}

export const featuredSkills = [
  {
    name: "TypeScript",
    icon: "typescript",
    color: "#3178C6",
    url: "https://www.typescriptlang.org",
  },
  {
    name: "Python",
    icon: "python",
    color: "#3776AB",
    url: "https://www.python.org",
  },
  {
    name: "FastAPI",
    icon: "fastapi",
    color: "#009688",
    url: "https://fastapi.tiangolo.com",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    color: "#336791",
    url: "https://www.postgresql.org",
  },
  {
    name: "React",
    icon: "react",
    color: "#61DAFB",
    url: "https://react.dev",
  },
  {
    name: "Cloudflare Workers",
    icon: "cloudflare",
    color: "#F38020",
    url: "https://workers.cloudflare.com",
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    descriptions: [
      "Comfortable working across multiple languages, picking the right tool for the job.",
      "Care about writing clean, maintainable, and efficient code.",
    ],
    skills: [
      {
        name: "JavaScript",
        icon: "javascript",
        color: "#F7DF1E",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        icon: "typescript",
        color: "#3178C6",
        url: "https://www.typescriptlang.org",
      },
      {
        name: "Python",
        icon: "python",
        color: "#3776AB",
        url: "https://www.python.org",
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
    title: "Backend Development",
    descriptions: [
      "Experience in building scalable, secure backend services with modern frameworks.",
      "Designing and implementing RESTful and GraphQL APIs.",
      "Work with relational and NoSQL databases.",
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
        url: "https://www.postgresql.org",
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
    title: "Frontend Development",
    descriptions: [
      "Build responsive user interfaces with React and modern frameworks",
      "Experience with data visualizations, using libraries like D3.js.",
      "Used on internationalization (i18n) for multi-language support.",
    ],
    skills: [
      {
        name: "HTML5",
        icon: "html5",
        color: "#E34F26",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        icon: "css3",
        color: "#1572B6",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "React",
        icon: "react",
        color: "#61DAFB",
        url: "https://react.dev",
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
    title: "Infrastructure & DevOps",
    descriptions: [
      "Set up and maintain CI/CD pipelines.",
      "Deploying and managing applications using containerization and orchestration technologies.",
      "Familiar with cloud platforms and edge computing for scalable infrastructure.",
      "Managing infrastructure as code for reproducible and version-controlled environments.",
      "Setting up observability systems, including monitoring, logging, and alerting.",
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
        icon: "cloudflare",
        color: "#F38020",
        url: "https://workers.cloudflare.com",
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
];
