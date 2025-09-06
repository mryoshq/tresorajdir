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
      gzip: true,
      brotli: true,
      zstd: false, // Disable zstd to avoid Node.js version warnings
      gzipOptions: {
        level: 9,
        memLevel: 9
      },
      brotliOptions: {
        level: 11,
        memLevel: 11
      }
    }),
    mdx(),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
        },
        mangle: true,
        format: {
          comments: false
        }
      },
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  },
});
