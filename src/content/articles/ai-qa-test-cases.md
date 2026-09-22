---
title: كيف تستخدم Claude وChatGPT لكتابة Test Cases؟
slug: ai-qa-test-cases
description: تعلم كيف تسخر أدوات الذكاء الاصطناعي مثل Claude وChatGPT لتوليد حالات اختبار (Test Cases) شاملة وسريعة. برومبتات جاهزة ونماذج عملية لمهندسي الـ QA.
publishDate: 2026-09-12
updatedDate: ''
category: مهارات
tags:
  - AI in QA
  - ChatGPT for Testing
  - Claude AI
  - Test Case Generation
  - Prompts for QA
  - Software Testing
  - Testing بالعربي
cover: /uploads/chatgpt-image-sep-12-2026-06-50-59-pm.png
featured: true
draft: false
---

تغيّر مفهوم إنتاجية مهندس ضبط الجودة (**QA Engineer**) بشكل كامل مع ظهور نماذج الذكاء الاصطناعي التوليدي مثل **ChatGPT** و**Claude**. لم يعد الهدف استبدال مختبر البرمجيات، بل تزويده بـ "مساعد ذكي" يُقلص وقت صياغة وتوثيق حالات الاختبار من ساعات طويلة إلى بضع دقائق.

لكن السر لا يكمن فقط في فتح الشات وسؤاله "اكتب لي Test Cases"، بل في **طريقة الهندسة البرمجية للطلب (Prompt Engineering)** وتوجيه النموذج لاستخراج سيناريوهات دقيقة تغطي الحالات السعيدة (**Happy Paths**) وحالات الحافة الاستثنائية (**Edge Cases**).

في هذا الدليل، ستتعلم كيف تستفيد من **Claude** و**ChatGPT** في مهامك اليومية، مع أوامر جاهزة (**Prompts**) يمكنك نسخها واستخدامها فوراً.

## 1. لماذا تُعتبر أدوات الذكاء الاصطناعي ممتازة لكتابة الـ Test Cases؟

- **توفير الوقت والجهد:** كتابة التست كيسز الروتينية والمكررة تأخذ وقتاً كبيراً يمكن استثماره في **Exploratory Testing** أو **Automation**.
- **اكتشاف سيناريوهات مغفولة:** الذكاء الاصطناعي ممتاز في توليد حالات **Edge Cases** وزوايا فحص قد لا تخطر ببالك أثناء قراءة المتطلبات السريعة.
- **توحيد التنسيق والتنظيم:** إمكانية إجبار الموديل على إخراج النتائج بتنسيقات متعددة مثل (Excel, Markdown, CSV) أو على شكل جدول جاهز للنسخ إلى **Jira / TestRail**.

## 2. الفروقات السريعة بين Claude و ChatGPT لمهام الـ QA

- **Claude (أفضل للـ Context والتحليل):**
    - يتميز بـ **Context Window** واسعة جداً ودقيقة.
    - ممتاز في قراءة وثائق المتطلبات الطويلة (**SRS / User Stories / PRDs**) وتحليلها دفعة واحدة واستخراج التست كيسز منها دون نسيان التفاصيل.
- **ChatGPT (أفضل للسرعة وتنسيق الأكواد):**
    - ممتاز في معالجة النصوص وتنسيق البيانات بسرعة على شكل جداول.
    - قوي جداً في توليد بيانات اختبار وهمية (**Test Data Generation**) وتنسيق برومبتات الأوتوميشن.

## 3. البرومبت الذهبي لتوليد حالات الاختبار (The Golden QA Prompt)

للحصول على نتيجة دقيقة ومحتوى غير عشوائي، يجب أن يتكون البرومبت الخاص بك من **4 عناصر أساسية**:

1. **الرول (Role):** حدد له شخصية QA Engineer خبير.
2. **السياق والمُدخلات (Context & Inputs):** أعطه الـ User Story أو معايير القبول (**Acceptance Criteria**).
3. **القيود والنطاق (Constraints):** أطلب منه شمول الـ Happy Path و Edge Cases و Security.
4. **شكل المخرجات (Output Format):** حدد الأعمدة المطلوبة (Test ID, Title, Steps, Expected Result).

### 📋 برومبت جاهز للنسخ (Copy & Paste Prompt)

Plaintext

```plain
Act as a Senior QA Automation Engineer. I will provide you with a User Story and its Acceptance Criteria. 

Your task is to write comprehensive Test Cases for this feature.

Rules to follow:
1. Cover Happy Paths, Negative Scenarios, Edge Cases, and Boundary Values.
2. Structure the response in a markdown table with the following columns:
   - Test Case ID
   - Test Title
   - Test Type (Functional / Negative / Edge Case)
   - Pre-conditions
   - Test Steps
   - Expected Result

Here is the User Story:
"[لصق نص الميزة أو معايير القبول هنا]"

```

## 4. استخدامه في توليد بيانات الاختبار (Test Data Generation)

بدلاً من ضياع الوقت في ابتكار أسماء وإيميلات وأرقام بطاقات تجريبية، يمكنك أمره بتوليد **Mock Data** متطابقة مع شروط الفحص:

### 📋 برومبت توليد بيانات الفحص:

> _"Generate a JSON list of 10 users for boundary testing on an age input field (minimum age 18, maximum 65). Include valid ages, boundary ages (17, 18, 65, 66), and invalid formats like strings or special characters."_

## 5. محاذير وأخطاء شائعة يجب تجنبها (Best Practices)

1. **لا تسلم نتائج AI بدون مراجعة (Human in the loop):** الذكاء الاصطناعي يقدم مسودة أولية ممتازة، لكنه قد يُهلوس (**Hallucinate**) أو يبتكر متطلبات غير موجودة في مشروعك. دائماً راجع منطق العمل (**Business Logic**).
2. **حماية سرية البيانات (Data Privacy):** تجنب رفع أكواد مصدرية حساسة أو بيانات عملاء حقيقيين أو متطلبات سرية داخل أدوات AI غير مخصصة للشركات (**Enterprise Accounts**).
3. **الاعتماد الكلي يفقدك المهارة:** استخدم الذكاء الاصطناعي كمساعد لزيادة الإنتاجية ولتعلم زوايا فحص جديدة، وليس بديلاً عن التفكير التحليلي.

### ملخص سريع لدمج الـ AI في عملك اليومي

1. ✅ **Analyze Requirements** (انسخ الـ User Story ومررها للنموذج).
2. ✅ **Apply Golden Prompt** (استخدم برومبت محدد الهيكلة والأعمدة).
3. ✅ **Review & Refine** (راجع المخرجات وعدل النتائج لتطابق مشروعك).
4. ✅ **Export to Tool** (انسخ الجدول المولد مباشرة إلى Jira أو TestRail).
