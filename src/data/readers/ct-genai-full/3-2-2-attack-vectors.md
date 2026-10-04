---
order: 6
slug: "3-2-2"
chapter: 3
group: "3.2"
section: "3.2.2"
title: "Data Privacy and Vulnerabilities in Generative AI for Test Processes and Tools"
titleAr: "خصوصية البيانات والثغرات في أدوات وعمليات الاختبار بالذكاء التوليدي"
objectives: "GenAI-3.2.2 · K2"
minutes: 7
lo:
  GenAI-3.2.2: "Give examples of privacy issues and vulnerabilities when using GenAI in testing."
takeaways:
  - "Four attack vectors: context manipulation, request manipulation, data poisoning and malicious code generation."
  - "Text inside a log or an image is data to analyse, never trusted instructions."
  - "Recognise and assess each risk for your application; none of them is guaranteed to happen."
terms:
  - en: "Context Manipulation"
    ar: "التلاعب بالسياق"
    def: "Manipulating the context, for example with very long prompts, to try to make the model reveal confidential data."
  - en: "Request Manipulation"
    ar: "التلاعب بالطلب"
    def: "Introducing material, such as an image with embedded instructions, that pushes the output off course."
  - en: "Data Poisoning"
    ar: "تسميم البيانات"
    def: "Corrupting training or tuning data, for example with fake ratings, to distort the model."
  - en: "Malicious Code Generation"
    ar: "توليد شيفرة ضارة"
    def: "Steering a model to produce code with backdoors or unwanted command calls."
---
| Attack vector | الفكرة | مثال في الاختبار |
|---|---|---|
| Context Manipulation | التلاعب بالسياق لمحاولة استخراج بيانات سرية | طلبات طويلة تضغط على السياق وتوجّه النموذج لكشف معلومات خارج المهمة |
| Request Manipulation | إدخال مادة تغيّر اتجاه الاستجابة | صورة تجرّ النموذج إلى سياق آخر فيهلوس في معايير القبول |
| Data Poisoning | تلويث بيانات التدريب أو التحسين | تقييمات مزيفة عند تقييم تقارير اختبار مولّدة |
| Malicious Code Generation | استدراج النموذج لتوليد أبواب خلفية أو استدعاءات أوامر | سكربت اختبار يفتح اتصالًا خارجيًا غير مبرر |

### كل متجه بالتفصيل — Each Vector

**Context Manipulation:** يحاول المهاجم إغراق السياق بطلبات طويلة أو مصممة بطريقة معينة ليدفع النموذج للخروج عن مهمته وكشف معلومات لا يُفترض أن يكشفها، مثل أجزاء من بيانات التدريب أو معلومات سرية في سياق الأداة.

**Request Manipulation:** إدخال مادة تغيّر اتجاه الاستجابة. في الاختبار متعدد الوسائط مثلًا: صورة شاشة مرفقة تحتوي نصًا خفيًا أو تعليمات تجرّ النموذج إلى سياق مختلف، فيولّد معايير قبول لا علاقة لها بالمتطلب.

**Data Poisoning:** التلاعب بالبيانات التي يتعلم منها النموذج. مثال: أداة تحسّن نفسها بناءً على تقييمات المستخدمين لتقارير الاختبار المولّدة؛ تقييمات مزيفة متعمدة قد تدفعها لتفضيل تقارير سيئة.

**Malicious Code Generation:** دفع النموذج لتوليد شيفرة تحتوي باب خلفي أو استدعاء أوامر غير مقصود. سكربت اختبار يفتح اتصالًا بخادم خارجي، أو يرسل بيانات البيئة، يجب أن يُرفض قبل أي تشغيل.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label">Exam tip · v1.1</p><p>Syllabus v1.1 renamed the first vector from “Data exfiltration” to <strong>Context Manipulation</strong>. Expect the new name in questions.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Reading the context example as a rule that exceeding the context window always leaks training data. The point is to recognise the risk and assess it for your application. Likewise, text found inside a log or an image is data to analyse; it does not become a trusted instruction because the model read it.</p></aside>
