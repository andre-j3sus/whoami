import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Home,
  User,
  Briefcase,
  GraduationCap,
  DraftingCompass,
  Mail,
  BookOpen,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "skills", label: "Skills", icon: DraftingCompass },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  //{ id: "portfolio", label: "Portfolio", icon: FolderOpen },
  { id: "about-me", label: "About Me", icon: User },
  { id: "contact", label: "Contact", icon: Mail },
  { id: "blog", label: "Blog", icon: BookOpen, isRoute: true, path: "/blog" },
];

export default function Navbar({ activeSection }: NavbarProps) {
  // Smooth scroll handler for section anchors
  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    // Only intercept if already on home page
    if (window.location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", `#${sectionId}`);
      }
    }
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-agustina text-2xl font-bold text-primary self-end">
            Andre Jesus
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link key={item.id} to={item.path}>
                  <Button
                    variant={activeSection === item.id ? "default" : "ghost"}
                    size="sm"
                    className="transition-all duration-300"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Button>
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={item.id === "hero" ? "/" : `/#${item.id}`}
                  onClick={(e) => handleSectionClick(e, item.id)}
                >
                  <Button
                    variant={activeSection === item.id ? "default" : "ghost"}
                    size="sm"
                    className="transition-all duration-300"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Button>
                </a>
              ),
            )}
            <ThemeToggle />
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-10 w-10 px-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 px-6 py-8">
                <div className="flex flex-col space-y-6 mt-8">
                  <nav className="flex flex-col space-y-2">
                    {navItems.map((item) =>
                      item.isRoute ? (
                        <Link
                          key={item.id}
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Button
                            variant={
                              activeSection === item.id ? "default" : "ghost"
                            }
                            className="justify-start text-left h-14 px-4 text-base gap-3 w-full"
                          >
                            <item.icon className="h-5 w-5" />
                            {item.label}
                          </Button>
                        </Link>
                      ) : (
                        <a
                          key={item.id}
                          href={`/#${item.id}`}
                          onClick={(e) => {
                            setIsMobileMenuOpen(false);
                            handleSectionClick(e, item.id);
                          }}
                        >
                          <Button
                            variant={
                              activeSection === item.id ? "default" : "ghost"
                            }
                            className="justify-start text-left h-14 px-4 text-base gap-3 w-full"
                          >
                            <item.icon className="h-5 w-5" />
                            {item.label}
                          </Button>
                        </a>
                      ),
                    )}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
