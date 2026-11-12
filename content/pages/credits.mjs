import { pageHero, sectionHead, table, img, metaItems } from "../components.mjs";

export default {
  path: "credits.html",
  navSection: "about",
  bodyClass: "page-inner",
  title: "Photo Credits",
  description: "Photo credits, authors and Creative Commons licences for every photograph used on East Coast Weekends, with links to the original sources.",
  priority: "0.4",
  changefreq: "yearly",
  ogImage: "assets/img/hudson-valley.webp",
  render: () => `
${pageHero({
  image: img("hudson-valley.webp"),
  alt: "",
  crumbs: [{ href: "/", label: "Home" }, { href: "credits.html", label: "Credits" }],
  eyebrowText: "Credits",
  title: "Photo credits",
  lead: "Photographs are used under Creative Commons licences. Derivative versions are cropped and resized for the web.",
  meta: metaItems("Creative Commons", "Attribution", "2026"),
})}
<section class="section">
  <div class="container">
    ${table({ caption: "Photo credits", head: ["File", "Subject", "Author", "Licence", "Source"], rows: [
      ["hudson-valley.webp", "Andy Goldsworthy's Storm King Wall, Storm King Art Center", "Eldan Goldenberg", "CC0", "<a href=\"https://commons.wikimedia.org/wiki/File:Andy_Goldsworthy_Storm_King_Wall_(196974395).jpeg\" rel=\"nofollow noopener\" target=\"_blank\">source</a>"],
      ["philadelphia-skyline.webp", "Philadelphia skyline", "TECHNICALINTERFACE", "CC0", "<a href=\"https://commons.wikimedia.org/wiki/File:Philadelphia_Skyline_Amtrak.jpg\" rel=\"nofollow noopener\" target=\"_blank\">source</a>"],
      ["boston-skyline.webp", "Boston skyline from Cambridge", "King of Hearts", "CC BY-SA 4.0", "<a href=\"https://commons.wikimedia.org/wiki/File:Boston_skyline_from_Cambridge_November_2015_panorama_1.jpg\" rel=\"nofollow noopener\" target=\"_blank\">source</a>"],
      ["washington-capitol.webp", "United States Capitol, Washington, D.C.", "Noclip", "Public domain", "<a href=\"https://commons.wikimedia.org/wiki/File:Capitol_Building_Full_View.jpg\" rel=\"nofollow noopener\" target=\"_blank\">source</a>"],
      ["niagara-falls.webp", "Niagara Falls", "Saffron Blaze", "CC BY-SA 3.0", "<a href=\"https://commons.wikimedia.org/wiki/File:3Falls_Niagara.jpg\" rel=\"nofollow noopener\" target=\"_blank\">source</a>"],
      ["grand-central.webp", "Grand Central Terminal Main Concourse", "Axel Tschentscher", "CC BY-SA 4.0", "<a href=\"https://commons.wikimedia.org/wiki/File:Grand_Central_Terminal_Main_Concourse_2019-10-03_20-02.jpg\" rel=\"nofollow noopener\" target=\"_blank\">source</a>"]
    ] })}
  </div>
</section>
`,
};
