import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Experience {
  title: string;
  company: {
    name: string;
    conglomerate: string;
    url: string;
    logoPath: string;
  };
  duration: string;
  location: string;
  descriptions: string[];
}

interface ExperienceSectionProps {
  data: {
    title: string;
    subtitle: string;
    description?: string;
    experiences: Experience[];
  };
}

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-primary">
              {data.title}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">{data.subtitle}</p>
          {data.description && (
            <p className="text-foreground/80 max-w-3xl mx-auto">
              {data.description}
            </p>
          )}
        </div>

        <div className="space-y-8">
          {data.experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  const { ref, isInView, variants } = useScrollAnimation(
    index % 2 === 0 ? "right" : "left",
  );
  return (
    <motion.div
      key={index}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-card to-secondary/30 border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-500">
        <CardHeader className="pb-4">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-1">
              <div className="flex items-start gap-4">
                {experience.company.logoPath && (
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 bg-background rounded-lg p-2 border border-primary/20">
                    <img
                      src={`/logos/${experience.company.logoPath}`}
                      alt={`${experience.company.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-tight mb-2">
                    {experience.title}
                  </CardTitle>
                  <span className="text-base sm:text-lg font-semibold text-primary">
                    <a
                      href={experience.company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary/80"
                    >
                      <p className="inline">{experience.company.name}</p>
                      <ExternalLink className="w-4 h-4 inline-flex align-middle ml-1" />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-start lg:items-end">
              <Badge
                variant="secondary"
                className="flex items-center space-x-1 text-xs"
              >
                <CalendarDays className="w-3 h-3" />
                <span>{experience.duration}</span>
              </Badge>
              <Badge
                variant="outline"
                className="flex items-center space-x-1 text-xs"
              >
                <MapPin className="w-3 h-3" />
                <span>{experience.location}</span>
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            {experience.descriptions.map((description, descIndex) => (
              <div key={descIndex} className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-foreground/80 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
