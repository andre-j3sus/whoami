export interface Award {
  title: string;
  issuer: string;
  date: string;
  institution: string;
  institutionUrl: string;
  description: string;
  url?: string;
  urlLabel?: string;
}

export const awards: Award[] = [
  {
    title: "Merit Scholarship 2022/2023",
    issuer: "DGES - Directorate General for Higher Education",
    date: "2024-11",
    institution: "Instituto Superior de Engenharia de Lisboa - Instituto Politecnico de Lisboa",
    institutionUrl: "https://www.isel.pt/en",
    description:
      "Merit scholarships are awarded by Public and Private Higher Education Institutions to students with exceptional performance, regardless of their income, in accordance with the Regulation of Allocation of Scholarships for Students of Higher Education Institutions.",
  },
  {
    title: "Best Student Award",
    issuer: "ISEL / Santander",
    date: "2024-10",
    institution: "Instituto Superior de Engenharia de Lisboa - Instituto Politecnico de Lisboa",
    institutionUrl: "https://www.isel.pt/en",
    description:
      "Academic Merit Award given by Santander Bank, to the best student in the Bachelor's Degree in Computer Science and Engineering for the 2022/2023 academic year.",
    // TODO: add certificate PDF (public/certificates/best-student-award-2024.pdf)
  },
  {
    title: "Merit Scholarship 2020/2021",
    issuer: "DGES - Directorate General for Higher Education",
    date: "2022-09",
    institution: "Instituto Superior de Engenharia de Lisboa - Instituto Politecnico de Lisboa",
    institutionUrl: "https://www.isel.pt/en",
    description:
      "Merit scholarships are awarded by Public and Private Higher Education Institutions to students with exceptional performance, regardless of their income, in accordance with the Regulation of Allocation of Scholarships for Students of Higher Education Institutions.",
  },
  {
    title: "Santander Award",
    issuer: "ISEL / Santander",
    date: "2020-10",
    institution: "Instituto Superior de Engenharia de Lisboa - Instituto Politecnico de Lisboa",
    institutionUrl: "https://www.isel.pt/en",
    description:
      "Award given by Santander in recognition of academic excellence, to the student enrolled in the Degree in Computer Science and Computer Engineering in the academic year 2020/2021.",
    // TODO: add certificate PDF (public/certificates/santander-award-2020.pdf)
  },
];
