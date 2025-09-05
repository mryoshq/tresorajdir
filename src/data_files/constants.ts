import ogImageSrc from "@images/icon.png";




export const SITE = {
  title: "Trésor d'Ajdir",
  tagline: "Authentic Orchard Experience",
  description:
    "Trésor d'Ajdir is an orchard and apple farm dedicated to producing high-quality fruits using sustainable agricultural practices. Discover our story, explore our orchard, and taste the freshness of nature straight from the farm.",
  description_short:
    "Trésor d'Ajdir is an apple farm offering premium fruits grown with care and tradition.",
  url: "https://tresorajdir.com",
  author: "mryoshq",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Orchard & Apple Farm`,
  description:
    "Explore Trésor d'Ajdir, an authentic orchard and apple farm where tradition meets sustainability. Enjoy premium apples, discover our farming practices, and experience the richness of nature.",
  image: ogImageSrc,
};


