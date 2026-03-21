# Blog Guide

A reference for writing and publishing posts on this site.

---

## Frontmatter

All blog posts live in `src/content/blog/*.md`. The filename becomes the URL slug.

```md
---
title: "Your Post Title"
description: "A one or two sentence summary shown in cards and meta tags."
date: 2026-01-15
tags: ["Tag1", "Tag2"]
draft: false           # true = only visible in dev mode, never deployed
externalUrl: "https://..." # optional: links the card to an external URL instead of a post page
ogImage: "/images/your-post-slug.png" # optional: thumbnail image
---
```

| Field        | Required | Notes                                          |
|--------------|----------|------------------------------------------------|
| `title`      | yes      |                                                |
| `description`| yes      | Shown in cards and as the meta description     |
| `date`       | yes      | `YYYY-MM-DD` format                            |
| `tags`       | no       | Defaults to `[]`                               |
| `draft`      | no       | Defaults to `false`                            |
| `externalUrl`| no       | If set, card links out — no post page created  |
| `ogImage`    | no       | Used as OG/Twitter card image, blog card thumbnail, and hero on the post page |

---

## Thumbnail images

- Place the image in `public/images/`, named after the post slug
  - e.g. `public/images/my-post-title.png` or `.webp`
- Set `ogImage: "/images/my-post-title.png"` in the frontmatter
- Recommended size: **1200×630px** (standard OG image ratio)
- Formats: `.png`, `.webp`, or `.jpg` all work

---

## Generating a thumbnail with an image model

Use this template with any image generation tool (ChatGPT, Midjourney, Flux, Ideogram, etc.):

```
A [style] illustration of [subject].
[Optional: one sentence describing the scene or mood.]
[Optional: color palette.]
Widescreen 1200x630, no text, no people.
```

**Fields:**
- `[style]` — e.g. `flat editorial`, `watercolor`, `isometric`, `photorealistic`, `vintage poster`
- `[subject]` — what the post is about, described visually
- Scene/mood — optional extra detail for more control over composition
- Color palette — optional; skip it to let the model decide

**Tips:**
- Always include `no text` — models tend to hallucinate garbled text otherwise
- Add `--ar 1.91:1` in Midjourney or Ideogram for the correct aspect ratio
- Grain texture (`slight grain texture`, `film grain`) adds a premium editorial feel

### Example — house post

```
A warm, editorial-style illustration of a single house at golden hour,
with pastel-colored walls, terracotta rooftop tiles, and a winding
cobblestone path leading to the front door. Subtle overlay of a house
key or floor plan in the background. Modern flat design with a slight
grain texture. Color palette: terracotta, warm yellow, dusty rose, and
deep blue. Widescreen 1200x630, no text, no people.
```

---

## Writing style

- **Friendly and approachable** — write like you're explaining something to a friend, not presenting at a conference
- **Charismatic** — let your personality come through; don't flatten yourself into a generic "technical writer" voice
- **First person** — use "I", "we", "my"; this is a personal blog
- **Conversational but thoughtful** — casual tone, but don't sacrifice clarity for informality
- **Honest** — share what actually happened, including the messy parts; readers trust authenticity over polish
- **Clear over clever** — if a simpler word works, use it; avoid jargon unless the audience clearly knows it
- **Portuguese cultural references are welcome** — they add personality and context (e.g. *desenrasca*, local places, Portuguese-specific experiences)
- **Explain things in context** — when using Portuguese terms or niche concepts, give a brief explanation in the same sentence
