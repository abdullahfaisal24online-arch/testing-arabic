---
order: 2
slug: "2-1-2"
chapter: 2
group: "2.1"
section: "2.1.2"
title: "Software Development Lifecycle and Good Testing Practices"
titleAr: "دورة حياة التطوير وممارسات الاختبار الجيدة"
objectives: "FL-2.1.2 · K1"
minutes: 8
lo:
  FL-2.1.2: "Recall good testing practices that apply to all software development lifecycles."
loAr:
  FL-2.1.2: "تتذكّر ممارسات الاختبار الجيدة التي تنطبق على كل دورات حياة التطوير."
takeaways:
  - "Every development activity has a corresponding test activity, so all development is quality-controlled."
  - "Different test levels have specific, different objectives, so testing is comprehensive without redundancy."
  - "Test analysis and design for a level start during the corresponding development phase."
  - "Testers review work products as soon as drafts are available, supporting shift left."
takeawaysAr:
  - "لكل نشاط تطوير نشاط اختبار مقابل، فيخضع كل التطوير لضبط الجودة."
  - "لكل مستوى اختبار أهداف محددة ومختلفة، فيكون الاختبار شاملًا دون تكرار."
  - "تحليل الاختبار وتصميمه لكل مستوى يبدآن خلال مرحلة التطوير المقابلة."
  - "المختبرون يراجعون مخرجات العمل فور توفر مسوداتها، دعمًا لنهج النقل لليسار."
terms:
  - en: "Test Level"
    ar: "مستوى الاختبار"
    def: "A specific instantiation of a test process, such as component testing or system testing."
    defAr: "تجسيد محدد لعملية الاختبار، مثل اختبار المكوّنات أو اختبار النظام."
    match: ["Test Level", "test level", "test levels"]
---
بعض ممارسات الاختبار مرتبطة بنموذج تطوير معيّن، لكن هناك ممارسات **مستقلة عن نموذج الـ SDLC المختار**: تصلح لمشروع شلال، ولفريق Scrum، ولخط DevOps. يذكر المنهج أربعًا منها. وكلها تخدم فكرة واحدة: أن يرافق الاختبار التطوير من أوله إلى آخره، بدل أن يكون مرحلة منفصلة في النهاية.

<figure class="gx-figure gx-spectrum" aria-label="Good testing practices, independent of the chosen SDLC."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>1 · A test activity for every development activity</b><span>All development activities are subject to quality control.</span></div><div class="gx-spectrum-item"><b>2 · Distinct objectives per test level</b><span>Comprehensive testing without redundancy.</span></div><div class="gx-spectrum-item"><b>3 · Early test analysis and design</b><span>Start during the matching development phase.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>4 · Review drafts early</b><span>Testers join as soon as drafts exist.</span></div></div><figcaption>Good testing practices, independent of the chosen SDLC.</figcaption></figure>

### 1. لكل نشاط تطوير نشاط اختبار مقابل — A Test Activity for Every Development Activity

لكل نشاط تطوير يجب أن يوجد **نشاط اختبار مقابل**، حتى **يخضع كل نشاط تطوير لضبط الجودة (quality control)**. السبب: أي نشاط بلا اختبار مقابل هو مكان يمكن أن تتسرب منه الـ defects دون أن يلاحظها أحد. في تطبيق التوصيل: كتابة قصة «إلغاء الطلب» يقابلها مراجعة القصة ومعايير قبولها، وتصميم واجهة الـ API يقابله مراجعة التصميم واختبار تكامل المكوّنات، وكتابة الشيفرة يقابلها اختبار المكوّنات والتحليل الساكن.

### 2. أهداف مختلفة لكل مستوى — Distinct Objectives per Test Level

لكل **مستوى اختبار (test level)** (القسم 2.2.1) **أهداف اختبار محددة ومختلفة**. هذا يجعل الاختبار **شاملًا بالقدر المناسب** وفي الوقت نفسه **يتجنّب التكرار (redundancy)**. لو اختبر كل مستوى الأشياء نفسها لضاع الوقت في تكرار الفحوص، وبقيت جوانب أخرى بلا فحص. مثال: اختبار المكوّنات يتحقق من أن دالة حساب رسوم التوصيل تعيد 1.50 للطلب الأقل من 20 دينارًا؛ أما اختبار النظام فلا يعيد هذا الفحص بكل قيمه، بل يتحقق من أن الرسوم تظهر صحيحة في رحلة الطلب كاملة من السلة حتى الإيصال.

