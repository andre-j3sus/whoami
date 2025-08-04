import * as FaBrands from "react-icons/fa6";

interface FooterProps {
  socialLinks: {
    name: string;
    url: string;
    fontAwesomeIcon: string;
    backgroundColor: string;
  }[];
}

// Map FontAwesome icons to React Icons
const getIconComponent = (iconClass: string) => {
  const iconSize = 20;
  const iconStyle = { fontSize: iconSize };

  if (iconClass.includes("linkedin"))
    return <FaBrands.FaLinkedin style={iconStyle} />;
  if (iconClass.includes("github"))
    return <FaBrands.FaGithub style={iconStyle} />;
  if (iconClass.includes("orcid"))
    return <FaBrands.FaOrcid style={iconStyle} />;
  if (iconClass.includes("stack-overflow"))
    return <FaBrands.FaStackOverflow style={iconStyle} />;
  if (iconClass.includes("google"))
    return <FaBrands.FaGoogle style={iconStyle} />;
  if (iconClass.includes("youtube"))
    return <FaBrands.FaYoutube style={iconStyle} />;
  if (iconClass.includes("instagram"))
    return <FaBrands.FaInstagram style={iconStyle} />;
  if (iconClass.includes("twitter"))
    return <FaBrands.FaTwitter style={iconStyle} />;
  if (iconClass.includes("spotify"))
    return <FaBrands.FaSpotify style={iconStyle} />;
  if (iconClass.includes("goodreads"))
    return <FaBrands.FaGoodreads style={iconStyle} />;
  return null;
};

export function Footer({ socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Filter to show only main social platforms
  const mainSocialLinks = socialLinks.filter((link) =>
    ["LinkedIn", "Github", "Instagram", "Twitter", "YouTube"].includes(
      link.name,
    ),
  );

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
                {getIconComponent(link.fontAwesomeIcon)}
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
