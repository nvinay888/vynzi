import type { SourceMap } from './types';

export const contact = {
  hero: {
    eyebrow: 'Contact',
    title: 'Start with the problem.',
    text: 'Tell us what you are trying to improve. We will help identify where Vynzi can add value.',
  },
  form: {
    title: 'Book a discussion',
    categories: ['Virtual CFO', 'Accounting', 'Technology', 'Sustainability', 'Other'],
    fields: { name: 'Name', email: 'Business email', company: 'Company', phone: 'Phone', topic: 'What is this about?', message: 'How can we help?' },
    submit: 'Book a discussion',
    privacy: 'We use your details only to respond to this enquiry.',
    success: 'Thank you. We have received your message and will be in touch shortly.',
    error: 'Something went wrong sending the form. Please email us directly.',
  },
};

export const contactSources: SourceMap = {
  'hero.eyebrow': 'BLUEPRINT',
  'hero.title': 'BLUEPRINT',
  'hero.text': 'BLUEPRINT',
  'form.title': 'BLUEPRINT',
  'form.categories': 'BLUEPRINT',
  'form.fields': 'BLUEPRINT',
  'form.submit': 'BLUEPRINT',
  'form.privacy': 'EDITED',
  'form.success': 'EDITED',
  'form.error': 'EDITED',
};
