import { useState, useEffect } from "react";
import {
  FaGithub,
  FaGoodreads,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaOrcid,
  FaSpotify,
  FaTv,
} from "react-icons/fa6";
import { 
  BookOpen,
  Guitar,
  Dumbbell,
  Plane,
  Trophy
} from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import GetToKnowMeSection from "@/components/sections/GetToKnowMeSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

// Personal data - this would typically come from a CMS or API
const personalData = {
  name: "André Jesus",
  position: "Systems Engineer | Computer Science & Engineering Student",
  url: "https://andrejesus.com",
  headline: "Hey there 👋, welcome to my website!",
  logoName: "Andre Jesus",
  repository: "https://github.com/andre-j3sus/andre-j3sus-website",
  resume:
    "https://www.canva.com/design/DAFqHQqqaGk/A5weUCHWBrwn62I-qRZHhA/view?utm_content=DAFqHQqqaGk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hde1e82327d",
  github: "https://github.com/andre-j3sus",
  contacts: {
    title: "Contact Me",
    subtitle: "Want to get in touch? Feel free to reach out.",
    //description: "",
    data: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andre-j3sus",
        icon: FaLinkedin,
        backgroundColor: "#0077B5",
        showOnFooter: true,
        description: "Let's connect",
      },
      {
        name: "Github",
        url: "https://github.com/andre-j3sus",
        icon: FaGithub,
        backgroundColor: "#181717",
        showOnFooter: true,
        description: "Check out my projects",
      },
      {
        name: "ORCID",
        url: "https://orcid.org/0009-0007-8693-7054",
        icon: FaOrcid,
        backgroundColor: "#A6CE39",
        description: "View my research",
      },
      // {
      //   name: "Stack Overflow",
      //   url: "https://stackoverflow.com/users/15545640/andr%c3%a9-jesus",
      //   icon: FaStackOverflow,
      //   backgroundColor: "#F48024",
      //   description: "Check my contributions",
      // },
      {
        name: "Gmail",
        url: "mailto:andre.jesus.pilar@gmail.com",
        icon: FaGoogle,
        backgroundColor: "#D14836",
        showOnFooter: true,
        description: "Send me an email",
      },
      // {
      //   name: "YouTube",
      //   url: "https://www.youtube.com/@andre-j3sus",
      //   icon: FaYoutube,
      //   backgroundColor: "#FF0000",
      //   description: "Watch my content",
      // },
      {
        name: "Instagram",
        url: "https://www.instagram.com/andre.j3sus",
        icon: FaInstagram,
        backgroundColor: "#E4405F",
        description: "Peek into my life",
      },
      // {
      //   name: "Twitter",
      //   url: "https://twitter.com/andre_j3sus",
      //   icon: FaTwitter,
      //   backgroundColor: "#1DA1F2",
      //   description: "Follow my thoughts",
      // },
      {
        name: "Spotify",
        url: "https://open.spotify.com/user/andré.jesus",
        icon: FaSpotify,
        backgroundColor: "#1ED760",
        description: "Check what I'm listening to",
      },
      {
        name: "Goodreads",
        url: "https://www.goodreads.com/user/show/108854374-andr-jesus",
        icon: FaGoodreads,
        backgroundColor: "#553B08",
        description: "See what I'm reading",
      },
      {
        name: "TV Time",
        url: "https://www.tvtime.com/en/user/28579171/profile",
        icon: FaTv,
        backgroundColor: "#FFD700",
        description: "Check what I'm watching",
      },
    ],
  },
  skills: {
    data: [
      {
        title: "Programming Languages",
        skills: [
          "Proficient in modern programming languages for versatile software development.",
          "Skilled in writing clean, maintainable, and efficient code.",
          "Well-versed in programming paradigms, enabling flexible problem-solving approaches.",
        ],
        softwareSkills: [
          { skillName: "JavaScript", style: { color: "#F7DF1E" } },
          { skillName: "TypeScript", style: { color: "#3178C6" } },
          { skillName: "Python", style: { color: "#3776AB" } },
          { skillName: "Kotlin", style: { color: "#B125EA" } },
          { skillName: "Java", style: { color: "#007396" } },
        ],
      },
      {
        title: "Backend Development",
        skills: [
          "Building scalable, secure backend services with modern frameworks and API design.",
          "Expertise in relational and NoSQL databases for robust data storage and retrieval.",
          "Experience in automated testing and CI/CD for backend reliability.",
        ],
        softwareSkills: [
          { skillName: "NodeJS", style: { color: "#339933" } },
          { skillName: "FastAPI", style: { color: "#009688" } },
          { skillName: "GraphQL", style: { color: "#E10098" } },
          { skillName: "Jest", style: { color: "#99425B" } },
          { skillName: "Spring", style: { color: "#6DB33F" } },
          { skillName: "PostgreSQL", style: { color: "#336791" } },
          { skillName: "MongoDB", style: { color: "#47A248" } },
        ],
      },
      {
        title: "Frontend Development",
        skills: [
          "Creating responsive and dynamic user interfaces with modern frameworks.",
          "Experienced in building data visualizations using libraries like D3.js.",
        ],
        softwareSkills: [
          { skillName: "HTML5", style: { color: "#E34F26" } },
          { skillName: "CSS3", style: { color: "#1572B6" } },
          { skillName: "React", style: { color: "#61DAFB" } },
          { skillName: "Remix", style: { color: "#000000" } },
          { skillName: "Vite", style: { color: "#646CFF" } },
        ],
      },
      {
        title: "Cloud Infra & DevOps",
        skills: [
          "Deploying and managing applications using containerization and orchestration.",
          "Familiar with cloud platforms and edge computing for scalable infrastructure.",
        ],
        softwareSkills: [
          { skillName: "Docker", style: { color: "#2496ED" } },
          { skillName: "Kubernetes", style: { color: "#326CE5" } },
          { skillName: "Cloudflare Workers", style: { color: "#F38020" } },
          { skillName: "Google Cloud Platform", style: { color: "#4285F4" } },
        ],
      },
    ],
  },
  education: {
    title: "Education",
    subtitle: "Qualification and Certifications",
    //description: "Here's my educational background. I am currently finishing my Master Thesis.",
    icon: "fas fa-graduation-cap",
    degrees: [
      {
        title: "MSc. in Computer Science and Engineering",
        subtitle: "Instituto Superior Técnico - Universidade de Lisboa",
        logoPath: "ist.png",
        duration: "September 2023 - October 2025",
        descriptions: [
          "Focus Areas: Distributed Systems and Cybersecurity",
          'Dissertation (in progress): "Enhancing Serverless Platform Support for Snapshots"',
        ],
        url: "https://tecnico.ulisboa.pt/en/",
        grade: "18/20", // Grade: 90% (18/20)
      },
      {
        title: "BSc. in Computer Science and Engineering",
        subtitle:
          "Instituto Superior de Engenharia de Lisboa - Instituto Politécnico de Lisboa",
        logoPath: "isel.png",
        duration: "September 2020 - July 2023",
        descriptions: [
          "I have studied basic software engineering concepts of Computer Science, such as Algorithms and Data Structures, Object-Oriented Programming, Software Engineering, Databases, Computer Networks, Operating Systems, Distributed Systems, Computer Netorks, among others.",
          "Apart from this, I were the student representative between 2022 and 2023, where I represented the students of my degree in the pedagogical council of the school.",
          "I received two merit scholarships for my academic excellence, one in 2020 and another one in 2022.",
        ],
        url: "https://www.isel.pt/en",
        grade: "18/20", // Grade: 90% (18/20)
      },
    ],
  },
  experience: {
    title: "Experience",
    subtitle: "Work, Internship and Volunteership",
    //description: "Here's my work experience so far.",
    icon: "fas fa-briefcase",
    experiences: [
      {
        title: "Systems Engineer",
        company: {
          name: "Cloudflare",
          conglomerate: "Cloudflare",
          url: "https://www.cloudflare.com/",
          logoPath: "cf.svg",
        },
        duration: "May 2024 - Present",
        location: "Lisbon, Portugal",
        descriptions: [
          "Member of the Cloudflare Radar team, responsible for developing new features and maintaining both the Radar API and the Radar website.",
          "Member of the AI Audit team, responsible for frontend development (Cloudflare dashboard).",
          "Contributing to other projects occasionally.",
        ],
      },
      {
        title: "Teaching Assistant",
        company: {
          name: "Instituto Superior de Engenharia de Lisboa",
          conglomerate: "Instituto Politécnico de Lisboa",
          url: "https://www.isel.pt/en",
          logoPath: "isel.png",
        },
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
    ],
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "Projects, Publications and Research Papers",
    description:
      "My projects make use of vast variety of latest technology tools. My best experience is to create Web Applications and deploy them to web services. Here's a list of my favorite projects I have worked on.",
    icon: "fas fa-project-diagram",
    projects: [
      {
        title: "PHYLOViZ Web Platform",
        subtitle: "A Modular and Web-Based Tool for Phylogenetic Analysis",
        description:
          "PHYLOViZ Web Platform is a web platform, developed in the context of the PHYLOViZ initiative, that allows users to access and perform phylogenetic analyses from anywhere with an internet connection, without requiring installation of software or access to HPC resources. It's modular, making it maintainable and extensible. Supports large scale analyses by relying on a workflow system that enables the distribution of parallel computations on cloud and HPC environments.",
        position: "Developer",
        url: "https://github.com/phyloviz/phyloviz-web-platform",
        logoPath: "phyloviz_logo.png",
        duration: "February 2023 - January 2024",
        techStack: [
          {
            skillName: "TypeScript",
            icon: "devicon:typescript",
            style: { color: "#007ACC" },
          },
          {
            skillName: "React",
            icon: "devicon:react",
            style: { color: "#61DAFB" },
          },
          {
            skillName: "Java",
            icon: "devicon:java",
            style: { color: "#007396" },
          },
          {
            skillName: "Spring",
            icon: "devicon:spring",
            style: { color: "#6DB33F" },
          },
          {
            skillName: "Docker",
            icon: "devicon:docker",
            style: { color: "#2496ED" },
          },
          {
            skillName: "MongoDB",
            icon: "devicon:mongodb",
            style: { color: "#47A248" },
          },
        ],
      },
    ],
    publications: [],
  },
  aboutMe: {
    title: "Get to Know Me",
    subtitle: "Beyond the code, here's what makes me tick",
    interests: [
      {
        title: "📚 Reading & Books",
        content: "I love reading all kinds of genres, but fantasy is my favorite. You could say I have a 'hobbit' of getting lost in great stories! One does not simply put down a good book.",
        icon: <BookOpen className="w-6 h-6" />,
        link: {
          url: "https://www.goodreads.com/user/show/108854374-andr-jesus",
          text: "Check out my Goodreads"
        },
        gradient: "bg-gradient-to-br from-amber-500 to-orange-600"
      },
      {
        title: "🎸 Guitar & Music",
        content: "Started learning guitar in September 2023 by myself using JustinGuitar and other resources. Progress slowed in March 2024 due to work and thesis, but I'll get back to it soon. I love rock music, and my girlfriend got me into indie as well.",
        icon: <Guitar className="w-6 h-6" />,
        gradient: "bg-gradient-to-br from-purple-500 to-pink-600"
      },
      {
        title: "💪 Gym & Active Lifestyle",
        content: "Swimming for 8 years, field hockey for 4, badminton for 3. University made me switch to gym, which I now love and do regularly with friends or alone.",
        icon: <Dumbbell className="w-6 h-6" />,
        gradient: "bg-gradient-to-br from-green-500 to-teal-600"
      },
      {
        title: "🌍 Travelling & Cuisine",
        content: "Love exploring new places and cultures, aiming for 3+ vacations a year. Favorite cuisine is Portuguese, but also love Japanese, Asian, Spanish, and Italian food.",
        icon: <Plane className="w-6 h-6" />,
        gradient: "bg-gradient-to-br from-blue-500 to-cyan-600"
      },
      {
        title: "⚽ Soccer & Sports",
        content: "Not a fanatic, but I love to watch a good football (or soccer for my American friends) match with a cold beer in my hand. I support Sporting Clube de Portugal (SCP) since I was little. I'm also simpatizante of Manchester United, in England. And of course, Cristiano Ronaldo is the GOAT.",
        icon: <Trophy className="w-6 h-6" />,
        gradient: "bg-gradient-to-br from-emerald-500 to-green-600"
      }
    ]
  },
};

export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "skills",
        "experience",
        "education",
        "portfolio",
        "about-me",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
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
      <Navbar
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />

      <main>
        <HeroSection data={personalData} />
        <SkillsSection data={personalData.skills} />
        <ExperienceSection data={personalData.experience} />
        <EducationSection data={personalData.education} />
        <PortfolioSection data={personalData.portfolio} />
        <GetToKnowMeSection data={personalData.aboutMe} />
        <ContactSection data={personalData.contacts} />
      </main>

      <Footer socialLinks={personalData.contacts.data} />
    </div>
  );
}
