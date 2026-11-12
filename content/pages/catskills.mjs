import { pageHero, sectionHead, day, table, callout, faq, newsletter, ctaBand, pageNav, card, img, metaItems, eyebrow } from "../components.mjs";

export default {
  path: "catskills.html",
  navSection: "destinations",
  bodyClass: "page-inner",
  title: "Catskills Weekend from NYC",
  description: "A Catskills weekend from New York: hiking, small towns and where to stay, with driving and bus options from the city.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/hudson-valley.webp",
  render: () => `
${pageHero({
  image: img("hudson-valley.webp"),
  alt: "Wooded hills and water in the Catskills",
  crumbs: [{ href: "/", label: "Home" }, { href: "destinations.html", label: "Destinations" }, { href: "catskills.html", label: "Catskills" }],
  eyebrowText: "Weekend guide",
  title: "The Catskills in two nights",
  lead: "Mountains, small towns and a slower pace — but this one needs a car or a bus, not a Metro-North ticket.",
  meta: metaItems("~2h30 by car; bus ~2h45", "Bus ~$60–70 RT; car fuel/tolls", "2 nights", "Hiking, towns, autumn"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Journey</span><span class="fact__value">~2h30 by car; bus ~2h45</span></div>
      <div class="fact"><span class="fact__label">Cost</span><span class="fact__value">Bus ~$60–70 RT; car fuel/tolls</span></div>
      <div class="fact"><span class="fact__label">Nights</span><span class="fact__value">2 nights</span></div>
      <div class="fact"><span class="fact__label">Best for</span><span class="fact__value">Hiking, towns, autumn</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why go")}
        <h2>The mountain weekend</h2>
        <p class="lead">The Catskills are close enough for two nights and big enough to feel like a real break. Base in Phoenicia or Woodstock and let the weather decide the day.</p>
        <p class="muted">Without a car, the Trailways bus from Port Authority gets you to Phoenicia, and local taxis cover the trailheads. With a car, the options multiply: Kaaterskill Falls, the Devil's Path and the towns along Route 28.</p>
      </div>
      <div class="split__media">
        <img src="${img("hudson-valley.webp")}" alt="Wooded hills and water in the Catskills" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "What to do", title: "Three good anchors", lead: "One big walk, one town, one slow morning." })}
    <div class="grid grid--3">
      ${[card({ kicker: "Walk", title: "Kaaterskill Falls", text: "The classic Catskills walk. Parking is limited and the trail can be icy; check conditions first.", foot: `<span class="link-arrow">Check trail conditions</span>` }), card({ kicker: "Town", title: "Phoenicia", text: "A small main street, a river and good coffee. The easiest base without a car.", foot: `<span class="link-arrow">Walk Main Street</span>` }), card({ kicker: "Town", title: "Woodstock", text: "Shops, food and a short drive to Overlook Mountain. Busier than Phoenicia.", foot: `<span class="link-arrow">Plan a half-day</span>` })].join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The plan", title: "Two nights, two days", lead: "Arrive Friday, walk Saturday, drive home Sunday." })}
    <div class="day-plan">
      ${[day({ number: "01", label: "Friday", title: "Arrive", text: "Bus or drive up, check in, dinner in town. Keep the evening short.", stops: [{ what: "Trailways bus or car", where: "Port Authority or Route 28" }, { what: "Dinner in Phoenicia", where: "Main Street" }] }), day({ number: "02", label: "Saturday", title: "The big walk", text: "Kaaterskill Falls in the morning, a late lunch, then Woodstock or a shorter river walk in the afternoon.", stops: [{ what: "Kaaterskill Falls", where: "Trailhead parking" }, { what: "Woodstock", where: "20 minutes by car" }, { what: "Dinner", where: "Phoenicia" }] })].join("")}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({ eyebrowText: "What it costs", title: "A realistic budget", lead: "Per person, excluding shopping." })}
        ${table({ caption: "Catskills weekend costs", head: ["Item", "Typical", "Notes"], rows: [["Bus", "$60–70", "Round trip from Port Authority"], ["Cabin or inn", "$220–380", "Two nights"], ["Car", "fuel + tolls", "If driving"], ["Food", "$100–140", "Two dinners, two lunches"]] })}
      </div>
      <div>
        ${sectionHead({ eyebrowText: "Practical", title: "What to know", lead: "" })}
        callout({ icon: "◆", title: "Book the bus early", text: "Trailways seats are limited, especially in leaf season." }), callout({ icon: "◆", title: "Check trail conditions", text: "Ice and closures are common outside summer; check before committing to a long walk." }), callout({ icon: "◆", title: "Autumn fills fast", text: "October weekends book out weeks ahead." })
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "__FAQ_TITLE__", lead: "" })}
    ${faq([{ q: "Can I do it without a car?", a: "<p>Yes: bus to Phoenicia and taxis to trailheads. It is easier with a car, especially for Kaaterskill Falls.</p>" }, { q: "Is two nights enough?", a: "<p>Yes. One full day is enough for a big walk and a town; two nights keep it relaxed.</p>" }, { q: "When should I go?", a: "<p>Late spring to autumn for walking; winter needs proper gear and flexible plans.</p>" }])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One weekend idea a month", text: "A short email with one trip worth booking and what it costs.", source: "catskills" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Compare", title: "Other weekends", text: "All destinations compared by journey time and what they are best for.", actions: `<a class="btn" href="weekends.html">See all weekends</a>` })}

${pageNav({ prev: { href: "destinations.html", label: "All destinations" }, next: { href: "weekends.html", label: "Compare weekends" } })}
`,
};
