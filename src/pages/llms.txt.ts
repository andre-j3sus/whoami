import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { personal } from "@/data/personal";

export const prerender = true;

export const GET: APIRoute = async () => {
  const allPosts = await getCollection("blog", ({ data }) => !data.draft);
  const posts = allPosts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const lines = [
    `# ${personal.name}`,
    "",
    `> ${personal.bio}`,
    "",
    "## About this site",
    "",
    `Personal portfolio and blog of ${personal.name}, a ${personal.role} at ${personal.company}.`,
    "Built with Astro, TypeScript, and Tailwind CSS. Deployed on Cloudflare Workers.",
    "",
    "## Sections",
    "",
    `- [Full LLM content](${personal.url}/llms-full.txt): Expanded, structured content for LLM ingestion`,
    `- [Resume](${personal.url}/resume): Professional experience, education, and skills`,
    `- [Projects](${personal.url}/projects): Notable projects and contributions`,
    `- [Blog](${personal.url}/blog): Technical writing and personal posts`,
    `- [About](${personal.url}/about): Background, hobbies, and interests`,
    `- [Now](${personal.url}/now): What I'm currently up to`,
    `- [Contact](${personal.url}/contact): How to reach me`,
    "",
    "## Blog posts",
    "",
    ...posts.map((post) => {
      const url = post.data.externalUrl ?? `${personal.url}/blog/${post.id}`;
      return `- [${post.data.title}](${url}): ${post.data.description}`;
    }),
    "",
    "## Feeds",
    "",
    `- [RSS Feed](${personal.url}/rss.xml)`,
    `- [Sitemap](${personal.url}/sitemap-index.xml)`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
