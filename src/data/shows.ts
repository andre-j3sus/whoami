import type { TranslationKey } from "@/i18n/utils";

export interface Show {
  title: TranslationKey;
  show: string;
  url: string;
  date: string;
}

export const shows: Show[] = [
  {
    title: "shows.agentReadiness.title",
    show: "Cloudflare TV · Agents Week",
    url: "https://cloudflare.tv/shows/agents-week/introducing-the-agent-readiness-score--check-to-see-if-your-site-is-agent-ready/Mg6L6ELa",
    date: "2026-04-17",
  },
  {
    title: "shows.radarInsights.title",
    show: "This Week in NET",
    url: "https://cloudflare.tv/this-week-in-net/internet-insights-with-cloudflare-radar-new-tld-metrics-certificate-transparency-and-data-explorer/RglB1la6",
    date: "2025-10-27",
  },
  {
    title: "shows.radarTraffic.title",
    show: "Cloudflare TV · Birthday Week",
    url: "https://cloudflare.tv/birthday-week/introducing-new-cloudflare-radar-traffic-insights/AZEpODa6",
    date: "2025-09-26",
  },
];
