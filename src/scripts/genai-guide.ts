/**
 * دليل CT-GenAI — سلوك الواجهة: الفهرس والبحث، التقدّم المحفوظ بالمتصفح،
 * حجم الخط، تعريف المصطلحات، خطوات الـ Lab، والتنقل بالأسهم.
 * كل اشي هون تحسين فوق صفحة بتنقرأ كاملة بدون JavaScript.
 */
interface GuideState {
  read: string[];
  last: string | null;
  font: number;
  labs: Record<string, number[]>;
}
interface TermData { en: string; ar: string; def: string; defAr?: string; match: string[]; href: string }

const FONT_SIZES = [16, 17, 18, 20, 22, 24];
const root = document.querySelector<HTMLElement>('.gx');

if (root) {
  const view = root.dataset.guideView || 'preview';
  const kind = root.dataset.guideKind || 'home';
  const slug = root.dataset.guideSlug || '';
  const key = `ta:ct-genai:guide:${view}:v2`;
  const toc = document.querySelector<HTMLDialogElement>('#gx-toc');
  const tocLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-guide-toc-link]')];
  const allSlugs = tocLinks.map((a) => a.dataset.guideTocLink!);

  /* ---------- الحالة المحفوظة ---------- */
  const state: GuideState = { read: [], last: null, font: 18, labs: {} };
  let storageOk = true;
  try {
    const saved = JSON.parse(localStorage.getItem(key) || 'null');
    if (saved && typeof saved === 'object') {
      if (Array.isArray(saved.read)) state.read = saved.read.filter((s: unknown) => typeof s === 'string' && allSlugs.includes(s as string));
      if (typeof saved.last === 'string' && allSlugs.includes(saved.last)) state.last = saved.last;
      if (FONT_SIZES.includes(saved.font)) state.font = saved.font;
      if (saved.labs && typeof saved.labs === 'object') {
        for (const [id, steps] of Object.entries(saved.labs)) {
          if (Array.isArray(steps)) state.labs[id] = steps.filter((n) => Number.isInteger(n));
        }
      }
    }
  } catch {
    storageOk = false;
  }
  const save = () => {
    if (!storageOk) return;
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {
      storageOk = false;
    }
  };
  const isRead = (s: string) => state.read.includes(s);

  /* ---------- ارتفاع الهيدر عشان الشريط اللاصق ---------- */
  const head = document.querySelector<HTMLElement>('.site-head');
  const setTop = () => root.style.setProperty('--gx-top', `${Math.round(head?.getBoundingClientRect().height || 64)}px`);
  setTop();
  if (head && 'ResizeObserver' in window) new ResizeObserver(setTop).observe(head);

  /* ---------- علامات المقروء بكل مكان ---------- */
  const paintProgress = () => {
    document.querySelectorAll<HTMLElement>('[data-guide-toc-link], [data-guide-row]').forEach((el) => {
      const s = el.dataset.guideTocLink || el.dataset.guideRow || '';
      el.classList.toggle('is-read', isRead(s));
      el.classList.toggle('is-last', s === state.last && !isRead(s));
    });
    document.querySelectorAll<HTMLElement>('[data-guide-dot]').forEach((el) => {
      el.classList.toggle('is-read', isRead(el.dataset.guideDot!));
    });
    document.querySelectorAll<HTMLElement>('[data-guide-toc-count]').forEach((el) => {
      const list = el.dataset.guideTocCount!.split(' ');
      el.textContent = `${list.filter(isRead).length}/${list.length}`;
    });
    document.querySelectorAll<HTMLElement>('[data-guide-chapter-card]').forEach((card) => {
      const list = card.dataset.guideChapterCard!.split(' ');
      const done = list.filter(isRead).length;
      const meter = card.querySelector<HTMLElement>('[data-guide-chapter-meter]');
      const status = card.querySelector<HTMLElement>('[data-guide-chapter-status]');
      if (meter) meter.style.width = `${Math.round((done / list.length) * 100)}%`;
      card.classList.toggle('is-done', done === list.length);
      card.classList.toggle('is-active', done > 0 && done < list.length || (done === 0 && !!state.last && list.includes(state.last)));
      if (status) status.textContent = done === list.length ? '✓ مقروء' : done > 0 || (state.last && list.includes(state.last)) ? `جاري · ${done} من ${list.length}` : 'ما بلّشت';
    });
    const total = document.querySelector<HTMLElement>('[data-guide-total-meter]');
    if (total) total.style.width = `${Math.round((state.read.length / Math.max(1, allSlugs.length)) * 100)}%`;
    const totalLabel = document.querySelector<HTMLElement>('[data-guide-total-label]');
    if (totalLabel && state.read.length) totalLabel.textContent = `${state.read.length} من ${allSlugs.length} عنوان مقروء`;
  };

  /* ---------- الرئيسية: كمّل من وين وقفت ---------- */
  const fillContinue = () => {
    const box = document.querySelector<HTMLElement>('[data-guide-continue]');
    if (!box) return;
    const target = state.last || allSlugs.find((s) => !isRead(s));
    const link = tocLinks.find((a) => a.dataset.guideTocLink === target);
    if (!link || (!state.last && !state.read.length)) return;
    const set = (sel: string, text: string) => {
      const el = box.querySelector<HTMLElement>(sel);
      if (el) el.textContent = text;
    };
    set('[data-guide-continue-label]', 'كمّل من وين وقفت');
    set('[data-guide-continue-cta]', 'كمّل القراءة');
    set('[data-guide-continue-chapter]', `Chapter ${link.dataset.chapter}`);
    set('[data-guide-continue-num]', link.dataset.section || '');
    set('[data-guide-continue-title]', link.querySelector('.gx-toc-link-title')?.textContent || '');
    set('[data-guide-continue-ar]', link.dataset.titleAr || '');
    box.querySelector<HTMLAnchorElement>('[data-guide-continue-link]')!.href = link.href;
  };

  /* ---------- الفهرس والبحث ---------- */
  if (toc) {
    const openers = document.querySelectorAll<HTMLElement>('[data-guide-toc-open]');
    const input = toc.querySelector<HTMLInputElement>('#gx-toc-search');
    const status = toc.querySelector<HTMLElement>('[data-guide-toc-status]');
    let lastOpener: HTMLElement | null = null;
    openers.forEach((btn) =>
      btn.addEventListener('click', () => {
        lastOpener = btn;
        if (typeof toc.showModal === 'function') toc.showModal();
        else toc.setAttribute('open', '');
        toc.querySelector<HTMLElement>('[aria-current="page"]')?.scrollIntoView({ block: 'center' });
      }),
    );
    const close = () => {
      if (typeof toc.close === 'function') toc.close();
      else toc.removeAttribute('open');
    };
    toc.querySelector('[data-guide-toc-close]')?.addEventListener('click', close);
    toc.addEventListener('click', (e) => {
      if (e.target === toc) close();
    });
    toc.addEventListener('close', () => lastOpener?.focus());

    let index: { slug: string; text: string }[] = [];
    try {
      index = JSON.parse(toc.querySelector('[data-guide-search-index]')?.textContent || '[]');
    } catch {
      index = [];
    }
    const groups = [...toc.querySelectorAll<HTMLDetailsElement>('[data-guide-toc-chapter]')];
    const openState = groups.map((g) => g.open);
    const normalize = (s: string) => s.toLowerCase().replace(/[ً-ْـ]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
    input?.addEventListener('input', () => {
      const q = normalize(input.value.trim());
      if (!q) {
        tocLinks.forEach((a) => (a.hidden = false));
        toc.querySelectorAll<HTMLElement>('.gx-toc-subgroup, .gx-toc-overview, .gx-toc-chapter.is-locked').forEach((el) => (el.hidden = false));
        groups.forEach((g, i) => {
          g.hidden = false;
          g.open = openState[i];
        });
        if (status) status.textContent = '';
        return;
      }
      const hits = new Set(index.filter((e) => normalize(e.text).includes(q)).map((e) => e.slug));
      tocLinks.forEach((a) => (a.hidden = !hits.has(a.dataset.guideTocLink!)));
      toc.querySelectorAll<HTMLElement>('.gx-toc-subgroup, .gx-toc-overview, .gx-toc-chapter.is-locked').forEach((el) => (el.hidden = true));
      groups.forEach((g) => {
        const any = [...g.querySelectorAll<HTMLAnchorElement>('[data-guide-toc-link]')].some((a) => !a.hidden);
        g.hidden = !any;
        g.open = any;
      });
      if (status) status.textContent = hits.size ? `${hits.size} نتيجة` : 'ما في نتائج. جرّب مصطلح إنجليزي أو كلمة ثانية.';
    });
  }

  /* ---------- صفحة العنوان الفرعي ---------- */
  if (kind === 'section' && slug) {
    state.last = slug;
    save();

    // زر «خلّصت هالعنوان»
    const readBtn = document.querySelector<HTMLButtonElement>('[data-guide-read]');
    const paintRead = () => {
      if (!readBtn) return;
      const done = isRead(slug);
      readBtn.hidden = false;
      readBtn.setAttribute('aria-pressed', String(done));
      readBtn.querySelector('[data-guide-read-label]')!.textContent = done ? 'مقروء · تراجع' : 'خلّصت هالعنوان';
    };
    readBtn?.addEventListener('click', () => {
      state.read = isRead(slug) ? state.read.filter((s) => s !== slug) : [...state.read, slug];
      save();
      paintRead();
      paintProgress();
    });
    paintRead();

    // حجم الخط
    const fontValue = document.querySelector<HTMLElement>('[data-guide-font-value]');
    const applyFont = () => {
      root.style.setProperty('--gx-size', `${state.font}px`);
      if (fontValue) fontValue.textContent = String(state.font);
      document.querySelectorAll<HTMLButtonElement>('[data-guide-font]').forEach((b) => {
        const step = Number(b.dataset.guideFont);
        const i = FONT_SIZES.indexOf(state.font);
        b.disabled = (step < 0 && i === 0) || (step > 0 && i === FONT_SIZES.length - 1);
      });
    };
    document.querySelectorAll<HTMLButtonElement>('[data-guide-font]').forEach((b) =>
      b.addEventListener('click', () => {
        const i = FONT_SIZES.indexOf(state.font) + Number(b.dataset.guideFont);
        state.font = FONT_SIZES[Math.max(0, Math.min(FONT_SIZES.length - 1, i))];
        save();
        applyFont();
      }),
    );
    applyFont();

    // شريط تقدّم القراءة داخل الصفحة
    const article = document.querySelector<HTMLElement>('[data-guide-article]');
    const readbar = document.querySelector<HTMLElement>('[data-guide-readbar]');
    if (article && readbar) {
      let ticking = false;
      const update = () => {
        ticking = false;
        const rect = article.getBoundingClientRect();
        const total = Math.max(1, rect.height - innerHeight * 0.6);
        const ratio = Math.max(0, Math.min(1, -rect.top / total));
        readbar.style.width = `${Math.round(ratio * 100)}%`;
      };
      addEventListener('scroll', () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      }, { passive: true });
      update();
    }

    // «بهالصفحة»: تمييز العنوان الحالي
    const onpage = [...document.querySelectorAll<HTMLAnchorElement>('[data-guide-onpage]')];
    if (onpage.length && 'IntersectionObserver' in window) {
      const targets = onpage.map((a) => document.getElementById(a.dataset.guideOnpage!)).filter(Boolean) as HTMLElement[];
      const io = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
          if (!visible) return;
          onpage.forEach((a) => a.classList.toggle('is-active', a.dataset.guideOnpage === visible.target.id));
        },
        { rootMargin: '-20% 0px -70% 0px' },
      );
      targets.forEach((t) => io.observe(t));
    }

    // خطوات الـ Lab: صناديق اختيار محفوظة
    document.querySelectorAll<HTMLElement>('.gx-lab').forEach((lab) => {
      const id = lab.dataset.lab || '';
      lab.querySelectorAll<HTMLLIElement>('.gx-lab-steps > li').forEach((li, i) => {
        const box = document.createElement('input');
        box.type = 'checkbox';
        box.className = 'gx-lab-check';
        box.setAttribute('aria-label', `Step ${i + 1} done`);
        box.checked = (state.labs[id] || []).includes(i);
        li.classList.toggle('is-done', box.checked);
        box.addEventListener('change', () => {
          const set = new Set(state.labs[id] || []);
          if (box.checked) set.add(i);
          else set.delete(i);
          state.labs[id] = [...set].sort((a, b) => a - b);
          li.classList.toggle('is-done', box.checked);
          save();
        });
        li.prepend(box);
        li.classList.add('has-check');
      });
    });

    // المصطلحات: أول ظهور لكل مصطلح بالشرح بيصير زر بيعرض التعريف
    const prose = document.querySelector<HTMLElement>('[data-guide-prose]');
    let terms: TermData[] = [];
    try {
      terms = JSON.parse(prose?.dataset.guideTerms || '[]');
    } catch {
      terms = [];
    }
    if (prose && terms.length) {
      const skip = 'h1,h2,h3,h4,a,code,pre,figure,aside,button,summary,.gx-lab,.gx-term,th';
      const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pop = document.createElement('div');
      pop.className = 'gx-pop';
      pop.id = 'gx-term-pop';
      pop.setAttribute('role', 'dialog');
      pop.hidden = true;
      document.body.append(pop);
      let openBtn: HTMLButtonElement | null = null;

      const closePop = () => {
        pop.hidden = true;
        openBtn?.setAttribute('aria-expanded', 'false');
        openBtn = null;
      };
      const openPop = (btn: HTMLButtonElement, t: TermData) => {
        if (openBtn === btn) return closePop();
        closePop();
        pop.replaceChildren();
        const top = document.createElement('div');
        top.className = 'gx-pop-top';
        const en = document.createElement('b');
        en.lang = 'en';
        en.textContent = t.en;
        const ar = document.createElement('span');
        ar.textContent = t.ar;
        top.append(en, ar);
        const def = document.createElement('p');
        def.lang = 'en';
        def.dir = 'ltr';
        def.className = 'gx-en';
        def.textContent = t.def;
        const defAr = document.createElement('p');
        defAr.className = 'gx-ar';
        defAr.lang = 'ar';
        defAr.dir = 'rtl';
        defAr.textContent = t.defAr || '';
        const link = document.createElement('a');
        link.href = t.href;
        link.textContent = 'افتح في المصطلحات ←';
        pop.append(top, def, ...(t.defAr ? [defAr] : []), link);
        pop.setAttribute('aria-label', t.en);
        pop.hidden = false;
        const r = btn.getBoundingClientRect();
        const width = Math.min(340, innerWidth - 32);
        pop.style.width = `${width}px`;
        const left = Math.max(16, Math.min(innerWidth - width - 16, r.left + r.width / 2 - width / 2));
        pop.style.left = `${left + scrollX}px`;
        const below = r.bottom + 8 + pop.offsetHeight <= innerHeight;
        pop.style.top = `${(below ? r.bottom + 8 : Math.max(8, r.top - 8 - pop.offsetHeight)) + scrollY}px`;
        btn.setAttribute('aria-expanded', 'true');
        openBtn = btn;
      };

      for (const t of terms) {
        let done = false;
        for (const m of t.match) {
          if (done) break;
          const re = new RegExp(`(^|[^A-Za-z])(${escape(m)})(?![A-Za-z])`);
          const walker = document.createTreeWalker(prose, NodeFilter.SHOW_TEXT, {
            acceptNode: (n) => (n.parentElement?.closest(skip) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
          });
          let node: Node | null;
          while ((node = walker.nextNode())) {
            const text = node.nodeValue || '';
            const hit = re.exec(text);
            if (!hit) continue;
            const start = hit.index + hit[1].length;
            const target = (node as Text).splitText(start);
            target.splitText(hit[2].length);
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'gx-term';
            btn.setAttribute('aria-expanded', 'false');
            btn.setAttribute('aria-controls', 'gx-term-pop');
            btn.textContent = target.nodeValue;
            target.replaceWith(btn);
            btn.addEventListener('click', (e) => {
              e.stopPropagation();
              openPop(btn, t);
            });
            done = true;
            break;
          }
        }
      }
      document.addEventListener('click', (e) => {
        if (!pop.hidden && !pop.contains(e.target as Node)) closePop();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !pop.hidden) {
          const btn = openBtn;
          closePop();
          btn?.focus();
        }
      });
      // الموبايل بيبعت resize لما يتغيّر شريط المتصفح؛ بنسكّر بس لما يتغيّر العرض
      let lastWidth = innerWidth;
      addEventListener('resize', () => {
        if (innerWidth !== lastWidth) {
          lastWidth = innerWidth;
          closePop();
        }
      });
    }

    // الأسهم: بالعربي ← هو التالي
    document.addEventListener('keydown', (e) => {
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      const el = e.target as HTMLElement;
      if (el.closest('input, textarea, select, [contenteditable], dialog[open]')) return;
      if (e.key === 'ArrowLeft') document.querySelector<HTMLAnchorElement>('[data-guide-next]')?.click();
      if (e.key === 'ArrowRight') document.querySelector<HTMLAnchorElement>('[data-guide-prev]')?.click();
    });
  }

  paintProgress();
  fillContinue();
  if (!storageOk) {
    document.querySelectorAll<HTMLElement>('[data-guide-read]').forEach((b) => (b.title = 'حفظ التقدّم غير متاح على هذا المتصفح'));
  }
}
