export interface Project {
  title: string;
  subtitle: string;
  description: string;
  role: string;
  githubUrl?: string;
  url?: string;
  duration: string;
  techStack: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Cloudflare Radar",
    subtitle: "Global Internet Traffic Trends and Insights",
    description:
      "Cloudflare Radar is a hub that showcases global Internet traffic trends and insights, powered by data from Cloudflare's global network and aggregated, anonymized data from Cloudflare's 1.1.1.1 public DNS Resolver. I maintain and implement new API features, build frontend pages and data visualizations, and handle infrastructure and DevOps work across the platform.",
    role: "Developer",
    url: "https://radar.cloudflare.com/",
    duration: "May 2024 - Present",
    techStack: ["TypeScript", "React", "Remix", "Cloudflare Workers", "Python", "FastAPI", "GraphQL"],
    tags: ["full-stack", "data-visualization"],
  },
  {
    title: "vHive",
    subtitle: "Serverless Snapshot Orchestration (MSc Thesis)",
    description:
      "Contributed to vHive, an open-source serverless research platform, as part of my MSc thesis on Serverless Snapshot Orchestration. Designed and implemented a snapshot orchestration system for sharing and restoring function snapshots across cluster nodes, with local caching and a snapshot-aware scheduler to reduce cold start latency. Work done in collaboration with NTU Singapore.",
    role: "Contributor",
    githubUrl: "https://github.com/vhive-serverless/vHive",
    url: "https://vhive-serverless.github.io/",
    duration: "August 2024 - October 2025",
    techStack: ["Go", "Docker", "Kubernetes", "Firecracker"],
    tags: ["research", "open-source", "thesis"],
  },
  {
    title: "PHYLOViZ Web Platform",
    subtitle: "A Modular and Web-Based Tool for Phylogenetic Analysis",
    description:
      "PHYLOViZ Web Platform is a web platform, developed in the context of the PHYLOViZ initiative, that allows users to access and perform phylogenetic analyses from anywhere with an internet connection, without requiring installation of software or access to HPC resources. It's modular, making it maintainable and extensible. Supports large scale analyses by relying on a workflow system that enables the distribution of parallel computations on cloud and HPC environments.",
    role: "Developer",
    githubUrl: "https://github.com/phyloviz/phyloviz-web-platform",
    url: "http://www.phyloviz.net/",
    duration: "February 2023 - January 2024",
    techStack: ["TypeScript", "React", "Java", "Spring", "Docker", "MongoDB"],
    tags: ["full-stack", "open-source", "research"],
  },
  {
    title: "APTO Website",
    subtitle: "Website for a Tutoring Center in Lisbon",
    description:
      "Website for APTO (Apoio Pedagógico Total), a tutoring center in Benfica, Lisbon. I studied there for 5 years and taught for 1 year, and built this site to help them improve their online presence.",
    role: "Developer",
    githubUrl: "https://github.com/andre-j3sus/apto-website",
    url: "https://apto.pt",
    duration: "July 2025",
    techStack: ["React", "TypeScript", "Vite", "Cloudflare Workers"],
    tags: ["frontend"],
  },
  {
    title: "ISEL LEIC Notes",
    subtitle: "BSc Computer Science & Engineering Course Notes",
    description:
      "A collection of notes from my Bachelor's Degree in Computer Science and Engineering at ISEL, covering 6 semesters of courses. Started as personal study notes and grew into a community resource with contributions from other students. Covers topics from algorithms and data structures to web development, concurrent programming, cloud computing, and more.",
    role: "Author",
    githubUrl: "https://github.com/andre-j3sus/isel-leic-notes",
    url: "https://isel-leic-notes.andrejesus.com/",
    duration: "September 2020 - July 2023",
    techStack: ["Astro", "TypeScript", "Cloudflare Workers"],
    tags: ["education", "frontend"],
  },
];
