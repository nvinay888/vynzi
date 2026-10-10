import type { SourceMap } from './types';

/* All sector copy is from the old industries.html, kept in full and lightly edited for grammar. Nothing added. */
export interface Sector {
  slug: string; name: string;
  context: string;           // the sector's situation, from the old intro paragraph
  provide: string;           // "We provide…" summary line from the old site
  services: { title: string; text: string }[]; // full service paragraphs from the old site
  practices: string[];       // practice slugs most relevant to this sector (derived from the services listed)
}

export const industries = {
  hero: {
    eyebrow: 'Industries',
    title: 'Finance, technology and ESG support for seven sectors',
    text: 'Whether you are in software, retail, construction, healthcare, manufacturing, financial services or hospitality, our team brings experience of the leading practices and solutions in your industry. Vynzi provides a specialised and comprehensive range of virtual CFO, strategic consulting, accounting and technology integration services across all of them.',
  },
  sectors: [
    {
      slug: 'technology', name: 'Technology',
      context: 'Technology changes at a rapid pace, and there is an undoubted need for a robust financial system to adopt those changes and drive growth. We have expert staff to help you navigate the changes.',
      provide: 'Financial planning, mergers and acquisitions support, and a full finance and accounting service.',
      services: [
        { title: 'Financial planning', text: 'Our financial planning services help technology start-ups and established firms alike navigate growth and expansion with confidence.' },
        { title: 'Mergers and acquisitions', text: 'We provide strategic guidance and due diligence support for technology companies involved in mergers, acquisitions and other transactions.' },
        { title: 'Finance and accounting services', text: 'We provide payroll, accounts receivable, accounts payable, general ledger accounting, financial planning and analysis, KPI reporting, technology integration, book closure, audit and investor support services.' },
      ],
      practices: ['virtual-cfo', 'accounting-finance-operations', 'technology-automation'],
    },
    {
      slug: 'manufacturing', name: 'Manufacturing',
      context: 'The manufacturing industry has abundant opportunities and, at the same time, several challenges, from supply-chain constraints to talent acquisition. We have experienced and dedicated staff to help you overcome them.',
      provide: 'Supply-chain finance, working capital management, inventory cost management, risk management and data analytics.',
      services: [
        { title: 'Budgeting and forecasting', text: 'We deliver realistic budgets and financial forecasts to guide strategic decision-making and resource allocation. This includes variance analysis, ratio analysis, sensitivity analysis and scenario planning to assess the potential impact of different business scenarios.' },
        { title: 'Internal controls and risk management', text: 'We assist and guide in the implementation of internal controls to safeguard assets, ensure compliance with laws and regulations and mitigate operational and financial risks. This includes risk assessment, internal control design and implementation, and monitoring and evaluation of control effectiveness.' },
        { title: 'Costing and inventory management', text: 'We help companies analyse and manage their costs effectively to improve profitability and operational efficiency. This includes implementing cost accounting systems, conducting cost analysis and identifying opportunities for cost reduction and process improvement. We also assist with strategies to optimise inventory levels, reduce carrying costs and minimise the risk of obsolescence.' },
        { title: 'Finance and accounting services', text: 'We provide accounts receivable, accounts payable, general ledger accounting, financial planning and analysis, KPI reporting, technology integration, book closure, audit and investor support services.' },
      ],
      practices: ['virtual-cfo', 'accounting-finance-operations', 'technology-automation', 'sustainability-esg'],
    },
    {
      slug: 'retail-trade', name: 'Retail trade',
      context: 'Retail faces several challenges in today\'s dynamic marketplace, including e-commerce competition, rising operating costs and changing customer preferences. We have highly experienced staff in the retail industry, and we help you achieve sustainable growth and profitability.',
      provide: 'Services tailored to your requirements, from inventory management and cost accounting to process automation and performance analysis.',
      services: [
        { title: 'Budgeting and forecasting', text: 'We deliver realistic budgets and financial forecasts to guide strategic decision-making and resource allocation. This includes variance analysis, ratio analysis, sensitivity analysis and scenario planning to assess the potential impact of different business scenarios.' },
        { title: 'Internal controls and risk management', text: 'We assist and guide in the implementation of internal controls to safeguard assets, ensure compliance with laws and regulations and mitigate operational and financial risks. This includes risk assessment, internal control design and implementation, and monitoring and evaluation of control effectiveness.' },
        { title: 'Costing and inventory management', text: 'We help companies analyse and manage their costs effectively to improve profitability and operational efficiency. This includes implementing cost accounting systems, conducting cost analysis and identifying opportunities for cost reduction and process improvement. We also assist with strategies to optimise inventory levels, reduce carrying costs and minimise the risk of obsolescence.' },
        { title: 'Finance and accounting services', text: 'We provide accounts receivable, accounts payable, general ledger accounting, financial planning and analysis, KPI reporting, technology integration, book closure, audit and investor support services.' },
      ],
      practices: ['accounting-finance-operations', 'technology-automation', 'virtual-cfo'],
    },
    {
      slug: 'construction', name: 'Construction',
      context: 'Urbanisation and development have driven massive growth in the construction industry, while the industry faces challenges from rising material costs, skilled-labour shortages, regulatory change and environmental concerns. We have a pool of subject-matter experts from the industry, and we help in managing those challenges, risks and complexities.',
      provide: 'Financial planning, budgeting, capital structure design, debt financing support, costing and accounting services.',
      services: [
        { title: 'Project financing and capital structure', text: 'We assist construction companies in securing project financing, evaluating capital investment opportunities and optimising capital structure. This includes financial modelling, feasibility analysis and assistance with debt financing, equity financing and project financing arrangements.' },
        { title: 'Financial analysis and performance measurement', text: 'We provide financial analysis and performance measurement services to help construction firms evaluate their financial health, profitability and operational efficiency. This includes benchmarking against industry peers, ratio analysis and key performance indicator (KPI) tracking to identify areas for improvement.' },
        { title: 'Finance and accounting services', text: 'We assist with revenue recognition methods, percentage-of-completion methods, cash-flow management, accounts payable, general ledger accounting, financial planning and analysis, KPI reporting, book closure, technology integration, audit and investor support services.' },
      ],
      practices: ['virtual-cfo', 'accounting-finance-operations', 'sustainability-esg'],
    },
    {
      slug: 'healthcare', name: 'Healthcare',
      context: 'Healthcare providers must navigate ever-shifting regulations, competition and priorities, stepping up to challenges and regulation while keeping the wellbeing of patients first. Our specialists help in managing these challenges, risks and complexities.',
      provide: 'Financial planning and analysis, cost accounting, financial controls design, strategic finance advisory, due diligence and M&A advisory services.',
      services: [
        { title: 'Budgeting and forecasting', text: 'We deliver realistic budgets and financial forecasts to guide strategic decision-making and resource allocation. This includes variance analysis, ratio analysis, sensitivity analysis and scenario planning to assess the potential impact of different business scenarios.' },
        { title: 'Internal controls and risk management', text: 'We assist and guide in the implementation of internal controls to safeguard assets, ensure compliance with laws and regulations and mitigate operational and financial risks. This includes risk assessment, internal control design and implementation, and monitoring and evaluation of control effectiveness.' },
        { title: 'Costing and inventory management', text: 'We help companies analyse and manage their costs effectively to improve profitability and operational efficiency. This includes implementing cost accounting systems, conducting cost analysis and identifying opportunities for cost reduction and process improvement. We also assist with strategies to optimise inventory levels, reduce carrying costs and minimise the risk of obsolescence.' },
        { title: 'Strategic financial advisory', text: 'We serve as trusted advisers to boards and stakeholders, perform due diligence, and provide strategic financial guidance and insight to support decision-making, performance improvement and long-term sustainability. This includes financial strategy development, business planning, benchmarking and performance measurement to achieve organisational objectives and enhance stakeholder value.' },
        { title: 'Finance and accounting services', text: 'We provide accounts receivable, accounts payable, general ledger accounting, financial planning and analysis, KPI reporting, technology integration, book closure, audit and investor support services.' },
      ],
      practices: ['virtual-cfo', 'accounting-finance-operations'],
    },
    {
      slug: 'financial-services', name: 'Financial services',
      context: 'The banking and financial sector is undergoing robust change on the back of evolving technologies such as digital assets, AI and blockchain, as well as regulatory change and geopolitical risk. Our specialists help in managing these challenges, risks and complexities. We cater to banks, insurers, fintech companies, asset management companies, forex brokers and others.',
      provide: 'Financial planning and analysis, technology integration services, financial controls design, strategic finance advisory and due diligence.',
      services: [
        { title: 'Strategic financial advisory', text: 'We serve as trusted advisers to boards and stakeholders, perform due diligence, and provide strategic financial guidance and insight to support decision-making, performance improvement and long-term sustainability. This includes financial strategy development, business planning, benchmarking and performance measurement to achieve organisational objectives and enhance stakeholder value.' },
        { title: 'Technology support services', text: 'We assist financial institutions in leveraging technology and innovation to enhance operational efficiency, improve customer experience and drive competitive advantage. This includes evaluation of fintech solutions, implementation of digital transformation initiatives, and cybersecurity risk management to protect sensitive financial information.' },
        { title: 'Internal controls and risk management', text: 'We assist and guide in the implementation of internal controls to safeguard assets, ensure compliance with laws and regulations and mitigate operational and financial risks. This includes risk assessment, internal control design and implementation, and monitoring and evaluation of control effectiveness.' },
        { title: 'Finance and accounting services', text: 'We provide consulting and accounting services, financial planning and analysis, KPI reporting, book closure, audit and investor support services.' },
      ],
      practices: ['virtual-cfo', 'technology-automation', 'accounting-finance-operations'],
    },
    {
      slug: 'hospitality', name: 'Hospitality',
      context: 'The travel, dining, tourism and entertainment industries face challenges from economic conditions, seasonality, geopolitical tension and health and safety concerns. Our specialists help in managing these challenges, risks and complexities.',
      provide: 'Financial planning and analysis, cost accounting, financial controls design, strategic finance advisory, due diligence and M&A advisory services.',
      services: [
        { title: 'Strategic financial advisory', text: 'We serve as trusted advisers to boards and stakeholders, perform due diligence, and provide strategic financial guidance and insight to support decision-making, performance improvement and long-term sustainability. This includes financial strategy development, business planning, benchmarking and performance measurement to achieve organisational objectives and enhance stakeholder value.' },
        { title: 'Technology support services', text: 'We assist hospitality businesses in leveraging technology and innovation to enhance operational efficiency, improve customer experience and drive competitive advantage. This includes evaluation of technology solutions, implementation of digital transformation initiatives, and cybersecurity risk management to protect sensitive information.' },
        { title: 'Internal controls and risk management', text: 'We assist and guide in the implementation of internal controls to safeguard assets, ensure compliance with laws and regulations and mitigate operational and financial risks. This includes risk assessment, internal control design and implementation, and monitoring and evaluation of control effectiveness.' },
        { title: 'Finance and accounting services', text: 'We provide consulting and accounting services, financial planning and analysis, KPI reporting, book closure, audit and investor support services.' },
      ],
      practices: ['virtual-cfo', 'accounting-finance-operations', 'technology-automation'],
    },
    {
      slug: 'other', name: 'Other businesses',
      context: 'Vynzi provides a specialised and comprehensive range of virtual CFO, strategic consulting, accounting and technology integration services to a wide range of industries. If your sector is not listed, talk to us about what you need.',
      provide: 'The same four practices, scoped to your business.',
      services: [],
      practices: ['virtual-cfo', 'accounting-finance-operations', 'technology-automation', 'sustainability-esg'],
    },
  ] as Sector[],
};

export const industriesSources: SourceMap = {
  'hero.eyebrow': 'OLD-SITE',
  'hero.title': { src: 'EDITED', note: 'US register: what + for whom.' },
  'hero.text': { src: 'OLD-SITE', note: 'Old industries intro and closing line, combined.' },
  'sectors': { src: 'OLD-SITE', note: 'Context, "we provide" line and every service paragraph are the old industries.html copy in full, with grammar corrected. Hospitality technology paragraph: the old site repeated the financial-institutions text under hospitality; "financial institutions" changed to "hospitality businesses" for sense. `practices` links are derived from the services each sector lists.' },
};
