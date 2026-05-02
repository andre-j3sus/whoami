import type { TranslationKey } from "@/i18n/utils";

export interface NowItem {
  emoji: string;
  text: TranslationKey;
}

/** ISO year-month format for machine-readable <time> rendering. */
export const lastUpdated = "2026-02";

export const nowItems: NowItem[] = [
  { emoji: "\u{1F4BC}", text: "now.item.1" },
  { emoji: "\u{1F3E0}", text: "now.item.2" },
  { emoji: "\u{1F4B0}", text: "now.item.3" },
  { emoji: "\u{1F4DA}", text: "now.item.4" },
  { emoji: "\u{1F3E1}", text: "now.item.5" },
  { emoji: "\u2708\uFE0F", text: "now.item.6" },
  { emoji: "\u{1F4AA}", text: "now.item.7" },
];
