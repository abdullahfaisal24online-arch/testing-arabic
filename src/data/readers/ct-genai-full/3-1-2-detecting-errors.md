---
order: 2
slug: "3-1-2"
chapter: 3
group: "3.1"
section: "3.1.2"
title: "Identify Hallucinations, Reasoning Errors and Biases in LLM Output"
titleAr: "كشف الهلوسة وأخطاء الاستدلال والتحيز في مخرجات النماذج"
objectives: "GenAI-3.1.2 · K3 / HO-3.1.2a · H1 / HO-3.1.2b · H1"
minutes: 8
lo:
  GenAI-3.1.2: "Identify hallucinations, reasoning errors and biases in LLM output."
  HO-3.1.2a: "Experiment with hallucinations when using GenAI for testing."
  HO-3.1.2b: "Experiment with reasoning errors when using GenAI for testing."
takeaways:
  - "Hallucinations: cross-verify against sources, consult domain experts, check consistency."
  - "Reasoning errors: validate the logic, and test the output by actually running it."
  - "Biases: review fairness and representation against the test strategy, and look for under-represented test types."
  - "The estimated risk decides which detection methods you actually use."
terms:
  - en: "Cross-verification"
    ar: "التحقق المتقاطع"
    def: "Comparing generated output with documentation, requirements and known system behaviour to flag discrepancies."
---
### كشف الهلوسة — Detecting Hallucinations

- **Cross-verification:** مقارنة الناتج بالوثائق والمتطلبات والسلوك المعروف للنظام، ويمكن أتمتة جزء من المقارنة مع مصادر بيانات موثوقة لإظهار الاختلافات.
- **استشارة خبير المجال:** للتحقق من صحة المحتوى والتقاط تفاصيل دقيقة قد تفوت الأدوات.
- **فحص الاتساق:** التأكد أن المخرجات متسقة داخليًا ومتوافقة مع المعلومات المعروفة.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Treating repetition as proof. A claim that appears in several answers is not true just because it repeats.</p></aside>

### كشف أخطاء الاستدلال — Detecting Reasoning Errors

- **التحقق المنطقي:** مراجعة تسلسل المنطق واتساقه وترابطه وترتيب الخطوات. الأدوات تساعد، لكن الحالات المعقّدة تحتاج حكمًا بشريًا.
- **اختبار الناتج:** تنفيذ الحالات أو السكربتات المولّدة على موضوع الاختبار والتحقق من صحة النتائج، آليًا كليًا أو جزئيًا بحسب نوع المادة.

### كشف التحيز — Detecting Biases

- **مراجعة العدالة والتمثيل:** مقارنة مواد الاختبار المولّدة، مثل البيانات التركيبية، باستراتيجية الاختبار. هل أغفل النموذج العربية وRTL؟ هل ركّز على المسار الناجح فقط؟
- **تقييم تغطية أنواع الاختبار:** البحث عن فئات ضعيفة التمثيل، مثل الاختبارات غير الوظيفية كالأداء وقابلية الوصول.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label">In practice</p><p>A model produced 100 test cases, all for English-language accounts on one browser. Start with the coverage strategy: if the product supports Arabic and several browsers, this is a gap caused by biased representation, even if each case is correct on its own. Count is not diversity.</p></aside>

<section class="gx-lab" data-lab="HO-3.1.2a"><header class="gx-lab-head"><span class="gx-lab-title">Experiment · Provoke a Hallucination</span><span class="gx-lab-meta">HO-3.1.2a · H1</span></header><div class="gx-lab-body"><p><strong>Given rules:</strong> email is required and unique; password is 12–64 characters.</p><ol class="gx-lab-steps"><li>Give the same rules to at least two LLMs and ask for acceptance criteria with no extra constraint.</li><li>Repeat with: <em>“Use only the text provided, and mark anything missing as a question.”</em></li><li>Record every criterion that has no source, and compare across runs and models.</li></ol><p>Additions such as “a phone number is required” or “the account locks after three attempts” are unsupported. Record what your models actually produced; do not assume a given model produces these.</p></div></section>

<section class="gx-lab" data-lab="HO-3.1.2b"><header class="gx-lab-head"><span class="gx-lab-title">Experiment · Expose a Reasoning Error</span><span class="gx-lab-meta">HO-3.1.2b · H1</span></header><div class="gx-lab-body"><p><strong>Given:</strong> two runners. A takes 2 min. B takes 3 min and needs A. C takes 4 min and needs B. D takes 1 min and is independent.</p><ol class="gx-lab-steps"><li>Ask an LLM, an SLM and a reasoning model for the minimum total time.</li><li>Change the prompt to ask for a start/end table with dependencies, and compare.</li><li>Change the durations and repeat, so you are not measuring recall of one example.</li></ol><details class="gx-lab-answer"><summary>Reference answer</summary><p>The minimum is 9 minutes: A → B → C is a chain of 9, and D runs on the second runner during A. Dividing the 10-minute total by two runners to get 5 is a reasoning error that ignores the dependencies.</p></details></div></section>
