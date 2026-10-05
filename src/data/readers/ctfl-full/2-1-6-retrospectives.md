---
order: 6
slug: "2-1-6"
chapter: 2
group: "2.1"
section: "2.1.6"
title: "Retrospectives and Process Improvement"
titleAr: "الاجتماعات الاسترجاعية وتحسين العملية"
objectives: "FL-2.1.6 · K2"
minutes: 6
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
takeawaysAr:
  - "الاجتماعات الاسترجاعية تُعقد في نهاية مشروع أو دورة تكرار أو محطة إطلاق، أو عند الحاجة."
  - "يناقش المشاركون ما نجح ويجب الاحتفاظ به، وما لم ينجح ويمكن تحسينه، وكيف تُطبَّق التحسينات."
  - "تُسجَّل النتائج، غالبًا ضمن تقرير إكمال الاختبار."
  - "فوائدها للاختبار: فعالية وكفاءة أعلى، ومخرجات اختبار أفضل، وتماسك الفريق وتعلّمه، وأساس اختبار أفضل، وتعاون أفضل بين التطوير والاختبار."
terms:
  - en: "Retrospective"
    ar: "الاجتماع الاسترجاعي"
    def: "A meeting at the end of a project, iteration or milestone where the team discusses what went well, what did not, and how to improve."
    defAr: "اجتماع في نهاية مشروع أو دورة أو محطة، يناقش فيه الفريق ما نجح وما لم ينجح وكيف يتحسّن."
    match: ["Retrospective", "retrospective", "retrospectives"]
---
**الاجتماعات الاسترجاعية (Retrospectives)**، وتسمّى أحيانًا «اجتماعات ما بعد المشروع» أو «استرجاعات المشروع»، تُعقد عادة في نهاية المشروع أو دورة التكرار، أو عند محطة إطلاق، ويمكن عقدها عند الحاجة.

توقيتها ومحتواها يعتمدان على نموذج الـ SDLC المتّبع. يشارك فيها المختبرون والمطوّرون والمعماريون ومالك المنتج ومحللو الأعمال، ويناقشون:

- **ما الذي نجح** ويجب الاحتفاظ به؟
- **ما الذي لم ينجح** ويمكن تحسينه؟
- **كيف نطبّق التحسينات** ونحافظ على ما نجح مستقبلًا؟

تُسجَّل النتائج، وغالبًا تكون جزءًا من **تقرير إكمال الاختبار**. والاجتماعات الاسترجاعية أساسية لتطبيق التحسين المستمر بنجاح، ومن المهم **متابعة** أي تحسينات يوصى بها.

### الفوائد للاختبار — Benefits for Testing

<figure class="gx-figure gx-spectrum" aria-label="Typical benefits of retrospectives for testing."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Effectiveness & efficiency</b><span>e.g. by acting on process improvement suggestions.</span></div><div class="gx-spectrum-item"><b>Better testware</b><span>e.g. by reviewing test processes together.</span></div><div class="gx-spectrum-item"><b>Team bonding & learning</b><span>Chance to raise issues and propose improvements.</span></div><div class="gx-spectrum-item"><b>Better test basis</b><span>e.g. gaps in requirements are addressed.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Dev–test cooperation</b><span>Collaboration is reviewed and improved regularly.</span></div></div><figcaption>Typical benefits of retrospectives for testing.</figcaption></figure>

- **رفع فعالية الاختبار وكفاءته**، مثلًا بتطبيق اقتراحات تحسين العملية.
- **رفع جودة مخرجات الاختبار**، مثلًا بمراجعة عمليات الاختبار معًا.
- **تماسك الفريق وتعلّمه**، نتيجة فرصة طرح المشكلات واقتراح التحسينات.
- **تحسين جودة أساس الاختبار**، مثلًا بمعالجة نقص المتطلبات وجودتها.
- **تعاون أفضل بين التطوير والاختبار**، لأن التعاون يُراجَع ويُحسَّن بانتظام.

<section class="gx-lab" data-lab="LAB-2.1.6"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Run a 20-Minute Testing Retrospective</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · أدِر اجتماعًا استرجاعيًا للاختبار في 20 دقيقة</span></span><span class="gx-lab-meta">LAB-2.1.6 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> turn one iteration's experience into one concrete testing improvement.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> تحويل تجربة دورة واحدة إلى تحسين واحد ملموس في الاختبار.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Draw three columns: Went well, Didn't go well, Try next time.</span><span class="gx-ar" lang="ar" dir="rtl">ارسم ثلاثة أعمدة: ما نجح، ما لم ينجح، ما سنجرّبه في المرة القادمة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Give everyone five minutes to add notes about testing in the last iteration.</span><span class="gx-ar" lang="ar" dir="rtl">أعطِ الجميع خمس دقائق لإضافة ملاحظات عن الاختبار في الدورة الأخيرة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Group similar notes and vote on the one most worth fixing.</span><span class="gx-ar" lang="ar" dir="rtl">اجمع الملاحظات المتشابهة، وصوّتوا على أكثرها استحقاقًا للمعالجة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Agree one action with an owner and a date, and add it to the test completion notes.</span><span class="gx-ar" lang="ar" dir="rtl">اتفقوا على إجراء واحد له مسؤول وتاريخ، وأضيفوه لملاحظات إكمال الاختبار.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">You leave with one specific, owned action (for example, "add boundary cases to the story template, owner: Sara, by next sprint"), not a list of complaints. Next retrospective starts by checking it.</span><span class="gx-ar" lang="ar" dir="rtl">تخرج بإجراء واحد محدد له مسؤول (مثلًا: «إضافة الحالات الحدّية لقالب القصة، المسؤولة: سارة، قبل السبرنت القادم»)، لا بقائمة شكاوى. والاجتماع القادم يبدأ بمتابعته.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2: questions may list several outcomes and ask which is a typical benefit of retrospectives for testing. "Assigning blame for defects" is never one; improving the test basis or cooperation is.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K2: قد يذكر السؤال عدة نتائج ويسأل أيها فائدة معتادة للاجتماعات الاسترجاعية في الاختبار. «تحديد المسؤول عن العيوب ولومه» ليست منها أبدًا؛ أما تحسين أساس الاختبار أو التعاون فهي منها.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating retrospectives as an Agile-only ritual. The syllabus places them at the end of projects, iterations or release milestones in any SDLC.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار الاجتماعات الاسترجاعية طقسًا خاصًا بـ Agile فقط. المنهج يضعها في نهاية المشاريع أو الدورات أو محطات الإطلاق في أي دورة حياة تطوير.</p></aside>
