---
order: 7
slug: "3-2-4"
chapter: 3
group: "3.2"
section: "3.2.4"
title: "Review Types"
titleAr: "أنواع المراجعات"
objectives: "FL-3.2.4 · K2"
minutes: 13
lo:
  FL-3.2.4: "Compare and contrast the different review types."
loAr:
  FL-3.2.4: "تقارن بين أنواع المراجعات المختلفة."
takeaways:
  - "The right formality depends on the SDLC, process maturity, the work product's criticality and complexity, legal or regulatory needs, and the need for an audit trail."
  - "Informal review: no defined process, no formal documented output; main objective is detecting anomalies."
  - "Walkthrough: led by the author; serves many objectives such as evaluating quality, educating reviewers, gaining consensus and detecting anomalies."
  - "Technical review: technically qualified reviewers, led by a moderator; aims at consensus and decisions on a technical problem, and also detects anomalies."
  - "Inspection: the most formal; follows the full process, aims at the maximum number of anomalies, collects metrics; the author cannot be review leader or scribe."
  - "The review type is also chosen by project needs, available resources, work product type and risks, business domain and company culture; the same work product can get an informal review first and a formal one later."
takeawaysAr:
  - "مستوى الرسمية المناسب يعتمد على دورة التطوير، ونضج العملية، وأهمية المُخرَج وتعقيده، والمتطلبات القانونية أو التنظيمية، والحاجة لسجل تدقيق."
  - "المراجعة غير الرسمية: بلا عملية محددة ولا مخرجات موثقة رسميًا؛ هدفها الرئيسي اكتشاف الحالات الشاذة."
  - "المراجعة بالتجوال: يقودها الكاتب؛ تخدم أهدافًا كثيرة مثل تقييم الجودة وتعليم المراجعين والتوافق واكتشاف الحالات الشاذة."
  - "المراجعة التقنية: مراجعون مؤهلون تقنيًا ويقودها منسّق؛ تهدف للتوافق واتخاذ قرارات في مشكلة تقنية، وتكتشف الحالات الشاذة أيضًا."
  - "التفتيش: الأكثر رسمية؛ يتّبع العملية كاملة، ويهدف لأكبر عدد من الحالات الشاذة، ويجمع مقاييس؛ ولا يجوز أن يكون الكاتب قائد المراجعة أو المدوّن."
  - "يُختار نوع المراجعة أيضًا حسب احتياجات المشروع، والموارد المتاحة، ونوع المُخرَج ومخاطره، ومجال العمل، وثقافة الشركة؛ ويمكن مراجعة المُخرَج نفسه بمراجعة غير رسمية أولًا ثم رسمية لاحقًا."
terms:
  - en: "Informal Review"
    ar: "المراجعة غير الرسمية"
    def: "A review that does not follow a defined process and does not require a formal documented output."
    defAr: "مراجعة لا تتبع عملية محددة ولا تتطلب مخرجات موثقة رسميًا."
  - en: "Walkthrough"
    ar: "المراجعة بالتجوال"
    def: "A review led by the author that can serve many objectives, such as evaluating quality, educating reviewers and detecting anomalies."
    defAr: "مراجعة يقودها الكاتب، تخدم أهدافًا كثيرة مثل تقييم الجودة وتعليم المراجعين واكتشاف الحالات الشاذة."
    match: ["Walkthrough", "walkthrough"]
  - en: "Technical Review"
    ar: "المراجعة التقنية"
    def: "A review by technically qualified reviewers, led by a moderator, to gain consensus and make decisions on a technical problem."
    defAr: "مراجعة يُجريها مراجعون مؤهلون تقنيًا ويقودها منسّق، للتوافق واتخاذ قرارات في مشكلة تقنية."
    match: ["Technical Review", "technical review"]
  - en: "Inspection"
    ar: "التفتيش"
    def: "The most formal review type, following the complete generic process, with the main objective of finding the maximum number of anomalies."
    defAr: "أكثر أنواع المراجعة رسمية، يتّبع العملية العامة كاملة، وهدفه الرئيسي اكتشاف أكبر عدد من الحالات الشاذة."
    match: ["Inspection", "inspection"]
  - en: "Formal Review"
    ar: "المراجعة الرسمية"
    def: "A review that follows a defined process with a formally documented output."
    defAr: "مراجعة تتبع عملية محددة ولها مخرجات موثقة رسميًا."
    match: ["Formal Review", "formal review", "formal reviews"]
