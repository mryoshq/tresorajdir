import { SITE } from "./constants";

export const contactEnData = {
  pageLayout: {
    lang: "en" as const,
    pageTitle: `Contact | ${SITE.title}`,
    metaDescription: "Have questions about our products or services? Reach out and get in touch with us",
    ogTitle: "Contact Us | tresorajdir",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://tresorajdir.com/contact",
      url: "https://tresorajdir.com/contact",
      name: "Contact Us | tresorajdir",
      description: "Have questions about our products or services? Reach out and get in touch with us",
      isPartOf: {
        "@type": "WebSite",
        url: "https://tresorajdir.com",
        name: "tresorajdir",
        description: "tresorajdir offers premium apple varieties and expert farming services to meet all your orchard needs.",
      },
      inLanguage: "en-US", 
    }
  },

  pageHeader: {
    title: "Contact us",
    subtitle: "Have questions about our products or services? Reach out and get in touch with us."
  },

  form: {
    formTitle: "Fill in the form below",
    formSubtitle: "We'll get back to you in 1-2 business days.",
    firstNameLabel: "First Name",
    lastNameLabel: "Last Name",
    detailsLabel: "Details",
    sendButtonText: "Send Message"
  },

  contactBlocks: [
    {
      heading: "Knowledgebase",
      content: "Browse through all of our knowledgebase articles.",
      isLinkVisible: true,
      linkTitle: "Visit Guides & Articles",
      isModalTrigger: true,
      modalType: "guides",
      isArrowVisible: true,
      lang: "en",
      iconName: "question"
    },
    {
      heading: "FAQ",
      content: "Explore our FAQ for quick, clear answers to common queries.",
      isLinkVisible: true,
      linkTitle: "Visit FAQ",
      linkURL: "/#faq",
      isArrowVisible: true,
      lang: "en",
      iconName: "chatBubble"
    },
    {
      heading: "Visit our office",
      content: "Tresor Ajdir",
      isAddressVisible: true,
      addressContent: "72 Ajdir, Morocco",
      lang: "en",
      iconName: "mapPin"
    },
    {
      heading: "Contact us by email",
      content: "Prefer the written word? Drop us an email at",
      isLinkVisible: true,
      linkTitle: "support@TresorAjdir.com",
      linkURL: "#",
      lang: "en",
      iconName: "envelopeOpen"
    }
  ],

  lang: "en"
};
