import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const levels = ['مبتدئ', 'متوسط', 'متقدّم'] as const;

/**
 * لوحة التحكم بتكتب الحقول الفاضية كـ فراغ أو null بدل ما تحذفها،
 * وهاي الدوال بتتعامل مع هيك حالات حتى ما يفشل البناء بسبب حقل اختياري فاضي.
 */
const blank = (v: unknown) => (v === '' || v === null || v === undefined ? undefined : v);
const fallback = <T>(def: T) => (v: unknown) => (v === '' || v === null || v === undefined ? def : v);

const optString = z.preprocess(blank, z.string().optional());
const optDate = z.preprocess(blank, z.coerce.date().optional());
const str = (def: string) => z.preprocess(fallback(def), z.string());
const bool = (def: boolean) => z.preprocess(fallback(def), z.boolean());
const num = (def: number) => z.preprocess(fallback(def), z.coerce.number());
const level = z.preprocess(fallback('مبتدئ'), z.enum(levels));

const lessons = defineCollection({
  loader: glob({ base: './src/content/lessons', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: str(''),
    publishDate: z.coerce.date(),
    updatedDate: optDate,
    category: str('أساسيات'),
    level,
    // مدة الفيديو بصيغة MM:SS أو HH:MM:SS
    duration: str('00:00'),
    // معرّف الفيديو على Bunny Stream
    videoId: optString,
    // رابط النسخة على يوتيوب (اختياري)
    youtubeUrl: optString,
    // صورة مصغّرة مخصّصة (اختيارية)
    thumbnail: optString,
    // المسار التعليمي الذي ينتمي له الدرس + ترتيبه داخله
    track: optString,
    order: num(0),
    resources: z.preprocess(
      fallback([]),
      z.array(z.object({ label: str(''), url: str('') })),
    ),
    featured: bool(false),
    draft: bool(false),
  }),
});

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: str(''),
    publishDate: z.coerce.date(),
    updatedDate: optDate,
    category: str('مقالات'),
    cover: optString,
    featured: bool(false),
    draft: bool(false),
  }),
});

const tracks = defineCollection({
  loader: glob({ base: './src/content/tracks', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: str(''),
    level,
    order: num(0),
    accent: z.preprocess(fallback('cyan'), z.enum(['cyan', 'orange'])),
    recommended: bool(false),
    draft: bool(false),
  }),
});

export const collections = { lessons, articles, tracks };
