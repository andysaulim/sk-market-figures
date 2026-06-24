# South Korea's Market Boom — Figures

Four CSIS Korea Chair figures for the Platform piece by Evan Ramstad (June 2026),
on the KOSPI's 2026 surge.

**Live:** https://andysaulim.github.io/sk-market-figures/

| # | Figure | Embeddable | PNG |
|---|--------|-----------|-----|
| 1 | The KOSPI nearly tripled in a year | `embed_fig1.html` | `img/fig1_kospi.png` |
| 2 | Two companies, five-fold and ten-fold in a year | `embed_fig2.html` | `img/fig2_two_companies.png` |
| 3 | Two firms, more than half the KOSPI | `embed_fig3.html` | `img/fig3_concentration_donut.png` |
| 4 | The biggest up days sat right next to the biggest down days | `embed_fig4.html` | `img/fig4_volatility_timeline.png` |

## Embedding
Each `embed_figN.html` is self-contained (fonts, logo, data, Chart.js; transparent
background; hover tooltips). Iframe it:

```html
<iframe src="https://andysaulim.github.io/sk-market-figures/embed_fig1.html"
        title="Figure 1: The KOSPI nearly tripled in a year"
        loading="lazy" scrolling="no" style="width:100%;border:0;height:590px"></iframe>
```
Full code + the one-time auto-resize listener: see `embed_codes.md`.

## Notes
- PNGs in `img/` are transparent (drop onto a white page).
- Figure 1's line is weekly **through June 15**, before the June 23 sell-off
  (which Figure 4 captures); extend it when KOSPI daily closes are available.
- Figure 3's split is illustrative of ">50%," not a precise share.

Source: Korea Exchange (KRX); company filings; CSIS Korea Chair.
