import type { PracticeContent, SourceMap } from './types';

/* ---------- Services overview (blueprint slide 5) ---------- */
export const overview = {
  hero: {
    eyebrow: 'Services',
    title: 'Finance, technology and ESG services for growing companies',
    text: 'Virtual CFO leadership, accounting and finance operations, the systems that connect them, and sustainability reporting. Engage one practice or combine them; the same team delivers all four.',
  },
  selector: {
    title: 'Find the right support for your situation',
    intro: 'Most companies come to us with one of five situations. Each one maps to the practices that resolve it.',
    problems: [
      { key: 'growth', label: 'Growth', text: 'You are scaling and need a plan, a forecast and someone senior to pressure-test decisions.', practices: ['virtual-cfo', 'technology-automation'] },
      { key: 'visibility', label: 'Visibility', text: 'Reports arrive late or do not agree with each other, so decisions wait.', practices: ['accounting-finance-operations', 'technology-automation'] },
      { key: 'control', label: 'Control', text: 'Controls, reconciliations and compliance are stretched across too few people.', practices: ['accounting-finance-operations', 'virtual-cfo'] },
      { key: 'automation', label: 'Automation', text: 'Routine finance work is manual, and the systems you have do not talk to each other.', practices: ['technology-automation', 'accounting-finance-operations'] },
      { key: 'esg', label: 'ESG readiness', text: 'Customers, lenders or regulators are asking for sustainability data you do not yet collect.', practices: ['sustainability-esg', 'technology-automation'] },
    ],
  },
  how: {
    title: 'How every engagement runs',
    steps: [
      { title: 'Assess', text: 'Understand the business, the numbers and the systems behind them.', icon: 'ph:magnifying-glass-duotone', outputs: ['Process and systems map', 'Pain-point list', 'Priorities agreed'] },
      { title: 'Design', text: 'Agree what good looks like: the reporting, controls and tools you need.', icon: 'ph:pencil-ruler-duotone', outputs: ['Target reporting pack', 'Controls framework', 'Tool shortlist'] },
      { title: 'Implement', text: 'Put the people, processes and technology in place.', icon: 'ph:gear-six-duotone', outputs: ['Systems connected', 'Workflows live', 'Team trained'] },
      { title: 'Improve', text: 'Review results with management and refine, month after month.', icon: 'ph:trend-up-duotone', outputs: ['Monthly review', 'Forecast refreshed', 'Next priorities'] },
    ],
  },
};

export const overviewSources: SourceMap = {
  'hero.eyebrow': 'BLUEPRINT',
  'hero.title': { src: 'EDITED', note: 'US register: category + audience (reference/ux-and-copy-research.md).' },
  'hero.text': { src: 'EDITED', note: 'Summarises the four practices from blueprint slides 2 and 5.' },
  'selector.title': { src: 'EDITED', note: 'Blueprint slide 5 problem-led selector.' },
  'selector.intro': 'EDITED',
  'selector.problems': { src: 'EDITED', note: 'The five problems are verbatim from blueprint slides 5 and 15; the one-line descriptions and practice mapping are new.' },
  'how.title': 'EDITED',
  'how.steps': { src: 'EDITED', note: 'Step names from blueprint slide 15 (Assess → design → implement → improve); descriptions are new.' },
};

