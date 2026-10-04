# CT-GenAI reader editorial preview

Staging-only route: `/store/ct-genai-guide/preview/`. Generated only with `CMS_BRANCH=staging`; noindex and excluded by the existing store sitemap filter. No product listing, payment, entitlement or production changes.

Five original Arabic reading units with English terminology cover Chapter 1 of ISTQB CT-GenAI syllabus v1.1 (27 April 2026), pages 13–18:

| File | Coverage |
| --- | --- |
| 01-ai-spectrum.md | 1.1 / 1.1.1 |
| 02-llm-basics.md | 1.1.2 / HO-1.1.2 |
| 03-model-types.md | 1.1.3 |
| 04-multimodal.md | 1.1.4 / HO-1.1.4 |
| 05-testing-practice.md | 1.2 / 1.2.1 / 1.2.2 |

Five units are a preview scope, not five fixed print pages. Examples and exercise answers are explanatory originals, not claims of live model execution. Token budget numbers are explicitly hypothetical.

## Reader behavior

All preview content is readable without JavaScript. JavaScript enables unit navigation, full-text search, font sizing (16–24px), manual completion/undo and same-browser local progress. Completion is never inferred from scrolling. Saved position is resumed through an explicit prompt. Storage errors do not block reading. On mobile the TOC collapses and tables scroll horizontally. No server-side or account-level sync.

## Remaining work after editorial approval

Chapters 2–5, full syllabus coverage review, CMS editorial fields, product entry, free/paid boundary and existing manual order activation integration. Paid content must be authorized server-side before delivery; never deliver it in hidden DOM, public JSON or a static bundle. Current route contains only free preview material.

## Verification

Build with `ASTRO_TELEMETRY_DISABLED=1 STORE_OPEN=1 CMS_BRANCH=staging npm run build`. Confirm preview route exists; production build without CMS_BRANCH must omit it. Check search, last-unit navigation, completion undo, reload/resume, font bounds, corrupt/unavailable storage, keyboard access and 390px/desktop layouts.

## Internal full-draft review

The staging-only route `/store/ct-genai-guide/full/` contains 15 editorial units covering Chapters 2–5. It is a review draft and is not linked from the store or payment flow. The five-unit preview route remains the free Chapter 1 sample. Before a paid launch, the draft still needs editorial review, CMS fields, entitlement checks and the agreed free/paid boundary.
