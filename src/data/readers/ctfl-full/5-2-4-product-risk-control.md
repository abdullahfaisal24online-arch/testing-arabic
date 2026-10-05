---
order: 11
slug: "5-2-4"
chapter: 5
group: "5.2"
section: "5.2.4"
title: "Product Risk Control"
titleAr: "التحكم في مخاطر المنتج"
objectives: "FL-5.2.4 · K2"
minutes: 6
lo:
  FL-5.2.4: "Explain what measures can be taken in response to analysed product risks."
loAr:
  FL-5.2.4: "تشرح الإجراءات الممكنة استجابة لمخاطر المنتج بعد تحليلها."
takeaways:
  - "Product risk control covers all measures taken in response to identified and assessed risks: risk mitigation and risk monitoring."
  - "Mitigation applies the actions proposed in risk assessment to reduce the risk level; monitoring checks that mitigation works, improves the assessment and spots emerging risks."
  - "Response options include mitigation by testing, risk acceptance, risk transfer and a contingency plan."
  - "Mitigation by testing: choose testers with the right skills, the right independence, reviews and static analysis, suitable techniques and coverage, suitable test types, and dynamic testing including regression testing."
takeawaysAr:
  - "التحكم في مخاطر المنتج يشمل كل الإجراءات المتخذة استجابة للمخاطر المحددة والمقيّمة: تخفيف المخاطر ومراقبتها."
  - "التخفيف يطبّق الإجراءات المقترحة في التقييم لخفض مستوى الخطر؛ والمراقبة تتحقق من فعالية التخفيف، وتحسّن التقييم، وتكتشف المخاطر الناشئة."
  - "خيارات الاستجابة تشمل التخفيف بالاختبار، وقبول الخطر، ونقله، وخطة طوارئ."
  - "التخفيف بالاختبار: اختيار مختبرين بالمهارات المناسبة، والاستقلالية المناسبة، والمراجعات والتحليل الساكن، والتقنيات والتغطية المناسبة، وأنواع الاختبار المناسبة، والاختبار الديناميكي بما فيه اختبار الانحدار."
terms:
  - en: "Risk Mitigation"
    ar: "تخفيف المخاطر"
    def: "Implementing the actions proposed in risk assessment to reduce the risk level."
    defAr: "تنفيذ الإجراءات المقترحة في تقييم المخاطر لخفض مستوى الخطر."
  - en: "Risk Monitoring"
    ar: "مراقبة المخاطر"
    def: "Ensuring that mitigation actions are effective, obtaining information to improve risk assessment, and identifying emerging risks."
    defAr: "التأكد من فعالية إجراءات التخفيف، والحصول على معلومات لتحسين تقييم المخاطر، واكتشاف المخاطر الناشئة."
---
**التحكم في مخاطر المنتج** يشمل **كل الإجراءات المتخذة استجابة للمخاطر المحددة والمقيّمة**. ويتكوّن من:

- **تخفيف المخاطر (Risk Mitigation):** تنفيذ الإجراءات المقترحة في تقييم المخاطر **لخفض مستوى الخطر**.
- **مراقبة المخاطر (Risk Monitoring):** التأكد من **فعالية** إجراءات التخفيف، والحصول على معلومات إضافية **لتحسين تقييم المخاطر**، واكتشاف **المخاطر الناشئة**.

### خيارات الاستجابة — Response Options

بعد تحليل الخطر، هناك عدة خيارات للاستجابة:

<figure class="gx-figure gx-spectrum" aria-label="Possible responses to an analysed product risk."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Mitigation by testing</b><span>Reduce the risk level through testing.</span></div><div class="gx-spectrum-item"><b>Risk acceptance</b><span>Accept the risk as it is.</span></div><div class="gx-spectrum-item"><b>Risk transfer</b><span>Move the risk to someone else, e.g. insurance or a supplier contract.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Contingency plan</b><span>Prepare what to do if the risk happens.</span></div></div><figcaption>Possible responses to an analysed product risk.</figcaption></figure>

### التخفيف بالاختبار — Mitigation by Testing

إجراءات يمكن اتخاذها لتخفيف مخاطر المنتج بالاختبار:

- **اختيار مختبرين** بالخبرة والمهارات المناسبة لنوع الخطر.
- **تطبيق مستوى استقلالية مناسب** للاختبار.
- **إجراء المراجعات والتحليل الساكن.**
- **تطبيق تقنيات اختبار ومستويات تغطية مناسبة.**
- **تطبيق أنواع اختبار مناسبة** تعالج خصائص الجودة المتأثرة.
- **إجراء الاختبار الديناميكي**، بما فيه **اختبار الانحدار**.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Risk: "International card payments may fail." Mitigation by testing: a tester experienced in payments, system integration tests with the payment provider's sandbox, and regression tests on every release. Contingency plan: if payments fail in production, switch to a backup provider within an hour. Monitoring: watch the payment failure rate daily after launch.</p><p class="gx-ar" lang="ar" dir="rtl">الخطر: «قد تفشل مدفوعات البطاقات الدولية». التخفيف بالاختبار: مختبر ذو خبرة في المدفوعات، واختبارات تكامل أنظمة مع بيئة الاختبار لمزوّد الدفع، واختبارات انحدار في كل إصدار. خطة الطوارئ: إذا فشلت المدفوعات في الإنتاج، يُحوَّل لمزوّد احتياطي خلال ساعة. المراقبة: متابعة نسبة فشل المدفوعات يوميًا بعد الإطلاق.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Remember the two components (mitigation and monitoring) and the four response options (mitigation by testing, acceptance, transfer, contingency plan). Questions often ask which action is mitigation by testing.</p><p class="gx-ar" lang="ar" dir="rtl">تذكّر المكوّنين (التخفيف والمراقبة) وخيارات الاستجابة الأربعة (التخفيف بالاختبار، والقبول، والنقل، وخطة الطوارئ). الأسئلة كثيرًا ما تسأل أي إجراء هو تخفيف بالاختبار.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking testing is the only response to a product risk. Accepting, transferring or preparing a contingency plan are also valid responses.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الاختبار هو الاستجابة الوحيدة لخطر المنتج. القبول والنقل وإعداد خطة طوارئ استجابات صحيحة أيضًا.</p></aside>
