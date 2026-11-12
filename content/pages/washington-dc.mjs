import { pageHero, sectionHead, day, card, table, callout, faq, newsletter, ctaBand, pageNav, img, metaItems, eyebrow } from "../components.mjs";

export default {
  path: "washington-dc.html",
  navSection: "destinations",
  bodyClass: "page-inner",
  title: "Washington D.C. Weekend from NYC",
  description: "A Washington, D.C. weekend from New York: the National Mall, Smithsonian museums, the Capitol and Georgetown, with Amtrak times and fares.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/washington-capitol.webp",
  render: () => `
${pageHero({
  image: img("washington-capitol.webp"),
  alt: "The United States Capitol in Washington, D.C.",
  crumbs: [{ href: "/", label: "Home" }, { href: "destinations.html", label: "Destinations" }, { href: "washington-dc.html", label: "Washington, D.C." }],
  eyebrowText: "Weekend guide",
  title: "Washington in a weekend",
  lead: "Under three hours by train, then the Mall, the Smithsonian and a city that rewards an early start.",
  meta: metaItems("2h50–3h20 by Amtrak", "$80–250 round trip", "1–2 nights", "Museums, monuments, walking"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Journey</span><span class="fact__value">2h50–3h20 by Amtrak</span></div>
      <div class="fact"><span class="fact__label">Round-trip fare</span><span class="fact__value">$80–250 round trip</span></div>
      <div class="fact"><span class="fact__label">Nights</span><span class="fact__value">1–2 nights</span></div>
      <div class="fact"><span class="fact__label">Best for</span><span class="fact__value">Museums, monuments, walking</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why go")}
        <h2>The museum capital</h2>
        <p class="lead">The Smithsonian museums are free, which changes the maths: you can dip in for an hour and leave without guilt.</p>
        <p class="muted">Stay near the Mall or Dupont Circle. The train arrives at Union Station; the Metro gets you to the Mall in minutes. Book Capitol tours in advance and keep one evening free for the monuments, which are best after dark.</p>
      </div>
      <div class="split__media">
        <img src="${img("washington-capitol.webp")}" alt="The United States Capitol in Washington, D.C." width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "What to do", title: "Three things to prioritise", lead: "The Mall, one museum and the monuments at night." })}
    <div class="grid grid--3">
      ${[card({ kicker: "Museums", title: "Smithsonian museums", text: "Free entry. Pick two: Air and Space, Natural History or American History. Do not try all three.", foot: `<span class="link-arrow">Check opening hours</span>` }), card({ kicker: "Capitol", title: "US Capitol tour", text: "Free but timed; book ahead. The Library of Congress is next door and worth an hour.", foot: `<span class="link-arrow">Book through the official site</span>` }), card({ kicker: "Evening", title: "Monuments at night", text: "Walk from Lincoln to the Washington Monument after dark — quieter, cooler and better lit.", foot: `<span class="link-arrow">Start at Lincoln</span>` })].join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The plan", title: "A compact two days", lead: "Museums on Saturday, monuments and Georgetown on Sunday." })}
    <div class="day-plan">
      ${[day({ number: "01", label: "Saturday", title: "The Mall", text: "Capitol tour in the morning, one Smithsonian before lunch, a second after. Walk the Mall at sunset and eat near Penn Quarter.", stops: [{ what: "Capitol tour", where: "Capitol Visitor Center" }, { what: "Air and Space", where: "Independence Ave" }, { what: "Penn Quarter dinner", where: "7th Street" }] }), day({ number: "02", label: "Sunday", title: "Monuments and Georgetown", text: "Early walk around the monuments, then Georgetown for brunch and the canal. Train home late afternoon.", stops: [{ what: "Lincoln Memorial", where: "West end of the Mall" }, { what: "Georgetown", where: "M Street" }, { what: "Union Station", where: "Amtrak home" }] })].join("")}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({ eyebrowText: "What it costs", title: "What a D.C. weekend costs", lead: "Per person. Museums are free, which helps." })}
        ${table({ caption: "Washington weekend costs", head: ["Item", "Typical", "Notes"], rows: [["Train", "$80–250", "Amtrak; Acela is faster"], ["Hotel", "$220–380", "Near the Mall or Dupont"], ["Museums", "Free", "Smithsonian entry"], ["Capitol tour", "Free", "Timed, book ahead"], ["Food", "$90–140", "Two lunches, one dinner"]] })}
      </div>
      <div>
        ${sectionHead({ eyebrowText: "Practical", title: "What to know before you go", lead: "" })}
        ${callout({ icon: "◆", title: "Book the Capitol early", text: "Timed tours fill up; the Library of Congress is a good back-up." }), callout({ icon: "◆", title: "Use the Metro", text: "The Mall is long. Two stations save an hour of walking." }), callout({ icon: "◆", title: "Go to the monuments at night", text: "Fewer crowds, better light and cooler in summer." })}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "__FAQ_TITLE__", lead: "" })}
    ${faq([{ q: "Is a weekend enough?", a: "<p>Yes for the Mall, two museums and the monuments. The city rewards a second visit, but two days give a real sense of it.</p>" }, { q: "Are museums really free?", a: "<p>The Smithsonian museums are free. Special exhibitions and some tours are ticketed.</p>" }, { q: "Where should I stay?", a: "<p>Near the Mall for sightseeing, Dupont Circle for restaurants and a quieter evening.</p>" }])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One weekend idea a month", text: "A short email with one trip worth booking and what it costs.", source: "washington-dc" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Compare", title: "Other weekends", text: "Five destinations, compared by journey time and what they are best for.", actions: `<a class="btn" href="weekends.html">See all weekends</a>` })}

${pageNav({ prev: { href: "boston.html", label: "Boston" }, next: { href: "niagara-falls.html", label: "Niagara Falls" } })}
`,
};
