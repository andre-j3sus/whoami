import { motion } from "motion/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa6";

export interface BlogPost {
  title: string;
  date: string;
  tags: string[];
  url?: string;
  slug?: string;
}

const blogPosts: BlogPost[] = [
  {
    title:
      "Introducing new regional Internet traffic and Certificate Transparency insights on Cloudflare Radar",
    date: "2025-09-26",
    tags: ["Cloudflare", "Radar", "Certificate Transparency", "Engineering"],
    url: "https://blog.cloudflare.com/new-regional-internet-traffic-and-certificate-transparency-insights-on-radar/",
  },
  {
    title:
      "From .com to .anything: introducing Top-Level Domain (TLD) insights on Cloudflare Radar",
    date: "2025-10-27",
    tags: ["Cloudflare", "Radar", "DNS", "Engineering"],
    url: "https://blog.cloudflare.com/introducing-tld-insights-on-cloudflare-radar/",
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/andre-j3sus",
    icon: FaLinkedin,
    backgroundColor: "#0077B5",
    showOnFooter: true,
  },
  {
    name: "Github",
    url: "https://github.com/andre-j3sus",
    icon: FaGithub,
    backgroundColor: "#181717",
    showOnFooter: true,
  },
  {
    name: "Gmail",
    url: "mailto:andre.jesus.pilar@gmail.com",
    icon: FaGoogle,
    backgroundColor: "#D14836",
    showOnFooter: true,
  },
];

const Blog = () => {
  const { ref, isInView, variants } = useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection="blog" />

      <main className="flex-1 container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Thoughts, ideas, and technical writings
            </p>
          </div>

          <div className="space-y-6">
            {blogPosts.map((post, idx) => (
              <Card
                key={`post-${idx}`}
                className="p-1 bg-gradient-to-br from-card to-secondary/30 border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-500 h-full"
              >
                {post.url ? (
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle>
                            <p className="inline">{post.title}</p>
                            <ExternalLink className="w-5 h-5 inline-flex align-middle ml-2 -mt-0.5" />
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-2">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </a>
                ) : (
                  <Link to={`/blog/${post.slug}`}>
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Link>
                )}
              </Card>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default Blog;
