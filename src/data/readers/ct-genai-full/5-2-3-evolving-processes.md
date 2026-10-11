---
order: 7
slug: "5-2-3"
chapter: 5
group: "5.2"
section: "5.2.3"
title: "Evolving Test Processes in AI-Enabled Test Organizations"
titleAr: "تطور عمليات الاختبار في المؤسسات المعتمدة على الذكاء الاصطناعي"
objectives: "GenAI-5.2.3 · K1"
minutes: 8
lo:
  GenAI-5.2.3: "Recall how test processes and roles evolve in AI-enabled organisations."
loAr:
  GenAI-5.2.3: "تذكّر كيف تتطور عمليات الاختبار وأدواره في المؤسسات الممكَّنة بالذكاء الاصطناعي."
takeaways:
  - "Testers add prompting, output verification, prompt refinement and pattern-library upkeep to their test expertise."
  - "Test managers develop AI strategy, risk management, monitoring, control and governance."
  - "Hybrid teams coordinate people and AI agents with clear hand-offs, review points and responsibilities."
  - "Human accountability stays, even when an agent performed the step."
takeawaysAr:
  - "يضيف المختبِرون كتابة الـ prompts، والتحقق من المخرجات، وتحسين الـ prompts، وصيانة مكتبة الأنماط إلى خبرتهم في الاختبار."
  - "يطوّر مديرو الاختبار استراتيجية الذكاء الاصطناعي، وإدارة المخاطر، والمراقبة، والتحكم، والحوكمة."
  - "الفرق المختلطة تنسّق بين البشر ووكلاء الذكاء الاصطناعي بتسليمات ونقاط مراجعة ومسؤوليات واضحة."
  - "المساءلة البشرية تبقى، حتى عندما ينفّذ الوكيل الخطوة."
terms:
  - en: "Hybrid Team"
    ar: "الفريق المختلط"
    def: "A team in which people and AI agents work together with defined hand-offs and review points."
    defAr: "فريق يعمل فيه البشر ووكلاء الذكاء الاصطناعي معًا بتسليمات ونقاط مراجعة محدّدة."
  - en: "AI-assisted Test Specialist"
    ar: "مختص الاختبار المدعوم بالذكاء الاصطناعي"
    def: "A tester who combines expertise in test techniques with the skills to guide and verify AI-generated testware."
    defAr: "مختبِر يجمع خبرته في تقنيات الاختبار مع مهارات توجيه الـ testware المولَّد بالذكاء الاصطناعي والتحقق منه."
  - en: "AI Literacy"
    ar: "الثقافة بالذكاء الاصطناعي"
    def: "Enough understanding of AI capabilities, limits and risks to use AI tools responsibly and judge their output."
    defAr: "فهم كافٍ لقدرات الذكاء الاصطناعي وحدوده ومخاطره لاستخدام أدواته بمسؤولية والحكم على مخرجاتها."
---
يقول المنهج إن دمج GenAI **يغيّر عمليات الاختبار التقليدية للمختبِرين ومديري الاختبار** داخل مؤسسات الاختبار. التغيير لا يعني أن يختفي دور ويظهر غيره، بل أن تُضاف مسؤوليات جديدة إلى الخبرة الموجودة. ولهذا القسم صلة مباشرة بالمخاوف التي ذكرناها في القسم 5.1.4: معرفة كيف يتطور الدور هي أفضل جواب عن الخوف من فقدان الوظيفة.

| Role | How it evolves |
|---|---|
| Tester | From test design and execution specialist to AI-assisted test specialist: reviews AI output, refines prompts, maintains test-specific prompt libraries |
| Test manager | Adds AI-based test strategy, AI-based risk management, monitoring and control of AI-based test processes, AI governance |
| Hybrid team | People and GenAI-powered test agents coordinated with clear hand-offs, review points and responsibilities |

### المختبِر: مختص اختبار مدعوم بالذكاء الاصطناعي — The Tester

يتحول المختبِر من **مختص في تصميم الاختبار وتنفيذه** إلى **مختص اختبار مدعوم بالذكاء الاصطناعي (AI-assisted test specialist)**، يجمع **خبرته في تقنيات الاختبار** مع **مهارة توجيه الـ testware المولَّد والتحقق منه**. وتتوسّع مهامه لتشمل ثلاثة أمور يذكرها المنهج:

- **مراجعة مخرجات AI بشكل عام:** لا الحالة الواحدة فقط، بل المجموعة كلها: هل غطّت معايير القبول؟ هل فيها تكرار أو حالات مخترعة؟
- **تحسين التوجيهات (prompt refinement):** عندما يتكرر خطأ في الناتج، يعدّل التوجيه بدل تصحيح النتيجة يدويًا كل مرة.
- **صيانة مكتبات التوجيهات الخاصة بالاختبار:** تحديث الأنماط عندما تتغير القواعد. مثال: عندما أضاف تطبيق التوصيل المحفظة الرقمية طريقةً للدفع، حدّث المختبِر نمط «حالات الدفع» لتشمل الطرق الثلاث.

