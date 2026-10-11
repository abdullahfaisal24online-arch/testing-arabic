---
order: 6
slug: "3-2-3"
chapter: 3
group: "3.2"
section: "3.2.3"
title: "Roles and Responsibilities in Reviews"
titleAr: "الأدوار والمسؤوليات في المراجعات"
objectives: "FL-3.2.3 · K1"
minutes: 8
lo:
  FL-3.2.3: "Recall the responsibilities of the principal roles in reviews."
loAr:
  FL-3.2.3: "تتذكّر مسؤوليات الأدوار الرئيسية في المراجعات."
takeaways:
  - "Manager: decides what is reviewed and provides resources such as staff and time."
  - "Author: creates and fixes the work product under review."
  - "Moderator (facilitator): runs review meetings effectively, mediating, managing time and keeping it safe to speak."
  - "Scribe (recorder): collects anomalies from reviewers and records review information such as decisions."
  - "Reviewer: performs reviews; can be on the project, a subject matter expert or another stakeholder."
  - "Review leader: has overall responsibility, such as deciding who takes part and organising when and where."
  - "One person may take on several roles, and ISO/IEC 20246 describes other, more detailed roles."
takeawaysAr:
  - "المدير: يقرر ما الذي يُراجَع، ويوفر الموارد مثل الأشخاص والوقت."
  - "الكاتب: ينشئ المُخرَج قيد المراجعة ويصلحه."
  - "المنسّق (الميسّر): يدير اجتماعات المراجعة بفعالية، بالوساطة وإدارة الوقت وضمان بيئة آمنة للحديث."
  - "المدوّن: يجمع الحالات الشاذة من المراجعين ويسجّل معلومات المراجعة مثل القرارات."
  - "المراجع: يُجري المراجعة؛ وقد يكون من المشروع، أو خبيرًا في الموضوع، أو صاحب مصلحة آخر."
  - "قائد المراجعة: يتحمل المسؤولية الكاملة، مثل تحديد المشاركين وتنظيم الزمان والمكان."
  - "قد يتولى شخص واحد عدة أدوار، ويصف معيار ISO/IEC 20246 أدوارًا أخرى أكثر تفصيلًا."
terms:
  - en: "Moderator"
    ar: "المنسّق"
    def: "The review role that ensures review meetings run effectively, including mediation, time management and a safe environment. Also called facilitator."
    defAr: "دور في المراجعة يضمن سير الاجتماعات بفعالية، ويشمل الوساطة وإدارة الوقت وتوفير بيئة آمنة. ويسمّى أيضًا الميسّر."
    match: ["Moderator", "moderator", "facilitator"]
  - en: "Scribe"
    ar: "المدوّن"
    def: "The review role that collates anomalies from reviewers and records review information. Also called recorder."
    defAr: "دور في المراجعة يجمع الحالات الشاذة من المراجعين ويسجّل معلومات المراجعة. ويسمّى أيضًا المسجّل."
    match: ["Scribe", "scribe", "recorder"]
  - en: "Review Leader"
    ar: "قائد المراجعة"
    def: "The review role that takes overall responsibility for the review, such as deciding who is involved and organising when and where it takes place."
    defAr: "دور في المراجعة يتحمل المسؤولية الكاملة عنها، مثل تحديد المشاركين وتنظيم زمانها ومكانها."
    match: ["Review Leader", "review leader"]
---
تشارك في المراجعات **أطراف مختلفة من أصحاب المصلحة**، وقد يتولى كل منهم **دورًا أو أكثر**. توزيع الأدوار ليس شكليًا: حين يعرف كل شخص ما المطلوب منه بالضبط، لا يضيع الاجتماع في نقاش «من يكتب؟» و«من يقرر؟»، ولا تسقط ملاحظة مهمة لأن الجميع ظن أن غيره سجّلها. يذكر المنهج **ستة أدوار رئيسية**:

| Role | Also known as | Main responsibility |
| --- | --- | --- |
| Manager | — | Decides what is reviewed; provides resources (staff, time) |
| Author | — | Creates and fixes the work product |
| Moderator | Facilitator | Runs review meetings effectively |
| Scribe | Recorder | Collates anomalies; records review information |
| Reviewer | — | Performs the review |
| Review leader | — | Overall responsibility for the review |

### المدير — Manager

**يقرر ما الذي يُراجَع**، و**يوفّر الموارد** اللازمة، مثل الأشخاص والوقت. في تطبيق التوصيل، يقرر مدير الهندسة أن كل تغيير في منطق الدفع يمر بمراجعة رسمية، ويخصص لها ساعتين من وقت الفريق في كل sprint. بدون هذا القرار وهذه الموارد تُعتبر المراجعة «عملًا إضافيًا» يُلغى عند أول ضغط.

### الكاتب — Author

**ينشئ** المُخرَج قيد المراجعة و**يصلحه** بعد المراجعة. مثلًا، مالك المنتج كاتب قصة «إلغاء الطلب»، والمطوّر كاتب الـ Pull Request الخاص بحساب رسوم التوصيل.

