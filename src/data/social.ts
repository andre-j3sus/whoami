import type { TranslationKey } from "@/i18n/utils";

export interface SocialLink {
  name: TranslationKey;
  url: string;
  description: TranslationKey;
  icon: string;
  color: string;
  darkColor?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "social.email.name",
    url: "mailto:contact@andrejesus.com",
    description: "social.email.description",
    icon: "mail",
    color: "#0c336a",
    darkColor: "#4a8ede",
  },
  {
    name: "social.linkedin.name",
    url: "https://www.linkedin.com/in/andre-j3sus",
    description: "social.linkedin.description",
    icon: "linkedin",
    color: "#0A66C2",
  },
  {
    name: "social.github.name",
    url: "https://github.com/andre-j3sus",
    description: "social.github.description",
    icon: "github",
    color: "#181717",
    darkColor: "#f4f4f5",
  },
  {
    name: "social.orcid.name",
    url: "https://orcid.org/0009-0007-8693-7054",
    description: "social.orcid.description",
    icon: "orcid",
    color: "#A6CE39",
  },
  {
    name: "social.instagram.name",
    url: "https://www.instagram.com/andre.j3sus",
    description: "social.instagram.description",
    icon: "instagram",
    color: "#E4405F",
  },
  {
    name: "social.spotify.name",
    url: "https://open.spotify.com/user/andr%C3%A9.jesus",
    description: "social.spotify.description",
    icon: "spotify",
    color: "#1DB954",
  },
  {
    name: "social.goodreads.name",
    url: "https://www.goodreads.com/user/show/108854374-andr-jesus",
    description: "social.goodreads.description",
    icon: "goodreads",
    color: "#382110",
    darkColor: "#e0c8a8",
  },
  {
    name: "social.steam.name",
    url: "https://steamcommunity.com/id/andre-jesus/",
    description: "social.steam.description",
    icon: "steam",
    color: "#000000",
    darkColor: "#66c0f4",
  },
];
