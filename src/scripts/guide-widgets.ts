/**
 * أدوات تفاعلية لأدلة الدراسة (EP، BVA، Decision Table، State Transition، Coverage، تقدير، مخاطر، أولويات).
 * كل أداة بتنكتب بالمحتوى كـ:
 *   <figure class="gx-figure gx-widget" data-widget="ep" data-config='{...}'></figure>
 * وهون بتنرسم. لازم يشتغل قبل genai-guide.ts عشان البطاقات تنقاس بعد ما الأدوات تنرسم.
 * النصوص بالإنجليزي (زي باقي الصناديق التفاعلية بالدليل). الحالة بالذاكرة فقط، ما في حفظ.
 */

export {};

type Cfg = Record<string, any>;

const h = <K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string | number) => {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text !== undefined) el.textContent = String(text);
  return el;
};
const btn = (label: string, cls = 'gx-w-btn') => {
  const b = h('button', cls, label);
  b.type = 'button';
  return b;
};
const pct = (n: number, d: number) => (d ? Math.round((n / d) * 100) : 0);

/** عدّاد تغطية: اسم + n/d + نسبة + شريط */
function meter(label: string) {
  const wrap = h('div', 'gx-w-meter');
  const top = h('div', 'gx-w-meter-top');
  const name = h('span', '', label);
  const val = h('b');
  top.append(name, val);
  const bar = h('div', 'gx-w-meter-bar');
  const fill = h('span');
  bar.append(fill);
  wrap.append(top, bar);
  const set = (n: number, d: number) => {
    const p = pct(n, d);
    val.textContent = `${n}/${d} · ${p}%`;
    fill.style.width = `${p}%`;
    wrap.classList.toggle('is-full', d > 0 && n >= d);
  };
  return { el: wrap, set };
}

function head(fig: HTMLElement, cfg: Cfg, kind: string) {
  const top = h('div', 'gx-w-head');
  const tag = h('span', 'gx-w-tag', kind);
  const title = h('b', 'gx-w-title', cfg.title || kind);
  top.append(tag, title);
  fig.append(top);
  if (cfg.spec) fig.append(h('p', 'gx-w-spec', cfg.spec));
}

function caption(fig: HTMLElement, text?: string) {
  if (text) fig.append(h('figcaption', '', text));
}

/* ---------- Equivalence Partitioning ---------- */
interface Part { label: string; from?: number | null; to?: number | null; valid: boolean }
const inPart = (p: Part, v: number) => (p.from == null || v >= p.from) && (p.to == null || v <= p.to);
const partRange = (p: Part) =>
  p.from == null ? `≤ ${p.to}` : p.to == null ? `≥ ${p.from}` : p.from === p.to ? `${p.from}` : `${p.from}–${p.to}`;

function ep(fig: HTMLElement, cfg: Cfg) {
  head(fig, cfg, 'Equivalence Partitioning');
  const parts: Part[] = cfg.partitions;
  const line = h('div', 'gx-w-parts');
  const cells = parts.map((p) => {
    const c = h('div', `gx-w-part ${p.valid ? 'is-valid' : 'is-invalid'}`);
    c.append(h('b', '', p.label), h('span', 'gx-mono', partRange(p)), h('small', '', p.valid ? 'valid' : 'invalid'));
    line.append(c);
    return c;
  });
  const form = h('form', 'gx-w-form');
  const input = h('input');
  input.type = 'number';
  input.step = 'any';
  input.placeholder = cfg.placeholder || 'Test value';
  input.setAttribute('aria-label', 'Test value');
  const add = btn('Add test');
  add.type = 'submit';
  const reset = btn('Reset', 'gx-w-btn gx-w-ghost');
  form.append(input, add, reset);
  const log = h('div', 'gx-w-log');
  const m = meter('Partitions covered');
  const note = h('p', 'gx-w-note');
  note.setAttribute('aria-live', 'polite');
  fig.append(line, form, log, m.el, note);
  const hit = new Set<number>();
  const paint = () => {
    cells.forEach((c, i) => c.classList.toggle('is-hit', hit.has(i)));
    m.set(hit.size, parts.length);
  };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = Number(input.value);
    if (input.value.trim() === '' || Number.isNaN(v)) return;
    const i = parts.findIndex((p) => inPart(p, v));
    const chip = h('span', 'gx-w-chip', v);
    if (i < 0) {
      chip.classList.add('is-bad');
      note.textContent = `${v} is not in any partition. Partitions must cover every possible value.`;
    } else {
      const again = hit.has(i);
      hit.add(i);
      chip.classList.add(parts[i].valid ? 'is-valid' : 'is-invalid');
      chip.title = parts[i].label;
      note.textContent = again
        ? `${v} falls in "${parts[i].label}", already covered. One value per partition is enough for EP coverage.`
        : `${v} covers "${parts[i].label}" (${parts[i].valid ? 'valid' : 'invalid'} partition).`;
    }
    log.append(chip);
    input.value = '';
    input.focus();
    paint();
  });
  reset.addEventListener('click', () => {
    hit.clear();
    log.replaceChildren();
    note.textContent = '';
    paint();
  });
  paint();
  caption(fig, cfg.caption);
}

