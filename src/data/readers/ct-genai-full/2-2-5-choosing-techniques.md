---
order: 8
slug: "2-2-5"
chapter: 2
group: "2.2"
section: "2.2.5"
title: "Choosing Prompting Techniques for Software Testing"
titleAr: "اختيار تقنية التوجيه المناسبة للاختبار"
objectives: "GenAI-2.2.5 · K3 / HO-2.2.5 · H1"
minutes: 18
lo:
  GenAI-2.2.5: "Choose suitable prompting techniques for a given testing task."
  HO-2.2.5: "Pick and justify the prompting technique that fits each given test task."
loAr:
  GenAI-2.2.5: "تختار تقنيات التوجيه المناسبة لمهمة اختبار معطاة."
  HO-2.2.5: "تختار تقنية التوجيه المناسبة لكل مهمة اختبار معطاة وتبرر اختيارك."
takeaways:
  - "Chaining for complex work that needs a check at each stage."
  - "Few-shot for repetitive output with a fixed format, such as Gherkin, keywords or report templates."
  - "Meta prompting for new or changing tasks where you do not yet have a good prompt."
  - "One task can combine all three; measure the result instead of assuming more techniques is better."
  - "Decide from the nature of the task: precision with a check at each step, a repeated fixed pattern, or a new task without a good prompt yet."
takeawaysAr:
  - "تسلسل التوجيهات للعمل المعقّد الذي يحتاج فحصًا في كل مرحلة."
  - "التوجيه بالأمثلة للمخرجات المتكررة بصيغة ثابتة، مثل Gherkin أو الكلمات المفتاحية أو قوالب التقارير."
  - "التوجيه الفوقي للمهام الجديدة أو المتغيّرة التي لا تملك لها توجيهًا جيدًا بعد."
  - "يمكن لمهمة واحدة أن تجمع الثلاث؛ قِس النتيجة بدل افتراض أن المزيد من التقنيات أفضل."
  - "قرّر من طبيعة المهمة: دقة مع فحص في كل خطوة، أو نمط ثابت متكرر، أو مهمة جديدة بلا توجيه جيد بعد."
---
لديك ثلاث تقنيات توجيه تعرّفت عليها في القسم 2.1.2: **تسلسل التوجيهات (Prompt Chaining)**، و**التوجيه بالأمثلة (Few-shot Prompting)**، و**التوجيه الفوقي (Meta Prompting)**. هذا القسم يجيب عن السؤال العملي الذي يليها مباشرة: **أيّها أستخدم لهذه المهمة بالذات؟**

الجواب لا يأتي من اسم النشاط. «تصميم الاختبار» قد يحتاج تقنية في مشروع وتقنية أخرى في مشروع آخر. ما يحدد الاختيار هو **طبيعة المهمة (characteristics of the test task)**: هل تحتاج دقة وتحققًا في كل خطوة؟ هل ناتجها متكرر بنمط ثابت؟ أم هي مهمة جديدة لا نعرف بعد كيف نصوغ طلبها؟ ولهذا الهدف مستوى **K3**: في الامتحان ستُعطى مهمة اختبار بوصف قصير، وعليك أن تختار التقنية المناسبة.

### جدول المنهج — The Syllabus Table

يلخّص المنهج ملاءمة كل تقنية في جدول واحد، وهو أهم ما في هذا القسم:

| Technique | Recommended use case | Key features and applications |
|---|---|---|
| Prompt chaining | Complex tasks requiring precision, with human verification at each step | Breaks tasks into smaller steps; useful for test analysis, test design and test automation, where each step is checked for functional correctness |
| Few-shot prompting | Repetitive tasks, or tasks with a specific or constrained output format | Gives the model examples for repetitive generation with a specific pattern: Gherkin-style (scenario-based) test cases, keyword-driven testing, test reporting with a fixed output format |
| Meta prompting | Flexible, dynamic tasks; crafting prompts for new tasks | A general description of the objective and the task guides the model to create the prompt; useful for complex tasks such as test report analysis and anomaly detection |

سنشرح كل صف: ما معناه، ولماذا تناسب التقنية هذا النوع من المهام، وكيف يبدو ذلك في تطبيق التوصيل.

### تسلسل التوجيهات: الدقة مع تحقق في كل خطوة — Prompt Chaining

**متى؟** عندما تكون المهمة **معقّدة** وتحتاج **دقة**، ويريد المختبِر **أن يتحقق بنفسه بعد كل خطوة**.

