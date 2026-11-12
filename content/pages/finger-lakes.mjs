import { pageHero, sectionHead, day, table, callout, faq, newsletter, ctaBand, pageNav, card, img, metaItems, eyebrow } from "../components.mjs";

export default {
  path: "finger-lakes.html",
  navSection: "destinations",
  bodyClass: "page-inner",
  title: "Finger Lakes Weekend from NYC",
  description: "A Finger Lakes weekend from New York: Watkins Glen, Seneca Lake wineries and Ithaca, with driving times and where to stay.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/niagara-falls.webp",
  render: () => `
${pageHero({
  image: img("niagara-falls.webp"),
  alt: "A gorge and lake in the Finger Lakes region",
  crumbs: [{ href: "/", label: "Home" }, { href: "destinations.html", label: "Destinations" }, { href: "finger-lakes.html", label: "Finger Lakes" }],
  eyebrowText: "Weekend guide",
  title: "The Finger Lakes, if you have three days",
  lead: "This is the longest trip on the site: four and a half hours by car. Go for two or three nights, not one.",
  meta: metaItems("~4h30–5h by car", "Fuel + tolls; flights extra", "2–3 nights", "Wine, gorges, lakes"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Journey</span><span class="fact__value">~4h30–5h by car</span></div>
      <div class="fact"><span class="fact__label">Cost</span><span class="fact__value">Fuel + tolls; flights extra</span></div>
      <div class="fact"><span class="fact__label">Nights</span><span class="fact__value">2–3 nights</span></div>
      <div class="fact"><span class="fact__label">Best for</span><span class="fact__value">Wine, gorges, lakes</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why go")}
        <h2>The long-weekend exception</h2>
        <p class="lead">The Finger Lakes reward time: wine trails around Seneca and Cayuga, the Watkins Glen gorge and Ithaca's gorges and food.</p>
        <p class="muted">A car is essential. Base in Watkins Glen, Geneva or Ithaca. Two nights is the minimum; three lets you do wine one day and the gorge and Ithaca the next.</p>
      </div>
      <div class="split__media">
        <img src="${img("niagara-falls.webp")}" alt="A gorge and lake in the Finger Lakes region" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "What to do", title: "Three anchors", lead: "One gorge, one wine trail, one lake town." })}
    <div class="grid grid--3">
      ${[card({ kicker: "Gorge", title: "Watkins Glen State Park", text: "The gorge trail is the reason many people come. Go early; it is busy in summer.", foot: `<span class="link-arrow">Check trail status</span>` }), card({ kicker: "Wine", title: "Seneca Lake wine trail", text: "Tasting rooms around the lake; book a driver or spits and a designated driver.", foot: `<span class="link-arrow">Plan a route</span>` }), card({ kicker: "Town", title: "Ithaca", text: "Gorges, a farmers market and good food at the southern end of Cayuga Lake.", foot: `<span class="link-arrow">Walk the Commons</span>` })].join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The plan", title: "Two nights, two full days", lead: "Drive Friday, gorge Saturday, wine Sunday, home Monday if you can." })}
    <div class="day-plan">
      ${[day({ number: "01", label: "Friday", title: "Drive", text: "Four and a half hours, check in, early dinner. Keep the evening short.", stops: [{ what: "Drive from New York", where: "Route 17 / I-86" }, { what: "Dinner", where: "Watkins Glen or Geneva" }] }), day({ number: "02", label: "Saturday", title: "Gorge and lake", text: "Watkins Glen gorge early, then a lake town and a winery or two in the afternoon.", stops: [{ what: "Watkins Glen State Park", where: "Gorge trail" }, { what: "Seneca Lake", where: "Wineries" }] })].join("")}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({ eyebrowText: "What it costs", title: "A realistic budget", lead: "Per person, excluding shopping." })}
        ${table({ caption: "Finger Lakes weekend costs", head: ["Item", "Typical", "Notes"], rows: [["Car", "fuel + tolls", "~9h round trip"], ["Hotel", "$240–420", "Two nights"], ["Wine tasting", "$10–20", "Per winery, often waived with purchase"], ["Watkins Glen", "$10", "Parking/entry, check current"], ["Food", "$120–180", "Two dinners, two lunches"]] })}
      </div>
      <div>
        ${sectionHead({ eyebrowText: "Practical", title: "What to know", lead: "" })}
        callout({ icon: "◆", title: "Do not attempt it in one night", text: "The drive is too long for a one-night stay to feel worth it." }), callout({ icon: "◆", title: "Book a wine driver", text: "Tasting rooms add up; a local driver or taxi is the responsible option." }), callout({ icon: "◆", title: "Summer and fall are peak", text: "Book hotels and tasting slots ahead." })
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "__FAQ_TITLE__", lead: "" })}
    ${faq([{ q: "Can I do it without a car?", a: "<p>Not practically. Fly to Rochester or Ithaca and rent a car if you do not want to drive from New York.</p>" }, { q: "How many nights?", a: "<p>Two minimum, three better. The drive is four and a half hours each way.</p>" }, { q: "When is best?", a: "<p>Summer for the lake and early autumn for wine and foliage.</p>" }])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One weekend idea a month", text: "A short email with one trip worth booking and what it costs.", source: "finger-lakes" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Compare", title: "Other weekends", text: "All destinations compared by journey time and what they are best for.", actions: `<a class="btn" href="weekends.html">See all weekends</a>` })}

${pageNav({ prev: { href: "destinations.html", label: "All destinations" }, next: { href: "weekends.html", label: "Compare weekends" } })}
`,
};