/* ---------- Boundary Value Analysis ---------- */
function bva(fig: HTMLElement, cfg: Cfg) {
  head(fig, cfg, 'Boundary Value Analysis');
  const parts: Part[] = cfg.partitions;
  const step = Number(cfg.step || 1);
  const bounds = new Set<number>();
  parts.forEach((p) => {
    if (p.from != null) bounds.add(p.from);
    if (p.to != null) bounds.add(p.to);
  });
  const sorted = [...bounds].sort((a, b) => a - b);
  const round = (n: number) => Math.round(n * 1e6) / 1e6;
  const itemsFor = (mode: number) => {
    const s = new Set<number>();
    for (const b of sorted) {
      s.add(b);
      if (mode === 3) {
        s.add(round(b - step));
        s.add(round(b + step));
      }
    }
    return [...s].sort((a, b) => a - b);
  };
  let mode = Number(cfg.mode || 2);
  const tabs = h('div', 'gx-w-tabs');
  const t2 = btn('2-value BVA', 'gx-w-tab');
  const t3 = btn('3-value BVA', 'gx-w-tab');
  tabs.append(t2, t3);
  const line = h('div', 'gx-w-parts');
  parts.forEach((p) => {
    const c = h('div', `gx-w-part ${p.valid ? 'is-valid' : 'is-invalid'}`);
    c.append(h('b', '', p.label), h('span', 'gx-mono', partRange(p)));
    line.append(c);
  });
  const row = h('div', 'gx-w-items');
  const form = h('form', 'gx-w-form');
  const input = h('input');
  input.type = 'number';
  input.step = 'any';
  input.placeholder = 'Test value';
  input.setAttribute('aria-label', 'Test value');
  const add = btn('Add test');
  add.type = 'submit';
  const reset = btn('Reset', 'gx-w-btn gx-w-ghost');
  form.append(input, add, reset);
  const m = meter('Boundary coverage');
  const note = h('p', 'gx-w-note');
  note.setAttribute('aria-live', 'polite');
  fig.append(tabs, line, row, form, m.el, note);
  const tested = new Set<number>();
  const paint = () => {
    const items = itemsFor(mode);
    t2.setAttribute('aria-pressed', String(mode === 2));
    t3.setAttribute('aria-pressed', String(mode === 3));
    row.replaceChildren(
      h('span', 'gx-w-items-label', 'Coverage items:'),
      ...items.map((v) => h('span', `gx-w-chip gx-mono${tested.has(v) ? ' is-hit' : ''}${bounds.has(v) ? ' is-bound' : ''}`, v)),
    );
    m.set(items.filter((v) => tested.has(v)).length, items.length);
  };
  t2.addEventListener('click', () => { mode = 2; note.textContent = 'Each boundary value and its closest neighbour in the adjacent partition.'; paint(); });
  t3.addEventListener('click', () => { mode = 3; note.textContent = 'Each boundary value plus both of its neighbours.'; paint(); });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = Number(input.value);
    if (input.value.trim() === '' || Number.isNaN(v)) return;
    tested.add(round(v));
    const items = itemsFor(mode);
    note.textContent = items.includes(round(v))
      ? `${v} is a coverage item${bounds.has(round(v)) ? ' (a boundary value)' : ' (a neighbour)'}.`
      : `${v} is not a coverage item for ${mode}-value BVA. It is inside a partition, away from the boundaries.`;
    input.value = '';
    input.focus();
    paint();
  });
  reset.addEventListener('click', () => { tested.clear(); note.textContent = ''; paint(); });
  paint();
  caption(fig, cfg.caption);
}