### 3. التحليل والتصميم يبدآن مع مرحلة التطوير المقابلة — Early Test Analysis and Design

**تحليل الاختبار وتصميمه لمستوى معيّن يبدآن خلال مرحلة التطوير المقابلة له** في دورة الحياة، لا بعد انتهائها. بهذا يلتزم الاختبار بمبدأ **الاختبار المبكر** (القسم 1.3). مثلًا: حين يكتب مالك المنتج معايير قبول ميزة الكوبونات، يبدأ المختبر فورًا في استخراج شروط الاختبار منها، مثل الكوبون المنتهي وكوبونين في طلب واحد، قبل أن تُكتب الشيفرة. وغالبًا يكشف هذا التحليل نفسه أسئلة لم يجب عنها أحد.

### 4. مراجعة المسودات فور توفرها — Review Drafts Early

**يشارك المختبرون في مراجعة مخرجات العمل بمجرد توفر مسوداتها**، ولا ينتظرون النسخة النهائية. هذا الاختبار والاكتشاف المبكر للـ defects يدعم نهج **النقل لليسار (shift left)** (القسم 2.1.5). الـ defect الذي يُكتشف في مسودة يُصلح بتعديل جملة؛ أما بعد البرمجة فيحتاج تعديل الشيفرة وإعادة الاختبار.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The product owner shares a draft story: "A customer can cancel an order." The tester comments within an hour: "Until which state? The order states say cancellation is possible only before Out for delivery. Is the payment refunded for card and wallet?" Two defects are prevented before any code is written.</p><p class="gx-ar" lang="ar" dir="rtl">يشارك مالك المنتج مسودة قصة: «يمكن للزبون إلغاء الطلب». يعلّق المختبر خلال ساعة: «حتى أي حالة؟ حالات الطلب تقول إن الإلغاء ممكن فقط قبل Out for delivery. وهل يُسترد المبلغ في الدفع بالبطاقة والمحفظة؟». اثنان من الـ defects تم منعهما قبل كتابة أي شيفرة.</p></aside>

### كيف تعمل الممارسات الأربع معًا؟ — How They Fit Together

الممارسة الأولى تضمن ألا يبقى نشاط تطوير بلا رقابة، والثانية توزّع هذه الرقابة على المستويات دون تكرار، والثالثة والرابعة تحددان **التوقيت**: ابدأ مبكرًا، ولا تنتظر اكتمال الوثائق. لذلك تجد في الامتحان أن هذه الممارسات ترتبط بمفاهيم أخرى من المنهج: الأولى بضبط الجودة، والثانية بمستويات الاختبار، والثالثة بمبدأ الاختبار المبكر، والرابعة بالنقل لليسار. وتذكّر أنها **لا تعتمد على النموذج**: فريق الشلال يطبّقها بمراجعة وثيقة المتطلبات، وفريق Scrum يطبّقها بمراجعة قصة المستخدم في جلسة التحضير (refinement).

| Practice | Linked concept |
| --- | --- |
| Test activity for every development activity | Quality control |
| Specific, different objectives per level | Test levels, no redundancy |
| Analysis and design start in the matching phase | Early testing principle |
| Review drafts as soon as available | Shift left |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">This is K1: recognise the four practices. A distractor might say "each test level should cover the same objectives to be safe"; the syllabus says the opposite: different, specific objectives to avoid redundancy.</p><p class="gx-ar" lang="ar" dir="rtl">هذا هدف K1: تعرّف على الممارسات الأربع. قد يقول خيار مضلل «يجب أن يغطي كل مستوى اختبار الأهداف نفسها للاحتياط»؛ والمنهج يقول العكس: أهداف محددة ومختلفة لتجنّب التكرار.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Waiting for a "final" document before reviewing it. Good practice is to review drafts as soon as they are available.</p><p class="gx-ar" lang="ar" dir="rtl">انتظار النسخة «النهائية» من الوثيقة قبل مراجعتها. الممارسة الجيدة هي مراجعة المسودات فور توفرها.</p></aside>
