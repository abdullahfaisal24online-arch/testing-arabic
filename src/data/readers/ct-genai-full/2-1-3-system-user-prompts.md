---
order: 3
slug: "2-1-3"
chapter: 2
group: "2.1"
section: "2.1.3"
title: "System Prompt and User Prompt"
titleAr: "توجيه النظام وتوجيه المستخدم"
objectives: "GenAI-2.1.3 · K2"
minutes: 7
lo:
  GenAI-2.1.3: "Explain how a system prompt differs from a user prompt."
takeaways:
  - "The system prompt sets overall behaviour, role and limits; it is set once and stays constant."
  - "The user prompt carries the current task and changes with every interaction."
  - "The model answers using both together, so each needs to be clear: role and constraints in one, a focused task in the other."
terms:
  - en: "System Prompt"
    ar: "توجيه النظام"
    def: "Predefined instructions, usually set by developers or testers, that define a model's role, behaviour and limits for a whole session."
    match: ["System prompt"]
  - en: "User Prompt"
    ar: "توجيه المستخدم"
    def: "The input or question a user sends in a single interaction."
    match: ["User prompt"]
---
يتعامل النموذج في الأدوات الحوارية مع نوعين من التوجيه. يأخذهما معًا عند توليد الاستجابة: توجيه النظام الثابت، وتوجيه المستخدم الحالي.

| Compared on | System prompt | User prompt |
|---|---|---|
| Purpose | قواعد السلوك العامة والدور والحدود ومعايير التشغيل | المهمة أو السؤال الحالي وبياناته وتنسيق نتيجته |
| Set by | يضبطه عادة المطوّر أو المختبِر عند إعداد الأداة | يكتبه مستخدم الأداة في كل تفاعل |
| Lifetime | يُضبط مرة في بداية الجلسة ويبقى ثابتًا | يتغير مع كل سؤال أو مهمة |
| Visibility | غالبًا غير ظاهر وغير قابل للتعديل في واجهة المستخدم | ظاهر للمستخدم ويشكّل السياق المباشر للرد |

<figure class="gx-figure" aria-label="Example system prompt and user prompt"><div class="gx-tokens-row"><span class="gx-tokens-label">System</span><span class="gx-tokens-input">You are a software testing assistant. Answer clearly, base your review on the sources given, and separate assumptions from facts.</span></div><div class="gx-tokens-row"><span class="gx-tokens-label">User</span><span class="gx-tokens-input">Review the sign-up user story below and list its ambiguities in a table.</span></div><figcaption>The system prompt stays the same across the session; the user prompt changes each turn.</figcaption></figure>

كيف يعملان معًا؟ يُضبط توجيه النظام مرة واحدة في بداية الجلسة ويبقى ثابتًا، ثم تأتي توجيهات المستخدم واحدًا تلو الآخر. في كل رد، يأخذ النموذج الاثنين معًا: الإطار الثابت من توجيه النظام، والطلب الحالي من توجيه المستخدم. لذلك لا يحتاج المستخدم أن يعيد كتابة الدور والقواعد في كل رسالة.

مثال من بيئة اختبار: فريق يبني مساعدًا داخليًا لمراجعة تقارير العيوب. توجيه النظام، الذي يضبطه مهندس الأداة، يقول: «أنت مراجع تقارير عيوب. قيّم كل تقرير مقابل قالب الفريق. لا تخترع خطوات إعادة إنتاج. اذكر الحقول الناقصة». بعدها يكتب المختبِر في كل مرة: «راجع هذا التقرير» ويلصق التقرير. المختبِر لا يرى توجيه النظام، لكنه يحصل على مراجعات متسقة.

### ما يجعل كل نوع فعّالًا — Making Each Effective

توجيه النظام يحدد الدور والقيود بوضوح، وقد يتضمن سياقًا وتعليمات عامة عن شكل المخرجات المتوقع. أما توجيه المستخدم فيكون مركّزًا ومنظمًا: تعليمات صريحة، وسياق مناسب، وتنسيق مطلوب للنتيجة.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label">Exam tip</p><p>Remember four contrasts: who sets it (developer or tester vs end user), how long it lasts (whole session vs one interaction), visibility (usually hidden vs visible), and content (role, rules, constraints vs the specific task). The model uses both together for every response.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Assuming a system prompt guarantees safety or correctness. It shapes behaviour, but security controls and output review are still needed.</p></aside>
