# sk-market-figures

Figure package for **"South Korea's Market Boom—and the Bubble Beneath It,"**
Evan Ramstad, CSIS Korea Chair Platform, June 2026.

Live gallery: <https://andysaulim.github.io/sk-market-figures/>

## The four figures

| # | Title | Shows |
|---|-------|-------|
| 1 | The KOSPI nearly tripled in a year | Weekly KOSPI, Jun 2025–Jun 2026 (+196%) |
| 2 | Two companies, five-fold and ten-fold in a year | Samsung ≈5×, SK hynix ≈10× (indexed) |
| 3 | Two firms, more than half the KOSPI | SK hynix + Samsung >50% of ~880 firms |
| 4 | The biggest up days sat right next to the biggest down days | 20 largest daily moves of 2026 |

## Contents

```
index.html            Gallery of all four figures (interactive, hover works), OG meta set
embed_fig1..4.html    Self-contained, iframe-ready — fonts, data, logo, and Chart.js baked in
embed_codes.md        Per-figure iframe snippets + the one-time auto-resize listener
```

## Publishing

This repo is meant to be served as a **GitHub Pages** site. Enable Pages on the
default branch (Settings → Pages → Build from branch → root), and the figures
are available at `https://andysaulim.github.io/sk-market-figures/`.

- **Whole gallery:** link or iframe `index.html`.
- **Individual figure:** copy the snippet from [`embed_codes.md`](embed_codes.md).
  Paste the auto-resize listener once per host page so each iframe sizes itself
  (the inline `height` values are safe fallbacks if the listener is stripped).

## House style (baked into every figure)

- Type: **Synthèse**. Titles black (`#1A1A1A`), one line, "Figure N: …"; subtitle/source gray.
- Data colors: navy `#002147`, CSIS red `#C8102E`, light gray `#CFD3D8`.
- Transparent ground, no card or border; Korea Chair lockup bottom-right, source bottom-left.

## Caveats

- **Fig 1** runs weekly through June 15 — it ends on the high and does *not* show the
  June 23 −10% drop (Fig 4 carries that). Extend with KOSPI daily closes when available.
- **Fig 3** split is illustrative of ">50%," not a precise share.

Source: Korea Exchange (KRX); company share-price filings; figures as stated in the
CSIS Korea Chair Platform piece (Ramstad, 2026). Prepared by CSIS Korea Chair.
