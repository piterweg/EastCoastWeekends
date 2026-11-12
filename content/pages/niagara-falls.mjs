import { pageHero, sectionHead, day, card, table, callout, faq, newsletter, ctaBand, pageNav, img, metaItems, eyebrow } from "../components.mjs";

export default {
  path: "niagara-falls.html",
  navSection: "destinations",
  bodyClass: "page-inner",
  title: "Niagara Falls Weekend from NYC",
  description: "A Niagara Falls weekend from New York: the falls, Maid of the Mist, Cave of the Winds and where to stay, with train and flight options.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/niagara-falls.webp",
  render: () => `
${pageHero({
  image: img("niagara-falls.webp"),
  alt: "Niagara Falls with mist rising from the gorge",
  crumbs: [{ href: "/", label: "Home" }, { href: "destinations.html", label: "Destinations" }, { href: "niagara-falls.html", label: "Niagara Falls" }],
  eyebrowText: "Weekend guide",
  title: "Niagara Falls in a weekend",
  lead: "The one trip here that needs two nights: the train is slow, the falls deserve a full day, and the border adds time.",
  meta: metaItems("~9h by train; 1h30 flight + drive", "$140–300 train; flights extra", "2 nights", "The falls, boat, gorge"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Journey</span><span class="fact__value">~9h by train; 1h30 flight + drive</span></div>
      <div class="fact"><span class="fact__label">Round-trip fare</span><span class="fact__value">$140–300 train; flights extra</span></div>
      <div class="fact"><span class="fact__label">Nights</span><span class="fact__value">2 nights</span></div>
      <div class="fact"><span class="fact__label">Best for</span><span class="fact__value">The falls, boat, gorge</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why go")}
        <h2>Plan around the journey</h2>
        <p class="lead">The Maple Leaf runs once a day from New York and takes about nine hours. Flying to Buffalo and driving forty minutes is faster but adds airport time.</p>
        <p class="muted">Two nights is the minimum: one to arrive, one full day at the falls, one to travel back. Stay on the Canadian side for the view or the New York side for the state park; bring a passport if you plan to cross.</p>
      </div>
      <div class="split__media">
        <img src="${img("niagara-falls.webp")}" alt="Niagara Falls with mist rising from the gorge" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "What to do", title: "What to book", lead: "The falls are free; the experiences are timed and seasonal." })}
    <div class="grid grid--3">
      ${[card({ kicker: "Boat", title: "Maid of the Mist", text: "The classic close-up. Seasonal, usually April to November; book a timed slot and expect to get wet.", foot: `<span class="link-arrow">Check the season</span>` }), card({ kicker: "Gorge", title: "Cave of the Winds", text: "Wooden walkways below the American Falls. Seasonal and weather-dependent; ponchos provided.", foot: `<span class="link-arrow">Book ahead</span>` }), card({ kicker: "State park", title: "Niagara Falls State Park", text: "Free to walk. The gorge trail and Prospect Point are the best free views.", foot: `<span class="link-arrow">Start at the visitor centre</span>` })].join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The plan", title: "Two nights, one full day", lead: "Arrive, see the falls, sleep, repeat." })}
    <div class="day-plan">
      ${[day({ number: "01", label: "Day one", title: "Arrive", text: "Train or flight to Buffalo, transfer to Niagara Falls, check in and walk to the falls for sunset. Early dinner near the park.", stops: [{ what: "Buffalo or Niagara Falls station", where: "Transfer by taxi or bus" }, { what: "Prospect Point", where: "First view of the falls" }] }), day({ number: "02", label: "Day two", title: "The falls properly", text: "Maid of the Mist in the morning, Cave of the Winds after lunch, then the gorge trail. Evening free.", stops: [{ what: "Maid of the Mist", where: "State park dock" }, { what: "Cave of the Winds", where: "Goat Island" }, { what: "Gorge trail", where: "Below Prospect Point" }] })].join("")}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({ eyebrowText: "What it costs", title: "A realistic Niagara budget", lead: "Per person, two nights." })}
        ${table({ caption: "Niagara Falls weekend costs", head: ["Item", "Typical", "Notes"], rows: [["Train", "$140–300", "Amtrak Maple Leaf, once daily"], ["Hotel", "$240–420", "Two nights, season-dependent"], ["Maid of the Mist", "$30–35", "Seasonal"], ["Cave of the Winds", "$20–25", "Seasonal"], ["Food", "$120–180", "Two dinners, two lunches"]] })}
      </div>
      <div>
        ${sectionHead({ eyebrowText: "Practical", title: "What to know before you go", lead: "" })}
        ${callout({ icon: "◆", title: "Bring a passport", text: "The Canadian side has the classic view; crossing needs documents and time." }), callout({ icon: "◆", title: "Book experiences ahead", text: "Summer slots sell out; the falls themselves do not." }), callout({ icon: "◆", title: "Do not attempt it as a day trip", text: "Nine hours each way leaves no time at the falls. Two nights is the minimum." })}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "__FAQ_TITLE__", lead: "" })}
    ${faq([{ q: "Can I do it as a day trip?", a: "<p>Not comfortably. The train is about nine hours each way, so two nights is the realistic minimum.</p>" }, { q: "Train or fly?", a: "<p>The train is scenic but slow. Flying to Buffalo is faster overall but adds airport time and transfers.</p>" }, { q: "Which side is better?", a: "<p>The Canadian side has the classic panoramic view; the New York side has the state park and Cave of the Winds. A passport lets you do both.</p>" }])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One weekend idea a month", text: "A short email with one trip worth booking and what it costs.", source: "niagara-falls" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Compare", title: "Other weekends", text: "Five destinations, compared by journey time and what they are best for.", actions: `<a class="btn" href="weekends.html">See all weekends</a>` })}

${pageNav({ prev: { href: "washington-dc.html", label: "Washington, D.C." }, next: { href: "weekends.html", label: "All weekends" } })}
`,
};
