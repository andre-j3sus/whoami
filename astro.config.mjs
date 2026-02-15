import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  adapter: cloudflare(),
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://andrejesus.com",
});
