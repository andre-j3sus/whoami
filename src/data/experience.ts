import type { TranslationKey } from "@/i18n/utils";

export interface Experience {
  title: TranslationKey;
  company: string;
  companyUrl: string;
  logo: string;
  startDate: string;
  endDate?: string;
  location: string;
  descriptions: TranslationKey[];
}

export const experiences: Experience[] = [
  {
    title: "experience.cloudflare.title",
    company: "Cloudflare",
    companyUrl: "https://www.cloudflare.com/",
    logo: "/logos/cf.svg",
    startDate: "2024-05",
    location: "Lisbon, Portugal",
    descriptions: [
      "experience.cloudflare.desc.1",
      "experience.cloudflare.desc.2",
      "experience.cloudflare.desc.3",
      "experience.cloudflare.desc.4",
      "experience.cloudflare.desc.5",
      "experience.cloudflare.desc.6",
      "experience.cloudflare.desc.7",
    ],
  },
  {
    title: "experience.isel.title",
    company: "Instituto Superior de Engenharia de Lisboa",
    companyUrl: "https://www.isel.pt/en",
    logo: "/logos/isel.png",
    startDate: "2022-10",
    endDate: "2024-05",
    location: "Lisbon, Portugal",
    descriptions: [
      "experience.isel.desc.1",
      "experience.isel.desc.2",
      "experience.isel.desc.3",
      "experience.isel.desc.4",
    ],
  },
];
