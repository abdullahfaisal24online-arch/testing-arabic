# النسخة التجريبية (Staging)

- الرابط: https://staging.testing-arabic.com (محمي بـ Cloudflare Access)
- الفرع: staging ← Worker: testing-arabic-staging ← قاعدة D1: testing-arabic-staging
- متغيرات البناء على testing-arabic-staging بس: `STORE_OPEN=1` (المتجر ظاهر) و`CMS_BRANCH=staging` (لوحة التحكم بتحفظ على staging).
- لوحة التحكم على staging.testing-arabic.com/admin بتعدّل فرع staging، وعلى testing-arabic.com/admin بتعدّل main.
- كل تعديل كود بينرفع على staging أول، بيتجرّب، وبعدين Pull Request من staging لـ main (يوم النشر).
- كل أسبوع تقريباً: Pull Request من main لـ staging عشان النسخة التجريبية تاخد الدروس والأخبار الجديدة.
- يوم إطلاق المتجر: ضيف `STORE_OPEN=1` على بناء testing-arabic الحقيقي (وما تضيف CMS_BRANCH عليه أبداً).
