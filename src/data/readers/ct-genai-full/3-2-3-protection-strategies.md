---
order: 7
slug: "3-2-3"
chapter: 3
group: "3.2"
section: "3.2.3"
title: "Mitigation Strategies to Protect Data Privacy and Enhance Security in Testing with Generative AI"
titleAr: "استراتيجيات حماية الخصوصية وتعزيز الأمن في الاختبار بالذكاء التوليدي"
objectives: "GenAI-3.2.3 · K2 / HO-3.2.3 · H0"
minutes: 10
lo:
  GenAI-3.2.3: "Summarise strategies that protect privacy and improve security when testing with GenAI."
  HO-3.2.3: "Recognise privacy and security risks in a given GenAI testing case study."
takeaways:
  - "Send only what the task needs, and anonymise or mask sensitive data first."
  - "Secure transfer and storage, control access, set clear policies and train people."
  - "Review outputs, especially generated code, before running anything."
  - "Pick the deployment by sensitivity, and run regular audits and vulnerability assessments."
terms:
  - en: "Data Minimization"
    ar: "تقليل البيانات"
    def: "Sending only the data a task actually needs."
  - en: "Anonymization"
    ar: "إخفاء الهوية"
    def: "Processing data so it can no longer be linked to a person."
  - en: "Pseudonymization"
    ar: "الترميز المستعار"
    def: "Replacing identifiers with codes that can still be linked back using extra information, so it is weaker than anonymization."
---
### الحماية خطوة بخطوة — Protection Strategies

- **تقليل البيانات وإخفاء الهوية:** أرسل فقط ما يلزم للمهمة، وأخفِ أو أزل البيانات الشخصية من بيانات الاختبار والمتطلبات وتقارير العيوب قبل معالجتها. **Anonymization** يمنع ربط البيانات بالشخص، أما **Pseudonymization** فيستبدل المعرّفات مع بقاء إمكانية إعادة الربط.
- **تأمين النقل والتخزين:** تشفير، وواجهات API آمنة، وإتاحة البيانات الضرورية فقط للنموذج.
- **ضوابط الوصول:** صلاحيات حسب الدور، واستخدام مقصور على المصرّح لهم، ومتابعة الاستخدام.
- **السياسات والامتثال والتوعية:** سياسات واضحة لاستخدام البيانات متوافقة مع الأنظمة المنطبقة، وتدريب الفريق على الاستخدام المسؤول.
- **مراجعة المخرجات:** فحص الشيفرة والسكربتات المولّدة بحثًا عن أبواب خلفية أو أوامر غير مقصودة أو تسريب بيانات. وإن قارنت بنماذج إضافية، تذكّر أن إرسال البيانات إلى مزود ثانٍ يحتاج صلاحية هو الآخر.
- **اختيار البيئة:** حسب مستوى السرية: عرض تجاري بضمانات مناسبة، أو سحابة آمنة، أو تشغيل داخل المؤسسة. كلمة «داخلي» لا تعفي من تأمين الصلاحيات والتحديثات.
- **تدقيق دوري:** مراجعات أمنية وتقييم ثغرات منتظم، ومتابعة الممارسات المستجدة، بمشاركة فرق الأمن والقانون والإدارة التقنية.

### ربط الاستراتيجيات بالمخاطر — Mapping Strategies to Risks

| Risk | الاستراتيجية الأنسب |
|---|---|
| كشف بيانات حساسة | تقليل البيانات وإخفاء الهوية قبل الإرسال |
| فقد السيطرة على استخدام البيانات | اختيار بيئة مناسبة ومراجعة سياسات المزود |
| مخاطر الامتثال | سياسات واضحة ومراجعة قانونية ومتابعة الامتثال |
| وصول غير مصرّح | ضوابط الوصول والتشفير ومراقبة الاستخدام |
| مدخلات خبيثة أو تلاعب | فحص المدخلات واعتبار النص المضمّن بيانات لا تعليمات |
| شيفرة ضارة | مراجعة الشيفرة المولّدة وتشغيلها في بيئة معزولة |
| ثغرات غير معروفة | تدقيق أمني دوري وتقييم ثغرات |

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Calling data anonymous after replacing names with numbers while a table still maps numbers to people. That is pseudonymization: the link can be restored, so protect the mapping and question whether the data is needed at all.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label">Exam tip</p><p>Expect “which strategy fits this risk?” questions. The strongest first step is usually not sending sensitive data at all: minimise, anonymise or mask it before it reaches the tool.</p></aside>

<section class="gx-lab" data-lab="HO-3.2.3"><header class="gx-lab-head"><span class="gx-lab-title">Case Study · Spot the Risks</span><span class="gx-lab-meta">HO-3.2.3 · H0</span></header><div class="gx-lab-body"><p><strong>Case:</strong> a tester wants a summary of a failure report. The report contains a customer's email and a session token. The tool keeps chat history. The suggested script connects to a service the test does not need.</p><table><thead><tr><th>Observation</th><th>Risk</th><th>Suitable action</th></tr></thead><tbody><tr><td>Customer email</td><td>Identity exposed with no need</td><td>Replace with suitable training data</td></tr><tr><td>Session token</td><td>Access leak</td><td>Remove it and handle the exposure per security policy</td></tr><tr><td>Chat retention</td><td>Loss of control over the data lifecycle</td><td>Check the tool policy; configure retention and access</td></tr><tr><td>External call in the script</td><td>Data leak or unwanted behaviour</td><td>Reject it and review the code before any run</td></tr></tbody></table><p>Also consider who can read the chat, what the infrastructure logs, and how usage is monitored. Start by checking the input, the environment and the permissions, not by sending the data first and fixing later.</p></div></section>