---
ليست كل المراجعات متشابهة. هناك أنواع كثيرة تمتد من **المراجعات غير الرسمية (informal reviews)** إلى **المراجعات الرسمية (formal reviews)**. نظرة سريعة من زميل على Pull Request صغير مراجعة، وجلسة موثّقة بأدوار ومقاييس لمواصفات الدفع مراجعة أيضًا؛ الفرق في **مستوى الرسمية**، وفي **الهدف** الذي تخدمه كل منهما.

### ما الذي يحدد مستوى الرسمية؟ — Level of Formality

يعتمد مستوى الرسمية المطلوب على عوامل مثل:

- **دورة حياة التطوير المتّبعة (SDLC)**: فريق Scrum مثل فريق تطبيق التوصيل يميل إلى مراجعات خفيفة ومتكررة، بينما نموذج تسلسلي يميل إلى مراجعات رسمية عند نهاية كل مرحلة.
- **نضج عملية التطوير**: الفريق الناضج يستطيع تطبيق عملية رسمية وجمع مقاييسها والاستفادة منها.
- **أهمية المُخرَج وتعقيده (criticality and complexity)**: منطق خصم المبالغ من بطاقة الزبون أهم بكثير من نص شاشة «من نحن».
- **المتطلبات القانونية أو التنظيمية**: بعض المجالات تفرض مراجعات موثقة بحكم القانون أو اللوائح.
- **الحاجة إلى سجل تدقيق (audit trail)**: إذا احتجت لاحقًا أن تُثبت أن المراجعة حدثت ومن شارك فيها وماذا قرر، فأنت تحتاج مراجعة رسمية موثقة.

و**المُخرَج نفسه يمكن مراجعته بأنواع مختلفة**: مثلًا، مراجعة غير رسمية سريعة أولًا لمسودة مواصفات واجهة الدفع، ثم مراجعة أكثر رسمية لاحقًا للنسخة النهائية.

### اختيار النوع المناسب — Selecting the Review Type

**اختيار نوع المراجعة الصحيح عامل أساسي** لتحقيق أهداف المراجعة (انظر عوامل النجاح في 3.2.5). والاختيار لا يُبنى على **الأهداف** وحدها، بل أيضًا على **احتياجات المشروع**، و**الموارد المتاحة**، و**نوع المُخرَج ومخاطره**، و**مجال العمل (business domain)**، و**ثقافة الشركة**. فإذا كان الهدف تعليم مطوّر جديد كيف تعمل خدمة الخرائط، فالتجوال أنسب من التفتيش؛ وإذا كان الهدف أن لا يفلت أي defect من مواصفات الدفع، فالتفتيش أنسب.

<figure class="gx-figure" aria-label="Review types from least to most formal."><div class="gx-flow-row"><span class="gx-flow-node">Informal</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Walkthrough<small>author-led</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Technical review<small>moderator-led</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Inspection<small>most formal</small></span></div><figcaption>Review types from least to most formal.</figcaption></figure>

### المراجعة غير الرسمية — Informal Review

- **لا تتبع عملية محددة**، و**لا تتطلب مخرجات موثقة رسميًا**.
- **الهدف الرئيسي: اكتشاف الحالات الشاذة.**

مثال: مطوّر يطلب من زميله «ألقِ نظرة على هذا التعديل في حساب الرسوم قبل أن أدمجه». لا اجتماع، ولا أدوار، ولا تقرير؛ تعليقات سريعة فقط. ميزتها السرعة والتكلفة المنخفضة، وسلبيتها أنها تعتمد كليًا على انتباه الشخص الذي يراجع.

### المراجعة بالتجوال — Walkthrough

- **يقودها الكاتب (led by the author)**: هو من يشرح المُخرَج ويمشي بالمشاركين خلاله.
- تخدم **أهدافًا كثيرة**: تقييم الجودة وبناء الثقة في المُخرَج، و**تعليم المراجعين**، و**الوصول إلى توافق**، و**توليد أفكار جديدة**، و**تحفيز الكتّاب وتمكينهم من التحسّن**، واكتشاف الحالات الشاذة.
- قد يُجري المراجعون **مراجعة فردية قبل** التجوال، لكنها **ليست مطلوبة**.

مثال: مالك المنتج يعرض على الفريق كله تدفّق «تتبّع الطلب» الجديد خطوة بخطوة، من حالة Placed إلى Delivered، فيفهم الجميع الفكرة ويطرحون أسئلتهم. التعليم والتوافق هنا لا يقلّان أهمية عن اكتشاف الـ defects.

### المراجعة التقنية — Technical Review

