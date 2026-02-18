export interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  logo: string;
  startDate: string;
  endDate?: string;
  location: string;
  descriptions: string[];
}

export const experiences: Experience[] = [
  {
    title: "Systems Engineer",
    company: "Cloudflare",
    companyUrl: "https://www.cloudflare.com/",
    logo: "/logos/cf.svg",
    startDate: "2024-05",
    location: "Lisbon, Portugal",
    descriptions: [
      "Member of the Cloudflare Radar team, building and shipping full-stack features across the Radar API and website — including pages on DNS, Certificate Transparency, AI insights, and Internet services rankings, among others.",
      "Built the Radar MCP Server, enabling AI assistants to query Radar data.",
      "Contributing frontend work to AI Crawl Control on the Cloudflare dashboard.",
      "Contributed to CI pipeline migrations, Infrastructure-as-Code adoption, and system resilience efforts.",
      "Involved in ongoing platform maintenance: SEO improvements, dependency upgrades, high-availability work, and testing.",
      "Mentored an intern on a full-stack feature spanning both API and frontend.",
      "Started as a Software Engineer Intern (May 2024), transitioned to full-time Systems Engineer (September 2024).",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Instituto Superior de Engenharia de Lisboa",
    companyUrl: "https://www.isel.pt/en",
    logo: "/logos/isel.png",
    startDate: "2022-10",
    endDate: "2024-05",
    location: "Lisbon, Portugal",
    descriptions: [
      "Teaching assistant for Algorithms & Data Structures, Introduction to Web Programming, and Software Laboratory across the 2nd to 4th semesters of the BSc in Computer Science and Engineering.",
      "Led practical lab sessions and provided one-on-one support to students.",
      "Maintained server infrastructure used by students for Software Laboratory projects.",
      "Assisted in the preparation and grading of exams and assignments.",
    ],
  },
];
