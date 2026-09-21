import { readdir, mkdir, stat } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const sourceRoot = fileURLToPath(new URL('../public/uploads/', import.meta.url));
const outputRoot = fileURLToPath(new URL('../public/uploads-optimized/', import.meta.url));
const widths = [320, 640, 1280];
const supported = new Set(['.png', '.jpg', '.jpeg', '.webp']);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : path;
  }));
  return files.flat();
}

await mkdir(outputRoot, { recursive: true });
const files = (await walk(sourceRoot)).filter((file) => supported.has(extname(file).toLowerCase()));

let written = 0;
let skipped = 0;

await Promise.all(files.map(async (source) => {
  const rel = relative(sourceRoot, source);
  const ext = extname(rel);
  const stem = rel.slice(0, -ext.length);
  const sourceStat = await stat(source);

  await Promise.all(widths.map(async (width) => {
    const output = join(outputRoot, `${stem}.${width}.webp`);
    await mkdir(join(output, '..'), { recursive: true });

    try {
      const outputStat = await stat(output);
      if (outputStat.mtimeMs >= sourceStat.mtimeMs) {
        skipped += 1;
        return;
      }
    } catch {
      // الملف المحسّن غير موجود بعد.
    }

    await sharp(source, { failOn: 'none' })
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5, smartSubsample: true })
      .toFile(output);
    written += 1;
  }));
}));

console.log(`Optimized images: ${written} written, ${skipped} reused.`);
