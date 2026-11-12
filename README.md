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
