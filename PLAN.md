# VynziCFO website — build plan

Prepared 2 Oct 2026. Project folder: `~/Downloads/vynzicfo-website`. Status 2 Oct 2026: phases 0–5 complete; see CONTENT-LEDGER.md, CONTENT-REQUESTS.md, QA-REPORT.md. Run locally with `npm run dev`, build with `npm run build`.

## 1. What I found

### Inputs (all saved under `reference/`)

| Input | Where | What it gives us |
|---|---|---|
| Blueprint deck (15 slides) | `reference/blueprint-deck-text.md` | Positioning, sitemap, 10 page specs, service-page template, visual direction, homepage hierarchy |
| Existing site (3 live pages) | `reference/existing-site/*.html` | All real copy: about, 3 service lists, 7 industry write-ups, contact details |
| Old-site assets (27 files) | `reference/assets-from-old-site/` | Logo, favicon, industry icons, service illustrations |
| Panxo design system (Refero) | `reference/panxo-design-system.md` | Layouts, cards, buttons, pills, stat cells, type scale, spacing, radii, shadows, do/don't rules |

### Facts that shape the build

- **Brand colours come from the logo**: navy `#002058` and gold `#F0C030`. Old site CSS used navy `#002D62` / `#37517e`. This matches the blueprint's "deep navy base".
- **Panxo's palette conflicts with the blueprint** (warm cream + orange vs navy + teal). Resolution: take Panxo's *roles and structure* (surfaces, ink, one CTA colour, one data accent, one success accent) and fill each role with the VynziCFO palette. Section 3 has the mapping.
- **Fonts**: Mona Sans and Inter are both on Google Fonts (verified), so Panxo's typography can be used as-is with no self-hosting.
- **The old site has no contact form and no form handler.** It is plain static HTML on Apache. The new site needs a form service.
- **Insights page is "Coming Soon"** on the old site. No articles, case studies, testimonials, leadership bios, credentials or client names exist anywhere in the inputs.
- **Sustainability & ESG is a brand-new practice.** The only source for it is blueprint slide 9 (five module groups). Nothing on the old site mentions it.
- **Industries** is the richest content on the old site (7 sectors with detailed copy) but is absent from the blueprint sitemap.

## 2. Decisions

Each is settled with a recommendation so the build is not blocked. Say the word to change any of them.

| # | Decision | Recommendation | Why |
|---|---|---|---|
| D1 | CTA accent colour | **Gold `#F0C030`** on navy pills and links; teal reserved for ESG/success signals | It is already in the logo; it keeps the blueprint's "teal/green accents" meaningful for sustainability instead of spending teal on buttons |
| D2 | Industries | **Keep a `/industries` page**, linked from the Services dropdown, Services overview and footer. Nav stays 5 items | It is real, specific content and a proof-of-depth signal; deleting it would throw away the best copy we have |
| D3 | Insights | **Build the hub + article template, ship with real empty states** ("First guides publishing soon" + service CTA). No fake articles | Blueprint wants the section; fabricating titles would violate the no-hallucination rule |
| D4 | Proof sections (credentials, case studies, testimonials, leadership) | **Build the components, render them only when content exists**; every missing item goes in `CONTENT-REQUESTS.md` for the founder | The blueprint says "use real proof where permission exists"; we have none yet |
| D5 | Contact form | **Web3Forms** (free, no backend, emails to srikanth@vynzicfo.com, works on any static host). Fallback: mailto link | Old host is plain Apache; a static form service avoids PHP |
| D6 | Stack | **Astro + plain CSS custom properties, static output.** No Tailwind, no React | One service template renders 4 pages from 4 data files (no copy drift); tokens map 1:1 to the Panxo sheet; output is plain HTML that uploads to the existing Apache host or Vercel |
| D7 | Utility pages | Careers = one honest page (no openings, write to us). Privacy + Terms = short standard drafts **marked for legal review**. Sitemap = generated | Blueprint lists them; none exist today |

## 3. Design token mapping (Panxo role → VynziCFO value)