**لماذا تناسبها؟** في المهمة المعقّدة، الخطأ المبكر لا يبقى صغيرًا: افتراض خاطئ في التحليل يتحول إلى عشر حالات اختبار خاطئة، ثم إلى scripts أتمتة خاطئة. التوجيه الواحد الطويل يخفي هذه الأخطاء داخل ناتج يبدو كاملًا. أما التسلسل فيقسّم العمل إلى خطوات صغيرة، ويضع **نقطة تحقق بشرية** بين كل خطوة والتي تليها، فيُكتشف الخطأ حيث وقع، قبل أن ينتشر.

**أين يذكره المنهج؟** في **تحليل الاختبار وتصميمه وأتمتته**، حيث تُفحص كل خطوة من حيث **الصحة الوظيفية (functional correctness)**.

**مثال من تطبيق التوصيل:** ملحمة الكوبونات (نسبة مئوية أو مبلغ ثابت، كوبون واحد لكل طلب، تاريخ انتهاء):

1. التوجيه الأول: «استخرج من قصص المستخدم هذه شروط الاختبار، واذكر أي غموض أو تعارض». ← **يراجع المختبِر** الشروط، ويسأل مالك المنتج عن الغموض.
2. التوجيه الثاني: «من شروط الاختبار المعتمدة هذه، صمّم حالات اختبار باستخدام EP وBVA». ← **يراجع المختبِر** القيم الحدّية.
3. التوجيه الثالث: «حوّل الحالات المعتمدة إلى scripts بمكتبة الكلمات المفتاحية الموثّقة». ← **يراجع المختبِر** ويشغّل في بيئة الاختبار.

لاحظ أن مدخل كل توجيه هو **الناتج المعتمد** من الخطوة السابقة، لا الناتج الخام.

### التوجيه بالأمثلة: نمط ثابت يتكرر — Few-shot Prompting

**متى؟** عندما تكون المهمة **متكررة**، أو يجب أن يأتي الناتج **بصيغة محددة أو مقيّدة**.

**لماذا تناسبها؟** وصف الصيغة بالكلمات وحده لا يكفي غالبًا: «اكتب بأسلوب Gherkin» قد يعطيك عشرة أساليب مختلفة لعشر قصص. أما مثالان أو ثلاثة صحيحة فتُظهر للنموذج النمط بالضبط: الترتيب، وطول الخطوات، وطريقة كتابة البيانات. فيأتي الناتج **متّسقًا** ويسهل دمجه في الأدوات ومراجعته.

**أين يذكره المنهج؟** ثلاثة أمثلة: حالات اختبار بأسلوب **Gherkin** (المبنية على السيناريو)، و**الاختبار المقاد بالكلمات المفتاحية (keyword-driven testing)**، و**تقارير الاختبار** بصيغة مخرجات محددة.

**مثال من تطبيق التوصيل:** الفريق يحوّل 15 قصة مستخدم في كل sprint إلى سيناريوهات Gherkin لأداة الأتمتة. يضع المختبِر في التوجيه مثالين صحيحين ومختلفين (سيناريو ناجح: طلب 25.00 بتوصيل مجاني، وسيناريو رفض: طلب 4.00 تحت الحد الأدنى)، ثم يطلب تحويل القصص الجديدة **بنفس النمط**. اختيار أمثلة **متنوعة** مهم: لو كان المثالان كلاهما ناجحين، فقد ينسى النموذج سيناريوهات الرفض.

### التوجيه الفوقي: مهمة جديدة بلا توجيه جاهز — Meta Prompting

**متى؟** في المهام **المرنة والمتغيّرة (flexible, dynamic)**، وعند **صياغة توجيهات لمهام جديدة**.

**لماذا تناسبها؟** أحيانًا لا تعرف بعد كيف تكتب توجيهًا جيدًا لمهمة لم تجرّبها من قبل. بدل التخمين، تعطي النموذج **وصفًا عامًا للهدف والمهمة**، وتطلب منه أن **يقترح التوجيه نفسه**. ثم تراجع هذا التوجيه، وتعدّله، وتستخدمه. النموذج هنا يساعدك في التصميم، والقرار يبقى لك.

**أين يذكره المنهج؟** مفيد لكل أنواع المهام المعقّدة، مثل **تحليل تقارير الاختبار** و**اكتشاف الحالات الشاذة (anomaly detection)**.

