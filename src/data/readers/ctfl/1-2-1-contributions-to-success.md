---
order: 3
slug: "1-2-1"
chapter: 1
group: "1.2"
section: "1.2.1"
title: "Testing's Contributions to Success"
titleAr: "مساهمة الاختبار في النجاح"
objectives: "FL-1.2.1 · K2"
minutes: 9
lo:
  FL-1.2.1: "Give examples of why testing is necessary."
loAr:
  FL-1.2.1: "تعطي أمثلة توضّح لماذا الاختبار ضروري."
takeaways:
  - "Testing is a cost-effective way to detect defects; removing them (debugging) is what raises quality."
  - "Testing lets you evaluate quality directly and supports decisions such as moving to the next phase or releasing."
  - "Testers represent users indirectly, keeping their needs in view throughout development."
  - "Testing may be required to meet contractual, legal or regulatory requirements."
  - "Testing's contribution is not limited to the test team: any stakeholder can use testing skills to help the project succeed."
takeawaysAr:
  - "الاختبار وسيلة فعّالة التكلفة لاكتشاف الـ defects؛ وإزالتها (بالتنقيح) هي ما يرفع الجودة."
  - "الاختبار يسمح بتقييم الجودة مباشرة، ويدعم قرارات مثل الانتقال للمرحلة التالية أو الإطلاق."
  - "المختبرون يمثّلون المستخدمين بشكل غير مباشر، ويبقون احتياجاتهم حاضرة طوال التطوير."
  - "قد يكون الاختبار مطلوبًا للوفاء بمتطلبات تعاقدية أو قانونية أو تنظيمية."
  - "مساهمة الاختبار لا تقتصر على فريق الاختبار: أي صاحب مصلحة يستطيع استخدام مهارات الاختبار لإنجاح المشروع."
terms:
  - en: "Quality"
    ar: "الجودة"
    def: "The degree to which a work product satisfies stated and implied needs of its stakeholders."
    defAr: "مدى تلبية مُخرَج العمل للاحتياجات المعلنة والضمنية لأصحاب المصلحة."
  - en: "Stakeholder"
    ar: "صاحب المصلحة"
    def: "A person or group with an interest in the system, such as users, customers, managers or regulators."
    defAr: "شخص أو جهة لها مصلحة في النظام، مثل المستخدمين والعملاء والمديرين والجهات الرقابية."
---
لماذا يدفع فريق تطبيق التوصيل وقتًا ومالًا على الاختبار، بدل أن يصرفهما على ميزات جديدة؟ يجيب المنهج بأن الاختبار، بوصفه **شكلًا من أشكال ضبط الجودة (Quality Control)**، يساعد على تحقيق أهداف الاختبار المتفق عليها **ضمن قيود النطاق والوقت والجودة والميزانية** المحددة للمشروع. أي أن الاختبار ليس رفاهية تُضاف بعد انتهاء العمل، بل وسيلة لإيصال المشروع إلى هدفه دون أن يُخترق أحد هذه القيود الأربعة: إصدار يتأخر، أو ميزانية تتضاعف بسبب أعطال في الإنتاج، أو جودة لا يقبلها الزبائن.

### الاختبار ليس حكرًا على فريق الاختبار — Not Only the Test Team

يؤكد المنهج أن مساهمة الاختبار في النجاح **لا تقتصر على أنشطة فريق الاختبار**. أي صاحب مصلحة يستطيع أن يستخدم مهاراته في الاختبار ليقرّب المشروع من النجاح. في فريق Scrum الخاص بتطبيق التوصيل: المطوّرون يكتبون اختبارات المكوّنات، ومالك المنتج يراجع معايير القبول ويجرّب الميزة قبل العرض، وحتى مدير المطعم الذي يجرّب لوحة التحكم في نسخة تجريبية يساهم في الاختبار.

ويضيف المنهج أن اختبار **المكوّنات والأنظمة ومخرجات العمل المرتبطة بها**، مثل التوثيق، يساعد على تحديد الـ defects في البرمجيات. فالاختبار لا ينتظر النظام الكامل؛ قصة مستخدم غامضة أو دليل استخدام خاطئ يُختبران أيضًا.

### أربع مساهمات رئيسية — Four Main Contributions

<figure class="gx-figure gx-spectrum" aria-label="How testing contributes to project success."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Detect defects</b><span>A cost-effective way to find defects, so they can be removed.</span></div><div class="gx-spectrum-item"><b>Evaluate quality</b><span>Direct measurement of quality at different SDLC stages.</span></div><div class="gx-spectrum-item"><b>Represent users</b><span>Keep users' needs in view throughout development.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Meet obligations</b><span>Satisfy contractual, legal or regulatory requirements.</span></div></div><figcaption>How testing contributes to project success.</figcaption></figure>

### 1. اكتشاف الـ defects بتكلفة معقولة — Cost-Effective Defect Detection

الاختبار **وسيلة فعّالة من حيث التكلفة لاكتشاف الـ defects**. لماذا «فعّالة التكلفة»؟ لأن البديل أغلى: أن يكتشف الزبائن الـ defect بأنفسهم، فيتحمل الفريق تكلفة الإصلاح العاجل، وتعويض الطلبات، وتقييمات سيئة في المتجر. ساعة يقضيها مختبر في اختبار حد التوصيل المجاني أرخص بكثير من آلاف الطلبات التي تُحسب عليها رسوم خاطئة.

بعد اكتشاف الـ defects تُزال عبر **التنقيح (Debugging)**، وهو **نشاط ليس من الاختبار**. لذلك يقول المنهج إن الاختبار يساهم **بشكل غير مباشر** في رفع جودة موضوع الاختبار: هو يكشف، والتنقيح يصلح، والنتيجة منتج أفضل. لو اكتشف الفريق مئة defect ولم يصلح أيًا منها، لما تحسنت الجودة شيئًا.