/* ---------- Decision Table ---------- */
function dt(fig: HTMLElement, cfg: Cfg) {
  head(fig, cfg, 'Decision Table Testing');
  const conds: { id: string; label: string }[] = cfg.conditions;
  const acts: { id: string; label: string }[] = cfg.actions;
  const n = conds.length;
  const combos: boolean[][] = [];
  for (let i = 0; i < 2 ** n; i++) combos.push(conds.map((_, k) => ((i >> (n - 1 - k)) & 1) === 0));
  const matches = (rule: Cfg, combo: boolean[]) =>
    conds.every((c, k) => rule.when[c.id] === undefined || rule.when[c.id] === '-' || rule.when[c.id] === combo[k]);
  const infeasible = (combo: boolean[]) => (cfg.infeasible || []).some((r: Cfg) => matches(r, combo));
  const actionsFor = (combo: boolean[]): string[] => (cfg.rules.find((r: Cfg) => matches(r, combo))?.do as string[]) || [];
  const state = conds.map(() => true);
  const covered = new Set<number>();
  const toggles = h('div', 'gx-w-toggles');
  const tbtns = conds.map((c, k) => {
    const b = btn('', 'gx-w-toggle');
    b.addEventListener('click', () => { state[k] = !state[k]; paint(); });
    toggles.append(b);
    return b;
  });
  const run = btn('Run this test');
  const reset = btn('Reset', 'gx-w-btn gx-w-ghost');
  const ctr = h('div', 'gx-w-form');
  ctr.append(run, reset);
  const out = h('p', 'gx-w-note');
  out.setAttribute('aria-live', 'polite');
  const wrap = h('div', 'gx-w-tablewrap');
  const table = h('table', 'gx-w-dt');
  wrap.append(table);
  const m = meter('Feasible columns covered');
  fig.append(toggles, ctr, out, wrap, m.el);
  const feasibleIdx = combos.map((c, i) => (infeasible(c) ? -1 : i)).filter((i) => i >= 0);
  const paint = () => {
    conds.forEach((c, k) => {
      tbtns[k].textContent = `${c.label}: ${state[k] ? 'T' : 'F'}`;
      tbtns[k].setAttribute('aria-pressed', String(state[k]));
    });
    const ci = combos.findIndex((c) => c.every((v, k) => v === state[k]));
    const inf = infeasible(combos[ci]);
    const a = actionsFor(combos[ci]);
    out.textContent = inf
      ? `Column R${ci + 1}: this combination is infeasible (N/A), so it is not a coverage item.`
      : `Column R${ci + 1} → ${a.length ? a.map((id) => acts.find((x) => x.id === id)?.label).join(', ') : 'no action'}`;
    run.disabled = inf;
    const thead = h('thead');
    const hr = h('tr');
    hr.append(h('th', '', ''), ...combos.map((_, i) => h('th', i === ci ? 'is-cur' : '', `R${i + 1}`)));
    thead.append(hr);
    const tb = h('tbody');
    conds.forEach((c, k) => {
      const tr = h('tr');
      tr.append(h('th', '', c.label), ...combos.map((combo, i) => {
        const td = h('td', `${i === ci ? 'is-cur' : ''}${covered.has(i) ? ' is-hit' : ''}${infeasible(combo) ? ' is-na' : ''}`, combo[k] ? 'T' : 'F');
        return td;
      }));
      tb.append(tr);
    });
    acts.forEach((a2) => {
      const tr = h('tr', 'is-action');
      tr.append(h('th', '', a2.label), ...combos.map((combo, i) => {
        const na = infeasible(combo);
        return h('td', `${i === ci ? 'is-cur' : ''}${covered.has(i) ? ' is-hit' : ''}${na ? ' is-na' : ''}`, na ? 'N/A' : actionsFor(combo).includes(a2.id) ? 'X' : '');
      }));
      tb.append(tr);
    });
    table.replaceChildren(thead, tb);
    m.set(feasibleIdx.filter((i) => covered.has(i)).length, feasibleIdx.length);
  };
  run.addEventListener('click', () => {
    covered.add(combos.findIndex((c) => c.every((v, k) => v === state[k])));
    paint();
  });
  reset.addEventListener('click', () => { covered.clear(); paint(); });
  paint();
  caption(fig, cfg.caption);
}

