import type { SourceMap } from './types';

export interface Article {
  slug: string; type: 'article' | 'guide' | 'case-study' | 'webinar';
  title: string; summary: string; date: string; practice: string; readTime?: string; body?: string[];
}

export const insights = {
  hero: {
    eyebrow: 'Insights',
    title: 'Practical thinking on finance, automation and ESG',
    text: 'Guides, checklists and articles written by the people who do the work. Each one ends with the practice that can help.',
  },
  types: [
    { key: 'guide', label: 'Guides and checklists', icon: 'ph:list-checks-duotone', text: 'Step-by-step checklists you can run this month: close, working capital, ERP readiness, ESG data.' },
    { key: 'article', label: 'Expert insights', icon: 'ph:file-text-duotone', text: 'Short articles on CFO work, finance transformation, automation and ESG.' },
    { key: 'case-study', label: 'Case studies', icon: 'ph:briefcase-duotone', text: 'Before, intervention, outcome. Published only with client permission.' },
    { key: 'webinar', label: 'Webinars and events', icon: 'ph:video-duotone', text: 'Short sessions that demonstrate expertise and answer real questions.' },
  ],
  emptyByType: {
    'case-study': { title: 'Case studies are published with client permission', text: 'We are preparing the first ones now. If you want to know how we have handled a situation like yours, ask and we will walk you through it on a call.', cta: 'Ask about similar work' },
    'webinar': { title: 'No sessions scheduled yet', text: 'When the first session is announced it will be listed here. If your team would like a private walkthrough of any guide on this page, we are happy to run one.', cta: 'Request a session' },
  } as Record<string, { title: string; text: string; cta: string }>,
  articles: [
    {
      slug: 'month-end-close-checklist', type: 'guide', practice: 'accounting-finance-operations', date: 'October 2026', readTime: '5 min',
      title: 'Month-end close checklist: a reporting calendar that holds',
      summary: 'A close that lands on the same working day every month comes from a fixed calendar, named owners and a short list of sign-offs. Here is the list.',
      body: [
        'A late close is rarely a skills problem. It is usually a sequencing problem: sub-ledgers are still open when the general ledger review starts, reconciliations are done after the numbers have been shared, and nobody owns the cut-off. The fix is a calendar that everyone can see and a checklist that does not change from month to month.',
        'Day 0, cut-off. Stop posting to the period. Confirm the last invoice, receipt and payroll run that belong to the month. Anything after that goes to the next period, without exception.',
        'Days 1 to 2, sub-ledgers. Close receivables, payables, inventory and fixed assets. Run the ageing reports and the inventory valuation before anyone touches the general ledger.',
        'Days 2 to 3, reconciliations. Bank, inter-company, customer and vendor balances, and every control account. A reconciliation is finished when the difference is explained and signed, not when it is small.',
        'Day 4, accruals and provisions. Post what is known, estimate what is not, and document the basis of each estimate so next month starts from the same logic.',
        'Day 5, review. One reviewer reads the trial balance against last month and against budget. Every movement that cannot be explained in a sentence goes back for investigation.',
        'Days 6 to 7, the pack. Profit and loss, balance sheet, cash flow and a page of commentary. Issue it on the agreed day even if a note says one item is still being resolved. Predictability builds more trust than perfection.',
        'Mid-month, the KPI review. The pack is for management; a shorter set of indicators is for running the business week to week. Agree which five to seven numbers those are and keep them on one page.',
        'If your close takes longer than ten working days or the numbers change after they are issued, the calendar is the place to start. Our finance operations practice runs this cycle for clients and will set it up with your team.',
      ],
    },
    {
      slug: 'working-capital-review', type: 'guide', practice: 'virtual-cfo', date: 'October 2026', readTime: '6 min',
      title: 'Working capital review: what to look at first',
      summary: 'Cash tied up in receivables, inventory and payables is the most common reason a profitable business feels poor. A structured review finds it in a week.',
      body: [
        'Working capital is the cash the business needs to fund its day-to-day operating cycle: what customers owe you, what you hold in stock, and what you owe suppliers. When growth is fast, the cycle lengthens quietly, and profit on the income statement stops showing up in the bank. A review looks at each of the three in turn.',
        'Receivables. Pull the ageing report and sort by customer. Look for three patterns: customers who are consistently late, invoices that were disputed and never resolved, and credit terms that drifted beyond policy. Then check how long it takes from delivery to invoice; the gap before the invoice is sent is often larger than the gap after.',
        'Inventory. Separate stock into moving, slow and dead. Slow stock is usually a purchasing-pattern problem; dead stock is a decision that has not been made. Agree a reorder logic for the moving lines and a write-down or clearance plan for the rest.',
        'Payables. Paying early is a cost unless you are taking a discount for it. Map supplier terms against actual payment dates. Where you are paying faster than terms, the fix is scheduling, not negotiation. Where terms are short, it may be worth a conversation with the supplier.',
        'The output of the review is a one-page plan: a target days figure for each of receivables, inventory and payables, an owner for each, and a monthly check against the target in the management pack.',
        'A virtual CFO engagement typically starts with this review, because it tends to release cash faster than any other single change. If you would like a second pair of eyes on your numbers, talk to us.',
      ],
    },
    {
      slug: 'erp-readiness-checklist', type: 'guide', practice: 'technology-automation', date: 'October 2026', readTime: '6 min',
      title: 'ERP readiness checklist for finance teams',
      summary: 'Most ERP projects go wrong before the software is chosen. Ten questions to answer before you talk to a vendor.',
      body: [
        'An ERP selection is a finance-process decision first and a technology decision second. Teams that document how they work before they look at demos end up choosing on substance; teams that start with demos end up choosing on presentation. These are the questions to settle first.',
        'One: what does the chart of accounts need to look like in three years, not today? Entity structure, cost centres and reporting dimensions are far easier to design now than to re-cut after go-live.',
        'Two: which processes are broken, and which are simply manual? Broken processes need redesign before automation; manual processes may only need integration.',
        'Three: where does data enter the business? Sales systems, banking, payroll, inventory and expense tools all feed finance. List each source, who owns it, and how often it changes.',
        'Four: what reports does management actually read? Collect the last three months of packs and dashboards. Anything nobody reads does not need to be rebuilt.',
        'Five: what are the controls? Approval limits, segregation of duties and audit trail requirements should be written down and handed to vendors as requirements, not discovered during implementation.',
        'Six: who will own the system after go-live? If the answer is a single person, plan for a second.',
        'Seven: how clean is the master data? Customer, vendor and item records with duplicates and gaps will migrate as duplicates and gaps.',
        'Eight: what is the cut-over plan? A period-end cut-over with a parallel month is slower and safer; a hard cut-over is faster and riskier. Decide deliberately.',
        'Nine: what is the realistic budget, including the finance team\'s own time? Internal time is usually the largest unplanned cost.',
        'Ten: what does success look like at six months? Close time, report turnaround, number of spreadsheets retired. Write the targets down before selection so the project can be judged against them.',
        'Our technology and automation practice runs this assessment as the first step of every selection. If you are at the start of an ERP decision, this is the conversation to have first.',
      ],
    },
    {
      slug: 'esg-data-readiness-brsr', type: 'guide', practice: 'sustainability-esg', date: 'October 2026', readTime: '7 min',
      title: 'ESG data readiness: preparing for BRSR',
      summary: 'The Business Responsibility and Sustainability Report asks for data most finance teams have never collected. A readiness plan in five steps.',
      body: [
        'BRSR, the Business Responsibility and Sustainability Reporting format prescribed by India\'s securities regulator, is structured around nine principles and asks for quantitative disclosures on energy, emissions, water, waste, workforce, suppliers and governance. Companies that are new to it discover that the challenge is less the report and more the data behind it. A readiness plan treats it like any other reporting process.',
        'Step one, map the data points. Take the disclosure template and list every number it asks for. For each, record the source system or department, the owner, the unit of measure and the frequency of collection. Gaps become visible immediately.',
        'Step two, establish the boundary. Which entities, sites and operations are in scope? For greenhouse-gas disclosures, agree the approach to Scope 1, 2 and 3 emissions and document the methodology so it can be repeated and assured.',
        'Step three, build the collection process. Spreadsheets emailed around once a year do not survive assurance. Standardise the templates, assign owners, set a calendar, and route the data through a validation step before it reaches the report.',
        'Step four, bring suppliers in early. Value-chain data is the slowest to collect. Decide which suppliers matter most, tell them what you will ask for and when, and offer a simple template.',
        'Step five, dry-run the report. Produce a complete draft one cycle before it is required. The gaps and the questions it raises are the real readiness assessment.',
        'Treating ESG data with the same discipline as financial data is the whole premise of our sustainability practice. If your first BRSR cycle is approaching, this is where we would start.',
      ],
    },
    {
      slug: 'when-does-a-growing-business-need-a-cfo', type: 'article', practice: 'virtual-cfo', date: 'October 2026', readTime: '4 min',
      title: 'When does a growing business need a CFO?',
      summary: 'Not at a revenue number. The signal is a set of decisions the founder is making alone that a finance leader should be in the room for.',
      body: [
        'Founders often ask whether they are "big enough" for a CFO. Size is the wrong test. The right test is which decisions are being made without senior finance input, and what those decisions cost when they go wrong.',
        'The first signal is a funding or lending conversation. Investors and banks expect a model, a forecast and a clear story about cash. Preparing that under time pressure, without someone who has done it before, is where founders lose leverage.',
        'The second is a pricing or margin question that nobody can answer with confidence. If the business cannot say which products, customers or channels make money, growth can quietly make things worse.',
        'The third is a cash surprise: a month where the bank balance and the profit figure tell different stories. That gap is almost always working capital, and it needs a plan rather than a reaction.',
        'The fourth is a board or a management team that wants numbers it can act on, and gets a bookkeeping report instead.',
        'A full-time CFO is a large fixed cost, and most growing businesses do not need one five days a week. They need the capability for the decisions above, sized to their stage. That is the case for a virtual CFO: senior finance leadership on the days it is needed, with the forecasting, reporting and controls built so the business can run between those days.',
      ],
    },
    {
      slug: 'from-esg-disclosure-to-esg-management', type: 'article', practice: 'sustainability-esg', date: 'October 2026', readTime: '4 min',
      title: 'From ESG disclosure to ESG management',
      summary: 'A report produced once a year under pressure proves little. The companies that benefit from ESG treat it as something they run, not something they file.',
      body: [
        'The first ESG report most companies produce is a reconstruction: data gathered after the fact, methodology chosen to fit what could be found, and a document that nobody inside the business uses. It satisfies a requirement. It does not change anything.',
        'ESG management starts from the other end. It asks which environmental, social and governance factors actually matter to the business and its stakeholders, sets a small number of indicators for them, assigns owners, and reviews the numbers on the same cadence as financial results.',
        'When that is in place, the report becomes an output of a process rather than a project. Data is collected continuously, validated as it arrives, and traceable to its source. Assurance becomes straightforward because the evidence already exists. Ratings improve because disclosure quality improves.',
        'Finance teams are well placed to lead this, because it is a reporting discipline they already understand: a chart of indicators instead of a chart of accounts, a collection calendar instead of a close calendar, and controls over data quality. Our sustainability practice is built on exactly that overlap.',
      ],
    },
    {
      slug: 'automate-the-process-not-the-spreadsheet', type: 'article', practice: 'technology-automation', date: 'October 2026', readTime: '4 min',
      title: 'Automate the process, not the spreadsheet',
      summary: 'Finance automation fails when it reproduces a manual workaround in software. Start with the process you wish you had.',
      body: [
        'The most common automation request we hear is "can you automate this spreadsheet". The spreadsheet usually exists because two systems do not talk to each other, and someone built a bridge by hand. Automating the bridge preserves the gap.',
        'A better starting question is: what is the process supposed to do? Invoices should be approved against a purchase order and paid on terms. Bank transactions should match to the ledger without manual keying. Reports should assemble themselves from validated data on a schedule.',
        'Once the intended process is written down, the technology choices become clear. Some gaps close with an integration between existing systems. Some close with a workflow tool. A few need a change of system. Only the last is expensive, and it is rarely the first thing to do.',
        'The result is fewer hours of manual work, but more importantly, fewer places where errors can enter. Controls that live in a process are stronger than controls that live in a person\'s memory of how the spreadsheet works.',
        'Our technology and automation practice begins every engagement by mapping the process before touching any software. It is slower for a week and faster for years.',
      ],
    },
  ] as Article[],
};

export const insightsSources: SourceMap = {
  'hero.eyebrow': 'BLUEPRINT',
  'hero.title': 'EDITED',
  'hero.text': { src: 'EDITED', note: 'Slide 12: "Every article should have a relevant service CTA".' },
  'types': { src: 'BLUEPRINT', note: 'Four content types from slide 12; descriptions lightly edited. Guides listed first because they are the type with content.' },
  'emptyByType': { src: 'EDITED', note: 'Honest empty states for the two types that need client permission or scheduling.' },
  'articles': { src: 'EDITED', note: 'Original editorial content written for the site from general finance, systems and ESG practice. Contains no client data, no figures and no claims about VynziCFO results. Founder review requested (CONTENT-REQUESTS item 6). BRSR described factually as the SEBI-prescribed format.' },
};
