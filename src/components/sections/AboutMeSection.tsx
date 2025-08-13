import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink } from "lucide-react";

interface Interest {
  title: string;
  emoji: string;
  subtitle: string;
  content: string;
  link?: {
    url: string;
    text: string;
  };
}

interface AboutMeSectionProps {
  data: {
    title: string;
    subtitle: string;
    interests: Interest[];
  };
}

export default function AboutMeSection({ data }: AboutMeSectionProps) {
  return (
    <section id="about-me" className="py-24 px- relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">
            {data.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-4">{data.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-10">
          {data.interests.map((interest, index) => (
            <InterestCard key={index} interest={interest} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const InterestCard = ({
  interest,
  index,
}: {
  interest: Interest;
  index: number;
}) => {
  const { ref, isInView, variants } = useScrollAnimation("up");

  return (
    <motion.div
      key={index}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="h-full"
    >
      <Card className="p-1 bg-gradient-to-br from-card to-secondary/30 border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-500 h-full">
        <div className="flex flex-col h-full">
          <CardHeader className="text-center pb-6 pt-8">
            <div className="mx-auto mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg">
                <span className="text-3xl">{interest.emoji}</span>
              </div>
            </div>

            <CardTitle className="text-2xl font-bold mb-3 text-primary">
              {interest.title}
            </CardTitle>

            <div className="text-lg font-medium italic text-muted-foreground mb-2">
              {interest.subtitle}
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col px-8 pb-8">
            <p className="text-foreground/80 leading-relaxed text-base mb-6 flex-1">
              {interest.content}
            </p>

            {interest.link && (
              <a
                href={interest.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-all duration-300 font-semibold text-sm tracking-wide mt-auto"
              >
                {interest.link.text}
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};
