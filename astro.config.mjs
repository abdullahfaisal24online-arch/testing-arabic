import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFile, writeFile } from 'node:fs/promises';

// لوحة التحكم بالنسخة التجريبية بتحفظ على فرع staging بدل main.
// بتشتغل بس لما متغير البناء CMS_BRANCH موجود (على testing-arabic-staging) — الموقع الحقيقي ما بيتأثر.
const cmsBranch = {
  name: 'cms-branch',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const branch = process.env.CMS_BRANCH;
      if (!branch) return;
      const file = new URL('admin/config.yml', dir);
      const yml = await readFile(file, 'utf8');
      const out = yml.replace(/^(\s*branch:\s*)main\s*$/m, `$1${branch}`);
      if (out === yml) throw new Error('cms-branch: ما لقيت "branch: main" بـ admin/config.yml');
      await writeFile(file, out);
      console.log(`✅ لوحة التحكم بتحفظ على فرع ${branch}`);
    },
  },
};

// غيّر هذا العنوان لدومينك بعد ما تحجزه
export default defineConfig({
  site: 'https://testing-arabic.com',
  trailingSlash: 'always',
  build: {
    // CSS الصفحة الأولى صغير نسبيًا؛ تضمينه يلغي طلبات render-blocking ويحسن FCP/LCP على الموبايل.
    inlineStylesheets: 'always',
  },
  integrations: [
    cmsBranch,
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
