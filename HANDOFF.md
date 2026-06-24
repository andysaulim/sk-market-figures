# HANDOFF — South Korea's Market Boom, figure package

**Piece:** "South Korea's Market Boom—and the Bubble Beneath It," Evan Ramstad,
CSIS Korea Chair Platform, June 2026.
**Status:** Final. Four figures, house style, drop-in ready.

## The four figures
| # | Title | Shows |
|---|-------|-------|
| 1 | The KOSPI nearly tripled in a year | Weekly KOSPI, Jun 2025–Jun 2026 (+196%) |
| 2 | Two companies, five-fold and ten-fold in a year | Samsung ≈5×, SK hynix ≈10× (indexed) |
| 3 | Two firms, more than half the KOSPI | SK hynix + Samsung >50% of ~880 firms |
| 4 | The biggest up days sat right next to the biggest down days | 20 largest daily moves of 2026 |

## What's in this package
```
sk-market-figures/      ← ready-to-push GitHub Pages repo
  index.html            gallery of all 4 (interactive, hover works), OG meta set
  embed_fig1..4.html    self-contained, iframe-ready (transparent, fonts/data baked in)
  img/                  the 4 transparent PNGs + og_cover.png
  embed_codes.md        iframe snippets + one-time auto-resize listener
  README.md
datawrapper/            native-rebuild kit
  DATAWRAPPER_BUILD.md   per-figure recipe (chart type, titles, colors, axes)
  dw_fig1..4.csv         chart-ready CSVs
data/                   clean source data (Date-keyed CSVs)
```

## Three ways to publish
1. **Static image** — use `sk-market-figures/img/*.png` (transparent 2×, sit on white).
2. **Interactive embed** — push `sk-market-figures/` to GitHub Pages, then iframe
   each figure (codes + auto-resize listener in `embed_codes.md`). This matches how
   the CSIS site embeds Datawrapper.
3. **Rebuild in Datawrapper** (recommended for the CMS) — upload `datawrapper/dw_figN.csv`
   and follow `DATAWRAPPER_BUILD.md`. Datawrapper then generates its own embed code.

## House style (baked in)
- Type: **Synthèse**. Titles **black** (#1A1A1A), one line, "Figure N: …"; subtitle/source gray.
- Data colors: navy **#002147**, CSIS red **#C8102E**, light gray **#CFD3D8**.
- Transparent ground, no card/border. Korea Chair lockup bottom-right; source bottom-left.
- No red kicker/eyebrow. Built with the `csis-chart` skill (updated this session to these defaults).

## Open items / caveats
- **Fig 1 runs weekly through June 15** — it ends on the high and does *not* show the
  June 23 −10% drop (Fig 4 carries that). Extend with KOSPI **daily** closes when available.
- **Fig 3** split is illustrative of ">50%," not a precise share (essay says "more than half").
- **Fig 4** wording was tightened to "sat right next to" so the "Figure 4:" prefix stays one line;
  original was "landed right next to."
- Not included but available on request: the dropped explorations (thousand-point milestone,
  ranked diverging bars, the −9.99% and margin-loan By-the-Numbers, the cross-market
  concentration comparator), and sourced precise Switzerland / U.S.-today concentration numbers.

Source: Korea Exchange (KRX); company share-price filings; figures as stated in the
CSIS Korea Chair Platform piece (Ramstad, 2026). Prepared by CSIS Korea Chair.
