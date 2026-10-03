# Panxo — Style Reference (from styles.refero.design/style/8b5cfe6d-a2bd-4edb-854e-9185cec46c09)

Captured 2 Oct 2026. This is the STRUCTURAL reference (layouts, cards, buttons, spacing, type scale).
Colours below are Panxo's own; the VynziCFO build re-maps them to the brand palette (see ../PLAN.md).

> Data terminal in warm ink — every surface echoes ledger paper, every accent reads like a highlighted cell.

Panxo reads like a financial data terminal wearing a startup's wardrobe — numbers and metrics front and center, but the palette stays warm cream and near-black rather than cold blue. Base surface #fafafa pushing toward #f7f3eb; primary text #1c1a17. Hero visualization uses a candy gradient (teal → violet → amber) as the only splash of chroma. Mona Sans 700 with -0.04em tracking at 56px. Single deep orange (#ff6020) for CTAs; violets (#777eff, #731fff) for data-classification signals only.

## Tokens — Colors

| Name | Value | Role |
|------|-------|------|
| Coal Ink | #1c1a17 | Primary text, filled CTA button bg, dark card surface |
| Ledger White | #fafafa | Page background, card surfaces, badge fills (dominant surface) |
| Parchment | #f7f3eb | Hero section background wash, large atmospheric areas |
| Ash | #f1f1f1 | Borders, dividers, ghost button borders |
| Slate Mid | #7e7d7b | Secondary body text, metadata labels, muted headings |
| Graphite | #5a5957 | Tertiary text, icon strokes, nav link default |
| Stone | #969594 | Placeholder text, disabled states |
| Fossil | #bab9b8 | Hairline borders |
| Smolder | #ff6020 | Primary CTA / promotional links ONLY |
| Signal Violet | #777eff | Data classification labels (never for controls) |
| Deep Violet | #731fff | Secondary violet accent |
| Spectrum Gradient | linear-gradient(90deg,#10b981 0%,#a855f7 50%,#f59e0b 100%) | Hero/demo backdrop panels only |
| Sky Blush | linear-gradient(#bdd8ff 0%,#ffead6 100%) | Hero section vertical background |
| Mint Pulse | #05933b | Positive signal badges |
| Emerald Tag | #10b981 | Success backgrounds |

## Tokens — Typography

- Display: Mona Sans 500/700, sizes 24/32/40/48/56px, line-height 1.00–1.20, tracking -0.04em @56, -0.03em @40–48, -0.01em @24–32. Substitute: Plus Jakarta Sans or Geist. Never below 24px.
- Body: Inter 400/500/600/700, 8–18px, line-height 1.2–1.67, -0.03em on UI labels, +0.02–0.05em on badges/captions. font-feature-settings "cv03","cv04","cv09","cv11".

| Role | Size | LH | Tracking |
|---|---|---|---|
| caption | 10px | 1.2 | +0.5px |
| body | 14px | 1.5 | — |
| heading-sm | 24px | 1.2 | -0.24px |
| heading | 32px | 1.13 | -0.96px |
| heading-lg | 48px | 1.0 | -1.44px |
| display | 56px | 1.0 | -2.24px |

## Spacing & Shape

- Base unit 4px, density compact. Scale: 4 8 12 16 20 24 32 40 48 56 64 80 88 96 100 120.
- Page max-width 1200px. Section gap 80–120px. Card padding 24px. Element gap 8–12px.
- Radius: cards 10px · badges 6–8px · images 8px · demo panels 12–20px · inputs 12px · buttons 48px (filled primary), 999px (outlined/ghost), 20px (filter chips). Never above 20px on cards.
- Shadows: subtle = rgba(95,99,106,.08) 0 0 0 1px, rgba(43,43,48,.1) 0 1px 1px; subtle-2 = rgba(95,99,106,.12) 0 0 0 1px, rgba(43,43,48,.1) 0 1px 4px. Nothing heavier.

## Surfaces

| Level | Value | Purpose |
|---|---|---|
| 0 Page base | #f7f3eb | Hero and large atmospheric backgrounds |
| 1 App surface | #fafafa | Default page bg and card fills |
| 2 Elevated card | #ffffff | Interactive cards / panels with micro-shadow |
| 3 Inverse | #1c1a17 | Dark stat card, primary CTA fill |

## Components

- **Primary Filled CTA Button** — bg #1c1a17, white text, radius 48px, padding 7px 12px (nav scale). Authoritative, not urgent.
- **Outlined Ghost Button** — transparent, text #1c1a17 @72%, border 1px rgba(0,0,0,.12), radius 20px, padding 8px 16px.
- **White Card Button / Chip** — bg #fff, accent text, border 1px #f1f1f1, radius 12px, padding 24px.
- **Filter Pill** — transparent, border 1px rgba(0,0,0,.12), radius 999px, padding 7px 12px, Inter 400 14px @72%; active = filled #1c1a17.
- **Content Card (Light)** — bg #fafafa, radius 10px, no shadow, no border; body Inter 400 14px #5a5957; name Inter 600 15px #1c1a17; bottom row of coloured metric badges.
- **Dark Stat Card** — radial-gradient(81% 66% at 1.8% 1.1%, #545454 0%, #1c1a17 100%), radius 10px, white text; headline Mona Sans 700 32px; sub Inter 400 14px @70%. Anchors a 4-col stats grid.
- **Metric Stat Cell** — bg #fafafa, radius 10px, padding 24px; label Inter 400 14px #7e7d7b on top; numeral Mona Sans 700 40–48px, -0.03em.
- **Category Badge** — bg #fafafa, Inter 400 12px #52525b, radius 6px, padding 4px 10px, no border, 4px gap.
- **Announcement Bar** — full-bleed #000, 36px, Inter 400 14px white, orange text link right.
- **Top Navigation Bar** — bg #fff, border-bottom 1px #f1f1f1, ~60px; wordmark left; Inter 500 14px links #5a5957 centre with chevron dropdowns; ghost text link + filled pill CTA right.
- **Product Demo UI Card** — white, radius 12–20px, shadow subtle-2; interior tabs = chip pattern; inline colour-coded text.
- **Spectrum Gradient Panel** — large contained panel, radius 15px or full-bleed. The single high-chroma element.
- **Trust Logo Strip** — full-width horizontal, grayscale logos, equal weight, no cards.

## Layout

Max-width ~1200px centred. Sticky top nav (wordmark left, links centre, ghost + pill CTA right). Hero = two-column asymmetric split: left = eyebrow + headline + CTAs, right = body paragraph. Below fold: full-width card panel with product demo. Stats = 4-col grid (1 dark card + 3 metric cells). Directory = 3-col card grid. Sections alternate #fff / #fafafa bands with no hard dividers. Vertical rhythm 80–120px.

## Imagery

No photography. Hero visual = contained UI card over a pastel gradient. Oversized numerals as hero graphics. Minimal outlined mono icons, low stroke weight. Grayscale logo strip. Imagery < 20% of visual space.

## Do

- Display font 700, -0.04em, for all headlines ≥ 40px.
- One CTA colour, used only for CTAs.
- 48px radius on filled primary, 999px on ghost — asymmetry is intentional.
- Gradient only on large atmospheric panels, never text or small UI.
- Metric cells = display font numeral + body font label.
- #fafafa card bg (not #fff) on the default surface.

## Don't

- No pure #fff section backgrounds (only card interiors/overlays).
- No shadows heavier than rgba(43,43,48,.1) 0 1px 4px.
- No display font below 24px.
- No card radius above 20px.
- No coloured badge backgrounds.
- No gradient as text colour or button background.

---

## Measured on panxo.com (3 Oct 2026, 1440×900) — these override the Refero text above where they differ

| Element | Measured |
|---|---|
| Hero headline | Mona Sans **500**, 56px / 56px, letter-spacing -0.56px (-0.01em), ink |
| Section h2 | Mona Sans 500, 40px / 48px, -0.4px; second phrase often at 56% ink (two-tone) |
| Eyebrow | Inter 500, 12px / 16px, +0.48px, uppercase, 72% ink (never coloured) |
| Lede | Inter 500, 18px / 24px, -0.18px, 72% ink |
| Buttons | 40px tall, 12px Inter 400, pad 10/14; filled near-black radius 48; secondary white radius 999 |
| Page frame | 1px hairline columns at the content edges and quarters (Framer "Line" divs), hairline rules between sections |
| Hero | title left; lede + two buttons right, bottom-aligned; full-width 24px-radius pastel image panel below holding a white UI card with tabs |
| Second section | 1 dark card ("Trusted by…") + 3 grey cells: small label top, large display number bottom |
| Statement | long centred paragraph whose words fade from grey to ink as you scroll |
| Feature sections | left headline / right paragraph header, then a framed card (list rows left, diagram panel right) |

The Refero summary said 700 weight with -0.04em tracking; the live site is 500 with -0.01em. The first two builds followed the summary and looked heavy.
