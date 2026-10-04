const root = document.querySelector<HTMLElement>('#genai-reader');
if (root) {
  const q = <T extends HTMLElement = HTMLElement>(s: string) => root.querySelector<T>(s)!;
  const articles = [...root.querySelectorAll<HTMLElement>('[data-reader-unit]')];
  const links = [...root.querySelectorAll<HTMLAnchorElement>('[data-reader-link]')];
  const ids = articles.map(a => a.id);
  const isFull = root.dataset.readerMode === 'full';
  const key = isFull ? 'ta:ct-genai:reader-full:v1' : 'ta:ct-genai:reader-preview:v1';
  const state: {unit:string; positions:Record<string,number>; completed:string[]; fontSize:number} = {unit:ids[0],positions:{},completed:[],fontSize:18};
  try {
    const saved = JSON.parse(localStorage.getItem(key) || 'null');
    if (saved && typeof saved === 'object') {
      if (ids.includes(saved.unit)) state.unit = saved.unit;
      state.completed = Array.isArray(saved.completed) ? [...new Set<string>(saved.completed.filter((id:unknown) => typeof id === 'string' && ids.includes(id)))] : [];
      if ([16,18,20,22,24].includes(saved.fontSize)) state.fontSize = saved.fontSize;
      for (const id of ids) { const n = saved.positions?.[id]; if (typeof n === 'number' && Number.isFinite(n)) state.positions[id] = Math.max(0, Math.min(1,n)); }
    }
  } catch { q('#gr-storage-status').textContent = 'حفظ التقدم غير متاح الآن؛ يمكنك متابعة القراءة بشكل طبيعي.'; }
  const resume = {unit:state.unit, position:state.positions[state.unit] || 0};
  let current = ids.includes(location.hash.slice(1)) ? location.hash.slice(1) : ids[0];
  let recording = false;
  const persist = () => { try { localStorage.setItem(key,JSON.stringify(state)); } catch { q('#gr-storage-status').textContent = 'تعذّر حفظ التقدم على هذا المتصفح؛ القراءة متاحة.'; } };
  const toc = q<HTMLDetailsElement>('.gr-toc');
  const mobile = matchMedia('(max-width:900px)');
  toc.open = !mobile.matches;
  mobile.addEventListener('change', () => { toc.open = !mobile.matches; });
  const head = document.querySelector<HTMLElement>('.site-head');
  const offset = () => { root.style.setProperty('--gr-top', `${(head?.getBoundingClientRect().height || 72) + 12}px`); };
  offset();
  if (head) new ResizeObserver(offset).observe(head);
  for (const table of root.querySelectorAll('table')) {
    const wrap = document.createElement('div'); wrap.className = 'gr-table-scroll'; wrap.tabIndex = 0;
    wrap.setAttribute('role','region'); wrap.setAttribute('aria-label','جدول مقارنة؛ يمكن تمريره أفقيًا');
    table.before(wrap); wrap.append(table);
  }
  const topGap = () => (head?.getBoundingClientRect().height || 72) + q('.gr-tools').getBoundingClientRect().height + 24;
  const capture = () => {
    if (!recording) return;
    const article = articles[ids.indexOf(current)];
    state.unit = current;
    state.positions[current] = Math.max(0,Math.min(1,(topGap()-article.getBoundingClientRect().top)/Math.max(1,article.offsetHeight-innerHeight+topGap())));
    persist();
  };
  const render = () => {
    const index = ids.indexOf(current);
    articles.forEach(a => { a.hidden = a.id !== current; });
    links.forEach(a => {
      const id = a.dataset.readerLink!;
      if (id === current) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
      (a.querySelector('[data-reader-check]') as HTMLElement).hidden = !state.completed.includes(id);
    });
    root.querySelectorAll<HTMLButtonElement>('[data-reader-complete]').forEach(b => {
      const done = state.completed.includes(b.dataset.readerComplete!); b.hidden = false;
      b.setAttribute('aria-pressed',String(done)); b.textContent = done ? '✓ مكتملة — تراجع عن الإكمال' : 'تحديد الوحدة كمكتملة';
    });
    q('#gr-position').textContent = `الوحدة ${index+1} من ${ids.length}`;
    q('#gr-completion').textContent = `${state.completed.length} من ${ids.length} مكتملة`;
    q<HTMLProgressElement>('#gr-progress').max = ids.length;
    q<HTMLProgressElement>('#gr-progress').value = state.completed.length;
    q('#gr-page-number').textContent = `${index+1} / ${ids.length}`;
    q<HTMLButtonElement>('#gr-prev').disabled = index === 0;
    q<HTMLButtonElement>('#gr-next').disabled = index === ids.length-1;
    q('#gr-next').textContent = index === ids.length-1 ? (isFull ? 'نهاية المسودة' : 'نهاية المعاينة') : 'الوحدة التالية ←';
    q('.gr-end').hidden = index !== ids.length-1;
    root.style.setProperty('--gr-size',`${state.fontSize}px`);
    q('#gr-font-size').textContent = String(state.fontSize);
    q<HTMLButtonElement>('#gr-font-less').disabled = state.fontSize === 16;
    q<HTMLButtonElement>('#gr-font-more').disabled = state.fontSize === 24;
  };
  const navigate = (id:string, push = true, position = 0) => {
    if (!ids.includes(id)) return;
    capture(); current = id; state.unit = id; recording = false; render();
    q('.gr-resume').hidden = true;
    if (mobile.matches) toc.open = false;
    if (push && location.hash !== `#${id}`) history.pushState(null,'',`#${id}`);
    requestAnimationFrame(() => {
      const article = articles[ids.indexOf(id)];
      article.querySelector<HTMLElement>('h2')?.focus({preventScroll:true});
      scrollTo({top:Math.max(0,scrollY+article.getBoundingClientRect().top-topGap()+position*Math.max(1,article.offsetHeight-innerHeight+topGap())),behavior:'instant'});
      recording = true; capture();
    });
  };
  links.forEach(a => a.addEventListener('click', e => { if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; e.preventDefault(); navigate(a.dataset.readerLink!); }));
  q('#gr-prev').addEventListener('click',()=>navigate(ids[ids.indexOf(current)-1]));
  q('#gr-next').addEventListener('click',()=>navigate(ids[ids.indexOf(current)+1]));
  q('[data-reader-restart]').addEventListener('click',e=>{e.preventDefault();navigate(ids[0]);});
  window.addEventListener('popstate',()=>navigate(ids.includes(location.hash.slice(1)) ? location.hash.slice(1) : ids[0],false));
  root.querySelectorAll<HTMLButtonElement>('[data-reader-complete]').forEach(b=>b.addEventListener('click',()=>{
    const id = b.dataset.readerComplete!; state.completed = state.completed.includes(id) ? state.completed.filter(x=>x!==id) : [...state.completed,id]; render(); persist();
  }));
  for (const [selector,delta] of [['#gr-font-less',-2],['#gr-font-more',2]] as const) q(selector).addEventListener('click',()=>{state.fontSize=Math.max(16,Math.min(24,state.fontSize+delta));render();persist();});
  const normalize = (s:string) => s.toLowerCase().normalize('NFKC').replace(/[\u064B-\u065F\u0670\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي');
  const texts = articles.map(a => (a.querySelector('.gr-prose')?.textContent || '').replace(/\s+/g,' ').trim());
  const search = q<HTMLInputElement>('#gr-search'); search.disabled = false;
  search.addEventListener('input',()=>{
    const term = normalize(search.value.trim()); let count = 0;
    links.forEach((a,i)=>{
      const match = !term || normalize(`${a.textContent} ${texts[i]}`).includes(term);
      a.hidden = !match; if(match) count++;
      a.querySelector('.gr-search-snippet')?.remove();
      if(term && match) { const snippet=document.createElement('span'); snippet.className='gr-search-snippet'; const at=normalize(texts[i]).indexOf(term); snippet.textContent=`…${texts[i].slice(Math.max(0,at-30),Math.max(0,at-30)+110)}…`; a.children[1].append(snippet); }
    });
    q('#gr-search-status').textContent = term ? (count ? `${count} وحدات تطابق البحث` : 'لا نتائج. جرّب مصطلحًا آخر بالعربي أو الإنجليزي.') : '';
  });
  q('.gr-tools').hidden=false; q('.gr-pagination').hidden=false; render();
  if ((resume.position > 0 || resume.unit !== ids[0]) && !location.hash) {
    q('.gr-resume').hidden=false;
    q('#gr-resume-text').textContent=`آخر قراءة: ${articles[ids.indexOf(resume.unit)].querySelector('h2')?.textContent}`;
  }
  q('#gr-resume').addEventListener('click',()=>navigate(resume.unit,true,resume.position));
  q('#gr-dismiss').addEventListener('click',()=>{q('.gr-resume').hidden=true;recording=true;capture();});
  let timer:ReturnType<typeof setTimeout>;
  window.addEventListener('scroll',()=>{clearTimeout(timer);timer=setTimeout(capture,250);},{passive:true});
  root.addEventListener('pointerdown',()=>{ if(q('.gr-resume').hidden) recording=true; },{passive:true});
  window.addEventListener('wheel',()=>{if(q('.gr-resume').hidden)recording=true;},{passive:true});
  window.addEventListener('keydown',e=>{if(['PageDown','PageUp','ArrowDown','ArrowUp',' '].includes(e.key)&&q('.gr-resume').hidden)recording=true;});
  window.addEventListener('pagehide',capture);
  if (ids.includes(location.hash.slice(1))) navigate(current,false,resume.unit === current ? resume.position : 0);
}
