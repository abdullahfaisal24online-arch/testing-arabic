---
order: 2
slug: "2-1-2"
chapter: 2
group: "2.1"
section: "2.1.2"
title: "Software Development Lifecycle and Good Testing Practices"
titleAr: "دورة حياة التطوير وممارسات الاختبار الجيدة"
objectives: "FL-2.1.2 · K1"
minutes: 5
lo:
  FL-2.1.2: "Recall good testing practices that apply to all software development lifecycles."
loAr:
  FL-2.1.2: "تتذكّر ممارسات الاختبار الجيدة التي تنطبق على كل دورات حياة التطوير."
takeaways:
  - "Every development activity has a corresponding test activity, so all development is quality-controlled."
  - "Different test levels have specific, different objectives, so testing is comprehensive without redundancy."
  - "Test analysis and design for a level start during the corresponding development phase."
  - "Testers review work products as soon as drafts are available, supporting shift left."
takeawaysAr:
  - "لكل نشاط تطوير نشاط اختبار مقابل، فيخضع كل التطوير لضبط الجودة."
  - "لكل مستوى اختبار أهداف محددة ومختلفة، فيكون الاختبار شاملًا دون تكرار."
  - "تحليل الاختبار وتصميمه لكل مستوى يبدآن خلال مرحلة التطوير المقابلة."
  - "المختبرون يراجعون مخرجات العمل فور توفر مسوداتها، دعمًا لنهج النقل لليسار."
terms:
  - en: "Test Level"
    ar: "مستوى الاختبار"
    def: "A specific instantiation of a test process, such as component testing or system testing."
    defAr: "تجسيد محدد لعملية الاختبار، مثل اختبار المكوّنات أو اختبار النظام."
    match: ["Test Level", "test level", "test levels"]
---
مهما كانت دورة حياة التطوير التي يتّبعها فريقك، هناك **ممارسات اختبار جيدة** تنطبق عليها جميعًا. يذكر المنهج أربعًا منها.

### الممارسات الأربع — The Four Practices

<figure class="gx-figure gx-spectrum" aria-label="Good testing practices, independent of the chosen SDLC."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>1 · A test activity for every development activity</b><span>All development activities are subject to quality control.</span></div><div class="gx-spectrum-item"><b>2 · Distinct objectives per test level</b><span>Comprehensive testing without redundancy.</span></div><div class="gx-spectrum-item"><b>3 · Early test analysis and design</b><span>Start during the matching development phase.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>4 · Review drafts early</b><span>Testers join as soon as drafts exist.</span></div></div><figcaption>Good testing practices, independent of the chosen SDLC.</figcaption></figure>

**1. لكل نشاط تطوير نشاط اختبار مقابل.** بهذا يخضع كل نشاط تطوير لضبط الجودة. كتابة المتطلبات يقابلها مراجعتها، وكتابة الشيفرة يقابلها اختبار المكوّنات، وهكذا.

**2. لكل مستوى اختبار أهداف خاصة ومختلفة.** هذا يجعل الاختبار شاملًا مع **تجنّب التكرار**. اختبار المكوّنات لا يعيد ما يفعله اختبار النظام، والعكس.

**3. تحليل الاختبار وتصميمه لمستوى معيّن يبدآن خلال مرحلة التطوير المقابلة.** مثلًا: تصميم اختبارات النظام يبدأ عندما تُكتب مواصفات النظام، لا عندما يكتمل النظام. هذا تطبيق لمبدأ **الاختبار المبكر**.

**4. المختبرون يشاركون في مراجعة مخرجات العمل فور توفر مسوداتها.** بهذا يدعم الاختبار المبكر واكتشاف الـ defects نهج **النقل لليسار (Shift Left)**.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">As soon as the product owner shares a draft story for "export invoices to PDF", the tester comments: "What happens with 1,000+ invoices? Which date format?" Two defects are prevented before a single line of code is written.</p><p class="gx-ar" lang="ar" dir="rtl">بمجرد أن يشارك مالك المنتج مسودة قصة «تصدير الفواتير إلى PDF»، يعلّق المختبر: «ماذا يحدث مع أكثر من 1000 فاتورة؟ وأي صيغة للتاريخ؟». اثنان من الـ defects تم منعهما قبل كتابة سطر شيفرة واحد.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">This is K1: recognise the four practices. A distractor might say "each test level should cover the same objectives to be safe"; the syllabus says the opposite: different, specific objectives to avoid redundancy.</p><p class="gx-ar" lang="ar" dir="rtl">هذا هدف K1: تعرّف على الممارسات الأربع. قد يقول خيار مضلل «يجب أن يغطي كل مستوى اختبار الأهداف نفسها للاحتياط»؛ والمنهج يقول العكس: أهداف محددة ومختلفة لتجنّب التكرار.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Waiting for a "final" document before reviewing it. Good practice is to review drafts as soon as they are available.</p><p class="gx-ar" lang="ar" dir="rtl">انتظار النسخة «النهائية» من الوثيقة قبل مراجعتها. الممارسة الجيدة هي مراجعة المسودات فور توفرها.</p></aside>
