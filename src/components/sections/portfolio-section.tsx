import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, CalendarDays } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  position: string;
  url: string;
  logoPath: string;
  duration: string;
  techStack: Array<{
    skillName: string;
    icon: string;
    style: {
      color: string;
    };
  }>;
}

interface PortfolioSectionProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    projects: Project[];
  };
}

export function PortfolioSection({ data }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {data.title}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            {data.subtitle}
          </p>
          <p className="text-foreground/80 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {data.projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-to-br from-card to-secondary/30 border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-500"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground">
                        {project.title}
                      </CardTitle>
                      <p className="text-lg text-primary font-semibold">
                        {project.subtitle}
                      </p>
                      <Badge variant="outline" className="w-fit">
                        {project.position}
                      </Badge>
                    </div>
                    
                    <p className="text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Technology Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-secondary/50 border border-primary/20"
                      >
                        <div 
                          className="w-5 h-5 rounded"
                          style={{ backgroundColor: tech.style.color }}
                        />
                        <span className="text-sm font-medium text-foreground">
                          {tech.skillName}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg"
                    onClick={() => window.open(project.url, '_blank')}
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View Repository
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}