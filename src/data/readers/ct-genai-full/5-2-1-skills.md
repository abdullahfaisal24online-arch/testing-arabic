---
order: 5
slug: "5-2-1"
chapter: 5
group: "5.2"
section: "5.2.1"
title: "Essential Skills and Knowledge for Testing with Generative AI"
titleAr: "المهارات والمعرفة الأساسية للاختبار بالذكاء التوليدي"
objectives: "GenAI-5.2.1 · K2"
minutes: 11
lo:
  GenAI-5.2.1: "Explain the essential skills and knowledge for testing with GenAI."
loAr:
  GenAI-5.2.1: "شرح المهارات والمعارف الأساسية للاختبار باستخدام الذكاء التوليدي."
takeaways:
  - "Prompt engineering, understanding the context window, and reviewing generated testware."
  - "Domain and test-technique knowledge stay essential: good phrasing cannot replace knowing the right answer."
  - "Data sharing implications, data sanitization and privacy-preserving prompts."
  - "Right-sizing models for cost and energy, and knowing when to reject an output."
  - "Key competencies: assessing LLM capabilities, refining prompts and evaluating AI-generated testware, backed by knowledge of GenAI risks and their mitigations."
takeawaysAr:
  - "هندسة الـ prompts، وفهم نافذة السياق، ومراجعة أدوات الاختبار (testware) المولَّدة."
  - "معرفة المجال وتقنيات الاختبار تبقى أساسية: الصياغة الجيدة لا تغني عن معرفة الإجابة الصحيحة."
  - "تبعات مشاركة البيانات، وتنقيح البيانات، وكتابة prompts تحافظ على الخصوصية."
  - "اختيار حجم النموذج المناسب للكلفة والطاقة، ومعرفة متى ترفض المخرَج."
  - "الكفاءات الأساسية: تقييم قدرات النماذج، وتحسين التوجيهات، وتقييم الـ testware المولَّد، مدعومة بمعرفة مخاطر GenAI وطرق تخفيفها."
terms:
  - en: "Data Sanitization"
    ar: "تنقيح البيانات"
    def: "Removing or masking personal and confidential information before data is shared with a GenAI tool."
    defAr: "إزالة المعلومات الشخصية والسرية أو إخفاؤها قبل مشاركة البيانات مع أداة ذكاء توليدي."
---
يقول المنهج إن التطبيق الناجح لـ GenAI في مؤسسة اختبار يتطلب **نهجًا منظمًا لإدارة التغيير (change management)**، ومن جوانبه الأساسية **بناء مهارات GenAI الأساسية** و**تطوير أدوار الاختبار التقليدية** لتناسب عمليات اختبار مدعومة بالذكاء الاصطناعي. والتحول يشمل **المهارات التقنية والجوانب التنظيمية** معًا: من يوجّه الأداة، ومن يراجع، ومن يقرر، وكيف يتعلم الفريق ويحسّن العملية مع الوقت.

يبدأ هذا القسم بالمهارات: ما الذي يجب أن يعرفه مختبِر في فريق تطبيق التوصيل ليعمل مع GenAI بفعالية، لا ليكتفي باستخدامه؟

### 1. المهارات الأساسية الثلاث — Three Core Skills

يقول المنهج إن الدمج الناجح يتطلب ثلاث مهارات:

- **إتقان تقنيات هندسة التوجيه (prompt engineering):** أي بناء التوجيه بمكوّناته واختيار التقنية المناسبة (الفصل الثاني). مثال: معرفة أن تحويل 15 قصة إلى Gherkin بصيغة موحّدة يحتاج أمثلة داخل التوجيه.
- **فهم نوافذ السياق (context windows) للنماذج:** لأن ما لا يدخل النافذة لا يراه النموذج. مثال: لصق مواصفة الدفع كاملة مع سجلات طويلة قد يتجاوز النافذة، فيتجاهل النموذج قاعدة مهمة دون أن ينبّهك.
- **تطوير أساليب مراجعة الاختبار (test review methods):** طريقة منظّمة لفحص ما يولّده النموذج، كقائمة تحقق تقارن الحالات المولّدة بأساس الاختبار. مثال: يراجع المختبِر كل مجموعة حالات مولّدة بثلاثة أسئلة ثابتة: هل كل حالة مرتبطة بمعيار قبول؟ هل النتائج المتوقعة صحيحة؟ هل غُطّيت الحدود والحالات السلبية؟

### 2. خبرة المجال والاختبار مع مهارات AI — Domain and Test Expertise Plus AI Skills

يجب أن **يجمع المختبِرون خبرة المجال والاختبار مع مهارات AI** ليقيّموا الاختبار المدعوم بالنماذج اللغوية، ويذكر المنهج ثلاث مهام:

- **توليد حالات الاختبار:** لن تعرف أن الحالات ناقصة إلا إذا عرفت أن حد التوصيل المجاني 20.00 يُفحص قبل خصم الكوبون.
- **تحليل تقارير الـ defects:** لتحكم على تصنيف النموذج لتقرير ما، يجب أن تعرف أن الإلغاء غير ممكن بعد حالة Out for delivery.
- **توليد بيانات الاختبار:** بيانات بطاقات وعناوين معقولة الشكل لا تكفي؛ يجب أن تغطي طرق الدفع الثلاث وحدود عدد الوجبات 1 و20.

