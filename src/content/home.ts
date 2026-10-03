import type { SourceMap } from './types';

export const home = {
  hero: {
    eyebrow: 'Finance · Technology · Sustainability',
    title: ['Smarter finance.', 'Better decisions.', 'Sustainable growth.'],
    text: 'Virtual CFO, accounting and finance operations, finance technology and ESG reporting for growing businesses. One team to improve cash flow, forecasting, visibility and controls.',
    primary: 'Book a consultation',
    secondary: 'See our services',
  },
  // Blueprint block 2 "Trust: credentials / sectors / proof points". Only sectors exist today.
  trust: {
    label: 'Sectors we work in',
    sectors: ['Technology', 'Manufacturing', 'Retail trade', 'Construction', 'Healthcare', 'Financial services', 'Hospitality'],
    credentials: [] as string[],   // NEEDS-INPUT
    outcomes: [] as { label: string; value: string }[], // NEEDS-INPUT
  },
  practices: {
    eyebrow: 'Four practices',
    title: 'One partner for finance, technology and sustainability',
    text: 'Four practices that work as one team. Engage one, or combine them as your business grows.',
  },
  problems: {
    eyebrow: 'Problems we solve',
    title: 'Support for the situations growing businesses face',
    items: [
      { label: 'Growth', text: 'Plan, forecast and fund the next stage with a senior finance partner.' },
      { label: 'Visibility', text: 'Reports that arrive on time, agree with each other and drive decisions.' },
      { label: 'Control', text: 'Reconciliations, approvals and compliance that hold as you scale.' },
      { label: 'Automation', text: 'Connected systems and fewer hours lost to manual finance work.' },
      { label: 'ESG readiness', text: 'The data, reports and governance your stakeholders are asking for.' },
    ],
  },
  how: {
    eyebrow: 'How we work',
    title: 'How we work with you',
    steps: [
      { title: 'Assess', text: 'Understand the business, the numbers and the systems behind them.', icon: 'ph:magnifying-glass-duotone', outputs: ['Process and systems map', 'Pain-point list', 'Priorities agreed'] },
      { title: 'Design', text: 'Agree what good looks like: the reporting, controls and tools you need.', icon: 'ph:pencil-ruler-duotone', outputs: ['Target reporting pack', 'Controls framework', 'Tool shortlist'] },
      { title: 'Implement', text: 'Put the people, processes and technology in place.', icon: 'ph:gear-six-duotone', outputs: ['Systems connected', 'Workflows live', 'Team trained'] },
      { title: 'Improve', text: 'Review results with management and refine, month after month.', icon: 'ph:trend-up-duotone', outputs: ['Monthly review', 'Forecast refreshed', 'Next priorities'] },
    ],
  },
  about: {
    eyebrow: 'About VynziCFO',
    title: 'A finance partner built for the way modern businesses operate',
    text: 'Finance, data, technology and sustainability always overlap. Vynzi CFO is a strategic and technology-driven consulting and accounting firm, committed to helping clients optimise their finance strategy, achieve operational excellence, adopt the right technology and grow sustainably and profitably.',
    cta: 'About us',
  },
  proof: {
    eyebrow: 'Proof',
    title: 'Outcomes, case studies and client voices',
    items: [] as { title: string; text: string }[], // NEEDS-INPUT; block hidden while empty
  },
  insights: {
    eyebrow: 'Insights',
    title: 'Practical thinking on finance, automation and ESG',
    empty: 'First guides and articles are in preparation. In the meantime, the fastest way to get an answer is to ask us directly.',
    cta: 'Visit insights',
  },
  finalCta: {
    title: 'Book a confidential consultation',
    text: 'Tell us what you are trying to improve. We will help identify where VynziCFO can add value.',
    primary: 'Book a consultation',
    secondary: 'See our services',
  },
};

export const homeSources: SourceMap = {
  'about.eyebrow': 'BLUEPRINT',
  'about.cta': 'EDITED',
  'insights.eyebrow': 'BLUEPRINT',
  'insights.cta': 'EDITED',
  'hero.eyebrow': 'EDITED',
  'hero.title': { src: 'BLUEPRINT', note: 'Recommended positioning, slides 1 and 4.' },
  'hero.text': { src: 'EDITED', note: 'US CFO-services register (reference/ux-and-copy-research.md): services by name, then outcomes. Outcomes are the blueprint problems (growth, visibility, control).' },
  'hero.primary': 'BLUEPRINT',
  'hero.secondary': 'BLUEPRINT',
  'trust.label': 'EDITED',
  'trust.sectors': { src: 'OLD-SITE', note: 'Industries listed on the old home page.' },
  'trust.credentials': 'NEEDS-INPUT',
  'trust.outcomes': 'NEEDS-INPUT',
  'practices': { src: 'EDITED', note: 'Slide 15 block 3. Heading rewritten to the literal, benefit-led US register.' },
  'problems.eyebrow': 'BLUEPRINT',
  'problems.title': 'EDITED',
  'problems.items': { src: 'EDITED', note: 'Five labels verbatim from slides 5/15; descriptions are new.' },
  'how.eyebrow': 'BLUEPRINT',
  'how.title': { src: 'EDITED', note: 'Literal heading per research; the slide 11 approach words appear on /about.' },
  'how.steps': { src: 'EDITED', note: 'Step names from slide 15; descriptions and the output chips are new and generic (they name the deliverables listed on the practice pages).' },
  'about.title': { src: 'BLUEPRINT', note: 'Slide 11 "The story".' },
  'about.text': { src: 'OLD-SITE', note: 'Old home page intro, lightly trimmed and combined with the slide 11 story line.' },
  'proof': 'NEEDS-INPUT',
  'insights.title': 'EDITED',
  'insights.empty': { src: 'EDITED', note: 'Honest empty state; no article titles invented.' },
  'finalCta': { src: 'BLUEPRINT', note: 'Slide 15 block 8 and slide 13.' },
};
