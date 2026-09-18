---
title: شو أهم الـ HTTP Status Codes اللي لازم كل QA يركز عليها؟
slug: http-status-codes-for-qa
level: مبتدئ
domain: API
shortAnswer: '2xx (نجاح): مثل 200 OK و 201 Created. 4xx (أخطاء العميل): مثل 400 Bad Request و 401 Unauthorized و 404 Not Found. 5xx (أخطاء السيرفر): مثل 500 Internal Server Error و 503 Service Unavailable.'
tags:
  - QA Basics
  - REST API
  - API Testing
  - HTTP Status Codes
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** سؤال كلاسيكي للتأكد من فهمك لكيفية تشخيص أسباب فشل التست وفصل مشكلة المدخلات عن مشاكل السيرفر.
- **الجواب النموذجي:****200 OK:** الطلب نجح وتم إرجاع البيانات.**201 Created:** تم إنشائه بنجاح (مع POST).**400 Bad Request:** مدخلات خاطئة أو Validation Error بالـ JSON Body.**401 Unauthorized:** الـ Token مفقود أو غير صحيح.**403 Forbidden:** لا تملك الصلاحية للوصول لهذا المورد.**404 Not Found:** الـ Endpoint أو العنصر غير موجود.**500 Internal Server Error:** خطأ برمجي غير معالج بالسيرفر (Unhandled Exception) ويتطلب تدخّل المطور فوراً.
- **الفخ الشائع:** واعتبار كود `500` خطأ من العميل أو قبول استجابة `200 OK` بالرغم من وجود نص خطأ داخل الـ Response Body (False Positive).
