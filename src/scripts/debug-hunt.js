/**
 * Debug Hunt — لعبة retro خفيفة: اصطاد الـ bugs (الدعاسيق) قبل ما توصل Production.
 * كل الرسم pixel على canvas بدقة 320x180، وكل الصوت متولّد بـ Web Audio (بدون ملفات).
 */

const H = 180, GROUND = 118, HUD_Y = 144;
let W = 320; // العرض المنطقي — بيكبر على الشاشات العريضة (وضع اللعب بالعرض)
const FONT = '8px "Press Start 2P", monospace';
const SITE_URL = 'https://testing-arabic.com/debug-hunt/';

const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* تجاهل */ } },
};

const rand = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const pad6 = (n) => String(Math.max(0, Math.round(n))).padStart(6, '0');

/* ===================== السبرايتات ===================== */
const LB = [
  '...K.......K...',
  '....K.....K....',
  '.....KKKKK.....',
  '....KWKKKWK....',
  '.K.KKKKKKKKK.K.',
  '..KrRRRKRRRrK..',
  '..rRHKRKRKKRr..',
  '.KrRKKRKRKKRrK.',
  '.rRRRRRKRRRRRr.',
  '.rRKKRRKRRKKRr.',
  'KrRKKRRKRRKKRrK',
  '.rRRRRRKRRRRRr.',
  '..rRRKRKRKRRr..',
  '.K.rRRRKRRRr.K.',
  '....rrrKrrr....',
];
const LB_MINI = LB.slice(2, 14).map((r) => r.slice(1, 14));
const PAL = {
  red: { K: '#15161c', W: '#f3efe6', R: '#e8412f', r: '#a8231a', H: '#ff9a86' },
  gold: { K: '#15161c', W: '#fff7d6', R: '#f7c948', r: '#b8861d', H: '#fff1a8' },
  off: { K: '#2a3a55', W: '#2a3a55', R: '#2a3a55', r: '#223049', H: '#2a3a55' },
  esc: { K: '#3a2330', W: '#3a2330', R: '#5b2a35', r: '#40202a', H: '#5b2a35' },
  flash: { K: '#ffffff', W: '#ffffff', R: '#ffffff', r: '#ffffff', H: '#ffffff' },
};
const BF = [
  '.cc.......cc.',
  'cCCc.....cCCc',
  'cCWCc.K.cCWCc',
  'cCCCCcKcCCCCc',
  '.cCCCCKCCCCc.',
  '..cCCcKcCCc..',
  '.cCCc.K.cCCc.',
  'cCCc..K..cCCc',
  '.cc.......cc.',
];
const BF_CLOSED = [
  '....cc.cc....',
  '...cCCKCCc...',
  '...cCWKWCc...',
  '...cCCKCCc...',
  '....cCKCc....',
  '....cCKCc....',
  '...cCcKcCc...',
  '...cCc.cCc...',
  '....c...c....',
];
const BF_PAL = { c: '#1b6fa3', C: '#38bdf8', W: '#f0f6ff', K: '#0b162a' };

/* ===================== أدوات الرسم ===================== */
function makeCanvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function px(g, x, y, w, h, col) { g.fillStyle = col; g.fillRect(x | 0, y | 0, w, h); }
function sprite(g, rows, pal, ox, oy, flipY = false) {
  ox = Math.round(ox); oy = Math.round(oy);
  for (let y = 0; y < rows.length; y++) {
    const r = rows[flipY ? rows.length - 1 - y : y];
    for (let x = 0; x < r.length; x++) {
      const col = pal[r[x]]; if (!col) continue;
      g.fillStyle = col; g.fillRect(ox + x, oy + y, 1, 1);
    }
  }
}
function wings(g, x, y, open) {
  g.globalAlpha = 0.42; const w = '#bfe4ff';
  x = Math.round(x); y = Math.round(y);
  if (open) {
    px(g, x - 4, y + 4, 5, 2, w); px(g, x - 7, y + 6, 8, 2, w); px(g, x - 8, y + 8, 8, 2, w); px(g, x - 6, y + 10, 5, 1, w);
    px(g, x + 14, y + 4, 5, 2, w); px(g, x + 14, y + 6, 8, 2, w); px(g, x + 15, y + 8, 8, 2, w); px(g, x + 16, y + 10, 5, 1, w);
  } else { px(g, x - 3, y + 1, 4, 6, w); px(g, x + 14, y + 1, 4, 6, w); }
  g.globalAlpha = 1;
}
function text(g, s, x, y, col = '#f0f6ff', align = 'left', shadow = true) {
  g.font = FONT; g.textBaseline = 'top'; g.textAlign = align; g.direction = 'ltr';
  if (shadow) { g.fillStyle = '#000'; g.fillText(s, Math.round(x) + 1, Math.round(y) + 1); }
  g.fillStyle = col; g.fillText(s, Math.round(x), Math.round(y));
}
function testoSprite(g, x, y, laugh) {
  x = Math.round(x); y = Math.round(y);
  px(g, x + 11, y - 6, 2, 6, '#c9d6ea'); px(g, x + 10, y - 9, 4, 4, '#f6823b'); px(g, x + 11, y - 8, 2, 2, '#ffc59e');
  px(g, x + 2, y, 20, 16, '#f6823b'); px(g, x, y + 2, 24, 12, '#f6823b'); px(g, x + 2, y + 1, 20, 2, '#ff9d5c'); px(g, x + 2, y + 14, 20, 2, '#c7621f');
  px(g, x + 4, y + 4, 16, 9, '#0b162a');
  if (laugh) {
    px(g, x + 6, y + 6, 4, 1, '#38bdf8'); px(g, x + 7, y + 5, 2, 1, '#38bdf8'); px(g, x + 14, y + 6, 4, 1, '#38bdf8'); px(g, x + 15, y + 5, 2, 1, '#38bdf8');
    px(g, x + 8, y + 9, 8, 3, '#38bdf8'); px(g, x + 9, y + 10, 6, 1, '#0b162a');
  } else {
    px(g, x + 7, y + 6, 3, 3, '#38bdf8'); px(g, x + 14, y + 6, 3, 3, '#38bdf8'); px(g, x + 9, y + 10, 6, 1, '#38bdf8');
    px(g, x + 8, y + 9, 1, 1, '#38bdf8'); px(g, x + 15, y + 9, 1, 1, '#38bdf8');
  }
  px(g, x - 2, y + 5, 2, 6, '#c7621f'); px(g, x + 24, y + 5, 2, 6, '#c7621f');
  px(g, x + 5, y + 17, 14, 16, '#1b2d4d'); px(g, x + 6, y + 18, 12, 14, '#24406b'); px(g, x + 9, y + 21, 6, 4, '#38bdf8'); px(g, x + 10, y + 22, 4, 2, '#0b162a');
  if (laugh) { px(g, x - 4, y + 16, 5, 4, '#24406b'); px(g, x + 23, y + 16, 5, 4, '#24406b'); }
  else { px(g, x + 19, y + 10, 4, 10, '#24406b'); px(g, x + 19, y + 6, 5, 5, '#f6823b'); }
}