قد يبدو أن GenAI يقلل الحاجة لمعرفة تقنيات الاختبار، والعكس هو الصحيح. المختبِر الذي لا يعرف تحليل القيم الحدّية لن يلاحظ أن النموذج نسي الحد الأعلى.

### 3. الكفاءات الأساسية — Key Competencies

يذكر المنهج ثلاث كفاءات:

- **تقييم قدرات النموذج:** معرفة ما يجيده النموذج وما لا يجيده لمهمة معينة، كأن يكون جيدًا في الصياغة وضعيفًا في الحساب.
- **فهم تقنيات تحسين التوجيه (prompt refinement):** تعديل التوجيه بشكل منهجي بناءً على النتائج (القسم 2.3.2)، بدل إعادة المحاولة عشوائيًا. مثال: إذا تكرر نسيان حالات الإلغاء، يضيف المختبِر إلى التوجيه قائمة حالات الطلب صراحة، ثم يقيس هل تحسّن الناتج.
- **تقييم الـ testware المولَّد بالذكاء الاصطناعي:** الحكم على صحته وتغطيته وملاءمته قبل استخدامه.

### 4. معرفة المخاطر وطرق تخفيفها — Risks and Mitigations

من **المعرفة الأساسية** فهم **المخاطر الكامنة في GenAI**، مثل الـ hallucination وأخطاء الاستدلال والتحيّز والسلوك غير الحتمي (الفصل الثالث)، مع **الوعي بطرق التخفيف الشائعة**. مثال: المختبِر الذي يعرف أن النموذج قد يخترع حالة طلب غير موجودة سيقارن كل حالة مولّدة بقائمة الحالات المعتمدة.

### 5. أمن البيانات والخصوصية — Data Security and Privacy

يجب أن يفهم المختبِرون **تبعات مشاركة الـ testware مع النماذج اللغوية على أمن البيانات**، وأن يطبّقوا **تنقيح البيانات (Data Sanitization)** بشكل صحيح، أي **إزالة المعلومات الحساسة أو الشخصية أو السرية أو إخفاؤها**، وأن يتبعوا **ممارسات هندسة توجيه تحافظ على خصوصية البيانات**. مثال: قبل إرسال سجل فشل الدفع، يستبدل المختبِر اسم العميل ورقم هاتفه وعنوانه بقيم وهمية، ويكتب التوجيه بحيث لا يطلب أي بيانات حقيقية.

### 6. الاعتبارات البيئية — Environmental Considerations

تشمل الاعتبارات البيئية **تحسين اختيار النموذج وأنماط استخدامه لتقليل الحمل الحسابي**، و**اختيار نماذج بالحجم المناسب لمهام الاختبار**، و**الموازنة بين فوائد الأتمتة بـ GenAI وأثرها على الكلفة واستهلاك الطاقة** (انظر القسم 3.3.1). مثال: تصنيف تقارير الـ defects لا يحتاج أكبر نموذج متاح؛ ونموذج أصغر يكفي ويستهلك أقل، وتشغيل التحليل مرة في اليوم بدل كل commit يوفّر كثيرًا دون خسارة تُذكر.

### ملخص — Summary

| Area | What the tester needs |
|---|---|
| Core skills | Prompt engineering, context windows, test review methods |
| Expertise | Domain and test knowledge to evaluate generated test cases, defect analysis, test data |
| Competencies | Assess LLM capabilities, refine prompts, evaluate AI-generated testware |
| Risk knowledge | GenAI risks and common mitigations |
| Data security | Sharing implications, data sanitization, privacy-preserving prompting |
| Environment | Right-sized models, efficient usage, cost and energy balance |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice · A combined skill</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي · مهارة مركّبة</span></p><p class="gx-en" lang="en" dir="ltr">The model produces a delivery app test case that accepts an order of 21 meals, but the story says 1–20. The tester needs to read the source, know the boundaries, check traceability and fix the prompt. If the inputs also contain real customer names, phones or addresses, they need to sanitise them and question whether the tool is suitable.</p><p class="gx-ar" lang="ar" dir="rtl">يُنتج النموذج حالة اختبار لتطبيق التوصيل تقبل طلبًا من 21 وجبة، بينما القصة تقول 1–20. يحتاج المختبِر أن يقرأ المصدر، ويعرف القيم الحدّية، ويتحقق من التتبّع، ويصلح التوجيه. وإن احتوت المدخلات أيضًا على أسماء عملاء حقيقيين أو هواتفهم أو عناوينهم، فعليه تنقيحها والتساؤل عن ملاءمة الأداة.</p></aside>

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">Know when to reject an output or ask for missing information, instead of passing it on because it looks tidy.</p><p class="gx-ar" lang="ar" dir="rtl">اعرف متى ترفض المخرَج أو تطلب المعلومات الناقصة، بدل تمريره لأنه يبدو مرتّبًا.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Skills span prompting and context management, domain and test-technique knowledge, evaluating model capabilities and testware, understanding risks, data sanitization and privacy-preserving prompting, and right-sizing models for cost and energy.</p><p class="gx-ar" lang="ar" dir="rtl">تشمل المهارات: كتابة التوجيهات وإدارة السياق، ومعرفة المجال وتقنيات الاختبار، وتقييم قدرات النماذج والـ testware، وفهم المخاطر، وتنقيح البيانات وكتابة توجيهات تحافظ على الخصوصية، واختيار حجم النموذج المناسب للكلفة والطاقة.</p></aside>