### المنسّق — Moderator (Facilitator)

يضمن **سير اجتماعات المراجعة بفعالية**، ويشمل ذلك ثلاث مهام: **الوساطة (mediation)** عند الخلاف، و**إدارة الوقت**، وتوفير **بيئة مراجعة آمنة يستطيع فيها الجميع التحدث بحرية**. البيئة الآمنة مهمة لأن المختبر المبتدئ الذي يخشى انتقاد عمل مطوّر أقدم سيسكت عن defect حقيقي.

### المدوّن — Scribe (Recorder)

**يجمع الحالات الشاذة** من المراجعين، و**يسجّل معلومات المراجعة**، مثل **القرارات** و**الحالات الشاذة الجديدة** التي تظهر أثناء اجتماع المراجعة. بدونه تبقى نتائج الاجتماع في ذاكرة الحاضرين فقط.

### المراجع — Reviewer

**يُجري المراجعة**. وقد يكون **شخصًا يعمل في المشروع**، أو **خبيرًا في الموضوع (subject matter expert)**، أو **أي صاحب مصلحة آخر**. في مراجعة شاشة تتبّع الطلب، قد يكون المراجعون مختبرًا من الفريق، وخبيرًا في خدمة الخرائط، وسائق توصيل يستخدم التطبيق يوميًا.

### قائد المراجعة — Review Leader

يتحمل **المسؤولية الكاملة** عن المراجعة، مثل **تحديد من سيشارك**، و**تنظيم زمان المراجعة ومكانها**. الفرق عن المنسّق: القائد مسؤول عن المراجعة كلها من أولها إلى آخرها، والمنسّق مسؤول عن حسن سير الاجتماع.

### ملاحظات — Notes

- **أدوار أخرى أكثر تفصيلًا** ممكنة، كما يصفها معيار ISO/IEC 20246.
- قد **يتولى شخص واحد أكثر من دور**: في فريق من سبعة أشخاص، قد يكون المختبر الأول قائد المراجعة ومنسّقها معًا. لكن في **التفتيش (Inspection)** لا يجوز أن يكون الكاتب قائد المراجعة أو المدوّن (القسم 3.2.4).

### مثال: مراجعة واحدة بكل أدوارها — One Review, All Roles

في مراجعة مواصفات واجهة الدفع في تطبيق التوصيل: قرر **مدير** الهندسة أن المواصفات تُراجَع قبل البرمجة وخصص لها الوقت. **قائد المراجعة**، وهو المختبر الأول، اختار المشاركين وحدد موعد الاجتماع. **الكاتب** مطوّر الخلفية الذي كتب المواصفات. **المراجعون** مختبر آخر ومطوّر تطبيق Android ومالك المنتج. أثناء الاجتماع أدار **المنسّق** النقاش وأوقف جدالًا طويلًا حول تسمية الحقول، وسجّل **المدوّن** كل قرار. وبعد الاجتماع أصلح الكاتب المواصفات.

<figure class="gx-figure gx-spectrum" aria-label="Who does what in a review meeting."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Before</b><span>Manager decides the scope; review leader picks people and schedules.</span></div><div class="gx-spectrum-item"><b>During</b><span>Moderator runs the meeting; reviewers raise anomalies; scribe records.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>After</b><span>Author fixes the work product.</span></div></div><figcaption>Who does what in a review meeting.</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In a technical review of an API design, the tech lead (review leader) invites three people. A senior developer acts as moderator and stops a side discussion after five minutes. A tester is a reviewer and asks about error codes. Another developer is the scribe and records the five decisions. The author updates the design the next day.</p><p class="gx-ar" lang="ar" dir="rtl">في مراجعة تقنية (Technical Review) لتصميم API، يدعو القائد التقني (قائد المراجعة) ثلاثة أشخاص. مطوّر أول يتولى دور المنسّق، ويوقف نقاشًا جانبيًا بعد خمس دقائق. مختبر يشارك كمراجع ويسأل عن رموز الأخطاء. مطوّر آخر هو المدوّن، ويسجّل القرارات الخمسة. والكاتب يحدّث التصميم في اليوم التالي.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Two pairs are easy to swap: moderator runs the meeting, review leader owns the whole review; manager decides what to review and gives resources, review leader decides who participates and when.</p><p class="gx-ar" lang="ar" dir="rtl">زوجان يسهل الخلط بينهما: المنسّق يدير الاجتماع، وقائد المراجعة مسؤول عن المراجعة كلها؛ والمدير يقرر ما يُراجَع ويوفر الموارد، أما قائد المراجعة فيقرر من يشارك ومتى.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking the author is not part of the review. The author is a review role in its own right: creating and correcting the work product is their responsibility in the review.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الكاتب ليس جزءًا من المراجعة. الكاتب دور قائم بذاته فيها: إنشاء المُخرَج وتصحيحه من مسؤوليته ضمن عملية المراجعة.</p></aside>