/* الخلفية الثابتة (سما، نجوم، قمر، شجرة) — تنرسم مرة وحدة */
function buildBackground() {
  const c = makeCanvas(W, HUD_Y), g = c.getContext('2d');
  const sky = ['#070f1e', '#0a1528', '#0d1b33', '#11223f', '#152a4b', '#1a3356'];
  sky.forEach((col, i) => px(g, 0, i * 20, W, 20, col));
  for (let i = 1; i < sky.length; i++) for (let x = 0; x < W; x += 2) { px(g, x + (i % 2), i * 20 - 1, 1, 1, sky[i]); px(g, x + ((i + 1) % 2), i * 20, 1, 1, sky[i - 1]); }
  const sx = W / 320;
  [[20, 12], [48, 30], [90, 8], [130, 22], [170, 10], [205, 34], [240, 14], [280, 26], [300, 8], [60, 50], [150, 46], [262, 52], [110, 60]].map(([x, y]) => [Math.round(x * sx), y]).forEach(([x, y], i) => {
    px(g, x, y, 1, 1, i % 3 ? '#8fb6e0' : '#38bdf8');
    if (i % 4 === 0) { ['#2b4f7a'].forEach((cc) => { px(g, x - 1, y, 1, 1, cc); px(g, x + 1, y, 1, 1, cc); px(g, x, y - 1, 1, 1, cc); px(g, x, y + 1, 1, 1, cc); }); }
  });
  const mx = W - 52;
  px(g, mx, 18, 12, 12, '#f0f6ff'); px(g, mx - 2, 20, 16, 8, '#f0f6ff'); px(g, mx + 2, 16, 8, 16, '#f0f6ff'); px(g, mx + 3, 21, 3, 2, '#c9d6ea'); px(g, mx + 7, 26, 2, 2, '#c9d6ea');
  // شجرة
  const tx = 22, ty = 36;
  px(g, tx + 14, ty + 20, 6, 50, '#3a2616'); px(g, tx + 15, ty + 20, 2, 50, '#4e3420'); px(g, tx + 6, ty + 34, 10, 3, '#3a2616'); px(g, tx + 20, ty + 28, 10, 3, '#3a2616');
  const cn = [[0, 10, 22, 16], [8, 0, 22, 14], [18, 8, 20, 18], [4, 20, 16, 10], [22, 22, 14, 8]];
  cn.forEach(([a, b, w, h]) => px(g, tx + a - 4, ty + b - 6, w + 4, h, '#0f3b34'));
  cn.forEach(([a, b, w, h]) => px(g, tx + a - 2, ty + b - 4, w, h - 2, '#17564a'));
  [[4, 2], [14, 6], [24, 12], [8, 14], [28, 20]].forEach(([a, b]) => px(g, tx + a, ty + b, 4, 2, '#22786a'));
  // شجيرة
  const bx = W - 70, by = 104;
  px(g, bx, by + 6, 34, 12, '#0f3b34'); px(g, bx + 4, by, 24, 10, '#0f3b34'); px(g, bx + 3, by + 3, 20, 10, '#17564a'); px(g, bx + 10, by + 2, 8, 3, '#22786a');
  return c;
}
/* العشب والتربة — طبقة قدّام Testo */
function buildGrass() {
  const c = makeCanvas(W, HUD_Y), g = c.getContext('2d');
  px(g, 0, GROUND, W, 26, '#1d6b52');
  for (let x = 0; x < W; x++) {
    const h = (Math.sin(x * 1.7) * 2 + Math.sin(x * 0.45) * 3 + (x % 5 === 0 ? 4 : 0)) | 0;
    px(g, x, GROUND - 4 - h, 1, 6 + h, x % 3 ? '#1d6b52' : '#238462');
    if (x % 7 === 0) px(g, x, GROUND - 6 - h, 1, 2, '#2ea27a');
  }
  for (let i = 0; i < 260; i++) { const x = (i * 37) % W, y = GROUND + ((i * 13) % 20); px(g, x, y, 1, 2, i % 2 ? '#238462' : '#175843'); }
  px(g, 0, 138, W, 6, '#3b2b22');
  for (let x = 0; x < W; x += 9) px(g, x + (x % 4), 139 + (x % 3), 2, 1, '#5a4232');
  return c;
}


/* ===================== حاوية الزبالة + الصورة القديمة ===================== */
const BIN = { x: 287, y: 85, w: 24, h: 26 };
function buildBin() {
  const c = makeCanvas(32, 34), g = c.getContext('2d');
  const o = '#1c2533', body = '#5b6b80', rid = '#46546a', hi = '#8193ab', lid = '#6d7f98';
  // زبالة طالعة من فوق
  px(g, 6, 2, 6, 3, '#f7c948'); px(g, 5, 3, 2, 3, '#f7c948'); px(g, 12, 1, 2, 3, '#e8d9a8');   // قشرة موز
  px(g, 15, 1, 7, 4, '#e9eef5'); px(g, 16, 2, 5, 1, '#b9c4d3');                                 // ورقة
  px(g, 22, 3, 4, 3, '#6b4a2e');                                                                 // علبة
  // الغطا (مايل شوي ومفتوح)
  px(g, 2, 5, 28, 3, o); px(g, 3, 5, 26, 2, lid); px(g, 3, 5, 26, 1, hi); px(g, 13, 3, 6, 2, o); px(g, 14, 3, 4, 1, lid);
  // الجسم
  px(g, 4, 8, 24, 26, o); px(g, 5, 8, 22, 25, body);
  for (let x = 8; x < 26; x += 5) px(g, x, 10, 2, 21, rid);
  px(g, 6, 9, 2, 22, hi);
  px(g, 5, 31, 22, 2, '#3a4658');
  return c;
}
function buildDefaultPhoto() {
  // صورة قديمة افتراضية (شخص pixel بألوان sepia) لو ما في صورة من الـ CMS
  const c = makeCanvas(16, 18), g = c.getContext('2d');
  px(g, 0, 0, 16, 18, '#c9a877'); px(g, 3, 4, 10, 12, '#a47d4d'); px(g, 5, 3, 6, 6, '#e1c294'); px(g, 5, 2, 6, 2, '#5a3b22');
  px(g, 6, 5, 1, 1, '#3a2616'); px(g, 9, 5, 1, 1, '#3a2616'); px(g, 7, 7, 2, 1, '#8a5a3a'); px(g, 4, 10, 8, 6, '#6b4a2e');
  return c;
}

