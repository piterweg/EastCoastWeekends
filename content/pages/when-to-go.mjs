import { pageHero, sectionHead, table, card, faq, newsletter, ctaBand, img, metaItems } from "../components.mjs";

export default {
  path: "when-to-go.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "When to Go: East Coast Weekends by Season",
  description: "A season-by-season guide to East Coast weekends from New York: where to go in spring, summer, autumn and winter, and what each season costs.",
  priority: "0.7",
  changefreq: "monthly",
  ogImage: "assets/img/hudson-valley.webp",
  render: () => `
${pageHero({
  image: img("hudson-valley.webp"),
  alt: "The Hudson Valley in autumn",
  crumbs: [{ href: "/", label: "Home" }, { href: "when-to-go.html", label: "When to go" }],
  eyebrowText: "Seasonality",
  title: "When to go, by season",
  lead: "The East Coast changes more than the postcards suggest. The beach is a summer trip; the hills are an autumn one; the cities work all year.",
  meta: metaItems("Four seasons", "Shoulder-season value", "Weather-first"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The year", title: "Four seasons, four different weekends", lead: "" })}
    ${table({ caption: "Where to go by season", head: ["Season", "Best destinations", "Why", "Watch out for"], rows: [
      ["Spring (Mar–May)", "Washington, Philadelphia, Hudson Valley", "Museums and parks before the heat", "Rain; blossom weekends are busy"],
      ["Summer (Jun–Aug)", "Jersey Shore, Cape May, Atlantic City", "Beach and boardwalk", "Peak prices; book early"],
      ["Autumn (Sep–Nov)", "Hudson Valley, Berkshires, Catskills, Finger Lakes", "Foliage and harvest", "Leaf season fills hotels"],
      ["Winter (Dec–Feb)", "Philadelphia, Boston, Washington", "Museums, food, lower prices", "Short days; some seasonal closures"],
    ] })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "In practice", title: "Three seasonal rules", lead: "" })}
    <div class="grid grid--3">
      ${card({ kicker: "Spring", title: "Go south first", text: "Washington and Philadelphia warm up earlier than the mountains.", foot: "" })}
      ${card({ kicker: "Summer", title: "Book the shore in May", text: "Jersey Shore and Cape May weekends sell out by early summer.", foot: "" })}
      ${card({ kicker: "Autumn", title: "Chase the foliage north", text: "The Hudson Valley and Berkshires peak before the city does.", foot: "" })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Seasonal questions", lead: "" })}
    ${faq([
      { q: "When is the cheapest weekend?", a: "<p>Late autumn and winter outside holidays, especially in the cities. The shore is cheapest in shoulder season but many places close.</p>" },
      { q: "When is leaf season?", a: "<p>Usually late September to early November, moving south as the weeks pass. Check local foliage reports before booking.</p>" },
      { q: "Is summer a good time for the cities?", a: "<p>It is hot and busy. If you go, plan museums and early mornings; save the walking for spring or autumn.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One weekend idea a month", text: "A short email with one trip worth booking and what it costs.", source: "when-to-go" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Plan", title: "Pick a weekend", text: "Compare journey times, fares and the number of nights each trip needs.", actions: `<a class="btn" href="weekends.html">Compare weekends</a>` })}
`,
};
