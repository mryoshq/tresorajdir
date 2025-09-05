import { SITE } from "./constants";
import applebasket from "@images/applebasket.jpg";
import emblemlogo from "@images/emblemlogo.png";
import orchard from "@images/orchard.jpg";

export const aboutFrData = {
  pageLayout: {
    lang: "fr" as const,
    pageTitle: `À propos de nous | ${SITE.title}`,
    metaDescription: "En savoir plus sur Trésor d'Ajdir et notre engagement envers l'excellence dans l'agriculture durable et la production de pommes de qualité.",
    ogTitle: "À propos de nous | Trésor d'Ajdir",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://tresorajdir.com/fr/about",
      url: "https://tresorajdir.com/fr/about",
      name: "À propos de nous | Trésor d'Ajdir",
      description: "En savoir plus sur Trésor d'Ajdir et notre engagement envers l'excellence dans l'agriculture durable et la production de pommes de qualité.",
      isPartOf: {
        "@type": "WebSite",
        url: "https://tresorajdir.com/fr",
        name: "Trésor d'Ajdir",
        description: "Trésor d'Ajdir propose des variétés de pommes de premier ordre et des services agricoles experts pour répondre à tous vos besoins de verger.",
      },
      inLanguage: "fr",
    }
  },

  pageHeader: {
    title: "À propos de Trésor d'Ajdir",
    subtitle: "Découvrez notre histoire, notre mission et notre engagement envers l'excellence dans l'agriculture durable et la production de pommes de qualité."
  },

  hero: {
    title: "Notre Histoire & Mission",
    subtitle: "Découvrez l'histoire de Trésor d'Ajdir et notre engagement envers l'excellence agricole durable.",
    description1: "Trésor d'Ajdir est né d'une passion profonde pour l'agriculture durable et d'un engagement à préserver les méthodes agricoles traditionnelles qui ont soutenu notre communauté pendant des générations. Notre voyage a commencé avec une vision simple : créer un verger qui produit non seulement des pommes exceptionnelles, mais qui sert aussi de modèle pour les pratiques agricoles respectueuses de l'environnement.",
    description2: "Aujourd'hui, nous sommes un témoignage de ce qui peut être accompli quand la tradition rencontre l'innovation. Notre ferme a grandi d'un petit terrain familial à une entreprise florissante qui fournit des pommes premium aux marchés de toute la région tout en maintenant les plus hauts standards de gestion environnementale.",
    stats: {
      experience: "25+",
      experienceLabel: "Années d'Expérience",
      sustainability: "100%",
      sustainabilityLabel: "Pratiques Durables"
    },
    imageSrc: orchard,
    imageAlt: "Verger Trésor d'Ajdir"
  },

  benefits: {
    title: "Pourquoi Choisir Trésor d'Ajdir ?",
    subtitle: "Notre engagement envers l'excellence va au-delà de la simple culture de pommes. Nous offrons une expérience agricole complète qui profite à nos clients, à notre communauté et à l'environnement.",
    benefits: [
      {
        icon: `<svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>`,
        title: "Pratiques Durables",
        description: "Nous utilisons des méthodes agricoles respectueuses de l'environnement qui protègent l'environnement tout en assurant la plus haute qualité de production."
      },
      {
        icon: `<svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>`,
        title: "Implication Communautaire",
        description: "Nous participons activement aux initiatives locales et soutenons notre communauté à travers divers programmes et partenariats."
      },
      {
        icon: `<svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>`,
        title: "Assurance Qualité",
        description: "Chaque pomme est soigneusement sélectionnée et testée pour répondre à nos normes de qualité strictes avant d'atteindre nos clients."
      }
    ]
  },

  timeline: {
    title: "Notre Parcours à Travers le Temps",
    subtitle: "Des débuts modestes à devenir un verger durable de premier plan, découvrez les moments clés qui ont façonné Trésor d'Ajdir.",
    timeline: [
      {
        year: "1998",
        title: "Le Commencement",
        description: "Notre famille a acquis le premier terrain et planté nos premiers pommiers, marquant la naissance de Trésor d'Ajdir."
      },
      {
        year: "2005",
        title: "Première Récolte",
        description: "Nous avons célébré notre première récolte réussie et commencé à fournir les marchés locaux avec nos pommes premium."
      },
      {
        year: "2012",
        title: "Certification Durable",
        description: "Obtenu la certification biologique et mis en œuvre des pratiques agricoles durables complètes dans toute notre opération."
      },
      {
        year: "2018",
        title: "Expansion",
        description: "Élargi notre verger et introduit de nouvelles variétés de pommes, tout en maintenant notre engagement envers les pratiques durables."
      },
      {
        year: "2023",
        title: "Aujourd'hui",
        description: "Trésor d'Ajdir continue de croître, servant de modèle pour l'agriculture durable et fournissant des pommes exceptionnelles à notre communauté."
      }
    ]
  },

  foundingStory: {
    title: "L'Histoire Derrière Notre Nom",
    description1: "\"Trésor d'Ajdir\" se traduit par \"Trésor d'Ajdir\" - un nom qui capture parfaitement notre philosophie. Ajdir, notre ville natale bien-aimée, n'est pas seulement un emplacement ; c'est le cœur de notre opération et la source de notre inspiration.",
    description2: "Notre fondateur, inspiré par le riche patrimoine agricole de la région et la beauté naturelle du paysage, a imaginé un verger qui deviendrait un trésor non seulement pour notre famille, mais pour toute la communauté. Cette vision continue de guider chaque décision que nous prenons aujourd'hui.",
    description3: "Le nom reflète aussi notre engagement à traiter chaque pommier comme une ressource précieuse, en le nourrissant avec soin et respect pour produire les meilleurs fruits que la nature puisse offrir.",
    imageSrc: applebasket,
    imageAlt: "Notre Histoire de Fondation"
  },

  team: {
    title: "Rencontrez Notre Équipe",
    subtitle: "Notre équipe dévouée combine des années d'expérience avec une passion pour l'agriculture durable et un service exceptionnel.",
    team: [
      {
        name: "Ahmed Benali",
        role: "Fondateur & PDG",
        bio: "Avec plus de 25 ans d'expérience agricole, Ahmed dirige nos opérations avec la sagesse transmise à travers les générations."
      },
      {
        name: "Fatima Benali",
        role: "Responsable des Opérations",
        bio: "Fatima s'assure que chaque aspect de nos opérations fonctionne en douceur, de la gestion des champs au contrôle de la qualité."
      },
      {
        name: "Hassan El Amrani",
        role: "Responsable du Développement Durable",
        bio: "Hassan dirige nos initiatives environnementales et s'assure que nous maintenons les plus hauts standards d'agriculture durable."
      }
    ]
  },

  visualIdentity: {
    title: "Notre Identité Visuelle",
    subtitle: "Notre logo incarne l'essence de Trésor d'Ajdir, reflétant notre lien profond avec la nature, l'héritage marocain et les valeurs d'agriculture durable.",
    logoStoryTitle: "L'Histoire Derrière Notre Logo",
    logoStoryDescription: "Notre emblème est plus qu'un simple symbole - c'est une représentation visuelle de tout ce que nous défendons. Chaque élément raconte une histoire de notre héritage et de nos valeurs.",
    valueElements: [
      {
        title: "Héritage Montagneux & Éléments Naturels",
        description: "Les pics majestueux représentent les montagnes de l'Atlas qui entourent notre région, symbolisant la force, la stabilité et les frontières naturelles qui protègent nos vallées fertiles. Les formes organiques et les lignes fluides représentent le monde naturel qui nous entoure - des courbes douces de nos vergers aux ruisseaux sinueux qui nourrissent notre terre."
      },
      {
        title: "Feuilles d'Arbres & Croissance",
        description: "Les motifs de feuilles symbolisent la vie, la croissance et le renouveau - principes fondamentaux de l'agriculture durable. Ils représentent notre engagement à nourrir à la fois nos arbres et notre communauté, reflétant le cycle de la nature et notre rôle de gardiens de la terre."
      },
      {
        title: "Héritage Marocain & Racines Profondes",
        description: "Le design global s'inspire des motifs géométriques marocains traditionnels et de l'art islamique, célébrant notre identité culturelle. Le système racinaire représente notre lien profond avec cette terre et nos ancêtres qui ont d'abord cultivé ces sols, symbolisant la tradition, l'héritage et la fondation de nos valeurs."
      }
    ],
    logoImageSrc: emblemlogo,
    logoImageAlt: "Logo Trésor d'Ajdir"
  },

  locations: {
    title: "Visitez Notre Ferme",
    subtitle: "Vivez la beauté de Trésor d'Ajdir de première main. Nous accueillons les visiteurs pour explorer notre verger et apprendre sur les pratiques agricoles durables.",
    locationTitle: "Localisation & Horaires",
    locationInfo: [
      {
        icon: `<svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>`,
        title: "Adresse",
        content: ["Ajdir, Province de Taza, Maroc"]
      },
      {
        icon: `<svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>`,
        title: "Heures de Visite",
        content: [
          "Lundi - Vendredi : 8h00 - 18h00",
          "Samedi : 9h00 - 16h00",
          "Dimanche : Fermé"
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
    mapImageSrc: null, // Sera importé dans le composant
    mapImageAlt: "Épingle de Localisation",
    locationName: "Trésor d'Ajdir",
    locationSubtitle: "Ajdir, Maroc"
  },

  cta: {
    title: "Prêt à Découvrir Trésor d'Ajdir ?",
    subtitle: "Que vous soyez intéressé par nos pratiques agricoles durables, que vous souhaitiez visiter notre verger ou que vous ayez des questions sur nos produits, nous aimerions avoir de vos nouvelles.",
    contactButtonText: "Contactez-Nous",
    contactButtonHref: "/fr/contact",
    exploreButtonText: "Explorez Notre Verger",
    exploreButtonHref: "/fr/orchard"
  }
};
