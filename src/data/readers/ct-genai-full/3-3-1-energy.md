---
order: 8
slug: "3-3-1"
chapter: 3
group: "3.3"
section: "3.3.1"
title: "The Impact of Using GenAI on Energy Consumption and CO2 Emissions"
titleAr: "أثر استخدام الذكاء التوليدي على استهلاك الطاقة وانبعاثات الكربون"
objectives: "GenAI-3.3.1 · K2 / HO-3.3.1 · H1"
minutes: 8
lo:
  GenAI-3.3.1: "Explain how task characteristics and model usage affect GenAI energy use in testing."
  HO-3.3.1: "Use a simulator to estimate energy and CO2 emissions for given GenAI test tasks."
takeaways:
  - "Energy use depends on task characteristics (complexity, output type and size) and on model usage (model size, number of interactions, infrastructure)."
  - "One request looks small, but the impact adds up with volume."
  - "Avoid unnecessary repeats, reuse valid results and right-size the model, without losing critical coverage."
  - "Equal energy does not mean equal emissions: the electricity source matters."
terms:
  - en: "CO2e"
    ar: "مكافئ ثاني أكسيد الكربون"
    def: "Carbon dioxide equivalent, a common unit for reporting greenhouse-gas emissions."
    match: ["CO₂e"]
---
التدريب وتشغيل النماذج يستهلكان موارد حوسبة وشبكات ومراكز بيانات. قد يبدو طلب واحد صغيرًا، لكن الأثر يتراكم مع كثرة الاستخدام.

### ما الذي يؤثر في الاستهلاك؟ — What Drives Energy Use

- **خصائص المهمة:** تعقيد المهمة، ونوع المخرجات وحجمها. توليد الصور والنصوص ليس متساويًا في متطلبات الحوسبة.
- **طريقة استخدام النموذج:** حجم النموذج، وعدد التفاعلات، وطبيعة البنية التحتية. النموذج الأكبر ليس الخيار الضروري لكل مهمة.

مثال يوضح أثر الحجم: فريق يشغّل توجيهًا لتوليد حالات اختبار عند كل طلب دمج، 200 مرة يوميًا، ويطلب في كل مرة إجابة طويلة من نموذج كبير، ويكرر الطلب ثلاث مرات «للاحتياط». أثر الطلب الواحد صغير، لكن الأثر الشهري يصبح كبيرًا. لو استخدم نموذجًا أصغر يكفي للمهمة، وطلب إجابة أقصر، وتوقف عن التكرار غير الضروري، لانخفض الاستهلاك بشكل ملحوظ دون خسارة في الجودة.

يورد السيليبس مقارنات تقريبية مبنية على دراسات عن الطاقة، ومنها تشبيه بعض مهام توليد الصور بشحن هاتف. لا نحوّلها إلى ثابت لكل صورة أو مزود؛ البيانات الدقيقة صعبة المنال، والنتيجة تتغير مع الفرضيات.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label">In practice</p><p>Avoid unnecessary chats and repeats, reuse a valid result when it fits, and choose a model sized for the task. Balance energy and cost against test quality: saving energy never justifies losing critical coverage.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label">Exam tip</p><p>Remember the two groups of factors: task characteristics (complexity, type and size of output, e.g. images vs text) and model usage (model size, number of interactions, infrastructure). A bigger model or more calls means more energy.</p></aside>

<section class="gx-lab" data-lab="HO-3.3.1"><header class="gx-lab-head"><span class="gx-lab-title">Exercise · Estimate Energy and CO2e</span><span class="gx-lab-meta">HO-3.3.1 · H1</span></header><div class="gx-lab-body"><p>These are teaching assumptions for a simplified calculator, not a measurement of a real service.</p><figure class="gx-figure" aria-label="2,000 requests at 0.5 Wh each gives 1 kWh; at 0.4 kg CO2e per kWh that is 0.4 kg CO2e."><div class="gx-flow-row"><span class="gx-flow-node">2,000<small>requests</small></span><span class="gx-flow-arrow" aria-hidden="true">×</span><span class="gx-flow-node">0.5 Wh<small>per request</small></span><span class="gx-flow-arrow" aria-hidden="true">=</span><span class="gx-flow-node">1 kWh<small>energy</small></span><span class="gx-flow-arrow" aria-hidden="true">×</span><span class="gx-flow-node">0.4<small>kg CO₂e / kWh</small></span><span class="gx-flow-arrow" aria-hidden="true">=</span><span class="gx-flow-node gx-flow-node--accent">0.4 kg<small>CO₂e</small></span></div><figcaption>Energy = 2,000 × 0.5 ÷ 1,000 = 1 kWh. Emissions = 1 × 0.4 = 0.4 kg CO₂e.</figcaption></figure><ol class="gx-lab-steps"><li>In a simulator or spreadsheet, reduce the task to 1,000 requests with the same assumptions. You should get 0.5 kWh and 0.2 kg CO₂e.</li><li>Change the energy per request, then the grid intensity, and note how much each moves the result.</li><li>Compare two usage scenarios for the same test task, for example a large model against a smaller one.</li></ol><p>This is a simplified operational estimate. It does not automatically include hardware manufacturing, model training or the full life cycle.</p></div></section>
