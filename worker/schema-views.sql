-- مشاهدات الفيديو: مشاهدة واحدة لنفس الزائر والفيديو خلال 24 ساعة.
-- الـ Worker ينشئ الجدول تلقائياً أيضاً، وهذا الملف موجود للتهيئة اليدوية.
CREATE TABLE IF NOT EXISTS video_views (
  video_id   TEXT NOT NULL,
  ip_hash    TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_video_views_video
  ON video_views (video_id, created_at);

CREATE INDEX IF NOT EXISTS idx_video_views_video_ip_time
  ON video_views (video_id, ip_hash, created_at);

CREATE INDEX IF NOT EXISTS idx_video_views_ip_time
  ON video_views (ip_hash, created_at);