| Panxo role | Panxo | VynziCFO | Used for |
|---|---|---|---|
| Ink (text, filled CTA, dark card) | `#1c1a17` | **Navy `#0B1F4D`** (text) / `#002058` (fills) | Headlines, body, primary pill, dark stat card |
| App surface | `#fafafa` | `#FAFAFA` | Page background, light cards |
| Page base (hero wash) | `#f7f3eb` warm | **`#F2F5FA` cool** | Hero and atmospheric bands |
| Elevated card | `#ffffff` | `#FFFFFF` | Interactive cards, form panel |
| Graphite / Slate / Stone / Fossil / Ash | greys | same greys, cooled slightly | Secondary text, borders |
| CTA accent ("Smolder") | orange `#ff6020` | **Gold `#F0C030`** | Primary CTA pill fill, link hover, announcement link |
| Data accent ("Signal Violet") | `#777eff` | **Finance blue `#2F6FED`** | Metric highlights, inline labels, icons |
| Success / positive | `#05933b` `#10b981` | **Teal `#0F9D8A`** | ESG practice marker, positive badges |
| Spectrum gradient panel | teal→violet→amber | **navy→blue→teal** | One atmospheric hero panel only |
| Display font | Mona Sans 700, -0.04em | same | Headlines ≥ 24px |
| Body font | Inter 400–700 | same | Everything ≤ 18px |
| Radii | cards 10 · badges 6 · inputs 12 · primary pill 48 · ghost 999 | same | — |
| Shadows | subtle / subtle-2 only | same | — |
| Grid | 1200px max, 80–120px sections, 24px card padding | same | — |

Panxo's "no photography" rule is overridden by the blueprint ("real people, data/dashboard visuals, abstract systems"). Rule for the build: no stock photos are added by me. Image slots are reserved and listed in `CONTENT-REQUESTS.md`; abstract SVG system/network illustrations are generated in code where the blueprint asks for them.

## 4. Site map and page inventory

| URL | Page | Primary source | Status of content |
|---|---|---|---|
| `/` | Home (8-block hierarchy, slide 15) | Blueprint 4 + 15, old-site about/services | Hero + practices + problems + how-we-work: complete. Trust, proof, insights blocks: empty-state until content arrives |
| `/services` | Services overview + problem-led selector | Blueprint 5 | Complete |
| `/services/virtual-cfo` | Virtual CFO & Strategic Finance | Blueprint 6 + old services.html | Complete (8 modules from old site, flow from blueprint) |
| `/services/accounting-finance-operations` | Accounting & Finance Operations | Blueprint 7 + old services.html | Complete (9 modules) |
| `/services/technology-automation` | Technology & Automation | Blueprint 8 + old services.html | Complete (6 modules, 5-step method) |
| `/services/sustainability-esg` | Sustainability & ESG | Blueprint 9 only | Complete at module level; "challenge" and "deliverables" blocks written from the module lists, flagged EDITED |
| `/industries` | 7 sectors | Old industries.html | Complete, trimmed for brevity (old copy repeats 4 paragraphs verbatim across sectors) |
| `/about` | Story, approach, expertise, why, leadership | Blueprint 11 + old about section | Story/approach/why: complete. Leadership: empty-state |
| `/insights` | Hub: articles, guides, case studies, webinars | Blueprint 12 | Structure only, honest empty states |
| `/contact` | Problem-first enquiry form + details | Blueprint 13 + old contact | Complete |
| `/careers`, `/privacy`, `/terms`, `/sitemap` | Utility | — | Minimal, see D7 |

Every service page uses the one template from blueprint slide 10: Hero → Challenge → What we do → How we work → Deliverables → Who it is for → Proof → CTA.

## 5. Guardrails against hallucination and drift

1. **Content ledger before code.** Phase 2 writes every heading and paragraph into `content/*.json` with a `source` tag: `OLD-SITE` (verbatim or lightly trimmed), `BLUEPRINT` (from the deck), `EDITED` (rewritten for clarity, source noted), `NEEDS-INPUT` (slot only). You review the ledger before any page is rendered.
2. **Forbidden inventions.** No numbers, client names, logos, testimonials, team members, credentials, years-of-experience, article titles, awards or certifications unless they appear in an input. Proof components render nothing when their data is empty.
3. **One placeholder registry.** `CONTENT-REQUESTS.md` lists every `NEEDS-INPUT` slot with page, block and what to send. The build script fails if a `NEEDS-INPUT` string reaches the HTML output.
4. **Styleguide page first.** Every component is built and screenshotted on `/styleguide` before any real page uses it. Shared components change only there.
5. **One page per step.** Build, preview, screenshot at 375 / 768 / 1280, check console, then move on. No batch-building five pages blind.
6. **Reference, not memory.** Token values are read from `reference/panxo-design-system.md`; copy is read from `content/`. Nothing is typed from recollection.

