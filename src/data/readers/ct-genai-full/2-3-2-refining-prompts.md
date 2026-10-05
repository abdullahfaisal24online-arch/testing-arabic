---
order: 10
slug: "2-3-2"
chapter: 2
group: "2.3"
section: "2.3.2"
title: "Techniques for Evaluating and Iteratively Refining Prompts"
titleAr: "أساليب تقييم التوجيهات وتحسينها تكراريًا"
objectives: "GenAI-2.3.2 · K2 / HO-2.3.2 · H1"
minutes: 9
lo:
  GenAI-2.3.2: "Explain techniques for evaluating and iteratively refining prompts."
  HO-2.3.2: "Evaluate and improve a prompt for a given test task using metrics."
loAr:
  GenAI-2.3.2: "تشرح أساليب تقييم التوجيهات وتحسينها تكراريًا."
  HO-2.3.2: "تقيّم توجيهًا لمهمة اختبار معطاة وتحسّنه باستخدام المقاييس."
takeaways:
  - "Five techniques: iterative modification, A/B testing, output analysis, user feedback, and adjusting length and specificity."
  - "A longer prompt is not always better; extra context can add noise or limit generalisation."
  - "One run of A against one run of B is not enough to pick a winner."
  - "Teams improve faster with shared prompt reviews and a shared prompt library."
takeawaysAr:
  - "خمسة أساليب: التعديل التكراري، ومقارنة A/B، وتحليل الناتج، وملاحظات المستخدمين، وضبط الطول ودرجة التحديد."
  - "التوجيه الأطول ليس دائمًا الأفضل؛ السياق الإضافي قد يضيف تشويشًا أو يحدّ من التعميم."
  - "تشغيل واحد لـ A مقابل تشغيل واحد لـ B لا يكفي لاختيار الأفضل."
  - "تتحسن الفرق أسرع بمراجعات توجيه مشتركة ومكتبة توجيهات مشتركة."
terms:
  - en: "A/B Testing"
    ar: "مقارنة A/B"
    def: "Running two or more prompt variants against the same metrics to see which produces better results."
    defAr: "تشغيل نسختين أو أكثر من التوجيه على المقاييس نفسها لمعرفة أيها يعطي نتائج أفضل."
    match: ["A/B"]
---
بناءً على المقاييس السابقة، تساعد هذه الأساليب على تقييم التوجيه وتحسينه:

1. **التعديل التكراري:** البدء بتوجيه أساسي ثم تعديله منهجيًا بحسب النتائج، بإضافة سياق أو ضبط المصطلحات لزيادة التحديد والملاءمة.
2. **مقارنة A/B:** صياغة نسخ متعددة من التوجيه، ومعرفة أيها يعطي نتائج أفضل وفق مقاييس محددة مسبقًا.
3. **تحليل المخرجات:** فحص الناتج بحثًا عن أخطاء وتناقضات، مثل عدم التوافق مع أساس الاختبار. فهم نوع الخطأ يساعد على تعديل التوجيه وتجنّب تكراره.
4. **دمج ملاحظات المستخدمين:** جمع رأي المختبرين في فائدة الناتج ووضوحه ومستوى تفصيله، وتعديل التوجيه بحسبها.
5. **ضبط الطول ودرجة التحديد:** تجربة أطوال ومستويات تفصيل مختلفة. أحيانًا يحسّن السياق الإضافي الجودة، وأحيانًا يعطي التوجيه المختصر نتيجة أفضل.

### كيف تبدو دورة التحسين؟ — A Refinement Cycle

لنفترض أن توجيهك يولّد حالات اختبار لنموذج تسجيل، وتقيس النتيجة بثلاثة مقاييس: التغطية، والصحة، والتكرار.

- **الدورة الأولى:** التغطية 60%، والنموذج أغفل حالات البريد المكرر. **التحسين:** تضيف قاعدة «البريد فريد» صراحةً إلى السياق.
- **الدورة الثانية:** التغطية 90%، لكن ظهرت حالات لتحقق عبر SMS غير موجود. **التحسين:** تضيف قيدًا «لا تضف متطلبات غير مذكورة».
- **الدورة الثالثة:** التغطية 90% دون إضافات، لكن 30% من الحالات متكررة. **التحسين:** تطلب إزالة الحالات المتشابهة وتجميعها.

