export interface Talk {
  title: string;
  event: string;
  eventUrl: string;
  location: string;
  date: string;
  description: string;
}

export const talks: Talk[] = [
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