## 6. Build phases and checkpoints

| Phase | Work | Output | Checkpoint |
|---|---|---|---|
| 0. Foundation ✅ | Inputs captured, assets downloaded, decisions drafted | `reference/`, this plan | You confirm D1–D7 |
| 1. Design system ✅ | Astro scaffold, `tokens.css`, fonts, base type, nav, footer, buttons, pills, cards, stat cells, badges, section shells, form fields, icon set (Lucide line icons) | `/styleguide` page | Screenshot review of the styleguide |
| 2. Content ledger ✅ | All copy as data with source tags; `CONTENT-REQUESTS.md` | `content/*.json` | You review the copy once, in one file set |
| 3. Templates ✅ | BaseLayout, ServiceLayout (8 blocks), section components | Service template rendered with Virtual CFO data | One page reviewed end to end |
| 4. Pages ✅ | Home → Services overview → 3 remaining service pages → Industries → About → Contact → Insights → utility | All 15 routes | Per-page screenshot set |
| 5. QA ✅ (see QA-REPORT.md) | Link check, HTML validation, Lighthouse (perf + a11y), contrast check on navy/gold, 3 viewports, console clean, placeholder grep, 404 page | QA report | Fix list closed |
| 6. Ship ⏳ awaiting go-ahead | `npm run build` → `dist/`; deploy to Vercel preview URL, or zip `dist/` for the Apache host | Live preview | Your go-ahead to point the domain |

Estimated effort: phases 1–3 are the bulk; phase 4 goes fast because the service template does four pages' work.

## 7. What I need from you

Nothing to start. Phases 1–3 need no new content. Before phase 4 finishes, the founder can send (in any order, all optional for launch):

- Leadership: names, roles, 2–3 line bios, headshots
- Proof: credentials, sectors served, any quantified outcomes with permission
- Testimonials with permission
- One case study per practice (before → intervention → outcome)
- Hero image preference (real team photo, or keep the abstract system illustration)
- Web3Forms access key (free signup with the contact email) for the form

---

## Revision 2 (2 Oct 2026) — modern redesign pass

**Founder feedback:** site reads as 2018/WordPress, monotonous; icons look like emoji; no animation; no abstract imagery; sectors strip not obviously clickable; Panxo reference is far more modern in layout and arrangement.

**Root cause:** every section used the same rhythm (eyebrow → heading → equal card grid). Panxo tokens were applied, Panxo *layouts* were not.

### Structure gaps vs blueprint (fixed in this pass)
1. Nav had 5 items; blueprint has 4. Industries moves into the Services dropdown and footer.
2. "Why VynziCFO?" block missing on service pages and overview (slide 2 rule).
3. Technology page had no process/architecture diagrams (slide 8).
4. No abstract systems/network imagery (slide 14).
5. No persistent CTA on mobile (slide 14).
6. No article template with a service CTA (slide 12).

### Layout patterns (each page uses at least three different ones)
| Pattern | From Panxo | Used for |
|---|---|---|
| Split-sticky | label + headline left, body right | section intros, deliverables, who-it-is-for |
| Bento grid | 1 dark anchor + metric cells | practices, approach, trust |
| Ledger list | dense rows, hairline dividers, large numerals | challenges, problems, modules |
| Demo panel | contained UI card on gradient | home hero, service heroes |
| Tabs panel | white chip tabs switching a panel | workstreams on service pages |
| Timeline | numbered horizontal flow with progress line | how we work |
| Statement band | oversized type as imagery | why VynziCFO, about |
| Marquee strip | grayscale trust strip | sectors |

### Icons, motion, imagery
- Icons: Phosphor duotone (navy/blue two-tone), 28px in hairline rings. No tinted squares.
- Motion: scroll reveal with stagger, hero chart draw + bar grow, marquee, timeline progress, hover lifts, tab transitions. All disabled under `prefers-reduced-motion`.
- Imagery: code-drawn SVG abstracts (network graph, flow pipeline, architecture hub, ESG loop, dot-grid mesh). No stock photos; real photography remains a content request.

### Order
R1 design system v2 → R2 home → R3 service template + per-practice visuals → R4 industries, about, insights (+ article template), contact, utility → R5 QA (links, console, mobile, contrast, reduced motion).
