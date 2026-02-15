export interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  logo: string;
  duration: string;
  location: string;
  descriptions: string[];
}

export const experiences: Experience[] = [
  {
    title: "Systems Engineer",
    company: "Cloudflare",
    companyUrl: "https://www.cloudflare.com/",
    logo: "/logos/cf.svg",
    duration: "May 2024 - Present",
    location: "Lisbon, Portugal",
    descriptions: [
      "Member of the Cloudflare Radar team, responsible for developing new features and maintaining both the Radar API and the Radar website.",
      "Member of the AI Crawl Control team, responsible for frontend development (Cloudflare dashboard).",
      "Contributing to other projects occasionally.",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Instituto Superior de Engenharia de Lisboa",
    companyUrl: "https://www.isel.pt/en",
    logo: "/logos/isel.png",
    duration: "October 2022 - May 2024",
    location: "Lisbon, Portugal",
    descriptions: [
      "Support for the functioning of the Algorithms and Data Structures, Introduction to Web Programming and Software Laboratory curricular units of the 2nd, 3rd and 4th semesters of the BSc in Computer Science and Computer Engineering.",
      "Support to practical lessons.",
      "Clarification of doubts to students.",
      "Maintenance of software installed on the server used in Software Laboratory curricular unit projects.",
      "Vigilance and correction of the moments of evaluation of the curricular units.",
    ],
  },
];
