---
order: 8
slug: "3-3-1"
chapter: 3
group: "3.3"
section: "3.3.1"
title: "The Impact of Using GenAI on Energy Consumption and CO₂ Emissions"
titleAr: "أثر استخدام الذكاء التوليدي على استهلاك الطاقة وانبعاثات الكربون"
objectives: "GenAI-3.3.1 · K2 / HO-3.3.1 · H1"
minutes: 14
lo:
  GenAI-3.3.1: "Explain how task characteristics and model usage affect GenAI energy use in testing."
  HO-3.3.1: "Use a simulator to estimate energy and CO2 emissions for given GenAI test tasks."
loAr:
  GenAI-3.3.1: "تشرح كيف تؤثر خصائص المهمة وطريقة استخدام النموذج على استهلاك GenAI للطاقة في الاختبار."
  HO-3.3.1: "تستخدم محاكيًا لتقدير الطاقة وانبعاثات CO₂ لمهام اختبار معطاة بالذكاء التوليدي."
takeaways:
  - "Energy use depends on task characteristics (such as complexity: an image costs far more than text) and on model usage (the computational resources required and the number of interactions)."
  - "One request looks small, but the impact adds up with volume."
  - "Avoid unnecessary repeats, reuse valid results and right-size the model, without losing critical coverage."
  - "Equal energy does not mean equal emissions: the electricity source matters."
  - "Accurate data on GenAI's environmental impact is hard to get, so treat any per-request figure as an estimate, not a constant."
  - "The syllabus names limiting unnecessary model interactions as a key best practice."
takeawaysAr:
  - "استهلاك الطاقة يعتمد على خصائص المهمة (مثل التعقيد: توليد صورة يكلّف أكثر بكثير من النص) وعلى طريقة استخدام النموذج (موارد الحوسبة المطلوبة وعدد التفاعلات)."
  - "الطلب الواحد يبدو صغيرًا، لكن الأثر يتراكم مع حجم الاستخدام."
  - "تجنّب التكرار غير الضروري، وأعد استخدام النتائج الصالحة، واختر نموذجًا بحجم مناسب، دون خسارة تغطية حرجة."
  - "تساوي الطاقة لا يعني تساوي الانبعاثات: مصدر الكهرباء مهم."
  - "البيانات الدقيقة عن الأثر البيئي لـ GenAI صعبة المنال، فتعامل مع أي رقم للطلب الواحد على أنه تقدير، لا ثابت."
  - "يذكر المنهج الحدّ من تفاعلات النموذج غير الضرورية ممارسةً أساسية."
terms:
  - en: "CO2e"
    ar: "مكافئ ثاني أكسيد الكربون"
    def: "Carbon dioxide equivalent, a common unit for reporting greenhouse-gas emissions."
    defAr: "مكافئ ثاني أكسيد الكربون، وحدة شائعة للإبلاغ عن انبعاثات الغازات الدفيئة."
    match: ["CO₂e"]
---
عندما يكتب المختبِر توجيهًا ويضغط «إرسال»، يبدو الأمر بلا كلفة: نص صغير يذهب ونص يعود. لكن خلف هذه اللحظة أجهزة حوسبة متخصصة تعمل في مراكز بيانات بعيدة، وتستهلك كهرباء، وتلك الكهرباء تُنتج في الغالب **انبعاثات ثاني أكسيد الكربون (CO₂ emissions)**. هذا القسم يشرح **ما الذي يحدد مقدار الطاقة** التي يستهلكها استخدام GenAI في الاختبار، ولماذا يهمّ ذلك فريق الاختبار تحديدًا: لأن الاختبار نشاط **متكرر بطبيعته**، يُشغَّل في كل sprint وأحيانًا مع كل commit، فيتضاعف أي استهلاك صغير بسرعة.

### من أين تأتي الطاقة؟ — Where the Energy Goes

يبدأ المنهج بحقيقة تشير إليها الدراسات: **تدريب النماذج اللغوية الكبيرة ومعالجة طلباتها** يتطلبان استخدامًا مكثفًا لعدد كبير من **موارد الحوسبة المتخصصة**. أي أن الطاقة لا تُستهلك مرة واحدة عند بناء النموذج فقط، بل تُستهلك أيضًا **في كل مرة يُستخدم فيها**.

