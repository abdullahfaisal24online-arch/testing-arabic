---
title: شو يعني Idempotence في الـ API وليه مهمة للـ QA؟
slug: idempotency-in-api-testing
level: متوسط
domain: API
shortAnswer: الـ Idempotent Method هي الـ Request اللي لو أرسلتها مرة وحدة أو 100 مرة لنفس البيانات، بتعطي نفس النتيجة على السيرفر بدون تغيير جانبي مكرر (مثل GET, PUT, DELETE).
tags:
  - HTTP Methods
  - Idempotency
  - REST API
  - API Testing
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** لقياس مدى عمق المتقدم بالتحقق من استقرار النظام عند تكرار طلبات الشبكة (Network Retries) أو الضغط المكرر من العميل.
    - **الجواب النموذجي:**
        - **Idempotent Methods:** مثل `GET`, `PUT`, `DELETE`. لو كررنا طلب `DELETE /users/5` عدة مرات، أول طلب بيحذف المستخدم والبقية برجعوا إن العنصر مش موجود، لكن حالة السيرفر النهائية واحدة (المستخدم محذوف).
        - **Non-Idempotent Method:** مثل `POST`. لو كررنا طلب `POST /orders` 3 مرات، رح يتم إنشاء 3 طلبات شراء مختلفة وتكرار عملية الدفع!
    - **الفخ الشائع:** اعتبار أن POST طريقة Idempotent أو عدم إدراك خطورة تكرار الطلبات غير التكرارية على العمليات المالية.
