// يولّد نسخة WebP لكل صورة PNG/JPG داخل public/uploads (شامل المجلدات الفرعية).
// يشتغل وقت الـ build قبل astro build، فتُنسخ الملفات الناتجة إلى dist تلقائياً.
// آمن للتكرار: يتخطّى أي ملف نسخته WebP موجودة وأحدث من الأصل، فلا يعيد تحويل القديم كل مرة.
// لا يفشل الـ build بسبب صورة واحدة تالفة: كل خطأ صورة يُسجَّل ويُكمِل.
// sharp يأتي أصلاً مع astro (اعتماد اختياري)، فلا حاجة لإضافته إلى package.json.
import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  // لو غابت sharp لأي سبب، نوقف الـ build بدل نشر صفحات بروابط WebP مكسورة.
  console.error('[webp] لم يتم العثور على مكتبة sharp — أوقفت الـ build حتى لا تُنشر صور مكسورة.');
  process.exit(1);
}

const ROOT = 'public/uploads';
const QUALITY = 78; // توازن ممتاز بين حجم WebP والوضوح

async function* walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return; // المجلد غير موجود — تجاهل بهدوء
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let converted = 0;
let skipped = 0;
let failed = 0;

for await (const file of walk(ROOT)) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue; // نتعامل مع PNG/JPG فقط
  const out = file.replace(/\.(png|jpe?g)$/i, '.webp');
  try {
    const src = await stat(file);
    let fresh = false;
    try {
      const dst = await stat(out);
      fresh = dst.mtimeMs >= src.mtimeMs; // النسخة موجودة وأحدث → تخطَّ
    } catch {
      /* لا توجد نسخة WebP بعد */
    }
    if (fresh) {
      skipped++;
      continue;
    }
    await sharp(file).webp({ quality: QUALITY }).toFile(out);
    converted++;
  } catch (err) {
    failed++;
    console.warn(`[webp] تعذّر تحويل ${file}: ${err.message}`);
  }
}

console.log(`[webp] تم: ${converted} محوّلة · ${skipped} متخطّاة · ${failed} فاشلة`);
