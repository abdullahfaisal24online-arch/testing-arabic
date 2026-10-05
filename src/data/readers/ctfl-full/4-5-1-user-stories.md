---
order: 12
slug: "4-5-1"
chapter: 4
group: "4.5"
section: "4.5.1"
title: "Collaborative User Story Writing"
titleAr: "كتابة قصص المستخدم بشكل تعاوني"
objectives: "FL-4.5.1 · K2"
minutes: 7
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
takeawaysAr:
  - "قصة المستخدم تمثّل ميزة ذات قيمة لمستخدم النظام أو مشتريه."
  - "جوانبها الحاسمة الثلاثة (3 Cs): البطاقة، والحوار، والتأكيد."
  - "الصيغة الشائعة: «بصفتي [دور]، أريد [هدفًا]، لكي [قيمة عمل]»، تتبعها معايير القبول."
  - "الكتابة التعاونية تستخدم أساليب مثل العصف الذهني والخرائط الذهنية لبناء رؤية مشتركة."
  - "القصص الجيدة تحقق INVEST: مستقلة، وقابلة للتفاوض، وذات قيمة، وقابلة للتقدير، وصغيرة، وقابلة للاختبار. وإذا لم يعرف صاحب المصلحة كيف يختبر القصة، فقد لا تكون واضحة بما يكفي."
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
---
**قصة المستخدم (User Story)** تمثّل ميزة ذات **قيمة لمستخدم النظام أو مشتريه**. لها ثلاثة جوانب حاسمة، تسمّى معًا **«3 Cs»**:

<figure class="gx-figure gx-spectrum" aria-label="The 3 Cs of a user story."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Card</b><span>The medium describing the story, e.g. an index card or an entry in an electronic board.</span></div><div class="gx-spectrum-item"><b>Conversation</b><span>Explains how the software will be used; can be documented or verbal.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Confirmation</b><span>The acceptance criteria.</span></div></div><figcaption>The 3 Cs of a user story.</figcaption></figure>

- **البطاقة (Card):** الوسيط الذي يصف القصة، مثل بطاقة ورقية أو عنصر في لوحة إلكترونية.
- **الحوار (Conversation):** يشرح كيف ستُستخدم البرمجية، ويمكن أن يكون موثقًا أو شفهيًا.
- **التأكيد (Confirmation):** **معايير القبول** (القسم 4.5.2).

### الصيغة الشائعة — Common Format

> As a **[role]**, I want **[goal to be accomplished]**, so that I can **[resulting business value for the role]**

ثم تتبعها **معايير القبول**.

### الكتابة التعاونية — Collaborative Authorship

يمكن استخدام أساليب مثل **العصف الذهني** و**الخرائط الذهنية**. التعاون يسمح للفريق بالوصول إلى **رؤية مشتركة** لما يجب تسليمه، بأخذ ثلاث وجهات نظر بالحسبان:

- **العمل (Business):** القيمة والهدف.
- **التطوير (Development):** كيف يُبنى.
- **الاختبار (Testing):** كيف نتأكد منه.

### معايير INVEST — Good Stories

القصص الجيدة يجب أن تكون:

| Letter | Meaning | المعنى |
| --- | --- | --- |
| I | Independent | مستقلة عن غيرها |
| N | Negotiable | قابلة للتفاوض |
| V | Valuable | ذات قيمة |
| E | Estimable | قابلة لتقدير الجهد |
| S | Small | صغيرة |
| T | Testable | قابلة للاختبار |

إذا **لم يعرف صاحب المصلحة كيف يختبر** قصة مستخدم، فقد يدل ذلك على أن القصة **غير واضحة بما يكفي**، أو لا تعكس شيئًا ذا قيمة له، أو أنه يحتاج مساعدة في الاختبار.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">"As a returning customer, I want to reorder a previous order in one tap, so that I save time on my weekly groceries." In the conversation, the tester asks: what if an item is out of stock, or its price changed? Those answers become acceptance criteria.</p><p class="gx-ar" lang="ar" dir="rtl">«بصفتي عميلًا متكررًا، أريد إعادة طلب طلبية سابقة بنقرة واحدة، لكي أوفّر الوقت في مشترياتي الأسبوعية». في الحوار يسأل المختبر: ماذا لو نفد أحد المنتجات، أو تغيّر سعره؟ هذه الإجابات تصبح معايير قبول.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Card = the medium, Conversation = how it will be used, Confirmation = acceptance criteria. And "T" in INVEST is Testable, the tester's main contribution.</p><p class="gx-ar" lang="ar" dir="rtl">البطاقة = الوسيط، والحوار = كيف ستُستخدم، والتأكيد = معايير القبول. وحرف «T» في INVEST يعني قابلة للاختبار، وهي المساهمة الأساسية للمختبر.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating the user story card as the whole requirement. The conversation and the confirmation (acceptance criteria) are equally part of the story.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار بطاقة القصة هي المتطلب كله. الحوار والتأكيد (معايير القبول) جزء من القصة بالقدر نفسه.</p></aside>
