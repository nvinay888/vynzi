# QA report — 2 Oct 2026

Phase 5 of PLAN.md. Everything below was run against the built output in `dist/`.

| Check | Result |
|---|---|
| Production build | 16 pages, no errors |
| Placeholder guard (`NEEDS-INPUT` in HTML) | 0 hits |
| Internal links and assets | 0 broken across all pages |
| Console errors (dev server) | none on any page; the 404 route logs only its own 404 status |
| Viewports | Desktop (~1000px pane) and 375px mobile checked on home, styleguide, services overview, service template, industries, about, insights, contact, careers, privacy, sitemap, 404 |
| Horizontal overflow at 375px | none (scroll width = viewport) |
| Mobile menu | opens, closes, body scroll locked while open |
| Services filter pills | filter and reset verified |
| Contact form | validation and fallback path verified; live submission needs the Web3Forms key |
| Colour contrast (WCAG AA, text) | all text tokens ≥ 4.5:1 after darkening slate, blue, teal; placeholder grey 3.5:1 (placeholders only) |
| Type check (`astro check`) | not run: it prompts to install a package interactively. Build compiles all TypeScript; no type errors surfaced |
| Lighthouse | not run in this environment; site is static HTML with one Google Fonts request, no client JS beyond nav, filter and form |

## Fixes made during QA

- Hero illustration collapsed to zero width (auto margin on a grid item); replaced with `justify-self`.
- Doubled full stop on cross-practice cards; now use blueprint one-liners.
- Expertise/Why split on About was vertically centred; now top-aligned.
- Floating chips in the hero illustration hidden below 520px to stop overlap.
- Slate `#747b8c → #5f6678`, blue `#2f6fed → #2457d6`, teal `#0f9d8a → #0a7a69`, stone `#969ca9 → #7f8694` for AA contrast. The decorative spectrum gradient keeps the brighter stops.

## Known gaps (content, not code)

See CONTENT-REQUESTS.md. The proof strip, stat cells, case studies, testimonials, leadership and insights articles are built and hidden until content exists.

## Ship options

