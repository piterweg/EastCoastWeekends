import { pageHero, sectionHead, day, table, callout, faq, newsletter, ctaBand, pageNav, card, img, metaItems, eyebrow } from "../components.mjs";

export default {
  path: "jersey-shore.html",
  navSection: "destinations",
  bodyClass: "page-inner",
  title: "Jersey Shore Weekend from NYC",
  description: "A Jersey Shore weekend from New York: Asbury Park, Ocean Grove and the boardwalk, with NJ Transit times and costs.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/brooklyn-bridge-park.webp",
  render: () => `
${pageHero({
  image: img("brooklyn-bridge-park.webp"),
  alt: "A wooden boardwalk and beach at the Jersey Shore",
  crumbs: [{ href: "/", label: "Home" }, { href: "destinations.html", label: "Destinations" }, { href: "jersey-shore.html", label: "Jersey Shore" }],
  eyebrowText: "Weekend guide",
  title: "The Jersey Shore by train",
  lead: "An hour fifty from Penn Station and you are on the boardwalk. The easiest summer weekend on this list.",
  meta: metaItems("~1h50 by NJ Transit", "~$35–40 round trip", "1–2 nights", "Beach, boardwalk, music"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Journey</span><span class="fact__value">~1h50 by NJ Transit</span></div>
      <div class="fact"><span class="fact__label">Cost</span><span class="fact__value">~$35–40 round trip</span></div>
      <div class="fact"><span class="fact__label">Nights</span><span class="fact__value">1–2 nights</span></div>
      <div class="fact"><span class="fact__label">Best for</span><span class="fact__value">Beach, boardwalk, music</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why go")}
        <h2>The beach, without a car</h2>
        <p class="lead">NJ Transit's North Jersey Coast Line runs from Penn Station to Asbury Park and beyond. The station is a short walk from the boardwalk and the beach.</p>
        <p class="muted">Asbury Park has the boardwalk, the Stone Pony and the restaurants; Ocean Grove next door is quieter and dry (no alcohol sales). Spring Lake is further south and prettier still. In summer, book the hotel early.</p>
      </div>
      <div class="split__media">
        <img src="${img("brooklyn-bridge-park.webp")}" alt="A wooden boardwalk and beach at the Jersey Shore" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "What to do", title: "Three reasons to go", lead: "Boardwalk, beach and one good evening." })}
    <div class="grid grid--3">
      ${[card({ kicker: "Boardwalk", title: "Asbury Park boardwalk", text: "The classic: beach, food, the Stone Pony and a walk to Ocean Grove.", foot: `<span class="link-arrow">Walk the boardwalk</span>` }), card({ kicker: "Beach", title: "The beach", text: "Seasonal badges are required in summer; buy one at the beach entrance.", foot: `<span class="link-arrow">Check badge prices</span>` }), card({ kicker: "Town", title: "Ocean Grove", text: "Victorian houses, a quiet beach and a dry town next to Asbury.", foot: `<span class="link-arrow">Walk the streets</span>` })].join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The plan", title: "Saturday and Sunday", lead: "Beach in the morning, boardwalk in the evening." })}
    <div class="day-plan">
      ${[day({ number: "01", label: "Saturday", title: "Beach and boardwalk", text: "Train down in the morning, beach in the afternoon, boardwalk and dinner in Asbury Park.", stops: [{ what: "NJ Transit to Asbury Park", where: "Penn Station" }, { what: "The beach", where: "Asbury Park" }, { what: "Boardwalk dinner", where: "Cookman Avenue" }] }), day({ number: "02", label: "Sunday", title: "Ocean Grove and home", text: "Walk to Ocean Grove for breakfast and the Victorian streets, then the train home.", stops: [{ what: "Ocean Grove", where: "20 minutes on foot" }, { what: "NJ Transit home", where: "Asbury Park station" }] })].join("")}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({ eyebrowText: "What it costs", title: "A realistic budget", lead: "Per person, excluding shopping." })}
        ${table({ caption: "Jersey Shore weekend costs", head: ["Item", "Typical", "Notes"], rows: [["Train", "$35–40", "NJ Transit round trip"], ["Hotel", "$180–320", "One or two nights, summer peak"], ["Beach badge", "$10–15", "Seasonal, check current price"], ["Food", "$80–120", "Two lunches, one dinner"]] })}
      </div>
      <div>
        ${sectionHead({ eyebrowText: "Practical", title: "What to know", lead: "" })}
        callout({ icon: "◆", title: "Summer weekends sell out", text: "Book the hotel and check train times early, especially in July and August." }), callout({ icon: "◆", title: "Buy the beach badge", text: "Most towns require one in season; it is checked on the sand." }), callout({ icon: "◆", title: "Off-season is quiet", text: "The boardwalk is still walkable, but many places close outside summer." })
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "__FAQ_TITLE__", lead: "" })}
    ${faq([{ q: "Do I need a car?", a: "<p>No. The train station is a short walk from the beach and boardwalk.</p>" }, { q: "Which town is best?", a: "<p>Asbury Park for food and music; Ocean Grove for quiet; Spring Lake for a prettier, pricier beach.</p>" }, { q: "When is the season?", a: "<p>Memorial Day to Labor Day for swimming; the boardwalk is open year-round.</p>" }])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One weekend idea a month", text: "A short email with one trip worth booking and what it costs.", source: "jersey-shore" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Compare", title: "Other weekends", text: "All destinations compared by journey time and what they are best for.", actions: `<a class="btn" href="weekends.html">See all weekends</a>` })}

${pageNav({ prev: { href: "destinations.html", label: "All destinations" }, next: { href: "weekends.html", label: "Compare weekends" } })}
`,
};
