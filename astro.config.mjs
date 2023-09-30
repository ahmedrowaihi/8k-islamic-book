import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import orama from "@orama/plugin-astro";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    orama({
      // We can generate more than one DB, with different configurations
      mydb: {
        // Required. Only pages matching this path regex will be indexed
        pathMatcher: /book\/?.*$/,
        // Optional. 'english' by default
        language: "arabic",
        // Optional. ['body'] by default. Use it to constraint what is used to
        // index a page.
        contentSelectors: ["h1", "h2", "p"],
      },
    }),
    react(),
  ],
});
