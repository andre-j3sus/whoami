import type { TranslationKey } from "@/i18n/utils";

export interface Talk {
  title: TranslationKey;
  event: string;
  eventUrl: string;
  location: string;
  date: string;
  description: TranslationKey;
  videoUrl?: string;
}

export const talks: Talk[] = [
  {
    title: "talks.agentReady.title",
    event: "Engineering Meetup",
    eventUrl: "https://luma.com/deu000j7",
    videoUrl: "https://www.youtube.com/watch?v=KgDzxy1rYpU",
    location: "Cloudflare, Lisbon",
    date: "2026-04-14",
    description: "talks.agentReady.description",
  },
  {
    title: "talks.mcp.title",
    event: "AI Frameworks Meetup",
    eventUrl: "https://lu.ma/lvr717q6",
    location: "Cloudflare, Lisbon",
    date: "2025-05-27",
    description: "talks.mcp.description",
  },
];
