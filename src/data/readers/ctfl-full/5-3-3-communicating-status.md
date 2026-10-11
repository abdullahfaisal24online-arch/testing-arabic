---
order: 14
slug: "5-3-3"
chapter: 5
group: "5.3"
section: "5.3.3"
title: "Communicating the Status of Testing"
titleAr: "إيصال حالة الاختبار"
objectives: "FL-5.3.3 · K2"
minutes: 10
lo:
  FL-5.3.3: "Give examples of how to communicate the status of testing."
loAr:
  FL-5.3.3: "تعطي أمثلة على طرق إيصال حالة الاختبار."
takeaways:
  - "The best way to communicate test status depends on test management concerns, organisational test strategies, regulatory standards and, for self-organising teams, the team itself."
  - "Options: verbal communication, dashboards (CI/CD dashboards, task boards, burn-down charts), electronic channels (email, chat), online documentation, and formal test reports."
  - "One or more options can be used; more formal communication may suit distributed teams where direct face-to-face contact is not always possible."
  - "Different stakeholders are interested in different types of information, so communication should be tailored accordingly."
takeawaysAr:
  - "أفضل طريقة لإيصال حالة الاختبار تعتمد على اهتمامات إدارة الاختبار، واستراتيجيات الاختبار في المؤسسة، والمعايير التنظيمية، وفي الفرق ذاتية التنظيم على الفريق نفسه."
  - "الخيارات: التواصل الشفهي، ولوحات المتابعة (لوحات CI/CD، ولوحات المهام، ومخططات الإنجاز المتبقي)، والقنوات الإلكترونية (الإيميل، والشات)، والتوثيق الإلكتروني، وتقارير الاختبار الرسمية."
  - "يمكن استخدام خيار أو أكثر؛ والتواصل الأكثر رسمية قد يناسب الفرق الموزعة التي لا يتاح لها التواصل المباشر دائمًا."
  - "أصحاب المصلحة المختلفون يهتمون بأنواع مختلفة من المعلومات، لذا يجب تكييف التواصل حسبهم."
terms:
  - en: "Burn-down Chart"
    ar: "مخطط الإنجاز المتبقي"
    def: "A chart showing the remaining work over time in an iteration or release."
    defAr: "مخطط يُظهر العمل المتبقي عبر الزمن في دورة أو إصدار."
---
معرفة حالة الاختبار لا تفيد إن بقيت في رأس المختبر. السؤال في هذا القسم: **كيف** نوصل هذه الحالة إلى من يحتاجها؟ والجواب في السيليبس واضح: **لا توجد وسيلة واحدة هي الأفضل دائمًا**. التقرير الرسمي الذي يناسب جهة رقابية قد يكون عبئًا على فريق صغير يجلس في غرفة واحدة، والكلمة الشفهية التي تكفي هذا الفريق لا تترك أثرًا يمكن لمدقق أن يراجعه.

### ما الذي يحدد الوسيلة؟ — What Decides the Means

أفضل وسيلة لإيصال حالة الاختبار **تختلف** حسب:

- **اهتمامات إدارة الاختبار:** ما الذي تريد الإدارة متابعته؟ مدير يركّز على المخاطر المتبقية قد يطلب لوحة مخاطر أسبوعية، لا قائمة حالات الاختبار.
- **استراتيجيات الاختبار في المؤسسة:** إذا نصّت استراتيجية الشركة على تقرير إكمال لكل إصدار، فالفريق ملزم به.
- **المعايير التنظيمية (Regulatory Standards):** المجالات الخاضعة لرقابة تحتاج دليلًا موثقًا. تكامل تطبيق التوصيل مع المدفوعات بالبطاقات قد يفرض الاحتفاظ بنتائج اختبار مكتوبة يمكن تدقيقها.
- **الفريق نفسه، في حالة الفرق ذاتية التنظيم (Self-organizing Teams):** فريق Scrum يقرر بنفسه كيف يتشارك الحالة، كما رأينا في القسم 1.5.2.

### الخيارات — Options

<figure class="gx-figure gx-spectrum" aria-label="Ways to communicate the status of testing."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Verbal</b><span>Talking with team members and other stakeholders.</span></div><div class="gx-spectrum-item"><b>Dashboards</b><span>CI/CD dashboards, task boards, burn-down charts.</span></div><div class="gx-spectrum-item"><b>Electronic channels</b><span>Email, chat.</span></div><div class="gx-spectrum-item"><b>Online documentation</b><span>Wiki pages and shared documents.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Formal test reports</b><span>Progress and completion reports (5.3.2).</span></div></div><figcaption>Ways to communicate the status of testing.</figcaption></figure>

**1. التواصل الشفهي مع أعضاء الفريق وأصحاب المصلحة الآخرين.** في الاجتماع اليومي يقول مختبر فريق التوصيل: «اختبارات الكوبونات نجحت، والدفع بالمحفظة متوقف بسبب defect مفتوح». هذا أسرع وسيلة وأغناها بالنقاش، لكنه لا يترك سجلًا، ولا يصل إلى من لم يحضر.

**2. لوحات المتابعة (Dashboards).** يذكر السيليبس ثلاثة أمثلة:

