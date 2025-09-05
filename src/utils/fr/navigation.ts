
const navBarLinks = [
  { name: "Accueil", url: "/" },
  { name: "Verger", url: "/orchard" },
  { name: "Durabilité", url: "/sustainability" },

  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
  { name: "À propos", url: "/about" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Durabilité", url: "/sustainability" },
      { name: "Verger ", url: "/orchard" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "/about" },
      { name: "Blog", url: "/blog" },
      { name: "Cookies", url: "/cookies" },
      { name: "Conditions générales", url: "/terms" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  instagram: "#",
  youtube: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};