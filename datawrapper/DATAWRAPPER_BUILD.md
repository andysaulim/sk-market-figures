# Building the four figures natively in Datawrapper

Recommended over Flourish because CSIS already embeds Datawrapper (the reference
piece's "Remote Visualization" blocks are `datawrapper.dwcdn.net` iframes), so
output matches house style and drops into the CMS the same way.

**Shared settings for all four**
- If CSIS has a saved Datawrapper **theme**, apply it and skip the manual colors.
- Title color: **black** (#1A1A1A). Subtitle/source: gray.
- Title field = the full `Figure N: …` string below.
- Byline: `CSIS Korea Chair`.  Source name: as listed per figure.
- Palette: navy `#002147`, CSIS red `#C8102E`, light gray `#CFD3D8`.
- No gridline clutter: horizontal gridlines only.

---

## Figure 1 — KOSPI line  ·  `dw_fig1_kospi.csv`
- **Type:** Line chart
- **Title:** `Figure 1: The KOSPI nearly tripled in a year`
- **Subtitle:** Weekly closing value of the KOSPI Composite Index, June 2025–June 2026.
- **Source:** Korea Exchange (KRX), weekly close
- **Line color:** navy `#002147`, ~2.5px
- **Y axis:** start at 3,000; ticks every 1,000; thousands separator on
- **Annotations:** label the first point `3,054` and the last point `9,052`
  (color the last point red `#C8102E`); optional text annotation `+196% over the year`
  top-left inside the plot.
- **Note line:** "Runs through June 15, before the June 23 sell-off." (until you
  have KOSPI daily closes to extend it)

## Figure 2 — Two-stock indexed  ·  `dw_fig2_two_stock.csv`
- **Type:** Line chart (two series)
- **Title:** `Figure 2: Two companies, five-fold and ten-fold in a year`
- **Subtitle:** Samsung Electronics and SK hynix share prices, each rebased to 100 a year ago.
- **Source:** Company share prices, daily close; CSIS Korea Chair calculations
- **Colors:** SK hynix = red `#C8102E`; Samsung = navy `#002147`
- **Y axis:** 0 to 1,000; ticks every 200
- **Labels:** turn on direct line labels at the right edge; the series end near
  985 (≈10×) and 534 (≈5×). Add a baseline line/annotation at 100 = "June 2025".

## Figure 3 — Concentration donut  ·  `dw_fig3_concentration.csv`
- **Type:** Donut chart
- **Title:** `Figure 3: Two firms, more than half the KOSPI`
- **Subtitle:** SK hynix and Samsung Electronics together account for more than half the value of the KOSPI's roughly 880 companies.
- **Source:** As stated in the CSIS Korea Chair Platform piece (Ramstad, 2026); Korea Exchange
- **Colors:** "SK hynix + Samsung Electronics" = navy `#002147`; "The other ~878 companies" = light gray `#CFD3D8`
- **Center label:** `>50%`
- **Note:** the 52/48 split is illustrative of "more than half"; the chart should
  read as ">50%," not a precise share.

## Figure 4 — Biggest daily moves  ·  `dw_fig4_daily_moves.csv`
- **Type:** Column chart (two columns: Gains, Losses, on a date axis)
- **Title:** `Figure 4: The biggest up days sat right next to the biggest down days`
- **Subtitle:** The KOSPI's ten largest daily gains (navy, above) and ten largest daily losses (red, below) in 2026.
- **Source:** Korea Exchange (KRX), daily close; CSIS Korea Chair
- **Colors:** Gains = navy `#002147`; Losses = red `#C8102E`
- **Y axis:** −15% to +10%, zero line emphasized; value labels on
- **Tip:** the CSV splits each day into a Gains or Losses column so the bars run
  up (navy) / down (red) automatically. For the lollipop look of the HTML
  version, use **Flourish** instead (below).

---

## Flourish equivalents
- **Figs 1–2:** Line chart template (same data, same colors).
- **Fig 3:** Pie/Donut template.
- **Fig 4:** for true lollipops, use the **Line chart** template with markers only
  (no connecting line) or the **Scatter** template, mapping the % to Y and the
  date to X, color by sign. Flourish handles the up/down lollipop better than
  Datawrapper; Datawrapper's column version is the cleaner institutional default.

All four CSVs are date-formatted (ISO `YYYY-MM-DD`) and ready to paste or upload.
