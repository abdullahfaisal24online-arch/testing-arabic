---
order: 6
slug: "5-2-2"
chapter: 5
group: "5.2"
section: "5.2.2"
title: "Building Generative AI Capabilities in Test Teams"
titleAr: "بناء قدرات الذكاء التوليدي في فرق الاختبار"
objectives: "GenAI-5.2.2 · K1"
minutes: 8
lo:
  GenAI-5.2.2: "Recall ways to build GenAI capabilities in test teams."
loAr:
  GenAI-5.2.2: "تذكّر طرق بناء قدرات الذكاء التوليدي في فرق الاختبار."
takeaways:
  - "Guided hands-on training across several LLMs and SLMs, with a learning path from prompt basics to specialised test tasks."
  - "Gradual use in daily work, with peer learning and shared experience."
  - "Reusable prompt patterns in an internal library."
  - "Communities of practice to share successes, failures and lessons across projects."
takeawaysAr:
  - "تدريب عملي موجَّه على عدة نماذج كبيرة وصغيرة، مع مسار تعلّم من أساسيات الـ prompts إلى مهام الاختبار المتخصصة."
  - "استخدام تدريجي في العمل اليومي، مع تعلّم من الزملاء وتبادل للخبرات."
  - "أنماط prompts قابلة لإعادة الاستخدام في مكتبة داخلية."
  - "مجتمعات ممارسة لتبادل النجاحات والإخفاقات والدروس بين المشاريع."
terms:
  - en: "Prompt Pattern"
    ar: "نمط التوجيه"
    def: "A reusable template for structuring an effective prompt, with fixed components and variable fields."
    defAr: "قالب قابل لإعادة الاستخدام لبناء prompt فعّال، بمكوّنات ثابتة وحقول متغيّرة."
  - en: "Community of Practice"
    ar: "مجتمع الممارسة"
    def: "A group that meets regularly to share practices, problems and lessons and to improve shared assets."
    defAr: "مجموعة تلتقي بانتظام لتبادل الممارسات والمشكلات والدروس وتحسين الأصول المشتركة."
    match: ["Communities of Practice"]
---
عرفنا في القسم 5.2.1 ما المهارات المطلوبة. يجيب هذا القسم عن السؤال التالي: **كيف يكتسبها الفريق؟** يقول المنهج إن **النهج العملي (hands-on approach)** ضروري لتدريب فرق الاختبار على GenAI تدريبًا استراتيجيًا. السبب أن هذه المهارات لا تُتعلَّم بالقراءة وحدها: لن تعرف كيف يخطئ النموذج إلا عندما تجرّبه على مهام حقيقية وتراجع نتائجه.

### ما الذي يشمله النهج العملي؟ — What the Hands-on Approach Includes

يذكر المنهج ثلاثة عناصر:

- **التدريب على نماذج كبيرة وصغيرة مختلفة:** لأن كل نموذج يتصرف بطريقة مختلفة، ومن جرّب أكثر من نموذج يفهم أن النتيجة ليست مضمونة. مثال: يجرّب المختبِران التوجيه نفسه لقصة الكوبونات على نموذجين، ويقارنان الحالات الناتجة.
- **اتباع مسارات تعلّم منظّمة (structured learning paths):** خطوات مرتّبة بدل تعلّم عشوائي.
- **تطوير المعرفة تدريجيًا عبر المشاركة داخل المؤسسة:** ما يتعلّمه مختبِر واحد ينتقل إلى الآخرين.

ويركّز التدريب على **تطوير مهارات عملية** من خلال **تمارين موجّهة (guided exercises)**، و**التعلّم من الأقران (peer learning)**، و**الدمج التدريجي لـ AI في مهام الاختبار اليومية**. التدرّج مهم: تبدأ بمهمة منخفضة الخطر مثل اقتراح أفكار اختبار، قبل مهمة أعلى خطرًا مثل توليد test scripts للانحدار.

