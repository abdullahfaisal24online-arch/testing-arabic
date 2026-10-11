---
order: 6
slug: "2-1-6"
chapter: 2
group: "2.1"
section: "2.1.6"
title: "Retrospectives and Process Improvement"
titleAr: "الاجتماعات الاسترجاعية وتحسين العملية"
objectives: "FL-2.1.6 · K2"
minutes: 11
lo:
  FL-2.1.6: "Explain how retrospectives can be used to improve the process."
loAr:
  FL-2.1.6: "تشرح كيف تُستخدم الاجتماعات الاسترجاعية لتحسين العملية."
labs: ["LAB-2.1.6"]
takeaways:
  - "Retrospectives happen at the end of a project, an iteration or a release milestone, or when needed."
  - "Participants discuss what went well and should be kept, what did not and could improve, and how to apply the improvements."
  - "Results are recorded, usually as part of the test completion report."
  - "Benefits for testing: better effectiveness and efficiency, better testware, team bonding and learning, a better test basis, and better cooperation between development and testing."
  - "Retrospectives are critical for continuous improvement, and recommended improvements must be followed up."
takeawaysAr:
  - "الاجتماعات الاسترجاعية تُعقد في نهاية مشروع أو دورة تكرار أو محطة إطلاق، أو عند الحاجة."
  - "يناقش المشاركون ما نجح ويجب الاحتفاظ به، وما لم ينجح ويمكن تحسينه، وكيف تُطبَّق التحسينات."
  - "تُسجَّل النتائج، غالبًا ضمن تقرير إكمال الاختبار."
  - "فوائدها للاختبار: فعالية وكفاءة أعلى، ومخرجات اختبار أفضل، وتماسك الفريق وتعلّمه، وأساس اختبار أفضل، وتعاون أفضل بين التطوير والاختبار."
  - "الاجتماعات الاسترجاعية أساسية للتحسين المستمر، ويجب متابعة التحسينات الموصى بها."
terms:
  - en: "Retrospective"
    ar: "الاجتماع الاسترجاعي"
    def: "A meeting at the end of a project, iteration or milestone where the team discusses what went well, what did not, and how to improve."
    defAr: "اجتماع في نهاية مشروع أو دورة أو محطة، يناقش فيه الفريق ما نجح وما لم ينجح وكيف يتحسّن."
    match: ["Retrospective", "retrospective", "retrospectives"]
---
كل فريق يرتكب أخطاء، والفرق الجيدة لا تكررها. **الاجتماع الاسترجاعي (Retrospective)** هو الآلية التي تحوّل تجربة الفريق، الجيدة والسيئة، إلى تحسين ملموس في طريقة العمل. فبدل أن يقول كل شخص في نفسه «كان يجب أن نفعل كذا»، يجتمع الفريق ليتفق على ما يغيّره فعلًا. ولهذا يربط المنهج هذه الاجتماعات مباشرة **بتحسين العملية (process improvement)**.

### متى تُعقد؟ — When

تُعقد الاجتماعات الاسترجاعية غالبًا:

- **في نهاية المشروع**.
- **في نهاية دورة التكرار (iteration)**، مثل نهاية كل sprint في Scrum.
- **عند محطة إطلاق (release milestone)**.
- أو **عند الحاجة**، مثلًا بعد حادثة كبيرة في الإنتاج.

ويعتمد **توقيتها وطريقة تنظيمها على نموذج الـ SDLC المتّبع**. مشروع الشلال قد يعقد اجتماعًا واحدًا كبيرًا في نهايته؛ أما فريق تطبيق التوصيل فيعقد اجتماعًا قصيرًا في نهاية كل sprint، واجتماعًا أوسع بعد كل إصدار إلى المتاجر. والفرق المهم أن الاجتماع المتكرر يسمح بتطبيق التحسين في الدورة التالية مباشرة، بينما الاجتماع في نهاية المشروع يفيد غالبًا المشروع القادم. لكن في الحالتين الأسئلة نفسها، والهدف نفسه: أن يتعلم الفريق من تجربته بدل أن يكررها. ولهذا لا تعدّ الاجتماعات الاسترجاعية ممارسة خاصة بـ Agile، بل تصلح لأي دورة حياة.

### من يشارك وماذا يناقش؟ — Who and What