/* ===================== الصوت (Web Audio) ===================== */
const NOTE = (base, semi) => base * Math.pow(2, semi / 12);
class Audio8 {
  constructor() {
    this.ctx = null; this.musicOn = store.get('dh_music', true); this.sfxOn = store.get('dh_sfx', true);
    this.playing = false; this.step = 0; this.nextTime = 0; this.timer = null;
    this.tempo = 120; this.intense = false; this.combo = false;
  }
  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain(); this.master.gain.value = 0.32; this.master.connect(this.ctx.destination);
    this.music = this.ctx.createGain(); this.music.gain.value = this.musicOn ? 0.55 : 0; this.music.connect(this.master);
    this.fx = this.ctx.createGain(); this.fx.gain.value = this.sfxOn ? 1 : 0; this.fx.connect(this.master);
    const len = this.ctx.sampleRate * 0.5; this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0); for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  }
  setMusic(on) { this.musicOn = on; store.set('dh_music', on); if (this.music) this.music.gain.setTargetAtTime(on ? 0.55 : 0, this.ctx.currentTime, 0.05); }
  setSfx(on) { this.sfxOn = on; store.set('dh_sfx', on); if (this.fx) this.fx.gain.setTargetAtTime(on ? 1 : 0, this.ctx.currentTime, 0.02); }
  tone(freq, dur, { type = 'square', vol = 0.12, when = 0, slide = 0, dest } = {}) {
    if (!this.ctx) return; const t = this.ctx.currentTime + when;
    const o = this.ctx.createOscillator(), gn = this.ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t); if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, slide), t + dur);
    gn.gain.setValueAtTime(vol, t); gn.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(gn); gn.connect(dest || this.fx); o.start(t); o.stop(t + dur + 0.02);
  }
  noise(dur, { vol = 0.15, when = 0, hp = 800, dest } = {}) {
    if (!this.ctx) return; const t = this.ctx.currentTime + when;
    const s = this.ctx.createBufferSource(); s.buffer = this.noiseBuf;
    const f = this.ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = hp;
    const gn = this.ctx.createGain(); gn.gain.setValueAtTime(vol, t); gn.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(gn); gn.connect(dest || this.fx); s.start(t); s.stop(t + dur + 0.02);
  }
  // ---- المؤثرات ----
  shot() { this.noise(0.09, { vol: 0.22, hp: 900 }); this.tone(220, 0.09, { slide: 60, vol: 0.12 }); }
  hit(gold) {
    const seq = gold ? [880, 1175, 1568, 2093] : [660, 880, 1320];
    seq.forEach((f, i) => this.tone(f, 0.08, { when: i * 0.055, vol: 0.1 }));
  }
  goldAlert() { [1568, 2093, 1568, 2093].forEach((f, i) => this.tone(f, 0.05, { when: i * 0.07, vol: 0.06, type: 'triangle' })); }
  error() { this.tone(150, 0.13, { vol: 0.14 }); this.tone(110, 0.2, { when: 0.14, vol: 0.14 }); }
  escape() { this.tone(640, 0.5, { type: 'sawtooth', slide: 140, vol: 0.07 }); }
  laugh() { [520, 440, 520, 440, 520].forEach((f, i) => this.tone(f, 0.06, { when: i * 0.085, vol: 0.08 })); }
  happy() { [784, 988].forEach((f, i) => this.tone(f, 0.07, { when: i * 0.08, vol: 0.07, type: 'triangle' })); }
  fanfare() { [523, 659, 784, 1047].forEach((f, i) => this.tone(f, i === 3 ? 0.4 : 0.12, { when: i * 0.12, vol: 0.1 })); }
  trash() { this.noise(0.18, { vol: 0.25, hp: 200 }); this.tone(300, 0.35, { type: 'triangle', slide: 70, vol: 0.12, when: 0.05 }); [660, 880].forEach((f, i) => this.tone(f, 0.07, { when: 0.35 + i * 0.07, vol: 0.07 })); }
  buzz() { this.tone(210, 0.18, { type: 'sawtooth', slide: 190, vol: 0.05 }); this.tone(230, 0.18, { type: 'sawtooth', slide: 205, vol: 0.04, when: 0.03 }); }
  gameOver() { [392, 330, 262, 196].forEach((f, i) => this.tone(f, 0.22, { when: i * 0.2, vol: 0.1, type: 'triangle' })); }
  // ---- الموسيقى التفاعلية ----
  startMusic(tempo) {
    if (!this.ctx) return; this.tempo = tempo; if (this.playing) return;
    this.playing = true; this.step = 0; this.nextTime = this.ctx.currentTime + 0.08;
    this.timer = setInterval(() => this.schedule(), 25);
  }
  stopMusic() { this.playing = false; clearInterval(this.timer); this.timer = null; }
  schedule() {
    if (!this.playing || !this.ctx) return;
    const spb = 60 / this.tempo / 4; // 16th
    while (this.nextTime < this.ctx.currentTime + 0.12) { this.playStep(this.step, this.nextTime - this.ctx.currentTime); this.nextTime += spb; this.step = (this.step + 1) % 64; }
  }
  playStep(step, when) {
    const bar = (step / 16) | 0, s = step % 16, M = this.music;
    const roots = [0, -4, -2, -5];
    const bassPat = [0, null, 0, null, 0, null, 7, null, 12, null, 7, null, 0, null, 7, null];
    const lead = [
      [12, null, 10, null, 7, null, 10, null, 12, null, 15, null, 12, null, null, null],
      [8, null, 7, null, 5, null, 7, null, 8, null, 12, null, 8, null, null, null],
      [10, null, 7, null, 2, null, 7, null, 10, null, 14, null, 10, null, null, null],
      [7, null, 11, null, 14, null, 11, null, 7, null, 4, null, 7, null, 11, null],
    ];
    const chords = [[0, 3, 7], [-4, 0, 3], [-2, 2, 5], [-5, -1, 2]];
    const b = bassPat[s]; if (b !== null) this.tone(NOTE(110, roots[bar] + b), 0.14, { type: 'triangle', vol: 0.16, when, dest: M });
    const l = lead[bar][s]; if (l !== null) this.tone(NOTE(220, l), 0.12, { vol: 0.045, when, dest: M });
    if (s % 8 === 0) this.tone(120, 0.12, { type: 'sine', slide: 45, vol: 0.22, when, dest: M });
    if (s % 4 === 2 || (this.intense && s % 2 === 1)) this.noise(0.03, { vol: this.intense ? 0.05 : 0.035, hp: 6000, when, dest: M });
    if (this.combo) { const ch = chords[bar]; this.tone(NOTE(440, ch[s % 3]), 0.05, { vol: 0.025, when, dest: M }); }
  }
}

