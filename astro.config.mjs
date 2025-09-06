import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://tresorajdir.com",
  image: {
  },
  security: {
    checkOrigin: true,
    allowedHosts: ["fonts.googleapis.com", "fonts.gstatic.com"],
  },
   i18n: {
     defaultLocale: "fr",
     locales: ["fr", "en"],
     routing: {
       prefixDefaultLocale: false,
     },
   },
  prefetch: true,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "fr", // All urls that don't contain language prefix will be treated as default locale
        locales: {
          fr: "fr", // The `defaultLocale` value must present in `locales` keys
          en: "en",
        },
      },
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    mdx(),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