المشاركون **ليسوا المختبرين فقط**، بل أيضًا مثلًا **المطوّرون والمعماريون ومالك المنتج ومحللو الأعمال**. السبب أن مشكلات الاختبار نادرًا ما يكون سببها الاختبار وحده: قصة غامضة، أو بيئة غير مستقرة، أو تسليم متأخر للشيفرة. ويناقش المشاركون ثلاثة أسئلة:

1. **ما الذي نجح ويجب الاحتفاظ به؟** لأن الممارسات الناجحة تضيع إذا لم يسمّها أحد.
2. **ما الذي لم ينجح ويمكن تحسينه؟**
3. **كيف ندمج التحسينات ونحافظ على النجاحات مستقبلًا؟** وهذا السؤال هو الذي يحوّل النقاش إلى خطة.

### التسجيل والمتابعة — Record and Follow Up

**يجب تسجيل النتائج**، وهي **عادة جزء من تقرير إكمال الاختبار (test completion report)** (القسم 5.3.2). والتسجيل ليس شكليًا: ما لم يُكتب يُنسى في الأسبوع التالي.

ويؤكد المنهج أن الاجتماعات الاسترجاعية **أساسية لنجاح تطبيق التحسين المستمر (continuous improvement)**، وأنه **من المهم متابعة أي تحسينات موصى بها**. الاجتماع الذي ينتهي بقائمة اقتراحات لا ينفّذها أحد يفقد الفريق ثقته بالفكرة كلها. لذلك يبدأ الاجتماع الجيد بمراجعة ما تقرر في الاجتماع السابق.

### ما الذي يجعل الاجتماع مفيدًا؟ — Making It Work

الاجتماع الاسترجاعي ليس جلسة لتوزيع اللوم. هدفه تحسين **العملية** لا محاكمة **الأشخاص**؛ فإذا شعر أحد أنه سيُحاسَب على ما يقوله، سيصمت، وتبقى المشكلات الحقيقية مخفية. لذلك تتبع الفرق الناجحة قواعد بسيطة: يتكلم الجميع بالتساوي، ويُناقش «لماذا حدث هذا» لا «من فعل هذا»، ويُختار عدد قليل من التحسينات (واحد أو اثنان) لكل منها مسؤول وموعد، بدل قائمة طويلة لا يُنفّذ منها شيء. ويُفضّل أن تُبنى النقاشات على بيانات، مثل عدد الـ defects التي تسربت إلى الإنتاج أو زمن تشغيل خط CI، لا على الانطباعات وحدها. بهذه الطريقة يصبح كل اجتماع خطوة صغيرة في حلقة التحسين المستمر: نجرّب، ونقيس، ثم نراجع في الاجتماع التالي.

### الفوائد المعتادة للاختبار — Typical Benefits for Testing

<figure class="gx-figure gx-spectrum" aria-label="Typical benefits of retrospectives for testing."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Effectiveness & efficiency</b><span>e.g. by acting on process improvement suggestions.</span></div><div class="gx-spectrum-item"><b>Better testware</b><span>e.g. by reviewing test processes together.</span></div><div class="gx-spectrum-item"><b>Team bonding & learning</b><span>Chance to raise issues and propose improvements.</span></div><div class="gx-spectrum-item"><b>Better test basis</b><span>e.g. gaps in requirements are addressed.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Dev–test cooperation</b><span>Collaboration is reviewed and improved regularly.</span></div></div><figcaption>Typical benefits of retrospectives for testing.</figcaption></figure>