/* ---------- State Transition ---------- */
function st(fig: HTMLElement, cfg: Cfg) {
  head(fig, cfg, 'State Transition Testing');
  const states: string[] = cfg.states;
  const events: string[] = cfg.events;
  const trans: { from: string; event: string; to: string; label?: string }[] = cfg.transitions;
  const find = (s: string, e: string) => trans.find((t) => t.from === s && t.event === e);
  let cur = cfg.initial as string;
  let tc = 1;
  let path: string[] = [cur];
  let dead = false;
  const seenStates = new Set<string>([cur]);
  const seenValid = new Set<string>();
  const seenInvalid = new Set<string>();
  const allInvalid = states.flatMap((s) => events.filter((e) => !find(s, e)).map((e) => `${s}|${e}`));
  const now = h('div', 'gx-w-now');
  const evs = h('div', 'gx-w-toggles');
  const ebtns = events.map((e) => {
    const b = btn(e, 'gx-w-event');
    b.addEventListener('click', () => fire(e));
    evs.append(b);
    return b;
  });
  const ctr = h('div', 'gx-w-form');
  const next = btn('New test case');
  const reset = btn('Reset all', 'gx-w-btn gx-w-ghost');
  ctr.append(next, reset);
  const note = h('p', 'gx-w-note');
  note.setAttribute('aria-live', 'polite');
  const pathEl = h('p', 'gx-w-path gx-mono');
  const wrap = h('div', 'gx-w-tablewrap');
  const table = h('table', 'gx-w-dt gx-w-st');
  wrap.append(table);
  const m1 = meter('All states');
  const m2 = meter('Valid transitions (0-switch)');
  const m3 = meter('All transitions');
  const meters = h('div', 'gx-w-meters');
  meters.append(m1.el, m2.el, m3.el);
  fig.append(now, evs, ctr, note, pathEl, wrap, meters);
  function fire(e: string) {
    if (dead) return;
    const t = find(cur, e);
    if (!t) {
      seenInvalid.add(`${cur}|${e}`);
      note.textContent = `Invalid: "${e}" is not allowed in ${cur}. The system should reject it. Test one invalid transition per test case, then start a new one.`;
      path.push(`✗ ${e}`);
      dead = true;
    } else {
      seenValid.add(`${cur}|${e}`);
      note.textContent = `${cur} —${e}${t.label ? ` / ${t.label}` : ''}→ ${t.to}`;
      cur = t.to;
      seenStates.add(cur);
      path.push(`${e} → ${cur}`);
    }
    paint();
  }
  const paint = () => {
    now.replaceChildren(h('span', '', `Test case ${tc} · current state`), h('b', dead ? 'is-bad' : '', dead ? `${cur} (stopped)` : cur));
    ebtns.forEach((b) => (b.disabled = dead));
    pathEl.textContent = path.join('  ·  ');
    const thead = h('thead');
    const hr = h('tr');
    hr.append(h('th', '', 'State \\ Event'), ...events.map((e) => h('th', '', e)));
    thead.append(hr);
    const tb = h('tbody');
    states.forEach((s) => {
      const tr = h('tr');
      tr.append(h('th', `${seenStates.has(s) ? 'is-hit' : ''}${s === cur ? ' is-cur' : ''}`, s));
      events.forEach((e) => {
        const t = find(s, e);
        const key = `${s}|${e}`;
        tr.append(h('td', t ? (seenValid.has(key) ? 'is-hit' : '') : `is-na${seenInvalid.has(key) ? ' is-hit-bad' : ''}`, t ? t.to : '—'));
      });
      tb.append(tr);
    });
    table.replaceChildren(thead, tb);
    m1.set(seenStates.size, states.length);
    m2.set(seenValid.size, trans.length);
    m3.set(seenValid.size + seenInvalid.size, trans.length + allInvalid.length);
  };
  next.addEventListener('click', () => {
    tc++;
    cur = cfg.initial;
    path = [cur];
    dead = false;
    note.textContent = 'New test case started from the initial state.';
    paint();
  });
  reset.addEventListener('click', () => {
    tc = 1;
    cur = cfg.initial;
    path = [cur];
    dead = false;
    seenStates.clear();
    seenStates.add(cur);
    seenValid.clear();
    seenInvalid.clear();
    note.textContent = '';
    paint();
  });
  paint();
  caption(fig, cfg.caption);
}

