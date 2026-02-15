---
title: "How to Write a Blog Post"
description: "A sample post showing how to use the blog. This is a draft — it only appears in dev mode."
date: 2026-02-14
tags: ["guide", "meta"]
draft: true
---

> **This is a sample post.** It has `draft: true` in frontmatter, so it only shows up when running `npm run dev`. It will never appear in production builds. Delete this file when you're ready, or use it as a reference.

## Writing a New Post

Create a new `.md` file in `src/content/blog/`. The filename becomes the URL slug — for example, `my-first-post.md` becomes `/blog/my-first-post`.

### Frontmatter

Every post needs a frontmatter block at the top:

```yaml
---
title: "Your Post Title"
description: "A short description for SEO and the blog listing."
date: 2026-03-01
tags: ["tech", "cloudflare"]
draft: false
---
```

| Field         | Required | Description                                             |
| ------------- | -------- | ------------------------------------------------------- |
| `title`       | Yes      | The post title                                          |
| `description` | Yes      | Short summary (shown in cards and meta tags)            |
| `date`        | Yes      | Publication date in `YYYY-MM-DD` format                 |
| `tags`        | No       | Array of tag strings (defaults to `[]`)                 |
| `draft`       | No       | Set to `true` to hide from production (default `false`) |

## Markdown Features

### Text Formatting

You can write **bold**, _italic_, ~~strikethrough~~, and `inline code`.

### Links

- [External link](https://example.com) — opens in a new tab if you want
- [Internal link](/about) — navigates within the site

### Code Blocks

```typescript
// Syntax-highlighted code blocks work out of the box
interface BlogPost {
  title: string;
  description: string;
  date: Date;
  tags: string[];
  draft: boolean;
}

function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

### Lists

Unordered:

- First item
- Second item
  - Nested item
  - Another nested item
- Third item

Ordered:

1. Step one
2. Step two
3. Step three

### Blockquotes

> "Any sufficiently advanced technology is indistinguishable from magic."
> — Arthur C. Clarke

### Images

```markdown
![Alt text](/path/to/image.jpg)
```

Place images in the `public/` folder and reference them with an absolute path like `/images/my-photo.jpg`.

---

That's it. Write your content in markdown, set `draft: false` when you're happy with it, and it'll appear on the site after the next build.
