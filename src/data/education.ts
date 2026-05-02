import type { TranslationKey } from "@/i18n/utils";

export interface Education {
  title: TranslationKey;
  institution: string;
  institutionUrl: string;
  logo: string;
  startDate: string;
  endDate?: string;
  grade: string;
  descriptions: TranslationKey[];
}

export const education: Education[] = [
  {
    title: "education.master.title",
    institution: "Técnico - Universidade de Lisboa",
    institutionUrl: "https://tecnico.ulisboa.pt/en/",
    logo: "/logos/ist.png",
    startDate: "2023-09",
    endDate: "2025-10",
    grade: "18/20",
    descriptions: [
      "education.master.desc.1",
      "education.master.desc.2",
      "education.master.desc.3",
    ],
  },
  {
    title: "education.bachelor.title",
    institution: "Instituto Superior de Engenharia de Lisboa",
    institutionUrl: "https://www.isel.pt/en",
    logo: "/logos/isel.png",
    startDate: "2020-09",
    endDate: "2023-07",
    grade: "18/20",
    descriptions: [
      "education.bachelor.desc.1",
      "education.bachelor.desc.2",
    ],
  },
];