/* ---------- Statement & Branch Coverage ---------- */
type CNode = { id: string; s: string } | { id: string; if: string; then: CNode[]; else?: CNode[] };
const OPS: Record<string, (a: number, b: number) => boolean> = {
  '>=': (a, b) => a >= b, '<=': (a, b) => a <= b, '==': (a, b) => a === b, '!=': (a, b) => a !== b, '>': (a, b) => a > b, '<': (a, b) => a < b,
};
/** شرط بسيط فقط: «متغير عملية رقم»، ممكن يجتمعوا بـ && أو || (بدون أقواس) */
function evalCond(expr: string, vars: Record<string, number>): boolean {
  const ors = expr.split('||');
  return ors.some((part) =>
    part.split('&&').every((atom) => {
      const m = atom.trim().match(/^([A-Za-z_]\w*)\s*(>=|<=|==|!=|>|<)\s*(-?\d+(?:\.\d+)?)$/);
      if (!m) return false;
      return OPS[m[2]](vars[m[1]] ?? 0, Number(m[3]));
    }),
  );
}
function cov(fig: HTMLElement, cfg: Cfg) {
  head(fig, cfg, 'Statement & Branch Coverage');
  const prog: CNode[] = cfg.program;
  const stmts: string[] = [];
  const branches: string[] = [];
  const lines: { id?: string; text: string; depth: number; branch?: string }[] = [];
  const walk = (nodes: CNode[], d: number) => {
    for (const n of nodes) {
      stmts.push(n.id);
      if ('s' in n) lines.push({ id: n.id, text: n.s, depth: d });
      else {
        branches.push(`${n.id}:T`, `${n.id}:F`);
        lines.push({ id: n.id, text: `if (${n.if}) {`, depth: d });
        walk(n.then, d + 1);
        if (n.else?.length) {
          lines.push({ text: '} else {', depth: d, branch: `${n.id}:F` });
          walk(n.else, d + 1);
        }
        lines.push({ text: '}', depth: d });
      }
    }
  };
  walk(prog, 0);
  const inputs: { name: string; value?: number }[] = cfg.inputs;
  const form = h('form', 'gx-w-form');
  const fields = inputs.map((v) => {
    const lab = h('label', 'gx-w-field');
    const inp = h('input');
    inp.type = 'number';
    inp.step = 'any';
    inp.value = String(v.value ?? 0);
    lab.append(h('span', 'gx-mono', v.name), inp);
    form.append(lab);
    return inp;
  });
  const run = btn('Run test');
  run.type = 'submit';
  const reset = btn('Reset', 'gx-w-btn gx-w-ghost');
  form.append(run, reset);
  const code = h('pre', 'gx-w-code');
  const lineEls = lines.map((l) => {
    const el = h('span', 'gx-w-line');
    el.textContent = `${'  '.repeat(l.depth)}${l.text}`;
    code.append(el);
    return el;
  });
  const log = h('div', 'gx-w-log');
  const m1 = meter('Statement coverage');
  const m2 = meter('Branch coverage (decision outcomes)');
  const meters = h('div', 'gx-w-meters');
  meters.append(m1.el, m2.el);
  const note = h('p', 'gx-w-note');
  note.setAttribute('aria-live', 'polite');
  fig.append(form, code, log, meters, note);
  const doneS = new Set<string>();
  const doneB = new Set<string>();
  const paint = (lastS?: Set<string>) => {
    lines.forEach((l, i) => {
      const hit = l.id ? doneS.has(l.id) : l.branch ? doneB.has(l.branch) : false;
      lineEls[i].classList.toggle('is-hit', hit);
      lineEls[i].classList.toggle('is-last', !!(lastS && l.id && lastS.has(l.id)));
      lineEls[i].classList.toggle('is-exec', !!l.id);
    });
    m1.set(stmts.filter((s) => doneS.has(s)).length, stmts.length);
    m2.set(branches.filter((b) => doneB.has(b)).length, branches.length);
  };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const vars: Record<string, number> = {};
    inputs.forEach((v, i) => (vars[v.name] = Number(fields[i].value) || 0));
    const ranS = new Set<string>();
    const ranB: string[] = [];
    const exec = (nodes: CNode[]) => {
      for (const n of nodes) {
        ranS.add(n.id);
        if ('if' in n) {
          const ok = evalCond(n.if, vars);
          ranB.push(`${n.id}:${ok ? 'T' : 'F'}`);
          exec(ok ? n.then : n.else || []);
        }
      }
    };
    exec(prog);
    const newS = [...ranS].filter((s) => !doneS.has(s)).length;
    const newB = ranB.filter((b) => !doneB.has(b)).length;
    ranS.forEach((s) => doneS.add(s));
    ranB.forEach((b) => doneB.add(b));
    log.append(h('span', 'gx-w-chip gx-mono', inputs.map((v) => `${v.name}=${vars[v.name]}`).join(', ')));
    note.textContent = `This test executed ${ranS.size} statements and took ${ranB.length ? ranB.map((b) => b.replace(':T', ' true').replace(':F', ' false')).join(', ') : 'no decisions'}. New: ${newS} statements, ${newB} branches.`;
    paint(ranS);
  });
  reset.addEventListener('click', () => { doneS.clear(); doneB.clear(); log.replaceChildren(); note.textContent = ''; paint(); });
  paint();
  caption(fig, cfg.caption);
}

