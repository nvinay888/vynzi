import type { SourceMap } from './types';

export const contact = {
  hero: {
    eyebrow: 'Contact',
    title: 'Start with the problem.',
    text: 'Tell us what you are trying to improve. We will help identify where VynziCFO can add value.',
  },
  form: {
    title: 'Book a discussion',
    categories: ['Virtual CFO', 'Accounting', 'Technology', 'Sustainability', 'Other'],
    fields: { name: 'Name', email: 'Business email', company: 'Company', phone: 'Phone', topic: 'What is this about?', message: 'How can we help?' },
    submit: 'Book a discussion',
    privacy: 'We use your details only to respond to this enquiry.',
    success: 'Thank you. We have received your message and will reply within one business day.',
    error: 'Something went wrong sending the form. Please email us directly.',
  },
  details: {
    title: 'Contact details',
    expect: {
      title: 'What to expect',
      items: [
        'A reply within one business day.',
        'A short call to understand the situation before any proposal.',
        'A confidential conversation. No obligation.',
      ],
    },
  },
};

export const contactSources: SourceMap = {
  'hero.eyebrow': 'BLUEPRINT',
  'details.title': 'BLUEPRINT',
  'hero.title': 'BLUEPRINT',
  'hero.text': 'BLUEPRINT',
  'form.title': 'BLUEPRINT',
  'form.categories': 'BLUEPRINT',
  'form.fields': 'BLUEPRINT',
  'form.submit': 'BLUEPRINT',
  'form.privacy': 'EDITED',
  'form.success': { src: 'EDITED', note: 'The one-business-day reply promise is a commitment the founder must be comfortable with; see CONTENT-REQUESTS.' },
  'form.error': 'EDITED',
  'details.expect': { src: 'EDITED', note: 'Slide 13 "low-friction and consultative"; the one-business-day promise needs confirmation.' },
};