### 2. تقييم الجودة ودعم القرارات — Evaluating Quality

الاختبار يوفّر وسيلة **لتقييم جودة موضوع الاختبار مباشرة** في مراحل مختلفة من دورة حياة التطوير: بعد كل Sprint، وقبل كل إصدار للمتجر. هذه القياسات، مثل عدد الاختبارات الناجحة والفاشلة، والـ defects المفتوحة حسب خطورتها، والتغطية المحققة، تُستخدم ضمن **نشاط أوسع لإدارة المشروع**، وتساهم في قرارات **الانتقال إلى المرحلة التالية**، ومن أهمها **قرار الإطلاق (Release Decision)**.

لاحظ أن الاختبار **يساهم** في القرار ولا يتخذه؛ القرار لمالك المنتج أو الإدارة، والاختبار يزوّدهم بمعلومات موثوقة بدل الانطباعات. فبدون اختبار يصبح السؤال «هل نُطلق؟» تخمينًا.

### 3. تمثيل المستخدمين — Representing Users

الاختبار يمنح المستخدمين **تمثيلًا غير مباشر** في مشروع التطوير. الزبون الذي يطلب العشاء، والسائق الذي يستخدم تطبيقه على الطريق، والمطعم الذي يستقبل الطلبات، لا يحضرون اجتماعات الفريق اليومية. المختبرون يحرصون على أن **فهمهم لاحتياجات هؤلاء** حاضر طوال دورة التطوير: يسألون مثلًا كيف تظهر الواجهة العربية على شاشة صغيرة، أو ماذا يحدث إذا انقطع الإنترنت عن السائق لحظة التسليم.

لماذا لا نُشرك المستخدمين أنفسهم؟ البديل الذي يذكره المنهج هو إشراك **مجموعة ممثّلة من المستخدمين** في المشروع، لكن ذلك **غالبًا غير ممكن** بسبب التكلفة العالية وصعوبة توفّر المستخدمين المناسبين. لا يمكن لفريق التوصيل أن يوظف زبائن وسائقين ومطاعم بدوام كامل ليجربوا كل تغيير.

### 4. الالتزامات والمتطلبات — Contractual, Legal and Regulatory Needs

قد يكون الاختبار **مطلوبًا** للوفاء بمتطلبات **تعاقدية أو قانونية**، أو للالتزام **بمعايير تنظيمية**. هنا لا يكون الاختبار خيارًا يقرره الفريق، بل شرطًا خارجيًا. في تطبيق التوصيل، قد يشترط عقد بوابة الدفع (طرف ثالث) اجتياز مجموعة اختبارات تكامل قبل تشغيل الدفع بالبطاقة، وقد تفرض قوانين حماية البيانات اختبار طريقة تخزين بيانات الزبائن. وفي مجالات مثل الأجهزة الطبية والطيران والقطاع المالي يكون ذلك أوضح وأشد.

### المساهمات الأربع في Sprint واحد — All Four in One Sprint

في Sprint إضافة الدفع بالمحفظة الرقمية: يجد المختبران defect في استرجاع المبلغ عند إلغاء الطلب (اكتشاف الـ defects)، ويعرضان في نهاية الـSprint نتائج الاختبارات والـ defects المتبقية ليقرر مالك المنتج هل تدخل الميزة في إصدار المتجر القادم (تقييم الجودة)، ويصرّان على تجربة الدفع بالواجهة العربية على هاتف صغير وباتصال ضعيف، كما يفعل الزبون الحقيقي (تمثيل المستخدمين)، وينفّذان اختبارات التكامل التي يشترطها مزوّد المحفظة (الالتزامات).

### لا تخلط بين — Don't Confuse

| Statement | Correct? | Why |
| --- | --- | --- |
| Testing directly raises quality | No | Quality rises when defects are removed by debugging |
| Testing helps the release decision | Yes | It provides measures used in project management |
| Testing makes the release decision | No | Stakeholders decide; testing informs |
| Only testers contribute through testing | No | Any stakeholder can use testing skills |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Before a release decision, a product manager asks: "Can we go live on Sunday?" A test report showing that all high-risk payment scenarios passed, with two low-priority known issues, turns that question from a guess into an informed decision.</p><p class="gx-ar" lang="ar" dir="rtl">قبل قرار الإطلاق، يسأل مدير المنتج: «هل نستطيع الإطلاق يوم الأحد؟». تقرير اختبار يُظهر نجاح كل سيناريوهات الدفع عالية المخاطر، مع مشكلتين معروفتين منخفضتي الأولوية، يحوّل السؤال من تخمين إلى قرار مدروس.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">For this K2 objective, be ready to match a scenario to a contribution. Note the wording: testing contributes to quality indirectly, because removing defects is done by debugging.</p><p class="gx-ar" lang="ar" dir="rtl">في هذا الهدف من مستوى K2، كن جاهزًا لربط موقف معيّن بنوع المساهمة. وانتبه للصياغة: الاختبار يساهم في الجودة بشكل غير مباشر، لأن إزالة الـ defects تتم بالتنقيح.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Saying testing "improves quality" by itself. Testing finds defects and gives information; the quality improves only when someone acts on that information and fixes the defects.</p><p class="gx-ar" lang="ar" dir="rtl">القول إن الاختبار «يحسّن الجودة» بحد ذاته. الاختبار يجد الـ defects ويقدّم معلومات؛ والجودة تتحسن فقط عندما يتصرف أحد بناءً على هذه المعلومات ويصلح الـ defects.</p></aside>
