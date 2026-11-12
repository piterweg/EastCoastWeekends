import { pageHero, sectionHead, mediaCard, img, metaItems } from "../components.mjs";

export default {
  path: "destinations.html",
  navSection: "destinations",
  bodyClass: "page-inner",
  title: "Weekend Destinations from New York",
  description: "Five East Coast destinations for a two- or three-day break from New York, with travel times and what each is best for.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/hudson-valley.webp",
  render: () => `
${pageHero({
  image: img("hudson-valley.webp"),
  alt: "The Hudson Valley in autumn",
  crumbs: [{ href: "/", label: "Home" }, { href: "destinations.html", label: "Destinations" }],
  eyebrowText: "Destinations",
  title: "Where to go this weekend",
  lead: "Five places within reach of New York, chosen because the journey leaves you enough time to actually be there.",
  meta: metaItems("5 destinations", "Train-first", "2–3 day plans"),
})}
<section class="section">
  <div class="container">
    <div class="grid grid--2">
      ${mediaCard({ href: "hudson-valley.html", image: img("hudson-valley.webp"), alt: "The Hudson Valley", kicker: "New York State", title: "Hudson Valley", text: "Dia Beacon, Storm King and river towns — the easiest car-free weekend from the city.", meta: "1h20 · 2 days" })}
      ${mediaCard({ href: "philadelphia.html", image: img("philadelphia-skyline.webp"), alt: "Philadelphia skyline", kicker: "Pennsylvania", title: "Philadelphia", text: "Independence Hall, Reading Terminal Market and the Rocky Steps.", meta: "1h05 · 2 days" })}
      ${mediaCard({ href: "boston.html", image: img("boston-skyline.webp"), alt: "Boston skyline", kicker: "Massachusetts", title: "Boston", text: "The Freedom Trail, Beacon Hill and the North End in a weekend.", meta: "3h30 · 2 days" })}
      ${mediaCard({ href: "washington-dc.html", image: img("washington-capitol.webp"), alt: "The US Capitol", kicker: "Washington, D.C.", title: "Washington, D.C.", text: "Smithsonian museums, the Mall and Georgetown.", meta: "2h50 · 2 days" })}
      ${mediaCard({ href: "niagara-falls.html", image: img("niagara-falls.webp"), alt: "Niagara Falls", kicker: "New York State", title: "Niagara Falls", text: "The falls, Maid of the Mist and a night in Buffalo or Niagara-on-the-Lake.", meta: "Overnight · 2 nights" })}
      ${mediaCard({ href: "catskills.html", image: img("hudson-valley.webp"), alt: "Wooded hills in the Catskills", kicker: "New York State", title: "Catskills", text: "Hiking, small towns and a slower pace — car or bus, not Metro-North.", meta: "2h30 · 2 nights" })}
      ${mediaCard({ href: "jersey-shore.html", image: img("brooklyn-bridge-park.webp"), alt: "A boardwalk at the Jersey Shore", kicker: "New Jersey", title: "Jersey Shore", text: "Asbury Park, Ocean Grove and the boardwalk, by train.", meta: "1h50 · 1–2 nights" })}
      ${mediaCard({ href: "berkshires.html", image: img("boston-skyline.webp"), alt: "Green hills in the Berkshires", kicker: "Massachusetts", title: "Berkshires", text: "Mass MoCA, Tanglewood and Great Barrington.", meta: "3h30 · 2 nights" })}
      ${mediaCard({ href: "finger-lakes.html", image: img("niagara-falls.webp"), alt: "A gorge in the Finger Lakes", kicker: "New York State", title: "Finger Lakes", text: "Watkins Glen, Seneca Lake wineries and Ithaca — the long-weekend exception.", meta: "5h · 2–3 nights" })}
      ${mediaCard({ href: "cape-may.html", image: img("brooklyn-bridge-park.webp"), alt: "Victorian houses and a beach at Cape May", kicker: "New Jersey", title: "Cape May", text: "Victorian streets, a wide beach and birding at the tip of New Jersey.", meta: "3h · 2 nights" })}
      ${mediaCard({ href: "atlantic-city.html", image: img("brooklyn-bridge-park.webp"), alt: "The Atlantic City boardwalk", kicker: "New Jersey", title: "Atlantic City", text: "Boardwalk, beach and casinos — the easiest beach weekend by bus.", meta: "2h30 · 1–2 nights" })}
    </div>
  </div>
</section>
`,
};
