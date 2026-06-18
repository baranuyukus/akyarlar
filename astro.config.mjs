import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://www.akyarlarwindsurf.com",
  trailingSlash: "always",

  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404/")
    })
  ],

  adapter: cloudflare()
});