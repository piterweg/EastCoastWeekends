import { pageHero, sectionHead, day, card, table, callout, faq, newsletter, ctaBand, pageNav, img, metaItems, eyebrow } from "../components.mjs";

export default {
  path: "boston.html",
  navSection: "destinations",
  bodyClass: "page-inner",
  title: "Boston Weekend from NYC",
  description: "A Boston weekend from New York: the Freedom Trail, Beacon Hill, the North End and where to stay, with Amtrak times and fares.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/boston-skyline.webp",
  render: () => `
${pageHero({
  image: img("boston-skyline.webp"),
  alt: "The Boston skyline across the Charles River",
  crumbs: [{ href: "/", label: "Home" }, { href: "destinations.html", label: "Destinations" }, { href: "boston.html", label: "Boston" }],
  eyebrowText: "Weekend guide",
  title: "Boston in a weekend",
  lead: "Three and a half hours by train, then a compact city you can cross on foot: the Freedom Trail, Beacon Hill and the North End.",
  meta: metaItems("3h30–4h15 by Amtrak", "$80–250 round trip", "1–2 nights", "History, walking, seafood"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Journey</span><span class="fact__value">3h30–4h15 by Amtrak</span></div>
      <div class="fact"><span class="fact__label">Round-trip fare</span><span class="fact__value">$80–250 round trip</span></div>
      <div class="fact"><span class="fact__label">Nights</span><span class="fact__value">1–2 nights</span></div>
      <div class="fact"><span class="fact__label">Best for</span><span class="fact__value">History, walking, seafood</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why go")}
        <h2>A city built for walking</h2>
        <p class="lead">Boston's historic core is small. The Freedom Trail connects the main sights in a single line, and the North End is the reward at the end of it.</p>
        <p class="muted">Stay in Back Bay or near Boston Common. The train arrives at South Station and the T gets you anywhere else. Two nights make the weekend relaxed; one night means choosing between the trail and a museum.</p>
      </div>
      <div class="split__media">
        <img src="${img("boston-skyline.webp")}" alt="The Boston skyline across the Charles River" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "What to do", title: "Three stops that earn their place", lead: "The trail, the hill and the North End — everything else is a bonus." })}
    <div class="grid grid--3">
      ${[card({ kicker: "History", title: "The Freedom Trail", text: "A red-brick line through the city's revolutionary sites. Walk it in one direction and allow half a day.", foot: `<span class="link-arrow">Start at Boston Common</span>` }), card({ kicker: "Neighbourhood", title: "Beacon Hill", text: "Brick sidewalks, gas lamps and Louisburg Square. Best in the morning before the tour groups.", foot: `<span class="link-arrow">Walk Charles Street</span>` }), card({ kicker: "Food", title: "The North End", text: "Italian bakeries, restaurants and narrow streets. Finish the trail here for lunch or dinner.", foot: `<span class="link-arrow">Go beyond Hanover Street</span>` })].join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The plan", title: "Two days in Boston", lead: "One day on the trail, one day on the water and in a museum." })}
    <div class="day-plan">
      ${[day({ number: "01", label: "Saturday", title: "The Freedom Trail", text: "Start at Boston Common, follow the trail through the Granary and Paul Revere's house, and finish with lunch in the North End. Afternoon at Quincy Market and the waterfront.", stops: [{ what: "Boston Common", where: "Park Street" }, { what: "Freedom Trail", where: "Red-brick line" }, { what: "North End lunch", where: "Hanover Street" }] }), day({ number: "02", label: "Sunday", title: "Beacon Hill and the MFA", text: "Morning walk in Beacon Hill and along Charles Street, then the Museum of Fine Arts or the Isabella Stewart Gardner, depending on the weather.", stops: [{ what: "Beacon Hill", where: "Charles/MGH" }, { what: "Museum of Fine Arts", where: "Green Line E" }, { what: "South Station", where: "Amtrak home" }] })].join("")}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({ eyebrowText: "What it costs", title: "A realistic Boston budget", lead: "Per person, excluding shopping." })}
        ${table({ caption: "Boston weekend costs", head: ["Item", "Typical", "Notes"], rows: [["Train", "$80–250", "Amtrak; book early"], ["Hotel", "$220–380", "Back Bay or Downtown, one night"], ["Freedom Trail", "Free", "Self-guided; tours cost extra"], ["Museum", "$25–30", "Check current admission"], ["Food", "$90–140", "North End dinner, two lunches"]] })}
      </div>
      <div>
        ${sectionHead({ eyebrowText: "Practical", title: "What to know before you go", lead: "" })}
        ${callout({ icon: "◆", title: "Book the train early", text: "Boston fares climb quickly; the cheapest seats go first." }), callout({ icon: "◆", title: "Stay near the Common", text: "It puts the trail, Beacon Hill and the T within a short walk." }), callout({ icon: "◆", title: "Do not overplan Sunday", text: "Museums are busy on rainy weekends; pick one and book ahead." })}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Boston questions", lead: "" })}
    ${faq([{ q: "Is one night enough?", a: "<p>It is tight. One night lets you do the Freedom Trail and one neighbourhood; two nights add a museum and a slower Sunday.</p>" }, { q: "Do I need the T?", a: "<p>Mostly no. The historic core is walkable; the T is useful for the museum district and the airport.</p>" }, { q: "When is the best time?", a: "<p>Late spring and early autumn. Summer is busy; winter is cold but the museums are quiet.</p>" }])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One weekend idea a month", text: "A short email with one trip worth booking and what it costs.", source: "boston" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Compare", title: "Other weekends", text: "Five destinations, compared by journey time and what they are best for.", actions: `<a class="btn" href="weekends.html">See all weekends</a>` })}

${pageNav({ prev: { href: "philadelphia.html", label: "Philadelphia" }, next: { href: "washington-dc.html", label: "Washington, D.C." } })}
`,
};