عمليًا، قد تبدو خطة بناء القدرات هكذا: sprint أول لأساسيات كتابة التوجيه وتقييم النواتج على أكثر من نموذج، ثم تطبيق على مهمة حقيقية منخفضة الخطر مع مراجعة زميل، ثم مهام أكثر تخصصًا مثل الأتمتة وتحليل التقارير، مع جلسة مشاركة دورية للخبرات.

### من الأساسيات إلى التوجيهات المتخصصة — From Basics to Test-specific Prompts

يتقدّم أعضاء الفريق من **إتقان إنشاء التوجيه الأساسي** إلى **استخدام تقنيات أكثر تركيزًا**، مثل **التوجيهات الخاصة بالاختبار (test-specific prompts)**. التوجيه الأساسي يقول «اكتب حالات اختبار لهذه القصة». أما التوجيه الخاص بالاختبار فيحدد التقنية (EP و BVA) وأساس الاختبار والقيود وصيغة الناتج.

### أنماط التوجيه — Prompt Patterns

**نمط التوجيه (Prompt Pattern)** قالب قابل لإعادة الاستخدام لصياغة توجيهات فعّالة، يوجّه GenAI نحو **مخرجات متّسقة وموثوقة**. يحتفظ بالمكونات الثابتة وحقول متغيّرة، بدل نسخ توجيه مشروع قديم ببياناته دون تفكير. مثال: نمط «حالات الاختبار من قصة مستخدم» في فريق التوصيل يتضمن الدور، والمهمة، و[نص القصة]، و[معايير القبول]، والقيود مثل استخدام BVA وعدم اختراع قواعد غير مذكورة، ومثالًا صحيحًا، وصيغة الجدول المطلوبة.

### مجتمعات الممارسة — Communities of Practice

تدعم **مجتمعات الممارسة الداخلية (Communities of Practice)** تبادل المعرفة المستمر، عبر **اجتماعات منتظمة** تعرض **تطبيقات GenAI الناجحة**، وتناقش **التحديات**، وتحسّن **أفضل الممارسات**. وتعزّز هذه المجتمعات **التحسين المستمر** من خلال **مشاركة مكتبات أنماط التوجيه** و**توثيق الدروس المستفادة** من تطبيقات GenAI في الاختبار **عبر المشاريع والمجالات**. مثال: يلتقي مختبِرا تطبيق التوصيل شهريًا مع مختبِري فرق أخرى في الشركة، فيعرضان نمط Gherkin الذي نجح معهما، ويسمعان من فريق آخر كيف تعامل مع نموذج يخترع حقولًا غير موجودة.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice · A learning session</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي · جلسة تعلّم</span></p><p class="gx-en" lang="en" dir="ltr">The two delivery app testers generate test cases for the same coupon story with different prompts. A developer reviews coverage and correctness without knowing which prompt was used. The team discusses the differences and updates the shared pattern, recording why. Sharing failures and their fixes matters as much as sharing successes.</p><p class="gx-ar" lang="ar" dir="rtl">يولّد مختبِرا تطبيق التوصيل حالات اختبار لقصة الكوبونات نفسها بتوجيهين مختلفين. يراجع أحد المطوّرين التغطية والصحة دون أن يعرف أي توجيه استُخدم. يناقش الفريق الفروق ويحدّث النمط المشترك، مع تسجيل السبب. مشاركة الإخفاقات وحلولها مهمة بقدر مشاركة النجاحات.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K1: recall the approaches: guided hands-on training on several LLMs and SLMs, a learning path from basics to specialised tasks, gradual application with peer learning, reusable prompt patterns and libraries, and communities of practice.</p><p class="gx-ar" lang="ar" dir="rtl">K1: تذكّر الأساليب: تدريب عملي موجَّه على عدة نماذج كبيرة وصغيرة، ومسار تعلّم من الأساسيات إلى المهام المتخصصة، وتطبيق تدريجي مع التعلّم من الزملاء، وأنماط ومكتبات توجيهات قابلة لإعادة الاستخدام، ومجتمعات الممارسة.</p></aside>
