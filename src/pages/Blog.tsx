import { motion } from "motion/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  FaGithub,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa6";

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  tags: string[];
  external?: boolean;
  url?: string;
  slug?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Introducing TLD Insights on Cloudflare Radar",
    date: "2024-03-15",
    tags: ["Cloudflare", "DNS", "Analytics"],
    external: true,
    url: "https://blog.cloudflare.com/introducing-tld-insights-on-cloudflare-radar/",
  },
  {
    id: "2",
    title: "My Journey into Software Engineering",
    date: "2024-01-20",
    tags: ["Career", "Personal", "Software Engineering"],
    slug: "my-journey-into-software-engineering",
  },
];

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
      <Navbar activeSection="blog" onSectionClick={() => {}} />
      
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
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                {post.external ? (
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="flex items-center gap-2 group">
                            {post.title}
                            <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
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
