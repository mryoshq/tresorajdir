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
  locale: "fr_FR",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Verger et Ferme de Pommes`,
  description:
    "Explorez Trésor d'Ajdir, un véritable verger et ferme de pommes où la tradition rencontre la durabilité. Découvrez les pommes premium, nos pratiques agricoles, et la richesse de la nature.",
  image: ogImageSrc,
};


