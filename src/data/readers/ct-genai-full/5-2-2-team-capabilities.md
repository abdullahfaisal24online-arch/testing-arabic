---
order: 6
slug: "5-2-2"
chapter: 5
group: "5.2"
section: "5.2.2"
title: "Building Generative AI Capabilities in Test Teams"
titleAr: "بناء قدرات الذكاء التوليدي في فرق الاختبار"
objectives: "GenAI-5.2.2 · K1"
minutes: 6
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
ابدأ بتدريبات موجّهة على أكثر من LLM و SLM، ومسار تعلّم من أساسيات كتابة الطلب إلى مهام الاختبار المتخصصة، ثم طبّق تدريجيًا في العمل اليومي مع تعلّم الأقران ومشاركة الخبرات.

خطة بناء قدرات بسيطة قد تبدو هكذا: شهر أول لأساسيات كتابة التوجيه وتقييم النواتج على أكثر من نموذج، ثم تطبيق على مهمة حقيقية منخفضة الخطر مع مراجعة زميل، ثم مهام أكثر تخصصًا مثل الأتمتة وتحليل التقارير، مع جلسة مشاركة دورية للخبرات.

### أنماط التوجيه — Prompt Patterns

**Prompt Pattern** قالب قابل لإعادة الاستخدام لتنظيم طلب فعّال؛ يحتفظ بالمكونات والحقول المتغيرة بدل نسخ بيانات مشروع قديم دون تفكير. يمكن بناء مكتبة أنماط داخلية تتضمن المهمة، والمدخلات المطلوبة، والقيود، ومثالًا صحيحًا، ومعيار مراجعة النتيجة.

### مجتمعات الممارسة — Communities of Practice

تدعم **Communities of Practice** التعلم المستمر عبر اجتماعات تعرض الاستخدامات الناجحة والمشكلات والدروس، وتشارك مكتبات الأنماط وتحسّنها عبر المشاريع والمجالات.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-ar">من الواقع العملي · جلسة تعلّم</span><span class="gx-en" lang="en" dir="ltr">In practice · A learning session</span></p><p class="gx-ar">عضوان يولّدان حالات اختبار للقصة نفسها بـ prompts مختلفة. زميل ثالث يراجع التغطية والصحة دون أن يعرف أي أداة استُخدمت. تناقش المجموعة الفروق وتحدّث النمط المشترك، مع تسجيل السبب. مشاركة الإخفاقات وحلولها مهمة بقدر مشاركة النجاحات.</p><p class="gx-en" lang="en" dir="ltr">Two members generate test cases for the same story with different prompts. A third colleague reviews coverage and correctness without knowing which tool was used. The group discusses the differences and updates the shared pattern, recording why. Sharing failures and their fixes matters as much as sharing successes.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-ar">تلميح امتحان</span><span class="gx-en" lang="en" dir="ltr">Exam tip</span></p><p class="gx-ar">K1: تذكّر الأساليب: تدريب عملي موجَّه على عدة نماذج كبيرة وصغيرة، ومسار تعلّم من الأساسيات إلى المهام المتخصصة، وتطبيق تدريجي مع التعلّم من الزملاء، وأنماط ومكتبات prompts قابلة لإعادة الاستخدام، ومجتمعات الممارسة.</p><p class="gx-en" lang="en" dir="ltr">K1: recall the approaches: guided hands-on training on several LLMs and SLMs, a learning path from basics to specialised tasks, gradual application with peer learning, reusable prompt patterns and libraries, and communities of practice.</p></aside>
