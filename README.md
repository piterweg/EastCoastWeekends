# East Coast Weekends

Independent weekend-travel guide for trips within reach of New York: the Hudson Valley, Philadelphia, Boston, Washington, D.C. and Niagara Falls.

- Live domain: https://eastcoastweekends.com
- Static site, no framework: `node tools/build.mjs` renders every module in `content/pages/` into the repository root.
- QA: `node tools/qa.mjs` (static) and `node tools/qa-browser.mjs` (browser, needs a local server).
- Deploy: Hostinger Git deployment from `main`, or upload `_deploy/EastCoastWeekends-hostinger.zip`.

## Structure

```
content/
  site.mjs          brand, domain, navigation, footer
  layout.mjs        head, header, footer shell
  components.mjs    shared UI components
  pages/            one module per page
assets/
  css/main.css      brand palette + components
  js/               main.js, search.js
  img/              local WebP/JPG images
tools/              build, QA, screenshot helpers
```

## Adding a page

1. Create `content/pages/<slug>.mjs` exporting `{ path, navSection, title, description, render }`.
2. Import components from `../components.mjs`.
3. Build and QA.

## Editorial rules

Train-first, dates and fares checked against the operator, no invented prices, no paid rankings. Photo credits live at `/credits.html`.

## Deployment (Hostinger Git)

1. hPanel → **Websites → Add website** for the domain, choose an empty PHP/HTML site.
2. hPanel → **Advanced → Git** → connect this GitHub repository, branch `main`.
3. Set the deploy directory to `public_html` and enable automatic deployment on push.
4. Install the free SSL certificate and test the domain, `/sitemap.xml`, `/robots.txt` and 404.
5. Search Console: add the domain property, submit the sitemap and request indexing for the home page.

Builds are committed with the generated HTML, so Hostinger needs no Node.js at deploy time.
