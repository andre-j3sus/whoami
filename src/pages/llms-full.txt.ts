import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { personal } from "@/data/personal";
import { getBlogPostSlug } from "@/i18n/utils";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { socialLinks } from "@/data/social";
import { hobbies } from "@/data/hobbies";
import { nowItems, lastUpdated } from "@/data/now";

export const prerender = true;

/** Strip markdown formatting to plain text. */
function stripMarkdown(md: string): string {
  return md
    .replace(/!\[.*?\]\(.*?\)/g, "")       // images
    .replace(/\[([^\]]+)\]\(.*?\)/g, "$1")  // links → text only
    .replace(/#{1,6}\s+/g, "")              // headings
    .replace(/(\*{1,2}|_{1,2})(.*?)\1/g, "$2") // bold/italic
    .replace(/`{1,3}[^`]*`{1,3}/g, "")     // inline/fenced code
    .replace(/^>\s+/gm, "")                 // blockquotes
    .replace(/^[-*+]\s+/gm, "- ")           // list normalisation
    .replace(/\n{3,}/g, "\n\n")             // collapse blank lines
    .trim();
}

export const GET: APIRoute = async () => {
  const allPosts = await getCollection("blog", ({ id, data }) =>
    !data.draft && id.startsWith("en/")
  );
  const posts = allPosts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const sections: string[] = [];

  /* ------------------------------------------------------------------ */
  /*  Header                                                             */
  /* ------------------------------------------------------------------ */
  sections.push(
    `# ${personal.name}`,
    "",
    `> ${personal.bio}`,
    "",
    `- Role: ${personal.role} at ${personal.company}`,
    `- Website: ${personal.url}`,
    `- Repository: ${personal.repository}`,
    "",
  );

  /* ------------------------------------------------------------------ */
  /*  Experience                                                         */
  /* ------------------------------------------------------------------ */
  sections.push("## Experience", "");
  for (const exp of experiences) {
    const period = exp.endDate ? `${exp.startDate} - ${exp.endDate}` : `${exp.startDate} - present`;
    sections.push(`### ${exp.title} at ${exp.company} (${period})`, "");
    sections.push(`Location: ${exp.location}`, "");
    for (const desc of exp.descriptions) {
      sections.push(`- ${desc}`);
    }
    sections.push("");
  }

  /* ------------------------------------------------------------------ */
  /*  Education                                                          */
  /* ------------------------------------------------------------------ */
  sections.push("## Education", "");
  for (const edu of education) {
    const period = edu.endDate ? `${edu.startDate} - ${edu.endDate}` : `${edu.startDate} - present`;
    sections.push(`### ${edu.title} (${period})`, "");
    sections.push(`Institution: ${edu.institution}`);
    sections.push(`Grade: ${edu.grade}`, "");
    for (const desc of edu.descriptions) {
      sections.push(`- ${desc}`);
    }
    sections.push("");
  }

  /* ------------------------------------------------------------------ */
  /*  Projects                                                           */
  /* ------------------------------------------------------------------ */
  sections.push("## Projects", "");
  for (const project of projects) {
    const period = project.ongoing
      ? `${project.startDate} - present`
      : project.endDate
        ? `${project.startDate} - ${project.endDate}`
        : project.startDate;
    sections.push(`### ${project.title} - ${project.subtitle} (${period})`, "");
    sections.push(project.description, "");
    sections.push(`Role: ${project.role}`);
    sections.push(`Tech stack: ${project.techStack.join(", ")}`);
    if (project.url) sections.push(`URL: ${project.url}`);
    if (project.githubUrl) sections.push(`GitHub: ${project.githubUrl}`);
    sections.push("");
  }

  /* ------------------------------------------------------------------ */
  /*  Skills                                                             */
  /* ------------------------------------------------------------------ */
  sections.push("## Skills", "");
  for (const category of skillCategories) {
    sections.push(`### ${category.title}`, "");
    for (const desc of category.descriptions) {
      sections.push(desc);
    }
    sections.push("");
    const visible = category.skills.filter((s) => !s.hidden);
    sections.push(visible.map((s) => s.name).join(", "), "");
  }

  /* ------------------------------------------------------------------ */
  /*  Blog Posts                                                         */
  /* ------------------------------------------------------------------ */
  sections.push("## Blog Posts", "");
  for (const post of posts) {
    const url = post.data.externalUrl ?? `${personal.url}/blog/${getBlogPostSlug(post.id)}`;
    const date = post.data.date.toISOString().split("T")[0];
    sections.push(`### ${post.data.title} (${date})`, "");
    sections.push(post.data.description);
    sections.push(`URL: ${url}`);
    sections.push(`Tags: ${post.data.tags.join(", ")}`, "");

    // Include full content for local posts
    if (!post.data.externalUrl && post.body) {
      sections.push("Full content:", "");
      sections.push(stripMarkdown(post.body));
      sections.push("");
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Now                                                                */
  /* ------------------------------------------------------------------ */
  sections.push(`## What I'm Doing Now (updated ${lastUpdated})`, "");
  for (const item of nowItems) {
    sections.push(`- ${item.text}`);
  }
  sections.push("");

  /* ------------------------------------------------------------------ */
  /*  Hobbies                                                            */
  /* ------------------------------------------------------------------ */
  sections.push("## Hobbies & Interests", "");
  for (const hobby of hobbies) {
    sections.push(`### ${hobby.title}`, "");
    sections.push(hobby.content, "");
  }

  /* ------------------------------------------------------------------ */
  /*  Contact                                                            */
  /* ------------------------------------------------------------------ */
  sections.push("## Contact & Social", "");
  for (const link of socialLinks) {
    sections.push(`- ${link.name}: ${link.url}`);
  }
  sections.push("");

  const body = sections.join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
