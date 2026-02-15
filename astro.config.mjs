import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  adapter: cloudflare(),
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://andrejesus.com",
});
