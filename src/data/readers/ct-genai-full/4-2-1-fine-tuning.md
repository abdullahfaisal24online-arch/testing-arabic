---
order: 4
slug: "4-2-1"
chapter: 4
group: "4.2"
section: "4.2.1"
title: "Fine-Tuning LLMs for Test Tasks"
titleAr: "الضبط الدقيق للنماذج لمهام الاختبار"
objectives: "GenAI-4.2.1 · K2 / HO-4.2.1 · H0"
minutes: 15
lo:
  GenAI-4.2.1: "Explain how fine-tuning adapts a model to specialised test tasks."
  HO-4.2.1: "Observe the steps of fine-tuning a model for a test task."
loAr:
  GenAI-4.2.1: "شرح كيف يكيّف الضبط الدقيق النموذج لمهام اختبار متخصصة."
  HO-4.2.1: "مشاهدة خطوات الضبط الدقيق لنموذج على مهمة اختبار."
takeaways:
  - "Fine-tuning is extra training of a pre-trained model on task- or domain-specific data; it applies to LLMs and SLMs."
  - "Main challenges: biased or wrong data, overfitting, opacity and heavy compute."
  - "Evaluate on data that was not used for training."
  - "RAG supplies updatable context at request time; fine-tuning changes behaviour, style or vocabulary. They can be combined."
  - "Training on the organisation's own user stories and test cases aligns the output with its test process and terminology."
  - "A fine-tuned SLM can reach high performance on a specific task without the compute overhead of an LLM."
takeawaysAr:
  - "الضبط الدقيق تدريب إضافي لنموذج مُدرَّب مسبقًا على بيانات خاصة بمهمة أو مجال؛ وينطبق على النماذج الكبيرة والصغيرة."
  - "أبرز التحديات: بيانات متحيّزة أو خاطئة، والإفراط في التخصيص، والغموض، والحوسبة الثقيلة."
  - "قيّم على بيانات لم تُستخدم في التدريب."
  - "RAG يوفّر سياقًا قابلًا للتحديث لحظة الطلب؛ والضبط الدقيق يغيّر السلوك أو الأسلوب أو المفردات. ويمكن الجمع بينهما."
  - "التدريب على قصص المستخدم وحالات الاختبار الخاصة بالمؤسسة يجعل المخرجات متوافقة مع عملية الاختبار فيها ومصطلحاتها."
  - "النموذج الصغير المضبوط قد يبلغ أداءً عاليًا في مهمة محددة دون عبء الحوسبة الذي يتطلبه النموذج الكبير."
terms:
  - en: "Fine-tuning"
    ar: "الضبط الدقيق"
    def: "Extra training of a pre-trained model on targeted data so it handles a task, format or domain better."
    defAr: "تدريب إضافي لنموذج مُدرَّب مسبقًا على بيانات موجّهة ليتعامل أفضل مع مهمة أو صيغة أو مجال."
  - en: "Overfitting"
    ar: "فرط التخصيص"
    def: "Performing well on training data but poorly on new data."
    defAr: "أداء جيد على بيانات التدريب وضعيف على البيانات الجديدة."
  - en: "Opacity"
    ar: "الغموض"
    def: "Difficulty explaining or correcting why a model produces a given output."
    defAr: "صعوبة تفسير أو تصحيح سبب إنتاج النموذج لمخرَج معيّن."
---
يقدّم المنهج في هذا الجزء **ممارستين أساسيتين لتشغيل بنية اختبار مدعومة بالنماذج اللغوية فعليًا (operationalizing)**: **الضبط الدقيق (Fine-tuning)** للنماذج، و**إدارة خط التشغيل عبر LLMOps** (القسم التالي 4.2.2). يبدأ هذا القسم بالأولى.

الفكرة ببساطة: النموذج العام يعرف «حالات الاختبار» بشكل عام، لكنه لا يعرف **قالب فريقك** ولا **مصطلحات مجالك**. الضبط الدقيق يعطيه تدريبًا إضافيًا على أمثلة من عالمك. ويهم ذلك المختبِر لأنه غالبًا من يملك هذه الأمثلة (حالات الاختبار المعتمدة)، ومن يحكم على جودتها، ومن سيقيّم هل صار النموذج المضبوط أفضل فعلًا.

### ما هو الضبط الدقيق؟ — What Fine-tuning Is