**مثال من تطبيق التوصيل:** يريد الفريق لأول مرة تحليل سجلات (logs) تطبيق السائق لاكتشاف أنماط غريبة، مثل طلبات تبقى في حالة Out for delivery أكثر من ساعتين. لا يوجد توجيه جاهز لهذا. فيكتب المختبِر: «هدفي اكتشاف الحالات الشاذة في سجلات حالات الطلب. اقترح توجيهًا مفصّلًا لهذه المهمة، يحدد المدخلات والمعايير وصيغة الناتج». ثم يراجع التوجيه المقترح قبل تشغيله على السجلات.

### خطوات الاختيار — Step by Step

1. **صِف المهمة بجملة واحدة**: ما المدخل؟ وما الناتج المطلوب؟
2. **اسأل عن الدقة**: هل تتكون من مراحل يعتمد بعضها على بعض، والخطأ في أولاها يفسد ما بعدها؟ ← **Prompt chaining**.
3. **اسأل عن التكرار والصيغة**: هل الناتج نمط ثابت يتكرر، أو صيغة مقيّدة يجب الالتزام بها؟ ← **Few-shot**.
4. **اسأل عن الجِدّة**: هل المهمة جديدة أو متغيّرة، ولا تملك لها توجيهًا جيدًا؟ ← **Meta prompting**.
5. **إذا انطبق أكثر من سؤال، اجمع** التقنيات (انظر الدمج أدناه).
6. **حدّد كيف ستحكم على الناتج** قبل التشغيل، ثم قِس النتيجة.

### أمثلة محلولة — Worked Examples

| Test task | Key characteristic | Technique | Why |
|---|---|---|---|
| Analyse an unclear payment story, then derive test conditions and test cases | Several dependent steps; precision needed | Prompt chaining | Review ambiguities and conditions before cases are generated |
| Write 40 regression test cases in the team's fixed CSV template | Repetitive, fixed output format | Few-shot | Two or three correct rows show the exact pattern |
| Daily test summary for the release in the same report format | Repetitive, fixed format | Few-shot | One or two past reports as examples keep the format stable |
| First-time analysis of crash reports from the new driver app | New, dynamic task, no prompt yet | Meta prompting | The model drafts the prompt; the tester reviews it |
| Generate keyword-driven scripts from approved test cases | Constrained format (documented keywords only) | Few-shot (often inside a chain) | Examples fix the keyword pattern; a review step checks correctness |

**حالة خادعة 1:** «توليد حالات اختبار» لا يعني دائمًا Few-shot. إذا كانت المهمة تبدأ من متطلب غامض، فالأولوية للدقة والتحقق، أي **Prompt chaining**. وإذا كانت المتطلبات واضحة والمطلوب كمية كبيرة بصيغة موحّدة، فهي **Few-shot**. السؤال دائمًا عن طبيعة المهمة، لا عن اسمها.

**حالة خادعة 2:** «مهمة معقّدة» وحدها لا تكفي للاختيار، لأن المنهج يذكر المهام المعقّدة مع التسلسل ومع التوجيه الفوقي معًا. ابحث عن الكلمة المفتاحية الثانية في الوصف: «تحقق في كل خطوة» تشير إلى **التسلسل**، و«مهمة جديدة / لا نعرف كيف نصوغ الطلب» تشير إلى **التوجيه الفوقي**.

### الدمج — Combining Techniques

يقول المنهج إنه **يمكن حتى استخدام عدة تقنيات لحالة استخدام واحدة**، ويعطي مثالًا بترتيب محدد:

1. **Meta prompting** لإنشاء **توجيه أولي**.
2. هذا التوجيه المولَّد قد يحتوي **أمثلة يجب تكييفها وتحسينها** ← **Few-shot**.
3. وأخيرًا، قد يفيد **تقسيم المهمة إلى مهام فرعية أصغر** للتحقق من الخطوات الوسيطة ← **Prompt chaining**.

**في تطبيق التوصيل:** الفريق يبدأ اختبار ميزة جديدة، «جدولة الطلب لوقت لاحق». يطلب المختبِر من النموذج اقتراح توجيه لتصميم الاختبار (فوقي). يحتوي التوجيه المقترح مثالًا عامًا عن حجز موعد، فيستبدله المختبِر بمثالين من قواعد التطبيق الحقيقية: وقت في المستقبل يُقبل، ووقت في الماضي يُرفض (أمثلة). ثم يقسّم العمل إلى شروط، ثم حالات، ثم scripts، مع مراجعة بين كل خطوة (تسلسل).

الدمج ليس هدفًا بذاته: كل تقنية إضافية تزيد طول التوجيه ووقت المراجعة. أضف التقنية عندما تحل مشكلة حقيقية في المهمة، ثم **قِس الناتج** لتعرف هل تحسّن فعلًا.

### لا تخلط بين — Don't Confuse

