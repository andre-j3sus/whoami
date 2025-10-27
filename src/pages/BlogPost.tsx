import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  FaGithub,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa6";

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

// Mock blog post content - in the future, this could be loaded from MD/MDX files
const blogPostsContent: Record<string, { title: string; date: string; tags: string[]; content: string }> = {
  "my-journey-into-software-engineering": {
    title: "My Journey into Software Engineering",
    date: "2024-01-20",
    tags: ["Career", "Personal", "Software Engineering"],
    content: `
## How It All Started

My journey into software engineering began during my university years at Instituto Superior de Engenharia de Lisboa (ISEL). What started as curiosity about how computers work evolved into a deep passion for building software that solves real problems.

## The Learning Curve

Like many developers, I faced numerous challenges early on. From debugging my first "Hello World" program to understanding complex algorithms and data structures, each obstacle taught me something valuable. The key was persistence and a genuine love for problem-solving.

## Discovering My Passion

I found my niche in backend development and distributed systems. There's something fascinating about designing systems that can handle millions of requests, scale efficiently, and remain reliable under pressure. Working with technologies like Kotlin, Spring Boot, and cloud platforms opened up a world of possibilities.

## Professional Growth

My internship and subsequent work at Cloudflare was a turning point. Being part of a team that works on infrastructure used by millions of websites worldwide taught me the importance of writing clean, maintainable code and thinking about performance and security from day one.

## Current Focus

Today, I'm focused on:
- Building scalable backend systems
- Exploring distributed systems and microservices
- Contributing to open-source projects
- Continuous learning and staying updated with industry trends

## Advice for Aspiring Engineers

If you're just starting out, remember:
1. **Build projects**: Nothing beats hands-on experience
2. **Read other people's code**: You'll learn different approaches and best practices
3. **Don't fear failure**: Every bug is a learning opportunity
4. **Stay curious**: Technology evolves rapidly; embrace lifelong learning
5. **Join communities**: Connect with other developers, attend meetups, contribute to open source

## Looking Forward

The field of software engineering is constantly evolving, and that's what makes it exciting. Whether it's exploring new frameworks, diving deeper into system design, or mentoring others, there's always something new to learn and share.

Thanks for reading! Feel free to reach out if you want to discuss software engineering, career advice, or just chat about technology.
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const { ref, isInView, variants } = useScrollAnimation();

  const post = slug ? blogPostsContent[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar activeSection="blog" onSectionClick={() => {}} />
        <main className="flex-1 container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer socialLinks={socialLinks} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection="blog" onSectionClick={() => {}} />
      
      <main className="flex-1 container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.article
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          className="max-w-4xl mx-auto"
        >
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-3xl font-bold mt-12 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-4xl font-bold mt-12 mb-6">
                    {paragraph.replace('# ', '')}
                  </h1>
                );
              } else if (paragraph.match(/^\d+\./)) {
                return (
                  <li key={index} className="ml-6 mb-2">
                    {paragraph.replace(/^\d+\.\s*/, '')}
                  </li>
                );
              } else if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="ml-6 mb-2 list-disc">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              } else if (paragraph.trim() === '') {
                return <br key={index} />;
              } else {
                return (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </motion.article>
      </main>

      <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default BlogPost;