يعرّف المنهج **الضبط الدقيق** بأنه تكييف **نموذج لغوي مُدرَّب مسبقًا (pre-trained Language Model)**، سواء كان **LLM** أو **نموذجًا لغويًا صغيرًا (SLM)** كما في القسم 1.1.2، ليؤدي **مهام محددة** أو ليتلاءم مع **مجال معيّن (domain)**. ولنفصّل التعريف:

- **«مُدرَّب مسبقًا»**: لا نبني نموذجًا من الصفر، بل نبني فوق نموذج يفهم اللغة أصلًا.
- **«تدريب إضافي على مجموعة بيانات موجّهة (targeted dataset)»**: هذه هي الآلية. نعطي النموذج أمثلة مختارة تمثّل المهمة أو المجال، فيصبح التغيير **داخل النموذج نفسه**، لا في التوجيه.
- **«يتعلّم المعرفة الخاصة بالمجال ودقائقه (nuances)»**: لا الكلمات فقط، بل الفروق الدقيقة، مثل طريقة صياغة الشرط المسبق في فريقكم.
- **النتيجة**: يتحسّن أداء النموذج في **التطبيقات المتخصصة**، فيصبح **أدق وأكثر صلة** بحالة الاستخدام المقصودة.

### ماذا يضيف عمليًا؟ — What It Adds in Practice

يذكر المنهج أن الضبط الدقيق مناسب لأمرين:

1. **تزويد النموذج العام بقدرات استدلال متخصصة (specialized reasoning abilities)** في مجال معيّن. مثلًا، في تطبيق التوصيل: أن «يفهم» النموذج أن حد التوصيل المجاني يُفحص على قيمة الطلب **قبل** خصم الكوبون، فيستنتج النتيجة المتوقعة الصحيحة لطلب قيمته 22.00 دينارًا مع كوبون 5.00 (يبقى التوصيل مجانيًا).
2. **تبنّي مفردات خاصة بذلك المجال (vocabulary)**. في البنوك أو الطيران أو الأجهزة الطبية مصطلحات لا يستخدمها النموذج العام بدقة، وفي فريقك أيضًا كلمات لها معنى محدد، مثل حالات الطلب Placed وAccepted وOut for delivery.

### نموذج كبير أم صغير؟ — LLMs and SLMs

يمكن تطبيق الضبط الدقيق على **النماذج الصغيرة (SLMs)** أيضًا، وهي **أقل استهلاكًا للموارد**. ويقول المنهج إن ضبط نموذج صغير قد يحقق **مستويات أداء عالية في مهام محددة دون عبء الحوسبة نفسه** الذي تتطلبه النماذج الكبيرة. فالمهمة الضيقة لا تحتاج كل المعرفة العامة في النموذج الكبير؛ يكفيها نموذج أصغر تدرّب عليها جيدًا. والخلاصة التي يبرزها المنهج هي **المرونة والكفاءة**: تختار LLM أو SLM حسب **متطلبات المهمة**. وعمليًا، يُثبت ذلك بالقياس على مهمتك.

### مثال المنهج: حالات اختبار بقالب المؤسسة — The Syllabus Example

يعطي المنهج مثالًا من الاختبار: ضبط LLM أو SLM ليولّد **حالات اختبار من قصص المستخدم بصيغة مخرجات خاصة بسياق المؤسسة**. يُدرَّب النموذج على **قصص المستخدم الخاصة بالمؤسسة وحالات الاختبار المقابلة لها**، فيتوافق مع **عملية الاختبار الخاصة بها ومصطلحاتها**.

في تطبيق التوصيل، قالب الفريق يتضمن: معرّف الحالة، والقصة المرتبطة، والشروط المسبقة، والخطوات، وبيانات الاختبار بالدينار، والنتيجة المتوقعة، والمنصة (iOS أو Android). يجمع الفريق أزواجًا من «قصة ← حالات اختبار معتمدة» من sprints سابقة ويدرّب عليها، فيكتب النموذج الحالات الجديدة بالقالب نفسه دون شرحه في كل توجيه.

### متى يستحق الضبط الدقيق؟ — When It Is Worth It

عمليًا، وهذه نصيحة من خارج نص المنهج: الضبط الدقيق مكلف ويحتاج بيانات جيدة وخبرة، فلا تبدأ به. جرّب أولًا التوجيه الجيد، ثم الأمثلة (Few-shot)، ثم RAG. فإن بقيت المشكلة في **سلوك** النموذج نفسه، كأن لا يلتزم بقالبك المعقّد رغم الأمثلة، فقد يستحق الضبط الدقيق.

