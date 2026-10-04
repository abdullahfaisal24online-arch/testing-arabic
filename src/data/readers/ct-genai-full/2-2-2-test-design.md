---
order: 5
slug: "2-2-2"
chapter: 2
group: "2.2"
section: "2.2.2"
title: "Test Design and Test Implementation with Generative AI"
titleAr: "تصميم الاختبار وتجهيزه باستخدام الذكاء التوليدي"
objectives: "GenAI-2.2.2 · K3 / HO-2.2.2a · H2 / HO-2.2.2b · H2 / HO-2.2.2c · H2"
minutes: 13
lo:
  GenAI-2.2.2: "Use GenAI to support test design and test implementation tasks."
  HO-2.2.2a: "Generate functional test cases from user stories with chaining, structured prompts and meta prompting."
  HO-2.2.2b: "Use few-shot prompting to generate Gherkin-style test cases from user stories."
  HO-2.2.2c: "Use prompt chaining to prioritise test cases by priority and dependencies."
takeaways:
  - "GenAI helps generate test cases, synthetic test data and test scripts, and helps schedule and prioritise execution."
  - "Test implementation prepares what execution needs; it is not test execution itself."
  - "Priority never overrides a hard dependency: a high-priority test still waits for the tests it depends on."
  - "A script that runs without errors can still check the wrong expected result."
terms:
  - en: "Test Design"
    ar: "تصميم الاختبار"
    def: "Elaborating test conditions into test cases and other testware."
  - en: "Test Implementation"
    ar: "تجهيز الاختبار"
    def: "Creating or acquiring the testware needed for execution, such as procedures, scripts, data and environments."
  - en: "Synthetic Test Data"
    ar: "بيانات اختبار تركيبية"
    def: "Generated data that resembles production data, including edge cases, without exposing real confidential information."
  - en: "Gherkin"
    ar: "صيغة Gherkin"
    def: "A Given–When–Then syntax for writing test scenarios in structured natural language."
---
**Test Design** يفصّل شروط الاختبار إلى حالات ومواد اختبار. **Test Implementation** يعني تجهيز أو اقتناء ما يلزم لتنفيذ الاختبارات، مثل الإجراءات والسكربتات والبيانات والبيئة؛ لا تخلطه مع **Test Execution** الذي يشغّل الاختبارات فعليًا. يدعم GenAI إعداد السكربتات اليدوية والمؤتمتة وترتيبها وجدولتها، ويساعد في إنشاء أنواع مختلفة من مواد الاختبار.

### مهام التصميم والتجهيز — Design and Implementation Tasks

- **توليد حالات الاختبار:** من متطلبات وظيفية وغير وظيفية، مع الشروط المسبقة والمدخلات والنتائج المتوقعة وأهداف التغطية، من التحقق الوظيفي البسيط حتى اختبارات End-to-End.
- **إنشاء بيانات اختبار تركيبية — Synthetic Test Data:** متنوعة وقريبة من بيانات الإنتاج، تشمل الحالات الحدّية وتخدم الاختبارات الوظيفية وغير الوظيفية، دون كشف معلومات سرية.
- **توليد السكربتات:** تحويل الحالات المنظمة إلى إجراءات يدوية أو سكربتات تتوافق مع إطار الأتمتة، وتحديثها مع تغيّر المتطلبات.
- **جدولة التنفيذ وترتيبه:** بحسب الأولوية والمخاطر والاعتماديات وتوفر الموارد وأهداف الاختبار.

### أمثلة لكل مهمة — Examples

**توليد الحالات:** من متطلب وظيفي مثل «يحصل العميل على خصم 10% عند شراء أكثر من 3 قطع»، يقترح النموذج حالات بشروط مسبقة (سلة فيها 3 قطع، 4 قطع)، ومدخلات، ونتائج متوقعة. ومن متطلب غير وظيفي مثل «تُحمَّل الصفحة خلال ثانيتين»، يقترح شروط القياس والحمل والبيئة.

**البيانات التركيبية:** تحتاج 500 عميل لاختبار تقرير؟ يولّد النموذج أسماء وعناوين وأرقامًا واقعية الشكل لكنها غير حقيقية، مع حالات حدّية مثل أسماء طويلة جدًا، وأحرف عربية وإنجليزية مختلطة، وتواريخ ميلاد على الحدود. هذا يخدم الاختبار دون كشف بيانات عملاء فعلية.

**السكربتات:** من حالة منظمة بخطوات واضحة، يولّد النموذج سكربتًا للإطار الذي يستخدمه الفريق، وعند تغيّر المتطلب يحدّث السكربت المتأثر.

