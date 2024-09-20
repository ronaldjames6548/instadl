import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig, squooshImageService } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import astroI18next from "astro-i18next";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url
    ? config.site.base_url
    : "https://saveinsta.li",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "ignore" : "never",
  image: {
    service: squooshImageService(),
  },
  redirects: {
    // "/download/": {
    //   status: 301,
    //   destination: "/download",
    // },
    "/fr": {
      status: 301,
      destination: "/fr/",
    },
    "/de": {
      status: 301,
      destination: "/de/",
    },
    "/es": {
      status: 301,
      destination: "/es/",
    },
    "/hi": {
      status: 301,
      destination: "/hi/",
    },
    "/id": {
      status: 301,
      destination: "/id/",
    },
    "/pt": {
      status: 301,
      destination: "/pt/",
    },
    "/ko": {
      status: 301,
      destination: "/ko/",
    },
    "/tl": {
      status: 301,
      destination: "/tl/",
    },
    "/ms": {
      status: 301,
      destination: "/ms/",
    },
    "/tr": {
      status: 301,
      destination: "/tr/",
    },








    "/instagram-reels-video-download": {
      status: 301,
      destination: "/instagram-reels-video-download/",
    },
    "/fr/instagram-reels-video-download": {
      status: 301,
      destination: "/fr/instagram-reels-video-download/",
    },
    "/de/instagram-reels-video-download": {
      status: 301,
      destination: "/de/instagram-reels-video-download/",
    },
    "/es/instagram-reels-video-download": {
      status: 301,
      destination: "/es/instagram-reels-video-download/",
    },
    "/hi/instagram-reels-video-download": {
      status: 301,
      destination: "/hi/instagram-reels-video-download/",
    },
    "/id/instagram-reels-video-download": {
      status: 301,
      destination: "/id/instagram-reels-video-download/",
    },
    "/pt/instagram-reels-video-download/": {
      status: 301,
      destination: "/pt/instagram-reels-video-download/",
    },
    "/ko/instagram-reels-video-download": {
      status: 301,
      destination: "/ko/instagram-reels-video-download/",
    },
    "/tl/instagram-reels-video-download": {
      status: 301,
      destination: "/tl/instagram-reels-video-download/",
    },
    "/ms/instagram-reels-video-download": {
      status: 301,
      destination: "/ms/instagram-reels-video-download/",
    },
    "/tr/instagram-reels-video-download": {
      status: 301,
      destination: "/tr/instagram-reels-video-download/",
    },


    "/instagram-profile-downloader": {
      status: 301,
      destination: "/instagram-profile-downloader/",
    },
    "/fr/instagram-profile-downloader": {
      status: 301,
      destination: "/fr/instagram-profile-downloader/",
    },
    "/de/instagram-profile-downloader/": {
      status: 301,
      destination: "/de/instagram-profile-downloader/",
    },
    "/es/instagram-profile-downloader": {
      status: 301,
      destination: "/es/instagram-profile-downloader/",
    },
    "/hi/instagram-profile-downloader": {
      status: 301,
      destination: "/hi/instagram-profile-downloader/",
    },
    "/id/instagram-profile-downloader": {
      status: 301,
      destination: "/id/instagram-profile-downloader/",
    },
    "/pt/instagram-profile-downloader": {
      status: 301,
      destination: "/pt/instagram-profile-downloader/",
    },
    "/ko/instagram-profile-downloader": {
      status: 301,
      destination: "/ko/instagram-profile-downloader/",
    },
    "/tl/instagram-profile-downloader": {
      status: 301,
      destination: "/tl/instagram-profile-downloader/",
    },

    "/ms/instagram-profile-downloader": {
      status: 301,
      destination: "/ms/instagram-profile-downloader/",
    },
    "/tr/instagram-profile-downloader": {
      status: 301,
      destination: "/tr/instagram-profile-downloader/",
    },


    "/audio-downloader": {
      status: 301,
      destination: "/audio-downloader/",
    },
    "/fr/audio-downloader": {
      status: 301,
      destination: "/fr/audio-downloader/",
    },
    "/de/audio-downloader": {
      status: 301,
      destination: "/de/audio-downloader/",
    },
    "/es/audio-downloader": {
      status: 301,
      destination: "/es/audio-downloader/",
    },
    "/hi/audio-downloader/": {
      status: 301,
      destination: "/hi/audio-downloader/",
    },
    "/id/audio-downloader": {
      status: 301,
      destination: "/id/audio-downloader/",
    },
    "/pt/audio-downloader": {
      status: 301,
      destination: "/pt/audio-downloader/",
    },
    "/ko/audio-downloader": {
      status: 301,
      destination: "/ko/audio-downloader/",
    },
    "/tl/audio-downloader": {
      status: 301,
      destination: "/tl/audio-downloader/",
    },
    "/ms/audio-downloader": {
      status: 301,
      destination: "/ms/audio-downloader/",
    },
    "/tr/audio-downloader": {
      status: 301,
      destination: "/tr/audio-downloader/",
    },




    "/instagram-photo-download": {
      status: 301,
      destination: "/instagram-photo-download/",
    },
    "/fr/instagram-photo-download": {
      status: 301,
      destination: "/fr/instagram-photo-download/",
    },
    "/de/instagram-photo-download": {
      status: 301,
      destination: "/de/instagram-photo-download/",
    },
    "/es/instagram-photo-download": {
      status: 301,
      destination: "/es/instagram-photo-download/",
    },
    "/hi/instagram-photo-download": {
      status: 301,
      destination: "/hi/instagram-photo-download/",
    },
    "/id/instagram-photo-download": {
      status: 301,
      destination: "/id/instagram-photo-download/",
    },
    "/pt/instagram-photo-download": {
      status: 301,
      destination: "/pt/instagram-photo-download/",
    },
    "/ko/instagram-photo-download": {
      status: 301,
      destination: "/ko/instagram-photo-download/",
    },
    "/tl/instagram-photo-download": {
      status: 301,
      destination: "/tl/instagram-photo-download/",
    },
    "/ms/instagram-photo-download": {
      status: 301,
      destination: "/ms/instagram-photo-download/",
    },
    "/tr/instagram-photo-download": {
      status: 301,
      destination: "/tr/instagram-photo-download/",
    },






    "/hashtag-generator": {
      status: 301,
      destination: "/hashtag-generator/",
    },
    "/fr/hashtag-generator": {
      status: 301,
      destination: "/fr/hashtag-generator/",
    },
    "/de/hashtag-generator": {
      status: 301,
      destination: "/de/hashtag-generator/",
    },
    "/es/hashtag-generator": {
      status: 301,
      destination: "/es/hashtag-generator/",
    },
    "/hi/hashtag-generator": {
      status: 301,
      destination: "/hi/hashtag-generator/",
    },
    "/id/hashtag-generator": {
      status: 301,
      destination: "/id/hashtag-generator/",
    },
    "/pt/hashtag-generator": {
      status: 301,
      destination: "/pt/hashtag-generator/",
    },
    "/ko/hashtag-generator": {
      status: 301,
      destination: "/ko/hashtag-generator/",
    },
    "/tl/hashtag-generator": {
      status: 301,
      destination: "/tl/hashtag-generator/",
    },
    "/ms/hashtag-generator": {
      status: 301,
      destination: "/ms/hashtag-generator/",
    },
    "/tr/hashtag-generator": {
      status: 301,
      destination: "/tr/hashtag-generator/",
    },





    
  },
  output: "server",
  integrations: [
    astroI18next(),
    react(),
    sitemap({
      filter: (page) =>
        page !== 'https://saveinsta.li/elements' &&
        page !== 'https://saveinsta.li/hashtag-generator/' &&
        page !== 'https://saveinsta.li/download' &&
        page !== 'https://saveinsta.li/categories' &&
        page !== 'https://saveinsta.li/authors' &&
        page !== 'https://saveinsta.li/tags/',
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  adapter: vercel(),
});
