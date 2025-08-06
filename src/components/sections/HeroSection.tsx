import { Button } from "@/components/ui/button";
import { Github, FileText, ChevronDown } from "lucide-react";

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

export default function HeroSection({ data }: HeroSectionProps) {
  const scrollToNextSection = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-subtle px-6 relative"
    >
      <div className="container mx-auto max-w-4xl flex-1 flex items-center justify-center">
        <div className="text-center space-y-8">
          {/* Text Content */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-primary">
                {data.name}
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              {data.position}
            </p>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              {data.headline}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:shadow-glow transition-all duration-300"
              onClick={() => window.open(data.resume, "_blank")}
            >
              <FileText className="mr-2 h-5 w-5" />
              View Resume
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(data.github, "_blank")}
              className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNextSection}
          className="text-muted-foreground hover:text-primary transition-colors duration-450 animate-bounce"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