| | Prompt chaining | Few-shot | Meta prompting |
|---|---|---|---|
| Signal in the task | Precision, verification at each step | Repetition, fixed or constrained format | New or changing task, no good prompt yet |
| Who writes the final prompt? | The tester, one prompt per step | The tester, with examples inside | The model drafts it; the tester reviews it |
| Typical syllabus examples | Test analysis, design, automation | Gherkin, keyword-driven, formatted reports | Test report analysis, anomaly detection |
| Main risk if misused | Slow for simple tasks | Copies mistakes in the examples | Unreviewed prompt used as is |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app testers first asked one long prompt to turn the coupon epic into test cases. The output looked complete, but it silently assumed the free-delivery limit is checked after the discount. When they split the work into three chained prompts, the review after step 1 caught the wrong assumption before a single test case was written.</p><p class="gx-ar" lang="ar" dir="rtl">طلب مختبرو تطبيق التوصيل في البداية، بتوجيه واحد طويل، تحويل ملحمة الكوبونات (epic) إلى حالات اختبار. بدا الناتج كاملًا، لكنه افترض بصمت أن حد التوصيل المجاني يُفحص بعد الخصم. وعندما قسّموا العمل إلى ثلاثة توجيهات متسلسلة، كشفت المراجعة بعد الخطوة الأولى هذا الافتراض الخاطئ قبل كتابة أي حالة اختبار.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming that combining more techniques automatically improves the result. Measure quality after combining them.</p><p class="gx-ar" lang="ar" dir="rtl">افتراض أن الجمع بين تقنيات أكثر يحسّن النتيجة تلقائيًا. قِس الجودة بعد الجمع.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">GenAI-2.2.5 is K3: you will get a task and must pick the technique. Chaining = complex, needs precision and verification per stage. Few-shot = repetitive, format-specific output (Gherkin, keywords, formatted reports). Meta = adaptive or new tasks where you need help creating the prompt.</p><p class="gx-ar" lang="ar" dir="rtl">الهدف GenAI-2.2.5 من مستوى K3: ستُعطى مهمة وعليك اختيار التقنية. التسلسل = مهمة معقّدة تحتاج دقة وتحققًا في كل مرحلة. الأمثلة = ناتج متكرر بصيغة محددة (Gherkin، كلمات مفتاحية، تقارير بقالب). الفوقي = مهام مرنة أو جديدة تحتاج فيها مساعدة لإنشاء التوجيه.</p></aside>

<section class="gx-lab" data-lab="HO-2.2.5"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Exercise · Pick the Technique</span><span class="gx-ar" lang="ar" dir="rtl">تمرين · اختر التقنية</span></span><span class="gx-lab-meta">HO-2.2.5 · H1</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> for each task, choose the technique (or mix), write a prompt, and note why you chose it and how you will judge the output.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> لكل مهمة، اختر التقنية (أو مزيجًا منها)، واكتب توجيهًا، ودوّن سبب اختيارك وكيف ستحكم على الناتج.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Review an ambiguous user story, then derive test cases from it.</span><span class="gx-ar" lang="ar" dir="rtl">مراجعة قصة مستخدم غامضة، ثم اشتقاق حالات اختبار منها.</span></li><li><span class="gx-en" lang="en" dir="ltr">Convert ten user stories into consistent Gherkin.</span><span class="gx-ar" lang="ar" dir="rtl">تحويل عشر قصص مستخدم إلى Gherkin بشكل موحّد.</span></li><li><span class="gx-en" lang="en" dir="ltr">Design a prompt that detects anomalies in a new team's test reports.</span><span class="gx-ar" lang="ar" dir="rtl">تصميم توجيه يكتشف الحالات الشاذة في تقارير اختبار فريق جديد.</span></li></ol><details class="gx-lab-answer"><summary>Suggested answer · <span class="gx-ar-inline" lang="ar" dir="rtl">الإجابة المقترحة</span></summary><p><span class="gx-en" lang="en" dir="ltr">1: chaining, with an ambiguity review before generation. 2: few-shot, with varied correct examples. 3: meta prompting to draft a suitable prompt; the analysis can then be split into steps and given examples.</span><span class="gx-ar" lang="ar" dir="rtl">الأولى: تسلسل توجيهات مع مراجعة الغموض قبل التوليد. الثانية: أمثلة صحيحة ومتنوعة. الثالثة: توجيه فوقي لصياغة توجيه مناسب؛ ثم يمكن تقسيم التحليل إلى خطوات وإعطاؤه أمثلة.</span></p></details></div></section>