/* ---------- Practice 1: Virtual CFO & Strategic Finance (blueprint 6 + old services.html) ---------- */
const virtualCfo: PracticeContent = {
  slug: 'virtual-cfo',
  name: 'Virtual CFO & Strategic Finance',
  short: 'Virtual CFO',
  eyebrow: 'Plan. Analyse. Optimise.',
  icon: 'ph:compass-duotone',
  accent: 'blue',
  hero: {
    title: 'Senior finance leadership, without the full-time hire',
    text: 'A virtual CFO gives you access to senior finance capability: planning, forecasting, decision support and board-ready reporting, sized to the stage your business is at.',
    cta: 'Talk to a CFO',
  },
  challenge: {
    title: 'When businesses call us',
    intro: 'The trigger is usually one of these.',
    situations: [
      'Revenue is growing but profit and cash are not keeping pace, and nobody can say exactly why.',
      'Budgets are built once a year and forgotten; there is no rolling forecast to steer by.',
      'Investors, lenders or the board want a clear financial story and the numbers to back it.',
      'Working capital is tied up in receivables and inventory while payment deadlines keep arriving.',
      'The accounting team keeps the books, but no one owns strategy, controls and performance.',
    ],
  },
  work: {
    title: 'What we do',
    intro: 'Eight service modules, grouped into three workstreams. Engage one or combine them.',
    workstreams: [
      { title: 'Plan', modules: ['Strategic planning and integration', 'Budgeting and forecasting', 'Financial planning and analysis'] },
      { title: 'Optimise', modules: ['Growth and profitability optimisation', 'Working capital management', 'Internal controls and process improvement'] },
      { title: 'Report', modules: ['Financial and management reporting', 'Board and investor presentations'] },
    ],
  },
  how: {
    title: 'How a CFO engagement works',
    intro: 'A simple loop that repeats every month.',
    steps: [
      { title: 'Business challenge', text: 'We start with the decision you need to make, not with the chart of accounts.' },
      { title: 'CFO intervention', text: 'Analysis, scenarios and a recommendation from a senior finance professional.' },
      { title: 'Outputs and dashboards', text: 'Forecasts, KPI dashboards and management packs your team can actually use.' },
      { title: 'Management decisions', text: 'Clear options with the numbers behind each, presented to management or the board.' },
      { title: 'Ongoing review', text: 'Results tracked against plan; forecasts and priorities updated as the business moves.' },
    ],
  },
  deliverables: {
    title: 'What you receive',
    items: [
      { title: 'Annual budget and rolling forecast', text: 'With variance, sensitivity and scenario analysis.' },
      { title: 'Monthly management pack', text: 'P&L, balance sheet, cash flow and commentary in one document.' },
      { title: 'KPI dashboard', text: 'The handful of numbers that run the business, updated on a schedule.' },
      { title: 'Working capital plan', text: 'Receivables, payables and inventory targets with owners.' },
      { title: 'Controls framework', text: 'Documented controls, approvals and process improvements.' },
      { title: 'Board and investor materials', text: 'Presentations and models for funding, lending and board reviews.' },
    ],
  },
  who: {
    title: 'Who it is for',
    items: [
      'Founder-led and family-owned businesses that have outgrown bookkeeping but are not ready for a full-time CFO.',
      'Small and mid-sized companies preparing for funding, debt or a board.',
      'Management teams that want a senior finance partner in the room when decisions are made.',
    ],
  },
  proof: { title: 'Proof', items: [] },
  cta: {
    title: 'Talk to a CFO',
    text: 'Bring the decision you are wrestling with. The first conversation is confidential and without obligation.',
    primary: 'Talk to a CFO',
  },
};

