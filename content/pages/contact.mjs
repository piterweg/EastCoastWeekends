import { pageHero, sectionHead, callout, img, metaItems } from "../components.mjs";

export default {
  path: "contact.html",
  navSection: "about",
  bodyClass: "page-inner",
  title: "Contact",
  description: "Contact East Coast Weekends with corrections, questions or partnership enquiries. We reply to price corrections and genuine editorial questions.",
  priority: "0.4",
  changefreq: "yearly",
  ogImage: "assets/img/hudson-valley.webp",
  render: () => `
${pageHero({
  image: img("hudson-valley.webp"),
  alt: "",
  crumbs: [{ href: "/", label: "Home" }, { href: "contact.html", label: "Contact" }],
  eyebrowText: "Contact",
  title: "Say hello",
  lead: "Corrections, questions and genuine partnerships are welcome. Sponsored posts and paid rankings are not.",
  meta: metaItems("Email", "Corrections", "No paid placements"),
})}
<section class="section">
  <div class="container container--narrow">
    <div class="prose">
      <p>Email: <a href="mailto:hello@eastcoastweekends.com">hello@eastcoastweekends.com</a></p>
      <p>If you are reporting a wrong price or opening time, include the page URL, the operator's current figure and the date you checked it. Corrections are fixed with a new checked date.</p>
    </div>
    ${callout({ icon: "◆", title: "Editorial independence", text: "No venue, hotel or pass operator pays to appear or to be ranked. If that ever changes, the affected page will say so." })}
  </div>
</section>
`,
};
