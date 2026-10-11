---
order: 3
slug: "3-1-3"
chapter: 3
group: "3.1"
section: "3.1.3"
title: "Mitigation Techniques of GenAI Hallucinations, Reasoning Errors and Biases in Software Test Tasks"
titleAr: "تقنيات تخفيف الهلوسة وأخطاء الاستدلال والتحيز في مهام الاختبار"
objectives: "GenAI-3.1.3 · K2"
minutes: 16
lo:
  GenAI-3.1.3: "Summarise how to reduce hallucinations, reasoning errors and biases in test tasks."
loAr:
  GenAI-3.1.3: "تلخّص طرق تقليل الهلوسة وأخطاء الاستدلال والتحيز في مهام الاختبار."
takeaways:
  - "Five techniques: complete context, splitting the task, clear data formats, a model suited to the task, and comparing models."
  - "RAG and fine-tuning are complementary techniques, covered in Chapter 4."
  - "None of them removes the need to evaluate the output; scale the review to the risk."
  - "The problems are more likely with poorly designed prompts or missing context, so mitigation starts with the input."
takeawaysAr:
  - "خمس تقنيات: سياق كامل، وتقسيم المهمة، وصيغ بيانات واضحة، ونموذج مناسب للمهمة، ومقارنة النماذج."
  - "RAG والضبط الدقيق تقنيتان مكمّلتان، يتناولهما الفصل الرابع."
  - "لا تلغي أيٌّ منها الحاجة لتقييم الناتج؛ اجعل المراجعة بقدر الخطر."
  - "تزداد المشكلات مع التوجيهات سيئة التصميم أو السياق الناقص، لذلك يبدأ التخفيف من المدخلات."
---
في القسم 3.1.2 تعلّمت كيف **تكتشف** الهلوسة وأخطاء الاستدلال والتحيز بعد ظهورها. هذا القسم يتناول الجهة الأخرى: كيف **تقلّل احتمال ظهورها** من الأساس. الكشف وحده مكلف، لأن كل خلل يمر إلى الناتج يحتاج وقت مراجعة وإعادة توليد. أما التخفيف فيعمل قبل التوليد وأثناءه.

يبدأ المنهج بملاحظة مهمة: هذه المشكلات **أكثر احتمالًا عندما لا تكون التوجيهات مصمّمة جيدًا** (انظر الفصل الثاني)، **أو عندما تنقص البيانات السياقية ذات الصلة** بمهمة الاختبار. أي أن جزءًا كبيرًا من أخطاء النموذج يعود إلى ما أعطيناه نحن. لذلك لا يكفي أن تكتب في التوجيه «كن دقيقًا»؛ المطلوب ضوابط فعلية في طريقة بناء الطلب.

يذكر المنهج **خمس تقنيات رئيسية**:

| Technique | What you do | Main effect | Limit to remember |
|---|---|---|---|
| Provide complete context | Put all relevant information in the prompt (see 2.1.1) | Fewer gaps for the model to fill with guesses | Dumping a whole repository adds noise |
| Divide prompts into manageable segments | Prompt chaining, verifying each output before the next (see 2.1.2) | Reasoning errors caught early | A chain without review can amplify errors |
| Use clear, interpretable data formats | Structured, straightforward formats; avoid ambiguous ones | Model focuses on the essentials | A neat format does not prove correct data |
| Select the appropriate model | An LLM specifically trained for the task (see 5.1.3) | Fewer task-specific errors | Popularity is not suitability |
| Compare results across models | Run the prompt on several LLMs, when appropriate | Errors exposed; most reliable result selected | Agreement is not independent proof |

### السياق الكامل — Provide Complete Context

اجعل التوجيه **يحتوي كل المعلومات ذات الصلة** (انظر 2.1.1)، ليقدّم للنموذج سياقًا شاملًا يوجّهه نحو نتائج دقيقة.

**لماذا يقلل الخطر؟** النموذج لا يترك فراغًا فارغًا. إذا لم تذكر قاعدة، فسيملؤها بافتراض شائع من بيانات تدريبه، وهذا هو مصدر كثير من الهلوسات. **مثال:** إذا طلبت حالات اختبار لرسوم التوصيل دون ذكر أن حد التوصيل المجاني 20.00 ويُفحص قبل الخصم، فقد يفترض النموذج أنه يُفحص بعد الخصم، أو يخترع حدًا آخر. أما إذا وضعت القاعدة بنصها، مع الحد الأدنى للطلب 5.00 ورسوم 1.50، فالنموذج يبني عليها. عمليًا، السياق الكامل يعني **ذا الصلة**، لا كل شيء: لصق وثائق التطبيق كلها يضيف ضجيجًا قد يشتت النموذج.

### تقسيم التوجيه إلى أجزاء — Divide Prompts into Manageable Segments

قسّم التوجيهات المعقّدة إلى **خطوات أصغر** باستخدام **تسلسل التوجيهات (Prompt Chaining)** (انظر 2.1.2)، مع **التحقق المنهجي من كل ناتج قبل الانتقال إلى التالي**. ويقول المنهج إن هذا الأسلوب خطوة بخطوة **يساعد على كشف أخطاء الاستدلال مبكرًا** في عملية التوليد.

