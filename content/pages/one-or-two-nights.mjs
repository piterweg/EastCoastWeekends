import { pageHero, sectionHead, table, card, callout, faq, newsletter, ctaBand, img, metaItems } from "../components.mjs";

export default {
  path: "one-or-two-nights.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "One Night or Two? How Long Each Weekend Needs",
  description: "How many nights each East Coast weekend actually needs, based on journey time, what there is to do and whether the trip works without a car.",
  priority: "0.7",
  changefreq: "monthly",
  ogImage: "assets/img/hudson-valley.webp",
  render: () => `
${pageHero({
  image: img("hudson-valley.webp"),
  alt: "The Hudson Valley in autumn",
  crumbs: [{ href: "/", label: "Home" }, { href: "one-or-two-nights.html", label: "How long?" }],
  eyebrowText: "Planning",
  title: "One night or two?",
  lead: "The number of nights should follow the journey, not the other way round. Under two hours each way, one night is enough. Over three, one night is usually wasted.",
  meta: metaItems("Journey-first", "Nights by destination", "Train-first"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The rule", title: "Nights follow journey time", lead: "A weekend is two days. Subtract the travel and see what is left." })}
    ${table({ caption: "How many nights each destination needs", head: ["Destination", "Journey", "Minimum nights", "Why"], rows: [
      ["Hudson Valley", "1h20–1h30", "1", "Short train, compact bases"],
      ["Philadelphia", "1h05–1h25", "1", "Walkable centre; one full day is enough"],
      ["Jersey Shore", "~1h50", "1", "Beach and boardwalk in a day"],
      ["Atlantic City", "~2h20–2h45", "1", "Boardwalk and beach; easy bus"],
      ["Catskills", "~2h30 car", "2", "Trailheads are spread out"],
      ["Washington, D.C.", "2h50–3h20", "2", "Museums and the Mall need a full day"],
      ["Berkshires", "~2h45 car / 3h30 train", "2", "Museums and towns are far apart"],
      ["Boston", "3h30–4h15", "2", "Travel eats one night's worth of time"],
      ["Niagara Falls", "~9h train", "2", "The journey is a day each way"],
      ["Finger Lakes", "~4h30–5h car", "2–3", "Wine and gorges need two full days"],
      ["Cape May", "~3h car", "2", "Beach plus the point and birding"],
    ] })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "How to decide", title: "Three questions", lead: "" })}
    <div class="grid grid--3">
      ${card({ kicker: "01", title: "What is the journey?", text: "Under two hours each way: one night. Over three: two nights, or a different destination.", foot: "" })}
      ${card({ kicker: "02", title: "What do you want to do?", text: "One anchor (a museum, a beach, a trail) fits a night. Two anchors need two nights.", foot: "" })}
      ${card({ kicker: "03", title: "Is there a car?", text: "Without a car, stay where the station is. With a car, the spread-out places open up.", foot: "" })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Weekend length questions", lead: "" })}
    ${faq([
      { q: "Is one night ever enough for Boston?", a: "<p>Technically yes, but the travel eats the weekend. Two nights is the honest answer.</p>" },
      { q: "Can Niagara be a day trip?", a: "<p>No. The train is about nine hours each way; two nights is the minimum.</p>" },
      { q: "What if I only have one night?", a: "<p>Stay under two hours: Hudson Valley, Philadelphia, Jersey Shore or Atlantic City.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One weekend idea a month", text: "A short email with one trip worth booking and what it costs.", source: "one-or-two-nights" })}
  </div>
</section>

${ctaBand({ eyebrowText: "Compare", title: "All destinations", text: "Journey times, fares and what each place is best for.", actions: `<a class="btn" href="weekends.html">Compare weekends</a>` })}
`,
};