**الجدولة:** يقرأ النموذج الحالات واعتمادياتها ويقترح ترتيب تنفيذ يراعي الأولوية والمخاطر والموارد المتاحة وأهداف الاختبار.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Treating generated data as safe by default, or treating a script that runs as a correct test. Check data for sensitivity and validity, and check every script's expected result and coverage before approving it.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label">Exam tip</p><p>Know the four design and implementation tasks: test case generation, synthetic test data, test script generation, and execution scheduling and prioritisation. Remember that test implementation prepares testware for execution; it is not execution itself.</p></aside>

<section class="gx-lab" data-lab="HO-2.2.2a"><header class="gx-lab-head"><span class="gx-lab-title">Lab · Generate, Check Coverage, Then Meta-Prompt</span><span class="gx-lab-meta">HO-2.2.2a · H2</span></header><div class="gx-lab-body"><p><strong>Goal:</strong> generate functional test cases for the rule “password length is 12–64 characters”, assuming all other fields are valid.</p><ol class="gx-lab-steps"><li>Ask for test cases in the format ID / Preconditions / Input / Steps / Expected / Requirement.</li><li>Ask for a coverage table per acceptance criterion and review it.</li><li>Use a meta prompt to design a prompt for an end-to-end procedure: sign up, then reach the allowed feature. Fix the prompt when you find a gap and regenerate only the affected part.</li></ol><table><thead><tr><th>Case</th><th>Input</th><th>Expected</th><th>Source</th></tr></thead><tbody><tr><td>TC-01</td><td>11 characters</td><td>Sign-up rejected for length</td><td>Lower boundary</td></tr><tr><td>TC-02</td><td>12 characters</td><td>Length rule accepted</td><td>Lower boundary</td></tr><tr><td>TC-03</td><td>64 characters</td><td>Length rule accepted</td><td>Upper boundary</td></tr><tr><td>TC-04</td><td>65 characters</td><td>Sign-up rejected for length</td><td>Upper boundary</td></tr></tbody></table><pre class="gx-lab-prompt"><code>Design a prompt that generates an end-to-end procedure from the approved
acceptance criteria and test cases. Ask for missing data first, define the
order of steps and observable results. Do not assume screens or permissions
that are not stated. Include a check that links each step to its source.</code></pre><p>These teaching cases do not cover all of sign-up. Clarify how characters are counted when Unicode is involved instead of assuming each visible symbol counts as one.</p></div></section>

<section class="gx-lab" data-lab="HO-2.2.2b"><header class="gx-lab-head"><span class="gx-lab-title">Lab · Few-shot Gherkin Scenarios</span><span class="gx-lab-meta">HO-2.2.2b · H2</span></header><div class="gx-lab-body"><p><strong>Goal:</strong> give the model correct examples, each with its user story and test condition, then ask for a scenario for a new condition.</p><pre class="gx-lab-prompt"><code>Scenario: Reject an empty email
  Given all other registration fields are valid
  When the learner submits an empty email
  Then no account is created
# Second example
Scenario: Reject an existing email
  Given an account already uses the submitted email
  When the learner submits otherwise valid registration data
  Then no second account is created</code></pre><ol class="gx-lab-steps"><li>Attach the story and test condition to each example above.</li><li>Ask for a scenario for a password that is too short.</li><li>Check that Given sets up, When acts and Then states the result, and that nothing adds a new requirement. If not, refine the examples or the prompt and try again.</li></ol></div></section>

<section class="gx-lab" data-lab="HO-2.2.2c"><header class="gx-lab-head"><span class="gx-lab-title">Lab · Prioritise with Dependencies</span><span class="gx-lab-meta">HO-2.2.2c · H2</span></header><div class="gx-lab-body"><p><strong>Given:</strong> A creates a user (2 min). B enrols in a course and needs A (3 min). C issues a certificate and needs B (4 min). D opens a public page and is independent (1 min). C has the highest priority.</p><ol class="gx-lab-steps"><li>Ask the model to extract the dependencies, and review them.</li><li>Ask for an order that respects the dependencies, using risk-, coverage- or requirements-based prioritisation.</li><li>Ask for a schedule with execution resources, then verify the reasoning yourself.</li></ol><figure class="gx-figure gx-flow" aria-label="A then B then C, with D independent"><div class="gx-flow-row"><span class="gx-flow-node">A<small>2 min</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">B<small>3 min</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">C<small>highest priority</small></span><span class="gx-flow-arrow" aria-hidden="true">·</span><span class="gx-flow-node">D<small>independent</small></span></div><figcaption>One runner: 10 minutes. Two runners: D runs alongside A, so the minimum is 9 minutes (the A → B → C path).</figcaption></figure></div></section>
