---
order: 3
slug: "5-1-3"
chapter: 5
group: "5.1"
section: "5.1.3"
title: "Selecting LLMs/SLMs for Software Test Tasks"
titleAr: "اختيار النماذج الكبيرة أو الصغيرة لمهام الاختبار"
objectives: "GenAI-5.1.3 · K2 / HO-5.1.3 · H1"
minutes: 6
lo:
  GenAI-5.1.3: "Explain what to consider when selecting LLMs or SLMs for test tasks."
  HO-5.1.3: "Estimate the recurring cost of using an LLM for a test task."
takeaways:
  - "First check the capabilities the task needs: image input, reasoning, context window, licence type."
  - "Criteria: performance on your own tasks and metrics, fine-tuning options and benefit, recurring cost, and community, support and documentation."
  - "Public benchmarks are a hint, not a decision."
  - "You may end up with more than one model for different tasks."
terms:
  - en: "Benchmark"
    ar: "معيار المقارنة"
    def: "A standard test set used to compare models. A public benchmark may not represent your team's tasks."
---
تحقق أولًا من القدرات التي تحتاجها المهمة: هل المدخل صور؟ هل تتطلب استدلالًا؟ ما نافذة السياق المطلوبة؟ ما نوع الترخيص؟ الاختبارات العامة للنموذج لا تكفي؛ قد يكون قويًا في اللغة أو الشيفرة ولا يمثّل مهمة فريقك.

### معايير الاختيار — Selection Criteria

- **الأداء على مهام مستهدفة** بقياسات المؤسسة نفسها.
- **إمكانية الضبط الدقيق وفائدته** للمهمة.
- **الكلفة المتكررة**، بما فيها الترخيص والتشغيل.
- **المجتمع والدعم والتوثيق.**

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Picking the model with the top public benchmark score. Measure it on data and tasks that represent your team, and review integration, privacy, licensing, cost and support.</p></aside>

<section class="gx-lab" data-lab="HO-5.1.3"><header class="gx-lab-head"><span class="gx-lab-title">Exercise · Recurring Cost Estimate</span><span class="gx-lab-meta">HO-5.1.3 · H1</span></header><div class="gx-lab-body"><p>All numbers are hypothetical training values, not provider prices.</p><p class="gx-lab-subhead">Commercial service</p><p>1,000 tasks per month, each with 2,000 input tokens and 500 output tokens. Assumed price: $2 per million input tokens and $8 per million output tokens.</p><table><thead><tr><th>Item</th><th>Calculation</th><th>Cost</th></tr></thead><tbody><tr><td>Input</td><td>2M × $2</td><td>$4</td></tr><tr><td>Output</td><td>0.5M × $8</td><td>$4</td></tr><tr><td>Generation total</td><td>one pass per task</td><td>$8</td></tr><tr><td>Two passes per task</td><td>same size each</td><td>$16</td></tr></tbody></table><p class="gx-lab-subhead">Self-hosted open-licence model</p><p>$40 compute + $10 storage and monitoring + 2 maintenance hours at $15 = <strong>$80 per month</strong> in this scenario.</p><ol class="gx-lab-steps"><li>Repeat the comparison with documented, dated prices and terms for several options, including one commercial and one open-licence model.</li><li>Change the task count, passes, and input and output length, and see where the answer flips.</li><li>Label one-off setup costs separately from recurring costs.</li></ol><p>Do not conclude that commercial is always cheaper: volume, usage, infrastructure, privacy and output quality all change the decision.</p></div></section>
