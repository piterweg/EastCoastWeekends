/** Global site configuration. */
export const site = {
  name: "East Coast Weekends",
  tagline: "Weekends beyond New York",
  description: "East Coast Weekends is an independent guide to the best two- and three-day trips within reach of New York: the Hudson Valley, Philadelphia, Boston, Washington and Niagara Falls, with train times, costs and honest itineraries.",
  baseUrl: "https://eastcoastweekends.com",
  email: "hello@eastcoastweekends.com",
  year: 2026,
  brandMark: "East Coast<span>Weekends</span>",
  brandTag: "Weekend guides",
  footerBlurb: "An independent guide to weekends beyond New York: train times, honest costs and two-day plans.",
  ogImage: "assets/img/hudson-valley.webp",
  editorialHref: "about.html",
  navFoot: "Independent weekend guides for the East Coast.",
  nav: [
    { id: "weekends", label: "Weekends", href: "weekends.html" },
    { id: "destinations", label: "Destinations", href: "destinations.html" },
    { id: "plan", label: "Plan", href: "when-to-go.html" },
    { id: "about", label: "About", href: "about.html" },
  ],
  footer: [
    {
      title: "Plan",
      links: [
        { label: "Weekend planner", href: "weekends.html" },
        { label: "Destinations", href: "destinations.html" },
        { label: "One night or two?", href: "one-or-two-nights.html" },
        { label: "When to go", href: "when-to-go.html" },
      ],
    },
    {
      title: "Destinations",
      links: [
        { label: "Hudson Valley", href: "hudson-valley.html" },
        { label: "Philadelphia", href: "philadelphia.html" },
        { label: "Boston", href: "boston.html" },
        { label: "Washington, D.C.", href: "washington-dc.html" },
        { label: "Niagara Falls", href: "niagara-falls.html" },
        { label: "Catskills", href: "catskills.html" },
        { label: "Jersey Shore", href: "jersey-shore.html" },
        { label: "Berkshires", href: "berkshires.html" },
        { label: "Finger Lakes", href: "finger-lakes.html" },
        { label: "Cape May", href: "cape-may.html" },
        { label: "Atlantic City", href: "atlantic-city.html" },
      ],
    },
    {
      title: "Site",
      links: [
        { label: "About", href: "about.html" },
        { label: "NYC guide (NYCTrove)", href: "https://nyctrove.com" },
      ],
    },
  ],
  social: [],
};
