---
order: 2
slug: "3-1-2"
chapter: 3
group: "3.1"
section: "3.1.2"
title: "Identify Hallucinations, Reasoning Errors and Biases in LLM Output"
titleAr: "كشف الهلوسة وأخطاء الاستدلال والتحيز في مخرجات النماذج"
objectives: "GenAI-3.1.2 · K3 / HO-3.1.2a · H1 / HO-3.1.2b · H1"
minutes: 12
lo:
  GenAI-3.1.2: "Identify hallucinations, reasoning errors and biases in LLM output."
  HO-3.1.2a: "Experiment with hallucinations when using GenAI for testing."
  HO-3.1.2b: "Experiment with reasoning errors when using GenAI for testing."
loAr:
  GenAI-3.1.2: "تحدد الهلوسة وأخطاء الاستدلال والتحيز في ناتج النماذج اللغوية."
  HO-3.1.2a: "تجرّب الهلوسة عند استخدام GenAI في الاختبار."
  HO-3.1.2b: "تجرّب أخطاء الاستدلال عند استخدام GenAI في الاختبار."
takeaways:
  - "Hallucinations: cross-verify against sources, consult domain experts, check consistency."
  - "Reasoning errors: validate the logic, and test the output by actually running it."
  - "Biases: review fairness and representation against the test strategy, and look for under-represented test types."
  - "The estimated risk decides which detection methods you actually use."
takeawaysAr:
  - "الهلوسة: تحقّق متقاطع مع المصادر، واستشر خبراء المجال، وافحص الاتساق."
  - "أخطاء الاستدلال: تحقّق من المنطق، واختبر الناتج بتشغيله فعلًا."
  - "التحيز: راجع العدالة والتمثيل مقابل استراتيجية الاختبار، وابحث عن أنواع اختبار ضعيفة التمثيل."
  - "مستوى الخطر المقدّر هو ما يحدد طرق الكشف التي تستخدمها فعلًا."
terms:
  - en: "Cross-verification"
    ar: "التحقق المتقاطع"
    def: "Comparing generated output with documentation, requirements and known system behaviour to flag discrepancies."
    defAr: "مقارنة الناتج المولّد بالوثائق والمتطلبات والسلوك المعروف للنظام لإظهار الاختلافات."
---
### كشف الهلوسة — Detecting Hallucinations

- **Cross-verification:** مقارنة الناتج بالوثائق والمتطلبات والسلوك المعروف للنظام، ويمكن أتمتة جزء من المقارنة مع مصادر بيانات موثوقة لإظهار الاختلافات.
- **استشارة خبير المجال:** للتحقق من صحة المحتوى والتقاط تفاصيل دقيقة قد تفوت الأدوات.
- **فحص الاتساق:** التأكد أن المخرجات متسقة داخليًا ومتوافقة مع المعلومات المعروفة.

مثال: يولّد النموذج 20 حالة لصفحة التسجيل. تطابق كل حالة مع قائمة المتطلبات بمعرّفاتها؛ حالتان تتحققان من «إرسال رمز SMS» لا يوجد له متطلب. هذه هلوسة كشفتها المقارنة المتقاطعة. وحالة ثالثة تقول إن الحد الأدنى لكلمة المرور 8 بينما المتطلب 12؛ هذه كشفها فحص الاتساق مع المعلومات المعروفة.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating repetition as proof. A claim that appears in several answers is not true just because it repeats.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار التكرار دليلًا. المعلومة التي تظهر في عدة إجابات ليست صحيحة لمجرد أنها تتكرر.</p></aside>

### كشف أخطاء الاستدلال — Detecting Reasoning Errors

- **التحقق المنطقي:** مراجعة تسلسل المنطق واتساقه وترابطه وترتيب الخطوات. الأدوات تساعد، لكن الحالات المعقّدة تحتاج حكمًا بشريًا.
- **اختبار الناتج:** تنفيذ الحالات أو السكربتات المولّدة على موضوع الاختبار والتحقق من صحة النتائج، آليًا كليًا أو جزئيًا بحسب نوع المادة.

مثال: يقترح النموذج ترتيب تنفيذ يضع حالة «إصدار الشهادة» أولًا لأنها الأعلى أولوية. التحقق المنطقي يكشف أن هذه الحالة تعتمد على «إكمال الدورة»، فالترتيب غير قابل للتنفيذ. ومثال آخر: يولّد النموذج سكربتًا يبدو سليمًا، لكن تشغيله على البيئة الفعلية يفشل لأنه يستخدم دالة غير موجودة في الإطار؛ هذا ما يكشفه اختبار الناتج.

### كشف التحيز — Detecting Biases

