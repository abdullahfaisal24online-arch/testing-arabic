---
order: 1
slug: "2-1-1"
chapter: 2
group: "2.1"
section: "2.1.1"
title: "Structure of Prompts for Generative AI in Software Testing"
titleAr: "بنية التوجيه للذكاء التوليدي في اختبار البرمجيات"
objectives: "GenAI-2.1.1 · K2 / HO-2.1.1 · H0"
minutes: 9
lo:
  GenAI-2.1.1: "Give examples of how prompts for testing tasks are structured."
  HO-2.1.1: "Observe structured prompts and identify each of their six components."
takeaways:
  - "A structured prompt has six components: role, context, instruction, input data, constraints and output format."
  - "Context is background; input data is the material actually analysed. An instruction is the task; a constraint limits it."
  - "The structure is a base to combine with prompting techniques, chosen by task and model."
terms:
  - en: "Prompt Engineering"
    ar: "هندسة التوجيه"
    def: "Designing and refining prompts, inputs and constraints so a model produces useful, evaluable output for a task."
  - en: "Role"
    ar: "الدور"
    def: "The perspective or persona the model takes, such as tester, test manager or automation engineer."
  - en: "Context"
    ar: "السياق"
    def: "Background about the test object, the feature and the circumstances of the task."
  - en: "Constraints"
    ar: "القيود"
    def: "Limits and considerations the model must respect while doing the task."
---
هندسة التوجيه **Prompt Engineering** هي تنظيم الطلب والمدخلات والقيود لتوضيح المهمة للنموذج، ثم تحسينها بناءً على نتائج قابلة للتقييم. جودة الصياغة تزيد فرصة الحصول على مخرجات مفيدة، لكنها لا تحوّل النموذج إلى مصدر معصوم من الخطأ. سنستخدم في هذا الفصل منصة تعليمية افتراضية اسمها «تعلّم» كحالة تطبيقية متكررة.

### المكونات الستة — The Six Components

التوجيه المنظّم يتكون من ستة عناصر. ليس المطلوب تعبئة حقول شكلية؛ المطلوب أن يعرف النموذج ما الذي يعمل عليه وما النتيجة المقبولة.

| Component | وظيفته | مثال من منصة تعلّم |
|---|---|---|
| Role | المنظور أو الشخصية التي يتبناها النموذج، مثل مختبر أو مدير اختبار أو مهندس أتمتة | محلل اختبار يراجع متطلبات التسجيل |
| Context | خلفية عن موضوع الاختبار والوظيفة والظروف المرتبطة | التسجيل بالبريد وكلمة مرور في موقع عربي |
| Instruction | المهمة المحددة المطلوب تنفيذها | استخرج الغموض ثم اقترح شروط اختبار |
| Input data | المادة الفعلية: قصص مستخدم، معايير قبول، صور شاشة، شيفرة، اختبارات قائمة أو مخرجات مرجعية | قصة المستخدم، معايير القبول، مخطط الشاشة |
| Constraints | قيود أو اعتبارات يجب على النموذج احترامها | لا تضف تحققًا هاتفيًا غير مذكور |
| Output format | البنية أو الشكل المتوقع للاستجابة | جدول: المعرّف، المصدر، الشرط، السؤال المفتوح |

### كل مكوّن بالتفصيل — Each Component in Detail

**Role:** يحدد زاوية النظر. «بصفتك مهندس أتمتة» يدفع النموذج للتفكير في المحددات والانتظار والبيانات القابلة لإعادة الاستخدام، بينما «بصفتك محلل اختبار» يدفعه نحو الغموض والتغطية. الدور لا يمنح النموذج خبرة لا يملكها، لكنه يوجّه أسلوب الإجابة ومستواها.

**Context:** كل ما يحتاج النموذج معرفته عن موضوع الاختبار والظروف المحيطة: نوع النظام، والجمهور، والبيئة، والقيود التقنية. بدون سياق، يملأ النموذج الفراغ بافتراضات عامة قد لا تنطبق على مشروعك.

**Instruction:** الفعل المطلوب بدقة: «استخرج»، «صنّف»، «ولّد»، «قارن». تعليمات مثل «ساعدني في الاختبار» واسعة جدًا، بينما «استخرج شروط الاختبار من معايير القبول المرفقة» محددة وقابلة للتقييم.

**Input data:** المادة التي سيعمل عليها النموذج فعلًا: قصص المستخدم، معايير القبول، لقطات الشاشة، الشيفرة، الاختبارات الموجودة، أو مخرجات مرجعية. جودة هذه المدخلات تحدد سقف جودة النتيجة.

**Constraints:** الحدود التي يجب احترامها: «لا تضف متطلبات غير مذكورة»، «استخدم المكتبة الموثقة فقط»، «لا تتجاوز عشر حالات». القيود هي أقوى أداة لتقليل الهلوسة في هذه المرحلة.

**Output format:** الشكل المطلوب للنتيجة: جدول بأعمدة محددة، أو JSON، أو Gherkin. التنسيق الواضح يسهّل المراجعة ويسمح بالفحص الآلي ودمج الناتج في الأدوات.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Mixing up neighbouring components. That the system is an e-learning site is <strong>context</strong>; the text of the password rule is <strong>input data</strong>. “Generate the test cases” is an <strong>instruction</strong>; “do not invent requirements” is a <strong>constraint</strong> on it.</p></aside>

هذه المكونات أساس يُبنى عليه، وتُدمج مع تقنيات التوجيه في القسم التالي بحسب المهمة والنموذج المستخدم.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label">Exam tip</p><p>Expect questions that show a prompt fragment and ask which component it is. Quick test: who or how (role), background (context), the verb (instruction), the material analysed (input data), a limit (constraint), the shape of the answer (output format).</p></aside>

<section class="gx-lab" data-lab="HO-2.1.1"><header class="gx-lab-head"><span class="gx-lab-title">Demo · Spot the Six Components</span><span class="gx-lab-meta">HO-2.1.1 · H0</span></header><div class="gx-lab-body"><p><strong>Goal:</strong> read a structured prompt and name the role, context, instruction, input data, constraints and output format.</p><pre class="gx-lab-prompt"><code>Role: Functional test analyst.
Context: "Taallam" e-learning platform, new account sign-up on the web.
Instruction: Identify test conditions and any statements that are not testable.
Input data: Email is required and unique; password is 12–64 characters;
            on success the account is created.
Constraints: Do not infer an MFA policy or complexity rules that are not stated.
             Put anything missing as an open question.
Output format: Table with ID | Source | Test condition | Note or question.</code></pre><p class="gx-lab-subhead">Expected teaching result</p><p>Conditions for an empty email, a duplicate email, the password length boundaries, and confirming the account is created. “Is an activation email sent?” stays an open question, not a confirmed acceptance criterion.</p><p>For comparison, try the short prompt <em>“Write sign-up tests”</em> and notice how loosely its output follows the source text.</p></div></section>
