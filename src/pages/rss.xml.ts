import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { personal } from "@/data/personal";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const sorted = posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: `${personal.name} - Blog`,
    description: `Thoughts on tech, life, and everything in between by ${personal.name}`,
    site: context.site!,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: post.data.externalUrl ?? `/blog/${post.id}`,
    })),
  });
}
