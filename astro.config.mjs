import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://www.vynzicfo.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [icon({ include: { ph: ['*'], lucide: ['*'] } })],
});
