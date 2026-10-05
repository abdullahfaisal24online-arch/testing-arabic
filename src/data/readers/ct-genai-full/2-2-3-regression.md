---
order: 6
slug: "2-2-3"
chapter: 2
group: "2.2"
section: "2.2.3"
title: "Automated Regression Testing with Generative AI"
titleAr: "اختبار الانحدار المؤتمت باستخدام الذكاء التوليدي"
objectives: "GenAI-2.2.3 · K3 / HO-2.2.3a · H2 / HO-2.2.3b · H2"
minutes: 12
lo:
  GenAI-2.2.3: "Use GenAI to support automated regression testing."
  HO-2.2.3a: "Use few-shot prompting to create, maintain and debug keyword-driven test scripts."
  HO-2.2.3b: "Use structured prompting to analyse regression test reports."
loAr:
  GenAI-2.2.3: "تطبّق GenAI لدعم اختبار الانحدار المؤتمت."
  HO-2.2.3a: "تستخدم التوجيه بالأمثلة لإنشاء سكربتات بالكلمات المفتاحية وصيانتها وتصحيحها."
  HO-2.2.3b: "تستخدم التوجيه المنظّم لتحليل تقارير اختبار الانحدار."
takeaways:
  - "Regression suites grow with every release, so automation in CI/CD pays off, and GenAI helps create, maintain and optimise them."
  - "Five uses: keyword-driven scripts, impact analysis, self-healing tests, reporting, and defect reporting with root-cause support."
  - "GUI tests suffer from changing locators; API tests from changing endpoints, payloads and authentication."
  - "Review generated outputs in proportion to the risk."
takeawaysAr:
  - "مجموعات الانحدار تكبر مع كل إصدار، فتصبح أتمتتها في CI/CD مجدية، ويساعد GenAI في إنشائها وصيانتها وتحسينها."
  - "خمسة استخدامات: سكربتات الكلمات المفتاحية، وتحليل الأثر، والاختبارات ذاتية الإصلاح، والتقارير، وتقارير العيوب مع دعم تحليل السبب الجذري."
  - "اختبارات الواجهة تعاني من تغيّر المحددات؛ واختبارات API من تغيّر المسارات وبنية البيانات والمصادقة."
  - "راجع المخرجات المولّدة بقدر الخطر."
terms:
  - en: "Regression Testing"
    ar: "اختبار الانحدار"
    def: "Re-testing after changes to detect defects introduced in unchanged areas."
    defAr: "إعادة الاختبار بعد التغييرات لكشف عيوب ظهرت في أجزاء لم تتغير."
    match: ["Regression"]
  - en: "Keyword-driven Testing"
    ar: "الاختبار المعتمد على الكلمات المفتاحية"
    def: "Automation where predefined keywords represent common test steps and scripts are built from them."
    defAr: "أتمتة تمثّل فيها كلمات مفتاحية محددة مسبقًا خطوات الاختبار الشائعة، وتُبنى السكربتات منها."
    match: ["Keyword-driven"]
  - en: "Impact Analysis"
    ar: "تحليل الأثر"
    def: "Identifying the areas most likely affected by a change so regression effort goes where it matters."
    defAr: "تحديد الأجزاء الأكثر تأثرًا بالتغيير، ليتجه جهد الانحدار إلى حيث يهم."
  - en: "Self-healing"
    ar: "الإصلاح الذاتي"
    def: "Automatically adapting test scripts to small UI or API changes to avoid needless failures."
    defAr: "تكييف سكربتات الاختبار تلقائيًا مع تغييرات بسيطة في الواجهة أو API لتجنّب فشل غير ضروري."
---
مع الإصدارات المتكررة يزيد حجم اختبارات **Regression**، وتكرار تشغيلها في CI/CD يجعل أتمتتها مفيدة. يدعم GenAI إنشاء مجموعات الانحدار المؤتمتة وصيانتها وتحسينها. ومن خلال التكيّف مع تغييرات الشيفرة وتحليل الأثر، يحدد الأجزاء الأكثر تأثرًا بالتغيير الأخير، فيتوجه جهد الانحدار إلى حيث القيمة الأكبر.

### استخدامات GenAI في الانحدار — Typical Activities