ثم يضيف أن النماذج تُتاح عادةً **كخدمات عبر الويب (web-based services)**. فحين يرسل المختبِر توجيهًا، يزيد الحمل على ثلاث طبقات معًا: **الأجهزة** (جهاز المستخدم والخوادم)، و**الشبكات** التي تنقل الطلب والرد، و**مراكز البيانات** التي تشغّل النموذج وتبرّده. ولهذا فإن ازدياد الاستخدام يعني **ارتفاع استهلاك الطاقة**.

### الأثر يرتفع بشدة مع الاستخدام — Impact Rises Sharply with Usage

يحذّر المنهج من **التقليل من الأثر البيئي** لـ GenAI، لأن استهلاك الطاقة **يرتفع بشدة كلما زاد الاستخدام**. السبب بسيط: الطلب الواحد قد يكون **ضئيلًا** فعلًا، لكن الأثر **التراكمي** لملايين المستخدمين حول العالم يصبح **عبئًا بيئيًا كبيرًا**. والفكرة نفسها تنطبق على مستوى الفريق: ما يبدو تافهًا في طلب واحد قد يصبح ملحوظًا عندما يُؤتمت ويُكرر آلاف المرات.

### ما الذي يحدد الاستهلاك؟ — What Drives Energy Use

يحدد المنهج عاملين: **تعقيد المهمة**، و**موارد الحوسبة التي تتطلبها**. ويجمعهما هدف التعلم في مجموعتين يسهل تذكّرهما:

| Factor group | Examples | Effect on energy |
|---|---|---|
| Task characteristics | Task complexity; type of output (image vs text); size of output | More complex tasks and larger or richer outputs need more computation |
| Model usage | Model size; number of interactions; infrastructure | Larger models, more calls and less efficient infrastructure use more energy |

**خصائص المهمة:** مهمة بسيطة مثل «اقترح ثلاثة أسماء لحالات اختبار» تحتاج حوسبة أقل بكثير من «حلّل هذه الوثيقة الطويلة واستخرج كل شروط الاختبار مع تبرير كل منها». و**نوع الناتج** يصنع فرقًا كبيرًا، وهنا يعطي المنهج مثاله المشهور: توليد **صورة واحدة** بنموذج قوي قد يستهلك طاقة تعادل **شحن هاتف ذكي بالكامل**، بينما توليد **نص** يستهلك **نسبة صغيرة فقط** من شحنة الهاتف. كذلك **حجم الناتج**: إجابة من ألفي كلمة تكلّف أكثر من إجابة من مئتي كلمة.

**طريقة استخدام النموذج:** النموذج الأكبر يحتاج حوسبة أكثر لكل طلب، والنموذج الأكبر ليس ضروريًا لكل مهمة. و**عدد التفاعلات** عامل مباشر: كل طلب إضافي، وكل إعادة توليد «للاحتياط»، وكل محادثة طويلة تكرر السياق نفسه، هي استهلاك إضافي. أما **البنية التحتية** فتعني أين وكيف يعمل النموذج، ومدى كفاءة الأجهزة ومركز البيانات.

### لماذا لا نعتمد أرقامًا ثابتة؟ — Why There Is No Fixed Number

يعترف المنهج بأنه **من الصعب الحصول على بيانات دقيقة** عن الأثر البيئي لـ GenAI، ومع ذلك فمن الواضح أن هذه العمليات كثيفة الطاقة **تسهم مجتمعةً في انبعاثات CO₂ كبيرة**. لذلك نتعامل مع مثال الهاتف على أنه **مقارنة تقريبية** توضح الفرق بين الصورة والنص، لا ثابتًا يصلح لكل نموذج أو مزوّد. عمليًا، الاستهلاك الفعلي يتغير مع النموذج والأجهزة وطول المدخلات والمخرجات، والانبعاثات تتغير أيضًا مع **مصدر الكهرباء**: الكمية نفسها من الطاقة تنتج انبعاثات أقل إذا جاءت من شبكة تعتمد على مصادر متجددة. ولهذا يفصل تمرين هذا القسم بين خطوتين: حساب الطاقة، ثم تحويلها إلى انبعاثات بمعامل الشبكة.