/* ---------- Practice 2: Accounting & Finance Operations (blueprint 7 + old services.html) ---------- */
const accounting: PracticeContent = {
  slug: 'accounting-finance-operations',
  name: 'Accounting & Finance Operations',
  short: 'Finance operations',
  eyebrow: 'Run. Control. Report.',
  icon: 'ph:stack-duotone',
  accent: 'blue',
  hero: {
    title: 'A finance function that is accurate, timely and decision-ready',
    text: 'Keep your finance function accurate, timely and decision-ready without carrying unnecessary fixed overhead. We run the processes, you keep the control.',
    cta: 'Strengthen my finance function',
  },
  challenge: {
    title: 'When businesses call us',
    intro: 'The trigger is usually one of these.',
    situations: [
      'Month-end closes late, and the numbers change after they have been shared.',
      'Receivables and payables are managed from spreadsheets and memory.',
      'Reconciliations, payroll and audit requests pile up on one or two people.',
      'Management reports describe last quarter instead of informing next month.',
    ],
  },
  work: {
    title: 'What we do',
    intro: 'Nine service modules, grouped into three workstreams.',
    workstreams: [
      { title: 'Run', modules: ['Virtual accounting', 'Accounts receivable and accounts payable process outsourcing', 'Accounting support services', 'Payroll services'] },
      { title: 'Control', modules: ['Reconciliation support', 'Inventory management', 'Audit support services'] },
      { title: 'Report', modules: ['Management reporting', 'KPI and data analytics'] },
    ],
  },
  how: {
    title: 'How we run your finance operations',
    intro: 'Four things you can expect from day one.',
    steps: [
      { title: 'Reporting calendar', text: 'Fixed dates for close, reports and reviews, agreed up front and kept.' },
      { title: 'Close process', text: 'A documented month-end checklist with owners, cut-offs and sign-offs.' },
      { title: 'Service levels', text: 'Response and turnaround commitments for queries, payments and reports.' },
      { title: 'Quality controls', text: 'Reconciliations, reviews and exception checks built into every cycle.' },
    ],
  },
  deliverables: {
    title: 'What you receive',
    items: [
      { title: 'Clean, closed books', text: 'Monthly close completed on the agreed date.' },
      { title: 'Receivables and payables cycle', text: 'Invoicing, collections, vendor payments and ageing reports.' },
      { title: 'Reconciliations', text: 'Bank, vendor, customer and inter-company reconciliations on schedule.' },
      { title: 'Payroll processing', text: 'Accurate, on-time payroll with statutory compliance support.' },
      { title: 'Management reporting pack', text: 'Monthly reports and KPIs in a consistent format.' },
      { title: 'Audit-ready records', text: 'Schedules and support for statutory and internal audits.' },
    ],
  },
  who: {
    title: 'Who it is for',
    items: [
      'Growing businesses that need a dependable finance back office without hiring a full team.',
      'Companies with multiple entities, locations or systems where consolidation is painful.',
      'Finance leaders who want to free their own time for analysis rather than processing.',
    ],
  },
  proof: { title: 'Proof', items: [] },
  cta: {
    title: 'Strengthen my finance function',
    text: 'Tell us where the month-end hurts. We will show you what a dependable finance operation looks like for your business.',
    primary: 'Strengthen my finance function',
  },
};

/* ---------- Practice 3: Technology & Automation (blueprint 8 + old services.html) ---------- */
const technology: PracticeContent = {
  slug: 'technology-automation',
  name: 'Technology & Automation',
  short: 'Technology & automation',
  eyebrow: 'Integrate. Automate. Visualise.',
  icon: 'ph:flow-arrow-duotone',
  accent: 'blue',
  hero: {
    title: 'Finance systems selected and implemented by finance people',
    text: 'We help you select, integrate and automate the systems your finance function runs on: ERP, reporting, analytics and the connections between them.',
    cta: 'Automate my finance processes',
  },
  challenge: {
    title: 'When businesses call us',
    intro: 'The trigger is usually one of these.',
    situations: [
      'You are choosing or replacing an ERP and want someone who understands finance, not just software.',
      'Data lives in several systems and spreadsheets that are reconciled by hand every month.',
      'Routine work such as invoicing, approvals and reporting takes days that should take hours.',
      'Leadership wants dashboards, but the underlying data is not reliable enough yet.',
    ],
  },
  work: {
    title: 'What we do',
    intro: 'Six service modules, grouped into three workstreams.',
    workstreams: [
      { title: 'Select and implement', modules: ['Software selection support', 'ERP implementation support'] },
      { title: 'Integrate and automate', modules: ['Technology integration support', 'Automation of routine activities'] },
      { title: 'Analyse and visualise', modules: ['Data analytics', 'Data visualisation'] },
    ],
  },
  how: {
    title: 'How we work',
    intro: 'Five steps, in order. We do not start with a product demo.',
    steps: [
      { title: 'Assess', text: 'Map finance processes, systems and pain points.' },
      { title: 'Select', text: 'Evaluate ERP and software against business needs.' },
      { title: 'Integrate', text: 'Connect systems, data sources and reporting workflows.' },
      { title: 'Automate', text: 'Remove repetitive manual work and standardise controls.' },
      { title: 'Visualise', text: 'Turn finance data into dashboards and insights.' },
    ],
  },
  deliverables: {
    title: 'What you receive',
    items: [
      { title: 'Process and systems map', text: 'Current state, pain points and the target design.' },
      { title: 'Software selection report', text: 'Requirements, shortlist, evaluation and recommendation.' },
      { title: 'Implementation support', text: 'Finance-side configuration, data migration checks and testing.' },
      { title: 'System integrations', text: 'Connected data flows between ERP, banking, payroll and reporting tools.' },
      { title: 'Automated workflows', text: 'Standardised approvals, invoicing, reconciliations and reporting.' },
      { title: 'Dashboards', text: 'Management and KPI dashboards built on validated data.' },
    ],
  },
  who: {
    title: 'Who it is for',
    items: [
      'Businesses planning an ERP selection, implementation or upgrade.',
      'Finance teams spending more time moving data than analysing it.',
      'Companies that want business intelligence and analytics grounded in reliable finance data.',
    ],
  },
  proof: { title: 'Proof', items: [] },
  cta: {
    title: 'Automate my finance processes',
    text: 'Start with the process that costs the most hours. We will map it and show you what can be connected and automated.',
    primary: 'Automate my finance processes',
  },
};

