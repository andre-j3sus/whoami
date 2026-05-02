import type { TranslationKey } from "@/i18n/utils";

export interface Hobby {
  title: TranslationKey;
  subtitle: TranslationKey;
  emoji: string;
  content: TranslationKey;
  link?: {
    url: string;
    text: TranslationKey;
  };
}

export const hobbies: Hobby[] = [
  {
    title: "hobbies.reading.title",
    subtitle: "hobbies.reading.subtitle",
    emoji: "\u{1F4DA}",
    content: "hobbies.reading.content",
    link: {
      url: "https://www.goodreads.com/user/show/108854374-andr-jesus",
      text: "hobbies.reading.linkText",
    },
  },
  {
    title: "hobbies.active.title",
    subtitle: "hobbies.active.subtitle",
    emoji: "\u{1F4AA}",
    content: "hobbies.active.content",
  },
  {
    title: "hobbies.guitar.title",
    subtitle: "hobbies.guitar.subtitle",
    emoji: "\u{1F3B8}",
    content: "hobbies.guitar.content",
  },
  {
    title: "hobbies.travel.title",
    subtitle: "hobbies.travel.subtitle",
    emoji: "\u{1F30D}",
    content: "hobbies.travel.content",
  },
  {
    title: "hobbies.soccer.title",
    subtitle: "hobbies.soccer.subtitle",
    emoji: "\u26BD",
    content: "hobbies.soccer.content",
  },
  {
    title: "hobbies.gaming.title",
    subtitle: "hobbies.gaming.subtitle",
    emoji: "\u{1F3AE}",
    content: "hobbies.gaming.content",
    link: {
      text: "hobbies.gaming.linkText",
      url: "https://steamcommunity.com/id/andre-jesus/",
    },
  },
];
