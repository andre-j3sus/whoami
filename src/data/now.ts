export interface NowItem {
  emoji: string;
  text: string;
}

/** ISO year-month format for machine-readable <time> rendering. */
export const lastUpdated = "2026-02";

export const nowItems: NowItem[] = [
  { emoji: "\u{1F4BC}", text: "Working on Cloudflare Radar \u2014 building new features and maintaining the API." },
  { emoji: "\u{1F3E0}", text: "Moving in together with my girlfriend \u2014 figuring out furniture, routines, and how to share a kitchen." },
  { emoji: "\u{1F4B0}", text: "Trying to find the balance between saving and enjoying the present." },
  { emoji: "\u{1F4DA}", text: "Reading Revolu\u00e7\u00e3o by Hugo Gon\u00e7alves." },
  { emoji: "\u{1F3E1}", text: "Learning about smart home setups \u2014 Home Assistant, automations, and all that." },
  { emoji: "\u2708\uFE0F", text: "Planning a trip to Munich." },
  { emoji: "\u{1F4AA}", text: "Going to the gym regularly. Trying to stay consistent." },
];
