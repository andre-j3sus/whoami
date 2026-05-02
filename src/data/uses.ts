import type { TranslationKey } from "@/i18n/utils";

export interface UsesItem {
  label: TranslationKey;
  value: string;
  url?: string;
}

export interface UsesCategory {
  title: TranslationKey;
  emoji: string;
  items: UsesItem[];
}

export const usesCategories: UsesCategory[] = [
  {
    title: "uses.hardware.title",
    emoji: "\u{1F4BB}",
    items: [
      { label: "uses.hardware.workLaptop", value: "MacBook Pro 14\"" },
      { label: "uses.hardware.personalLaptop", value: "Lenovo Legion 5" },
      {
        label: "uses.hardware.monitor",
        value: "Dell 27 Monitor - P2722H",
        url: "https://www.dell.com/en-us/shop/dell-27-monitor-p2722h/apd/210-bbck/monitors-monitor-accessories",
      },
      {
        label: "uses.hardware.keyboard",
        value: "Keychron Q1 Max",
        url: "https://www.keychron.com/products/keychron-q1-max-qmk-via-wireless-custom-mechanical-keyboard",
      },
      {
        label: "uses.hardware.switches",
        value: "Gateron G Pro 3.0 Yellow",
        url: "https://www.gateron.com/products/gateron-g-pro-30-switch-set?VariantsId=10623",
      },
      { label: "uses.hardware.mouse", value: "Logitech G402" },
      { label: "uses.hardware.phone", value: "Google Pixel 10", url: "https://store.google.com/product/pixel_10" },
    ],
  },
  {
    title: "uses.development.title",
    emoji: "\u{1F6E0}\uFE0F",
    items: [
      {
        label: "uses.development.ide",
        value: "IntelliJ IDEA",
        url: "https://www.jetbrains.com/idea/",
      },
      {
        label: "uses.development.aiCoding",
        value: "OpenCode",
        url: "https://opencode.ai",
      },
      {
        label: "uses.development.browser",
        value: "Google Chrome",
        url: "https://www.google.com/chrome/",
      },
    ],
  },
  {
    title: "uses.software.title",
    emoji: "\u{1F4F1}",
    items: [
      {
        label: "uses.software.communication",
        value: "Discord",
        url: "https://discord.com",
      },
      {
        label: "uses.software.notes",
        value: "Notion",
        url: "https://www.notion.com",
      },
      {
        label: "uses.software.calendar",
        value: "Google Calendar",
        url: "https://calendar.google.com",
      },
      {
        label: "uses.software.music",
        value: "Spotify",
        url: "https://open.spotify.com",
      },
    ],
  },
  {
    title: "uses.deskSetup.title",
    emoji: "\u{1FA91}",
    items: [
      {
        label: "uses.deskSetup.chair",
        value: "Herman Miller Mirra 2",
        url: "https://www.hermanmiller.com/products/seating/office-chairs/mirra-2-chairs/",
      },
    ],
  },
];
