-- جدول التعليقات — ينفَّذ مرة وحدة عند إنشاء قاعدة البيانات
CREATE TABLE IF NOT EXISTS comments (
  id          TEXT PRIMARY KEY,
  page        TEXT NOT NULL,
  page_title  TEXT,
  name        TEXT NOT NULL,
  body        TEXT NOT NULL,
  status      TEXT NOT NULL DEFAULT 'pending',  -- pending | approved | spam
  is_owner    INTEGER NOT NULL DEFAULT 0,       -- 1 = رد من صاحب المنصة
  parent_id   TEXT,
  ip_hash     TEXT,
  created_at  INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_comments_page   ON comments (page, status, created_at);
CREATE INDEX IF NOT EXISTS idx_comments_status ON comments (status, created_at);
CREATE INDEX IF NOT EXISTS idx_comments_iphash ON comments (ip_hash, created_at);

-- جدول مشتركي النشرة — نسخة محلية بجانب Kit، عشان الليستة تضل ملك المنصة
CREATE TABLE IF NOT EXISTS subscribers (
  email        TEXT PRIMARY KEY,
  source       TEXT,
  status       TEXT NOT NULL DEFAULT 'pending',  -- pending = ما أكّد اشتراكه عند Kit
  created_at   INTEGER NOT NULL,
  last_seen_at INTEGER
);

CREATE INDEX IF NOT EXISTS idx_subscribers_created ON subscribers (created_at);
