export interface Education {
  title: string;
  institution: string;
  institutionUrl: string;
  logo: string;
  startDate: string;
  endDate?: string;
  grade: string;
  descriptions: string[];
}

export const education: Education[] = [
  {
    title: "MSc. in Computer Science and Engineering",
    institution: "Instituto Superior Tecnico - Universidade de Lisboa",
    institutionUrl: "https://tecnico.ulisboa.pt/en/",
    logo: "/logos/ist.png",
    startDate: "2023-09",
    endDate: "2025-10",
    grade: "18/20",
    descriptions: [
      "Focus Areas: Distributed Systems and Cybersecurity",
      'Dissertation: "Serverless Snapshot Orchestration" - 19/20 (95%)',
    ],
  },
  {
    title: "BSc. in Computer Science and Engineering",
    institution:
      "Instituto Superior de Engenharia de Lisboa - Instituto Politecnico de Lisboa",
    institutionUrl: "https://www.isel.pt/en",
    logo: "/logos/isel.png",
    startDate: "2020-09",
    endDate: "2023-07",
    grade: "18/20",
    descriptions: [
      "Studied core computer science fundamentals: Algorithms and Data Structures, Object-Oriented Programming, Software Engineering, Databases, Computer Networks, Operating Systems, Distributed Systems.",
      "Student representative between 2022 and 2023, representing the students of the degree in the pedagogical council of the school.",
      "Received two merit scholarships for academic excellence, in 2020 and 2022.",
    ],
  },
];