/* ---------- Practice 4: Sustainability & ESG — deck content ONLY (founder instruction, 10 Oct 2026) ----------
   Sources: slide 2 (Govern. Measure. Improve.), slide 5 (one-liner), slide 9 (positioning, five groups, every module,
   core positioning line), slide 13 (enquiry wording). Nothing here is written outside those slides. */
const esg: PracticeContent = {
  slug: 'sustainability-esg',
  name: 'Sustainability & ESG',
  short: 'Sustainability & ESG',
  eyebrow: 'Govern. Measure. Improve.',
  icon: 'ph:leaf-duotone',
  accent: 'teal',
  hero: {
    title: 'Move from ESG disclosure to ESG management',
    text: 'An implementation-oriented ESG partner. Governance, data, reporting and implementation.',
    cta: 'Request a discussion',
  },
  challenge: { title: '', intro: '', situations: [] },
  work: {
    title: 'What we do',
    intro: 'Five areas of work, from strategy to assurance.',
    workstreams: [
      { title: 'ESG Strategy & GRC', modules: ['SOPs', 'Frameworks', 'Strategy', 'KPIs', 'Risks & opportunities', 'Materiality', 'Stakeholder evaluation', 'GHG inventory'] },
      { title: 'ESG Data & Reporting', modules: ['BRSR', 'GRI', 'Data-point mapping', 'Data governance', 'Validation', 'Value-chain data'] },
      { title: 'Automation & Technology', modules: ['Automated data collection', 'Standardised sources', 'Dashboards', 'Workflow integration'] },
      { title: 'Implementation & Capability', modules: ['Training', 'Implementation support', 'Value-chain partner training', 'ESG readiness'] },
      { title: 'Ratings & Assurance', modules: ['ESG rating improvement', 'Disclosure quality', 'Gap assessment', 'Assurance coordination'] },
    ],
  },
  how: { title: '', intro: '', steps: [] },
  deliverables: { title: '', items: [] },
  who: { title: '', items: [] },
  proof: { title: 'Proof', items: [] },
  cta: {
    title: 'Move from ESG disclosure to ESG management',
    text: 'Tell us what you are trying to improve. We will help identify where Vynzi can add value.',
    primary: 'Request a discussion',
  },
};

export const practices: PracticeContent[] = [virtualCfo, accounting, technology, esg];
export const practiceBySlug = (slug: string) => practices.find((p) => p.slug === slug);