| Activity | كيف يساعد؟ | ما الذي نتحقق منه؟ |
|---|---|---|
| Keyword-driven scripts | ربط الكلمات المفتاحية بالحالات وتوليد السكربتات | وجود الكلمات وتواقيعها وترتيبها |
| Impact analysis | تحديد المناطق عالية الخطر في تعديلات الشيفرة | اعتماديات لم تظهر في المدخلات |
| Self-healing tests | تعديل السكربتات تلقائيًا مع تغييرات بسيطة في الواجهة أو API | أن الإصلاح لا يخفي عيبًا فعليًا |
| Reporting and insights | تقارير ولوحات فيها نسب النجاح والمشكلات والاتجاهات وتوقعات الفشل | الحسابات ومصدر كل نتيجة |
| Defect reporting / RCA | تقارير عيوب شاملة بالسجلات وصور الشاشة وبيانات البيئة | فصل السبب المثبت عن الفرضية |

تنطبق هذه الاستخدامات على الانحدار الوظيفي وغير الوظيفي، لكن مخرجات GenAI تحتاج مراجعة تتناسب مع مستوى الخطر (انظر الفصل الثالث).

### كل استخدام بالتفصيل — Each Activity

**السكربتات بالكلمات المفتاحية:** في إطار Keyword-driven، كل خطوة متكررة لها كلمة مفتاحية موثقة (مثل OpenLogin أو FillEmail). يربط النموذج خطوات الحالة بالكلمات المناسبة ويولّد السكربت، فيدعم المختبرين ومهندسي الأتمتة دون الحاجة لكتابة الشيفرة من الصفر.

**تحليل الأثر:** يقرأ النموذج تغييرات الشيفرة (مثل Diff في طلب الدمج) ويقترح المكوّنات والاختبارات الأكثر تأثرًا. بدل تشغيل مجموعة الانحدار كاملة لكل تغيير صغير، يُوجَّه الجهد إلى المناطق عالية الخطر.

**الإصلاح الذاتي:** عندما يتغيّر معرّف زر أو مسار API تغييرًا بسيطًا، يكيّف النموذج السكربت تلقائيًا، فلا تفشل الاختبارات فشلًا لا علاقة له بالجودة الفعلية، وتبقى المجموعة مستقرة.

**التقارير والرؤى:** ينتج تقارير ولوحات في الوقت المناسب، تتضمن نسب النجاح والمشكلات والاتجاهات، وقد يقدّم توقعات عن مناطق الفشل المحتملة.

**تقارير العيوب وتحليل السبب الجذري:** يجمع السجلات ولقطات الشاشة ومعلومات البيئة في تقرير عيب كامل، ويقترح أسبابًا محتملة يتحقق منها المختبِر.

### واجهة المستخدم مقابل API — GUI vs API

اختبارات GUI غير مستقرة غالبًا بسبب تغيّر الواجهة: محددات ديناميكية وتغيرات بصرية وتفاعلات. يعدّل GenAI السكربتات مع تغيّر المحددات والتفاعلات فيقلّ التدخل اليدوي. أما اختبارات API فتتأثر بتغيّر بنية الطلب والاستجابة والمسارات والمصادقة؛ يعدّل GenAI السكربتات مع تغيّر المواصفات ويولّد بيانات متنوعة، فتبقى التغطية جيدة بجهد أقل.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Accepting any self-heal that makes the test pass. If the “Submit” button changed and self-healing picked “Delete”, the run passes but the test is wrong. Check the intent of the step and the expected result; reject the fix if needed. For APIs, give the model the approved specification so it does not “fix” a test to tolerate an unintended contract change.</p><p class="gx-ar" lang="ar" dir="rtl">قبول أي إصلاح ذاتي يجعل الاختبار ينجح. إذا تغيّر زر «إرسال» واختار الإصلاح الذاتي زر «حذف»، ينجح التشغيل لكن الاختبار خاطئ. افحص نية الخطوة والنتيجة المتوقعة، وارفض الإصلاح إن لزم. وفي API، أعطِ النموذج المواصفات المعتمدة حتى لا «يصلح» اختبارًا ليتسامح مع تغيير غير مقصود في العقد.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the five regression activities by name and purpose: keyword-driven script implementation, impact analysis and test optimisation, self-healing and adaptive tests, automated reporting and insights, and enhanced defect reporting and root cause analysis. Know the typical GUI problem (frequent interface changes, locators) and the API problems (changed request/response structures, endpoints, authentication).</p><p class="gx-ar" lang="ar" dir="rtl">اعرف أنشطة الانحدار الخمسة باسمها وهدفها: تنفيذ السكربتات بالكلمات المفتاحية، وتحليل الأثر وتحسين الاختبارات، والاختبارات ذاتية الإصلاح والتكيفية، والتقارير والرؤى المؤتمتة، وتقارير العيوب المحسّنة وتحليل السبب الجذري. واعرف مشكلة الواجهة المعتادة (تغيّر الواجهة المتكرر والمحددات) ومشكلات API (تغيّر بنية الطلب والاستجابة والمسارات والمصادقة).</p></aside>

