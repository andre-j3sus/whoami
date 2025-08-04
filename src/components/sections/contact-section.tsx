import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as FaIcons from "react-icons/fa";
import * as FaBrands from "react-icons/fa6";

interface ContactData {
  name: string;
  url: string;
  fontAwesomeIcon: string;
  backgroundColor: string;
}

interface ContactSectionProps {
  data: {
    title: string;
    subtitle: string;
    description?: string;
    data: ContactData[];
  };
}

// Map FontAwesome icons to React Icons
const getIconComponent = (iconClass: string) => {
  const iconSize = 24;
  const iconStyle = { fontSize: iconSize };
  
  if (iconClass.includes('linkedin')) return <FaBrands.FaLinkedin style={iconStyle} />;
  if (iconClass.includes('github')) return <FaBrands.FaGithub style={iconStyle} />;
  if (iconClass.includes('orcid')) return <FaBrands.FaOrcid style={iconStyle} />;
  if (iconClass.includes('stack-overflow')) return <FaBrands.FaStackOverflow style={iconStyle} />;
  if (iconClass.includes('google')) return <FaBrands.FaGoogle style={iconStyle} />;
  if (iconClass.includes('youtube')) return <FaBrands.FaYoutube style={iconStyle} />;
  if (iconClass.includes('instagram')) return <FaBrands.FaInstagram style={iconStyle} />;
  if (iconClass.includes('twitter')) return <FaBrands.FaTwitter style={iconStyle} />;
  if (iconClass.includes('spotify')) return <FaBrands.FaSpotify style={iconStyle} />;
  if (iconClass.includes('goodreads')) return <FaBrands.FaGoodreads style={iconStyle} />;
  if (iconClass.includes('tv')) return <FaIcons.FaTv style={iconStyle} />;
  return <FaIcons.FaLink style={iconStyle} />;
};

export function ContactSection({ data }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">
            {data.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            {data.subtitle}
          </p>
          {data.description && (
            <p className="text-foreground/80 max-w-3xl mx-auto">
              {data.description}
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.data.map((contact, index) => (
            <Card 
              key={index}
              className="group p-6 bg-card border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-500 cursor-pointer"
              onClick={() => window.open(contact.url, '_blank')}
            >
              <CardContent className="flex flex-col items-center text-center space-y-4 p-0">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: contact.backgroundColor }}
                >
                  {getIconComponent(contact.fontAwesomeIcon)}
                </div>
                
                <div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {contact.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Connect with me
                  </p>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  Visit Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        {/* <div className="text-center mt-16">
          <Card className="p-8 bg-primary max-w-2xl mx-auto shadow-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary-foreground">
                Let's Work Together
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary-foreground/90 mb-6">
                Ready to start your next project? I'm available for freelance work and collaboration opportunities.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.open('mailto:andre.jesus.pilar@gmail.com', '_blank')}
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