- **لوحة CI/CD:** تُظهر بعد كل commit هل نجح البناء والاختبارات المؤتمتة، باللون الأخضر أو الأحمر. يراها الجميع دون أن يسأل أحدًا.
- **لوحة المهام (Task Board):** بطاقات القصص في أعمدة مثل «قيد التطوير» و«قيد الاختبار» و«منجز»؛ تكدّس البطاقات في عمود الاختبار رسالة بحد ذاته.
- **مخطط الإنجاز المتبقي (Burn-down Chart):** خط ينزل يومًا بعد يوم بما تبقى من عمل في الـ sprint. إذا بقي الخط مرتفعًا في منتصف الـ sprint، فالكل يرى أن الفريق متأخر.

**3. قنوات التواصل الإلكتروني (Electronic Communication Channels):** البريد الإلكتروني والشات. قناة شات خاصة بالإصدار تنشر فيها نتائج الانحدار الليلي تلقائيًا، وبريد لأصحاب المصلحة خارج الفريق.

**4. التوثيق الإلكتروني (Online Documentation):** صفحة wiki للإصدار فيها حالة الاختبار والمخاطر المفتوحة وروابط التقارير، تُحدَّث باستمرار ويرجع إليها أي شخص في أي وقت.

**5. تقارير الاختبار الرسمية (Formal Test Reports):** تقارير التقدّم والإكمال من القسم 5.3.2، بقالب ثابت ومحتوى محدد.

### الجمع بين الخيارات وتكييفها — Combine and Tailor

يمكن استخدام **خيار واحد أو أكثر**، والأكثر شيوعًا هو الجمع. وبما أن **أصحاب المصلحة المختلفين يهتمون بأنواع مختلفة من المعلومات**، يجب **تكييف التواصل** حسبهم:

| Stakeholder | Information they want | Means in the delivery-app team |
| --- | --- | --- |
| Developers | Which build and which test failed | CI/CD dashboard, chat |
| Product owner | Which stories are ready, open risks | Daily stand-up, task board, burn-down chart |
| Restaurant operations manager | Will the new dashboard be ready for the launch date? | Short weekly email |
| Management, auditors | Release readiness, residual risks, evidence | Formal test completion report, wiki page |

**مثال: حالة واحدة، ثلاث رسائل.** يوم الأربعاء اكتشف المختبر أن الدفع بالمحفظة الرقمية يفشل عند المبالغ فوق 50 دينارًا، والـ defect مفتوح بأولوية عالية. هذه الحالة نفسها تُوصَل بثلاث طرق:

- **للمطوّرين** في قناة الشات: رقم الـ defect، والبناء، ورابط سجل الاختبار الفاشل، حتى يبدأ أحدهم الإصلاح فورًا.
- **لمالك المنتج** في الاجتماع اليومي: «قصة المحفظة لن تُغلق اليوم؛ إذا لم يُصلح الـ defect حتى الخميس نقترح إطلاق المحفظة بحد أقصى 50 دينارًا مؤقتًا». هنا المعلومة مربوطة بقرار يملكه هو.
- **للإدارة** في التقرير الأسبوعي: سطر واحد في بند المخاطر: «خطر على موعد إطلاق المحفظة، والبديل جاهز».

المعلومة واحدة، لكن التفاصيل واللغة والقناة تغيّرت حسب ما يحتاجه كل طرف ليتصرف.

### خطوات اختيار الوسيلة — Step by Step

1. **حدّد الجمهور** وما القرار الذي سيتخذه بناءً على المعلومة.
2. **تحقق من القيود:** هل تفرض الاستراتيجية أو جهة رقابية شكلًا معينًا؟
3. **اختر الوسيلة الأخف التي تكفي:** لا تكتب تقريرًا رسميًا لما يكفيه سطر في الشات.
4. **اجمع الوسائل عند الحاجة:** لوحة للمتابعة اليومية، وتقرير عند المحطات.

### الفرق الموزعة — Distributed Teams

التواصل **الأكثر رسمية** قد يكون أنسب لـ **الفرق الموزعة**، حيث لا يكون التواصل المباشر وجهًا لوجه ممكنًا دائمًا بسبب **المسافة الجغرافية** أو **فروق التوقيت**. السبب: في الفريق الموزع لا يسمع أحد حديث الممر، ولا يمكن طرح سؤال سريع إذا كان الزميل نائمًا. لذلك يحتاج الفريق إلى معلومات مكتوبة، كاملة، بصيغة متفق عليها، يقرؤها كل طرف في وقته دون أن يحتاج إلى توضيح.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A co-located Scrum team shares status in the daily stand-up and on a task board. The same company's outsourced test team in another time zone sends a short written progress report every evening, with a link to the CI dashboard.</p><p class="gx-ar" lang="ar" dir="rtl">فريق Scrum يعمل في مكان واحد يشارك الحالة في الاجتماع اليومي وعلى لوحة المهام. أما فريق الاختبار الخارجي للشركة نفسها، في منطقة زمنية أخرى، فيرسل كل مساء تقرير تقدّم مكتوبًا قصيرًا مع رابط للوحة CI.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2 "give examples": dashboards include CI/CD dashboards, task boards and burn-down charts. Distributed teams → more formal communication.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K2 «أعطِ أمثلة»: لوحات المتابعة تشمل لوحات CI/CD ولوحات المهام ومخططات الإنجاز المتبقي. والفرق الموزعة ← تواصل أكثر رسمية.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking formal test reports are the only acceptable way. Verbal updates, dashboards and chat are all valid, chosen to fit the context.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن تقارير الاختبار الرسمية هي الطريقة الوحيدة المقبولة. التحديثات الشفهية ولوحات المتابعة والشات كلها صحيحة، وتُختار بما يناسب السياق.</p></aside>