/* ===================== اللعبة ===================== */
export function initDebugHunt(root) {
  const canvas = root.querySelector('#dh-canvas');
  const g = canvas.getContext('2d'); g.imageSmoothingEnabled = false;
  const ui = (id) => root.querySelector(id);
  const titleEl = ui('#dh-title'), reportEl = ui('#dh-report'), bannerEl = ui('#dh-banner'), rotateEl = ui('#dh-rotate'), pauseEl = ui('#dh-pause');
  const cabinet = ui('.dh-cabinet');
  const audio = new Audio8();
  let bg = buildBackground(), grass = buildGrass();
  const binSprite = buildBin();
  const trashOn = root.dataset.trashEnabled !== 'false';
  const trashPoints = Number(root.dataset.trashPoints) > 0 ? Number(root.dataset.trashPoints) : 50;
  // الصورة المعلّقة: عنصر HTML فوق الـ canvas عشان تطلع واضحة بدقتها الأصلية (مش pixel)
  const photoEl = root.querySelector('#dh-photo'), photoImg = photoEl && photoEl.querySelector('img');
  if (photoEl && trashOn) {
    const src = root.dataset.trashPhoto;
    if (src) { photoImg.src = src; photoImg.onerror = () => { photoImg.src = buildDefaultPhoto().toDataURL(); photoEl.classList.add('is-pixel'); }; }
    else { photoImg.src = buildDefaultPhoto().toDataURL(); photoEl.classList.add('is-pixel'); }
    photoEl.hidden = false;
  }
  const PHOTO_W = 22, PHOTO_H = 26; // حجم الصورة مع إطارها بوحدات المشهد
  const trash = { state: 'hang', t: 0, ang: -0.22, y: 0, vy: 0, jolt: 3 + Math.random() * 2, scatter: 0,
    flies: Array.from({ length: 4 }, (_, i) => ({ a: i * 1.6, r: rand(5, 11), sp: rand(2.2, 3.6), h: rand(4, 12) })) };
  const photoCenter = () => ({ x: BIN.x + 12, y: BIN.y + 14 + trash.y });
  const flyPos = (f) => ({ x: BIN.x + 12 + Math.cos(f.a) * (f.r + trash.scatter * 14), y: BIN.y - 4 - f.h * 0.6 + Math.sin(f.a * 1.7) * 3 - trash.scatter * 10 });
  const coarse = window.matchMedia('(pointer: coarse)').matches;

  const S = {
    mode: 'title', paused: false, t: 0, sprint: 1, statuses: [], cursor: 0,
    score: 0, shots: 0, hits: 0, caught: 0, critical: 0, escaped: 0, broken: 0, combo: 0,
    best: store.get('dh_best', 0), sprintsPassed: 0,
    bugs: [], butterfly: null, popups: [], toast: null, flash: 0,
    wave: null, testo: null, aim: { x: W / 2, y: 60, show: false, t: 0 }, shake: 0,
  };

  if (/[?&]dhdebug\b/.test(location.search)) window.__dh = S;

  const cfg = (s) => ({
    speed: Math.min(95, 40 + 8 * (s - 1)),
    life: Math.max(2.5, 5.4 - 0.4 * (s - 1)),
    gold: Math.min(0.2, 0.07 + 0.015 * s),
    butterfly: s === 1 ? 0.25 : 0.42,
    pass: s <= 2 ? 6 : s <= 4 ? 7 : 8,
    mult: 1 + 0.2 * (s - 1),
  });

  /* ---------- مساعدات الحالة ---------- */
  function newBug(demo = false) {
    const c = cfg(S.sprint), gold = !demo && Math.random() < c.gold;
    const ang = rand(-Math.PI * 0.85, -Math.PI * 0.15), sp = c.speed * (gold ? 1.6 : 1) * rand(0.85, 1.15);
    return { x: rand(40, W - 50), y: GROUND - 22, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp, gold, state: 'fly', t: 0,
      life: demo ? 1e9 : c.life * (gold ? 0.8 : 1), turn: rand(0.5, 1.2), idx: -1, speed: sp };
  }
  function startGame() {
    audio.init();
    Object.assign(S, { mode: 'play', sprint: 1, score: 0, shots: 0, hits: 0, caught: 0, critical: 0, escaped: 0, broken: 0, combo: 0,
      bugs: [], butterfly: null, popups: [], toast: null, sprintsPassed: 0 });
    titleEl.hidden = true; reportEl.hidden = true; document.body.classList.add('dh-playing');
    startSprint();
    audio.startMusic(tempo());
    maybeRotateHint();
    track('debug_hunt_start');
  }
  const tempo = () => Math.min(176, 120 + 8 * (S.sprint - 1));
  function startSprint() { S.statuses = Array(10).fill('pending'); S.cursor = 0; audio.tempo = tempo(); audio.intense = false; nextWave(); }
  function nextWave() {
    if (trashOn && trash.state === 'gone') { trash.state = 'hang'; trash.y = -30; trash.vy = 0; trash.t = 0; trash.jolt = 2; }
    const remaining = 10 - S.cursor;
    if (remaining <= 0) return endSprint();
    const n = Math.min(2, remaining);
    S.bugs = [];
    for (let i = 0; i < n; i++) { const b = newBug(); if (i === 1) b.x = S.bugs[0].x < W / 2 ? rand(W / 2 + 15, W - 50) : rand(40, W / 2 - 25); b.idx = S.cursor++; S.statuses[b.idx] = 'active'; S.bugs.push(b); if (b.gold) setTimeout(() => audio.goldAlert(), 150); }
    S.wave = { shots: 3, phase: 'fly', t: 0 };
    S.butterfly = Math.random() < cfg(S.sprint).butterfly ? { x: Math.random() < 0.5 ? -14 : W + 2, y: rand(18, 70), t: 0, state: 'fly', dir: 0 } : null;
    if (S.butterfly) S.butterfly.dir = S.butterfly.x < 0 ? 1 : -1;
    audio.intense = 10 - S.cursor <= 2;
  }
  function endWave() {
    const caughtNow = S.bugs.filter((b) => b.state === 'done' && b.caught);
    const x = caughtNow.length ? clamp(caughtNow[0].x - 5, 40, W - 60) : Math.round(W / 2 - 12);
    S.testo = { x, y: GROUND + 4, t: 0, laugh: caughtNow.length === 0, hold: caughtNow.map((b) => b.gold) };
    S.wave.phase = 'testo';
    if (caughtNow.length === 0) audio.laugh(); else audio.happy();
  }
  function endSprint() {
    const got = S.statuses.filter((s) => s === 'caught' || s === 'gold').length;
    const c = cfg(S.sprint);
    S.wave = null; S.bugs = []; S.butterfly = null;
    if (got >= c.pass) {
      S.sprintsPassed++;
      let bonus = 0; if (got === 10) { bonus = Math.round(500 * c.mult); S.score += bonus; }
      audio.fanfare();
      showBanner(`SPRINT ${S.sprint} ✓`, got === 10 ? `ولا bug وصل Production! +${bonus} 🏆` : `${got}/10 — Release جاهز، كمّل 💪`);
      S.mode = 'banner';
      setTimeout(() => { hideBanner(); if (S.mode !== 'banner') return; S.sprint++; S.mode = 'play'; startSprint(); }, 2300);
    } else {
      gameOver(got, c.pass);
    }
  }
  function gameOver(got, need) {
    S.mode = 'over'; audio.stopMusic(); audio.gameOver(); document.body.classList.remove('dh-playing');
    const isBest = S.score > S.best; if (isBest) { S.best = S.score; store.set('dh_best', S.best); }
    const acc = S.shots ? Math.round((S.hits / S.shots) * 100) : 0;
    const set = (sel, v) => { const el = reportEl.querySelector(sel); if (el) el.textContent = v; };
    set('[data-r=found]', `${S.caught}`);
    set('[data-r=critical]', `${S.critical}`);
    set('[data-r=escaped]', `${S.escaped}`);
    set('[data-r=broken]', `${S.broken}`);
    set('[data-r=acc]', `${acc}%`);
    set('[data-r=sprint]', `${S.sprint}`);
    set('[data-r=score]', pad6(S.score));
    set('[data-r=best]', pad6(S.best));
    reportEl.querySelector('.dh-newbest').hidden = !isBest;
    let msg;
    const n = S.sprintsPassed;
    if (S.escaped === 0) msg = 'QA أسطوري! ولا bug وصل Production 🏆';
    else if (S.broken >= 2) msg = `صدت bugs… بس كسرت ${S.broken} features 😅 انتبه للـ regression`;
    else if (n >= 3) msg = `QA محترف! عدّيت ${n} Sprints، بس ${S.escaped} bugs هربوا على Production 🚨`;
    else if (n >= 1) msg = `شغل حلو! عدّيت ${n === 1 ? 'Sprint واحد' : n + ' Sprints'}، بس Sprint ${S.sprint} ما عدّى (${got}/10، المطلوب ${need}) 💪`;
    else msg = `Sprint ${S.sprint} ما عدّى (${got}/10، المطلوب ${need}) — الـ Production صار مليان bugs 😬`;
    set('[data-r=msg]', msg);
    setTimeout(() => { reportEl.hidden = false; reportEl.querySelector('#dh-again')?.focus({ preventScroll: true }); }, 900);
    updateBestLabels();
    track('debug_hunt_end', { score: S.score, sprint: S.sprint });
  }
  function showBanner(title, sub) { bannerEl.querySelector('b').textContent = title; bannerEl.querySelector('span').textContent = sub; bannerEl.hidden = false; }
  function hideBanner() { bannerEl.hidden = true; }
  function popup(x, y, t, col) { S.popups.push({ x, y, t: 0, text: t, col }); }
  function toast(t, col) { S.toast = { text: t, col, t: 0 }; }
  function track(name, params) { try { window.gtag && window.gtag('event', name, params || {}); } catch { /* */ } }

  /* ---------- الإطلاق ---------- */
  function toLogical(ev) {
    const r = canvas.getBoundingClientRect();
    const sc = Math.min(r.width / W, r.height / H), ox = (r.width - W * sc) / 2, oy = (r.height - H * sc) / 2;
    return { x: (ev.clientX - r.left - ox) / sc, y: (ev.clientY - r.top - oy) / sc };
  }
  function shoot(p) {
    if (S.mode !== 'play' || S.paused || !S.wave || S.wave.phase !== 'fly' || S.wave.shots <= 0) return;
    if (p.y > HUD_Y) return;
    S.wave.shots--; S.shots++; S.flash = 0.06; audio.shot();
    const R = coarse ? 13 : 10;
    let hitBug = null, best = 1e9;
    for (const b of S.bugs) {
      if (b.state !== 'fly') continue;
      const d = Math.hypot(b.x + 7.5 - p.x, b.y + 7.5 - p.y);
      if (d < R && d < best) { best = d; hitBug = b; }
    }
    if (hitBug) {
      const c = cfg(S.sprint);
      const pts = Math.round(((hitBug.gold ? 100 : 25) * c.mult) / 5) * 5;
      S.score += pts; S.hits++; S.caught++; S.combo++;
      if (hitBug.gold) S.critical++;
      hitBug.state = 'hit'; hitBug.t = 0; hitBug.caught = true;
      S.statuses[hitBug.idx] = hitBug.gold ? 'gold' : 'caught';
      popup(hitBug.x, hitBug.y - 4, hitBug.gold ? `+${pts} CRITICAL` : `+${pts}`, hitBug.gold ? '#f7c948' : '#f6823b');
      if (S.combo >= 3 && S.combo % 3 === 0) popup(hitBug.x, hitBug.y + 6, `COMBO x${S.combo}`, '#38bdf8');
      audio.hit(hitBug.gold); audio.combo = S.combo >= 3;
    } else if (S.butterfly && S.butterfly.state === 'fly' && Math.hypot(S.butterfly.x + 6 - p.x, S.butterfly.y + 4 - p.y) < R) {
      S.score = Math.max(0, S.score - 50); S.broken++; S.combo = 0; audio.combo = false;
      S.butterfly.state = 'hit'; S.butterfly.t = 0;
      popup(S.butterfly.x - 10, S.butterfly.y - 4, '-50 REGRESSION!', '#38bdf8');
      audio.error(); S.shake = 0.25;
    } else if (trashOn && trash.state === 'hang' && Math.hypot(photoCenter().x - p.x, photoCenter().y - p.y) < Math.max(R, 13)) {
      const pts = Math.round((trashPoints * cfg(S.sprint).mult) / 5) * 5;
      S.score += pts; trash.state = 'fall'; trash.t = 0; trash.vy = -60; trash.scatter = 1;
      popup(BIN.x - 72, BIN.y - 12, `+${pts} CLEANUP!`, '#34d399');
      audio.trash(); S.shake = 0.15;
    } else if (trashOn && trash.flies.some((f) => { const q = flyPos(f); return Math.hypot(q.x - p.x, q.y - p.y) < 5; })) {
      popup(BIN.x - 150, BIN.y - 22, "IT'S A FLY, NOT A BUG!", '#c9d6ea');
      audio.buzz(); trash.scatter = 1; S.combo = 0; audio.combo = false;
    } else {
      S.combo = 0; audio.combo = false;
    }
    if (S.wave.shots === 0) for (const b of S.bugs) if (b.state === 'fly') b.life = Math.min(b.life, b.t + 0.15);
  }

  /* ---------- التحديث ---------- */
  function update(dt) {
    S.t += dt; S.flash = Math.max(0, S.flash - dt); S.shake = Math.max(0, S.shake - dt);
    S.popups.forEach((p) => { p.t += dt; p.y -= dt * 14; }); S.popups = S.popups.filter((p) => p.t < 1.1);
    if (S.toast) { S.toast.t += dt; if (S.toast.t > 1.8) S.toast = null; }
    if (S.aim.t > 0) S.aim.t -= dt;
    if (trashOn) updateTrash(dt);

    if (S.mode === 'title') {
      if (S.bugs.length < 3) S.bugs.push(newBug(true));
      S.bugs.forEach((b) => moveBug(b, dt, true));
      return;
    }
    if (S.mode !== 'play' || S.paused) return;

    const w = S.wave; if (!w) return;
    w.t += dt;
    for (const b of S.bugs) {
      b.t += dt;
      if (b.state === 'fly') {
        moveBug(b, dt, false);
        if (b.t > b.life) { b.state = 'escape'; b.vx *= 0.3; b.vy = -140; }
      } else if (b.state === 'escape') {
        b.x += b.vx * dt; b.y += b.vy * dt;
        if (b.y < -20) { b.state = 'done'; b.caught = false; S.escaped++; S.statuses[b.idx] = 'escaped'; toast('BUG ESCAPED TO PRODUCTION!', '#ff6b6b'); audio.escape(); S.combo = 0; audio.combo = false; }
      } else if (b.state === 'hit') {
        if (b.t > 0.28) { b.state = 'fall'; b.vy = 40; }
      } else if (b.state === 'fall') {
        b.vy += 420 * dt; b.y += b.vy * dt;
        if (b.y > GROUND - 2) b.state = 'done';
      }
    }
    const bf = S.butterfly;
    if (bf) {
      bf.t += dt;
      if (bf.state === 'fly') { bf.x += bf.dir * 34 * dt; bf.y += Math.sin(bf.t * 5) * 18 * dt; if (bf.x < -20 || bf.x > W + 20) S.butterfly = null; }
      else { bf.y += 70 * dt; bf.x += bf.dir * 20 * dt; if (bf.y > GROUND) S.butterfly = null; }
    }
    if (w.phase === 'fly' && S.bugs.every((b) => b.state === 'done')) endWave();
    if (w.phase === 'testo') {
      const T = S.testo; T.t += dt;
      const up = T.t < 0.35 ? T.t / 0.35 : T.t < 1.05 ? 1 : Math.max(0, 1 - (T.t - 1.05) / 0.3);
      T.y = GROUND + 4 - up * 34;
      if (T.t > 1.4) { S.testo = null; if (!S.butterfly || S.butterfly.state !== 'fly') { nextWave(); } else { S.butterfly = null; nextWave(); } }
    }
  }
  function updateTrash(dt) {
    trash.t += dt; trash.scatter = Math.max(0, trash.scatter - dt * 0.8);
    trash.flies.forEach((f) => { f.a += f.sp * dt * (1 + trash.scatter * 2); });
    if (trash.state === 'hang' && trash.y < 0) { trash.y = Math.min(0, trash.y + dt * 60); }
    if (trash.state === 'hang' && trash.y >= 0) {
      trash.jolt -= dt;
      // بتتمرجح، وكل كم ثانية بتنزل شوي كأنها رح توقع
      const j = trash.jolt < 0 ? Math.max(0, 1 + trash.jolt / 0.6) : 0;
      trash.ang = -0.22 + Math.sin(trash.t * 2.3) * 0.05 - j * 0.35;
      trash.y = j * 2;
      if (trash.jolt < -0.6) trash.jolt = rand(3, 5.5);
    } else if (trash.state === 'fall') {
      trash.vy += 300 * dt; trash.y += trash.vy * dt; trash.ang += dt * 7;
      if (trash.y > 26) { trash.state = 'gone'; trash.t = 0; }
    }
  }
  function drawTrash() {
    g.drawImage(binSprite, BIN.x - 4, BIN.y - 8);
  }
  function placePhoto() {
    if (!photoEl || photoEl.hidden) return;
    if (trash.state === 'gone') { photoEl.style.opacity = '0'; return; }
    const cw = canvas.clientWidth, ch = canvas.clientHeight; if (!cw || !ch) return;
    const sc = Math.min(cw / W, ch / H), ox = (cw - W * sc) / 2 + canvas.offsetLeft, oy = (ch - H * sc) / 2 + canvas.offsetTop;
    const c = photoCenter();
    photoEl.style.opacity = '1';
    photoEl.style.width = `${PHOTO_W * sc}px`; photoEl.style.height = `${PHOTO_H * sc}px`;
    photoEl.style.left = `${ox + c.x * sc}px`; photoEl.style.top = `${oy + c.y * sc}px`;
    photoEl.style.setProperty('--u', `${sc}px`);
    photoEl.style.transform = `translate(-50%, -50%) rotate(${trash.ang}rad)`;
    photoEl.classList.toggle('is-falling', trash.state === 'fall');
  }
  function drawFlies() {
    trash.flies.forEach((f, i) => {
      const q = flyPos(f), x = Math.round(q.x), y = Math.round(q.y);
      px(g, x, y, 2, 2, '#0b0f16');
      if (Math.floor(S.t * 20 + i) % 2) { g.globalAlpha = .6; px(g, x - 1, y - 1, 1, 1, '#cfe9ff'); px(g, x + 2, y - 1, 1, 1, '#cfe9ff'); g.globalAlpha = 1; }
    });
  }
  function moveBug(b, dt, demo) {
    b.turn -= dt;
    if (b.turn <= 0) {
      const ang = Math.atan2(b.vy, b.vx) + rand(-1.3, 1.3);
      b.vx = Math.cos(ang) * b.speed; b.vy = Math.sin(ang) * b.speed; b.turn = rand(0.45, 1.2);
    }
    b.x += b.vx * dt; b.y += b.vy * dt;
    if (b.x < 8) { b.x = 8; b.vx = Math.abs(b.vx); } if (b.x > W - 24) { b.x = W - 24; b.vx = -Math.abs(b.vx); }
    if (b.y < 10) { b.y = 10; b.vy = Math.abs(b.vy); } if (b.y > GROUND - 22) { b.y = GROUND - 22; b.vy = -Math.abs(b.vy); }
    if (demo) b.t += dt;
  }

  /* ---------- الرسم ---------- */
  function drawBug(b) {
    const open = Math.floor(S.t * 12 + b.x) % 2 === 0;
    if (b.state === 'hit') { sprite(g, LB, Math.floor(b.t * 20) % 2 ? PAL.flash : (b.gold ? PAL.gold : PAL.red), b.x, b.y); return; }
    if (b.state === 'fall') { sprite(g, LB, b.gold ? PAL.gold : PAL.red, b.x, b.y, true); return; }
    wings(g, b.x, b.y, open); sprite(g, LB, b.gold ? PAL.gold : PAL.red, b.x, b.y);
    if (b.gold && Math.floor(S.t * 6) % 2) { px(g, b.x - 3, b.y - 2, 1, 1, '#fff1a8'); px(g, b.x + 17, b.y + 12, 1, 1, '#fff1a8'); }
  }
  function drawHUD() {
    px(g, 0, HUD_Y, W, H - HUD_Y, '#060b16'); px(g, 0, HUD_Y, W, 1, '#38bdf8');
    const box = (x, w) => { px(g, x, 149, w, 27, '#0b162a'); px(g, x, 149, w, 1, '#1f4b73'); px(g, x, 175, w, 1, '#1f4b73'); px(g, x, 149, 1, 27, '#1f4b73'); px(g, x + w - 1, 149, 1, 27, '#1f4b73'); };
    const bw = W - 152, sxBox = W - 87;
    box(5, 50); box(60, bw); box(sxBox, 82);
    text(g, 'RUNS', 9, 152, '#8a9ebd', 'left', false);
    const shots = S.wave ? S.wave.shots : 3;
    for (let i = 0; i < 3; i++) { const on = i < shots; px(g, 10 + i * 9, 164, 5, 8, on ? '#f6823b' : '#2a3a55'); px(g, 10 + i * 9, 162, 5, 2, on ? '#ffc59e' : '#2a3a55'); }
    text(g, 'BUGS', 64, 152, '#8a9ebd', 'left', false);
    const st = S.statuses.length ? S.statuses : Array(10).fill('pending');
    st.forEach((s, i) => {
      const x = 60 + Math.round((bw - 160) / 2) + 2 + i * 16, y = 162;
      let pal = PAL.off;
      if (s === 'caught') pal = PAL.red; else if (s === 'gold') pal = PAL.gold; else if (s === 'escaped') pal = PAL.esc;
      else if (s === 'active' && Math.floor(S.t * 4) % 2) pal = { ...PAL.off, R: '#4b6a93' };
      sprite(g, LB_MINI.slice(0, 12), pal, x, y - 1);
      if (s === 'escaped') { px(g, x + 3, y + 3, 7, 1, '#ff6b6b'); px(g, x + 3, y + 7, 7, 1, '#ff6b6b'); }
    });
    text(g, 'SCORE', sxBox + 5, 152, '#8a9ebd', 'left', false);
    text(g, pad6(S.score), sxBox + 5, 164, '#f0f6ff', 'left', false);
    // الشريط العلوي
    if (S.mode !== 'title') text(g, `SPRINT ${S.sprint}`, 6, 5, '#38bdf8');
    if (S.mode !== 'title') text(g, `BEST ${pad6(S.best)}`, W - 6, 5, '#f6823b', 'right');
  }
  function drawCrosshair(x, y) {
    x = Math.round(x); y = Math.round(y); const c = '#38bdf8';
    px(g, x - 10, y, 6, 1, c); px(g, x + 5, y, 6, 1, c); px(g, x, y - 10, 1, 6, c); px(g, x, y + 5, 1, 6, c);
    [[-7, -7], [7, -7], [-7, 7], [7, 7]].forEach(([a, b]) => { px(g, x + a - (a < 0 ? 0 : 2), y + b, 3, 1, c); px(g, x + a, y + b - (b < 0 ? 0 : 2), 1, 3, c); });
    px(g, x, y, 1, 1, '#f6823b');
  }
  function render() {
    g.save();
    if (S.shake > 0) g.translate(Math.round(rand(-2, 2)), Math.round(rand(-1, 1)));
    g.drawImage(bg, 0, 0);
    if (trashOn) drawTrash();
    if (S.testo) {
      const T = S.testo;
      testoSprite(g, T.x, T.y, T.laugh);
      T.hold.forEach((gold, i) => sprite(g, LB, gold ? PAL.gold : PAL.red, T.x + 18 + i * 12, T.y - 12));
    }
    g.drawImage(grass, 0, 0);
    if (trashOn) drawFlies();
    if (S.butterfly) { const bf = S.butterfly; sprite(g, Math.floor(bf.t * 8) % 2 ? BF : BF_CLOSED, BF_PAL, bf.x, bf.y, bf.state === 'hit'); if (bf.state === 'fly') text(g, 'FEATURE', bf.x - 8, bf.y - 11, '#38bdf8'); }
    S.bugs.forEach((b) => { if (b.state !== 'done') drawBug(b); });
    S.popups.forEach((p) => { g.globalAlpha = clamp(1.2 - p.t, 0, 1); text(g, p.text, p.x, p.y, p.col); g.globalAlpha = 1; });
    if (S.toast) {
      const tw = S.toast.text.length * 8 + 14, x = (W - tw) / 2, y = 24;
      px(g, x, y, tw, 16, '#1a0b10'); px(g, x, y, tw, 2, S.toast.col); px(g, x, y + 14, tw, 2, S.toast.col); px(g, x, y, 2, 16, S.toast.col); px(g, x + tw - 2, y, 2, 16, S.toast.col);
      text(g, S.toast.text, W / 2, y + 4, S.toast.col, 'center', false);
    }
    g.restore();
    if (S.flash > 0) { g.globalAlpha = 0.18; px(g, 0, 0, W, HUD_Y, '#ffffff'); g.globalAlpha = 1; }
    drawHUD();
    if (S.mode === 'play' && !S.paused && (S.aim.show || S.aim.t > 0)) drawCrosshair(S.aim.x, S.aim.y);
    if (trashOn) placePhoto();
  }

  /* ---------- الحلقة ---------- */
  let last = performance.now();
  function loop(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    update(dt); render();
    requestAnimationFrame(loop);
  }

  /* ---------- الإدخال ---------- */
  canvas.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse') { const p = toLogical(e); S.aim.x = p.x; S.aim.y = Math.min(p.y, HUD_Y - 2); S.aim.show = true; } });
  canvas.addEventListener('pointerleave', () => { S.aim.show = false; });
  canvas.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    if (S.paused) return resume();
    const p = toLogical(e); S.aim.x = p.x; S.aim.y = Math.min(p.y, HUD_Y - 2);
    if (e.pointerType !== 'mouse') S.aim.t = 0.35;
    shoot(p);
  });
  ui('#dh-start').addEventListener('click', () => { goFullscreenOnMobile(); startGame(); });
  ui('#dh-again').addEventListener('click', () => startGame());
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && (S.mode === 'title') && document.activeElement === document.body) { e.preventDefault(); startGame(); }
  });

  /* ---------- الإيقاف المؤقت ---------- */
  function pause(silent = false) { if (S.mode !== 'play' && S.mode !== 'banner') return; S.paused = true; pauseEl.hidden = silent; audio.stopMusic(); }
  function resume() { S.paused = false; pauseEl.hidden = true; last = performance.now(); if (S.mode === 'play') audio.startMusic(tempo()); }
  document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
  pauseEl.addEventListener('click', resume);

  /* ---------- الأزرار ---------- */
  const sfxBtn = ui('#dh-sfx'), musicBtn = ui('#dh-music'), fsBtn = ui('#dh-fs');
  const paintToggles = () => {
    sfxBtn.setAttribute('aria-pressed', String(audio.sfxOn)); sfxBtn.querySelector('i').textContent = audio.sfxOn ? '🔈' : '🔇';
    musicBtn.setAttribute('aria-pressed', String(audio.musicOn)); musicBtn.querySelector('i').textContent = audio.musicOn ? '🎵' : '🔕';
  };
  sfxBtn.addEventListener('click', () => { audio.init(); audio.setSfx(!audio.sfxOn); paintToggles(); });
  musicBtn.addEventListener('click', () => { audio.init(); audio.setMusic(!audio.musicOn); paintToggles(); });
  paintToggles();
  /* ملء الشاشة: الـ API الأصلي إذا موجود (Android/كمبيوتر)، وإلا "وضع اللعب" بالـ CSS
     (iPhone Safari ما بيدعم fullscreen لأي عنصر غير الفيديو). */
  const nativeFs = !!(cabinet.requestFullscreen || cabinet.webkitRequestFullscreen);
  const fsLabel = fsBtn.querySelector('span');
  const isNativeFs = () => !!(document.fullscreenElement || document.webkitFullscreenElement);
  const isImmersive = () => document.body.classList.contains('dh-immersive');
  const paintFs = () => {
    const on = isNativeFs() || isImmersive();
    fsBtn.querySelector('i').textContent = on ? '✕' : '⛶';
    if (fsLabel) fsLabel.textContent = on ? 'خروج' : 'ملء الشاشة';
    fsBtn.setAttribute('aria-pressed', String(on));
  };
  const screenEl = ui('.dh-screen');
  function layout() {
    let nw = 320;
    if (isImmersive() || isNativeFs()) {
      const r = screenEl.getBoundingClientRect();
      if (r.width > 0 && r.height > 0 && r.width / r.height > 16 / 9 + 0.02) nw = clamp(Math.round((H * r.width) / r.height), 320, 480);
    }
    if (nw === W) return;
    W = nw; canvas.width = W; canvas.height = H; g.imageSmoothingEnabled = false;
    bg = buildBackground(); grass = buildGrass(); BIN.x = W - 33;
    S.bugs.forEach((b) => { b.x = clamp(b.x, 8, W - 24); });
  }
  const relayout = () => requestAnimationFrame(() => requestAnimationFrame(layout));
  window.addEventListener('resize', relayout);
  window.addEventListener('orientationchange', relayout);
  function enterImmersive() {
    document.body.classList.add('dh-immersive');
    window.scrollTo(0, 0);
    paintFs(); relayout();
  }
  function exitImmersive() { document.body.classList.remove('dh-immersive'); paintFs(); relayout(); }
  function enterFs() {
    if (!nativeFs) return enterImmersive();
    const req = cabinet.requestFullscreen || cabinet.webkitRequestFullscreen;
    Promise.resolve(req.call(cabinet))
      .then(() => { try { screen.orientation?.lock?.('landscape').catch(() => {}); } catch { /* */ } })
      .catch(() => enterImmersive());
  }
  function exitFs() {
    if (isNativeFs()) (document.exitFullscreen || document.webkitExitFullscreen)?.call(document);
    exitImmersive();
  }
  fsBtn.addEventListener('click', () => { (isNativeFs() || isImmersive()) ? exitFs() : enterFs(); });
  document.addEventListener('fullscreenchange', () => { paintFs(); relayout(); });
  document.addEventListener('webkitfullscreenchange', paintFs);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && isImmersive()) exitImmersive(); });
  function goFullscreenOnMobile() { if (coarse && !isNativeFs() && !isImmersive()) enterFs(); }
  paintFs();

  function maybeRotateHint() {
    const portrait = window.matchMedia('(orientation: portrait)').matches;
    let seen = false; try { seen = !!sessionStorage.getItem('dh_rot'); } catch { /* */ }
    if (coarse && portrait && !seen) { rotateEl.hidden = false; pause(true); }
  }
  ui('#dh-rot-ok').addEventListener('click', () => { try { sessionStorage.setItem('dh_rot', '1'); } catch { /* */ } rotateEl.hidden = true; resume(); });
  window.matchMedia('(orientation: landscape)').addEventListener?.('change', (e) => { if (e.matches && !rotateEl.hidden) { rotateEl.hidden = true; resume(); } });

  function updateBestLabels() { root.querySelectorAll('[data-best]').forEach((el) => { el.textContent = pad6(S.best); }); }
  updateBestLabels();

  /* ---------- المشاركة ---------- */
  function shareText() { return `جبت ${S.score} نقطة بـ Debug Hunt 🐞 ووصلت Sprint ${S.sprint}. بتقدر تكسر رقمي؟`; }
  async function makeCard() {
    const c = makeCanvas(1080, 1080), x = c.getContext('2d'); x.imageSmoothingEnabled = false;
    x.drawImage(bg, 70, 0, 180, 144, 0, 0, 1080, 864); x.drawImage(grass, 70, 0, 180, 144, 0, 0, 1080, 864);
    x.fillStyle = '#060b16'; x.fillRect(0, 864, 1080, 216);
    x.fillStyle = 'rgba(5,10,20,.55)'; x.fillRect(0, 0, 1080, 1080);
    const lb = makeCanvas(15, 15); sprite(lb.getContext('2d'), LB, PAL.red, 0, 0);
    x.drawImage(lb, 120, 150, 150, 150); x.drawImage(lb, 820, 560, 110, 110);
    x.textAlign = 'center'; x.textBaseline = 'top'; x.direction = 'ltr';
    x.font = '64px "Press Start 2P"'; x.fillStyle = '#000'; x.fillText('DEBUG HUNT', 546, 116); x.fillStyle = '#f0f6ff'; x.fillText('DEBUG HUNT', 540, 110);
    x.font = '32px "Press Start 2P"'; x.fillStyle = '#8a9ebd'; x.fillText('SCORE', 540, 330);
    x.font = '112px "Press Start 2P"'; x.fillStyle = '#000'; x.fillText(pad6(S.score), 548, 398); x.fillStyle = '#f6823b'; x.fillText(pad6(S.score), 540, 390);
    x.font = '30px "Press Start 2P"'; x.fillStyle = '#38bdf8'; x.fillText(`SPRINT ${S.sprint}  ·  BUGS ${S.caught}`, 540, 560);
    x.font = '700 64px "IBM Plex Sans Arabic", sans-serif'; x.fillStyle = '#f0f6ff'; x.direction = 'rtl'; x.fillText('بتقدر تكسر رقمي؟', 540, 690);
    x.direction = 'ltr'; x.font = '28px "Press Start 2P"'; x.fillStyle = '#f6823b'; x.fillText('testing-arabic.com/debug-hunt', 540, 950);
    return new Promise((res) => c.toBlob(res, 'image/png'));
  }
  ui('#dh-share').addEventListener('click', async () => {
    const text = shareText();
    try {
      const blob = await makeCard();
      const file = blob && new File([blob], 'debug-hunt-score.png', { type: 'image/png' });
      if (file && navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], text: `${text} ${SITE_URL}` }); track('debug_hunt_share', { method: 'file' }); return; }
      if (navigator.share) { await navigator.share({ text, url: SITE_URL }); track('debug_hunt_share', { method: 'link' }); return; }
    } catch (e) { if (e && e.name === 'AbortError') return; }
    try { await navigator.clipboard.writeText(`${text} ${SITE_URL}`); flashNote('انسخنا النص والرابط ✓ الصقه وين ما بدك'); } catch { flashNote(SITE_URL); }
  });
  ui('#dh-card').addEventListener('click', async () => {
    const blob = await makeCard(); if (!blob) return;
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'debug-hunt-score.png'; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000); track('debug_hunt_card');
  });
  function flashNote(t) { const n = reportEl.querySelector('.dh-note'); n.textContent = t; n.hidden = false; setTimeout(() => { n.hidden = true; }, 3500); }

  /* ---------- البداية ---------- */
  const fontReady = document.fonts ? document.fonts.load(FONT).catch(() => {}) : Promise.resolve();
  fontReady.then(() => { root.classList.add('dh-ready'); requestAnimationFrame(loop); });
}