- `dist/` is plain HTML/CSS; `../vynzicfo-site-dist.zip` is ready to upload to the current Apache host (replace the old site's files; `.html` extensions are kept so existing links keep working).
- Or deploy to Vercel for a preview URL (`npm run build`, output directory `dist`).


---

# QA report — Revision 2 (2 Oct 2026, late)

| Check | Result |
|---|---|
| Production build | 16 pages, no errors |
| Placeholder guard | 0 hits |
| Internal links, assets and `/industries#…` anchors | 0 broken |
| Dev-server errors after restart | none |
| Desktop visual pass | home, services, all 4 practice pages, industries, about, insights, contact |
| Interactions | mega-menu hover, workstream tabs, services filter pills, insights filter pills, industries sticky index, marquee pause-on-hover, mobile menu, mobile sticky CTA |
| Motion | scroll reveal with stagger; hero chart draw, bar grow, row stream, ESG ring; timeline progress; flow-diagram dash; architecture path draw; all disabled under `prefers-reduced-motion` |
| Icons | Phosphor duotone in hairline rings site-wide; zero Lucide references remain |

## Fixes during this pass
- Dev server cached a stale module graph after the `art/` folder was added; restarted.
- Bento grid: anchor spans 6 columns, practice cards span 3, so they sit 2×2 beside the dark card.
- Statement band: grid applied to the slotted wrapper's children, so the three "why" items run in columns.
- Scroll reveal now marks above-the-fold elements visible synchronously, so first paint is never blank.

---

# QA report — Revision 3 (UX guidelines pass, 2 Oct 2026)

Research and checklist: `reference/ux-and-copy-research.md` (US CFO-firm copy register; Nielsen's 10 heuristics; Laws of UX; NN/g homepage and CTA guidance; Panxo do/don'ts) with a page-by-page audit table.

| Check | Result |
|---|---|
| Build | 16 pages, clean; placeholder guard 0 hits |
| Links and anchors (`/industries#…`, `/services#selector`) | 0 broken |
| Hero actions per page | 1 button + ≤1 text link everywhere (home, services, 4 practices, industries, about, insights, contact, 404) |
| Moving content | Marquee removed; only the illustrative demo panel animates (loops 4 views, progress bar, pauses on hover, static under reduced-motion) |
| Copy | Services hero and section headings rewritten to the plain US register; BRSR/GRI expanded; "FP&A" written out; "free" promise removed |
| Nav | Dropdown columns swapped (overview + industries left, practices right) |
| Insights | Compact hero; no dead filter pills; empty state is the focal element |
| Touch targets | ≥ 40px on coarse pointers for nav, footer, strip, pills, index links |
| Desktop screenshots | home (hero, demo views 1–3, trust strip, bento), services, insights, virtual-cfo, about dropdown |

---

# QA report — Revision 4 (3 Oct 2026)

Founder feedback: empty right half in heroes on wide screens; services buried under the hero; insights types not clickable and no content; industries content thin.

| Change | Verified |
|---|---|
| Home hero: demo panel (compact, looping) beside the headline; no empty column at 1800px | Screenshot at 1800×1000 and pane width |
| Services: compact hero, four practices immediately below; step diagram removed | Screenshot |
| Insights: centered compact hero; clickable type index with counts; 4 guides + 3 articles (original, no client data) on their own pages with practice CTAs; honest empty states for case studies and webinars | Screenshots of hub and article |
| Industries: centered hero; every sector carries its full old-site service paragraphs, a "what we provide" box and practice links | Screenshot |
| Demo panel script: removed a frontmatter line that had leaked into the client script (threw "Astro is not defined") | Rotation observed |
| Build | 23 pages, placeholder guard 0, links and anchors 0 broken |

## Revision 4b — section labels and two sections redesigned
- Removed every "NN — Label" index label (section intros, statement bands, practice cards, tab numerals, industries side index). Plain eyebrows remain where a label helps.
- "Why VynziCFO" band: two columns, statement left, the three reasons as an icon list right, network art behind.
- "How we work": icon nodes on a drawing line, a card per step with its description and the concrete outputs of that step.
- Build 23 pages, links 0 broken, no numbered labels left in output.

---

# QA report — Revision 5: rebuilt against measured panxo.com (3 Oct 2026)

Founder feedback: heroes plain and bland, empty space on wide screens, site reads as WordPress, not following the reference.

Root cause: earlier builds followed the Refero text summary (700 weight, -0.04em) without studying the live site. Measured values are now in `reference/panxo-design-system.md` and drive tokens.css.

| Change | Pages |
|---|---|
| Headings Mona Sans 500 at -0.01em, two-tone headlines, 56px hero cap | all |
| Hairline column grid on every page, section rules, quarter lines in heroes | all |
| Compact 40px buttons: navy filled + white secondary; gold only on dark surfaces | all |
| Split hero (title left; lede + actions right) + pastel panel with a page-specific visual | home (looping management pack), technology (architecture), accounting (close calendar), ESG (loop), virtual CFO (management pack), industries (cycling sector explorer), about (overlap diagram + expertise), insights (featured guide + latest), contact (form + details) |
| Dark card + 3 cells stat row replaces the dark statement band | home, services, practice pages, about (values) |
| Scroll-lit statement | home |
| Section headers: headline left, paragraph + white action right | all main sections |
| Article: split hero, reading column + sticky practice card, related reading | 7 articles |
| Bug fixed: earlier label sweep had renamed `tabindex` to `tabeyebrow` in markup; restored | contact, sector marquee leftovers |
| Build | 23 pages, 0 broken links or in-page anchors, 0 placeholder markers, no console errors, no mobile overflow |

---

# QA report — Revision 6 (10 Oct 2026): brand, layouts, ESG, nav, contact, statement

| Change | Result |
|---|---|
| Brand | "Vynzi" everywhere. Registered name "Vynzi CFO Services Private Limited" kept only in Terms of use (legal publisher). 0 other mentions in output. |
| Long scroll | New SideTabs explorer (vertical tabs desktop; sticky swipeable tab bar + prev/next on mobile) on practice pages, Industries, Services selector, About, Insights, home problems. New Carousel for home sectors and related practices. Mobile swipe rows for home practices, insights, stat row, steps, services hero cards. |
| Page heights (desktop 1440) | Virtual CFO ~3,800px; Services ~3,000; About ~3,250; Industries ~2,550 |
| Page heights (mobile 375) | Home 11,055 → 8,172; practice pages ~5,000; Industries ~3,900; Contact ~3,250. No horizontal overflow anywhere. |
| ESG | Practice content replaced with deck slides 2, 5, 9, 13 only; five areas as explorer tabs; loop now Govern / Measure / Improve (deck) instead of an invented four-step loop. |
| Nav | About, Services, Insights, Contact |
| Contact | Address / phone / "what to expect" removed (footer carries contact details). Deck enquiry categories as service tabs; each updates the form box heading, description, topic chips (real modules), topic field and prompt. Unconfirmed "reply within one business day" promise removed. |
| Statement | Home statement in golden yellow, Title Case, on navy (gold on light page = 1.6:1, on navy = 9.1:1). |
| Bugs fixed during QA | Contact box icons hidden by an attribute collision with the icon library; explorer forced 927px wide on phones and its sticky tab bar was offset inside the card (overflow:hidden → overflow:clip, minmax(0,1fr)). |
| Build | 22 pages, 0 broken links or in-page anchors, 0 placeholder markers, 0 console errors |
