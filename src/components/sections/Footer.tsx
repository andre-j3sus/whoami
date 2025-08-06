import { IconType } from "react-icons/lib";

interface FooterProps {
  socialLinks: {
    name: string;
    url: string;
    icon: IconType;
    backgroundColor: string;
    showOnFooter?: boolean;
  }[];
}

export default function Footer({ socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const mainSocialLinks = socialLinks.filter((link) => link.showOnFooter);

  return (
    <footer className="bg-card border-t border-border py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {mainSocialLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => window.open(link.url, "_blank")}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: link.backgroundColor }}
                aria-label={`Visit ${link.name}`}
              >
                <link.icon />
              </button>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} André Jesus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