### التحديات — Challenges

يذكر المنهج أربعة تحديات لضبط نموذج GenAI للاختبار:

| Challenge | Effect | Check |
|---|---|---|
| Biased or inaccurate data | Unreliable output becomes built in | Review data quality and coverage |
| Overfitting | Good on training data, poor on new data | Evaluate on unseen user stories |
| Opacity | Hard to debug and validate | Trace inputs, outputs and measurements |
| Heavy compute (LLMs) | Time, cost, complex operation | Compare benefit with cost and a simpler option |

**1. البيانات المتحيّزة أو غير الدقيقة.** يطلب المنهج **تجنّب النتائج المتحيّزة أو غير الدقيقة** باستخدام **بيانات تدريب عالية الجودة وخاصة بالمهمة**. السبب أن النموذج يتعلّم ما تعطيه بالضبط: إن كانت حالات الاختبار القديمة تغطي الدفع بالبطاقة كثيرًا والدفع النقدي نادرًا، فسيولّد النموذج حالات تهمل النقد. وإن كانت تحتوي نتائج متوقعة خاطئة، فسيكررها بثقة.

**2. فرط التخصيص (Overfitting).** يعرّفه المنهج بأن **النموذج يصبح متخصصًا أكثر من اللازم في بيانات التدريب**، فيضعف أداؤه على **بيانات جديدة لم يرها**. والهدف هو **الحفاظ على قدرة التعميم (generalization)** عبر سيناريوهات مختلفة. مثال: نموذج تدرّب كثيرًا على حالات الكوبونات يعيد إنتاج خطوات الكوبون حتى في قصة جديدة عن جدولة الطلب لوقت لاحق. لهذا تُحجز قصص للتقييم لا تدخل التدريب أبدًا.

**3. الغموض (Opacity).** يعرّفه المنهج بأنه **غياب الشفافية في كيفية اتخاذ النموذج لقراراته أو إنتاجه لمخرجاته**، وهذا **يعقّد تصحيح الأخطاء (debugging) والتحقق (validation)**. إذا كتب النموذج المضبوط أن طلبًا قيمته 18.00 دينارًا توصيله مجاني، فلا يمكنك أن تفتح النموذج لترى أي مثال تدريبي سبّب ذلك. عمليًا، يعوّض الفريق ذلك بمجموعات تقييم ثابتة وسجل للمدخلات والمخرجات ومقارنة بين إصدارات النموذج.

**4. موارد الحوسبة الكبيرة.** يذكر المنهج أن عملية الضبط تتطلب **موارد حوسبة كبيرة (للنماذج الكبيرة)**: معالجات متخصصة ووقت تدريب وكلفة، وهذا أحد أسباب جاذبية ضبط النماذج الصغيرة.

### RAG أم Fine-tuning؟ — RAG or Fine-tuning?

كما في القسم 4.1.2، RAG يوفّر وثائق وسياقًا قابلين للتحديث وقت الطلب، وFine-tuning يكيّف سلوك المهمة أو النمط أو المصطلحات بالتدريب. ويمكن دمجهما: نموذج مكيّف لقالب المؤسسة يسترجع أحدث معايير القبول. لا تضمن أيٌّ منهما غياب الأخطاء، ويجب تقييم النظام كاملًا.

### لا تخلط بين — Don't Confuse

| | Few-shot prompting | RAG | Fine-tuning |
|---|---|---|---|
| Where the change lives | In the prompt | In the context, at request time | Inside the model (extra training) |
| Updating knowledge | Edit the examples | Re-index the documents | Train again |
| Best for | Format for one request | Current, changing documents | Stable behaviour, style, vocabulary |
| Main cost | Longer prompts | Retrieval infrastructure | Data preparation and compute |

### العرض التوضيحي — The Demonstration (HO-4.2.1)

