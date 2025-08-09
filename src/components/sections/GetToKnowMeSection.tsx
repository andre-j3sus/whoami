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
  emoji: string;
  category: string;
  content: string;
  icon: React.ReactNode;
  link?: {
    url: string;
    text: string;
  };
  gradient: string;
  accentColor: string;
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
    <section id="about-me" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            {data.title}
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
            {data.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
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
      style={{ animationDelay: `${index * 0.15}s` }}
      className="h-full"
    >
      <Card className="group relative overflow-hidden bg-card border-border/50 hover:border-primary/30 shadow-elegant hover:shadow-glow transition-all duration-700 h-full flex flex-col backdrop-blur-sm">
        {/* Gradient Background Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <CardHeader className="text-center pb-6 pt-8">
            {/* Emoji with animated background */}
            <div className="relative mx-auto mb-6">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${interest.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <span className="text-3xl filter drop-shadow-sm">
                  {interest.emoji}
                </span>
              </div>
              {/* Floating icon */}
              <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center ${interest.accentColor} group-hover:scale-125 transition-transform duration-500`}>
                {interest.icon}
              </div>
            </div>
            
            {/* Category badge */}
            <div className={`inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-3 ${interest.accentColor}`}>
              {interest.category}
            </div>
            
            {/* Title */}
            <CardTitle className={`text-2xl font-bold mb-2 ${interest.accentColor} group-hover:scale-105 transition-transform duration-500`}>
              {interest.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col px-8 pb-8">
            <p className="text-foreground/80 leading-relaxed text-base mb-6 flex-1 line-height-7">
              {interest.content}
            </p>
            
            {interest.link && (
              <a
                href={interest.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${interest.accentColor} hover:opacity-80 transition-all duration-300 font-semibold text-sm uppercase tracking-wide group-hover:translate-x-1`}
              >
                {interest.link.text}
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </CardContent>
        </div>

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} blur-xl scale-110`} />
        </div>
      </Card>
    </motion.div>
  );
};