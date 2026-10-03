import type { SourceMap } from './types';

export const careers = {
  eyebrow: 'Careers',
  title: 'Work with us',
  text: 'We are a small team of finance, technology and sustainability professionals in Hyderabad. We do not list open roles on this page; when we are hiring, we say so here. If you would like to be considered for future roles, send a short note and your CV.',
  cta: 'Send a note',
  roles: [] as { title: string; location: string; text: string }[], // NEEDS-INPUT; list hidden while empty
};

export const privacy = {
  eyebrow: 'Legal',
  title: 'Privacy policy',
  updated: 'Draft for review',
  sections: [
    { title: 'What we collect', text: 'When you contact us through this website we receive the details you enter: name, business email, company, phone number and your message. We do not use tracking cookies on this site.' },
    { title: 'How we use it', text: 'We use your details only to respond to your enquiry and, if you become a client, to deliver our services. We do not sell or share your details with third parties for marketing.' },
    { title: 'Where it is stored', text: 'Enquiry form submissions are delivered to our email through a form-handling service and stored in our email system.' },
    { title: 'Your rights', text: 'You can ask us at any time to see, correct or delete the personal information we hold about you by writing to the email address on our contact page.' },
    { title: 'Contact', text: 'Questions about this policy go to the contact details on our contact page.' },
  ],
};

export const terms = {
  eyebrow: 'Legal',
  title: 'Terms of use',
  updated: 'Draft for review',
  sections: [
    { title: 'Use of this website', text: 'This website is published by Vynzi CFO Services Private Limited for general information about our services. Its content does not constitute financial, legal or tax advice, and no client relationship is created by using it.' },
    { title: 'Accuracy', text: 'We take care to keep the content accurate and current, but we make no warranty that it is complete or error-free. Service descriptions are subject to the terms of a written engagement.' },
    { title: 'Intellectual property', text: 'All content, logos and design on this website belong to Vynzi CFO Services Private Limited unless otherwise stated and may not be reproduced without permission.' },
    { title: 'Links', text: 'Links to third-party sites are provided for convenience. We are not responsible for their content.' },
    { title: 'Governing law', text: 'These terms are governed by the laws of India, and any dispute is subject to the courts of Hyderabad, Telangana.' },
  ],
};

export const utilitySources: SourceMap = {
  'careers': { src: 'EDITED', note: 'No roles invented. Hyderabad location and team scope from old site contact details.' },
  'privacy': { src: 'EDITED', note: 'Standard draft reflecting how the new site actually handles data (form service → email, no tracking). Requires legal review before launch.' },
  'terms': { src: 'EDITED', note: 'Standard draft. Requires legal review before launch.' },
};