<section class="gx-lab" data-lab="HO-2.2.3a"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Keyword-driven Scripts with Few-shot</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · سكربتات بالكلمات المفتاحية مع Few-shot</span></span><span class="gx-lab-meta">HO-2.2.3a · H2</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Part 1 · Automation.</strong> This is a hypothetical training keyword library, not an installable package.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الجزء الأول · الأتمتة.</strong> هذه مكتبة كلمات مفتاحية تدريبية افتراضية، وليست حزمة قابلة للتثبيت.</span></p><table><thead><tr><th><span class="gx-en" lang="en" dir="ltr">Keyword</span><span class="gx-ar" lang="ar" dir="rtl">الكلمة</span></th><th><span class="gx-en" lang="en" dir="ltr">Arguments</span><span class="gx-ar" lang="ar" dir="rtl">الوسائط</span></th><th><span class="gx-en" lang="en" dir="ltr">Documented behaviour</span><span class="gx-ar" lang="ar" dir="rtl">السلوك الموثّق</span></th></tr></thead><tbody><tr><td>OpenRegistration</td><td><span class="gx-en" lang="en" dir="ltr">none</span><span class="gx-ar" lang="ar" dir="rtl">لا شيء</span></td><td><span class="gx-en" lang="en" dir="ltr">Opens the sign-up screen</span><span class="gx-ar" lang="ar" dir="rtl">يفتح شاشة التسجيل</span></td></tr><tr><td>FillEmail</td><td><span class="gx-en" lang="en" dir="ltr">email</span><span class="gx-ar" lang="ar" dir="rtl">البريد</span></td><td><span class="gx-en" lang="en" dir="ltr">Fills the email field</span><span class="gx-ar" lang="ar" dir="rtl">يعبّئ حقل البريد</span></td></tr><tr><td>FillPassword</td><td><span class="gx-en" lang="en" dir="ltr">password</span><span class="gx-ar" lang="ar" dir="rtl">كلمة المرور</span></td><td><span class="gx-en" lang="en" dir="ltr">Fills the password field</span><span class="gx-ar" lang="ar" dir="rtl">يعبّئ حقل كلمة المرور</span></td></tr><tr><td>SubmitRegistration</td><td><span class="gx-en" lang="en" dir="ltr">none</span><span class="gx-ar" lang="ar" dir="rtl">لا شيء</span></td><td><span class="gx-en" lang="en" dir="ltr">Submits the form</span><span class="gx-ar" lang="ar" dir="rtl">يرسل النموذج</span></td></tr><tr><td>ExpectAccountCreated</td><td><span class="gx-en" lang="en" dir="ltr">none</span><span class="gx-ar" lang="ar" dir="rtl">لا شيء</span></td><td><span class="gx-en" lang="en" dir="ltr">Checks the account was created</span><span class="gx-ar" lang="ar" dir="rtl">يتحقق من إنشاء الحساب</span></td></tr><tr><td>ExpectNoAccount</td><td><span class="gx-en" lang="en" dir="ltr">none</span><span class="gx-ar" lang="ar" dir="rtl">لا شيء</span></td><td><span class="gx-en" lang="en" dir="ltr">Checks no new account was created</span><span class="gx-ar" lang="ar" dir="rtl">يتحقق من عدم إنشاء حساب جديد</span></td></tr></tbody></table><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Give the model a valid sign-up example and an empty-email example written with these keywords.</span><span class="gx-ar" lang="ar" dir="rtl">أعطِ النموذج مثال تسجيل صحيحًا ومثال بريد فارغ مكتوبَين بهذه الكلمات.</span></li><li><span class="gx-en" lang="en" dir="ltr">Ask for an 11-character password case, with the constraint “use the documented library only”.</span><span class="gx-ar" lang="ar" dir="rtl">اطلب حالة لكلمة مرور من 11 محرفًا، مع القيد «استخدم المكتبة الموثّقة فقط».</span></li><li><span class="gx-en" lang="en" dir="ltr">Review the draft, then run it with your real tool in a test environment.</span><span class="gx-ar" lang="ar" dir="rtl">راجع المسودة، ثم شغّلها بأداتك الفعلية في بيئة اختبار.</span></li></ol><pre class="gx-lab-prompt"><code>OpenRegistration
FillEmail learner01@example.test
FillPassword abcdefghijk
SubmitRegistration
ExpectNoAccount</code></pre><p><span class="gx-en" lang="en" dir="ltr">This sequence is illustrative, not a real run. A real product test should also check the right error message. If the model suggests an undocumented keyword, do not quietly add it to the library: fix the prompt, or update the library through a visible review.</span><span class="gx-ar" lang="ar" dir="rtl">هذا التسلسل توضيحي، وليس تشغيلًا حقيقيًا. اختبار المنتج الحقيقي يجب أن يتحقق أيضًا من رسالة الخطأ الصحيحة. وإذا اقترح النموذج كلمة غير موثّقة، لا تضفها للمكتبة بصمت: صحّح التوجيه، أو حدّث المكتبة بمراجعة واضحة.</span></p><p><span class="gx-en" lang="en" dir="ltr"><strong>Part 2 · Debugging.</strong> Use a system prompt that defines the assistant's role and the library limits, then pass the script and the failure log. Ask it to find the failing step, fix it and explain briefly from the log. Compare before and after, re-run, then extend coverage with more cases.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الجزء الثاني · التصحيح.</strong> استخدم توجيه نظام يحدد دور المساعد وحدود المكتبة، ثم مرّر السكربت وسجل الفشل. اطلب منه تحديد الخطوة الفاشلة وإصلاحها وشرحًا موجزًا من السجل. قارن قبل وبعد، وأعد التشغيل، ثم وسّع التغطية بحالات إضافية.</span></p></div></section>

