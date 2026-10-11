---
order: 2
slug: "5-1-2"
chapter: 5
group: "5.1"
section: "5.1.2"
title: "Key Aspects of a Generative AI Strategy in Software Testing"
titleAr: "عناصر استراتيجية الذكاء التوليدي في الاختبار"
objectives: "GenAI-5.1.2 · K2"
minutes: 11
lo:
  GenAI-5.1.2: "Summarise the key aspects of a GenAI strategy for testing."
loAr:
  GenAI-5.1.2: "تلخيص الجوانب الرئيسية لاستراتيجية الذكاء التوليدي في الاختبار."
takeaways:
  - "Start from measurable goals such as productivity, cycle time or quality."
  - "Fit the chosen model to the goal, the current infrastructure and scaling needs."
  - "Data quality, relevance and security come first."
  - "Add technical and ethical training, metrics for AI results, guidance on sensitive data and transparency, and review gates."
  - "Transparency means recording which testware was generated with GenAI, so reviewers know where to look closely."
takeawaysAr:
  - "ابدأ من أهداف قابلة للقياس مثل الإنتاجية أو زمن الدورة أو الجودة."
  - "لائم النموذج المختار مع الهدف والبنية التحتية الحالية واحتياجات التوسّع."
  - "جودة البيانات وملاءمتها وأمنها تأتي أولًا."
  - "أضف تدريبًا تقنيًا وأخلاقيًا، ومقاييس لنتائج الذكاء الاصطناعي، وإرشادات للبيانات الحساسة والشفافية، وبوابات مراجعة."
  - "الشفافية تعني تسجيل أي testware وُلِّد باستخدام GenAI، ليعرف المراجعون أين يدققون أكثر."
terms:
  - en: "Quality Gate"
    ar: "بوابة الجودة"
    def: "A defined checkpoint where generated testware must pass a review before it moves on, for example before it is added to the regression suite."
    defAr: "نقطة تحقق محددة يجب أن يجتاز فيها الـ testware المولَّد مراجعة قبل أن ينتقل، مثلًا قبل إضافته إلى مجموعة اختبارات الانحدار."
---
عندما بدأ فريق تطبيق التوصيل استخدام GenAI، كان كل مختبِر يجرّب بطريقته: أداة مختلفة، وتوجيهات مختلفة، ولا أحد يعرف هل تحسّن شيء فعلًا. هذا هو الوضع الذي تعالجه **استراتيجية GenAI في الاختبار**. يقول المنهج إن التطبيق الناجح لها يتطلب أن تراعي المؤسسة بعناية عدة عوامل أساسية، لضمان **دمج سلس ونتائج مثلى**. وفي هذا القسم سنشرح كل عامل: ما هو، ولماذا يلزم، وكيف يبدو في الفريق.

### 1. أهداف اختبار قابلة للقياس — Measurable Test Objectives

تبدأ الاستراتيجية **بتحديد أهداف اختبار قابلة للقياس لـ GenAI**. ويذكر المنهج ثلاثة أمثلة: **زيادة إنتاجية الاختبار**، و**تقصير دورات الاختبار**، و**تحسين جودة الاختبار**.

**لماذا قابلة للقياس؟** لأن هدفًا مثل «نريد الاستفادة من AI» لا يمكن الحكم عليه: لن تعرف متى نجحت ولا متى يجب أن تتوقف. أما الهدف المقيس فيحوّل الاستراتيجية إلى قرار يمكن مراجعته.

**مثال:** يحدد الفريق ثلاثة أهداف: تقليل زمن صياغة حالات الاختبار للقصة الواحدة إلى النصف (إنتاجية)، وإنهاء اختبار الانحدار قبل كل إصدار إلى المتاجر، أي كل 2 sprints، في يومين بدل أربعة (تقصير الدورة)، وتقليل الـ defects التي تُكتشف بعد الإصدار (جودة).

### 2. اختيار النموذج المناسب — Selecting the Right LLMs

يصف المنهج اختيار النموذج بأنه **حاسم** (والتفاصيل في القسم 5.1.3)، ويضع له ثلاثة شروط:

- أن يكون **متوافقًا مع أهداف الاختبار** السابقة: نموذج ممتاز في كتابة النصوص قد لا يخدم هدف توليد test scripts.
- أن يضمن **التوافق مع البنية التحتية الحالية للاختبار**: أداة لا تتكامل مع أداة إدارة الاختبار أو مع الـ CI pipeline ستُضيف عملًا يدويًا يلغي الفائدة.
- أن يلبّي **متطلبات قابلية التوسّع (scalability)**: ما ينجح مع مختبِرَين قد لا يتحمّل الاستخدام عندما يُشغَّل عند كل commit أو تنضم إليه فرق أخرى.

### 3. جودة البيانات — Data Quality

يقول المنهج إن جودة البيانات تؤدي **دورًا حاسمًا**، لأن فعالية الاختبار المدعوم بالنماذج اللغوية تعتمد على **بيانات إدخال دقيقة وذات صلة**، **محمية بإجراءات أمنية متينة**. لذلك فالحفاظ على جودة عالية لبيانات الإدخال هو **مفتاح الوصول إلى نتائج يمكن الوثوق بصحتها**.