- **مراجعة العدالة والتمثيل:** مقارنة مواد الاختبار المولّدة، مثل البيانات التركيبية، باستراتيجية الاختبار. هل أغفل النموذج العربية و RTL؟ هل ركّز على المسار الناجح فقط؟
- **تقييم تغطية أنواع الاختبار:** البحث عن فئات ضعيفة التمثيل، مثل الاختبارات غير الوظيفية كالأداء وقابلية الوصول.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A model produced 100 test cases, all for English-language accounts on one browser. Start with the coverage strategy: if the product supports Arabic and several browsers, this is a gap caused by biased representation, even if each case is correct on its own. Count is not diversity.</p><p class="gx-ar" lang="ar" dir="rtl">نموذج أنتج 100 حالة اختبار، كلها لحسابات باللغة الإنجليزية وعلى متصفح واحد. ابدأ باستراتيجية التغطية: إذا كان المنتج يدعم العربية وعدة متصفحات، فهذه فجوة سببها تمثيل متحيز، حتى لو كانت كل حالة صحيحة بمفردها. العدد ليس تنوّعًا.</p></aside>

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">How deep you check depends on the estimated risk of hallucinations, reasoning errors or biases for that task. A brainstorm of test ideas needs a lighter review than expected results for a payment calculation.</p><p class="gx-ar" lang="ar" dir="rtl">عمق الفحص يعتمد على الخطر المقدّر للهلوسة أو أخطاء الاستدلال أو التحيز في تلك المهمة. عصف أفكار لحالات الاختبار يحتاج مراجعة أخف من النتائج المتوقعة لعملية حساب دفع.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">GenAI-3.1.2 is K3 (in v1.1 the verb is “Identify”). Map the method to the problem: cross-verification, domain experts and consistency checks for hallucinations; logical validation and executing the output for reasoning errors; fairness and representation review and test-type coverage for biases.</p><p class="gx-ar" lang="ar" dir="rtl">الهدف GenAI-3.1.2 من مستوى K3 (وفي v1.1 الفعل «Identify»). طابق الطريقة مع المشكلة: التحقق المتقاطع وخبراء المجال وفحص الاتساق للهلوسة؛ التحقق المنطقي وتشغيل الناتج لأخطاء الاستدلال؛ مراجعة العدالة والتمثيل وتغطية أنواع الاختبار للتحيز.</p></aside>

<section class="gx-lab" data-lab="HO-3.1.2a"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Experiment · Provoke a Hallucination</span><span class="gx-ar" lang="ar" dir="rtl">تجربة · استدرج هلوسة</span></span><span class="gx-lab-meta">HO-3.1.2a · H1</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Given rules:</strong> email is required and unique; password is 12–64 characters.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>القواعد المعطاة:</strong> البريد إلزامي وفريد؛ كلمة المرور من 12 إلى 64 محرفًا.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Give the same rules to at least two LLMs and ask for acceptance criteria with no extra constraint.</span><span class="gx-ar" lang="ar" dir="rtl">أعطِ القواعد نفسها لنموذجين على الأقل، واطلب معايير قبول دون أي قيد إضافي.</span></li><li><span class="gx-en" lang="en" dir="ltr">Repeat with: <em>“Use only the text provided, and mark anything missing as a question.”</em></span><span class="gx-ar" lang="ar" dir="rtl">أعد التجربة مع: <em>«استخدم النص المعطى فقط، وضع أي شيء ناقص كسؤال.»</em></span></li><li><span class="gx-en" lang="en" dir="ltr">Record every criterion that has no source, and compare across runs and models.</span><span class="gx-ar" lang="ar" dir="rtl">سجّل كل معيار ليس له مصدر، وقارن بين التشغيلات والنماذج.</span></li></ol><p><span class="gx-en" lang="en" dir="ltr">Additions such as “a phone number is required” or “the account locks after three attempts” are unsupported. Record what your models actually produced; do not assume a given model produces these.</span><span class="gx-ar" lang="ar" dir="rtl">إضافات مثل «يلزم رقم هاتف» أو «يُقفل الحساب بعد ثلاث محاولات» غير مسنودة. سجّل ما أنتجته نماذجك فعلًا؛ ولا تفترض أن نموذجًا معيّنًا ينتج هذه الإضافات.</span></p></div></section>

يقترح المنهج لهذه التجربة مسائل من تخطيط الاختبار، مثل **تقدير جهد الاختبار** و**ترتيب أولوية الحالات**، بمدخلات معقّدة بما يكفي لإظهار حدود النماذج، ثم مقارنة الناتج بالنتيجة الصحيحة. المثال التالي من نوع ترتيب التنفيذ والزمن.

<section class="gx-lab" data-lab="HO-3.1.2b"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Experiment · Expose a Reasoning Error</span><span class="gx-ar" lang="ar" dir="rtl">تجربة · اكشف خطأ استدلال</span></span><span class="gx-lab-meta">HO-3.1.2b · H1</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Given:</strong> two runners. A takes 2 min. B takes 3 min and needs A. C takes 4 min and needs B. D takes 1 min and is independent.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>المعطيات:</strong> منفّذان. A يستغرق دقيقتين. B يستغرق 3 دقائق ويحتاج A. C يستغرق 4 دقائق ويحتاج B. D يستغرق دقيقة وهو مستقل.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Ask an LLM, an SLM and a reasoning model for the minimum total time.</span><span class="gx-ar" lang="ar" dir="rtl">اطلب من LLM وSLM ونموذج استدلالي الحد الأدنى للزمن الكلي.</span></li><li><span class="gx-en" lang="en" dir="ltr">Change the prompt to ask for a start/end table with dependencies, and compare.</span><span class="gx-ar" lang="ar" dir="rtl">غيّر التوجيه ليطلب جدولًا بأوقات البداية والنهاية مع الاعتماديات، وقارن.</span></li><li><span class="gx-en" lang="en" dir="ltr">Change the durations and repeat, so you are not measuring recall of one example.</span><span class="gx-ar" lang="ar" dir="rtl">غيّر المدد وأعد التجربة، حتى لا تقيس حفظ مثال واحد.</span></li></ol><details class="gx-lab-answer"><summary>Reference answer · <span class="gx-ar-inline" lang="ar" dir="rtl">الإجابة المرجعية</span></summary><p><span class="gx-en" lang="en" dir="ltr">The minimum is 9 minutes: A → B → C is a chain of 9, and D runs on the second runner during A. Dividing the 10-minute total by two runners to get 5 is a reasoning error that ignores the dependencies.</span><span class="gx-ar" lang="ar" dir="rtl">الحد الأدنى 9 دقائق: A ← B ← C سلسلة طولها 9، وD يعمل على المنفّذ الثاني أثناء A. قسمة المجموع (10 دقائق) على منفّذين للحصول على 5 خطأ استدلال يتجاهل الاعتماديات.</span></p></details></div></section>
