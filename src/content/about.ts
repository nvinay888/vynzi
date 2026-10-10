import type { SourceMap } from './types';

export const about = {
  hero: {
    eyebrow: 'About Vynzi',
    title: 'A partner designed around the way modern businesses operate (Financially and Sustainably)',
    text: 'Finance, data, technology and sustainability always overlap. We built Vynzi so that one team can cover it all.',
  },
  story: {
    title: 'Who we are',
    paragraphs: [
      'Vynzi is a strategic and technology-driven consulting and accounting firm. What sets us apart is an unwavering commitment to excellence and to delivering results.',
      'We provide virtual CFO services, virtual accounting, strategic consulting, technology integration support and other financial solutions tailored to the needs of each client. From accounting and technology integration to taxation, forensic accounting and financial consulting, we offer a comprehensive suite of services designed to help you achieve your goals with confidence.',
      'We understand that behind every balance sheet there is a story of hard work, ambition and dedication. Our commitment goes beyond the numbers: we build meaningful relationships with clients to understand their aspirations and challenges, and we become trusted advisers rather than just accountants.',
    ],
  },
  approach: {
    title: 'Our approach',
    items: [
      { title: 'Hands-on', text: 'We do the work alongside your team rather than handing over a report.' },
      { title: 'Practical', text: 'Recommendations sized to your business, your systems and your people.' },
      { title: 'Technology-enabled', text: 'Connected systems, automation and dashboards wherever they remove manual effort.' },
      { title: 'Outcome-focused', text: 'Every engagement is tied to a decision, a control or a result you can see.' },
    ],
  },
  expertise: {
    title: 'Our expertise',
    items: ['CFO and strategic finance', 'Accounting and finance operations', 'Analytics and reporting', 'Finance technology and automation', 'Sustainability and ESG'],
  },
  why: {
    title: 'Why clients engage us',
    items: [
      { title: 'Scale capability', text: 'Senior finance skills without the fixed cost of a full-time team.' },
      { title: 'Improve visibility', text: 'Timely, consistent reporting that management can act on.' },
      { title: 'Strengthen controls', text: 'Processes and controls that hold as the business grows.' },
    ],
  },
  values: {
    title: 'What we stand for',
    text: 'Transparency, integrity and trust are the cornerstones of our practice. We adhere to the highest ethical standards, and every recommendation we make is in your best interest. We believe in open communication, giving you the information and insight you need to make decisions with confidence.',
  },
  leadership: {
    title: 'Leadership',
    people: [] as { name: string; role: string; bio: string; photo?: string }[], // NEEDS-INPUT; block hidden while empty
  },
};

export const aboutSources: SourceMap = {
  'hero.eyebrow': 'BLUEPRINT',
  'story.title': { src: 'BLUEPRINT', note: 'Slide 3 sitemap: "Who we are".' },
  'approach.title': 'BLUEPRINT',
  'expertise.title': 'BLUEPRINT',
  'why.title': 'BLUEPRINT',
  'values.title': 'EDITED',
  'hero.title': { src: 'BLUEPRINT', note: 'Slide 11 "The story".' },
  'hero.text': { src: 'EDITED', note: 'From the slide 11 story line.' },
  'story.paragraphs': { src: 'OLD-SITE', note: 'Old home page "About Us" section, trimmed from six paragraphs to three; service list preserved as written there (including taxation and forensic accounting, see CONTENT-REQUESTS).' },
  'approach.items': { src: 'BLUEPRINT', note: 'Four labels verbatim from slide 11; descriptions are new.' },
  'expertise.items': { src: 'BLUEPRINT', note: 'Slide 11 "CFO • accounting • analytics • technology • ESG", expanded to full names.' },
  'why.items': { src: 'BLUEPRINT', note: 'Three labels verbatim from slide 11; descriptions are new.' },
  'values.text': { src: 'OLD-SITE', note: 'Old "About Us" paragraph on transparency, integrity and trust, lightly trimmed.' },
  'leadership': 'NEEDS-INPUT',
};