- يُجريها **مراجعون مؤهلون تقنيًا**، و**يقودها منسّق (moderator)**.
- أهدافها: **التوافق واتخاذ القرارات بشأن مشكلة تقنية**، وأيضًا اكتشاف الحالات الشاذة، وتقييم الجودة وبناء الثقة في المُخرَج، وتوليد أفكار جديدة، وتحفيز الكتّاب وتمكينهم من التحسّن.

مثال: كيف نخزّن مواقع السائقين التي تصل كل خمس ثوانٍ؟ يجتمع ثلاثة مطوّرين ذوي خبرة ومهندس قاعدة البيانات، ويدير المنسّق النقاش حتى يصلوا إلى قرار تقني متفق عليه. لاحظ أن القيادة هنا للمنسّق لا للكاتب، وهذا أوضح ما يميز المراجعة التقنية عن التجوال، وأن المشاركين مختارون لخبرتهم التقنية لا لأنهم أصحاب مصلحة فقط.

### التفتيش — Inspection

- **أكثر أنواع المراجعة رسمية**، ولذلك يتّبع **عملية المراجعة العامة كاملة** (القسم 3.2.2).
- **الهدف الرئيسي: اكتشاف أكبر عدد ممكن من الحالات الشاذة.**
- أهداف أخرى: تقييم الجودة، وبناء الثقة في المُخرَج، وتحفيز الكتّاب وتمكينهم من التحسّن.
- **تُجمع المقاييس (metrics)** وتُستخدم لتحسين دورة التطوير، **بما في ذلك عملية التفتيش نفسها**.
- **لا يجوز أن يكون الكاتب قائد المراجعة أو المدوّن.**

لماذا القاعدة الأخيرة؟ لأن الكاتب الذي يقود المراجعة أو يدوّن نتائجها قد يوجّهها، دون قصد، بعيدًا عن نقاط ضعف عمله، أو يدوّن الملاحظات بصياغة تخففها. مثال: مواصفات تكامل بوابة الدفع تُفحص بالتفتيش، لأن أي defect فيها يمس أموال الزبائن.

### جدول المقارنة — Comparison

| | Informal review | Walkthrough | Technical review | Inspection |
| --- | --- | --- | --- | --- |
| Formality | Informal | — | — | Most formal |
| Process | No defined process | — | — | Complete generic process |
| Led by | — | Author | Moderator | Review leader (never the author) |
| Who reviews | — | — | Technically qualified reviewers | — |
| Main objective | Detect anomalies | Many objectives, incl. educating reviewers and gaining consensus | Consensus and decisions on a technical problem | Maximum number of anomalies |
| Also detects anomalies | (main objective) | Yes | Yes | (main objective) |
| Individual review beforehand | — | Possible, not required | — | Yes, part of the full process |
| Documented output | Not required | — | — | Yes, review results are reported |
| Metrics | — | — | — | Collected to improve the SDLC and the inspection process |
| Author as review leader or scribe | — | Author leads | — | Not allowed |

الشَّرطة (—) في الجدول تعني أن المنهج لا يحدد هذه الصفة لهذا النوع، فلا تبنِ عليها إجابة في الامتحان. ركّز على الخلايا المكتوبة، فهي «بصمة» كل نوع.

### لا تخلط بين — Don't Confuse

| Clue in the question | Review type |
| --- | --- |
| "Led by the author", "educating reviewers" | Walkthrough |
| "Moderator", "technically qualified", "technical decision" | Technical review |
| "Most formal", "metrics", "maximum number of anomalies" | Inspection |
| "No defined process", "no documented output" | Informal review |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Signatures to remember: "led by the author" → walkthrough. "Technically qualified reviewers, moderator, technical decision" → technical review. "Most formal, metrics, author cannot be leader or scribe" → inspection.</p><p class="gx-ar" lang="ar" dir="rtl">علامات للحفظ: «يقودها الكاتب» ← Walkthrough. «مراجعون مؤهلون تقنيًا، منسّق، قرار تقني» ← مراجعة تقنية. «الأكثر رسمية، مقاييس، الكاتب لا يكون قائدًا أو مدوّنًا» ← تفتيش.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming more formal is always better. The right type depends on the objectives and context; a quick informal review of a small change can be the right choice.</p><p class="gx-ar" lang="ar" dir="rtl">الافتراض بأن الأكثر رسمية دائمًا أفضل. النوع المناسب يعتمد على الأهداف والسياق؛ ومراجعة غير رسمية سريعة لتغيير صغير قد تكون الخيار الصحيح.</p></aside>
