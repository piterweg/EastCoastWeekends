import { heroHome, sectionHead, mediaCard, photoCard, callout, newsletter, ctaBand, btn, img, metaItems, eyebrow } from "../components.mjs";

export default {
  path: "index.html",
  navSection: "home",
  bodyClass: "page-home",
  title: "East Coast Weekends — Two-Day Trips from New York",
  fullTitle: true,
  description:
    "Independent guides to the best two- and three-day trips from New York: Hudson Valley, Philadelphia, Boston, Washington and Niagara, with train times and fares.",
  priority: "1.0",
  changefreq: "weekly",
  ogImage: "assets/img/hudson-valley.webp",
  render: () => `
${heroHome({
  image: img("hudson-valley.webp"),
  alt: "The Hudson Valley in autumn, with the river and wooded hills",
  eyebrowText: "East Coast Weekends",
  title: "Two days. One train. <em>A different pace.</em>",
  lead: "New York is a great city and a terrible place to spend every weekend. These are the trips worth the train fare — planned around what actually fits into two or three days.",
  actions: `${btn({ href: "weekends.html", label: "Browse weekends" })}${btn({ href: "destinations.html", label: "See destinations", variant: "ghost" })}`,
  meta: metaItems("<strong>11</strong> destinations", "<strong>2–3</strong> day plans", "<strong>Train-first</strong>", "<strong>Checked</strong> November 2026"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Start here",
      title: "Three weekends worth booking now",
      lead: "Each guide covers how to get there, what to do with two days, what it costs and the one mistake to avoid.",
      action: `<a class="link-arrow" href="weekends.html">All weekends</a>`,
    })}
    <div class="grid grid--3">
      ${mediaCard({ href: "hudson-valley.html", image: img("hudson-valley.webp"), alt: "The Hudson Valley in autumn", kicker: "1h20 by train", title: "Hudson Valley", text: "Dia Beacon, Storm King and a river town in one easy weekend.", meta: "2 days · car-free" })}
      ${mediaCard({ href: "philadelphia.html", image: img("philadelphia-skyline.webp"), alt: "The Philadelphia skyline at sunset", kicker: "1h05 by train", title: "Philadelphia", text: "Independence Hall, Reading Terminal Market and the Rocky Steps.", meta: "2 days · walkable" })}
      ${mediaCard({ href: "boston.html", image: img("boston-skyline.webp"), alt: "The Boston skyline across the Charles River", kicker: "3h30 by train", title: "Boston", text: "The Freedom Trail, Beacon Hill and the North End in a weekend.", meta: "2 days · history" })}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why this site exists")}
        <h2>Weekends are a different kind of travel</h2>
        <p class="lead">A two-day trip is not a short holiday. It is a tight loop: one train out, one base, two walks, one good dinner, one train back. Most guides ignore that shape and hand you a ten-item checklist.</p>
        <p class="muted">We plan around the journey first. If the train is four hours each way, the trip needs a night — or it needs a different destination. Every guide says which one it is, what the fare really looks like, and what to skip.</p>
        <div class="split__actions">
          ${btn({ href: "about.html", label: "How we plan", variant: "outline" })}
        </div>
      </div>
      <div class="split__media">
        <img src="${img("grand-central.webp")}" alt="Grand Central Terminal concourse, the starting point for many weekend trips" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The shortlist", title: "Eleven places worth the journey", lead: "Ranked by how much weekend you get for the travel time." })}
    <div class="grid grid--3">
      ${mediaCard({ href: "hudson-valley.html", image: img("hudson-valley.webp"), alt: "The Hudson Valley", kicker: "New York State", title: "Hudson Valley", text: "Art, river towns and the easiest car-free weekend from the city.", meta: "1h20 · Metro-North" })}
      ${mediaCard({ href: "philadelphia.html", image: img("philadelphia-skyline.webp"), alt: "Philadelphia skyline", kicker: "Pennsylvania", title: "Philadelphia", text: "The most walkable big-city weekend on the East Coast.", meta: "1h05 · Amtrak" })}
      ${mediaCard({ href: "boston.html", image: img("boston-skyline.webp"), alt: "Boston skyline", kicker: "Massachusetts", title: "Boston", text: "Compact, historic and best on foot from Back Bay.", meta: "3h30 · Amtrak" })}
      ${mediaCard({ href: "washington-dc.html", image: img("washington-capitol.webp"), alt: "The US Capitol in Washington, D.C.", kicker: "Washington, D.C.", title: "Washington, D.C.", text: "Museums, the Mall and a city that rewards an early start.", meta: "2h50 · Amtrak" })}
      ${mediaCard({ href: "niagara-falls.html", image: img("niagara-falls.webp"), alt: "Niagara Falls", kicker: "New York State", title: "Niagara Falls", text: "The one trip on this list that needs two nights, not one.", meta: "Overnight · train or fly" })}
      ${mediaCard({ href: "catskills.html", image: img("hudson-valley.webp"), alt: "Wooded hills in the Catskills", kicker: "New York State", title: "Catskills", text: "Hiking, small towns and a slower pace — car or bus.", meta: "2h30 · 2 nights" })}
      ${mediaCard({ href: "jersey-shore.html", image: img("brooklyn-bridge-park.webp"), alt: "A boardwalk at the Jersey Shore", kicker: "New Jersey", title: "Jersey Shore", text: "Asbury Park, Ocean Grove and the boardwalk, by train.", meta: "1h50 · 1–2 nights" })}
      ${mediaCard({ href: "berkshires.html", image: img("boston-skyline.webp"), alt: "Green hills in the Berkshires", kicker: "Massachusetts", title: "Berkshires", text: "Mass MoCA, Tanglewood and Great Barrington.", meta: "3h30 · 2 nights" })}
      ${mediaCard({ href: "finger-lakes.html", image: img("niagara-falls.webp"), alt: "A gorge in the Finger Lakes", kicker: "New York State", title: "Finger Lakes", text: "Watkins Glen, Seneca Lake wineries and Ithaca.", meta: "5h · 2–3 nights" })}
      ${mediaCard({ href: "cape-may.html", image: img("brooklyn-bridge-park.webp"), alt: "Victorian houses and a beach at Cape May", kicker: "New Jersey", title: "Cape May", text: "Victorian streets and a quiet beach at the tip of New Jersey.", meta: "3h · 2 nights" })}
      ${mediaCard({ href: "atlantic-city.html", image: img("brooklyn-bridge-park.webp"), alt: "The Atlantic City boardwalk", kicker: "New Jersey", title: "Atlantic City", text: "Boardwalk and beach, the easiest by bus.", meta: "2h30 · 1–2 nights" })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One weekend idea a month", text: "A short email with one trip worth booking, the train to take and what it costs.", source: "home" })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Plan the next one",
  title: "Pick a direction, not a checklist",
  text: "Start with how long you have and how far you are willing to travel. The rest follows.",
  actions: `${btn({ href: "weekends.html", label: "Compare weekends" })}${btn({ href: "destinations.html", label: "All destinations", variant: "ghost" })}<a class="btn btn--ghost" href="https://nyctrove.com" rel="noopener">New York itself: NYCTrove</a>`,
})}
`,
};