- **زيادة فعالية الاختبار وكفاءته**، مثلًا **بتطبيق اقتراحات تحسين العملية**. مثال: الفريق يقرر تشغيل اختبارات الانحدار المؤتمتة ليلًا بدل يدويًا قبل كل إصدار، فيوفر يومين من كل دورة إصدار.
- **رفع جودة مخرجات الاختبار (testware)**، مثلًا **بمراجعة عمليات الاختبار معًا**. مثال: يكتشف الفريق أن حالات اختبار الدفع لا تغطي المحفظة الرقمية، فيضيفها.
- **تماسك الفريق وتعلّمه**، نتيجة **فرصة طرح المشكلات واقتراح نقاط التحسين** في مكان آمن. مثال: مختبرة جديدة في الفريق تذكر أنها لا تعرف كيف تُعدّ بيانات مطعم تجريبي، فيتطوع مطوّر بجلسة قصيرة لشرح ذلك، ويتعلم الجميع منها.
- **تحسين جودة أساس الاختبار (test basis)**، لأن **النقص في نطاق المتطلبات وجودتها يمكن معالجته وحلّه**. مثال: بعد ثلاثة defects سببها قصص بلا حالات حدّية، يتفق الفريق على إضافة سطر «الحدود» لقالب القصة.
- **تعاون أفضل بين التطوير والاختبار**، لأن **التعاون يُراجَع ويُحسَّن بانتظام**. مثال: يتفق المطوّرون على إبلاغ المختبرين بتغيير واجهة الـ API قبل دمجه، لا بعده.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">At the end of sprint 6, the delivery app team notes that two coupon defects reached the store release because the coupon stories had no expiry-date examples. Kept: the CI pipeline catches most regressions. Improve: add an "edge cases" line to every story. Action: the product owner updates the story template before sprint 7; the next retrospective starts by checking it.</p><p class="gx-ar" lang="ar" dir="rtl">في نهاية الـ sprint السادس، يلاحظ فريق تطبيق التوصيل أن اثنين من الـ defects في الكوبونات وصلا إلى الإصدار في المتاجر لأن قصص الكوبونات لم تتضمن أمثلة على تاريخ الانتهاء. ما نحتفظ به: خط CI يلتقط معظم حالات الانحدار. ما نحسّنه: إضافة سطر «الحالات الحدّية» لكل قصة. الإجراء: يحدّث مالك المنتج قالب القصة قبل الـ sprint السابع، ويبدأ الاجتماع القادم بالتحقق من ذلك.</p></aside>

<section class="gx-lab" data-lab="LAB-2.1.6"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Run a 20-Minute Testing Retrospective</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · أدِر اجتماعًا استرجاعيًا للاختبار في 20 دقيقة</span></span><span class="gx-lab-meta">LAB-2.1.6 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> turn one iteration's experience into one concrete testing improvement.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> تحويل تجربة دورة واحدة إلى تحسين واحد ملموس في الاختبار.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Draw three columns: Went well, Didn't go well, Try next time.</span><span class="gx-ar" lang="ar" dir="rtl">ارسم ثلاثة أعمدة: ما نجح، ما لم ينجح، ما سنجرّبه في المرة القادمة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Give everyone five minutes to add notes about testing in the last iteration.</span><span class="gx-ar" lang="ar" dir="rtl">أعطِ الجميع خمس دقائق لإضافة ملاحظات عن الاختبار في الدورة الأخيرة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Group similar notes and vote on the one most worth fixing.</span><span class="gx-ar" lang="ar" dir="rtl">اجمع الملاحظات المتشابهة، وصوّتوا على أكثرها استحقاقًا للمعالجة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Agree one action with an owner and a date, and add it to the test completion notes.</span><span class="gx-ar" lang="ar" dir="rtl">اتفقوا على إجراء واحد له مسؤول وتاريخ، وأضيفوه لملاحظات إكمال الاختبار.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">You leave with one specific, owned action (for example, "add boundary cases to the story template, owner: Sara, by next sprint"), not a list of complaints. Next retrospective starts by checking it.</span><span class="gx-ar" lang="ar" dir="rtl">تخرج بإجراء واحد محدد له مسؤول (مثلًا: «إضافة الحالات الحدّية لقالب القصة، المسؤولة: سارة، قبل الـ sprint القادم»)، لا بقائمة شكاوى. والاجتماع القادم يبدأ بمتابعته.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2: questions may list several outcomes and ask which is a typical benefit of retrospectives for testing. "Assigning blame for defects" is never one; improving the test basis or cooperation is.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K2: قد يذكر السؤال عدة نتائج ويسأل أيها فائدة معتادة للاجتماعات الاسترجاعية في الاختبار. «تحديد المسؤول عن الـ defects ولومه» ليست منها أبدًا؛ أما تحسين أساس الاختبار أو التعاون فهي منها.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating retrospectives as an Agile-only ritual. The syllabus places them at the end of projects, iterations or release milestones in any SDLC.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار الاجتماعات الاسترجاعية طقسًا خاصًا بـ Agile فقط. المنهج يضعها في نهاية المشاريع أو الدورات أو محطات الإطلاق في أي دورة حياة تطوير.</p></aside>