### مدير الاختبار — The Test Manager

تتحدّث مسؤوليات مدير الاختبار لتشمل **تطوير استراتيجية اختبار قائمة على AI**، و**إدارة المخاطر المرتبطة بـ AI**، و**مراقبة عمليات الاختبار القائمة على AI والتحكم فيها**. ويركّز على ثلاثة أمور:

- **الموازنة بين القدرات البشرية وقدرات AI:** أي مهام تُعطى للأداة، وأيها يبقى للإنسان، كالاختبار الاستكشافي لمسارات الدفع.
- **وضع أطر حوكمة لحالات استخدام AI (AI governance frameworks):** من يوافق على حالة استخدام جديدة، وبأي قواعد.
- **ضمان أن يحافظ فريقه على كفاءات الاختبار التقليدية والثقافة بالذكاء الاصطناعي (AI literacy) معًا:** فالفريق الذي يفقد مهارة تصميم الاختبار لن يستطيع الحكم على ما تولّده الأداة.

مثال: مدير الاختبار في شركة التوصيل يحدد في الاستراتيجية أي مهام تستخدم GenAI، ويصنّف مخاطرها؛ فالحالات المولّدة لمسارات الدفع والكوبونات تُراجع كلها لأن الخطأ فيها يمس أموال العملاء، بينما تكفي مراجعة عينة من ملخصات الانحدار. ثم يتابع شهريًا نسبة الحالات المولّدة التي احتاجت تصحيحًا (المراقبة)، ويقرر بناءً عليها هل يعدّل العملية أو ينقل حالة استخدام جديدة إلى الاستخدام الفعلي (التحكم).

### الفرق المختلطة — Hybrid Teams

لن يقود مدير الاختبار مختبِرين بشرًا فقط، بل **سينسّق أيضًا مع وكلاء اختبار مدعومين بـ GenAI**، وهذا **يتطلب مهارات إدارية جديدة للإشراف على فرق مختلطة من البشر وأدوات GenAI**.

مثال: وكيل يجمع نتائج تشغيل الانحدار الليلي ويصنّف حالات الفشل، ثم يسلّم المسودة لمختبِر يتحقق من التصنيف قبل فتح أي defect. وكيل آخر يقترح تحديثات للـ scripts المتأثرة، ويعتمدها مهندس الأتمتة. عمليًا، تُحدَّد نقاط التسليم والمراجعة مسبقًا، ويكون لكل خطوة مسؤول بشري معروف.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea · The tester's role</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية · دور المختبِر</span></p><p class="gx-en" lang="en" dir="ltr">The tester does not become a prompt writer only. The role combines testing and domain expertise with steering and evaluating the tool. Without the ability to review results, coverage and risks, no one can judge the quality of what the tool produces, and human accountability does not disappear because an agent performed a step.</p><p class="gx-ar" lang="ar" dir="rtl">المختبِر لا يتحوّل إلى مجرد كاتب توجيهات. الدور يجمع خبرة الاختبار والمجال مع توجيه الأداة وتقييمها. ودون القدرة على مراجعة النتائج والتغطية والمخاطر، لا أحد يستطيع الحكم على جودة ما تنتجه الأداة، والمساءلة البشرية لا تختفي لأن وكيلًا نفّذ خطوة.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice · Before any new use</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي · قبل أي استخدام جديد</span></p><p class="gx-en" lang="en" dir="ltr">Before the delivery app team adds a new GenAI use, it asks: What is the task and the test basis? Which context and technique fit? How will we measure correctness and coverage? What are the data and reasoning risks? What infrastructure, cost and skills does it need? These questions tie the five chapters into one decision.</p><p class="gx-ar" lang="ar" dir="rtl">قبل أن يضيف فريق تطبيق التوصيل أي استخدام جديد لـ GenAI، يسأل: ما المهمة وما أساس الاختبار؟ أي سياق وأي تقنية تناسب؟ كيف سنقيس الصحة والتغطية؟ ما مخاطر البيانات والاستدلال؟ ما البنية التحتية والكلفة والمهارات المطلوبة؟ هذه الأسئلة تربط الفصول الخمسة في قرار واحد.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Remember how each role evolves: testers add AI prompting, verification and prompt refinement; test managers add AI strategy, risk management, monitoring, control and governance; hybrid teams coordinate people and AI agents with clear hand-offs.</p><p class="gx-ar" lang="ar" dir="rtl">تذكّر كيف يتطور كل دور: المختبِرون يضيفون كتابة التوجيهات والتحقق وتحسين التوجيهات؛ ومديرو الاختبار يضيفون استراتيجية الذكاء الاصطناعي وإدارة المخاطر والمراقبة والتحكم والحوكمة؛ والفرق المختلطة تنسّق بين البشر ووكلاء الذكاء الاصطناعي بتسليمات واضحة.</p></aside>
