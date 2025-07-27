import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink, FileText } from "lucide-react";
import heroImage from "@/assets/andre-professional-1.jpg";
// Alternative options:
// import heroImage from "@/assets/andre-workspace.jpg";
// import heroImage from "@/assets/andre-abstract.jpg";

interface HeroSectionProps {
  data: {
    name: string;
    position: string;
    headline: string;
    github: string;
    resume: string;
    url: string;
  };
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-subtle px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {data.name}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                {data.position}
              </p>
              <p className="text-lg text-foreground/80 max-w-lg">
                {data.headline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => window.open(data.resume, '_blank')}
              >
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open(data.github, '_blank')}
                className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open(data.url, '_blank')}
                className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Portfolio
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:justify-self-end">
            <Card className="p-8 bg-gradient-to-br from-card to-secondary/50 border-primary/20 shadow-elegant">
              <div className="relative">
                <img
                  src={heroImage}
                  alt={data.name}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-glow animate-float"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}