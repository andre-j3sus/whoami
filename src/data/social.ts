export interface SocialLink {
  name: string;
  url: string;
  description: string;
  icon: string;
  color: string;
  darkColor?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    url: "mailto:contact@andrejesus.com",
    description: "Send me an email",
    icon: "mail",
    color: "#0c336a",
    darkColor: "#4a8ede",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/andre-j3sus",
    description: "Let's connect",
    icon: "linkedin",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    url: "https://github.com/andre-j3sus",
    description: "Check out my projects",
    icon: "github",
    color: "#181717",
    darkColor: "#f4f4f5",
  },
  {
    name: "ORCID",
    url: "https://orcid.org/0009-0007-8693-7054",
    description: "View my research",
    icon: "orcid",
    color: "#A6CE39",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/andre.j3sus",
    description: "Peek into my life",
    icon: "instagram",
    color: "#E4405F",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/user/andr%C3%A9.jesus",
    description: "Check what I'm listening to",
    icon: "spotify",
    color: "#1DB954",
  },
  {
    name: "Goodreads",
    url: "https://www.goodreads.com/user/show/108854374-andr-jesus",
    description: "See what I'm reading",
    icon: "goodreads",
    color: "#382110",
    darkColor: "#e0c8a8",
  },
  {
    name: "Steam",
    url: "https://steamcommunity.com/id/andre-jesus/",
    description: "Check what I'm playing",
    icon: "steam",
    color: "#000000",
    darkColor: "#66c0f4",
  },
];