الهدف العملي هنا من مستوى **H0**: أن **تشاهد** مثالًا لا أن تنفّذه. يسير العرض كما يصفه المنهج: **اختيار LLM أو SLM مناسب**، ثم عرض **مجموعة بيانات مصمّمة للمهمة**، ثم عرض **حل نموذجي لعملية الضبط** (مثل إطار عمل للتعلّم الآلي)، وأخيرًا **إرسال توجيه إلى النموذج المضبوط ومناقشة جودة الناتج**. ويركّز المنهج خصوصًا على **جودة بيانات التدريب**.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app testers collected 600 past test cases to fine-tune a small model on their template. A review found that about 80 of them still expected a delivery fee of 1.00 JOD, the old rule, and that cash payment appeared in very few cases. They corrected or removed those cases and added cash and wallet examples before training. Fine-tuning would have learned the old fee and the gap as if they were the team's standard.</p><p class="gx-ar" lang="ar" dir="rtl">جمع مختبرو تطبيق التوصيل 600 حالة اختبار سابقة لضبط نموذج صغير على قالبهم. فكشفت المراجعة أن نحو 80 حالة منها ما زالت تتوقع رسوم توصيل 1.00 دينار، وهي القاعدة القديمة، وأن الدفع النقدي يظهر في حالات قليلة جدًا. فصحّحوا تلك الحالات أو حذفوها، وأضافوا أمثلة للدفع النقدي والمحفظة الرقمية قبل التدريب. لولا ذلك لتعلّم الضبط الدقيق الرسوم القديمة وهذه الفجوة كأنهما معيار الفريق.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the four challenges: biased or poor-quality data, overfitting, opacity, and high compute cost. And the key contrast: RAG adds current context at request time; fine-tuning changes the model's behaviour through extra training.</p><p class="gx-ar" lang="ar" dir="rtl">اعرف التحديات الأربعة: بيانات متحيّزة أو رديئة الجودة، والإفراط في التخصيص، والغموض، وكلفة الحوسبة العالية. والمقارنة الأساسية: RAG يضيف سياقًا حديثًا لحظة الطلب؛ والضبط الدقيق يغيّر سلوك النموذج بتدريب إضافي.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Putting weak answers in the training data and expecting training to fix them. Fine-tuning learns what you give it, including the mistakes.</p><p class="gx-ar" lang="ar" dir="rtl">وضع إجابات ضعيفة في بيانات التدريب وتوقّع أن يصلحها التدريب. الضبط الدقيق يتعلّم ما تعطيه، بما في ذلك الأخطاء.</p></aside>

<section class="gx-lab" data-lab="HO-4.2.1"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Demo · Fine-tuning Steps</span><span class="gx-ar" lang="ar" dir="rtl">عرض توضيحي · خطوات الضبط الدقيق</span></span><span class="gx-lab-meta">HO-4.2.1 · H0</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Task:</strong> output test cases in the internal template.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>المهمة:</strong> إخراج حالات اختبار وفق القالب الداخلي.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Choose a suitable model and check it supports fine-tuning.</span><span class="gx-ar" lang="ar" dir="rtl">اختر نموذجًا مناسبًا وتأكد أنه يدعم الضبط الدقيق.</span></li><li><span class="gx-en" lang="en" dir="ltr">Prepare reviewed story–test-case pairs, with sensitive data removed, and hold back an evaluation set that is not used for training.</span><span class="gx-ar" lang="ar" dir="rtl">جهّز أزواجًا مُراجَعة من القصص وحالات الاختبار، بعد إزالة البيانات الحساسة، واحجز مجموعة تقييم لا تُستخدم في التدريب.</span></li><li><span class="gx-en" lang="en" dir="ltr">Run the training step in a suitable framework.</span><span class="gx-ar" lang="ar" dir="rtl">نفّذ خطوة التدريب في إطار عمل مناسب.</span></li><li><span class="gx-en" lang="en" dir="ltr">Send a new story to the tuned model and compare template, correctness and coverage with the baseline.</span><span class="gx-ar" lang="ar" dir="rtl">أرسل قصة جديدة للنموذج المضبوط وقارن القالب والصحة والتغطية مع النموذج الأساسي.</span></li></ol><p><span class="gx-en" lang="en" dir="ltr">This is a teaching sequence; no real training run or measured improvement is claimed. Discuss data quality and generalisation, not just whether the model repeats a training example.</span><span class="gx-ar" lang="ar" dir="rtl">هذا تسلسل تعليمي؛ لا يُدّعى تنفيذ تدريب حقيقي ولا قياس تحسّن فعلي. ناقش جودة البيانات وقدرة النموذج على التعميم، لا مجرد تكراره لمثال من التدريب.</span></p></div></section>
