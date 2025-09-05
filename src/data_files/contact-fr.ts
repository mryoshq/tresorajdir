import { SITE } from "./constants";

export const contactFrData = {
  pageLayout: {
    lang: "fr" as const,
    pageTitle: `Nous Contacter | ${SITE.title}`,
    metaDescription: "Vous avez des questions a propos de nos produits ou services ? Contactez-nous et nous vous répondrons dans les plus brefs délais.",
    ogTitle: "Nous Contacter | tresorajdir",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://tresorajdir.com/fr/contact",
      url: "https://tresorajdir.com/fr/contact",
      name: "Nous Contacter | tresorajdir",
      description: "Vous avez des questions a propos de nos produits ou services ? Contactez-nous et nous vous répondrons dans les plus brefs délais.",
      isPartOf: {
        "@type": "WebSite",
        url: "https://tresorajdir.com/fr/",
        name: "tresorajdir",
        description: "tresorajdir offre des variétés de pommes de premier ordre et des services agricoles experts pour répondre à tous vos besoins de verger.",
      },
      inLanguage: "fr",
    }
  },

  pageHeader: {
    title: "Contactez-nous",
    subtitle: "Vous avez des questions a propos de nos produits ou services ? Contactez-nous et nous vous répondrons dans les plus brefs délais."
  },

  form: {
    formTitle: "Remplissez le formulaire ci-dessous",
    formSubtitle: "Nous vous répondrons dans 1-2 jours ouvrables.",
    firstNameLabel: "Prénom",
    lastNameLabel: "Nom",
    detailsLabel: "Détails",
    sendButtonText: "Envoyer le message"
  },

  contactBlocks: [
    {
      heading: "Base de connaissances",
      content: "Parcourez tous nos articles de base de connaissances.",
      isLinkVisible: true,
      linkTitle: "Visiter les guides et articles",
      isModalTrigger: true,
      modalType: "guides",
      isArrowVisible: true,
      lang: "fr",
      iconName: "question"
    },
    {
      heading: "FAQ",
      content: "Explorez notre FAQ pour des réponses rapides et claires aux questions courantes.",
      isLinkVisible: true,
      linkTitle: "Visiter la FAQ",
      linkURL: "/#faq",
      isArrowVisible: true,
      lang: "fr",
      iconName: "chatBubble"
    },
    {
      heading: "Visitez notre bureau",
      content: "Trésor Ajdir",
      isAddressVisible: true,
      addressContent: "72 Ajdir, Maroc",
      lang: "fr",
      iconName: "mapPin"
    },
    {
      heading: "Contactez-nous par email",
      content: "Préférez l'écrit ? Envoyez-nous un email à",
      isLinkVisible: true,
      linkTitle: "support@TresorAjdir.com",
      linkURL: "#",
      lang: "fr",
      iconName: "envelopeOpen"
    }
  ],

  lang: "fr"
};
