# Embed codes — South Korea market figures

The four figures are self-contained HTML files (`embed_fig1.html` … `embed_fig4.html`):
fonts, logo, data, and Chart.js all baked in, transparent background, hover tooltips intact.

## One-time setup
1. **Host the four files.** Push `embed_fig1.html`–`embed_fig4.html` to a public
   location — e.g. a GitHub Pages repo: `https://andysaulim.github.io/sk-market-figures/`.
2. **Replace the base URL** in the codes below if your path differs.
3. **Paste the listener once** per page (anywhere) so the iframes auto-size,
   including on mobile where the donut legend reflows:

```html
<script>
window.addEventListener('message', function (e) {
  if (e && e.data && e.data.csisEmbed && e.data.id) {
    var f = document.querySelector('iframe[src*="' + e.data.id + '"]');
    if (f && e.data.height) { f.style.height = e.data.height + 'px'; }
  }
});
</script>
```

## Embed codes (one per figure)

### Figure 1 — KOSPI tripled
```html
<iframe src="https://andysaulim.github.io/sk-market-figures/embed_fig1.html"
        title="Figure 1: The KOSPI nearly tripled in a year"
        loading="lazy" scrolling="no"
        style="width:100%;border:0;height:590px"></iframe>
```

### Figure 2 — Two companies, 5× and 10×
```html
<iframe src="https://andysaulim.github.io/sk-market-figures/embed_fig2.html"
        title="Figure 2: Two companies, five-fold and ten-fold in a year"
        loading="lazy" scrolling="no"
        style="width:100%;border:0;height:620px"></iframe>
```

### Figure 3 — Concentration donut
```html
<iframe src="https://andysaulim.github.io/sk-market-figures/embed_fig3.html"
        title="Figure 3: Two firms, more than half the KOSPI"
        loading="lazy" scrolling="no"
        style="width:100%;border:0;height:700px"></iframe>
```

### Figure 4 — Biggest daily moves
```html
<iframe src="https://andysaulim.github.io/sk-market-figures/embed_fig4.html"
        title="Figure 4: The biggest up days sat right next to the biggest down days"
        loading="lazy" scrolling="no"
        style="width:100%;border:0;height:660px"></iframe>
```

The inline `height` values are safe fallbacks; with the listener above they are
overridden by each figure's real height. If your CMS strips the `<script>`, the
fixed heights still render correctly (700 on Fig 3 leaves room for the stacked
legend on narrow columns).

## If you build in Datawrapper instead
Datawrapper generates its own responsive embed code (a small `<iframe>` + a
resize script) the moment you publish each chart — use that and you can ignore
the hosting step above. The CSVs and the build recipe are in the `datawrapper/`
folder.
