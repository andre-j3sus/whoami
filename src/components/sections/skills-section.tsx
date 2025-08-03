import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as Icons from "react-icons/si";
import * as DevIcons from "react-icons/di";
import * as FaIcons from "react-icons/fa";

interface Skill {
  skillName: string;
  icon: string;
  style: {
    color: string;
  };
}

interface SkillCategory {
  title: string;
  imagePath: string;
  skills: string[];
  softwareSkills: Skill[];
}

interface SkillsSectionProps {
  data: {
    data: SkillCategory[];
  };
}

// Icon mapping function
const getSkillIcon = (skillName: string, color: string) => {
  const iconSize = 32;
  const iconStyle = { color, fontSize: iconSize };
  
  switch (skillName.toLowerCase()) {
    case 'java':
      return <FaIcons.FaJava style={iconStyle} />;
    case 'kotlin':
      return <Icons.SiKotlin style={iconStyle} />;
    case 'javascript':
      return <Icons.SiJavascript style={iconStyle} />;
    case 'typescript':
      return <Icons.SiTypescript style={iconStyle} />;
    case 'c':
      return <Icons.SiC style={iconStyle} />;
    case 'c#':
      return <Icons.SiSharp style={iconStyle} />;
    case 'python':
      return <Icons.SiPython style={iconStyle} />;
    case 'git':
      return <Icons.SiGit style={iconStyle} />;
    case 'github':
      return <Icons.SiGithub style={iconStyle} />;
    case 'jenkins':
      return <Icons.SiJenkins style={iconStyle} />;
    case 'github actions':
      return <Icons.SiGithubactions style={iconStyle} />;
    case 'latex':
      return <Icons.SiLatex style={iconStyle} />;
    case 'html5':
      return <Icons.SiHtml5 style={iconStyle} />;
    case 'css3':
      return <Icons.SiCss3 style={iconStyle} />;
    case 'nodejs':
      return <Icons.SiNodedotjs style={iconStyle} />;
    case 'expressjs':
      return <Icons.SiExpress style={iconStyle} />;
    case 'reactjs':
      return <Icons.SiReact style={iconStyle} />;
    case 'material-ui':
      return <Icons.SiMui style={iconStyle} />;
    case 'bootstrap':
      return <Icons.SiBootstrap style={iconStyle} />;
    case 'webpack':
      return <Icons.SiWebpack style={iconStyle} />;
    case 'spring':
      return <Icons.SiSpring style={iconStyle} />;
    case 'nginx':
      return <Icons.SiNginx style={iconStyle} />;
    case 'postman':
      return <Icons.SiPostman style={iconStyle} />;
    case 'docker':
      return <Icons.SiDocker style={iconStyle} />;
    case 'linux':
      return <Icons.SiLinux style={iconStyle} />;
    case 'android':
      return <Icons.SiAndroid style={iconStyle} />;
    case 'google cloud platform':
      return <Icons.SiGooglecloud style={iconStyle} />;
    case 'postgresql':
      return <Icons.SiPostgresql style={iconStyle} />;
    case 'mongodb':
      return <Icons.SiMongodb style={iconStyle} />;
    case 'elasticsearch':
      return <Icons.SiElasticsearch style={iconStyle} />;
    default:
      return <FaIcons.FaCode style={iconStyle} />;
  }
};

export function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and competencies across various domains
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {data.data.map((category, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-500"
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl lg:text-3xl font-bold text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Skills Description */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-foreground/80 leading-relaxed">
                          {skill.replace('⚡ ', '')}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technology Icons */}
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-6 justify-items-center">
                    {category.softwareSkills.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="group flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300"
                      >
                        <div 
                          className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/50 group-hover:scale-110 transition-transform duration-300"
                          style={{ 
                            color: tech.style.color,
                            boxShadow: `0 4px 20px ${tech.style.color}20`
                          }}
                        >
                          {getSkillIcon(tech.skillName, tech.style.color)}
                        </div>
                        <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">
                          {tech.skillName}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}