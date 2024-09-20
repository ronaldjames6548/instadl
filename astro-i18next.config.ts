import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "fr","de","es","hi", "id", "pt", "ko","tl","ms", "tr"],
  i18nextServer: {
    debug: false,
    
  },
};

export default config;
