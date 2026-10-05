---
order: 7
slug: "5-2-3"
chapter: 5
group: "5.2"
section: "5.2.3"
title: "Evolving Test Processes in AI-Enabled Test Organizations"
titleAr: "تطور عمليات الاختبار في المؤسسات المعتمدة على الذكاء الاصطناعي"
objectives: "GenAI-5.2.3 · K1"
minutes: 6
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
  - "الفرق الهجينة تنسّق بين البشر ووكلاء الذكاء الاصطناعي بتسليمات ونقاط مراجعة ومسؤوليات واضحة."
  - "المساءلة البشرية تبقى، حتى عندما ينفّذ الوكيل الخطوة."
terms:
  - en: "Hybrid Team"
    ar: "الفريق المختلط"
    def: "A team in which people and AI agents work together with defined hand-offs and review points."
    defAr: "فريق يعمل فيه البشر ووكلاء الذكاء الاصطناعي معًا بتسليمات ونقاط مراجعة محدّدة."
---
يغيّر دمج الذكاء التوليدي عمليات الاختبار التقليدية للمختبرين ومديري الاختبار. يتحول المختبِر من مختص في تصميم الاختبار وتنفيذه إلى **مختص اختبار مدعوم بالذكاء الاصطناعي (AI-assisted test specialist)**، يجمع خبرته في تقنيات الاختبار مع مهارة توجيه مواد الاختبار المولّدة والتحقق منها.

| Role | كيف يتطور؟ |
|---|---|
| Tester | يضيف توجيه AI والتحقق من مخرجاته وتنقيح التوجيهات وصيانة مكتبة الأنماط إلى خبرته في التصميم والتنفيذ |
| Test manager | يطوّر استراتيجية AI وإدارة مخاطره ومراقبة عملياته والتحكم فيها وحوكمتها |
| Hybrid team | ينسّق عمل الأشخاص ووكلاء AI، مع نقاط تسليم ومراجعة ومسؤوليات واضحة |

مثال على الفريق المختلط: وكيل يجمع نتائج تشغيل الانحدار الليلي ويصنّف حالات الفشل، ثم يسلّم المسودة لمختبِر يتحقق من التصنيف قبل فتح أي عيب. وكيل آخر يقترح تحديثات للسكربتات المتأثرة، ويعتمدها مهندس الأتمتة. نقاط التسليم والمراجعة محددة مسبقًا، وكل خطوة لها مسؤول بشري معروف.

يوازن مدير الاختبار بين القدرات البشرية وقدرات AI، ويضع أطر حوكمة لحالات استخدام AI، ويضمن أن يحافظ فريقه على كفاءات الاختبار التقليدية والثقافة بالذكاء الاصطناعي (AI literacy) معًا. ولن يقود مختبرين بشرًا فقط، بل سينسّق أيضًا مع وكلاء اختبار مدعومين بالذكاء التوليدي، وهذا يتطلب مهارات إدارية جديدة للإشراف على فرق مختلطة. ومع دخول الوكلاء تصبح إدارة النطاق والنتائج والتنسيق جزءًا من قيادة الفريق.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-ar">فكرة أساسية · دور المختبِر</span><span class="gx-en" lang="en" dir="ltr">Key idea · The tester's role</span></p><p class="gx-ar">المختبِر لا يتحوّل إلى مجرد كاتب prompts. الدور يجمع خبرة الاختبار والمجال مع توجيه الأداة وتقييمها. ودون القدرة على مراجعة النتائج والتغطية والمخاطر، لا أحد يستطيع الحكم على جودة ما تنتجه الأداة، والمساءلة البشرية لا تختفي لأن وكيلًا نفّذ خطوة.</p><p class="gx-en" lang="en" dir="ltr">The tester does not become a prompt writer only. The role combines testing and domain expertise with steering and evaluating the tool. Without the ability to review results, coverage and risks, no one can judge the quality of what the tool produces, and human accountability does not disappear because an agent performed a step.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-ar">من الواقع العملي · قبل أي استخدام جديد</span><span class="gx-en" lang="en" dir="ltr">In practice · Before any new use</span></p><p class="gx-ar">ما المهمة وما أساس الاختبار؟ أي سياق وأي تقنية تناسب؟ كيف سأقيس الصحة والتغطية؟ ما مخاطر البيانات والاستدلال؟ ما البنية التحتية والكلفة والمهارات المطلوبة؟ هذه الأسئلة تربط الفصول الخمسة في قرار واحد.</p><p class="gx-en" lang="en" dir="ltr">What is the task and the test basis? Which context and technique fit? How will I measure correctness and coverage? What are the data and reasoning risks? What infrastructure, cost and skills does it need? These questions tie the five chapters into one decision.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-ar">تلميح امتحان</span><span class="gx-en" lang="en" dir="ltr">Exam tip</span></p><p class="gx-ar">تذكّر كيف يتطور كل دور: المختبِرون يضيفون كتابة الـ prompts والتحقق وتحسين الـ prompts؛ ومديرو الاختبار يضيفون استراتيجية الذكاء الاصطناعي وإدارة المخاطر والمراقبة والتحكم والحوكمة؛ والفرق الهجينة تنسّق بين البشر ووكلاء الذكاء الاصطناعي بتسليمات واضحة.</p><p class="gx-en" lang="en" dir="ltr">Remember how each role evolves: testers add AI prompting, verification and prompt refinement; test managers add AI strategy, risk management, monitoring, control and governance; hybrid teams coordinate people and AI agents with clear hand-offs.</p></aside>
