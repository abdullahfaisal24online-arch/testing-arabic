/**
 * فحص بعد البناء — روابط القاموس.
 *
 * ليش موجود: صفحات المحتوى بتقرأ الـ HTML المُصيَّر من خاصية داخلية بـ Astro
 * (`entry.rendered.html`). إذا تغيّر اسمها بأي تحديث، القيمة بترجع فاضية
 * والصفحات بترجع للعرض العادي **بدون أي خطأ** — يعني الربط التلقائي للقاموس
 * بيموت بصمت وما حدا بينتبه إلا بعد شهور.
 *
 * هذا السكربت بيمسك هالحالة: إذا كان في مصطلحات بالقاموس وما طلع ولا رابط
 * قاموس واحد بالموقع المبني، بيفشّل النشر برسالة واضحة.
 *
 * بينشغّل تلقائياً بعد `npm run build`.
 */

import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const DIST = 'dist';
const GLOSSARY_DIR = join('src', 'content', 'glossary');
const CONTENT_EXT = new Set(['.md', '.mdx', '.markdown', '.json', '.yaml', '.yml']);
const MARKER = 'class="glossary-link"';

/** يجمع كل الملفات تحت مجلّد بشكل تكراري */
async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const fail = (msg) => {
  console.error('\n❌ ' + msg + '\n');
  process.exit(1);
};

if (!existsSync(DIST)) {
  fail(`ما لقيت مجلّد "${DIST}". لازم يشتغل هذا الفحص بعد البناء مش قبله.`);
}

// 1) كم مصطلح عندنا بالقاموس؟
const glossaryFiles = (await walk(GLOSSARY_DIR)).filter((f) => CONTENT_EXT.has(extname(f)));
const termCount = glossaryFiles.length;

if (termCount === 0) {
  console.log('ℹ️  ما في مصطلحات بالقاموس — تخطّينا فحص الربط التلقائي.');
  process.exit(0);
}

// 2) كم رابط قاموس طلع بالموقع المبني؟
const htmlFiles = (await walk(DIST)).filter((f) => f.endsWith('.html'));
let linkCount = 0;
let pagesWithLinks = 0;

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  let hits = 0;
  let i = html.indexOf(MARKER);
  while (i !== -1) {
    hits++;
    i = html.indexOf(MARKER, i + MARKER.length);
  }
  if (hits > 0) {
    linkCount += hits;
    pagesWithLinks++;
  }
}

if (linkCount === 0) {
  fail(
    `الربط التلقائي للقاموس مات.\n\n` +
      `   عندك ${termCount} مصطلح بالقاموس، بس ما طلع ولا رابط قاموس واحد ` +
      `بأي صفحة من ${htmlFiles.length} صفحة مبنية.\n\n` +
      `   السبب الأرجح: صفحات المحتوى بتقرأ الـ HTML من "entry.rendered.html" ` +
      `وهاي خاصية داخلية بـ Astro تغيّرت بالتحديث الأخير.\n` +
      `   شوف الملفات اللي فيها "rendered?.html" تحت src/pages/ وصلّح مصدر المحتوى.\n\n` +
      `   النشر انوقف عن قصد — أفضل من موقع منشور بدون ربط قاموس وما حدا بينتبه.`,
  );
}

console.log(
  `✅ القاموس شغّال: ${linkCount} رابط على ${pagesWithLinks} صفحة (${termCount} مصطلح).`,
);
