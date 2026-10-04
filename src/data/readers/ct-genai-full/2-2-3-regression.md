---
order: 6
slug: "2-2-3"
chapter: 2
group: "2.2"
section: "2.2.3"
title: "Automated Regression Testing with Generative AI"
titleAr: "اختبار الانحدار المؤتمت باستخدام الذكاء التوليدي"
objectives: "GenAI-2.2.3 · K3 / HO-2.2.3a · H2 / HO-2.2.3b · H2"
minutes: 8
lo:
  GenAI-2.2.3: "Use GenAI to support automated regression testing."
  HO-2.2.3a: "Use few-shot prompting to create, maintain and debug keyword-driven test scripts."
  HO-2.2.3b: "Use structured prompting to analyse regression test reports."
takeaways:
  - "Regression suites grow with every release, so automation in CI/CD pays off, and GenAI helps create, maintain and optimise them."
  - "Five uses: keyword-driven scripts, impact analysis, self-healing tests, reporting, and defect reporting with root-cause support."
  - "GUI tests suffer from changing locators; API tests from changing endpoints, payloads and authentication."
  - "Review generated outputs in proportion to the risk."
terms:
  - en: "Regression Testing"
    ar: "اختبار الانحدار"
    def: "Re-testing after changes to detect defects introduced in unchanged areas."
    match: ["Regression"]
  - en: "Keyword-driven Testing"
    ar: "الاختبار المعتمد على الكلمات المفتاحية"
    def: "Automation where predefined keywords represent common test steps and scripts are built from them."
    match: ["Keyword-driven"]
  - en: "Impact Analysis"
    ar: "تحليل الأثر"
    def: "Identifying the areas most likely affected by a change so regression effort goes where it matters."
  - en: "Self-healing"
    ar: "الإصلاح الذاتي"
    def: "Automatically adapting test scripts to small UI or API changes to avoid needless failures."
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

### واجهة المستخدم مقابل API — GUI vs API

اختبارات GUI غير مستقرة غالبًا بسبب تغيّر الواجهة: محددات ديناميكية وتغيرات بصرية وتفاعلات. يعدّل GenAI السكربتات مع تغيّر المحددات والتفاعلات فيقلّ التدخل اليدوي. أما اختبارات API فتتأثر بتغيّر بنية الطلب والاستجابة والمسارات والمصادقة؛ يعدّل GenAI السكربتات مع تغيّر المواصفات ويولّد بيانات متنوعة، فتبقى التغطية جيدة بجهد أقل.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Accepting any self-heal that makes the test pass. If the “Submit” button changed and self-healing picked “Delete”, the run passes but the test is wrong. Check the intent of the step and the expected result; reject the fix if needed. For APIs, give the model the approved specification so it does not “fix” a test to tolerate an unintended contract change.</p></aside>

<section class="gx-lab" data-lab="HO-2.2.3a"><header class="gx-lab-head"><span class="gx-lab-title">Lab · Keyword-driven Scripts with Few-shot</span><span class="gx-lab-meta">HO-2.2.3a · H2</span></header><div class="gx-lab-body"><p><strong>Part 1 · Automation.</strong> This is a hypothetical training keyword library, not an installable package.</p><table><thead><tr><th>Keyword</th><th>Arguments</th><th>Documented behaviour</th></tr></thead><tbody><tr><td>OpenRegistration</td><td>none</td><td>Opens the sign-up screen</td></tr><tr><td>FillEmail</td><td>email</td><td>Fills the email field</td></tr><tr><td>FillPassword</td><td>password</td><td>Fills the password field</td></tr><tr><td>SubmitRegistration</td><td>none</td><td>Submits the form</td></tr><tr><td>ExpectAccountCreated</td><td>none</td><td>Checks the account was created</td></tr><tr><td>ExpectNoAccount</td><td>none</td><td>Checks no new account was created</td></tr></tbody></table><ol class="gx-lab-steps"><li>Give the model a valid sign-up example and an empty-email example written with these keywords.</li><li>Ask for an 11-character password case, with the constraint “use the documented library only”.</li><li>Review the draft, then run it with your real tool in a test environment.</li></ol><pre class="gx-lab-prompt"><code>OpenRegistration
FillEmail learner01@example.test
FillPassword abcdefghijk
SubmitRegistration
ExpectNoAccount</code></pre><p>This sequence is illustrative, not a real run. A real product test should also check the right error message. If the model suggests an undocumented keyword, do not quietly add it to the library: fix the prompt, or update the library through a visible review.</p><p><strong>Part 2 · Debugging.</strong> Use a system prompt that defines the assistant's role and the library limits, then pass the script and the failure log. Ask it to find the failing step, fix it and explain briefly from the log. Compare before and after, re-run, then extend coverage with more cases.</p></div></section>

<section class="gx-lab" data-lab="HO-2.2.3b"><header class="gx-lab-head"><span class="gx-lab-title">Lab · Analyse a Regression Report</span><span class="gx-lab-meta">HO-2.2.3b · H2</span></header><div class="gx-lab-body"><p><strong>Given:</strong> TC-01 failed with “locator missing”. TC-02 failed with HTTP 500. TC-03 was skipped by the runner. The team has a known defect, KB-7, about an outdated locator on the sign-up screen.</p><ol class="gx-lab-steps"><li>Compare the results with the test specification.</li><li>Cluster similar symptoms.</li><li>Compare with the known-anomalies list.</li><li>Cross-check the evidence. Keep every step in the same conversation, each building on the previous one.</li></ol><details class="gx-lab-answer"><summary>Model answer</summary><p>TC-01 may relate to KB-7 after checking the build and the step. TC-02 needs its own investigation; HTTP 500 alone does not name a root cause. TC-03 was not executed, which is not a pass. Keep the known-anomalies list and the reasons for exclusions so cases are not lost in the summary.</p></details></div></section>
