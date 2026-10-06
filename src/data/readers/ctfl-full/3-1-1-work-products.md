---
order: 1
slug: "3-1-1"
chapter: 3
group: "3.1"
section: "3.1.1"
title: "Work Products Examinable by Static Testing"
titleAr: "مخرجات العمل القابلة للاختبار الساكن"
objectives: "FL-3.1.1 · K1"
minutes: 6
lo:
  FL-3.1.1: "Recognise the types of work products that static testing can examine."
loAr:
  FL-3.1.1: "تتعرّف على أنواع مخرجات العمل التي يمكن فحصها بالاختبار الساكن."
takeaways:
  - "Static testing examines work products without executing them, through manual reviews or tool-based static analysis."
  - "Almost any work product that can be read and understood can be reviewed: requirements, code, test plans, test cases, backlog items, charters, documentation, contracts and models."
  - "Static analysis needs a work product with a formal structure, such as code or models, or text checked for spelling, grammar and readability."
  - "Work products that are hard for people to interpret and should not be analysed by tools, such as third-party executable code for legal reasons, are not suitable."
takeawaysAr:
  - "الاختبار الساكن يفحص مخرجات العمل دون تشغيلها، إما بالمراجعة اليدوية أو بالتحليل الساكن بالأدوات."
  - "تقريبًا أي مُخرَج يمكن قراءته وفهمه قابل للمراجعة: المتطلبات، والشيفرة، وخطط الاختبار وحالاته، وعناصر القائمة، والمواثيق، والتوثيق، والعقود، والنماذج."
  - "التحليل الساكن يحتاج مُخرَجًا ذا بنية رسمية، مثل الشيفرة أو النماذج، أو نصًا يُفحص إملائيًا ونحويًا ومن حيث سهولة القراءة."
  - "المخرجات التي يصعب على الإنسان تفسيرها ولا يجوز تحليلها بالأدوات، مثل شيفرة تنفيذية لطرف ثالث لأسباب قانونية، غير مناسبة."
terms:
  - en: "Review"
    ar: "المراجعة"
    def: "A type of static testing in which people examine a work product to find defects or for other purposes such as reaching consensus."
    defAr: "نوع من الاختبار الساكن يفحص فيه الأشخاص مُخرَج عمل لاكتشاف الـ defects أو لأغراض أخرى مثل الوصول لتوافق."
    match: ["Review", "review", "reviews"]
---
في **الاختبار الساكن (Static Testing)** لا يحتاج موضوع الاختبار إلى التشغيل. يمكن أن يتم:

- **يدويًا** عبر **المراجعات (Reviews)**.
- **بالأدوات** عبر **التحليل الساكن (Static Analysis)**.

أهداف الاختبار الساكن تشمل تحسين الجودة، واكتشاف الـ defects، وتقييم خصائص مثل سهولة القراءة والاكتمال والصحة وقابلية الاختبار والاتساق. ويمكن استخدامه للتحقق (Verification) وللمصادقة (Validation).

المختبرون وممثلو العمل والمطوّرون يعملون معًا أثناء جلسات الاختبار بالأمثلة، وكتابة قصص المستخدم بشكل تعاوني، وجلسات تحسين قائمة المنتج، للتأكد من أن قصص المستخدم ومخرجاتها تحقق المعايير المحددة، مثل «تعريف الجاهزية» (Definition of Ready).

### ما الذي يمكن مراجعته؟ — What Can Be Reviewed

تقريبًا **أي مُخرَج عمل يمكن قراءته وفهمه** يمكن فحصه بالاختبار الساكن، مثلًا:

<figure class="gx-figure gx-spectrum" aria-label="Work products that can be examined by static testing."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Requirements</b><span>Specifications, user stories, acceptance criteria.</span></div><div class="gx-spectrum-item"><b>Source code</b><span>Reviewed by people, analysed by tools.</span></div><div class="gx-spectrum-item"><b>Test work products</b><span>Test plans, test cases, test charters.</span></div><div class="gx-spectrum-item"><b>Backlog items</b><span>Product backlog items and their details.</span></div><div class="gx-spectrum-item"><b>Documentation</b><span>Project documentation, contracts.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Models</b><span>Design and architecture models.</span></div></div><figcaption>Work products that can be examined by static testing.</figcaption></figure>

### ماذا عن التحليل الساكن؟ — What About Static Analysis?

**التحليل الساكن** يمكن تطبيقه بكفاءة على أي مُخرَج عمل له **بنية رسمية** يمكن لأداة فهمها، وغالبًا **الشيفرة أو النماذج**. بل يمكن تطبيقه حتى على مخرجات مكتوبة بلغة طبيعية مثل المتطلبات، عبر أدوات تفحص **الإملاء والقواعد وسهولة القراءة**.

### ما الذي لا يناسب؟ — What Is Not Suitable

المخرجات التي **يصعب على الإنسان تفسيرها**، والتي **لا يجوز تحليلها بالأدوات**، غير مناسبة للاختبار الساكن. مثال المنهج: **شيفرة تنفيذية لطرف ثالث**، بسبب قيود قانونية.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In one sprint, a team reviews three user stories with the product owner, runs a linter and a security scanner on every pull request, and peer-reviews the new test cases for the payment flow. All three are static testing; none of them runs the application.</p><p class="gx-ar" lang="ar" dir="rtl">في sprint واحد، يراجع فريق ثلاث قصص مستخدم مع مالك المنتج، ويشغّل أداة Linter وماسحًا أمنيًا على كل Pull Request، ويراجع الزملاء حالات الاختبار الجديدة لمسار الدفع. الثلاثة اختبار ساكن؛ ولا واحد منها يشغّل التطبيق.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K1: if the option is something you can read, it can be statically tested, including test cases and contracts. Watch for the one exception: third-party executable code that cannot be analysed for legal reasons.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K1: إذا كان الخيار شيئًا يمكن قراءته، فيمكن اختباره ساكنًا، بما في ذلك حالات الاختبار والعقود. وانتبه للاستثناء الوحيد: شيفرة تنفيذية لطرف ثالث لا يجوز تحليلها لأسباب قانونية.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking static testing is only for code. Requirements, test cases, contracts and models are all valid targets, and often the most valuable ones because defects there are found earliest.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الاختبار الساكن للشيفرة فقط. المتطلبات وحالات الاختبار والعقود والنماذج كلها أهداف صحيحة، وغالبًا الأكثر قيمة، لأن الـ defects فيها تُكتشف في أبكر وقت.</p></aside>
