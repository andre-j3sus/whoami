# AGENTS.md

> Guidelines for AI coding agents operating in this repository.

## Project Overview

Personal portfolio/blog for Andre Jesus ([andrejesus.com](https://andrejesus.com)).
Built with **Astro 5**, **TypeScript 5 (strict)**, and **Tailwind CSS 4**.
Deployed to **Cloudflare Workers** via the `@astrojs/cloudflare` adapter.
Package manager is **npm**. Module system is **ESM** (`"type": "module"`).

## Build / Dev / Deploy Commands

```bash
npm run dev        # Start local dev server (astro dev)
npm run build      # Production build (astro build)
npm run preview    # Preview production build locally
npm run deploy     # Build + deploy to Cloudflare Workers
```

There is **no linter, formatter, or test runner** configured in this project.
Validate changes by running `npm run build` and confirming it exits cleanly.

### Type-checking

TypeScript strict mode is inherited from `astro/tsconfigs/strict`.
Run `npx astro check` to type-check `.astro` files and TypeScript sources.

### Tests

No test framework is installed. There are no test files or test scripts.

## CI/CD

`.github/workflows/deploy-worker.yaml` runs on pushes to `main`:
1. `npm ci && npm run build`
2. Deploys to Cloudflare Workers via `cloudflare/wrangler-action@v3`

## Project Structure

```
src/
  components/        # Reusable Astro components (PascalCase filenames)
  content/           # Markdown content collections (blog posts)
  data/              # Typed data modules: interface + const array per file
  layouts/           # Page layout wrappers (single BaseLayout)
  pages/             # File-based routing (lowercase filenames)
  styles/            # Global CSS (Tailwind imports, theme tokens)
  utils/             # Utility functions
  content.config.ts  # Content collection schemas (Zod)
public/              # Static assets (fonts, logos, favicon)
```

## Path Alias

`@/*` maps to `src/*` (configured in `tsconfig.json`). Always use `@/` for
internal imports. Never use relative paths (`../`, `./`) in source files.

## Code Style

### Formatting

- **Indentation:** 2 spaces
- **Semicolons:** always
- **Quotes:** double quotes everywhere (strings, imports, HTML attributes)
- **Trailing commas:** always in multi-line arrays/objects
- **No strict line-length limit**, but keep lines reasonable; long Tailwind
  class strings in templates are acceptable

### Imports

Order: (1) third-party packages, (2) layouts, (3) data modules, (4) components,
(5) utilities. Use `import type` when importing only types. Astro components
use **default imports**; TypeScript modules use **named imports**.

### TypeScript

- Use `interface` for object shapes (never `type` aliases for object types)
- Astro component props: define `interface Props { ... }` in the frontmatter
- Provide defaults via destructuring: `const { size = "md" } = Astro.props;`
- Add explicit return types on exported utility functions
- Use `async/await` exclusively; never use `.then()` chains or callbacks
- Use Zod schemas for content collection validation (`content.config.ts`)

### Naming Conventions

| Thing              | Convention   | Example                          |
| ------------------ | ------------ | -------------------------------- |
| Astro components   | PascalCase   | `BlogPostCard.astro`             |
| Page files         | lowercase    | `about.astro`, `[slug].astro`    |
| Data/util modules  | lowercase    | `skills.ts`, `dates.ts`          |
| Interfaces/types   | PascalCase   | `Project`, `SkillCategory`       |
| Variables/consts   | camelCase    | `allPosts`, `recentPosts`        |
| Functions          | camelCase    | `formatYearMonth`                |
| CSS classes        | kebab-case   | `glass-card`, `btn-primary`      |
| CSS custom props   | kebab-case   | `--color-bg`, `--glass-border`   |
| Data arrays        | camelCase    | `projects`, `socialLinks`        |

### Exports

- Data modules export a **named interface** then a **named const** array:
  `export interface Project { ... }` followed by `export const projects: Project[] = [ ... ];`
- Utility modules use **named exports** only (no default exports)
- Default exports only where the framework requires (`astro.config.mjs`)

### Error Handling

- No try/catch blocks are used; Astro's build-time guarantees handle most issues
- Use optional chaining (`?.`) for DOM queries in `<script is:inline>` blocks
- Use nullish coalescing (`??`) for fallback values
- Use conditional rendering (`&&`, ternary) in templates for missing/optional data

### Comments

- `/** JSDoc */` for exported symbols and documentation
- `//` for inline clarifications
- `<!-- HTML comments -->` as section landmarks in Astro templates
- CSS section headers use the decorative style:
  `/* -- Section name ---------------------------------------- */`

## Astro Component Structure

Follow this order inside `.astro` files:

```astro
---
// 1. Imports
// 2. interface Props { ... }
// 3. Props destructuring with defaults
// 4. Data fetching / logic
---
<!-- 5. Template markup -->
<style>  <!-- 6. Scoped styles (optional) -->  </style>
<script is:inline>  <!-- 7. Client-side JS (optional) -->  </script>
```

## Key Patterns

- **Data-driven rendering:** All content lives in `src/data/*.ts` as typed
  constants. Pages import and `.map()` over data arrays to render.
- **Single layout:** Every page wraps in `<BaseLayout>` which composes
  `BaseHead`, `Nav`, `Footer`, and injects content via `<slot />`.
- **Dark mode:** `.dark` class on `<html>`, toggled via localStorage with
  system-preference fallback. Handled in `BaseHead.astro` inline script.
- **Zero client-side framework:** No React/Vue. All interactivity uses
  vanilla `<script is:inline>` blocks (theme toggle, mobile menu, scroll).
- **Dynamic tag pattern:** Use `const Tag = url ? "a" : "div"` with spread
  props for conditional wrapping.
- **`class:list` directive:** Prefer `class:list={[...]}` for conditional
  Tailwind classes over string concatenation.
- **Icons:** `<Icon name="lucide:..." />` or `<Icon name="simple-icons:..." />`
  from the `astro-icon` integration with `@iconify-json/*` icon sets.

## Commit Conventions

This project follows [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
<type>(<scope>): <short summary>

<optional body>
```

### Types

| Type       | When to use                                                |
| ---------- | ---------------------------------------------------------- |
| `feat`     | A new feature or page                                      |
| `fix`      | A bug fix                                                  |
| `refactor` | Code restructuring without changing behavior               |
| `style`    | CSS / design / formatting changes (no logic change)        |
| `a11y`     | Accessibility improvements                                 |
| `perf`     | Performance improvements                                   |
| `seo`      | SEO-related changes (meta tags, sitemap, structured data)  |
| `chore`    | Tooling, deps, config, CI — no production code change      |
| `docs`     | Documentation only (README, AGENTS.md, TODO.md, comments)  |
| `content`  | Blog posts or data file content changes                    |

### Scopes (optional)

Use the primary area affected: `blog`, `resume`, `projects`, `about`, `nav`,
`footer`, `head`, `css`, `data`, `deps`, `ci`, etc.

### Rules

- Subject line: imperative mood, lowercase, no period, max ~72 chars
- Body: explain **why**, not **what** (the diff shows the what)
- One logical change per commit — avoid mixing unrelated changes
- Reference issue numbers when applicable: `closes #12`

### Examples

```
feat(blog): add RSS feed and link in blog header
fix(nav): add focus trap and Escape key handler to mobile menu
refactor(data): derive featuredSkills from skillCategories
a11y(resume): use semantic <time> elements for date ranges
seo(head): add theme-color meta and og:type for blog posts
chore(deps): add @astrojs/sitemap and @astrojs/rss
style(css): refactor glass-card-static to share base with glass-card
docs: add conventional commits guidelines to AGENTS.md
```

## Content Collections

Blog posts live in `src/content/blog/*.md`. Schema (in `content.config.ts`):
`title` (string), `description` (string), `date` (date), `tags` (string[],
default `[]`), `draft` (boolean, default `false`), `externalUrl` (URL, optional).
Draft posts (`draft: true`) are filtered out from production builds.
