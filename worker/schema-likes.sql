-- جدول الإعجابات — شغّل هذا الملف مرة وحدة على قاعدة D1
-- (جدول التعليقات ما بيتأثر إطلاقاً)

CREATE TABLE IF NOT EXISTS likes (
  page       TEXT    NOT NULL,
  ip_hash    TEXT    NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_likes_page     ON likes (page);
CREATE INDEX IF NOT EXISTS idx_likes_page_ip  ON likes (page, ip_hash);
CREATE INDEX IF NOT EXISTS idx_likes_ip_time  ON likes (ip_hash, created_at);
