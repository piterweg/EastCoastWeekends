import { pageHero, sectionHead, table, mediaCard, callout, faq, newsletter, ctaBand, img, metaItems } from "../components.mjs";

export default {
  path: "weekends.html",
  navSection: "weekends",
  bodyClass: "page-inner",
  title: "Weekend Trips from New York — Compared",
  description:
    "Five weekend trips from New York compared by journey time, round-trip fare, how many nights you need and what each place is best for.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/hudson-valley.webp",
  render: () => `
${pageHero({
  image: img("hudson-valley.webp"),
  alt: "The Hudson Valley in autumn, with the river and wooded hills",
  crumbs: [{ href: "/", label: "Home" }, { href: "weekends.html", label: "Weekends" }],
  eyebrowText: "Weekends",
  title: "Five weekends, one decision",
  lead: "Journey time is the whole argument. Under two hours each way and you can leave on Saturday morning; over three and the trip only works with a night either end.",
  meta: metaItems("5 destinations", "Train-first", "Fares checked November 2026", "2–3 day plans"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The comparison", title: "How far, how much, how long", lead: "Round-trip adult fares for the fastest sensible option. Book ahead where you can." })}
    ${table({
      caption: "Weekend trips from New York compared",
      head: ["Destination", "Journey", "From New York", "Round-trip fare", "Nights", "Best for"],
      rows: [
        ["<a href=\"hudson-valley.html\"><strong>Hudson Valley</strong></a>", "Metro-North Hudson Line", "1h20–1h30", "~$35–55", "1–2", "Art, river towns, walking"],
        ["<a href=\"philadelphia.html\"><strong>Philadelphia</strong></a>", "Amtrak (or NJ Transit + SEPTA)", "1h05–1h25", "$40–150 (cheaper via NJT)", "1", "History, food, a walkable centre"],
        ["<a href=\"boston.html\"><strong>Boston</strong></a>", "Amtrak / Acela", "3h30–4h15", "$80–250", "1–2", "Freedom Trail, Beacon Hill, North End"],
        ["<a href=\"washington-dc.html\"><strong>Washington, D.C.</strong></a>", "Amtrak / Acela", "2h50–3h20", "$80–250", "1–2", "Smithsonian, the Mall, Georgetown"],
        ["<a href=\"niagara-falls.html\"><strong>Niagara Falls</strong></a>", "Amtrak Maple Leaf / fly to Buffalo", "~9h train; 1h30 + drive", "$140–300", "2", "The falls, Maid of the Mist"],
      ],
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "How to choose", title: "Match the weekend to your energy", lead: "A long train with a short stay is worse than a short train with a long stay." })}
    <div class="grid grid--2">
      ${callout({ icon: "◆", title: "If you only have one night", text: "Stay under two hours each way: Hudson Valley or Philadelphia. Both leave you a full Saturday afternoon and most of Sunday." })}
      ${callout({ icon: "◆", title: "If you have two nights", text: "Boston and Washington become comfortable rather than rushed. Niagara needs two nights as a minimum." })}
      ${callout({ icon: "◆", title: "If you are travelling by train", text: "Book Amtrak early: the cheapest fares disappear first. For Philadelphia, NJ Transit plus SEPTA is slower but much cheaper." })}
      ${callout({ icon: "◆", title: "If the weather turns", text: "Hudson Valley has Dia Beacon and Storm King; Philadelphia has museums; Boston has the MFA and Isabella Stewart Gardner." })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The guides", title: "Pick a destination", lead: "" })}
    <div class="grid grid--3">
      ${mediaCard({ href: "hudson-valley.html", image: img("hudson-valley.webp"), alt: "The Hudson Valley", kicker: "1h20", title: "Hudson Valley", text: "Art and river towns, car-free.", meta: "2 days" })}
      ${mediaCard({ href: "philadelphia.html", image: img("philadelphia-skyline.webp"), alt: "Philadelphia skyline", kicker: "1h05", title: "Philadelphia", text: "History and food on foot.", meta: "2 days" })}
      ${mediaCard({ href: "boston.html", image: img("boston-skyline.webp"), alt: "Boston skyline", kicker: "3h30", title: "Boston", text: "The Freedom Trail and the North End.", meta: "2 days" })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Weekend questions", lead: "" })}
    ${faq([
      { q: "Do I need a car?", a: "<p>No. Every destination here can be done by train, with local buses or taxis for the last mile. Hudson Valley and Philadelphia are the easiest without one.</p>" },
      { q: "When should I book?", a: "<p>Amtrak fares rise as trains fill, so book two to six weeks ahead for the best price. Hotels are cheapest outside leaf-peeping weekends and school holidays.</p>" },
      { q: "Is one night enough for Boston or Washington?", a: "<p>It is possible but tight. Two nights turn either into a proper weekend rather than a long day with a hotel stay.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One weekend idea a month", text: "A short email with one trip worth booking and what it costs.", source: "weekends" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Next step", title: "Read the destination guide", text: "Each one has a two-day plan, costs and the practical details.", actions: `<a class="btn" href="destinations.html">All destinations</a>` })}
`,
};
