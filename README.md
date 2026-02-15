# whoami

My personal website, built with Astro, TypeScript, and Tailwind CSS. Deployed on Cloudflare Workers.

Live at [andrejesus.com](https://andrejesus.com).

## Stack

- [Astro](https://astro.build/) - Static site framework (zero client JS by default)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Cloudflare Workers](https://workers.cloudflare.com/) - Deployment via `@astrojs/cloudflare`

## Site Structure

```
/           Home
/about      About
/resume     Resume (experience, education, skills)
/projects   Projects
/blog       Blog (supports markdown content collection)
/hobbies    Hobbies & interests
/contact    Contact & social links
/now        Now page (placeholder)
/uses       Uses page (placeholder)
```

## Development

Requires [Node.js](https://nodejs.org/) (see `.nvmrc` for version).

```sh
# Install dependencies
npm install

# Start dev server
npm run dev
```

## Deployment

Deployed to Cloudflare Workers. Pushes to `main` trigger automatic deployment via GitHub Actions.

To deploy manually:

```sh
npm run deploy
```
