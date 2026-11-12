import { pageHero, sectionHead, day, table, callout, faq, newsletter, ctaBand, pageNav, card, img, metaItems, eyebrow } from "../components.mjs";

export default {
  path: "cape-may.html",
  navSection: "destinations",
  bodyClass: "page-inner",
  title: "Cape May Weekend from NYC",
  description: "A Cape May weekend from New York: Victorian streets, beaches and birding at the southern tip of New Jersey, with driving and bus options.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/brooklyn-bridge-park.webp",
  render: () => `
${pageHero({
  image: img("brooklyn-bridge-park.webp"),
  alt: "Victorian houses and a beach at Cape May, New Jersey",
  crumbs: [{ href: "/", label: "Home" }, { href: "destinations.html", label: "Destinations" }, { href: "cape-may.html", label: "Cape May" }],
  eyebrowText: "Weekend guide",
  title: "Cape May, at the tip of New Jersey",
  lead: "Three hours by car and a different century: Victorian streets, a wide beach and some of the best birding on the East Coast.",
  meta: metaItems("~3h by car; seasonal bus", "Fuel/tolls; bus extra", "2 nights", "Victorian streets, beach, birding"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Journey</span><span class="fact__value">~3h by car; seasonal bus</span></div>
      <div class="fact"><span class="fact__label">Cost</span><span class="fact__value">Fuel/tolls; bus extra</span></div>
      <div class="fact"><span class="fact__label">Nights</span><span class="fact__value">2 nights</span></div>
      <div class="fact"><span class="fact__label">Best for</span><span class="fact__value">Victorian streets, beach, birding</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why go")}
        <h2>The quiet end of the shore</h2>
        <p class="lead">Cape May is the anti-Asbury: no boardwalk crowds, a historic district of painted Victorians and a beach that stays calm even in August.</p>
        <p class="muted">A car is easiest. Cape May–Lewes Ferry connects to Delaware, which makes a two-state loop possible. Spring and autumn are birding season; summer is beach season; the town is quietest in winter.</p>
      </div>
      <div class="split__media">
        <img src="${img("brooklyn-bridge-park.webp")}" alt="Victorian houses and a beach at Cape May, New Jersey" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "What to do", title: "Three anchors", lead: "One street, one beach, one walk." })}
    <div class="grid grid--3">
      ${[card({ kicker: "Town", title: "Historic district", text: "Painted Victorians, B&Bs and a walkable centre. Best in the morning.", foot: `<span class="link-arrow">Walk Jackson Street</span>` }), card({ kicker: "Beach", title: "Cape May beach", text: "Wide, calm and seasonal. Beach tags are required in summer.", foot: `<span class="link-arrow">Check badge prices</span>` }), card({ kicker: "Nature", title: "Cape May Point", text: "Birding, the lighthouse and the beach at the very tip.", foot: `<span class="link-arrow">Check seasonal hours</span>` })].join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The plan", title: "Two nights", lead: "Arrive Friday, beach Saturday, home Sunday." })}
    <div class="day-plan">
      ${[day({ number: "01", label: "Friday", title: "Arrive", text: "Drive down, check in, walk the historic district before dinner.", stops: [{ what: "Drive from New York", where: "Garden State Parkway" }, { what: "Historic district", where: "Jackson Street" }] }), day({ number: "02", label: "Saturday", title: "Beach and point", text: "Beach in the morning, Cape May Point and the lighthouse in the afternoon.", stops: [{ what: "Cape May beach", where: "Beach Avenue" }, { what: "Cape May Point", where: "Lighthouse" }] })].join("")}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({ eyebrowText: "What it costs", title: "A realistic budget", lead: "Per person, excluding shopping." })}
        ${table({ caption: "Cape May weekend costs", head: ["Item", "Typical", "Notes"], rows: [["Car", "fuel + tolls", "~3h each way"], ["Hotel", "$260–420", "Two nights, seasonal"], ["Beach tags", "$10–15", "Seasonal"], ["Food", "$120–170", "Two dinners, two lunches"]] })}
      </div>
      <div>
        ${sectionHead({ eyebrowText: "Practical", title: "What to know", lead: "" })}
        callout({ icon: "◆", title: "Book summer early", text: "Cape May fills up for summer weekends; book weeks ahead." }), callout({ icon: "◆", title: "Bring the car", text: "The bus is seasonal and slow; a car makes the point and the ferry easy." }), callout({ icon: "◆", title: "Shoulder season is best", text: "Late spring and early autumn are quieter and cheaper." })
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "__FAQ_TITLE__", lead: "" })}
    ${faq([{ q: "Can I do it without a car?", a: "<p>Seasonal buses exist but are slow. A car is the practical option.</p>" }, { q: "Is two nights enough?", a: "<p>Yes for the town and beach; three nights let you add the ferry or a birding morning.</p>" }, { q: "When is best?", a: "<p>Late spring and early autumn for quiet; summer for the beach.</p>" }])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One weekend idea a month", text: "A short email with one trip worth booking and what it costs.", source: "cape-may" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Compare", title: "Other weekends", text: "All destinations compared by journey time and what they are best for.", actions: `<a class="btn" href="weekends.html">See all weekends</a>` })}

${pageNav({ prev: { href: "destinations.html", label: "All destinations" }, next: { href: "weekends.html", label: "Compare weekends" } })}
`,
};
