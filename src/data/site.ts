// Site-wide data. Contact details are verbatim from the old site (source: OLD-SITE index.html).
export const site = {
  name: 'Vynzi',
  legalName: 'Vynzi CFO Services Private Limited', // registered entity: used only in Terms of use
  tagline: 'Smarter Finance. Better Decisions. Sustainable Growth.',
  description:
    'Virtual CFO, accounting and finance operations, technology and automation, and sustainability and ESG services for growing businesses.',
  phone: '+91 90009 75014',
  phoneHref: 'tel:+919000975014',
  whatsapp: 'https://api.whatsapp.com/send?phone=919000975014',
  email: 'srikanth@vynzicfo.com',
  address:
    'Cabin 220, 2nd Floor, Divine Hive Space, Whitefield Road, Near Ramalayam, Kondapur, Serilingampally, Hyderabad, Telangana, India – 500084',
};

export const practices = [
  { slug: 'virtual-cfo', nav: 'Virtual CFO & Strategic Finance', short: 'Virtual CFO', icon: 'ph:compass-duotone', accent: 'blue', oneLiner: 'Senior finance leadership, planning and decision support.', verbs: 'Plan. Analyse. Optimise.' },
  { slug: 'accounting-finance-operations', nav: 'Accounting & Finance Operations', short: 'Finance operations', icon: 'ph:stack-duotone', accent: 'blue', oneLiner: 'Reliable accounting, reporting and finance processes.', verbs: 'Run. Control. Report.' },
  { slug: 'technology-automation', nav: 'Technology & Automation', short: 'Technology & automation', icon: 'ph:flow-arrow-duotone', accent: 'blue', oneLiner: 'ERP, analytics, integration and automation.', verbs: 'Integrate. Automate. Visualise.' },
  { slug: 'sustainability-esg', nav: 'Sustainability & ESG', short: 'Sustainability & ESG', icon: 'ph:leaf-duotone', accent: 'teal', oneLiner: 'Governance, data, reporting and implementation.', verbs: 'Govern. Measure. Improve.' },
] as const;

// Blueprint slide 3/4: four primary items. Industries lives inside Services.
export const nav = [
  { label: 'About', href: '/about' },
  {
    label: 'Services', href: '/services',
    children: [
      ...practices.map((p) => ({ label: p.nav, href: `/services/${p.slug}`, note: p.oneLiner, icon: p.icon })),
    ],
    extras: [
      { label: 'All services', href: '/services', note: 'Overview and problem-led selector' },
      { label: 'Industries', href: '/industries', note: 'Seven sectors we know well' },
    ],
  },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export const footerColumns = [
  { title: 'Services', links: [...practices.map((p) => ({ label: p.nav, href: `/services/${p.slug}` })), { label: 'All services', href: '/services' }, { label: 'Industries', href: '/industries' }] },
  { title: 'Company', links: [{ label: 'About', href: '/about' }, { label: 'Insights', href: '/insights' }, { label: 'Careers', href: '/careers' }, { label: 'Contact', href: '/contact' }] },
  { title: 'Legal', links: [{ label: 'Privacy', href: '/privacy' }, { label: 'Terms', href: '/terms' }, { label: 'Sitemap', href: '/sitemap' }] },
];

export const sectors = [
  { slug: 'technology', name: 'Technology', icon: 'ph:cpu-duotone' },
  { slug: 'manufacturing', name: 'Manufacturing', icon: 'ph:factory-duotone' },
  { slug: 'retail-trade', name: 'Retail trade', icon: 'ph:shopping-bag-duotone' },
  { slug: 'construction', name: 'Construction', icon: 'ph:hard-hat-duotone' },
  { slug: 'healthcare', name: 'Healthcare', icon: 'ph:heartbeat-duotone' },
  { slug: 'financial-services', name: 'Financial services', icon: 'ph:bank-duotone' },
  { slug: 'hospitality', name: 'Hospitality', icon: 'ph:bell-duotone' },
];
