---
order: 9
slug: "5-2-2"
chapter: 5
group: "5.2"
section: "5.2.2"
title: "Project Risks and Product Risks"
titleAr: "مخاطر المشروع ومخاطر المنتج"
objectives: "FL-5.2.2 · K2"
minutes: 7
lo:
  FL-5.2.2: "Tell project risks and product risks apart."
loAr:
  FL-5.2.2: "تميّز بين مخاطر المشروع ومخاطر المنتج."
takeaways:
  - "Project risks relate to managing and controlling the project; product risks relate to the quality characteristics of the product."
  - "Project risks: organisational issues, people issues, technical issues and supplier issues; they affect schedule, budget and scope."
  - "Product risks: missing or wrong functionality, wrong calculations, runtime errors, poor architecture, inefficient algorithms, slow response, poor user experience, security vulnerabilities."
  - "Product risks can lead to user dissatisfaction, lost revenue, trust or reputation, damage to third parties, high maintenance costs, helpdesk overload, criminal penalties, and in extreme cases physical damage, injury or death."
takeawaysAr:
  - "مخاطر المشروع ترتبط بإدارة المشروع والتحكم فيه؛ ومخاطر المنتج ترتبط بخصائص جودة المنتج."
  - "مخاطر المشروع: مشكلات تنظيمية، ومشكلات أشخاص، ومشكلات تقنية، ومشكلات موردين؛ وتؤثر على الجدول والميزانية والنطاق."
  - "مخاطر المنتج: وظائف ناقصة أو خاطئة، وحسابات خاطئة، وأخطاء تشغيل، وبنية ضعيفة، وخوارزميات غير فعّالة، واستجابة بطيئة، وتجربة مستخدم ضعيفة، وثغرات أمنية."
  - "قد تؤدي مخاطر المنتج إلى عدم رضا المستخدمين، وخسارة الإيرادات أو الثقة أو السمعة، وضرر لأطراف ثالثة، وتكاليف صيانة عالية، وضغط على الدعم الفني، وعقوبات جنائية، وفي الحالات القصوى ضرر مادي أو إصابات أو وفاة."
terms:
  - en: "Project Risk"
    ar: "خطر المشروع"
    def: "A risk related to the management and control of a project, affecting schedule, budget or scope."
    defAr: "خطر مرتبط بإدارة المشروع والتحكم فيه، يؤثر على الجدول أو الميزانية أو النطاق."
    match: ["Project Risk", "project risk", "project risks"]
  - en: "Product Risk"
    ar: "خطر المنتج"
    def: "A risk related to the quality characteristics of a product."
    defAr: "خطر مرتبط بخصائص جودة المنتج."
    match: ["Product Risk", "product risk", "product risks"]
---
في اختبار البرمجيات نهتم عمومًا بنوعين من المخاطر: **مخاطر المشروع** و**مخاطر المنتج**.

### مخاطر المشروع — Project Risks

ترتبط بـ **إدارة المشروع والتحكم فيه**. منها:

| Category | أمثلة |
| --- | --- |
| Organizational issues | تأخر تسليم مخرجات العمل، تقديرات غير دقيقة، خفض التكاليف |
| People issues | مهارات غير كافية، صراعات، مشكلات تواصل، نقص في الموظفين |
| Technical issues | تضخّم النطاق (Scope Creep)، ضعف دعم الأدوات |
| Supplier issues | فشل طرف ثالث في التسليم، إفلاس شركة داعمة |

عند حدوثها، تؤثر مخاطر المشروع على **جدول المشروع وميزانيته ونطاقه**، فتؤثر على قدرته على تحقيق أهدافه.

### مخاطر المنتج — Product Risks

ترتبط بـ **خصائص جودة المنتج**، الموصوفة مثلًا في نموذج الجودة ISO 25010. أمثلتها:

- وظائف **ناقصة أو خاطئة**.
- **حسابات غير صحيحة**.
- **أخطاء أثناء التشغيل**.
- **بنية معمارية ضعيفة**.
- **خوارزميات غير فعّالة**.
- **زمن استجابة غير كافٍ**.
- **تجربة مستخدم ضعيفة**.
- **ثغرات أمنية**.

### عواقب مخاطر المنتج — Consequences

عند حدوثها، قد تؤدي مخاطر المنتج إلى:

- **عدم رضا المستخدمين.**
- **خسارة الإيرادات أو الثقة أو السمعة.**
- **ضرر لأطراف ثالثة.**
- **تكاليف صيانة عالية**، و**ضغط على الدعم الفني**.
- **عقوبات جنائية.**
- وفي الحالات القصوى: **ضرر مادي، أو إصابات، أو حتى الوفاة.**

<figure class="gx-figure gx-spectrum" aria-label="Project risk or product risk?"><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Project risk</b><span>About the project: delays, skills, tools, suppliers. Hits schedule, budget, scope.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Product risk</b><span>About the product's quality: wrong results, slow, insecure, hard to use. Hits users and the business.</span></div></div><figcaption>Project risk or product risk?</figcaption></figure>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Ask "is this about the work or about the software?" A key tester leaving, a late test environment or a vendor delay → project risk. Slow pages, wrong totals or a data leak → product risk.</p><p class="gx-ar" lang="ar" dir="rtl">اسأل: «هل هذا عن العمل أم عن البرمجية؟». مغادرة مختبر أساسي، أو تأخر بيئة الاختبار، أو تأخير مورّد ← خطر مشروع. صفحات بطيئة، أو مجاميع خاطئة، أو تسرّب بيانات ← خطر منتج.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Classifying "poor tool support" as a product risk. Tool problems affect the project's ability to work, so they are project risks (technical issues).</p><p class="gx-ar" lang="ar" dir="rtl">تصنيف «ضعف دعم الأدوات» كخطر منتج. مشكلات الأدوات تؤثر على قدرة المشروع على العمل، فهي مخاطر مشروع (مشكلات تقنية).</p></aside>
