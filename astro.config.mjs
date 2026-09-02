import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// غيّر هذا العنوان لدومينك بعد ما تحجزه
export default defineConfig({
  site: 'https://testing-arabic.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/search'),
    }),
  ],
  markdown: {
    shikiConfig: { theme: 'github-dark', wrap: true },
  },
});