### مثال من تطبيق التوصيل — Worked Example

فريق تطبيق التوصيل أضاف إلى الـ CI pipeline خطوة تطلب من نموذج لغوي مراجعة كل commit واقتراح حالات اختبار. لنقارن إعدادين بأرقام **تعليمية افتراضية** (ليست قياسًا لخدمة حقيقية)، مع 40 commit يوميًا و10 أيام عمل في الـ sprint، ومعامل شبكة 0.4 kg CO₂e لكل kWh:

| Setup | Calls per day | Assumed Wh per call | Energy per sprint | CO₂e per sprint |
|---|---|---|---|---|
| A: large model, long answer, every commit, 3 repeats | 120 | 2.0 | 2.4 kWh | 0.96 kg |
| B: smaller model, short answer, only commits touching checkout or coupons, 1 call | 15 | 0.5 | 0.075 kWh | 0.03 kg |

الإعداد A ليس «خطأً» في طلب واحد، لكنه يكرر الطلب ثلاث مرات بلا سبب، ويستخدم نموذجًا أكبر مما تحتاجه المهمة، ويطلب إجابة طويلة لا يقرؤها أحد كاملة. الإعداد B يحافظ على الهدف نفسه (اقتراحات للأجزاء الحساسة مثل حساب حد التوصيل المجاني 20.00 JOD والكوبونات) بجزء صغير من الاستهلاك. والشرط المهم: يجب أن **يتحقق الفريق** من أن الإعداد B لا يُسقط تغطية حرجة، مثلًا commits في منطق الدفع.

### الممارسات الجيدة — Best Practices

يقول المنهج إن تبنّي ممارسات جيدة، **مثل الحدّ من تفاعلات النموذج غير الضرورية**، أمر حاسم لتخفيف المخاطر البيئية لـ GenAI. وعمليًا يترجم ذلك في عمل الاختبار إلى:

1. **لا تكرر الطلب بلا سبب**: إذا كان الناتج الأول صالحًا، فلا حاجة لتوليد ثلاث نسخ «للمقارنة» في كل مرة.
2. **أعد استخدام النتائج الصالحة**: حالات اختبار معتمدة لقصة لم تتغير لا تحتاج إعادة توليد في كل sprint.
3. **اختر نموذجًا بحجم المهمة**: تصنيف تقارير defects إلى فئات قد لا يحتاج أكبر نموذج متاح.
4. **اطلب ناتجًا بحجم الحاجة**: حدد الطول والصيغة في التوجيه.
5. **لا تولّد صورًا إلا عند الحاجة**: لأن الصورة أغلى بكثير من النص.

### لا تخلط بين — Don't Confuse

| | Energy | Emissions |
|---|---|---|
| What it measures | Electricity used (Wh, kWh) | Greenhouse gases released (kg CO₂e) |
| Main drivers | Task characteristics and model usage | Energy used × how the electricity is produced |
| Can two equal tasks differ? | Yes, if model size or number of calls differs | Yes, even with equal energy, if the grid differs |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Avoid unnecessary chats and repeats, reuse a valid result when it fits, and choose a model sized for the task. Balance energy and cost against test quality: saving energy never justifies losing critical coverage.</p><p class="gx-ar" lang="ar" dir="rtl">تجنّب المحادثات والتكرارات غير الضرورية، وأعد استخدام نتيجة صالحة عندما تناسب، واختر نموذجًا بحجم المهمة. وازن الطاقة والكلفة مقابل جودة الاختبار: توفير الطاقة لا يبرر أبدًا خسارة تغطية حرجة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Judging the impact by a single request. One text generation is negligible; the syllabus point is the cumulative effect across millions of users; in practice the same applies when a request is automated in a pipeline.</p><p class="gx-ar" lang="ar" dir="rtl">الحكم على الأثر من طلب واحد. توليد نص واحد أثره ضئيل؛ ونقطة المنهج هي الأثر التراكمي عبر ملايين المستخدمين؛ وعمليًا ينطبق الأمر نفسه عندما يُؤتمت الطلب في pipeline.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Remember the two groups of factors: task characteristics (the syllabus names task complexity, with images vs text as its example) and model usage (the computational resources required; limiting unnecessary interactions is the named best practice). Energy rises sharply as usage increases.</p><p class="gx-ar" lang="ar" dir="rtl">تذكّر مجموعتي العوامل: خصائص المهمة (يذكر المنهج تعقيد المهمة، ومثاله الصور مقابل النص) وطريقة استخدام النموذج (موارد الحوسبة المطلوبة، والممارسة المذكورة هي الحدّ من التفاعلات غير الضرورية). والاستهلاك يرتفع بحدة مع زيادة الاستخدام.</p></aside>

