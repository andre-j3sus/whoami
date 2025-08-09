import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  BookOpen,
  Guitar,
  Dumbbell,
  Plane,
  Trophy,
  ExternalLink
} from "lucide-react";

interface Interest {
  title: string;
  content: string;
  icon: React.ReactNode;
  link?: {
    url: string;
    text: string;
  };
  gradient: string;
}

interface GetToKnowMeSectionProps {
  data: {
    title: string;
    subtitle: string;
    interests: Interest[];
  };
}

export default function GetToKnowMeSection({ data }: GetToKnowMeSectionProps) {
  return (
    <section id="about-me" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">
            {data.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="p-6 bg-card border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-500 h-full flex flex-col">
        <CardHeader className="text-center pb-4">
          <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 ${interest.gradient}`}>
            <div className="text-white text-2xl">
              {interest.icon}
            </div>
          </div>
          <CardTitle className="text-xl font-bold text-primary">
            {interest.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <p className="text-foreground/80 leading-relaxed mb-4 flex-1">
            {interest.content}
          </p>
          
          {interest.link && (
            <a
              href={interest.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              {interest.link.text}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};