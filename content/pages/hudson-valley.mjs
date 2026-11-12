import { pageHero, sectionHead, day, card, table, callout, faq, newsletter, ctaBand, pageNav, img, metaItems, eyebrow } from "../components.mjs";

export default {
  path: "hudson-valley.html",
  navSection: "destinations",
  bodyClass: "page-inner",
  title: "Hudson Valley Weekend from NYC",
  description: "A car-free Hudson Valley weekend from New York: Dia Beacon, Storm King, Cold Spring and where to stay, with Metro-North times and costs.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/hudson-valley.webp",
  render: () => `
${pageHero({
  image: img("hudson-valley.webp"),
  alt: "The Hudson Valley in autumn, with the river and wooded hills",
  crumbs: [{ href: "/", label: "Home" }, { href: "destinations.html", label: "Destinations" }, { href: "hudson-valley.html", label: "Hudson Valley" }],
  eyebrowText: "Weekend guide",
  title: "The Hudson Valley, without a car",
  lead: "Dia Beacon, Storm King and a river town in one weekend — all reachable on the Metro-North Hudson Line.",
  meta: metaItems("1h20–1h30 from Grand Central", "~$35–55 round trip", "1–2 nights", "Art, river towns, walking"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Journey</span><span class="fact__value">1h20–1h30 from Grand Central</span></div>
      <div class="fact"><span class="fact__label">Round-trip fare</span><span class="fact__value">~$35–55 round trip</span></div>
      <div class="fact"><span class="fact__label">Nights</span><span class="fact__value">1–2 nights</span></div>
      <div class="fact"><span class="fact__label">Best for</span><span class="fact__value">Art, river towns, walking</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why go")}
        <h2>The easiest weekend out of New York</h2>
        <p class="lead">The Hudson Line runs along the river from Grand Central to Beacon and beyond. The trip is short enough to leave on Saturday morning and be in a gallery by lunch.</p>
        <p class="muted">Beacon is the practical base: the station, Dia Beacon and the main street are within walking distance. Storm King is a short taxi or bus ride away and is the reason many people come. Cold Spring, one stop south, is the other half of the weekend: a main street, a waterfront and a trailhead.</p>
      </div>
      <div class="split__media">
        <img src="${img("hudson-valley.webp")}" alt="The Hudson Valley in autumn, with the river and wooded hills" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "What to do", title: "Three things that justify the trip", lead: "Pick two. Trying to do all three makes it a driving weekend, not a train one." })}
    <div class="grid grid--3">
      ${[card({ kicker: "Art", title: "Dia Beacon", text: "A converted factory full of large-scale contemporary art, a short walk from the station. Allow two to three hours.", foot: `<span class="link-arrow">Check opening days</span>` }), card({ kicker: "Sculpture", title: "Storm King Art Center", text: "An open-air sculpture park in New Windsor. Taxi or seasonal shuttle from Beacon; allow half a day and check the season.", foot: `<span class="link-arrow">Book a timed slot</span>` }), card({ kicker: "Town", title: "Cold Spring", text: "One main street, a waterfront and a short uphill walk with river views. Best on the way home.", foot: `<span class="link-arrow">Walk the waterfront</span>` })].join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The plan", title: "Saturday and Sunday", lead: "One art stop per day, with the town in between." })}
    <div class="day-plan">
      ${[day({ number: "01", label: "Saturday", title: "Beacon", text: "Arrive by mid-morning, drop bags, then Dia Beacon before lunch. Afternoon on Main Street: coffee, bookshops, the riverfront. Dinner in Beacon.", stops: [{ what: "Metro-North from Grand Central", where: "Hudson Line to Beacon" }, { what: "Dia Beacon", where: "10 minutes on foot from the station" }, { what: "Main Street", where: "Coffee and dinner" }] }), day({ number: "02", label: "Sunday", title: "Storm King and Cold Spring", text: "Taxi to Storm King early, then back to Beacon and one stop to Cold Spring for the waterfront walk before the train home.", stops: [{ what: "Storm King Art Center", where: "Taxi from Beacon" }, { what: "Cold Spring waterfront", where: "One stop south" }, { what: "Metro-North home", where: "Cold Spring station" }] })].join("")}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({ eyebrowText: "What it costs", title: "A realistic budget", lead: "Per person, excluding shopping and gallery extras." })}
        ${table({ caption: "Hudson Valley weekend costs", head: ["Item", "Typical", "Notes"], rows: [["Train", "$35–55", "Metro-North round trip"], ["Hotel", "$180–320", "Beacon or Cold Spring, one night"], ["Dia Beacon", "$20", "Check the current admission"], ["Storm King", "$25–30", "Seasonal; taxi extra"], ["Food", "$80–120", "Two lunches, one dinner"]] })}
      </div>
      <div>
        ${sectionHead({ eyebrowText: "Practical", title: "What to know before you go", lead: "" })}
        ${callout({ icon: "◆", title: "Check Storm King's season", text: "It is not open all year. Check dates before you build the weekend around it." }), callout({ icon: "◆", title: "Book the hotel early in autumn", text: "Leaf season fills Beacon and Cold Spring weeks ahead." }), callout({ icon: "◆", title: "Buy train tickets in advance", text: "Metro-North off-peak fares are cheaper; the app saves the queue." })}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "__FAQ_TITLE__", lead: "" })}
    ${faq([{ q: "Do I need a car?", a: "<p>No. Beacon is walkable from the station and Storm King is a short taxi ride. A car makes Storm King easier but is not essential.</p>" }, { q: "Is one night enough?", a: "<p>Yes if you pick two of the three stops. Two nights let you add a longer walk and a slower Sunday.</p>" }, { q: "When is the best time?", a: "<p>Late spring and autumn for walking. Summer is green and busy; winter closes some sculpture parks.</p>" }])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One weekend idea a month", text: "A short email with one trip worth booking and what it costs.", source: "hudson-valley" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Compare", title: "Other weekends", text: "Five destinations, compared by journey time and what they are best for.", actions: `<a class="btn" href="weekends.html">See all weekends</a>` })}

${pageNav({ prev: { href: "weekends.html", label: "All weekends" }, next: { href: "philadelphia.html", label: "Philadelphia" } })}
`,
};
