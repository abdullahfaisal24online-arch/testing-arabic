---
order: 1
slug: "5-1-1"
chapter: 5
group: "5.1"
section: "5.1.1"
title: "Risks of Shadow AI"
titleAr: "مخاطر الذكاء الاصطناعي الخفي"
objectives: "GenAI-5.1.1 · K1"
minutes: 5
lo:
  GenAI-5.1.1: "Recall the risks of shadow AI."
loAr:
  GenAI-5.1.1: "تذكّر مخاطر الذكاء الاصطناعي الظلّي."
takeaways:
  - "Shadow AI is the use of AI tools outside the organisation's approval or oversight."
  - "Risks: weak security and privacy, non-compliance with regulations or standards, and unclear IP and licensing."
  - "An approved strategy, approved tools and clear training reduce the pull towards unmanaged personal tools."
takeawaysAr:
  - "الذكاء الاصطناعي الظلّي هو استخدام أدوات ذكاء اصطناعي خارج موافقة المؤسسة أو رقابتها."
  - "المخاطر: ضعف الأمن والخصوصية، وعدم الامتثال للأنظمة أو المعايير، وعدم وضوح الملكية الفكرية والترخيص."
  - "الاستراتيجية المعتمدة والأدوات المعتمدة والتدريب الواضح تقلّل الانجذاب نحو الأدوات الشخصية غير المُدارة."
terms:
  - en: "Shadow AI"
    ar: "الذكاء الاصطناعي الخفي"
    def: "Using AI tools without the organisation's approval or oversight, such as uploading project logs to a personal account."
    defAr: "استخدام أدوات ذكاء اصطناعي دون موافقة المؤسسة أو رقابتها، مثل رفع سجلات المشروع إلى حساب شخصي."
---
استراتيجية الاختبار مع GenAI يجب أن تراعي أهداف الاختبار، واختيار النموذج المناسب، ومشكلات بيانات الإدخال المستخدمة في التوجيه، والامتثال لمعايير AI وتنظيماته. وبناءً على هذه الاستراتيجية، تضع المؤسسة خارطة طريق وتتابع تقدّمها في دمج GenAI بعمليات الاختبار.

الانتقال من تجربة فردية إلى استخدام مؤسسي يبدأ بأهداف وبيانات ومقاييس ومسؤوليات. لا تقاس الجاهزية بعدد اشتراكات الأدوات؛ المهم أن يحقق الاستخدام فائدة قابلة للقياس ضمن مخاطر مقبولة.

**Shadow AI** هو استخدام أدوات AI خارج اعتماد المؤسسة أو رقابتها، مثل رفع سجلات المشروع إلى حساب شخصي دون موافقة. ومخاطره:

- **الأمن والخصوصية:** بيانات تخرج عن السيطرة إلى أدوات لم تُقيَّم.
- **الامتثال:** عدم الالتزام بالمتطلبات التنظيمية أو المعايير المطلوبة.
- **الملكية الفكرية والترخيص:** غموض الحقوق عند معالجة بيانات أو شيفرة محمية دون صلاحية.

### لماذا يحدث؟ — Why It Happens

غالبًا لا يبدأ Shadow AI بنية سيئة. مختبِر تحت ضغط موعد تسليم، والأداة المعتمدة غير موجودة أو بطيئة أو لا تكفي، فيستخدم حسابه الشخصي في أداة عامة «لمرة واحدة». المشكلة أن المؤسسة لا تعرف ما الذي أُرسل، ولا أين خُزِّن، ولا من يستطيع الوصول إليه.

أمثلة شائعة في فرق الاختبار: لصق سجلات إنتاج فيها بيانات عملاء في أداة دردشة عامة، أو رفع شيفرة مملوكة للمؤسسة لأداة توليد سكربتات مجانية، أو استخدام إضافة متصفح تقرأ محتوى أدوات إدارة الاختبار.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-ar">فكرة أساسية</span><span class="gx-en" lang="en" dir="ltr">Key idea</span></p><p class="gx-ar">النوايا الحسنة لا تزيل الخطر. الاستراتيجية المعتمدة والأدوات المعتمدة والتدريب الواضح تقلّل الحاجة إلى حلول فردية غير مُدارة.</p><p class="gx-en" lang="en" dir="ltr">Good intentions do not remove the risk. An approved strategy, approved tools and clear training reduce the need for unmanaged individual workarounds.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-ar">تلميح امتحان</span><span class="gx-en" lang="en" dir="ltr">Exam tip</span></p><p class="gx-ar">اعرف مجالات الخطر الثلاثة: الأمن والخصوصية، والامتثال للأنظمة والمعايير، والملكية الفكرية والترخيص. والردّ على الذكاء الاصطناعي الظلّي هو استراتيجية معتمدة وأدوات معتمدة وتدريب، لا مجرد الحظر.</p><p class="gx-en" lang="en" dir="ltr">Know the three risk areas: security and privacy, compliance with regulations and standards, and intellectual property and licensing. The answer to shadow AI is an approved strategy, approved tools and training, not just a ban.</p></aside>