يطلب الهدف العملي لهذا القسم أن **تستخدم محاكيًا** لحساب الطاقة وانبعاثات CO₂ لمهام اختبار معطاة، وأن تلاحظ كيف تغيّر خصائص المهمة وطريقة استخدام النموذج النتيجة. الهدف أن تفهم **محرّكات الاستهلاك** بنفسك، لا أن تحفظ أرقامًا.

<section class="gx-lab" data-lab="HO-3.3.1"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Exercise · Estimate Energy and CO2e</span><span class="gx-ar" lang="ar" dir="rtl">تمرين · قدّر الطاقة وانبعاثات CO₂e</span></span><span class="gx-lab-meta">HO-3.3.1 · H1</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr">These are teaching assumptions for a simplified calculator, not a measurement of a real service.</span><span class="gx-ar" lang="ar" dir="rtl">هذه فرضيات تعليمية لحاسبة مبسّطة، وليست قياسًا لخدمة حقيقية.</span></p><figure class="gx-figure" aria-label="2,000 requests at 0.5 Wh each gives 1 kWh; at 0.4 kg CO2e per kWh that is 0.4 kg CO2e."><div class="gx-flow-row"><span class="gx-flow-node">2,000<small>requests</small></span><span class="gx-flow-arrow" aria-hidden="true">×</span><span class="gx-flow-node">0.5 Wh<small>per request</small></span><span class="gx-flow-arrow" aria-hidden="true">=</span><span class="gx-flow-node">1 kWh<small>energy</small></span><span class="gx-flow-arrow" aria-hidden="true">×</span><span class="gx-flow-node">0.4<small>kg CO₂e / kWh</small></span><span class="gx-flow-arrow" aria-hidden="true">=</span><span class="gx-flow-node gx-flow-node--accent">0.4 kg<small>CO₂e</small></span></div><figcaption>Energy = 2,000 × 0.5 ÷ 1,000 = 1 kWh. Emissions = 1 × 0.4 = 0.4 kg CO₂e.</figcaption></figure><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">In a simulator or spreadsheet, reduce the task to 1,000 requests with the same assumptions. You should get 0.5 kWh and 0.2 kg CO₂e.</span><span class="gx-ar" lang="ar" dir="rtl">في محاكٍ أو جدول بيانات، خفّض المهمة إلى 1,000 طلب بالفرضيات نفسها. يجب أن تحصل على 0.5 kWh و0.2 kg CO₂e.</span></li><li><span class="gx-en" lang="en" dir="ltr">Change the energy per request, then the grid intensity, and note how much each moves the result.</span><span class="gx-ar" lang="ar" dir="rtl">غيّر طاقة الطلب الواحد، ثم كثافة انبعاث الشبكة، ولاحظ مقدار تأثير كل منهما على النتيجة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Compare two usage scenarios for the same test task, for example a large model against a smaller one.</span><span class="gx-ar" lang="ar" dir="rtl">قارن سيناريوهي استخدام للمهمة نفسها، مثلًا نموذج كبير مقابل نموذج أصغر.</span></li></ol><p><span class="gx-en" lang="en" dir="ltr">This is a simplified operational estimate. It does not automatically include hardware manufacturing, model training or the full life cycle.</span><span class="gx-ar" lang="ar" dir="rtl">هذا تقدير تشغيلي مبسّط. لا يشمل تلقائيًا تصنيع الأجهزة ولا تدريب النموذج ولا دورة الحياة الكاملة.</span></p></div></section>
