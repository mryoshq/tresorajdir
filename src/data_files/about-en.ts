import { SITE } from "./constants";
import applebasket from "@images/applebasket.jpg";
import emblemlogo from "@images/emblemlogo.png";
import orchard from "@images/orchard.jpg";

export const aboutEnData = {
  pageLayout: {
    lang: "en" as const,
    pageTitle: `About Us | ${SITE.title}`,
    metaDescription: "Learn more about Trésor d'Ajdir and our commitment to sustainable apple farming and exceptional service.",
    ogTitle: "About Us | Trésor d'Ajdir",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://tresorajdir.com/about",
      url: "https://tresorajdir.com/about",
      name: "About Us | Trésor d'Ajdir",
      description: "Learn more about Trésor d'Ajdir and our commitment to sustainable apple farming and exceptional service.",
      isPartOf: {
        "@type": "WebSite",
        url: "https://tresorajdir.com",
        name: "Trésor d'Ajdir",
        description: "Trésor d'Ajdir offers top-tier apple varieties and expert farming services to meet all your orchard needs.",
      },
      inLanguage: "en-US",
    }
  },

  pageHeader: {
    title: "About Trésor d'Ajdir",
    subtitle: "Discover our story, mission, and commitment to sustainable apple farming excellence."
  },

  hero: {
    title: "Our Story & Mission",
    subtitle: "Discover our story, mission, and commitment to sustainable apple farming excellence.",
    description1: "Trésor d'Ajdir was born from a deep-rooted passion for sustainable agriculture and a commitment to preserving the traditional farming methods that have sustained our community for generations. Our journey began with a simple vision: to create an orchard that not only produces exceptional apples but also serves as a model for environmentally conscious farming practices.",
    description2: "Today, we stand as a testament to what can be achieved when tradition meets innovation. Our farm has grown from a small family plot to a thriving enterprise that supplies premium apples to markets across the region while maintaining the highest standards of environmental stewardship.",
    stats: {
      experience: "25+",
      experienceLabel: "Years of Experience",
      sustainability: "100%",
      sustainabilityLabel: "Sustainable Practices"
    },
    imageSrc: orchard,
    imageAlt: "Trésor d'Ajdir Orchard"
  },

  benefits: {
    title: "Why Choose Trésor d'Ajdir?",
    subtitle: "Our commitment to excellence extends beyond just growing apples. We offer a comprehensive farming experience that benefits our customers, community, and environment.",
    benefits: [
      {
        icon: `<svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>`,
        title: "Sustainable Practices",
        description: "We use eco-friendly farming methods that protect the environment while ensuring the highest quality produce."
      },
      {
        icon: `<svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>`,
        title: "Community Involvement",
        description: "We actively participate in local initiatives and support our community through various programs and partnerships."
      },
      {
        icon: `<svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>`,
        title: "Quality Assurance",
        description: "Every apple is carefully selected and tested to meet our strict quality standards before reaching our customers."
      }
    ]
  },

  timeline: {
    title: "Our Journey Through Time",
    subtitle: "From humble beginnings to becoming a leading sustainable orchard, discover the key moments that shaped Trésor d'Ajdir.",
    timeline: [
      {
        year: "1998",
        title: "The Beginning",
        description: "Our family acquired the first plot of land and planted our initial apple trees, marking the birth of Trésor d'Ajdir."
      },
      {
        year: "2005",
        title: "First Harvest",
        description: "We celebrated our first successful harvest and began supplying local markets with our premium apples."
      },
      {
        year: "2012",
        title: "Sustainable Certification",
        description: "Achieved organic certification and implemented comprehensive sustainable farming practices across our entire operation."
      },
      {
        year: "2018",
        title: "Expansion",
        description: "Expanded our orchard and introduced new apple varieties, while maintaining our commitment to sustainable practices."
      },
      {
        year: "2023",
        title: "Today",
        description: "Trésor d'Ajdir continues to grow, serving as a model for sustainable agriculture and providing exceptional apples to our community."
      }
    ]
  },

  team: {
    title: "Meet Our Team",
    subtitle: "Our dedicated team combines years of experience with a passion for sustainable farming and exceptional service.",
    team: [
      {
        name: "Ahmed Benali",
        role: "Founder & CEO",
        bio: "With over 25 years of farming experience, Ahmed leads our operations with wisdom passed down through generations."
      },
      {
        name: "Fatima Benali",
        role: "Operations Manager",
        bio: "Fatima ensures every aspect of our operations runs smoothly, from field management to quality control."
      },
      {
        name: "Hassan El Amrani",
        role: "Head of Sustainability",
        bio: "Hassan leads our environmental initiatives and ensures we maintain the highest standards of sustainable farming."
      }
    ]
  },

  visualIdentity: {
    title: "Our Visual Identity",
    subtitle: "Our logo embodies the essence of Trésor d'Ajdir, reflecting our deep connection to nature, Moroccan heritage, and sustainable farming values.",
    logoStoryTitle: "The Story Behind Our Logo",
    logoStoryDescription: "Our emblem is more than just a symbol - it's a visual representation of everything we stand for. Each element tells a story of our heritage and values.",
    valueElements: [
      {
        title: "Mountain Heritage & Natural Elements",
        description: "The majestic peaks represent the Atlas Mountains that surround our region, symbolizing strength, stability, and the natural boundaries that protect our fertile valleys. The organic shapes and flowing lines represent the natural world around us - from the gentle curves of our orchards to the meandering streams that nourish our land."
      },
      {
        title: "Tree Leaves & Growth",
        description: "The leaf motifs symbolize life, growth, and renewal - core principles of sustainable agriculture. They represent our commitment to nurturing both our trees and our community, reflecting the cycle of nature and our role as stewards of the land."
      },
      {
        title: "Moroccan Heritage & Deep Roots",
        description: "The overall design draws inspiration from traditional Moroccan geometric patterns and Islamic art, celebrating our cultural identity. The root system represents our deep connection to this land and our ancestors who first cultivated these soils, symbolizing tradition, heritage, and the foundation of our values."
      }
    ],
    logoImageSrc: emblemlogo,
    logoImageAlt: "Trésor d'Ajdir Logo"
  },

  foundingStory: {
    title: "The Story Behind Our Name",
    description1: "\"Trésor d'Ajdir\" translates to \"Treasure of Ajdir\" - a name that perfectly captures our philosophy. Ajdir, our beloved hometown, is not just a location; it's the heart of our operation and the source of our inspiration.",
    description2: "Our founder, inspired by the rich agricultural heritage of the region and the natural beauty of the landscape, envisioned an orchard that would become a treasure not just for our family, but for the entire community. This vision continues to guide every decision we make today.",
    description3: "The name also reflects our commitment to treating each apple tree as a precious resource, nurturing it with care and respect to produce the finest fruits nature can offer.",
    imageSrc: applebasket,
    imageAlt: "Our Founding Story"
  },

  locations: {
    title: "Visit Our Farm",
    subtitle: "Experience the beauty of Trésor d'Ajdir firsthand. We welcome visitors to explore our orchard and learn about sustainable farming practices.",
    locationTitle: "Location & Hours",
    locationInfo: [
      {
        icon: `<svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>`,
        title: "Address",
        content: ["Ajdir, Taza Province, Morocco"]
      },
      {
        icon: `<svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>`,
        title: "Visiting Hours",
        content: [
          "Monday - Friday: 8:00 AM - 6:00 PM",
          "Saturday: 9:00 AM - 4:00 PM",
          "Sunday: Closed"
        ]
      },
      {
        icon: `<svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>`,
        title: "Contact",
        content: [
          "+212 5XX XX XX XX",
          "info@tresorajdir.com"
        ]
      }
    ],
    mapImageSrc: null, // Will be imported in the component
    mapImageAlt: "Location Pin",
    locationName: "Trésor d'Ajdir",
    locationSubtitle: "Ajdir, Morocco"
  },

  cta: {
    title: "Ready to Experience Trésor d'Ajdir?",
    subtitle: "Whether you're interested in our sustainable farming practices, want to visit our orchard, or have questions about our products, we'd love to hear from you.",
    contactButtonText: "Contact Us",
    contactButtonHref: "/contact",
    exploreButtonText: "Explore Our Orchard",
    exploreButtonHref: "/orchard"
  }
};
