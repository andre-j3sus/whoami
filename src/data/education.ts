export interface Education {
  title: string;
  institution: string;
  institutionUrl: string;
  logo: string;
  duration: string;
  grade: string;
  descriptions: string[];
}

export const education: Education[] = [
  {
    title: "MSc. in Computer Science and Engineering",
    institution: "Instituto Superior Tecnico - Universidade de Lisboa",
    institutionUrl: "https://tecnico.ulisboa.pt/en/",
    logo: "/logos/ist.png",
    duration: "September 2023 - October 2025",
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
    duration: "September 2020 - July 2023",
    grade: "18/20",
    descriptions: [
      "Studied core computer science fundamentals: Algorithms and Data Structures, Object-Oriented Programming, Software Engineering, Databases, Computer Networks, Operating Systems, Distributed Systems.",
      "Student representative between 2022 and 2023, representing the students of the degree in the pedagogical council of the school.",
      "Received two merit scholarships for academic excellence, in 2020 and 2022.",
    ],
  },
];
