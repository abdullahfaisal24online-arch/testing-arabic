---
order: 12
slug: "4-5-1"
chapter: 4
group: "4.5"
section: "4.5.1"
title: "Collaborative User Story Writing"
titleAr: "كتابة قصص المستخدم بشكل تعاوني"
objectives: "FL-4.5.1 · K2"
minutes: 14
lo:
  FL-4.5.1: "Explain how to write user stories in collaboration with developers and business representatives."
loAr:
  FL-4.5.1: "تشرح كيف تُكتب قصص المستخدم بالتعاون مع المطوّرين وممثلي العمل."
takeaways:
  - "A user story represents a feature that is valuable to a user or purchaser of the system."
  - "Its three critical aspects, the 3 Cs: Card, Conversation and Confirmation."
  - "Common format: 'As a [role], I want [goal], so that I can [business value]', followed by acceptance criteria."
  - "Collaborative writing uses techniques such as brainstorming and mind mapping to build a shared vision."
  - "Good stories meet INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable. If a stakeholder cannot say how to test a story, it may not be clear enough."
  - "Collaboration-based approaches focus not only on detecting defects but also on avoiding them through collaboration and communication."
takeawaysAr:
  - "قصة المستخدم تمثّل ميزة ذات قيمة لمستخدم النظام أو مشتريه."
  - "جوانبها الحاسمة الثلاثة (3 Cs): البطاقة، والحوار، والتأكيد."
  - "الصيغة الشائعة: «بصفتي [دور]، أريد [هدفًا]، لكي [قيمة عمل]»، تتبعها معايير القبول."
  - "الكتابة التعاونية تستخدم أساليب مثل العصف الذهني والخرائط الذهنية لبناء رؤية مشتركة."
  - "القصص الجيدة تحقق INVEST: مستقلة، وقابلة للتفاوض، وذات قيمة، وقابلة للتقدير، وصغيرة، وقابلة للاختبار. وإذا لم يعرف صاحب المصلحة كيف يختبر القصة، فقد لا تكون واضحة بما يكفي."
  - "النُهج المبنية على التعاون لا تركّز على اكتشاف الـ defects فقط، بل على تجنّبها أيضًا من خلال التعاون والتواصل."
terms:
  - en: "User Story"
    ar: "قصة المستخدم"
    def: "A description of a feature valuable to a user or purchaser, usually written as 'As a..., I want..., so that...' with acceptance criteria."
    defAr: "وصف لميزة ذات قيمة لمستخدم أو مشترٍ، يُكتب عادة بصيغة «بصفتي...، أريد...، لكي...» مع معايير قبول."
    match: ["User Story", "user story", "user stories"]
  - en: "INVEST"
    ar: "INVEST"
    def: "Criteria for good user stories: Independent, Negotiable, Valuable, Estimable, Small and Testable."
    defAr: "معايير القصص الجيدة: مستقلة، وقابلة للتفاوض، وذات قيمة، وقابلة للتقدير، وصغيرة، وقابلة للاختبار."
  - en: "Collaboration-based Test Approach"
    ar: "نهج الاختبار المبني على التعاون"
    def: "An approach to testing that focuses on defect avoidance by collaboration and communication among stakeholders."
    defAr: "نهج اختبار يركّز على تجنّب الـ defects من خلال التعاون والتواصل بين أصحاب المصلحة."
    match: ["collaboration-based test approach", "Collaboration-based approaches", "collaboration-based approaches"]
---
### من اكتشاف الـ defects إلى تجنّبها — Collaboration-based Approaches

كل التقنيات التي درسناها حتى الآن، الصندوق الأسود (4.2) والصندوق الأبيض (4.3) والمبنية على الخبرة (4.4)، لها **هدف محدد في اكتشاف الـ defects (defect detection)**: الـ defect موجود، ونحن نبحث عنه. أما **النُهج المبنية على التعاون (Collaboration-based Approaches)** في القسم 4.5 فتركّز **أيضًا على تجنّب الـ defects (defect avoidance)** من خلال **التعاون والتواصل**. الفكرة أن كثيرًا من الـ defects يبدأ بسوء فهم بين مالك المنتج والمطوّر والمختبر، فإذا تحدّث الثلاثة معًا قبل البرمجة، لا يُكتب الـ defect أصلًا. وأول هذه النُهج: الكتابة التعاونية لقصص المستخدم.

