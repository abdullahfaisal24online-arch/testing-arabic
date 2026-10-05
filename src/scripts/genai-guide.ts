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
  mode: 'cards' | 'article';
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
  const state: GuideState = { read: [], last: null, font: 18, labs: {}, mode: 'cards' };
  let storageOk = true;
  try {
    const saved = JSON.parse(localStorage.getItem(key) || 'null');
    if (saved && typeof saved === 'object') {
      if (Array.isArray(saved.read)) state.read = saved.read.filter((s: unknown) => typeof s === 'string' && allSlugs.includes(s as string));
      if (typeof saved.last === 'string' && allSlugs.includes(saved.last)) state.last = saved.last;
      if (FONT_SIZES.includes(saved.font)) state.font = saved.font;
      if (saved.mode === 'article' || saved.mode === 'cards') state.mode = saved.mode;
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

  /* ---------- وضع البطاقات ----------
   * نفس محتوى الصفحة بالضبط، بس بينعرض بطاقة بطاقة بدل مقال طويل.
   * ما في نسخ ولا إعادة كتابة: البطاقة = مجموعة عناصر من الصفحة بتنعرض والباقي بيختفي.
   * كل عنوان فرعي (h3) بطاقة، الـ Lab بطاقة لحاله، وصناديق الامتحان اللي بآخر العنوان بطاقة.
   * البطاقة اللي ما بتوسعها الشاشة بتنقسم لأكثر من بطاقة. */
  const setupDeck = (article: HTMLElement) => {
    const prose = article.querySelector<HTMLElement>('[data-guide-prose]');
    if (!prose) return null;
    const pick = (sel: string) => article.querySelector<HTMLElement>(sel);
    const headEl = pick('.gx-page-head');
    const objEl = pick('.gx-objectives');
    const takeEl = pick('.gx-takeaways');
    const footEl = pick('.gx-article-foot');
    const nextLink = document.querySelector<HTMLAnchorElement>('[data-guide-next]');
    const prevLink = document.querySelector<HTMLAnchorElement>('[data-guide-prev]');
    const section = article.closest<HTMLElement>('.gx-section');
    const bar = document.querySelector<HTMLElement>('.gx-bar');
    const readbar = document.querySelector<HTMLElement>('[data-guide-readbar]');
    const onpage = [...document.querySelectorAll<HTMLAnchorElement>('[data-guide-onpage]')];

    // الهيكل: شريط تقدّم فوق، البطاقة، وأزرار تحت
    const stage = document.createElement('div');
    stage.className = 'gx-stage';
    stage.tabIndex = -1;
    stage.append(...article.childNodes);
    const top = document.createElement('div');
    top.className = 'gx-deck-top';
    const dots = document.createElement('div');
    dots.className = 'gx-deck-dots';
    const label = document.createElement('div');
    label.className = 'gx-deck-label';
    const labelNow = document.createElement('span');
    labelNow.setAttribute('aria-live', 'polite');
    const labelNext = document.createElement('span');
    labelNext.className = 'gx-deck-upnext';
    label.append(labelNow, labelNext);
    top.append(dots, label);
    const nav = document.createElement('nav');
    nav.className = 'gx-deck-nav';
    nav.setAttribute('aria-label', 'التنقل بين البطاقات');
    const mkBtn = (cls: string, html: string, aria?: string) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = `gx-deck-btn ${cls}`;
      b.innerHTML = html;
      if (aria) b.setAttribute('aria-label', aria);
      return b;
    };
    const prevBtn = mkBtn('gx-deck-prev', '<span aria-hidden="true">→</span><span class="gx-deck-btn-text">السابق</span>', 'البطاقة السابقة');
    const tocBtn = mkBtn('gx-deck-toc', '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h10"></path></svg>', 'الفهرس');
    const nextBtn = mkBtn('gx-deck-next', '');
    const nextText = document.createElement('span');
    nextBtn.append(nextText);
    nav.append(prevBtn, tocBtn, nextBtn);
    article.append(top, stage, nav);
    tocBtn.addEventListener('click', () => document.querySelector<HTMLElement>('.gx-toc-btn, [data-guide-toc-open]')?.click());

    // البطاقات المنطقية من محتوى الصفحة
    type Slide = { title: string; nodes: HTMLElement[] };
    const headTitle = (h: Element) =>
      (h.querySelector('.gx-h-en')?.textContent || h.querySelector('.gx-h-ar')?.textContent || h.textContent || '').trim();
    const logical: Slide[] = [];
    logical.push({ title: 'Start', nodes: [headEl, objEl].filter(Boolean) as HTMLElement[] });
    let cur: Slide | null = null;
    let lastTitle = 'Overview';
    for (const el of [...prose.children] as HTMLElement[]) {
      if (/^H[23]$/.test(el.tagName)) {
        lastTitle = headTitle(el);
        cur = { title: lastTitle, nodes: [el] };
        logical.push(cur);
      } else if (el.matches('.gx-lab')) {
        logical.push({ title: (el.querySelector('.gx-lab-title .gx-en')?.textContent || 'Lab').trim(), nodes: [el] });
        cur = null;
      } else {
        if (!cur) {
          cur = { title: lastTitle, nodes: [] };
          logical.push(cur);
        }
        cur.nodes.push(el);
      }
    }
    // صناديق التلميح/الخطأ الشائع اللي بآخر العنوان بتصير بطاقة «للامتحان»
    for (let i = logical.length - 1; i > 0; i--) {
      const s = logical[i];
      let k = s.nodes.length;
      while (k > 0 && s.nodes[k - 1].matches('aside.gx-callout')) k--;
      const run = s.nodes.slice(k);
      const rest = s.nodes.slice(0, k).filter((n) => !/^H[23]$/.test(n.tagName));
      if (run.length && rest.length && run.some((n) => /^(tip|warn)$/.test(n.dataset.kind || ''))) {
        s.nodes = s.nodes.slice(0, k);
        logical.splice(i + 1, 0, { title: 'Exam focus', nodes: run });
      }
    }
    logical.push({ title: takeEl ? 'Key Takeaways' : 'Finish', nodes: [takeEl, footEl].filter(Boolean) as HTMLElement[] });
    const slides = logical.filter((s) => s.nodes.length);

    // البطاقة الطويلة بتنقسم على مستوى أصغر: خطوات الـ Lab، صفوف الجداول، عناصر القوائم.
    // عنوان الـ Lab ورأس الجدول بيتكرروا ببداية البطاقة اللي بتكمّل.
    const SPLIT = '.gx-callout, .gx-lab, .gx-lab-body, .gx-lab-steps, .gx-table, table, tbody, .gx-takeaways, .gx-takeaways > ul, .gx-objectives, .gx-prose > ul, .gx-prose > ol, .gx-article-foot';
    const STICKY = ':scope > .gx-lab-head, :scope > thead, :scope > .gx-callout-label';
    stage.classList.add('gx-split');
    prose.classList.add('gx-split');
    const unitsOf = (el: HTMLElement): HTMLElement[] => {
      if (!el.matches(SPLIT)) return [el];
      el.classList.add('gx-split');
      if (el.tagName === 'OL') [...el.children].forEach((li, i) => li.setAttribute('value', String(i + 1)));
      return ([...el.children] as HTMLElement[]).filter((c) => !c.matches('thead')).flatMap(unitsOf);
    };
    const units = new Map(slides.map((sl) => [sl, sl.nodes.flatMap(unitsOf)]));
    const stickiesFor = (u: HTMLElement) => {
      const out: HTMLElement[] = [];
      for (let el = u.parentElement; el && el !== stage; el = el.parentElement) {
        if (el.classList.contains('gx-split')) out.push(...el.querySelectorAll<HTMLElement>(STICKY));
      }
      return out.filter((x) => x !== u && !x.contains(u));
    };

    type Page = { title: string; nodes: HTMLElement[]; part: number; parts: number };
    let pages: Page[] = [];
    let idx = 0;
    let shown: HTMLElement[] = [];

    const show = (nodes: HTMLElement[]) => {
      shown.forEach((n) => n.classList.remove('is-shown'));
      const set = new Set<HTMLElement>();
      for (const u of nodes) {
        set.add(u);
        stickiesFor(u).forEach((x) => set.add(x));
        for (let el = u.parentElement; el && el !== stage; el = el.parentElement) set.add(el);
      }
      shown = [...set];
      shown.forEach((n) => n.classList.add('is-shown'));
    };

    const sizeStage = () => {
      const narrow = matchMedia('(max-width: 900px)').matches;
      const topH = Number.parseFloat(getComputedStyle(root).getPropertyValue('--gx-top')) || 64;
      const barH = bar?.getBoundingClientRect().height || 0;
      const chrome = top.offsetHeight + nav.offsetHeight + 12 * 2 + (narrow ? 26 : 40);
      const h = Math.max(320, Math.floor(innerHeight - topH - barH - chrome));
      root.style.setProperty('--gx-card-h', `${h}px`);
    };

    const isHead = (n: HTMLElement) => /^H[23]$/.test(n.tagName);
    const paginate = () => {
      const anchor = pages[idx]?.nodes[0];
      sizeStage();
      const cs = getComputedStyle(stage);
      const avail = stage.clientHeight - Number.parseFloat(cs.paddingTop) - Number.parseFloat(cs.paddingBottom) - 30;
      // على الموبايل البطاقة بتتحمّل سكرول قصير من جوّا بدل ما تنقسم لبطاقات كثيرة
      const limit = matchMedia('(max-width: 900px)').matches ? avail * 1.8 : avail;
      pages = [];
      for (const sl of slides) {
        const list = units.get(sl) || [];
        show(list);
        const rects = list.map((n) => n.getBoundingClientRect());
        const groups: HTMLElement[][] = [];
        let group: HTMLElement[] = [];
        let base = rects[0].top;
        const reserve = (u: HTMLElement) =>
          stickiesFor(u).reduce((h, x) => h + x.getBoundingClientRect().height + 12, 0);
        list.forEach((n, i) => {
          if (group.length && rects[i].bottom - base > limit) {
            // ما بنترك عنوان لحاله بآخر البطاقة
            const carry = group.length > 1 && isHead(group[group.length - 1]) ? group.pop()! : null;
            groups.push(group);
            const first = carry || n;
            group = carry ? [carry] : [];
            base = first.getBoundingClientRect().top - reserve(first);
          }
          group.push(n);
        });
        groups.push(group);
        groups.forEach((g, part) => pages.push({ title: sl.title, nodes: g, part: part + 1, parts: groups.length }));
      }
      const found = anchor ? pages.findIndex((pg) => pg.nodes.includes(anchor)) : -1;
      idx = found >= 0 ? found : Math.max(0, Math.min(idx, pages.length - 1));
      dots.replaceChildren(
        ...pages.map((pg, i) => {
          const d = document.createElement('button');
          d.type = 'button';
          d.className = 'gx-deck-dot';
          d.setAttribute('aria-label', `${i + 1} · ${pg.title}`);
          d.addEventListener('click', () => go(i, true));
          return d;
        }),
      );
      render();
    };

    const fitView = () => {
      if (!section) return;
      const topH = Number.parseFloat(getComputedStyle(root).getPropertyValue('--gx-top')) || 64;
      const barH = bar?.getBoundingClientRect().height || 0;
      const target = Math.max(0, section.getBoundingClientRect().top + scrollY - topH - barH);
      if (Math.abs(scrollY - target) > 2) scrollTo({ top: target });
    };

    const paintScrollHint = () => {
      const more = stage.scrollHeight - stage.clientHeight - stage.scrollTop > 8;
      stage.classList.toggle('has-more', more);
    };
    stage.addEventListener('scroll', paintScrollHint, { passive: true });
    const render = () => {
      const p = pages[idx];
      if (!p) return;
      show(p.nodes);
      stage.scrollTop = 0;
      requestAnimationFrame(paintScrollHint);
      [...dots.children].forEach((d, i) => {
        d.classList.toggle('is-done', i < idx);
        d.classList.toggle('is-current', i === idx);
        if (i === idx) d.setAttribute('aria-current', 'step');
        else d.removeAttribute('aria-current');
      });
      const part = p.parts > 1 ? ` (${p.part}/${p.parts})` : '';
      labelNow.textContent = `${idx + 1} / ${pages.length} · ${p.title}${part}`;
      const nxt = pages[idx + 1];
      labelNext.textContent = nxt ? `التالي: ${nxt.title}` : '';
      const last = idx === pages.length - 1;
      nextText.textContent = !last ? (idx === 0 ? 'ابدأ ←' : 'التالي ←') : nextLink ? 'العنوان التالي ←' : 'خلصت ✓';
      nextBtn.classList.toggle('is-page', last && !!nextLink);
      nextBtn.disabled = last && !nextLink;
      prevBtn.disabled = idx === 0 && !prevLink;
      if (readbar) readbar.style.width = `${Math.round(((idx + 1) / pages.length) * 100)}%`;
      const heads = new Set(pages.slice(0, idx + 1).flatMap((x) => x.nodes).filter(isHead).map((n) => n.id));
      const curHead = [...heads].pop();
      onpage.forEach((a) => a.classList.toggle('is-active', a.dataset.guideOnpage === curHead));
      try {
        history.replaceState(null, '', `#card-${idx + 1}`);
      } catch {
        /* ما في مشكلة */
      }
    };

    const go = (i: number, focus = false) => {
      if (i < 0) {
        if (prevLink) location.href = `${prevLink.href.split('#')[0]}#end`;
        return;
      }
      if (i >= pages.length) {
        if (nextLink) nextLink.click();
        return;
      }
      idx = i;
      render();
      fitView();
      if (focus) stage.focus({ preventScroll: true });
    };

    nextBtn.addEventListener('click', () => go(idx + 1));
    prevBtn.addEventListener('click', () => go(idx - 1));

    // السحب على الموبايل: لليمين = التالي (اتجاه القراءة بالعربي)
    let sx = 0;
    let sy = 0;
    stage.addEventListener('touchstart', (e) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    }, { passive: true });
    stage.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5 && !(e.target as HTMLElement).closest('table, pre, .gx-figure')) {
        go(dx > 0 ? idx + 1 : idx - 1);
      }
    }, { passive: true });

    // «في هذه الصفحة»: بوضع البطاقات بتنقلك للبطاقة
    onpage.forEach((a) =>
      a.addEventListener('click', (e) => {
        if (!on()) return;
        const target = document.getElementById(a.dataset.guideOnpage || '');
        const i = pages.findIndex((p) => !!target && p.nodes.some((n) => n === target || n.contains(target)));
        if (i >= 0) {
          e.preventDefault();
          go(i, true);
        }
      }),
    );

    // زر التبديل بين البطاقات والمقال
    const modeBtn = document.createElement('button');
    modeBtn.type = 'button';
    modeBtn.className = 'gx-mode-btn';
    document.querySelector('.gx-bar-tools')?.prepend(modeBtn);
    const on = () => root.classList.contains('gx-cards');
    const paintMode = () => {
      const cards = on();
      modeBtn.setAttribute('aria-pressed', String(!cards));
      modeBtn.innerHTML = cards
        ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 5h14M5 10h14M5 15h14M5 20h9"></path></svg><span>اعرض كمقال</span>'
        : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="3"></rect></svg><span>اعرض كبطاقات</span>';
    };
    const setMode = (mode: GuideState['mode'], persist = true) => {
      const anchor = pages[idx]?.nodes[0];
      root.classList.toggle('gx-cards', mode === 'cards');
      if (persist) {
        state.mode = mode;
        save();
      }
      paintMode();
      if (mode === 'cards') {
        paginate();
        fitView();
      } else {
        shown.forEach((n) => n.classList.remove('is-shown'));
        try {
          history.replaceState(null, '', location.pathname + location.search);
        } catch {
          /* ما في مشكلة */
        }
        if (anchor && idx > 0) anchor.scrollIntoView({ block: 'start' });
        else scrollTo({ top: 0 });
      }
    };
    modeBtn.addEventListener('click', () => setMode(on() ? 'article' : 'cards'));

    // البداية: من الرابط (#card-3 أو #end أو #عنوان) أو من أول بطاقة
    root.classList.toggle('gx-cards', state.mode === 'cards');
    paintMode();
    if (on()) {
      paginate();
      const h = decodeURIComponent(location.hash.slice(1));
      const m = /^card-(\d+)$/.exec(h);
      if (h === 'end') idx = pages.length - 1;
      else if (m) idx = Math.min(pages.length - 1, Math.max(0, Number(m[1]) - 1));
      else if (h) {
        const t = document.getElementById(h);
        const i = pages.findIndex((p) => t && p.nodes.some((n) => n === t || n.contains(t)));
        if (i >= 0) idx = i;
      }
      render();
      fitView();
    }

    // إعادة التقسيم لما يتغيّر حجم الشاشة أو الخط
    let lastW = innerWidth;
    let lastH = innerHeight;
    let timer = 0;
    const relayout = () => {
      if (!on()) return;
      clearTimeout(timer);
      timer = window.setTimeout(paginate, 120);
    };
    addEventListener('resize', () => {
      // شريط المتصفح بالموبايل بيغيّر الارتفاع شوي؛ بنتجاهل الفرق الصغير
      if (innerWidth === lastW && Math.abs(innerHeight - lastH) < 90) return;
      lastW = innerWidth;
      lastH = innerHeight;
      relayout();
    });
    root.addEventListener('gx:relayout', relayout);
    document.fonts?.ready.then(relayout);

    return { on, next: () => go(idx + 1, true), prev: () => go(idx - 1, true) };
  };

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
        root.dispatchEvent(new Event('gx:relayout'));
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
        if (root.classList.contains('gx-cards')) return;
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

    const deck = article ? setupDeck(article) : null;

    // الأسهم: بالعربي ← هو التالي (بطاقة بوضع البطاقات، وعنوان بوضع المقال)
    document.addEventListener('keydown', (e) => {
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      const el = e.target as HTMLElement;
      if (el.closest('input, textarea, select, [contenteditable], dialog[open]')) return;
      if (deck?.on()) {
        if (e.key === 'ArrowLeft') { e.preventDefault(); deck.next(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); deck.prev(); }
        return;
      }
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
