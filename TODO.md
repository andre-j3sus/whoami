# TODO

## Features

- [x] Convert experience and education sections into timelines
- [ ] Add card with book I'm currently reading. Since the goodreads API is not public anymore, I probably need to create a worker with a crontrigger to scrape my public page
- [x] Add a map with the countries I visited
- [ ] Add thumbnails to blog posts
- [ ] Add thumbnails to projects
- [x] Add progress bar to blog post

## Internationalization (i18n)

- [ ] Add Intl/i18n support for English and Portuguese
  - Use `Intl.DateTimeFormat` with locale parameter in `src/utils/dates.ts`
  - Add locale switching to `BaseLayout.astro` (`<html lang="en">` becomes dynamic)
  - Translate static content strings across all pages
  - Consider URL strategy: `/pt/` prefix vs subdomain vs language toggle
  - Update `formatYearMonth()` to accept a locale parameter

## SEO

- [ ] Create and add an OG image (`og:image` meta tag in `BaseHead.astro`)
  - Design a branded card image (1200x630)
  - Consider per-page OG images for blog posts

## Performance

- [x] Self-host Inter font or add `<link rel="preload">` hints to reduce render-blocking Google Fonts request