**لماذا يقلل الخطر؟** كل خطوة صغيرة أبسط على النموذج، والمراجعة بين الخطوات تمنع الخطأ من الانتقال. **مثال:** بدل طلب واحد «حوّل ملحمة الكوبونات إلى scripts»، يطلب المختبِر أولًا شروط الاختبار ويراجعها، ثم حالات الاختبار ويراجعها، ثم الـ scripts. خطأ في فهم قاعدة «كوبون واحد لكل طلب» يُكتشف في الخطوة الأولى، قبل أن يتكرر في عشرين حالة.

### صيغ بيانات واضحة — Use Clear, Interpretable Data Formats

**تجنّب الصيغ الغامضة** أو الصعبة على النموذج. ويوضح المنهج أن الصيغ **المنظّمة والمباشرة** تساعد النموذج على **التركيز على الجوهر** في المهمة.

**مثال:** متطلبات الدفع مكتوبة في فقرة طويلة تخلط القواعد بملاحظات الاجتماع، مقابل جدول بأعمدة واضحة: المعرّف، والقاعدة، والقيمة. في الحالة الثانية لا يضطر النموذج إلى تخمين أين تنتهي القاعدة وتبدأ الملاحظة. وكذلك لقطة شاشة لجدول أصعب في التفسير من الجدول نفسه نصًا.

### اختيار النموذج المناسب — Select the Appropriate Model

استخدم **نموذجًا مدرّبًا خصيصًا للمهمة** المطلوبة (انظر 5.1.3).

**لماذا؟** قدرات النماذج تختلف. مهمة تحتاج استدلالًا متعدد الخطوات، مثل ترتيب أولوية الحالات مع اعتماديات، قد يؤديها نموذج استدلالي أفضل من نموذج عام، ومهمة توليد شيفرة الاختبار قد يناسبها نموذج مدرّب على الشيفرة. اختيار النموذج يكون بحسب المهمة، لا بحسب شهرته.

### مقارنة النتائج بين النماذج — Compare Results Across Models

**عندما يكون ذلك مناسبًا**، قيّم التوجيه نفسه على **عدة نماذج** وقارن المخرجات، فهذا **يساعد على كشف الأخطاء** و**اختيار النتائج الأكثر موثوقية**.

**مثال:** يعطي نموذجان حالات لرسوم التوصيل؛ أحدهما يتوقع رسومًا لطلب 22.00 بعد الكوبون والآخر لا. الاختلاف علامة تستدعي الرجوع إلى المصدر. لكن الاتفاق ليس إثباتًا: قد يخطئ النموذجان بالطريقة نفسها لأنهما تعلّما من بيانات متشابهة. وعبارة «عندما يكون مناسبًا» مهمة: المقارنة تضاعف الكلفة، وإرسال البيانات إلى مزود ثانٍ قد يحتاج موافقة (انظر 3.2.3).

### تقنيات مكمّلة — RAG and Fine-Tuning

يشير المنهج إلى أن **الفصل الرابع** يقدّم تقنيتين **مكمّلتين** لتحسين نتائج النماذج: **التوليد المعزّز بالاسترجاع (Retrieval-Augmented Generation / RAG)**، الذي يجلب السياق ذا الصلة من مصادر الفريق تلقائيًا، و**الضبط الدقيق (Fine-Tuning)**، الذي يكيّف النموذج نفسه على بيانات المجال.

### لا تخلط بين — Don't Confuse

| | Mitigation (3.1.3) | Detection (3.1.2) |
|---|---|---|
| When | Before and during generation | After generation |
| Goal | Make problems less likely | Find the problems that still occur |
| Examples | Complete context, chaining, clear formats | Cross-verification, logical validation, output testing |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the five techniques: complete context, prompt chaining into manageable segments, clear and interpretable data formats, selecting a suitable model, and comparing results across models. RAG and fine-tuning are named as complementary techniques covered in Chapter 4.</p><p class="gx-ar" lang="ar" dir="rtl">اعرف التقنيات الخمس: سياق كامل، وتسلسل التوجيهات بأجزاء صغيرة، وصيغ بيانات واضحة سهلة التفسير، واختيار نموذج مناسب، ومقارنة النتائج بين النماذج. ويذكر المنهج RAG والضبط الدقيق كتقنيتين مكمّلتين يتناولهما الفصل الرابع.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">For the coupon epic, the delivery app testers start from the approved user stories with IDs, in a table. They ask for test conditions with the source ID of each one, and turn any line without a source into a question for the product owner. They approve the conditions before moving to design, then compare the coverage summary with the story list instead of trusting the model's claim that it “covered everything”.</p><p class="gx-ar" lang="ar" dir="rtl">في ملحمة الكوبونات، يبدأ مختبرو تطبيق التوصيل من قصص المستخدم المعتمدة بمعرّفاتها، في جدول. يطلبون شروط الاختبار مع معرّف مصدر كل منها، ويحوّلون أي سطر بلا مصدر إلى سؤال لمالك المنتج. ويعتمدون الشروط قبل الانتقال إلى التصميم، ثم يقارنون ملخص التغطية بقائمة القصص بدل الوثوق بقول النموذج إنه «غطى كل شيء».</p></aside>

لا تلغي أيٌّ من هذه التقنيات الحاجة إلى تقييم الناتج. عمليًا، يمكن أتمتة فحوص بنيوية، مثل وجود الأعمدة وعدم تكرار المعرّفات وصحة تنسيق البيانات، بينما تبقى صحة النتيجة المتوقعة محتاجة مراجعة بالمصدر. وتتدرّج شدة المراجعة مع خطورة استخدام الناتج.
