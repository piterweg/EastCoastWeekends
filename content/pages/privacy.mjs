import { pageHero, sectionHead, img, metaItems } from "../components.mjs";

export default {
  path: "privacy.html",
  navSection: "about",
  bodyClass: "page-inner",
  title: "Privacy",
  description: "Privacy policy for East Coast Weekends: what data is collected at launch, how cookies and storage are used, and how to contact us about privacy.",
  priority: "0.3",
  changefreq: "yearly",
  ogImage: "assets/img/hudson-valley.webp",
  render: () => `
${pageHero({
  image: img("hudson-valley.webp"),
  alt: "",
  crumbs: [{ href: "/", label: "Home" }, { href: "privacy.html", label: "Privacy" }],
  eyebrowText: "Privacy",
  title: "Privacy policy",
  lead: "We keep this simple: no analytics cookies at launch, no advertising trackers and no selling of personal data.",
  meta: metaItems("No trackers", "No ad cookies", "Contact"),
})}
<section class="section">
  <div class="container container--narrow">
    <div class="prose">
      <h2>What we collect</h2>
      <p>At launch this site does not run analytics or advertising cookies. If you email us, we receive your email address and message; we use it only to reply.</p>
      <h2>Cookies</h2>
      <p>No non-essential cookies are set. The site may use browser storage only for interface preferences.</p>
      <h2>Newsletter</h2>
      <p>The newsletter form is not connected to a provider yet. Do not submit an address expecting a subscription until we announce the list is live.</p>
      <h2>Contact</h2>
      <p>Questions about privacy: <a href="mailto:hello@eastcoastweekends.com">hello@eastcoastweekends.com</a>.</p>
    </div>
  </div>
</section>
`,
};
