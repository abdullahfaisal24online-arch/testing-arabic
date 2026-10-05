# دليل CTFL التفاعلي — خطة الدفعات

المرجع: ISTQB® Certified Tester Foundation Level Syllabus v4.0.1 (15 سبتمبر 2024).
6 فصول، 64 عنوان. الشغل كله على staging لحد الإطلاق.

نفس منهجية دليل CT-GenAI: الشرح بالعربي، والعناوين والمصطلحات والصناديق التفاعلية بالإنجليزي،
بترقيم السيليبس (1.1، 1.1.1…). الدليل بدون أسئلة امتحان (بنك CTFL منتج منفصل).

## الدفعات

| الدفعة | المحتوى | الحالة |
|---|---|---|
| 0 | تعميم محرّك الأدلة (`src/lib/guide.ts` + `src/lib/guides.ts`)، مسار `/store/ctfl-guide/` | ✅ |
| 1 | الفصل 1: Fundamentals of Testing (14 عنوان، 7 تمارين، 43 مصطلح) — المعاينة المجانية | ✅ |
| 2 | الفصل 2: Testing Throughout the SDLC (10) + الفصل 3: Static Testing (8) | ⏳ |
| 3 | الفصل 4: Test Analysis and Design (14) — أغلب التمارين التفاعلية | ⏳ |
| 4 | الفصل 5: Managing the Test Activities (16) + الفصل 6: Test Tools (2) | ⏳ |
| 5 | القاموس، منتج المتجر `ctfl-guide`، حزمة «دليل + بنك CTFL» | ⏳ |

## المحتوى

- `src/data/readers/ctfl/` — الفصل الأول (المعاينة المجانية).
- `src/data/readers/ctfl-full/` — الفصول 2–6 (بالدليل الكامل).
- رموز أهداف التعلّم بشكل `FL-1.1.1 · K1`، والتمارين التفاعلية بحقل `labs` بالـ frontmatter.

## تمارين الفصل 1

تمارين عملية بخطوات تنحفظ (`LAB-1.1.2`، `LAB-1.2.3`، `LAB-1.3`، `LAB-1.4.1`، `LAB-1.4.4`، `LAB-1.5.1`، `LAB-1.5.3`)،
كلها على مشروع القارئ نفسه، ومعها «كيف يبدو الحل الجيد». ما فيها أسئلة امتحان.

## التمارين التفاعلية المخطط لها (الفصل 4 وما بعده)

EP Builder، BVA Calculator، Decision Table، State Transition، Statement/Branch Coverage،
Three-point Estimation، Risk Matrix، Test Prioritization، Pyramid/Quadrants، أدوار المراجعة.

## ملاحظات تقنية (الدفعة 0)

- كل دليل = إعدادات بـ `src/lib/guides.ts` + مجلدين محتوى + ملف مسار تحت `src/pages/store/<product>/[view]/[...path].astro`.
- الصفحة المشتركة: `src/components/genai-guide/GuideView.astro`.
- مفتاح الحفظ بالمتصفح `ta:<id>:guide:<view>:v2` — مفتاح CT-GenAI ما تغيّر، فتقدّم القرّاء محفوظ.
- صفحات أي دليل ما بتنبني بدون `CMS_BRANCH=staging`، ولا قبل ما يكون إله محتوى.
- `src/lib/genai-guide.ts` صار ملف توافق بيعيد التصدير من الملفات الجديدة.
