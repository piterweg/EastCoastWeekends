import { pageHero, sectionHead, day, table, callout, faq, newsletter, ctaBand, pageNav, card, img, metaItems, eyebrow } from "../components.mjs";

export default {
  path: "berkshires.html",
  navSection: "destinations",
  bodyClass: "page-inner",
  title: "Berkshires Weekend from NYC",
  description: "A Berkshires weekend from New York: Mass MoCA, Tanglewood and Great Barrington, with Amtrak and driving options.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/boston-skyline.webp",
  render: () => `
${pageHero({
  image: img("boston-skyline.webp"),
  alt: "Green hills and a small town in the Berkshires",
  crumbs: [{ href: "/", label: "Home" }, { href: "destinations.html", label: "Destinations" }, { href: "berkshires.html", label: "Berkshires" }],
  eyebrowText: "Weekend guide",
  title: "The Berkshires in a weekend",
  lead: "Three and a half hours by train (once a day) or under three by car: museums, music and a countryside that feels further away than it is.",
  meta: metaItems("~3h30 by train; ~2h45 by car", "$70–120 RT train", "2 nights", "Art, music, countryside"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Journey</span><span class="fact__value">~3h30 by train; ~2h45 by car</span></div>
      <div class="fact"><span class="fact__label">Cost</span><span class="fact__value">$70–120 RT train</span></div>
      <div class="fact"><span class="fact__label">Nights</span><span class="fact__value">2 nights</span></div>
      <div class="fact"><span class="fact__label">Best for</span><span class="fact__value">Art, music, countryside</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why go")}
        <h2>Culture in the hills</h2>
        <p class="lead">The Berkshires pack a surprising amount into a small area: Mass MoCA in North Adams, Tanglewood in summer, and Great Barrington for food and shops.</p>
        <p class="muted">The Lake Shore Limited runs once a day to Pittsfield, so the train works if you plan around it. A car makes the towns and trailheads much easier. Base in Great Barrington or Lenox.</p>
      </div>
      <div class="split__media">
        <img src="${img("boston-skyline.webp")}" alt="Green hills and a small town in the Berkshires" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "What to do", title: "Three anchors", lead: "One museum, one concert (in season), one town." })}
    <div class="grid grid--3">
      ${[card({ kicker: "Art", title: "Mass MoCA", text: "A huge contemporary museum in a former factory. Allow half a day.", foot: `<span class="link-arrow">Check opening days</span>` }), card({ kicker: "Music", title: "Tanglewood", text: "The Boston Symphony's summer home. Book ahead and bring a blanket.", foot: `<span class="link-arrow">Seasonal, check dates</span>` }), card({ kicker: "Town", title: "Great Barrington", text: "Food, bookshops and a good base for the southern Berkshires.", foot: `<span class="link-arrow">Walk Main Street</span>` })].join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The plan", title: "Two nights", lead: "Arrive Friday, museum Saturday, home Sunday." })}
    <div class="day-plan">
      ${[day({ number: "01", label: "Friday", title: "Arrive", text: "Train or drive, check in, dinner in Great Barrington or Lenox.", stops: [{ what: "Lake Shore Limited or car", where: "Pittsfield" }, { what: "Dinner", where: "Great Barrington" }] }), day({ number: "02", label: "Saturday", title: "Mass MoCA", text: "North Adams in the morning, lunch, then a shorter walk or Tanglewood in the evening if in season.", stops: [{ what: "Mass MoCA", where: "North Adams" }, { what: "Tanglewood", where: "Lenox, summer only" }] })].join("")}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({ eyebrowText: "What it costs", title: "A realistic budget", lead: "Per person, excluding shopping." })}
        ${table({ caption: "Berkshires weekend costs", head: ["Item", "Typical", "Notes"], rows: [["Train", "$70–120", "Round trip, once daily"], ["Car", "fuel + tolls", "~2h45 each way"], ["Hotel", "$220–380", "Two nights"], ["Mass MoCA", "$25–30", "Check admission"], ["Food", "$110–150", "Two dinners, two lunches"]] })}
      </div>
      <div>
        ${sectionHead({ eyebrowText: "Practical", title: "What to know", lead: "" })}
        callout({ icon: "◆", title: "Check the train times first", text: "The Lake Shore Limited runs once a day; a car is more flexible." }), callout({ icon: "◆", title: "Book Tanglewood early", text: "Summer concerts sell out; lawn tickets are cheaper." }), callout({ icon: "◆", title: "Autumn is the peak", text: "Leaf season fills hotels; book weeks ahead." })
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Berkshires questions", lead: "" })}
    ${faq([{ q: "Train or car?", a: "<p>The train is scenic but once daily; a car makes the towns and trails much easier.</p>" }, { q: "Is two nights enough?", a: "<p>Yes for Mass MoCA and one town. Add a night for Tanglewood or a longer hike.</p>" }, { q: "When is Tanglewood?", a: "<p>Summer only; check the season dates and book ahead.</p>" }])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One weekend idea a month", text: "A short email with one trip worth booking and what it costs.", source: "berkshires" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Compare", title: "Other weekends", text: "All destinations compared by journey time and what they are best for.", actions: `<a class="btn" href="weekends.html">See all weekends</a>` })}

${pageNav({ prev: { href: "destinations.html", label: "All destinations" }, next: { href: "weekends.html", label: "Compare weekends" } })}
`,
};
