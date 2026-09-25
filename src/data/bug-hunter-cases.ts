/**
 * محتوى لعبة Bug Hunter: الأسئلة والأجوبة والفخاخ لكل Case.
 * هاد المحتوى مربوط بشاشة كل Case بالكود (مكان كل علامة ثابت بالتصميم)، عشان هيك مش بلوحة التحكم.
 * لوحة التحكم بتتحكم بالأمور العامة بس: العناوين والنصوص والصور والمدة والترتيب.
 */
export type BhSeverity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
export interface BhBug {
  id: string; title: string; sceneLabel: string; question: string; answers: string[]; correctAnswer: string;
  explanation: string; expectedResult?: string; correctMessage: string; reportTitle: string; severity: BhSeverity;
  resources: { label: string; href: string; kind: string }[];
}
export interface BhTrap { id: string; title: string; explanation: string }
export interface BhCaseContent { scene: 'shop' | 'login'; bugs: BhBug[]; traps: BhTrap[] }

export const BUG_HUNTER_CASES: Record<string, BhCaseContent> = {
  "broken-shop": {
    "scene": "shop",
    "bugs": [
      {
        "id": "broken-image",
        "title": "الصورة المكسورة",
        "sceneLabel": "صورة منتج Wireless Headphones لا تظهر",
        "question": "أي عنوان هو الأفضل لتسجيل هذا الـBug؟",
        "answers": [
          "The product is broken",
          "Product image is not displayed on the Wireless Headphones card",
          "There is a UI issue on the shop page",
          "Image problem"
        ],
        "correctAnswer": "Product image is not displayed on the Wireless Headphones card",
        "explanation": "العنوان الجيد يحدد ما المشكلة وأين ظهرت وعلى أي منتج، بدل وصف عام لا يساعد المطور على الوصول إليها.",
        "expectedResult": "يجب أن تظهر صورة المنتج داخل بطاقة Wireless Headphones بدون رمز صورة مكسورة.",
        "correctMessage": "Excellent Bug Report! +100",
        "reportTitle": "Product image is not displayed on the Wireless Headphones card",
        "severity": "LOW",
        "resources": [
          {
            "label": "شاهد: كيف تكتب Bug Report باحتراف",
            "href": "/lessons/how-to-write-a-bug-report/",
            "kind": "فيديو • 11:42"
          },
          {
            "label": "حمّل قالب Bug Report",
            "href": "/resources/bug-report-template/",
            "kind": "Word + PDF"
          },
          {
            "label": "اقرأ: كيف تكتب Bug Report ما يرجعلك",
            "href": "/articles/how-to-write-bug-report/",
            "kind": "مقال"
          }
        ]
      },
      {
        "id": "add-to-cart",
        "title": "زر Add to Cart لا يستجيب",
        "sceneLabel": "زر الإضافة لا يغير محتوى السلة",
        "question": "أي خيار يصف الـActual Result والـExpected Result بشكل صحيح؟",
        "answers": [
          "Actual: تمت إضافة المنتج — Expected: ألا يحدث شيء",
          "Actual: لا يستجيب الزر ويبقى العداد 0 — Expected: يُضاف المنتج ويتغير العداد إلى 1",
          "Actual: لون الزر أزرق — Expected: تغيير تصميم المتجر",
          "Actual: المتجر يحتوي منتجات — Expected: إعادة تحميل الصفحة"
        ],
        "correctAnswer": "Actual: لا يستجيب الزر ويبقى العداد 0 — Expected: يُضاف المنتج ويتغير العداد إلى 1",
        "explanation": "Actual Result يصف ما حدث فعلًا، بينما Expected Result يصف السلوك الذي كان يجب أن يحدث وفق وظيفة الزر.",
        "expectedResult": "عند الضغط يجب إضافة المنتج وتغيير عداد السلة من 0 إلى 1.",
        "correctMessage": "Great Observation! +100",
        "reportTitle": "Add to Cart button does not add the product to the cart",
        "severity": "HIGH",
        "resources": [
          {
            "label": "Functional vs Non-Functional Testing",
            "href": "/lessons/functional-vs-non-functional-testing/",
            "kind": "درس"
          }
        ]
      },
      {
        "id": "wrong-total",
        "title": "إجمالي السلة خاطئ",
        "sceneLabel": "المجموع الظاهر لا يساوي السعر والشحن ناقص الخصم",
        "question": "سعر المنتج $29 والشحن $4 والخصم $5.80. ما قيمة Total الصحيحة؟",
        "answers": [
          "$42.80",
          "$33.00",
          "$27.20",
          "$38.80"
        ],
        "correctAnswer": "$27.20",
        "explanation": "$29.00 + $4.00 - $5.80 = $27.20. لا يكفي وجود رقم في Total؛ يجب التحقق من تطبيق قواعد الحساب بشكل صحيح.",
        "expectedResult": "يجب أن يظهر Total بقيمة $27.20.",
        "correctMessage": "Excellent Check! +100",
        "reportTitle": "Cart total is calculated incorrectly ($42.80 instead of $27.20)",
        "severity": "HIGH",
        "resources": [
          {
            "label": "دليل اختبار E-commerce Checkout",
            "href": "/articles/E-commerce-Checkout-Testing/",
            "kind": "مقال"
          },
          {
            "label": "تقنيات تصميم الاختبار",
            "href": "/articles/test-design-techniques/",
            "kind": "مقال"
          }
        ]
      },
      {
        "id": "expired-coupon",
        "title": "كوبون منتهي يظهر كناجح",
        "sceneLabel": "EXPIRED20 يعرض رسالة نجاح رغم انتهاء صلاحيته",
        "question": "تجربة كوبون منتهي الصلاحية تعتبر مثالًا على أي نوع من الاختبار؟",
        "answers": [
          "Positive Testing",
          "Negative Testing",
          "Performance Testing",
          "Accessibility Testing"
        ],
        "correctAnswer": "Negative Testing",
        "explanation": "Negative Testing يتحقق من تعامل النظام مع البيانات غير الصالحة أو الحالات غير المتوقعة، مثل كوبون منتهي الصلاحية.",
        "expectedResult": "يجب رفض الكوبون برسالة واضحة وألا يتغير الخصم أو إجمالي الطلب.",
        "correctMessage": "Great Negative Test! +100",
        "reportTitle": "Expired coupon EXPIRED20 is accepted as valid",
        "severity": "HIGH",
        "resources": [
          {
            "label": "دليل اختبار E-commerce Checkout",
            "href": "/articles/E-commerce-Checkout-Testing/",
            "kind": "مقال"
          },
          {
            "label": "اختبار النماذج والتحقق من المدخلات",
            "href": "/articles/Form-Validation/",
            "kind": "مقال"
          }
        ]
      },
      {
        "id": "invalid-email",
        "title": "حقل Email يقبل قيمة غير صالحة",
        "sceneLabel": "القيمة ahmad@ تسمح بالمتابعة للدفع",
        "question": "تقسيم بيانات البريد إلى قيم صالحة وغير صالحة واختيار عينة من كل مجموعة يعتبر أي تقنية؟",
        "answers": [
          "Boundary Value Analysis",
          "Equivalence Partitioning",
          "State Transition Testing",
          "Load Testing"
        ],
        "correctAnswer": "Equivalence Partitioning",
        "explanation": "في Equivalence Partitioning نقسم المدخلات إلى مجموعات يُتوقع أن يتعامل النظام مع عناصر كل مجموعة بالطريقة نفسها.",
        "expectedResult": "يجب منع الانتقال وإظهار Enter a valid email address.",
        "correctMessage": "Smart Test Design! +100",
        "reportTitle": "Email field accepts an invalid value (ahmad@)",
        "severity": "MEDIUM",
        "resources": [
          {
            "label": "تقنيات تصميم الاختبار",
            "href": "/articles/test-design-techniques/",
            "kind": "مقال"
          },
          {
            "label": "اختبار النماذج والتحقق من المدخلات",
            "href": "/articles/Form-Validation/",
            "kind": "مقال"
          }
        ]
      },
      {
        "id": "low-contrast",
        "title": "نص الزر غير مقروء",
        "sceneLabel": "لون النص قريب من خلفية زر Add to Cart",
        "question": "ما مشكلة الـAccessibility الأساسية في هذا الزر؟",
        "answers": [
          "حجم الزر كبير جدًا",
          "التباين بين النص والخلفية غير كافٍ",
          "الزر يحتاج Animation",
          "الصفحة تحتاج تحميل أسرع"
        ],
        "correctAnswer": "التباين بين النص والخلفية غير كافٍ",
        "explanation": "يجب أن يكون النص قابلًا للإدراك والقراءة، مع تباين واضح بينه وبين الخلفية في الحالات العادية والتفاعلية.",
        "expectedResult": "يجب تغيير ألوان الزر حتى يصبح النص واضحًا في الوضعين الفاتح والداكن.",
        "correctMessage": "Accessibility Matters! +100",
        "reportTitle": "Add to Cart text has insufficient color contrast",
        "severity": "LOW",
        "resources": [
          {
            "label": "قائمة فحص Usability وAccessibility",
            "href": "/resources/usability-accessibility-checklist/",
            "kind": "Checklist"
          },
          {
            "label": "الفرق بين Usability وAccessibility",
            "href": "/questions/usability-vs-accessibility-testing/",
            "kind": "سؤال مقابلة"
          }
        ]
      },
      {
        "id": "duplicate-order",
        "title": "الضغط المكرر ينشئ طلبين",
        "sceneLabel": "الضغط مرتين على Place Order ينشئ طلبين متطابقين",
        "question": "ما المبدأ الذي يمنع تكرار عملية الدفع عند إرسال نفس الطلب أكثر من مرة؟",
        "answers": [
          "Localization",
          "Scalability",
          "Idempotency",
          "Accessibility"
        ],
        "correctAnswer": "Idempotency",
        "explanation": "Idempotency تضمن أن تكرار نفس الطلب لا ينفذ العملية الحساسة أكثر من مرة. تعطيل الزر مفيد لكنه لا يغني عن حماية الـBackend.",
        "expectedResult": "يجب قبول العملية الأولى فقط وإعادة نتيجتها لأي Request مكرر.",
        "correctMessage": "Duplicate Defeated! +100",
        "reportTitle": "Double-clicking Place Order creates two identical orders",
        "severity": "CRITICAL",
        "resources": [
          {
            "label": "دليل اختبار E-commerce Checkout",
            "href": "/articles/E-commerce-Checkout-Testing/",
            "kind": "مقال"
          },
          {
            "label": "Idempotency في API Testing",
            "href": "/questions/idempotency-in-api-testing/",
            "kind": "سؤال مقابلة"
          }
        ]
      },
      {
        "id": "false-payment-success",
        "title": "رسالة نجاح بعد فشل الدفع",
        "sceneLabel": "الواجهة تعرض نجاحًا رغم رجوع API برمز 500",
        "question": "ما الدليل الأقوى الذي يجب إرفاقه مع تقرير هذا الـBug؟",
        "answers": [
          "لقطة شاشة لرسالة النجاح فقط",
          "كتابة أن الدفع لا يعمل بدون تفاصيل",
          "استجابة API برمز 500 مع عدم وجود Order ID وسجل Network",
          "اسم المتصفح فقط"
        ],
        "correctAnswer": "استجابة API برمز 500 مع عدم وجود Order ID وسجل Network",
        "explanation": "سجل الـNetwork واستجابة الـAPI يثبتان أن العملية فشلت رغم ما عرضته الواجهة، بينما لقطة الشاشة وحدها لا تشرح ما حدث خلفها.",
        "expectedResult": "عند فشل الدفع يجب ألا يتأكد الطلب وأن تظهر رسالة خطأ مفهومة مع إمكانية إعادة المحاولة بأمان.",
        "correctMessage": "Evidence Collected! +100",
        "reportTitle": "Success message is shown after a failed payment (500)",
        "severity": "CRITICAL",
        "resources": [
          {
            "label": "دورة Postman وAPI Testing",
            "href": "/courses/postman-course/",
            "kind": "دورة"
          },
          {
            "label": "دليل اختبار E-commerce Checkout",
            "href": "/articles/E-commerce-Checkout-Testing/",
            "kind": "مقال"
          }
        ]
      },
      {
        "id": "mobile-overflow",
        "title": "زر Checkout يخرج خارج الشاشة",
        "sceneLabel": "على عرض 360px جزء من زر الدفع مخفي",
        "question": "ما السلوك المتوقع الصحيح على شاشة موبايل ضيقة؟",
        "answers": [
          "تصغير الصفحة كاملة حتى يصبح النص صغيرًا",
          "إخفاء زر Checkout على الموبايل",
          "إعادة ترتيب المحتوى بدون تمرير أفقي أو عناصر مقصوصة",
          "إجبار المستخدم على تدوير الجهاز"
        ],
        "correctAnswer": "إعادة ترتيب المحتوى بدون تمرير أفقي أو عناصر مقصوصة",
        "explanation": "التصميم المتجاوب يعيد ترتيب العناصر حسب مساحة الشاشة ويحافظ على وضوح المحتوى وإمكانية الوصول للإجراءات الأساسية.",
        "expectedResult": "يجب أن يظهر زر Checkout كاملًا بدون Horizontal Scroll غير ضروري.",
        "correctMessage": "Responsive Rescue! +100",
        "reportTitle": "Checkout button is cut off on 360px screens",
        "severity": "MEDIUM",
        "resources": [
          {
            "label": "Mobile Testing Checklist",
            "href": "/resources/mobile-testing-checklist/",
            "kind": "Checklist"
          },
          {
            "label": "قائمة فحص Usability وAccessibility",
            "href": "/resources/usability-accessibility-checklist/",
            "kind": "Checklist"
          }
        ]
      },
      {
        "id": "keyboard-skip",
        "title": "زر الدفع لا يعمل بالكيبورد",
        "sceneLabel": "Tab يتجاوز Place Order ولا يمكن تشغيله بـEnter",
        "question": "ما الطريقة الصحيحة لاختبار صفحة Checkout بدون ماوس؟",
        "answers": [
          "Tab وShift + Tab للتنقل وEnter أو Space للتشغيل",
          "تحريك الماوس بسرعة فوق العناصر",
          "تصغير حجم المتصفح",
          "تحديث الصفحة عدة مرات"
        ],
        "correctAnswer": "Tab وShift + Tab للتنقل وEnter أو Space للتشغيل",
        "explanation": "يجب أن يصل المستخدم لكل العناصر التفاعلية بترتيب منطقي، مع Focus واضح وإمكانية تشغيل الأزرار من لوحة المفاتيح.",
        "expectedResult": "يصل Focus إلى Place Order ويعمل الزر باستخدام Enter أو Space.",
        "correctMessage": "Keyboard Champion! +100",
        "reportTitle": "Place Order cannot be reached or activated with the keyboard",
        "severity": "MEDIUM",
        "resources": [
          {
            "label": "قائمة فحص Usability وAccessibility",
            "href": "/resources/usability-accessibility-checklist/",
            "kind": "Checklist"
          },
          {
            "label": "الفرق بين Usability وAccessibility",
            "href": "/questions/usability-vs-accessibility-testing/",
            "kind": "سؤال مقابلة"
          }
        ]
      }
    ],
    "traps": [
      {
        "id": "sale-price",
        "title": "سعر مشطوب على Mechanical Keyboard",
        "explanation": "السعر المشطوب $59.00 هو السعر القديم، والمنتج عليه خصم SALE مقصود. هاد سلوك مطلوب من الـ Business، مش خطأ."
      },
      {
        "id": "sold-out",
        "title": "زر SOLD OUT معطّل على Minimal Desk Lamp",
        "explanation": "المنتج نافد من المخزون، فالزر معطّل ومكتوب عليه SOLD OUT. هاد سلوك مقصود بيمنع المستخدم يطلب منتج مش موجود."
      }
    ]
  },
  "login-lockdown": {
    "scene": "login",
    "bugs": [
      {
        "id": "email-trim",
        "title": "الإيميل مع مسافة بينرفض",
        "sceneLabel": "Sign in: ahmad@mail.com مع مسافة بالبداية بيعطي Invalid email",
        "question": "المستخدم نسخ إيميله مع مسافة بالبداية، فظهرت رسالة Invalid email address. شو السلوك المتوقع الأفضل؟",
        "answers": [
          "رفض الإيميل وإجبار المستخدم يعيد كتابته",
          "إزالة المسافات من بداية ونهاية الإيميل (Trim) قبل التحقق",
          "قبول أي نص بدون أي تحقق",
          "عرض رسالة Server Error"
        ],
        "correctAnswer": "إزالة المسافات من بداية ونهاية الإيميل (Trim) قبل التحقق",
        "explanation": "المسافات الزايدة من النسخ واللصق شائعة جدًا. النظام الجيد بيعمل Trim للمدخلات قبل الـ Validation بدل ما يعاقب المستخدم على شي ما بيشوفه.",
        "expectedResult": "يتم قبول ahmad@mail.com بعد إزالة المسافة تلقائيًا.",
        "correctMessage": "Clean Input! +100",
        "reportTitle": "Email with a leading space is rejected as invalid on Sign in",
        "severity": "MEDIUM",
        "resources": [
          {
            "label": "اختبار النماذج والتحقق من المدخلات",
            "href": "/articles/Form-Validation/",
            "kind": "مقال"
          }
        ]
      },
      {
        "id": "password-visible",
        "title": "الباسورد ظاهر كنص",
        "sceneLabel": "Sign in: الباسورد ظاهر كنص عادي وبدون زر إخفاء",
        "question": "شو المشكلة بحقل Password بشاشة Sign in؟",
        "answers": [
          "الحقل أعرض من اللازم",
          "الباسورد ظاهر كنص عادي بدل ما يكون مخفي (Masked)",
          "لون الحقل غامق",
          "ما في Placeholder"
        ],
        "correctAnswer": "الباسورد ظاهر كنص عادي بدل ما يكون مخفي (Masked)",
        "explanation": "حقل الباسورد لازم يكون مخفي افتراضيًا حتى ما يشوفه حدا جنب المستخدم، مع زر 👁 اختياري لإظهاره لما المستخدم يطلب.",
        "expectedResult": "يظهر الباسورد كنقاط •••• ويظهر فقط لما المستخدم يضغط زر الإظهار.",
        "correctMessage": "Privacy Protected! +100",
        "reportTitle": "Password is displayed in plain text on the Sign in form",
        "severity": "HIGH",
        "resources": [
          {
            "label": "قائمة فحص Usability وAccessibility",
            "href": "/resources/usability-accessibility-checklist/",
            "kind": "Checklist"
          }
        ]
      },
      {
        "id": "error-technical",
        "title": "رسالة خطأ تقنية للمستخدم",
        "sceneLabel": "بعد باسورد غلط: Error 0x80040E14: NullReferenceException",
        "question": "بعد ما دخل المستخدم باسورد غلط ظهرت رسالة Error 0x80040E14: NullReferenceException. أي رسالة أفضل؟",
        "answers": [
          "Error 0x80040E14",
          "Email or password is incorrect",
          "The password for ahmad@mail.com is wrong",
          "Something happened"
        ],
        "correctAnswer": "Email or password is incorrect",
        "explanation": "رسالة الخطأ لازم تكون مفهومة للمستخدم وما تكشف تفاصيل تقنية عن النظام. وكمان الأفضل ما تحدد إذا الإيميل أو الباسورد هو الغلط، حتى ما تساعد حدا يخمّن الحسابات الموجودة.",
        "expectedResult": "تظهر رسالة واضحة: Email or password is incorrect.",
        "correctMessage": "Clear Message! +100",
        "reportTitle": "Technical exception is shown to the user after a failed login",
        "severity": "MEDIUM",
        "resources": [
          {
            "label": "شاهد: كيف تكتب Bug Report باحتراف",
            "href": "/lessons/how-to-write-a-bug-report/",
            "kind": "فيديو"
          }
        ]
      },
      {
        "id": "wrong-user",
        "title": "بيانات مستخدم ثاني ظاهرة",
        "sceneLabel": "دخلت كـ ahmad@mail.com وظهر Welcome back, Sara Khalil",
        "question": "دخلت بحساب ahmad@mail.com وظهر Welcome back, Sara Khalil مع إيميلها. شو الـ Severity المناسبة لهاد الـ Bug؟",
        "answers": [
          "Low",
          "Medium",
          "High",
          "Critical"
        ],
        "correctAnswer": "Critical",
        "explanation": "عرض بيانات مستخدم ثاني مشكلة خصوصية كبيرة حتى لو باقي الواجهة شغالة، لأنها بتكشف معلومات شخصية لغير صاحبها. هاي من أعلى درجات الخطورة.",
        "expectedResult": "تظهر بيانات الحساب اللي دخلت فيه فقط: Welcome back, Ahmad.",
        "correctMessage": "Critical Catch! +100",
        "reportTitle": "Dashboard shows another user's name and email after login",
        "severity": "CRITICAL",
        "resources": [
          {
            "label": "Severity vs Priority",
            "href": "/articles/severity-vs-priority/",
            "kind": "مقال"
          }
        ]
      },
      {
        "id": "arabic-name",
        "title": "الاسم العربي مرفوض",
        "sceneLabel": "Create account: «عبدالله» بيعطي Name contains invalid characters",
        "question": "الاسم «عبدالله» ظهر معه Name contains invalid characters. هاد مثال على أي نوع من الاختبار؟",
        "answers": [
          "Performance Testing",
          "Localization / Internationalization Testing",
          "Smoke Testing",
          "Load Testing"
        ],
        "correctAnswer": "Localization / Internationalization Testing",
        "explanation": "التطبيق لازم يدعم لغات وحروف المستخدمين الحقيقيين. تجربة الأسماء العربية والحروف الخاصة جزء أساسي من Localization و Internationalization Testing.",
        "expectedResult": "يتم قبول الأسماء العربية والإنجليزية بدون أخطاء.",
        "correctMessage": "Global Tester! +100",
        "reportTitle": "Arabic characters are rejected in the Full name field",
        "severity": "HIGH",
        "resources": [
          {
            "label": "اختبار النماذج والتحقق من المدخلات",
            "href": "/articles/Form-Validation/",
            "kind": "مقال"
          }
        ]
      },
      {
        "id": "password-length",
        "title": "باسورد قصير انقبل",
        "sceneLabel": "Create account: Ab1! (4 أحرف) انقبل كـ Strong والشرط 8 أحرف",
        "question": "الشرط 8 أحرف على الأقل، بس Ab1! (4 أحرف) انقبل كـ Strong. أي تقنية بتختار فيها قيم مثل 7 و 8 و 9 عشان تلقط هيك مشكلة؟",
        "answers": [
          "Boundary Value Analysis",
          "Exploratory Testing",
          "Decision Table Testing",
          "Static Testing"
        ],
        "correctAnswer": "Boundary Value Analysis",
        "explanation": "Boundary Value Analysis بتركّز على الحدود: 7 أحرف لازم تنرفض و 8 تنقبل. أغلب الأخطاء بتصير عند الحدود بالضبط.",
        "expectedResult": "يتم رفض أي باسورد أقل من 8 أحرف برسالة واضحة.",
        "correctMessage": "Boundary Master! +100",
        "reportTitle": "Password shorter than 8 characters is accepted and marked as Strong",
        "severity": "HIGH",
        "resources": [
          {
            "label": "تقنيات تصميم الاختبار",
            "href": "/articles/test-design-techniques/",
            "kind": "مقال"
          }
        ]
      },
      {
        "id": "confirm-mismatch",
        "title": "تأكيد الباسورد غلط",
        "sceneLabel": "Password: Ab1! و Confirm: Ab1? وظهر Passwords match",
        "question": "الباسورد Ab1! والتأكيد Ab1? بس ظهر Passwords match. أي Actual / Expected صحيح؟",
        "answers": [
          "Actual: Passwords match — Expected: Passwords match",
          "Actual: Passwords match رغم اختلاف القيم — Expected: Passwords do not match",
          "Actual: الزر معطّل — Expected: الزر شغّال",
          "Actual: ما صار شي — Expected: رسالة نجاح"
        ],
        "correctAnswer": "Actual: Passwords match رغم اختلاف القيم — Expected: Passwords do not match",
        "explanation": "الـ Actual هو اللي صار فعلًا (رسالة تطابق رغم اختلاف القيمتين)، والـ Expected هو السلوك الصحيح (رسالة عدم تطابق ومنع إنشاء الحساب).",
        "expectedResult": "تظهر Passwords do not match ويتوقف إنشاء الحساب.",
        "correctMessage": "Sharp Eyes! +100",
        "reportTitle": "Confirm password shows 'Passwords match' when the values differ",
        "severity": "MEDIUM",
        "resources": [
          {
            "label": "شاهد: كيف تكتب Bug Report باحتراف",
            "href": "/lessons/how-to-write-a-bug-report/",
            "kind": "فيديو"
          }
        ]
      },
      {
        "id": "terms-unchecked",
        "title": "حساب انعمل بدون الموافقة على الشروط",
        "sceneLabel": "خانة الشروط الإجبارية مش مفعّلة وظهر Account created",
        "question": "خانة I agree to the Terms إجبارية ومش مفعّلة، ومع هيك ظهر Account created. أي Test Case كان رح يلقط هالمشكلة؟",
        "answers": [
          "إنشاء حساب مع كل الحقول صحيحة",
          "إنشاء حساب بدون تفعيل خانة الشروط والتأكد إنه بينرفض",
          "فتح الصفحة على الموبايل",
          "تغيير لغة الصفحة"
        ],
        "correctAnswer": "إنشاء حساب بدون تفعيل خانة الشروط والتأكد إنه بينرفض",
        "explanation": "هاد Negative Test Case: بنجرّب ننقص شرط إجباري ونتأكد إن النظام بيمنع العملية برسالة واضحة.",
        "expectedResult": "يبقى زر Create account معطّل أو تظهر رسالة: You must accept the Terms.",
        "correctMessage": "Negative Test Pro! +100",
        "reportTitle": "Account is created without accepting the required Terms",
        "severity": "MEDIUM",
        "resources": [
          {
            "label": "اختبار النماذج والتحقق من المدخلات",
            "href": "/articles/Form-Validation/",
            "kind": "مقال"
          }
        ]
      }
    ],
    "traps": [
      {
        "id": "show-password-toggle",
        "title": "الباسورد ظاهر بـ Create account",
        "explanation": "هون المستخدم ضغط زر 👁 بنفسه عشان يشوف اللي كتبه، والزر مفعّل وباين. إظهار الباسورد عند الطلب سلوك مقصود، بعكس شاشة Sign in اللي بتظهره بدون أي زر."
      },
      {
        "id": "resend-cooldown",
        "title": "زر Resend code معطّل",
        "explanation": "الزر معطّل مؤقتًا مع عدّاد 0:45 عشان يمنع إرسال رسائل كثير ورا بعض (Rate limiting). هاد تصميم مقصود، والزر برجع يشتغل لما يخلص العداد."
      }
    ]
  }
} as Record<string, BhCaseContent>;
