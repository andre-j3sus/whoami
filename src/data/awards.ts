import type { TranslationKey } from "@/i18n/utils";

export interface Award {
  title: TranslationKey;
  issuer: string;
  date: string;
  institution: string;
  institutionUrl: string;
  description: TranslationKey;
  url?: string;
  urlLabel?: string;
}

export const awards: Award[] = [
  {
    title: "awards.meritScholarship2023.title",
    issuer: "DGES - Directorate General for Higher Education",
    date: "2024-11",
    institution: "Instituto Superior de Engenharia de Lisboa - Instituto Politecnico de Lisboa",
    institutionUrl: "https://www.isel.pt/en",
    description: "awards.meritScholarship2023.description",
  },
  {
    title: "awards.bestStudent.title",
    issuer: "ISEL / Santander",
    date: "2024-10",
    institution: "Instituto Superior de Engenharia de Lisboa - Instituto Politecnico de Lisboa",
    institutionUrl: "https://www.isel.pt/en",
    description: "awards.bestStudent.description",
    // TODO: add certificate PDF (public/certificates/best-student-award-2024.pdf)
  },
  {
    title: "awards.meritScholarship2021.title",
    issuer: "DGES - Directorate General for Higher Education",
    date: "2022-09",
    institution: "Instituto Superior de Engenharia de Lisboa - Instituto Politecnico de Lisboa",
    institutionUrl: "https://www.isel.pt/en",
    description: "awards.meritScholarship2021.description",
  },
  {
    title: "awards.santander.title",
    issuer: "ISEL / Santander",
    date: "2020-10",
    institution: "Instituto Superior de Engenharia de Lisboa - Instituto Politecnico de Lisboa",
    institutionUrl: "https://www.isel.pt/en",
    description: "awards.santander.description",
    // TODO: add certificate PDF (public/certificates/santander-award-2020.pdf)
  },
];
