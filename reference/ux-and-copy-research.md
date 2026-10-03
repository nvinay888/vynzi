# UX and copy research (2 Oct 2026)

Done after founder feedback that the hero had too many actions and the services copy read badly. Sources were fetched and read; nothing below is copied into the site.

## How US CFO-services firms write

| Firm | H1 | Lede pattern | Primary CTA |
|---|---|---|---|
| Preferred CFO | "Fractional CFO Services for Growing Companies" | names the services, then the outcomes: cash flow, forecasting, visibility, profitability, growth | "Contact Our Team" / "Let's Talk" |
| Kruze Consulting | "Expert Accounting for VC-Funded Startups" | one sentence: who they serve and what they do | "Get a Free Consultation" |
| Burkland | "Your Startup's Finance & HR Team, Without the Overhead" | lists the practices and the stages served | "Get Started" |
| Paro | "Hire a Fractional Startup CFO" | benefit + "without the full-time or big firm costs" | "Schedule a Free Consultation" |

Conventions:
- H1 = category + audience, in plain words. No aphorisms, no "X not Y" constructions.
- Lede = the services by name, then the business outcomes (cash flow, forecasting, visibility, profitability, controls, growth).
- H2s are benefit-led and literal: "CFO Services Built for Growth, Visibility, and Better Decisions", "One Partner, Complete Finance Stack", "Right-Size Support for Every Stage", "How Paro Works", "Why Burkland?".
- Buttons: verb-first, 2–5 words, same label repeated at every CTA point. "Learn more" for secondary links.
- Social proof is everywhere (client counts, logos, case studies, reviews). VynziCFO has none yet; slots stay hidden rather than faked.
- Sentence or title case; active voice; addresses the owner/founder directly ("your").

## UX guidelines applied (Nielsen Norman Group, homepage and CTA articles)

- One primary call to action per screen; alternatives demoted to secondary or text style. Competing primaries split attention.
- The value proposition must be clear within the first seconds of a visit; include a tagline that explicitly says what the company does.
- "Avoid visual competition among your homepage elements — if everything is emphasized, nothing stands out."
- Visuals should be informative and relevant, not decorative.
- Button labels: 2–5 words, start with a verb, describe the outcome.
- Speak the users' language; avoid jargon.

## Rules adopted for VynziCFO

1. Every hero: eyebrow, headline, lede, one gold button, at most one text link. Nothing else clickable inside the hero.
2. Headlines in the US register: say what and for whom. Section headings are literal and benefit-led.
3. Secondary buttons site-wide become text links with an arrow.
4. Trust strip is static and quiet (grayscale row), never a carousel.
5. The hero visual is the one animated element; it loops so it is obviously alive, and carries labels only, never figures.
6. No pills or chips that do not filter real content.

Sources: preferredcfo.com, kruzeconsulting.com, burklandassociates.com, paro.ai/fractional-cfo-services, nngroup.com/articles/homepage-design-principles, search summaries of NN/g CTA guidance.

## UX checklist (sources: Nielsen's 10 usability heuristics, Laws of UX, NN/g homepage principles, Panxo do/don'ts)

| # | Rule | Source | How it is applied |
|---|---|---|---|
| 1 | One primary action per screen; alternatives become text links (Hick's Law, Choice Overload, Von Restorff) | NN/g, Laws of UX | Every hero and CTA band: one gold button + at most one arrow link. Ghost secondary buttons removed site-wide. |
| 2 | Never auto-move content the user needs to read or click (carousels, marquees) | NN/g carousel research | Sector marquee replaced by a static, grayscale strip. The only moving element is the hero demo panel, which is illustrative, pausable on hover, and off under reduced-motion. |
| 3 | Value proposition clear in seconds; tagline says what the company does | NN/g homepage | Home: founder's tagline as H1, lede names the four services and the outcomes. Services: "Finance, technology and ESG services for growing companies". |
| 4 | Speak the users' language; no internal jargon (Heuristic 2) | NN/g | BRSR and GRI expanded on first use; "FP&A" written out; section headings literal and benefit-led. |
| 5 | Aesthetic and minimalist: every extra element competes (Heuristic 8) | NN/g | Hero index list removed; hero chips on Industries removed; insights filter pills removed until there are articles to filter. |
| 6 | Visibility of system status (Heuristic 1) | NN/g | Active nav item, active tab, filter state, form success/error message, demo-panel tab progress bar, timeline progress. |
| 7 | Consistency and standards; Jakob's Law | NN/g, Laws of UX | Logo links home; Services first and Contact last in nav; same "Book a consultation" label at every generic CTA; practice pages use one practice-specific label throughout the page. |
| 8 | Recognition rather than recall (Heuristic 6) | NN/g | Numbered section indexes, sticky side index on Industries, practice names repeated in cross-links, badges name the practice on selector cards. |
| 9 | Fitts's Law: targets large enough, especially on touch | Laws of UX | Minimum 40px tap height on nav, footer links, trust strip, pills and chips on coarse pointers. |
| 10 | Chunking / Miller's Law: 5–7 items per group | Laws of UX | Nav 4 items; practices 4; problems 5; sectors 7 (max); workstream modules shown per tab, not all at once. |
| 11 | Law of Common Region / Proximity | Laws of UX | Alternating bands and cards group related content; deliverables and who-it-is-for sit in their own sections. |
| 12 | Peak–End Rule / Serial Position | Laws of UX | Every page opens with the strongest statement and ends with the same confident CTA band. |
| 13 | Error prevention and recovery (Heuristics 5, 9) | NN/g | Required fields marked, browser validation, plain-language success and error messages, mailto fallback when the form service is not configured. |
| 14 | Informative, not decorative, visuals | NN/g homepage | Hero visual is a management-pack demo; practice heroes show a close calendar, an architecture diagram, an ESG loop. No stock imagery. |
| 15 | Design-system discipline | Panxo do/don'ts | One CTA colour (gold); 48px filled pills, 999px ghosts; card radius ≤ 20px; shadows no heavier than subtle-2; display font ≥ 24px only; no gradient on text or buttons. |

## Page audit (what was wrong → what changes)

| Page | Problems found | Fix |
|---|---|---|
| Home | Hero had 2 buttons + 4 index links (choice overload); marquee auto-scrolled; sector strip read as testimonials; demo panel animated once then sat still | Hero = headline, lede, one button, one text link. Static trust strip. Demo panel loops through four views with a visible progress bar, pauses on hover. |
| Services overview | Headline was a slogan ("Pick the problem…"); two buttons in hero | US-register headline and lede; one button + "Find your situation" text link that jumps to the selector. |
| Service pages | Two buttons in hero; one practice page headline was an aphorism; jargon (BRSR, GRI, FP&A) unexplained | Secondary demoted to text link; Technology headline rewritten; acronyms expanded on first use. |
| Industries | Hero carried seven clickable chips plus the side index (duplicate navigation) | Chips removed; side index is the single way to jump. |
| About | Fine structurally; hero aside badges are non-interactive context | No change beyond hero component update. |
| Insights | Filter pills led nowhere; hero too tall for a page with no content yet | Compact hero; pills render only when articles exist; the four content types stay as information; the empty state is the focal element. |
| Contact | Fine; one primary action | No change. |
| Nav dropdown | Practices first, overview second; founder wants overview first | Columns swapped. |
| Footer / strip links | Tap targets under 40px on mobile | Padding added for coarse pointers. |
