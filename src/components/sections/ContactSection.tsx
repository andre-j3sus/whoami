import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "motion/react";
import { IconType } from "react-icons/lib";
import { Button } from "../ui/button";

interface ContactData {
  name: string;
  url: string;
  icon: IconType;
  backgroundColor: string;
  description: string;
}

interface ContactSectionProps {
  data: {
    title: string;
    subtitle: string;
    description?: string;
    data: ContactData[];
  };
}

export default function ContactSection({ data }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">
            {data.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-4">{data.subtitle}</p>
          {data.description && (
            <p className="text-foreground/80 max-w-3xl mx-auto">
              {data.description}
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.data.map((contact, index) => (
            <SocialMediaCard key={index} contact={contact} index={index} />
          ))}
        </div>

        {/* Contact CTA */}
        {/* <div className="text-center mt-16">
          <Card className="p-8 bg-primary max-w-2xl mx-auto shadow-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary-foreground">
                Let's Connect!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary-foreground/90 mb-6">
                I'm always happy to chat, share ideas, and connect with others.
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() =>
                  window.open("mailto:andre.jesus.pilar@gmail.com", "_blank")
                }
                className="bg-background text-foreground hover:bg-background/90"
              >
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
}

const SocialMediaCard = ({
  contact,
  index,
}: {
  contact: ContactData;
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
    >
      <Card
        className="group p-6 bg-card border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-500 cursor-pointer transform hover:scale-105"
        onClick={() => window.open(contact.url, "_blank")}
      >
        <CardContent className="flex flex-col items-center text-center space-y-4 p-0">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
            style={{ backgroundColor: contact.backgroundColor }}
          >
            <contact.icon />
          </div>

          <div>
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {contact.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors">
              {contact.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
