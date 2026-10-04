---
order: 2
slug: "5-1-2"
chapter: 5
group: "5.1"
section: "5.1.2"
title: "Key Aspects of a Generative AI Strategy in Software Testing"
titleAr: "عناصر استراتيجية الذكاء التوليدي في الاختبار"
objectives: "GenAI-5.1.2 · K2"
minutes: 7
lo:
  GenAI-5.1.2: "Summarise the key aspects of a GenAI strategy for testing."
takeaways:
  - "Start from measurable goals such as productivity, cycle time or quality."
  - "Fit the chosen model to the goal, the current infrastructure and scaling needs."
  - "Data quality, relevance and security come first."
  - "Add technical and ethical training, metrics for AI results, guidance on sensitive data and transparency, and review gates."
---
### الأهداف أولًا — Goals First

ابدأ بأهداف قابلة للقياس: زيادة إنتاجية الاختبار، أو تقليل زمن الدورة، أو تحسين الجودة. اربط النموذج المختار بالهدف وبالبنية الحالية واحتياجات التوسع، واعتنِ بجودة البيانات وصلتها وأمنها؛ النتيجة المفيدة لا تُبنى على أساس متناقض أو غير معتمد.

### عناصر الاستراتيجية — Strategy Elements

- تدريب تقني وأخلاقي للفريق.
- مقاييس لتقييم نتائج AI.
- إرشادات عملية للتعامل مع البيانات الحساسة.
- شفافية حول المواد المولّدة.
- بوابات مراجعة للجودة.
- خطة لما نفعله عند ضعف النتائج: كيف نتوقف أو نعدّل، وليس فقط كيف نبدأ.

### لماذا كل عنصر مهم؟ — Why Each Element Matters

**التدريب التقني والأخلاقي:** الأداة الممتازة بيد فريق لا يعرف كتابة توجيه أو تقييم ناتج لن تعطي قيمة، وقد تعطي ضررًا.

**مقاييس النتائج:** بدونها لا تعرف إن كان الاستثمار يحقق الهدف. قِس الجودة والوقت الكلي، لا الوقت الموفّر في التوليد فقط.

**إرشادات البيانات الحساسة:** تحدد بوضوح ما الذي يُسمح بإرساله لأي أداة، فيقلّ الاجتهاد الفردي و Shadow AI.

**الشفافية:** أن يُعرف أي مادة اختبار ولّدها AI، فيعرف المراجع أين يدقق أكثر.

**بوابات المراجعة:** نقاط محددة يجب أن يراجع فيها إنسان قبل أن ينتقل الناتج، خصوصًا في المواد الحرجة.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label">In practice</p><p>Goal: cut the time to draft test cases while keeping an approved coverage standard and correct expected results. Measure review and fix time too, so the tool does not look productive while it simply moves work to the reviewer.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label">Exam tip</p><p>A strategy starts from measurable objectives and aligns model choice, infrastructure, data quality and security with them. Training, metrics, data guidelines, transparency and quality gates are all part of it.</p></aside>
