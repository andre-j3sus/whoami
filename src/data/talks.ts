export interface Talk {
  title: string;
  event: string;
  eventUrl: string;
  location: string;
  date: string;
  description: string;
  videoUrl?: string;
}

export const talks: Talk[] = [
  {
    title: "Making Your Website Agent-Ready",
    event: "Engineering Meetup",
    eventUrl: "https://luma.com/deu000j7",
    videoUrl: "https://www.youtube.com/watch?v=KgDzxy1rYpU",
    location: "Cloudflare, Lisbon",
    date: "2026-04-14",
    description:
      "The emerging standards shaping the transition to an agentic web — practical steps to make websites readable, navigable, and ready for AI agents.",
  },
  {
    title: "Empowering AI with MCP",
    event: "AI Frameworks Meetup",
    eventUrl: "https://lu.ma/lvr717q6",
    location: "Cloudflare, Lisbon",
    date: "2025-05-27",
    description:
      "An introduction to the Model Context Protocol (MCP) and how it connects AI systems with external applications and data sources, with a live demo of building and deploying a Remote MCP server on Cloudflare.",
  },
];
