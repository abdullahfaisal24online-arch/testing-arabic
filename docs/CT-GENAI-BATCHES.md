# CT-GenAI staged delivery checkpoint

## Batch 1 — reader shell

- Calm, compact reading header; existing global site shell unchanged.
- Five collapsible chapter groups with English titles matching the approved preview.
- Sections display existing syllabus references instead of sequential chapter-like labels. A reading unit can cover multiple references; content splitting and syllabus alignment belong to the chapter batches.
- Current chapter opens on navigation; completion count per chapter.
- Search opens matching chapter groups and hides empty groups; clearing search restores the active chapter.
- Mobile TOC collapses after navigation; reading controls and tables remain responsive.
- Existing hashes and localStorage keys preserved.
- No Markdown content edits, payment/CMS integration or new diagrams in this batch.

## Batch 1b — approved reader redesign

- New structure: guide home → chapter page → one page per syllabus section (e.g. `1-1-2`), plus a guide glossary.
- Headings in English with a small Arabic line; Arabic explanation in the body.
- English boxes: Key Takeaways, learning-objective levels (K/H), Key idea / In practice / Exam tip / Common mistake callouts, Labs with saved step checkboxes, diagrams.
- No quizzes or self-check questions inside the guide (question banks are a separate paid product).
- Chapter 1 split by syllabus numbering (1.1.1–1.2.2) and converted to the new boxes as the pilot.
- Chapters 2–5 render in the new shell from their existing files (legacy fields mapped: `english` → title, `title` → Arabic subtitle) until their batch splits and converts them. Their embedded `<details>` self-checks still need removing in those batches.
- Code: `src/lib/genai-guide.ts`, `src/components/genai-guide/*`, `src/scripts/genai-guide.ts`, `src/styles/genai-guide.css`, route `src/pages/store/ct-genai-guide/[view]/[...path].astro`.

### Authoring format for converted chapters

Frontmatter: `order, slug ("1-1-2"), chapter, group ("1.1"), section ("1.1.2"), title (English), titleAr, objectives, minutes, takeaways[], terms[{en, ar, def, match[]}]`. Group titles live in `GROUPS` in `src/lib/genai-guide.ts`.

Body headings: `### Arabic — English` (rendered as English heading + Arabic line). Boxes are raw HTML with no blank lines inside:
`<aside class="gx-callout" data-kind="key|practice|tip|warn"><p class="gx-callout-label">…</p><p>…</p></aside>`,
`<section class="gx-lab" data-lab="HO-x.y.z">…<ol class="gx-lab-steps">…</ol>…</section>`, `<figure class="gx-figure">…</figure>`.

## Batch 2 — all chapters converted

- Chapter 1 aligned with syllabus v1.1: corrected chapter/group/section titles, own-wording learning objectives (`lo` field), coverage gaps filled.
- Chapters 2–5 split into one page per syllabus section (2: 10, 3: 9, 4: 5, 5: 7) in `src/data/readers/ct-genai-full/` (the old `ct-genai-draft/` files are no longer loaded and can be deleted), in the same format as Chapter 1: English headings and boxes, takeaways, terms, labs; embedded self-check questions removed.
- v1.1 changes reflected: one-shot in HO-2.1.2b, Context Manipulation in 3.2.2, AI assistants paragraph in 4.1.3, GenAI-3.1.2 "Identify".
- Still to verify against the English v1.1 PDF: exact section titles and K/H levels for chapters 3–5 (taken from v1.0 and the earlier drafts).

## Review links (staging only)

/store/ct-genai-guide/full/ (all chapters)
/store/ct-genai-guide/preview/ (Chapter 1 free sample)
/store/ct-genai-guide/full/1-1-2/ (example section page)

## Next batches — wait for owner review

2. Chapter 1: syllabus coverage audit and corrections (structure and boxes done in 1b).
3. Chapter 2: same.
4. Chapter 3: same.
5. Chapter 4: same.
6. Chapter 5 and cross-chapter consistency review.

Do not merge to main. All guide routes remain guarded by CMS_BRANCH=staging.
