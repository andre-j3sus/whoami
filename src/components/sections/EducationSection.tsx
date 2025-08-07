import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Degree {
  title: string;
  subtitle: string;
  logoPath: string;
  duration: string;
  descriptions: string[];
  url: string;
  grade?: string;
}

interface EducationSectionProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    degrees: Degree[];
  };
}

export default function EducationSection({ data }: EducationSectionProps) {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-primary">
              {data.title}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">{data.subtitle}</p>
          <p className="text-foreground/80 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="space-y-8">
          {data.degrees.map((degree, index) => (
            <EducationCard key={index} degree={degree} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const EducationCard = ({
  degree,
  index,
}: {
  degree: Degree;
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
                {degree.logoPath && (
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 bg-background rounded-lg p-2 border border-primary/20">
                    <img
                      src={`/logos/${degree.logoPath}`}
                      alt={`${degree.subtitle} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-tight mb-2">
                    {degree.title}
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-primary">
                      {degree.subtitle}
                    </h3>
                    <ExternalLink
                      className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors self-start sm:self-center"
                      onClick={() => window.open(degree.url, "_blank")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row sm:flex-col gap-2 items-start lg:items-end">
              <Badge
                variant="secondary"
                className="flex items-center space-x-1 text-xs"
              >
                <CalendarDays className="w-3 h-3" />
                <span>{degree.duration}</span>
              </Badge>
              {degree.grade && (
                <Badge
                  variant="outline"
                  className="bg-primary/10 text-primary border-primary/20 text-xs"
                >
                  Grade: {degree.grade}
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            {degree.descriptions.map((description, descIndex) => (
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
