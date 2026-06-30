# Embed codes — South Korea market figures

The four figures are self-contained HTML files (`embed_fig1.html` … `embed_fig4.html`):
fonts, logo, data, and Chart.js all baked in, transparent background, hover tooltips intact.

Two embed styles are below. **Style A** mirrors the CSIS/Datawrapper house pattern
(a `<div>` placeholder + a deferred `<script>` loader + a `<noscript>` PNG fallback) and
is the recommended one. **Style B** is a plain `<iframe>` if you'd rather not load a script.

Either way, host the repo on a public URL first (e.g. GitHub Pages:
`https://andysaulim.github.io/sk-market-figures/`) and replace the base URL below if your
path differs.

---

## Style A — CSIS / Datawrapper-style loader (recommended)

Each block is fully self-contained: the loader (`embed.js`) injects a responsive iframe,
auto-sizes it to the figure's real height (including mobile reflow), and shows the
transparent PNG if JavaScript is off. No separate one-time listener needed.

### Figure 1 — KOSPI nearly tripled
```html
<div style="min-height:590px" id="csis-vis-fig1"><script type="text/javascript" defer src="https://andysaulim.github.io/sk-market-figures/embed.js" charset="utf-8" data-target="#csis-vis-fig1" data-src="embed_fig1.html" data-title="Figure 1: The KOSPI nearly tripled in a year"></script><noscript><img src="https://andysaulim.github.io/sk-market-figures/img/fig1_kospi.png" alt="Figure 1: The KOSPI nearly tripled in a year" style="width:100%" /></noscript></div>
```

### Figure 2 — Two companies, six-fold and eleven-fold
```html
<div style="min-height:620px" id="csis-vis-fig2"><script type="text/javascript" defer src="https://andysaulim.github.io/sk-market-figures/embed.js" charset="utf-8" data-target="#csis-vis-fig2" data-src="embed_fig2.html" data-title="Figure 2: Two companies, six-fold and eleven-fold in a year"></script><noscript><img src="https://andysaulim.github.io/sk-market-figures/img/fig2_two_companies.png" alt="Figure 2: Two companies, six-fold and eleven-fold in a year" style="width:100%" /></noscript></div>
```

### Figure 3 — Two firms, more than half the KOSPI
```html
<div style="min-height:700px" id="csis-vis-fig3"><script type="text/javascript" defer src="https://andysaulim.github.io/sk-market-figures/embed.js" charset="utf-8" data-target="#csis-vis-fig3" data-src="embed_fig3.html" data-title="Figure 3: Two firms, more than half the KOSPI"></script><noscript><img src="https://andysaulim.github.io/sk-market-figures/img/fig3_concentration_donut.png" alt="Figure 3: Two firms, more than half the KOSPI" style="width:100%" /></noscript></div>
```

### Figure 4 — Biggest daily moves
```html
<div style="min-height:660px" id="csis-vis-fig4"><script type="text/javascript" defer src="https://andysaulim.github.io/sk-market-figures/embed.js" charset="utf-8" data-target="#csis-vis-fig4" data-src="embed_fig4.html" data-title="Figure 4: The biggest up days sat right next to the biggest down days"></script><noscript><img src="https://andysaulim.github.io/sk-market-figures/img/fig4_volatility_timeline.png" alt="Figure 4: The biggest up days sat right next to the biggest down days" style="width:100%" /></noscript></div>
```

The `min-height` on each `<div>` keeps the layout from jumping before the chart loads
(and is the height of the `<noscript>` PNG fallback). The loader overrides it with the
figure's real height once it renders.

---

## Style B — plain iframe (no loader script)

Paste this listener **once per page** (anywhere) so the iframes auto-size:

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

Then drop in each figure:

### Figure 1 — KOSPI nearly tripled
```html
<iframe src="https://andysaulim.github.io/sk-market-figures/embed_fig1.html"
        title="Figure 1: The KOSPI nearly tripled in a year"
        loading="lazy" scrolling="no"
        style="width:100%;border:0;height:590px"></iframe>
```

### Figure 2 — Two companies, six-fold and eleven-fold
```html
<iframe src="https://andysaulim.github.io/sk-market-figures/embed_fig2.html"
        title="Figure 2: Two companies, six-fold and eleven-fold in a year"
        loading="lazy" scrolling="no"
        style="width:100%;border:0;height:620px"></iframe>
```

### Figure 3 — Two firms, more than half the KOSPI
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
fixed heights still render correctly.

---

## If you build in Datawrapper instead
Datawrapper generates its own responsive embed code (a small `<iframe>` + a
resize script) the moment you publish each chart — use that and you can ignore
the hosting step above. The CSVs and the build recipe are in the `datawrapper/`
folder.