**لماذا؟** النموذج لا يعرف قواعد تطبيقك إلا مما تعطيه. إذا كان المدخل قديمًا أو متناقضًا، فسيأتي الناتج خاطئًا بثقة. **مثال:** لو أعطى المختبِر النموذج نسخة قديمة من قصة المستخدم تقول إن التوصيل المجاني يُحسب بعد خصم الكوبون، فستأتي كل حالات الاختبار مبنية على قاعدة خاطئة، لأن القاعدة الحالية تفحص قيمة الطلب **قبل** الخصم. أما جانب الأمن فيعني أن هذه البيانات، كالسجلات التي فيها أرقام هواتف العملاء، تُحمى وتُنقّى قبل إرسالها.

### 4. برامج التدريب — Training Programs

يجب توفير **برامج تدريب شاملة** تضمن أن تمتلك فرق الاختبار **المهارات التقنية والأخلاقية** اللازمة لاستخدام أدوات GenAI بفعالية. التقنية تعني كتابة التوجيه وتقييم الناتج، والأخلاقية تعني مثلًا معرفة ما لا يجوز إرساله من بيانات، والانتباه إلى التحيّز في المخرجات. فالأداة الممتازة بيد فريق لا يعرف كتابة توجيه أو تقييم ناتج لن تعطي قيمة، وقد تعطي ضررًا.

### 5. مقاييس فعالية النتائج — Metrics for GenAI Results

إضافة إلى التدريب، يجب جمع **مقاييس محددة لقياس فعالية نتائج GenAI** (انظر القسم 2.3.1)، مثل Accuracy و Execution Success Rate و Time Efficiency. بدونها لا تعرف إن كان الاستثمار يحقق الأهداف التي وضعتها في البند الأول. عمليًا، قِس الجودة والوقت الكلي، لا الوقت الموفّر في التوليد فقط.

### 6. إرشادات العملية — Process Guidelines

لضمان **الامتثال للمعايير التنظيمية** و**الالتزام بالإرشادات الأخلاقية**، يجب أن تضع المؤسسة **إرشادات عملية لاستخدام GenAI**، ويذكر المنهج ثلاثة أمثلة لما تتضمنه:

- **قواعد استخدام البيانات الحساسة:** تحدد بوضوح ما الذي يُسمح بإرساله لأي أداة، فيقلّ الاجتهاد الفردي و Shadow AI. مثال: لا تُرسل بيانات عملاء حقيقية؛ تُستخدم بيانات اصطناعية أو مُخفاة.
- **التزامات الشفافية (transparency obligations):** مثل توضيح **ما الذي وُلِّد باستخدام GenAI**. مثال: كل حالة اختبار مولّدة تحمل وسمًا في أداة إدارة الاختبار، فيعرف المراجع أين يدقق أكثر.
- **بوابات الجودة (quality gates) مع مراجعة الـ testware المولَّد:** نقاط محددة يجب أن يراجع فيها إنسان قبل أن ينتقل الناتج. مثال: لا تدخل أي script مولّدة إلى مجموعة الانحدار قبل أن يراجعها مختبِر وتنجح في بيئة الاختبار.

### ملخص الاستراتيجية في الفريق — The Strategy at a Glance

| Aspect | Delivery app decision |
|---|---|
| Measurable objectives | Halve test case drafting time; regression in 2 days; fewer post-release defects |
| LLM selection | Fits the objectives, integrates with the CI pipeline and test tool, can scale |
| Data quality | Current, approved user stories; masked logs |
| Training | Technical and ethical skills for both testers |
| Metrics | Accuracy, execution success rate, time including review |
| Process guidelines | Sensitive data rules, GenAI label on generated testware, review gate before regression suite |

عمليًا، تضيف فرق كثيرة بندًا لا يذكره المنهج صراحة: خطة لما تفعله عند ضعف النتائج، أي متى تتوقف أو تعدّل، وليس فقط كيف تبدأ.

### لا تخلط بين — Don't Confuse

| | Test objective | Metric | Quality gate |
|---|---|---|---|
| Question it answers | What do we want GenAI to achieve? | Is it achieving it? | May this output move on? |
| Example | Shorter regression cycle | Time including review and fixes | Tester review before the regression suite |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Goal: cut the time to draft test cases while keeping an approved coverage standard and correct expected results. Measure review and fix time too, so the tool does not look productive while it simply moves work to the reviewer.</p><p class="gx-ar" lang="ar" dir="rtl">الهدف: تقليل زمن صياغة حالات الاختبار مع الحفاظ على معيار تغطية معتمد ونتائج متوقعة صحيحة. قِس زمن المراجعة والتصحيح أيضًا، كي لا تبدو الأداة منتِجة بينما هي فقط تنقل العمل إلى المراجِع.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">A strategy starts from measurable objectives and aligns model choice, infrastructure, data quality and security with them. Training, metrics, data guidelines, transparency and quality gates are all part of it.</p><p class="gx-ar" lang="ar" dir="rtl">تبدأ الاستراتيجية من أهداف قابلة للقياس، وتربط بها اختيار النموذج والبنية التحتية وجودة البيانات والأمن. والتدريب والمقاييس وإرشادات البيانات والشفافية وبوابات الجودة كلها جزء منها.</p></aside>
