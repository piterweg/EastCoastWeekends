import { pageHero, sectionHead, day, table, callout, faq, newsletter, ctaBand, pageNav, card, img, metaItems, eyebrow } from "../components.mjs";

export default {
  path: "atlantic-city.html",
  navSection: "destinations",
  bodyClass: "page-inner",
  title: "Atlantic City Weekend from NYC",
  description: "An Atlantic City weekend from New York: the boardwalk, the beach and the casinos, with NJ Transit bus times and costs.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/brooklyn-bridge-park.webp",
  render: () => `
${pageHero({
  image: img("brooklyn-bridge-park.webp"),
  alt: "The Atlantic City boardwalk and beach",
  crumbs: [{ href: "/", label: "Home" }, { href: "destinations.html", label: "Destinations" }, { href: "atlantic-city.html", label: "Atlantic City" }],
  eyebrowText: "Weekend guide",
  title: "Atlantic City by bus",
  lead: "Two and a half hours from Port Authority and you are on the boardwalk — the cheapest beach weekend on this site.",
  meta: metaItems("~2h20–2h45 by bus", "~$40–45 round trip", "1–2 nights", "Boardwalk, beach, casinos"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Journey</span><span class="fact__value">~2h20–2h45 by bus</span></div>
      <div class="fact"><span class="fact__label">Cost</span><span class="fact__value">~$40–45 round trip</span></div>
      <div class="fact"><span class="fact__label">Nights</span><span class="fact__value">1–2 nights</span></div>
      <div class="fact"><span class="fact__label">Best for</span><span class="fact__value">Boardwalk, beach, casinos</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why go")}
        <h2>The easy beach weekend</h2>
        <p class="lead">NJ Transit runs direct buses from Port Authority to Atlantic City. The boardwalk, the beach and the casinos are all within walking distance of the drop-off.</p>
        <p class="muted">It is not the prettiest town on the shore, but it is the easiest: no car, no parking, and enough indoor options if the weather turns. Steel Pier and the Absecon Lighthouse are the non-casino anchors.</p>
      </div>
      <div class="split__media">
        <img src="${img("brooklyn-bridge-park.webp")}" alt="The Atlantic City boardwalk and beach" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "What to do", title: "Three things to do", lead: "Boardwalk, beach, one indoor option." })}
    <div class="grid grid--3">
      ${[card({ kicker: "Boardwalk", title: "The boardwalk", text: "Four miles of beachfront; walk it early or at sunset.", foot: `<span class="link-arrow">Walk north to the inlet</span>` }), card({ kicker: "Beach", title: "The beach", text: "Free and wide, with lifeguards in season.", foot: `<span class="link-arrow">Check swimming hours</span>` }), card({ kicker: "Indoor", title: "Steel Pier and lighthouse", text: "Rides on the pier and the Absecon Lighthouse for a view.", foot: `<span class="link-arrow">Check seasonal hours</span>` })].join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The plan", title: "One night, one full day", lead: "Bus Saturday morning, boardwalk and beach, bus home Sunday." })}
    <div class="day-plan">
      ${[day({ number: "01", label: "Saturday", title: "Boardwalk", text: "Bus down, check in, beach and boardwalk, dinner near the pier.", stops: [{ what: "NJ Transit bus", where: "Port Authority" }, { what: "Boardwalk", where: "Beachfront" }] }), day({ number: "02", label: "Sunday", title: "Lighthouse and home", text: "Absecon Lighthouse or a last beach walk, then the bus home.", stops: [{ what: "Absecon Lighthouse", where: "North end" }, { what: "Bus home", where: "Atlantic City bus terminal" }] })].join("")}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({ eyebrowText: "What it costs", title: "A realistic budget", lead: "Per person, excluding shopping." })}
        ${table({ caption: "Atlantic City weekend costs", head: ["Item", "Typical", "Notes"], rows: [["Bus", "$40–45", "NJ Transit round trip"], ["Hotel", "$120–260", "Casino or boardwalk hotel"], ["Beach", "Free", "Lifeguards in season"], ["Food", "$80–120", "Two lunches, one dinner"]] })}
      </div>
      <div>
        ${sectionHead({ eyebrowText: "Practical", title: "What to know", lead: "" })}
        callout({ icon: "◆", title: "Book the bus ahead", text: "Weekend seats fill; check the return times before you go." }), callout({ icon: "◆", title: "Expect casino noise", text: "Boardwalk hotels vary; read recent reviews." }), callout({ icon: "◆", title: "Off-season is cheap", text: "Rates drop outside summer; the boardwalk still works." })
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "__FAQ_TITLE__", lead: "" })}
    ${faq([{ q: "Do I need a car?", a: "<p>No. The bus drops you within walking distance of the boardwalk.</p>" }, { q: "Is one night enough?", a: "<p>Yes for a beach and boardwalk weekend; two nights if you want a slower Sunday.</p>" }, { q: "When is best?", a: "<p>Summer for swimming; late spring and early autumn for cheap rates.</p>" }])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One weekend idea a month", text: "A short email with one trip worth booking and what it costs.", source: "atlantic-city" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Compare", title: "Other weekends", text: "All destinations compared by journey time and what they are best for.", actions: `<a class="btn" href="weekends.html">See all weekends</a>` })}

${pageNav({ prev: { href: "destinations.html", label: "All destinations" }, next: { href: "weekends.html", label: "Compare weekends" } })}
`,
};