كل دورة تغيّر شيئًا واحدًا تقريبًا، وتقيس أثره، وتسجّل السبب. هذا ما يجعل التحسين منهجيًا بدل تجربة عشوائية.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-ar">من الواقع العملي</span><span class="gx-en" lang="en" dir="ltr">In practice</span></p><p class="gx-ar">نظّم جلسات دورية لمراجعة التوجيهات، وشارك التوجيهات المجرّبة في مكتبة الفريق مع أمثلتها وحدودها. التعلّم المشترك يقلل الأخطاء المتكررة ويوحّد الجودة بين الفرق.</p><p class="gx-en" lang="en" dir="ltr">Hold regular prompt review sessions and share proven prompts in a team library, with their examples and limits. Shared learning reduces repeated mistakes and standardises quality across teams.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-ar">خطأ شائع</span><span class="gx-en" lang="en" dir="ltr">Common mistake</span></p><p class="gx-ar">إعلان أن التوجيه B أفضل بعد تشغيل واحد لكل منهما. التوليد يتفاوت، وقد لا تكون العينة الواحدة ممثّلة. استخدم تشغيلات متكررة وحالات متنوعة ومرجع تقييم ثابتًا، ثم فسّر الفرق وحدود البيانات.</p><p class="gx-en" lang="en" dir="ltr">Declaring prompt B better after one run of each. Generation varies and one sample may not be representative. Use repeated runs, varied cases and a fixed evaluation reference, then explain the difference and the limits of the data.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-ar">تلميح امتحان</span><span class="gx-en" lang="en" dir="ltr">Exam tip</span></p><p class="gx-ar">اعرف الأساليب الخمسة بأسمائها: التعديل التكراري للتوجيه، ومقارنة A/B للتوجيهات، وتحليل الناتج، ودمج ملاحظات المستخدمين، وضبط طول التوجيه ودرجة تحديده. وتذكّر الجانب الجماعي: جلسات مراجعة التوجيهات الدورية ومشاركة مكتبات التوجيهات.</p><p class="gx-en" lang="en" dir="ltr">Know the five techniques by name: iterative prompt modification, A/B testing of prompts, output analysis, integrating user feedback, and adjusting prompt length and specificity. Also remember the team side: regular prompt review sessions and sharing prompt libraries.</p></aside>

<section class="gx-lab" data-lab="HO-2.3.2"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-ar">تمرين · حسّن توجيهًا بمقارنة A/B</span><span class="gx-en" lang="en" dir="ltr">Exercise · Improve a Prompt with A/B</span></span><span class="gx-lab-meta">HO-2.3.2 · H1</span></header><div class="gx-lab-body"><p><span class="gx-ar"><strong>A:</strong> <em>«ولّد اختبارات للتسجيل.»</em><br><strong>B:</strong> التوجيه ذو المكوّنات الستة مع قواعد التسجيل المعتمدة، وجدول تغطية، ومنع افتراض متطلبات جديدة.</span><span class="gx-en" lang="en" dir="ltr"><strong>A:</strong> <em>“Generate sign-up tests.”</em><br><strong>B:</strong> the six-component prompt with the approved sign-up rules, a coverage table, and a ban on assuming new requirements.</span></p><ol class="gx-lab-steps"><li><span class="gx-ar">شغّل كل نسخة على قصص المستخدم نفسها، مع تثبيت النموذج والإعدادات قدر الإمكان وتسجيل الإصدارات.</span><span class="gx-en" lang="en" dir="ltr">Run each version on the same user stories, keeping the model and settings fixed where possible and recording versions.</span></li><li><span class="gx-ar">كرّر التشغيلات وراجع النتائج مقابل مرجع واحد: صحة النتائج المتوقعة، والتغطية، والافتراضات غير المسنودة، والوقت الكلي.</span><span class="gx-en" lang="en" dir="ltr">Repeat the runs and review against one reference: correctness of expected results, coverage, unsupported assumptions and total time.</span></li><li><span class="gx-ar">إذا حسّنت B التغطية لكنها أضافت تكرارًا، عدّل قيد إزالة التكرار فقط بدل إعادة كتابة كل شيء.</span><span class="gx-en" lang="en" dir="ltr">If B improved coverage but added duplicates, adjust only the de-duplication constraint instead of rewriting everything.</span></li><li><span class="gx-ar">سجّل كل تغيير وسببه ونتيجته، وأضف التوجيه النهائي إلى مكتبة الفريق.</span><span class="gx-en" lang="en" dir="ltr">Record each change, its reason and its result, and add the final prompt to the team library.</span></li></ol></div></section>