/* ---------- Three-point estimation ---------- */
function est(fig: HTMLElement, cfg: Cfg) {
  head(fig, cfg, 'Three-Point Estimation');
  const form = h('div', 'gx-w-form');
  const mk = (name: string, label: string, v: number) => {
    const lab = h('label', 'gx-w-field');
    const inp = h('input');
    inp.type = 'number';
    inp.min = '0';
    inp.step = 'any';
    inp.value = String(v);
    lab.append(h('span', '', `${name} · ${label}`), inp);
    form.append(lab);
    return inp;
  };
  const a = mk('a', 'optimistic', cfg.a ?? 6);
  const m = mk('m', 'most likely', cfg.m ?? 9);
  const b = mk('b', 'pessimistic', cfg.b ?? 18);
  const res = h('div', 'gx-w-result');
  const note = h('p', 'gx-w-note');
  fig.append(form, res, note);
  const unit = cfg.unit || 'person-hours';
  const fmt = (x: number) => (Math.round(x * 100) / 100).toString();
  const paint = () => {
    const A = Number(a.value), M = Number(m.value), B = Number(b.value);
    const E = (A + 4 * M + B) / 6;
    const SD = (B - A) / 6;
    res.replaceChildren(
      h('span', 'gx-mono', `E = (a + 4m + b) / 6 = (${A} + 4×${M} + ${B}) / 6 = ${fmt(E)}`),
      h('span', 'gx-mono', `SD = (b − a) / 6 = (${B} − ${A}) / 6 = ${fmt(SD)}`),
      h('b', '', `Estimate: ${fmt(E)} ± ${fmt(SD)} ${unit}`),
    );
    note.textContent = !(A <= M && M <= B) ? 'Check the inputs: usually a ≤ m ≤ b.' : '';
  };
  [a, m, b].forEach((x) => x.addEventListener('input', paint));
  paint();
  caption(fig, cfg.caption);
}

