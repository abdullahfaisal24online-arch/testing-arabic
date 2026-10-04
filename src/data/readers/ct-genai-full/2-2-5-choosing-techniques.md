---
order: 8
slug: "2-2-5"
chapter: 2
group: "2.2"
section: "2.2.5"
title: "Choosing Prompting Techniques for Software Testing"
titleAr: "اختيار تقنية التوجيه المناسبة للاختبار"
objectives: "GenAI-2.2.5 · K3 / HO-2.2.5 · H1"
minutes: 4
lo:
  GenAI-2.2.5: "Choose suitable prompting techniques for a given testing task."
  HO-2.2.5: "Pick and justify the prompting technique that fits each given test task."
takeaways:
  - "Chaining for complex work that needs a check at each stage."
  - "Few-shot for repetitive output with a fixed format, such as Gherkin, keywords or report templates."
  - "Meta prompting for new or changing tasks where you do not yet have a good prompt."
  - "One task can combine all three; measure the result instead of assuming more techniques is better."
---
اختيار التقنية يعتمد على طبيعة المهمة، لا على اسم النشاط وحده.

| Technique | متى نستخدمها؟ | أمثلة |
|---|---|---|
| Prompt chaining | مهام معقّدة تحتاج دقة وتحققًا في كل مرحلة | التحليل والتصميم والأتمتة مع مراجعة كل خطوة |
| Few-shot prompting | مخرجات متكررة أو ذات تنسيق محدد | Gherkin، سكربتات الكلمات المفتاحية، تقارير بقالب |
| Meta prompting | مهام مرنة أو جديدة لا نملك لها توجيهًا جيدًا | تحليل التقارير واكتشاف الشذوذ في سياق جديد |

### الدمج — Combining Techniques

يمكن لحالة واحدة أن تستخدم أكثر من تقنية: نبني التوجيه الأول عبر Meta prompting، ونضيف إليه أمثلة تحتاج تكييفًا عبر Few-shot، ثم نقسّم العمل إلى مراحل للتحقق الوسيط عبر Prompt chaining.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Assuming that combining more techniques automatically improves the result. Measure quality after combining them.</p></aside>

<section class="gx-lab" data-lab="HO-2.2.5"><header class="gx-lab-head"><span class="gx-lab-title">Exercise · Pick the Technique</span><span class="gx-lab-meta">HO-2.2.5 · H1</span></header><div class="gx-lab-body"><p><strong>Goal:</strong> for each task, choose the technique (or mix), write a prompt, and note why you chose it and how you will judge the output.</p><ol class="gx-lab-steps"><li>Review an ambiguous user story, then derive test cases from it.</li><li>Convert ten user stories into consistent Gherkin.</li><li>Design a prompt that detects anomalies in a new team's test reports.</li></ol><details class="gx-lab-answer"><summary>Suggested answer</summary><p>1: chaining, with an ambiguity review before generation. 2: few-shot, with varied correct examples. 3: meta prompting to draft a suitable prompt; the analysis can then be split into steps and given examples.</p></details></div></section>
