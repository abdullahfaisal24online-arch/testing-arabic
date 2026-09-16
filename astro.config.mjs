import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// غيّر هذا العنوان لدومينك بعد ما تحجزه
export default defineConfig({
  site: 'https://testing-arabic.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // صفحات /pro/ noindex — ما الها داعي تكون بالـ sitemap
      filter: (page) => !page.includes('/search') && !page.includes('/pro/') && !page.includes('/store'),
    }),
  ],
  markdown: {
    shikiConfig: { theme: 'github-dark', wrap: true },
  },
});