/* ---------- Risk matrix ---------- */
function risk(fig: HTMLElement, cfg: Cfg) {
  head(fig, cfg, 'Risk Level');
  const L: string[] = cfg.likelihood || ['Low', 'Medium', 'High', 'Very high'];
  const I: string[] = cfg.impact || ['Low', 'Medium', 'High', 'Very high'];
  const levels = ['Low', 'Medium', 'High', 'Very high'];
  const levelOf = (score: number, max: number) => levels[Math.min(levels.length - 1, Math.floor(((score - 1) / max) * levels.length))];
  let li = 1, ii = 1;
  const grid = h('div', 'gx-w-matrix');
  grid.style.setProperty('--cols', String(I.length + 1));
  const res = h('p', 'gx-w-result');
  res.setAttribute('aria-live', 'polite');
  fig.append(grid, res);
  const max = L.length * I.length;
  const paint = () => {
    grid.replaceChildren(h('span', 'gx-w-mx-corner', 'Likelihood ↓ · Impact →'), ...I.map((x) => h('span', 'gx-w-mx-h', x)));
    [...L].reverse().forEach((lab, rr) => {
      const r = L.length - 1 - rr;
      grid.append(h('span', 'gx-w-mx-h', lab));
      I.forEach((_, c) => {
        const score = (r + 1) * (c + 1);
        const lvl = levelOf(score, max);
        const cell = btn(String(score), `gx-w-mx-cell lvl-${levels.indexOf(lvl)}${r === li && c === ii ? ' is-cur' : ''}`);
        cell.setAttribute('aria-label', `Likelihood ${L[r]}, impact ${I[c]}: score ${score}, ${lvl}`);
        cell.addEventListener('click', () => { li = r; ii = c; paint(); });
        grid.append(cell);
      });
    });
    const score = (li + 1) * (ii + 1);
    res.textContent = `Likelihood ${L[li]} (${li + 1}) × Impact ${I[ii]} (${ii + 1}) = ${score} → risk level: ${levelOf(score, max)}`;
  };
  paint();
  caption(fig, cfg.caption);
}

/* ---------- Test case prioritization with dependencies ---------- */
function prio(fig: HTMLElement, cfg: Cfg) {
  head(fig, cfg, 'Test Case Prioritization');
  const tests: { id: string; priority: number; deps?: string[] }[] = cfg.tests.map((t: Cfg) => ({ ...t }));
  const wrap = h('div', 'gx-w-tablewrap');
  const table = h('table', 'gx-w-dt');
  wrap.append(table);
  const res = h('p', 'gx-w-result gx-mono');
  res.setAttribute('aria-live', 'polite');
  fig.append(wrap, res);
  // طريقة المنهج: خذ أعلى اختبار أولوية متبقٍ؛ نفّذ اعتمادياته غير المنفّذة أولًا (بنفس القاعدة)، ثم نفّذه.
  const order = () => {
    const done: string[] = [];
    const byPrio = (a: { id: string; priority: number }, b: { id: string; priority: number }) => a.priority - b.priority || a.id.localeCompare(b.id);
    const visit = (id: string, stack: string[]) => {
      if (done.includes(id) || stack.includes(id)) return;
      const t = tests.find((x) => x.id === id);
      if (!t) return;
      const deps = (t.deps || []).map((d) => tests.find((x) => x.id === d)).filter(Boolean) as typeof tests;
      deps.sort(byPrio).forEach((d) => visit(d.id, [...stack, id]));
      done.push(id);
    };
    [...tests].sort(byPrio).forEach((t) => visit(t.id, []));
    return done;
  };
  const paint = () => {
    const hr = h('tr');
    hr.append(h('th', '', 'Test case'), h('th', '', 'Priority (1 = highest)'), h('th', '', 'Depends on'));
    const tb = h('tbody');
    tests.forEach((t) => {
      const tr = h('tr');
      const sel = h('select');
      for (let p = 1; p <= tests.length; p++) {
        const o = h('option', '', p);
        o.value = String(p);
        if (p === t.priority) o.selected = true;
        sel.append(o);
      }
      sel.setAttribute('aria-label', `Priority of ${t.id}`);
      sel.addEventListener('change', () => { t.priority = Number(sel.value); paint(); });
      const td = h('td');
      td.append(sel);
      tr.append(h('th', 'gx-mono', t.id), td, h('td', 'gx-mono', (t.deps || []).join(', ') || '—'));
      tb.append(tr);
    });
    const th = h('thead');
    th.append(hr);
    table.replaceChildren(th, tb);
    res.textContent = `Execution order: ${order().join(' → ')}`;
  };
  paint();
  caption(fig, cfg.caption);
}

const WIDGETS: Record<string, (fig: HTMLElement, cfg: Cfg) => void> = { ep, bva, dt, st, cov, est, risk, prio };

document.querySelectorAll<HTMLElement>('.gx-widget[data-widget]').forEach((fig) => {
  const fn = WIDGETS[fig.dataset.widget || ''];
  if (!fn) return;
  try {
    const cfg = JSON.parse(fig.dataset.config || '{}');
    fig.replaceChildren();
    fn(fig, cfg);
    fig.classList.add('is-ready');
  } catch (err) {
    console.error('guide widget failed', fig.dataset.widget, err);
  }
});
