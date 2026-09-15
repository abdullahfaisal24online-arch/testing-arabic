/**
 * مولّد فهرس البوت.
 *
 * بيقرأ محتوى المنصة (قاموس + دروس + مقالات + أسئلة + دورات) وبيبني ملف
 * public/chat-index.json — وهو اللي بيبحث فيه مساعد الموقع بالـ keyword
 * قبل ما يبعت للموديل. بينبني تلقائياً مع كل نشر، فأي درس جديد بتضيفه
 * بيدخل عالبوت لحاله بدون أي شغل يدوي.
 *
 * ما إله أي تبعيات خارجية — بيقرأ الـ frontmatter بنفسه.
 */
import { readFileSync, readdirSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, extname, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(root, 'src', 'content');
const outFile = join(root, 'public', 'chat-index.json');

// المجموعات اللي بيغطّيها البوت + بادئة الرابط لكل وحدة
const COLLECTIONS = [
  { dir: 'glossary', prefix: '/glossary/' },
  { dir: 'lessons', prefix: '/lessons/' },
  { dir: 'articles', prefix: '/articles/' },
  { dir: 'questions', prefix: '/questions/' },
  { dir: 'courses', prefix: '/courses/' },
];

/* ---------- قراءة الـ frontmatter بدون تبعيات ---------- */

function unquote(v) {
  v = String(v).trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    v = v.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  }
  return v;
}

function parseInlineArray(v) {
  return v
    .replace(/^\[/, '')
    .replace(/\]$/, '')
    .split(',')
    .map((x) => unquote(x))
    .filter((x) => x !== '');
}

function parseFrontmatter(raw) {
  const m = raw.match(/^﻿?---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { data: {}, body: raw };
  const lines = m[1].split(/\r?\n/);
  const data = {};
  let curKey = null;
  for (const line of lines) {
    if (!line.trim()) continue;
    const item = line.match(/^\s*-\s+(.*)$/);
    if (item && curKey) {
      if (!Array.isArray(data[curKey])) data[curKey] = [];
      data[curKey].push(unquote(item[1]));
      continue;
    }
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (kv) {
      const key = kv[1];
      const val = kv[2].trim();
      if (val === '') {
        // إمّا مصفوفة block جاية بالأسطر التالية، أو حقل فاضي
        data[key] = [];
        curKey = key;
      } else if (val.startsWith('[')) {
        data[key] = parseInlineArray(val);
        curKey = null;
      } else {
        data[key] = unquote(val);
        curKey = null;
      }
    } else {
      curKey = null;
    }
  }
  return { data, body: raw.slice(m[0].length) };
}

const asString = (v) => (typeof v === 'string' ? v : Array.isArray(v) ? v.join(' ') : '');
const asArray = (v) => (Array.isArray(v) ? v.filter((x) => typeof x === 'string' && x) : typeof v === 'string' && v ? [v] : []);
const isTrue = (v) => v === true || v === 'true';

function bodyExcerpt(body) {
  return body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~|-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 400);
}

/* ---------- بناء الفهرس ---------- */

const index = [];

for (const col of COLLECTIONS) {
  const dir = join(contentDir, col.dir);
  if (!existsSync(dir)) continue;
  for (const file of readdirSync(dir)) {
    const ext = extname(file).toLowerCase();
    if (ext !== '.md' && ext !== '.mdx') continue;
    let raw;
    try {
      raw = readFileSync(join(dir, file), 'utf8');
    } catch {
      continue;
    }
    const { data, body } = parseFrontmatter(raw);
    if (isTrue(data.draft)) continue;
    const title = asString(data.title).trim();
    if (!title) continue;

    const slug = basename(file, ext);
    const termEn = asString(data.termEn).trim();
    const description = asString(data.description).trim();
    const shortAnswer = asString(data.shortAnswer).trim();
    const aliases = asArray(data.aliases);
    const tags = asArray(data.tags);
    const summary = asArray(data.summary);
    const outcomes = asArray(data.outcomes);

    const text = [
      title,
      termEn,
      description,
      shortAnswer,
      aliases.join(' '),
      tags.join(' '),
      summary.join(' '),
      outcomes.join(' '),
      bodyExcerpt(body),
    ]
      .filter(Boolean)
      .join(' ');

    index.push({
      t: title,
      e: termEn,
      u: col.prefix + slug + '/',
      s: (description || shortAnswer || summary[0] || '').slice(0, 200),
      x: text,
    });
  }
}

if (!existsSync(dirname(outFile))) mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, JSON.stringify(index), 'utf8');
console.log(`[chat-index] بنيت ${index.length} وحدة → public/chat-index.json`);
