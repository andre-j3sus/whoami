import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSkillIcon } from "@/lib/icons";

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

export function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and competencies
            across various domains
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
                      <div
                        key={skillIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-foreground/80 leading-relaxed">
                          {skill}
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
                            boxShadow: `0 4px 20px ${tech.style.color}20`,
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
