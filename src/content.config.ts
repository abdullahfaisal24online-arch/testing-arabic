import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const levels = ['مبتدئ', 'متوسط', 'متقدّم'] as const;

const lessons = defineCollection({
  loader: glob({ base: './src/content/lessons', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default('أساسيات'),
    level: z.enum(levels).default('مبتدئ'),
    // مدة الفيديو بصيغة MM:SS أو HH:MM:SS
    duration: z.string().default('00:00'),
    // معرّف الفيديو على Bunny Stream
    videoId: z.string().optional(),
    // رابط النسخة على يوتيوب (اختياري)
    youtubeUrl: z.string().url().optional(),
    // صورة مصغّرة مخصّصة (اختيارية) — بدونها بتتولّد من Bunny أو بتنعرض خلفية الهوية
    thumbnail: z.string().optional(),
    // المسار التعليمي الذي ينتمي له الدرس + ترتيبه داخله
    track: z.string().optional(),
    order: z.number().default(0),
    resources: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default('مقالات'),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const tracks = defineCollection({
  loader: glob({ base: './src/content/tracks', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    level: z.enum(levels).default('مبتدئ'),
    order: z.number().default(0),
    accent: z.enum(['cyan', 'orange']).default('cyan'),
    recommended: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { lessons, articles, tracks };
