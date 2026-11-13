import { pageHero, sectionHead, day, card, table, callout, faq, newsletter, ctaBand, pageNav, img, metaItems, eyebrow } from "../components.mjs";

export default {
  path: "philadelphia.html",
  navSection: "destinations",
  bodyClass: "page-inner",
  title: "Philadelphia Weekend from NYC",
  description: "A Philadelphia weekend from New York: Independence Hall, Reading Terminal Market, the Rocky Steps and where to stay, with Amtrak times and fares.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/philadelphia-skyline.webp",
  render: () => `
${pageHero({
  image: img("philadelphia-skyline.webp"),
  alt: "The Philadelphia skyline at sunset across the Schuylkill River",
  crumbs: [{ href: "/", label: "Home" }, { href: "destinations.html", label: "Destinations" }, { href: "philadelphia.html", label: "Philadelphia" }],
  eyebrowText: "Weekend guide",
  title: "Philadelphia in two days",
  lead: "The closest big-city weekend: history in the morning, market lunch, a museum afternoon and a walk along the river.",
  meta: metaItems("1h05–1h25 by Amtrak", "$40–150 round trip", "1 night", "History, food, walking"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Journey</span><span class="fact__value">1h05–1h25 by Amtrak</span></div>
      <div class="fact"><span class="fact__label">Round-trip fare</span><span class="fact__value">$40–150 round trip</span></div>
      <div class="fact"><span class="fact__label">Nights</span><span class="fact__value">1 night</span></div>
      <div class="fact"><span class="fact__label">Best for</span><span class="fact__value">History, food, walking</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why go")}
        <h2>The most walkable weekend on the East Coast</h2>
        <p class="lead">Center City is compact and flat: Independence Hall, the market and the museum district are all within a long walk or a short bus ride.</p>
        <p class="muted">Amtrak from Penn Station puts you at 30th Street in about an hour; NJ Transit plus SEPTA is slower and much cheaper. Stay in Center City and you will not need a car or a subway pass. The one thing to book ahead is Independence Hall, which is timed and free.</p>
      </div>
      <div class="split__media">
        <img src="${img("philadelphia-skyline.webp")}" alt="The Philadelphia skyline at sunset across the Schuylkill River" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "What to do", title: "What actually matters", lead: "Two days is enough for the old city and one museum — not everything." })}
    <div class="grid grid--3">
      ${[card({ kicker: "History", title: "Independence Hall", text: "Timed, free tickets from the visitor centre. The Liberty Bell is next door and needs no ticket.", foot: `<span class="link-arrow">Book the timed slot</span>` }), card({ kicker: "Food", title: "Reading Terminal Market", text: "A covered market with dozens of counters. Go hungry and go early; it is busiest at lunch.", foot: `<span class="link-arrow">Allow an hour</span>` }), card({ kicker: "Museum", title: "Philadelphia Museum of Art", text: "The art is excellent and the steps are the photo. Allow three hours, or choose the Barnes instead.", foot: `<span class="link-arrow">Check opening days</span>` })].join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The plan", title: "One full day plus one morning", lead: "Arrive Friday night or early Saturday; leave Sunday afternoon." })}
    <div class="day-plan">
      ${[day({ number: "01", label: "Saturday", title: "Old City and the market", text: "Independence Hall first (timed ticket), then the Liberty Bell and a walk through Old City. Lunch at Reading Terminal Market, afternoon at the museum, dinner in Center City.", stops: [{ what: "Independence Hall", where: "Old City" }, { what: "Reading Terminal Market", where: "12th and Arch" }, { what: "Museum of Art", where: "Benjamin Franklin Parkway" }] }), day({ number: "02", label: "Sunday", title: "Rittenhouse and the river", text: "Brunch in Rittenhouse, a walk along the Schuylkill, then the train home. If it rains, swap in the Barnes Foundation.", stops: [{ what: "Rittenhouse Square", where: "Center City" }, { what: "Schuylkill River Trail", where: "Behind the museum" }, { what: "30th Street Station", where: "Amtrak home" }] })].join("")}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({ eyebrowText: "What it costs", title: "What the weekend costs", lead: "Per person, before shopping." })}
        ${table({ caption: "Philadelphia weekend costs", head: ["Item", "Typical", "Notes"], rows: [["Train", "$40–150", "Amtrak; NJT+SEPTA is cheaper"], ["Hotel", "$180–280", "Center City, one night"], ["Independence Hall", "Free", "Timed ticket, book ahead"], ["Museum", "$25–30", "Check current admission"], ["Food", "$70–110", "Market lunch, one dinner"]] })}
      </div>
      <div>
        ${sectionHead({ eyebrowText: "Practical", title: "What to know before you go", lead: "" })}
        ${callout({ icon: "◆", title: "Take the earliest train", text: "An 8am departure gives you most of Saturday; a 10am one does not." }), callout({ icon: "◆", title: "Book Independence Hall first", text: "Timed free tickets sell out on weekends. Everything else can be flexible." }), callout({ icon: "◆", title: "Skip the car", text: "Center City is walkable and parking costs more than a day of transit." })}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Philadelphia questions", lead: "" })}
    ${faq([{ q: "Is one night enough?", a: "<p>Yes. One full Saturday and a Sunday morning covers the old city and one museum.</p>" }, { q: "Amtrak or NJ Transit?", a: "<p>Amtrak is faster and more comfortable; NJ Transit to Trenton plus SEPTA is slower but can be much cheaper.</p>" }, { q: "Where should I stay?", a: "<p>Center City, near Rittenhouse or Market East. Both are walkable to the old city and the market.</p>" }])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One weekend idea a month", text: "A short email with one trip worth booking and what it costs.", source: "philadelphia" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Compare", title: "Other weekends", text: "Five destinations, compared by journey time and what they are best for.", actions: `<a class="btn" href="weekends.html">See all weekends</a>` })}

${pageNav({ prev: { href: "hudson-valley.html", label: "Hudson Valley" }, next: { href: "boston.html", label: "Boston" } })}
`,
};
