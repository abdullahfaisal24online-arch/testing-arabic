# النسخة التجريبية (Staging)

- الرابط: https://staging.testing-arabic.com (محمي بـ Cloudflare Access)
- الفرع: staging ← Worker: testing-arabic-staging ← قاعدة D1: testing-arabic-staging
- كل تعديل كود بينرفع على staging أول، بيتجرّب، وبعدين Pull Request من staging لـ main.
- محتوى لوحة التحكم (CMS) بينحفظ دايماً على main (الموقع الحقيقي).
- قبل أي شغل جديد: حدّث staging من main (Pull Request من main لـ staging).
