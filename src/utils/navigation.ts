// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/en" },
  { name: "Orchard", url: "/en/orchard" },
  { name: "Sustainability", url: "/en/sustainability" },


  { name: "Blog", url: "/en/blog" },
  { name: "About Us", url: "/en/about" },
  { name: "Contact", url: "/en/contact" },

];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "sustainability", url: "/en/sustainability" },
      { name: "orchard", url: "/en/orchard" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "/en/about" },
      { name: "Blog", url: "/en/blog" },
      { name: "Cookies", url: "/en/cookies" },
      { name: "Terms and Conditions", url: "/en/terms" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  instagram: "https://instagram.com/",
  youtube: "https://youtube.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};