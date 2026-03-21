import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

/** Pre-compile CJS dependencies that are incompatible with workerd */
function noExternalPlugin() {
  return {
    name: "pre-compile-cjs-deps",
    configEnvironment(name) {
      if (name !== "client") {
        return {
          optimizeDeps: {
            include: [
              "debug",
              "astro-icon > @iconify/utils > debug",
            ],
          },
        };
      }
    },
  };
}

export default defineConfig({
  adapter: cloudflare({ imageService: "compile" }),
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss(), noExternalPlugin()],
  },
  build: {
    inlineStylesheets: "always",
  },
  site: "https://andrejesus.com",
});