### قصة المستخدم والـ 3 Cs — User Story and the 3 Cs

**قصة المستخدم (User Story)** تمثّل **ميزة ذات قيمة لمستخدم النظام أو لمشتريه**. ليست مواصفات تقنية، بل وعد بحوار حول حاجة حقيقية. ولها **ثلاثة جوانب حاسمة** تسمّى معًا **«3 Cs»**:

<figure class="gx-figure gx-spectrum" aria-label="The 3 Cs of a user story."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Card</b><span>The medium describing the story, e.g. an index card or an entry in an electronic board.</span></div><div class="gx-spectrum-item"><b>Conversation</b><span>Explains how the software will be used; can be documented or verbal.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Confirmation</b><span>The acceptance criteria.</span></div></div><figcaption>The 3 Cs of a user story.</figcaption></figure>

- **البطاقة (Card):** **الوسيط الذي يصف القصة**، مثل بطاقة ورقية على لوحة الحائط، أو عنصر في لوحة إلكترونية كأداة إدارة المهام. البطاقة قصيرة عمدًا: هي تذكير بالحاجة، لا وثيقة كاملة.
- **الحوار (Conversation):** **يشرح كيف ستُستخدم البرمجية**، ويمكن أن يكون **موثقًا أو شفهيًا**. هنا تُطرح الأسئلة: ماذا لو؟ ومن؟ ومتى؟ وهنا يظهر سوء الفهم قبل أن يتحول إلى شيفرة.
- **التأكيد (Confirmation):** **معايير القبول** (القسم 4.5.2)، أي الشروط التي نتفق بها على أن القصة اكتملت. وهي عادةً ثمرة الحوار.

### الصيغة الشائعة — Common Format

أكثر صيغ القصة شيوعًا:

> As a **[role]**, I want **[goal to be accomplished]**, so that I can **[resulting business value for the role]**

ثم **تتبعها معايير القبول**. لكل جزء وظيفة: **الدور** يحدد لمن نبني، و**الهدف** يحدد ماذا يريد، و**القيمة** تشرح لماذا، وهي أهم جزء لأنها تسمح للفريق باقتراح حل أفضل إن وُجد. مثال من تطبيق التوصيل:

> As a **customer**, I want **to track my driver on a map**, so that I can **be ready at the door when my order arrives**.

### الكتابة التعاونية — Collaborative Authorship

لا يكتب مالك المنتج القصة وحده ثم يرميها للفريق. **التأليف التعاوني** يمكن أن يستخدم أساليب مثل **العصف الذهني (brainstorming)** لتوليد أفكار وحالات كثيرة بسرعة، و**الخرائط الذهنية (mind mapping)** لتنظيمها حول الميزة. والتعاون يسمح للفريق بالوصول إلى **رؤية مشتركة لما يجب تسليمه**، بأخذ **ثلاث وجهات نظر** بالحسبان:

- **العمل (Business):** مالك المنتج يشرح القيمة والهدف: «الزبائن يتصلون بالدعم ليسألوا أين السائق».
- **التطوير (Development):** المطوّر يشرح ما هو ممكن وبأي تكلفة: «خدمة الخرائط تعطينا موقع السائق كل 10 ثوانٍ».
- **الاختبار (Testing):** المختبر يسأل كيف سنتأكد: «ماذا يرى الزبون إذا فقد السائق الاتصال؟ وماذا لو أُلغي الطلب أثناء التتبّع؟».

### معايير INVEST — Good Stories

القصص الجيدة يجب أن تحقق **INVEST**:

| Letter | Meaning | Delivery-app check |
| --- | --- | --- |
| I | Independent | Map tracking can be built without waiting for the ratings story |
| N | Negotiable | The team may agree on a 10-second refresh instead of real time |
| V | Valuable | Customers stop calling support to ask where the driver is |
| E | Estimable | The team can size it in story points |
| S | Small | Fits in one 2-week sprint; "the whole delivery experience" does not |
| T | Testable | "Driver position updates at least every 10 seconds" can be checked |

