import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// غيّر هذا العنوان لدومينك بعد ما تحجزه
export default defineConfig({
  site: 'https://testing-arabic.com',
  trailingSlash: 'always',
  build: {
    // CSS الصفحة الأولى صغير نسبيًا؛ تضمينه يلغي طلبات render-blocking ويحسن FCP/LCP على الموبايل.
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      // ما بنضيف صفحات noindex أو صفحات الوسوم التفصيلية إلى الـ sitemap.
      // صفحات الوسوم القوية بتظل قابلة للاكتشاف من /tags/ والروابط الداخلية.
      filter: (page) => {
        const path = new URL(page).pathname;
        const isTagDetail = path.startsWith('/tags/') && path !== '/tags/';
        return !path.startsWith('/search')
          && !path.startsWith('/pro/')
          && !path.startsWith('/store')
          && path !== '/questions/'
          && path !== '/newsletter/thanks/'
          && !isTagDetail;
      },
    }),
  ],
  markdown: {
    shikiConfig: { theme: 'github-dark', wrap: true },
  },
});
