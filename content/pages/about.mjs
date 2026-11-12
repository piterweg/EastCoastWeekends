import { pageHero, sectionHead, callout, newsletter, img, metaItems, eyebrow } from "../components.mjs";

export default {
  path: "about.html",
  navSection: "about",
  bodyClass: "page-inner",
  title: "About East Coast Weekends",
  description: "Who writes East Coast Weekends, how trips are researched, how fares and opening hours are checked and how corrections work.",
  priority: "0.6",
  changefreq: "yearly",
  ogImage: "assets/img/hudson-valley.webp",
  render: () => `
${pageHero({
  image: img("hudson-valley.webp"),
  alt: "The Hudson Valley in autumn",
  crumbs: [{ href: "/", label: "Home" }, { href: "about.html", label: "About" }],
  eyebrowText: "About",
  title: "Weekends, planned honestly",
  lead: "East Coast Weekends is a small independent guide to short trips from New York. No sponsored rankings, no ten-stop checklists, no invented fares.",
  meta: metaItems("Independent", "Train-first", "Fares checked November 2026"),
})}

<section class="section">
  <div class="container">
    <div class="prose" style="max-width:760px;margin:0 auto">
      <h2>How we choose destinations</h2>
      <p>A place makes the site if the journey leaves enough of the weekend to enjoy it. We start with the train timetable, then build the two days around what is actually open, then check the cost of the trip end to end.</p>
      <h2>How we check fares and hours</h2>
      <p>Train times and fares come from the operator's own timetable and booking pages; opening hours come from the venue. Prices are the adult "from" rates checked on the date shown on each guide. Dynamic pricing means the fare at checkout can be higher.</p>
      <h2>Independence</h2>
      <p>No venue or hotel pays to appear. When we link to an official ticket page it is because that is the correct place to book, not because we earn a commission. If that changes, the disclosure will be on the page.</p>
      <h2>Corrections</h2>
      <p>If a train time, fare or opening hour has changed, tell us and we will fix it. The checked date at the top of each guide is the date the facts were last verified.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One weekend idea a month", text: "A short email with one trip worth booking and what it costs.", source: "about" })}
  </div>
</section>
`,
};