<section class="gx-lab" data-lab="HO-2.2.3b"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Analyse a Regression Report</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · تحليل تقرير انحدار</span></span><span class="gx-lab-meta">HO-2.2.3b · H2</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Given:</strong> TC-01 failed with “locator missing”. TC-02 failed with HTTP 500. TC-03 was skipped by the runner. The team has a known defect, KB-7, about an outdated locator on the sign-up screen.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>المعطيات:</strong> TC-01 فشل برسالة «locator missing». TC-02 فشل بـ HTTP 500. TC-03 تخطّاه المشغّل. ولدى الفريق عيب معروف KB-7 عن محدد قديم في شاشة التسجيل.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Compare the results with the test specification.</span><span class="gx-ar" lang="ar" dir="rtl">قارن النتائج بمواصفات الاختبار.</span></li><li><span class="gx-en" lang="en" dir="ltr">Cluster similar symptoms.</span><span class="gx-ar" lang="ar" dir="rtl">اجمع الأعراض المتشابهة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Compare with the known-anomalies list.</span><span class="gx-ar" lang="ar" dir="rtl">قارن بقائمة الحالات الشاذة المعروفة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Cross-check the evidence. Keep every step in the same conversation, each building on the previous one.</span><span class="gx-ar" lang="ar" dir="rtl">تحقّق من الأدلة بشكل متقاطع. أبقِ كل الخطوات في المحادثة نفسها، كل خطوة تبني على السابقة.</span></li></ol><details class="gx-lab-answer"><summary>Model answer · <span class="gx-ar-inline" lang="ar" dir="rtl">الإجابة النموذجية</span></summary><p><span class="gx-en" lang="en" dir="ltr">TC-01 may relate to KB-7 after checking the build and the step. TC-02 needs its own investigation; HTTP 500 alone does not name a root cause. TC-03 was not executed, which is not a pass. Keep the known-anomalies list and the reasons for exclusions so cases are not lost in the summary.</span><span class="gx-ar" lang="ar" dir="rtl">TC-01 قد يرتبط بـ KB-7 بعد فحص الإصدار والخطوة. TC-02 يحتاج تحقيقًا مستقلًا؛ HTTP 500 وحده لا يحدد سببًا جذريًا. TC-03 لم يُنفَّذ، وهذا ليس نجاحًا. احتفظ بقائمة الحالات الشاذة المعروفة وأسباب الاستبعاد حتى لا تضيع حالات في الملخص.</span></p></details></div></section>
