import { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";

// Personal data - this would typically come from a CMS or API
const personalData = {
  name: "André Jesus",
  position: "Software Engineer Intern | Computer Science & Engineering Student",
  url: "https://andre-j3sus.github.io",
  headline: "Hey there 👋, welcome to my website!",
  logoName: "Andre Jesus",
  homeImagePath: "website-creator-bro.svg",
  repository: "https://github.com/andre-j3sus/andre-j3sus-website",
  resume: "https://www.canva.com/design/DAFqHQqqaGk/Q2N2Mi5I6JUUgpeB4ugMaw/view?utm_content=DAFqHQqqaGk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
  github: "https://github.com/andre-j3sus",
  contacts: {
    title: "Contact Me",
    subtitle: "Want to get in touch? Feel free to reach out.",
    //description: "",
    data: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andre-j3sus",
        fontAwesomeIcon: "fa-brands fa-linkedin fa-2xl",
        backgroundColor: "#0077B5"
      },
      {
        name: "Github",
        url: "https://github.com/andre-j3sus",
        fontAwesomeIcon: "fa-brands fa-github fa-2xl",
        backgroundColor: "#181717"
      },
      {
        name: "ORCID",
        url: "https://orcid.org/0009-0007-8693-7054",
        fontAwesomeIcon: "fa-brands fa-orcid fa-2xl",
        backgroundColor: "#A6CE39"
      },
      {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/users/15545640/andr%c3%a9-jesus",
        fontAwesomeIcon: "fa-brands fa-stack-overflow fa-2xl",
        backgroundColor: "#F48024"
      },
      {
        name: "Gmail",
        url: "mailto:andre.jesus.pilar@gmail.com",
        fontAwesomeIcon: "fa-brands fa-google fa-2xl",
        backgroundColor: "#D14836"
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/@andre-j3sus",
        fontAwesomeIcon: "fa-brands fa-youtube fa-2xl",
        backgroundColor: "#FF0000"
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/andre.j3sus",
        fontAwesomeIcon: "fa-brands fa-instagram fa-2xl",
        backgroundColor: "#E4405F"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/andre_j3sus",
        fontAwesomeIcon: "fa-brands fa-twitter fa-2xl",
        backgroundColor: "#1DA1F2"
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/user/andré.jesus",
        fontAwesomeIcon: "fa-brands fa-spotify fa-2xl",
        backgroundColor: "#1ED760"
      },
      {
        name: "Goodreads",
        url: "https://www.goodreads.com/user/show/108854374-andr-jesus",
        fontAwesomeIcon: "fa-brands fa-goodreads fa-2xl",
        backgroundColor: "#553B08"
      },
      {
        name: "TV Time",
        url: "https://www.tvtime.com/en/user/28579171/profile",
        fontAwesomeIcon: "fas fa-tv fa-2xl",
        backgroundColor: "#FFD700"
      }
    ]
  },
  skills: {
    data: [
      {
        title: "Programming Languages and DevOps",
        imagePath: "code-typing-bro.svg",
        skills: [
          "Well-versed in programming paradigms, enabling flexible problem-solving approaches.",
          "Experience in developing software solutions using diverse programming languages.",
          "Proficiency in Git, GitHub, and DevOps tools for seamless collaboration, CI/CD, and code management.",
          "Well-versed in LaTeX for creating professional and well-formatted documents."
        ],
        softwareSkills: [
          { skillName: "Java", icon: "devicon:java", style: { color: "#007396" } },
          { skillName: "Kotlin", icon: "devicon:kotlin", style: { color: "#B125EA" } },
          { skillName: "JavaScript", icon: "devicon:javascript", style: { color: "#F7DF1E" } },
          { skillName: "TypeScript", icon: "devicon:typescript", style: { color: "#3178C6" } },
          { skillName: "C", icon: "devicon:c", style: { color: "#A8B9CC" } },
          { skillName: "C#", icon: "devicon:csharp", style: { color: "#239120" } },
          { skillName: "Python", icon: "devicon:python", style: { color: "#3776AB" } },
          { skillName: "Git", icon: "devicon:git", style: { color: "#F05032" } },
          { skillName: "GitHub", icon: "devicon:github", style: { color: "#181717" } },
          { skillName: "Jenkins", icon: "devicon:jenkins", style: { color: "#D24939" } },
          { skillName: "GitHub Actions", icon: "devicon:githubactions", style: { color: "#2088FF" } },
          { skillName: "LaTeX", icon: "skill-icons:latex-light", style: { color: "#008080" } }
        ]
      },
      {
        title: "Web Development",
        imagePath: "domain-names-bro.svg",
        skills: [
          "Experienced in backend development, ensuring security and scalability.",
          "Building responsive user interfaces for web applications.",
          "Familiarity with tools like Webpack, NGINX, and Postman for efficient development and testing processes."
        ],
        softwareSkills: [
          { skillName: "HTML5", icon: "devicon-html5", style: { color: "#E34F26" } },
          { skillName: "CSS3", icon: "devicon-css3", style: { color: "#1572B6" } },
          { skillName: "NodeJS", icon: "devicon-nodejs", style: { color: "#339933" } },
          { skillName: "ExpressJS", icon: "devicon-express", style: { color: "#000000" } },
          { skillName: "ReactJS", icon: "devicon-react", style: { color: "#61DAFB" } },
          { skillName: "Material-UI", icon: "devicon-materialui", style: { color: "#0081CB" } },
          { skillName: "Bootstrap", icon: "devicon-bootstrap", style: { color: "#563D7C" } },
          { skillName: "Webpack", icon: "devicon-webpack", style: { color: "#8DD6F9" } },
          { skillName: "Spring", icon: "devicon-spring", style: { color: "#6DB33F" } },
          { skillName: "NGINX", icon: "simple-icons:nginx", style: { color: "#009639" } },
          { skillName: "Postman", icon: "simple-icons:postman", style: { color: "#FF6C37" } }
        ]
      },
      {
        title: "Cloud Infra, Databases & OS",
        imagePath: "server-bro.svg",
        skills: [
          "Proficiency in Docker for efficient application deployment through containerization.",
          "Experience in Linux for effective server management and administration.",
          "Familiarity with Google Cloud Platform scalable and reliable cloud infrastructure solutions.",
          "Experience in several database technologies, for efficient data storage and retrieval."
        ],
        softwareSkills: [
          { skillName: "Docker", icon: "devicon:docker", style: { color: "#2496ED" } },
          { skillName: "Linux", icon: "flat-color-icons:linux", style: { color: "#FCC624" } },
          { skillName: "Android", icon: "simple-icons:android", style: { color: "#3DDC84" } },
          { skillName: "Google Cloud Platform", icon: "devicon:googlecloud", style: { color: "#4285F4" } },
          { skillName: "PostgreSQL", icon: "devicon:postgresql", style: { color: "#336791" } },
          { skillName: "MongoDB", icon: "devicon:mongodb", style: { color: "#47A248" } },
          { skillName: "Elasticsearch", icon: "devicon:elasticsearch", style: { color: "#005571" } }
        ]
      }
    ]
  },
  education: {
    title: "Education",
    subtitle: "Qualification and Certifications",
    description: "Here's my educational background. I am currently finishing my Master Thesis.",
    headerImagePath: "learning-bro.svg",
    icon: "fas fa-graduation-cap",
    degrees: [
      {
        title: "MSc. in Computer Science and Engineering",
        subtitle: "Instituto Superior Técnico - Universidade de Lisboa",
        logoPath: "IST_A_RGB_POS.png",
        duration: "2023 - 2025",
        descriptions: [
          "Focus Areas: Distributed Systems ☁️ and Cyber-Security 🔒",
        ],
        url: "https://tecnico.ulisboa.pt/en/"
      },
      {
        title: "BSc. in Computer Science and Engineering",
        subtitle: "Instituto Superior de Engenharia de Lisboa - Instituto Politécnico de Lisboa",
        logoPath: "isel_logo.png",
        duration: "2020 - 2023",
        descriptions: [
          "I have studied basic software engineering concepts of Computer Science, such as Algorithms and Data Structures, Object-Oriented Programming, Software Engineering, Databases, Computer Networks, Operating Systems, Distributed Systems, Computer Netorks, among others.",
          "Apart from this, I were the student representative between 2022 and 2023, where I represented the students of my degree in the pedagogical council of the school.",
          "I received two merit scholarships for my academic excellence, one in 2020 and another one in 2022."
        ],
        url: "https://www.isel.pt/en"
      }
    ]
  },
  experience: {
    title: "Experience",
    subtitle: "Work, Internship and Volunteership",
    //description: "Here's my work experience so far.",
    headerImagePath: "signing-a-contract-bro.svg",
    icon: "fas fa-briefcase",
    experiences: [
      {
        title: "Systems Engineer",
        company: {
          name: "Cloudflare, Inc.",
          conglomerate: "Cloudflare",
          url: "https://www.cloudflare.com/",
          logoPath: "cloudflare_logo.png"
        },
        duration: "May 2024 - Present",
        location: "Lisbon, Portugal",
        descriptions: [
          "Member of the Cloudflare Radar team, responsible for developing real-time security and performance monitoring solutions.",
          "Worked on backend systems and data processing pipelines for web application analytics.",
          "Contributed to the development of scalable infrastructure for global network monitoring."
        ]
      },
      {
        title: "Teaching Assistant",
        company: {
          name: "Instituto Superior de Engenharia de Lisboa",
          conglomerate: "Instituto Politécnico de Lisboa",
          url: "https://www.isel.pt/en",
          logoPath: "isel_logo.png"
        },
        duration: "October 2022 - May 2024",
        location: "Lisbon, Portugal",
        descriptions: [
          "Support for the functioning of the Algorithms and Data Structures, Introduction to Web Programming and Software Laboratory curricular units of the 2nd, 3rd and 4th semesters of the BSc in Computer Science and Computer Engineering.",
          "Support to practical lessons.",
          "Clarification of doubts to students.",
          "Maintenance of software installed on the server used in Software Laboratory curricular unit projects.",
          "Vigilance and correction of the moments of evaluation of the curricular units."
        ]
      }
    ]
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "Projects, Publications and Research Papers",
    description: "My projects make use of vast variety of latest technology tools. My best experience is to create Web Applications and deploy them to web services. Here's a list of my favorite projects I have worked on.",
    headerImagePath: "timeline-bro.svg",
    icon: "fas fa-project-diagram",
    projects: [
      {
        title: "PHYLOViZ Web Platform",
        subtitle: "A Modular and Web-Based Tool for Phylogenetic Analysis",
        description: "PHYLOViZ Web Platform is a web platform, developed in the context of the PHYLOViZ initiative, that allows users to access and perform phylogenetic analyses from anywhere with an internet connection, without requiring installation of software or access to HPC resources. It's modular, making it maintainable and extensible. Supports large scale analyses by relying on a workflow system that enables the distribution of parallel computations on cloud and HPC environments.",
        position: "Developer",
        url: "https://github.com/phyloviz/phyloviz-web-platform",
        logoPath: "phyloviz_logo.png",
        duration: "February 2023 - January 2024",
        techStack: [
          { skillName: "TypeScript", icon: "devicon:typescript", style: { color: "#007ACC" } },
          { skillName: "React", icon: "devicon:react", style: { color: "#61DAFB" } },
          { skillName: "Java", icon: "devicon:java", style: { color: "#007396" } },
          { skillName: "Spring", icon: "devicon:spring", style: { color: "#6DB33F" } },
          { skillName: "Docker", icon: "devicon:docker", style: { color: "#2496ED" } },
          { skillName: "MongoDB", icon: "devicon:mongodb", style: { color: "#47A248" } }
        ]
      }
    ],
    publications: []
  }
};

export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "experience", "education", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activeSection={activeSection} onSectionClick={handleSectionClick} />
      
      <main>
        <HeroSection data={personalData} />
        <SkillsSection data={personalData.skills} />
        <ExperienceSection data={personalData.experience} />
        <EducationSection data={personalData.education} />
        <PortfolioSection data={personalData.portfolio} />
        <ContactSection data={personalData.contacts} />
      </main>
      
      <Footer socialLinks={personalData.contacts.data} />
    </div>
  );
}