- **مستقلة (Independent):** يمكن تطويرها وتسليمها دون انتظار قصة أخرى، فيسهل ترتيب الأولويات.
- **قابلة للتفاوض (Negotiable):** البطاقة ليست عقدًا؛ التفاصيل تُتفق عليها في الحوار.
- **ذات قيمة (Valuable):** تقدم قيمة واضحة للمستخدم أو المشتري، لا مهمة تقنية بحتة.
- **قابلة للتقدير (Estimable):** يفهمها الفريق بما يكفي لتقدير جهدها.
- **صغيرة (Small):** تكفي لتُنجز داخل تكرار واحد؛ القصص الكبيرة تُقسَّم.
- **قابلة للاختبار (Testable):** يمكن التحقق من اكتمالها بمعايير واضحة.

### مثال: من قصة ضعيفة إلى قصة جيدة — Improving a Story

القصة الأولى التي وصلت إلى الفريق كانت: «بصفتي مستخدمًا، أريد نظام كوبونات كاملًا». في جلسة التحسين (refinement) مرّ الفريق عليها بمعايير INVEST، فوجد أنها **ليست صغيرة** (تشمل الإنشاء والتطبيق والتقارير)، و**يصعب تقديرها**، و**غير قابلة للاختبار** بصيغتها الحالية، ولا تذكر **القيمة**. بعد الحوار قُسّمت إلى عدة قصص، أولها:

> As a **customer**, I want **to apply one coupon code at checkout**, so that I can **pay less for my order**.

ومن الحوار نفسه خرجت أسئلة المختبر التي ستصبح معايير قبول: ماذا يحدث مع كوبون منتهي الصلاحية؟ هل يمكن استخدام كوبونين؟ هل يُطبّق الخصم بالنسبة المئوية على رسوم التوصيل أم على الوجبات فقط؟ لاحظ كيف منع الحوار defects قبل أن تُكتب سطرًا في الشيفرة، وهذا بالضبط معنى **تجنّب الـ defects**.

### إشارة «لا أعرف كيف أختبرها» — When a Story Is Hard to Test

يقول المنهج إنه إذا **لم يعرف صاحب المصلحة كيف يختبر قصة مستخدم**، فقد يدل ذلك على واحد من ثلاثة أمور:

1. **القصة غير واضحة بما يكفي:** «أريد تتبّعًا أفضل» لا يمكن اختبارها؛ أفضل من ماذا؟
2. **القصة لا تعكس شيئًا ذا قيمة له:** إن لم يعرف ما الذي سيتغير بالنسبة له، فربما لا يحتاجها.
3. **صاحب المصلحة يحتاج فقط إلى مساعدة في الاختبار:** وهنا يأتي دور المختبر في الحوار.

لذلك لا يُعامَل سؤال «كيف سنختبرها؟» على أنه تفصيل يأتي لاحقًا، بل **أداة لفحص جودة القصة نفسها** قبل أن تدخل الـ sprint. القصة التي لا يستطيع أحد أن يصف اختبارها ستكون غالبًا القصة التي يختلف الجميع على اكتمالها في النهاية.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">"As a returning customer, I want to reorder a previous order in one tap, so that I save time on my weekly groceries." In the conversation, the tester asks: what if an item is out of stock, or its price changed? Those answers become acceptance criteria.</p><p class="gx-ar" lang="ar" dir="rtl">«بصفتي عميلًا متكررًا، أريد إعادة طلب طلبية سابقة بنقرة واحدة، لكي أوفّر الوقت في مشترياتي الأسبوعية». في الحوار يسأل المختبر: ماذا لو نفد أحد المنتجات، أو تغيّر سعره؟ هذه الإجابات تصبح معايير قبول.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Card = the medium, Conversation = how it will be used, Confirmation = acceptance criteria. And "T" in INVEST is Testable, the tester's main contribution.</p><p class="gx-ar" lang="ar" dir="rtl">البطاقة = الوسيط، والحوار = كيف ستُستخدم، والتأكيد = معايير القبول. وحرف «T» في INVEST يعني قابلة للاختبار، وهي المساهمة الأساسية للمختبر.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating the user story card as the whole requirement. The conversation and the confirmation (acceptance criteria) are equally part of the story.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار بطاقة القصة هي المتطلب كله. الحوار والتأكيد (معايير القبول) جزء من القصة بالقدر نفسه.</p></aside>