export const practiceSources: Record<string, SourceMap> = {
  'virtual-cfo': {
    'name': 'BLUEPRINT',
    'eyebrow': 'BLUEPRINT',
    'hero.title': { src: 'EDITED', note: 'Blueprint slide 6: "Position it as access to senior finance capability, not outsourced bookkeeping."' },
    'hero.text': 'EDITED',
    'hero.cta': 'BLUEPRINT',
    'challenge': { src: 'EDITED', note: 'Situations derived from the module list and the five blueprint problems; none are client-specific.' },
    'work.workstreams': { src: 'OLD-SITE', note: 'Eight modules from blueprint slide 6; wording aligned with old services.html list (Strategic Planning and Integration, Budgeting and forecasting, Growth optimization, Working capital management, Internal Control Design, FP&A, Financial Reporting, Investor/Board presentation). Grouping into Plan/Optimise/Report is new.' },
    'work.title': 'BLUEPRINT',
    'work.intro': 'EDITED',
    'how.steps': { src: 'BLUEPRINT', note: 'Five-step flow verbatim from slide 6; one-line descriptions are new.' },
    'how.title': 'EDITED',
    'how.intro': 'EDITED',
    'deliverables': { src: 'EDITED', note: 'Each deliverable is the output of a listed module; no quantities or client references.' },
    'who': { src: 'EDITED', note: 'Old site: "small to mid sized start up companies"; blueprint: founders, CFOs, boards.' },
    'proof': 'NEEDS-INPUT',
    'cta': { src: 'EDITED', note: 'CTA label from blueprint ("Talk to a CFO").' },
  },
  'accounting-finance-operations': {
    'name': 'BLUEPRINT',
    'eyebrow': 'BLUEPRINT',
    'hero.title': 'EDITED',
    'hero.text': { src: 'BLUEPRINT', note: 'First sentence verbatim from slide 7 "Message to the visitor".' },
    'hero.cta': 'BLUEPRINT',
    'challenge': { src: 'EDITED', note: 'Derived from the module list; generic situations.' },
    'work.workstreams': { src: 'OLD-SITE', note: 'Nine modules verbatim from old services.html and blueprint slide 7; Run/Control/Report grouping is new.' },
    'work.title': 'BLUEPRINT',
    'work.intro': 'EDITED',
    'how.steps': { src: 'BLUEPRINT', note: 'Slide 7 "Show: reporting calendar • close process • SLA approach • quality controls"; descriptions are new.' },
    'how.title': 'EDITED',
    'how.intro': 'EDITED',
    'deliverables': { src: 'EDITED', note: 'Outputs of the listed modules.' },
    'who': 'EDITED',
    'proof': 'NEEDS-INPUT',
    'cta': { src: 'EDITED', note: 'CTA label from blueprint.' },
  },
  'technology-automation': {
    'name': 'BLUEPRINT',
    'eyebrow': 'BLUEPRINT',
    'hero.title': { src: 'EDITED', note: 'Slide 8 principle ("finance-process expertise first, then technology") restated in the literal US register.' },
    'hero.text': { src: 'EDITED', note: 'Old services.html: "ERP selection and implementation, financial system integration, Business intelligence and data analytics".' },
    'hero.cta': 'EDITED',
    'challenge': { src: 'EDITED', note: 'Derived from the module list.' },
    'work.workstreams': { src: 'OLD-SITE', note: 'Six modules verbatim from old services.html; grouping is new. Old site also mentions cyber security and IT audit compliance; left out pending confirmation that these are still offered (see CONTENT-REQUESTS).' },
    'work.title': 'BLUEPRINT',
    'work.intro': 'EDITED',
    'how.steps': { src: 'BLUEPRINT', note: 'Five steps and descriptions verbatim from slide 8.' },
    'how.title': 'BLUEPRINT',
    'how.intro': 'EDITED',
    'deliverables': { src: 'EDITED', note: 'Outputs of the listed modules.' },
    'who': 'EDITED',
    'proof': 'NEEDS-INPUT',
    'cta': 'EDITED',
  },
  'sustainability-esg': {
    'name': 'BLUEPRINT',
    'eyebrow': { src: 'BLUEPRINT', note: 'Slide 2.' },
    'hero.title': { src: 'BLUEPRINT', note: 'Slide 9 core positioning, verbatim.' },
    'hero.text': { src: 'BLUEPRINT', note: 'Slide 9 subtitle ("implementation-oriented ESG partner") + slide 5 one-liner.' },
    'hero.cta': { src: 'BLUEPRINT', note: 'Slide 10: "Book a consultation / request a discussion".' },
    'work': { src: 'BLUEPRINT', note: 'Five groups and every module verbatim from slide 9 (bullets split into items).' },
    'proof': 'NEEDS-INPUT',
    'cta': { src: 'BLUEPRINT', note: 'Slide 9 positioning + slide 13 enquiry wording.' },
    'challenge': { src: 'BLUEPRINT', note: 'Deliberately empty: the founder asked for deck-only ESG content and the deck has no challenge list. Not rendered.' },
    'how': { src: 'BLUEPRINT', note: 'Deliberately empty (deck-only ESG content). Not rendered.' },
    'deliverables': { src: 'BLUEPRINT', note: 'Deliberately empty (deck-only ESG content). Not rendered.' },
    'who': { src: 'BLUEPRINT', note: 'Deliberately empty (deck-only ESG content). Not rendered.' },
  },
};
