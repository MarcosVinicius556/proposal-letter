import './style.css';

/* ==========================================================================
   ✏️  PERSONALIZE AQUI
   Todos os textos da pesquisa ficam neste bloco.
   ========================================================================== */
const HUSBAND_NAME = 'Marcos'; // o "produto" avaliado 😄
const WIFE_NAME = 'meu amor'; // como você chama a sua esposa

const TEXTS = {
  hintTouch: 'Toque no envelope 💌',
  hintMouse: 'Clique no envelope 💌',

  surveyTitle: 'Pesquisa de Satisfação',
  product: `Produto avaliado: Marido (${HUSBAND_NAME})`,
  progress: (current, total) => `Pergunta ${current} de ${total}`,
  next: 'Próxima ➜',

  cover: {
    greeting: `Oi, ${WIFE_NAME}! 💕`,
    text: 'Sua opinião é muito importante pra nós! Responda com toda a sinceridade… mas só vale elogio 😇',
    badge: '⏱️ Leva menos de 1 minutinho',
    start: 'Começar avaliação',
  },

  stars: {
    question: 'Como você avalia seu marido?',
    sub: 'Toque nas estrelas para dar sua nota',
    fixes: [
      'Ops, acho que você quis dizer 5 ⭐',
      'Dedo escorregou? Corrigi pra 5 😇',
      'Essa estrela ficou com medo 🙈 Vamos de 5!',
      'Sistema calibrado: só aceita 5 ⭐',
    ],
    scared: ['Ei, essa não! 🙈', 'Tem certeza? 🥺', 'Mira um pouquinho mais pra direita 👉'],
    perfect: 'Perfeito! Concordo plenamente 😌',
    score: 'Nota: 5.0 · Excelente ✨',
  },

  love: {
    question: 'Nível de amor',
    sub: 'Arraste para mostrar o quanto você ama ele',
    snaps: [
      'Opa! O amor não pode diminuir 😤 Voltando pro máximo!',
      'Esse slider é só de ida, viu? 💗',
      'Erro 404: amor menor não encontrado 🤖💕',
      'Detectamos uma tentativa de diminuir… negado 🚫😂',
    ],
    lowering: 'Hmm… 🤨',
    more: 'Mais amor ➕',
    moreLevels: ['120%', '150%', '200%', '500%', '1000%', '∞ Infinito'],
    moreDone: 'Amor infinito confirmado ♾️',
  },

  likes: {
    question: 'O que você mais gosta nele?',
    sub: 'Pode marcar várias 💕',
    options: ['O abraço 🤗', 'As piadas 😂', 'O cafuné 💆‍♀️', 'O sorriso 😍', 'O cheirinho 🥰'],
    all: 'Tudo acima ✨',
    nothing: 'Nada 🙄',
    teases: ['"Nada" não é uma opção válida 😝', 'Essa opção é tímida 🙈', 'Ué, ela fugiu… 🏃‍♀️💨', 'Tenta "Tudo acima" 😉'],
    needOne: 'Escolha pelo menos uma 💕',
  },

  recommend: {
    question: 'Você recomendaria seu marido para outras pessoas?',
    mine: 'Não, ele é só meu 😤',
    yes: 'Sim',
    jealous: [
      'Recomendar?! Nem pensar 😤',
      'Ele é exclusivo, não tem pra ninguém! 💅',
      'Produto esgotado. Unidade única 🔒',
      'Ciúmes ativado 😤💗',
    ],
    correct: 'Resposta correta! Ele é só seu 💍',
  },

  renew: {
    question: 'Renovar contrato por mais quantos anos?',
    options: ['Para sempre 💍', 'Infinito ♾️', 'Nesta e nas próximas vidas 🌙'],
    zero: '0 anos',
    teases: ['Essa opção expirou 😜', 'O "0" fugiu de vergonha 🙈', 'Contrato sem cláusula de saída 📜💕'],
    needOne: 'Escolha a duração do contrato 💍',
  },

  comment: {
    question: 'Algum comentário?',
    sub: 'Opcional · elogios são muito bem-vindos 😌',
    label: 'Seu comentário',
    placeholder: 'Ex.: Melhor marido do universo! 🥰',
    suggest: 'Sugestões ✨',
    suggestions: [
      'Melhor marido do mundo! 🌎',
      'Lindo, cheiroso e engraçado 😍',
      'Nota 1000! 💯',
      'Faz o melhor cafuné 💆‍♀️',
      'Amo cada pedacinho 💗',
      'Casaria de novo mil vezes 💍',
      'Meu lugar favorito é o abraço dele 🤗',
    ],
    submit: 'Enviar feedback 💌',
  },

  success: {
    title: 'Obrigado pelo seu feedback!\u00A0❤️',
    message: `Sua avaliação foi registrada com muito amor, ${WIFE_NAME}. Te amo! 🥰`,
    receiptTitle: 'Comprovante de Avaliação',
    receiptNumber: 'Protocolo nº 0001-♥',
    rows: {
      product: 'Produto',
      rating: 'Avaliação',
      love: 'Nível de amor',
      likes: 'Mais gosta',
      recommend: 'Recomendaria?',
      renew: 'Contrato renovado',
      comment: 'Comentário',
    },
    allLikes: 'Tudo! ✨',
    noComment: 'Sem comentários, já tá perfeito 😌',
    approved: 'Marido aprovado com nota máxima',
    stamp: 'Aprovado',
    replay: 'Avaliar de novo 💌',
  },
};

const SETTINGS = {
  bgHearts: 22,
  stars: 60,
};

/* ========================================================================== */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const rand = (min, max) => Math.random() * (max - min) + min;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const cycle = (arr, i) => arr[i % arr.length];
const esc = (str) =>
  String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const prefersReducedMotion = () => reducedMotionQuery.matches;
const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const HEART_PATH =
  'M12 21s-7.5-4.6-10-9.3C.3 8.4 2.1 4.5 5.8 4.1 8 3.9 9.9 5 12 7.4 14.1 5 16 3.9 18.2 4.1c3.7.4 5.5 4.3 3.8 7.6C19.5 16.4 12 21 12 21z';
const STAR_PATH = 'M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5L2.5 9.5l6.6-.9z';

const els = {
  scene: $('#scene'),
  openBtn: $('#openBtn'),
  hint: $('#hint'),
  letter: $('#letter'),
  letterInner: $('#letterInner'),
  celebrate: $('#celebrate'),
  celebrateTitle: $('#celebrateTitle'),
  celebrateMessage: $('#celebrateMessage'),
  receipt: $('#receipt'),
  replayBtn: $('#replayBtn'),
  confetti: $('#confetti'),
  stars: $('#stars'),
  bgHearts: $('#bgHearts'),
};

/* ---------- Estado da pesquisa ---------- */

const STEP_IDS = ['cover', 'stars', 'love', 'likes', 'recommend', 'renew', 'comment'];
const TOTAL_QUESTIONS = STEP_IDS.length - 1;

const state = {
  step: 0,
  rating: 0,
  love: 100,
  loveLevel: -1, // índice em TEXTS.love.moreLevels
  likes: new Set(),
  recommend: '',
  renew: '',
  comment: '',
  counters: { stars: 0, snaps: 0, likes: 0, jealous: 0, renew: 0 },
};

/* ---------- Montagem da carta ---------- */

function chip(label, attrs = '') {
  return `<button type="button" class="chip" ${attrs}>${esc(label)}</button>`;
}

function stepHead(id, q, sub) {
  return `<h2 class="step__q" id="q-${id}" tabindex="-1">${esc(q)}</h2>${sub ? `<p class="step__sub">${esc(sub)}</p>` : ''}`;
}

function buildLetter() {
  const t = TEXTS;
  const stars = [1, 2, 3, 4, 5]
    .map(
      (n) =>
        `<button type="button" class="star-btn" data-star="${n}" aria-label="${n} ${n > 1 ? 'estrelas' : 'estrela'}" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${STAR_PATH}"/></svg></button>`,
    )
    .join('');

  const likeChips = t.likes.options
    .map((o, i) => `<button type="button" class="chip" data-like="${i}" aria-pressed="false">${esc(o)}</button>`)
    .join('');

  const renewChips = t.renew.options
    .map((o, i) => `<button type="button" class="chip chip--wide" data-renew="${i}" aria-pressed="false">${esc(o)}</button>`)
    .join('');

  els.letterInner.innerHTML = `
    <header class="survey-head">
      <h1 class="survey-head__title" id="surveyTitle">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${HEART_PATH}"/></svg>
        ${esc(t.surveyTitle)}
      </h1>
      <p class="survey-head__product">${esc(t.product)}</p>
      <div class="progress" id="progress" aria-hidden="true">
        <div class="progress__track"><div class="progress__fill" id="progressFill"></div></div>
        <span class="progress__label" id="progressLabel"></span>
      </div>
      <p class="sr-only" id="progressSr" aria-live="polite"></p>
    </header>

    <div class="steps" id="steps">
      <section class="step step--cover" data-step="cover" aria-labelledby="q-cover">
        <h2 class="step__greeting" id="q-cover" tabindex="-1">${esc(t.cover.greeting)}</h2>
        <p class="step__text">${esc(t.cover.text)}</p>
        <p class="badge">${esc(t.cover.badge)}</p>
        <div class="step__foot"><button type="button" class="btn btn--primary" data-next>${esc(t.cover.start)}</button></div>
      </section>

      <section class="step" data-step="stars" aria-labelledby="q-stars">
        ${stepHead('stars', t.stars.question, t.stars.sub)}
        <div class="stars-row" id="starsRow" role="group" aria-label="${esc(t.stars.question)}">${stars}</div>
        <p class="step__score" id="starsScore"></p>
        <p class="tease" id="starsMsg" aria-live="polite"></p>
        <div class="step__foot"><button type="button" class="btn btn--primary" data-next disabled>${esc(t.next)}</button></div>
      </section>

      <section class="step" data-step="love" aria-labelledby="q-love">
        ${stepHead('love', t.love.question, t.love.sub)}
        <div class="love">
          <div class="love__meter" aria-hidden="true">
            <svg class="love__heart" id="loveHeart" viewBox="0 0 24 24"><path d="${HEART_PATH}"/></svg>
            <span class="love__value" id="loveValue">100%</span>
          </div>
          <label class="sr-only" for="loveRange">${esc(t.love.question)}</label>
          <input class="love__range" id="loveRange" type="range" min="0" max="100" step="1" value="100" aria-valuetext="100%" />
          <button type="button" class="chip chip--small" id="loveMore">${esc(t.love.more)}</button>
        </div>
        <p class="tease" id="loveMsg" aria-live="polite"></p>
        <div class="step__foot"><button type="button" class="btn btn--primary" data-next>${esc(t.next)}</button></div>
      </section>

      <section class="step" data-step="likes" aria-labelledby="q-likes">
        ${stepHead('likes', t.likes.question, t.likes.sub)}
        <div class="chips chips--grid" role="group" aria-label="${esc(t.likes.question)}">
          ${likeChips}
          <button type="button" class="chip chip--joke" id="likesNothing">${esc(t.likes.nothing)}</button>
          <button type="button" class="chip chip--all" id="likesAll" aria-pressed="false">${esc(t.likes.all)}</button>
        </div>
        <p class="tease" id="likesMsg" aria-live="polite"></p>
        <div class="step__foot"><button type="button" class="btn btn--primary" data-next disabled>${esc(t.next)}</button></div>
      </section>

      <section class="step" data-step="recommend" aria-labelledby="q-recommend">
        ${stepHead('recommend', t.recommend.question)}
        <div class="chips chips--stack">
          <button type="button" class="chip chip--wide chip--big" id="recMine" aria-pressed="false">${esc(t.recommend.mine)}</button>
          <button type="button" class="chip chip--joke" id="recYes">${esc(t.recommend.yes)}</button>
        </div>
        <p class="tease" id="recMsg" aria-live="polite"></p>
        <div class="step__foot"><button type="button" class="btn btn--primary" data-next disabled>${esc(t.next)}</button></div>
      </section>

      <section class="step" data-step="renew" aria-labelledby="q-renew">
        ${stepHead('renew', t.renew.question)}
        <div class="chips chips--renew" role="group" aria-label="${esc(t.renew.question)}">
          ${renewChips}
          <button type="button" class="chip chip--joke" id="renewZero">${esc(t.renew.zero)}</button>
        </div>
        <p class="tease" id="renewMsg" aria-live="polite"></p>
        <div class="step__foot"><button type="button" class="btn btn--primary" data-next disabled>${esc(t.next)}</button></div>
      </section>

      <section class="step" data-step="comment" aria-labelledby="q-comment">
        ${stepHead('comment', t.comment.question, t.comment.sub)}
        <label class="sr-only" for="commentBox">${esc(t.comment.label)}</label>
        <textarea class="comment" id="commentBox" rows="3" maxlength="160" placeholder="${esc(t.comment.placeholder)}"></textarea>
        <div class="comment__tools">
          <button type="button" class="chip chip--small" id="suggestBtn">${esc(t.comment.suggest)}</button>
          <span class="comment__count" id="commentCount" aria-hidden="true">0/160</span>
        </div>
        <div class="step__foot"><button type="button" class="btn btn--primary" id="submitBtn">${esc(t.comment.submit)}</button></div>
      </section>
    </div>
  `;
}

function applyStaticTexts() {
  els.hint.textContent = hasMouse ? TEXTS.hintMouse : TEXTS.hintTouch;
  els.celebrateTitle.textContent = TEXTS.success.title;
  els.celebrateMessage.textContent = TEXTS.success.message;
  els.replayBtn.textContent = TEXTS.success.replay;
  document.title = `${TEXTS.surveyTitle}: Marido (${HUSBAND_NAME}) 💌`;
}

/* ---------- Fundo: estrelas e corações ---------- */

function buildSky() {
  const starFrag = document.createDocumentFragment();
  for (let i = 0; i < SETTINGS.stars; i++) {
    const s = document.createElement('span');
    s.className = 'star';
    s.style.left = `${rand(0, 100)}%`;
    s.style.top = `${rand(0, 100)}%`;
    s.style.setProperty('--size', `${rand(1, 2.6).toFixed(1)}px`);
    s.style.setProperty('--dur', `${rand(2, 5).toFixed(1)}s`);
    s.style.setProperty('--delay', `${rand(-5, 0).toFixed(1)}s`);
    starFrag.appendChild(s);
  }
  els.stars.appendChild(starFrag);

  const colors = ['#ff8fb0', '#ff6f98', '#ffadc4', '#ff3d6e', '#ffc8d8'];
  const heartFrag = document.createDocumentFragment();
  for (let i = 0; i < SETTINGS.bgHearts; i++) {
    const h = document.createElement('span');
    h.className = 'bg-heart';
    const dur = rand(10, 20);
    h.style.setProperty('--left', `${rand(0, 100)}%`);
    h.style.setProperty('--top', `${rand(5, 95)}%`);
    h.style.setProperty('--size', `${rand(10, 26).toFixed(0)}px`);
    h.style.setProperty('--dur', `${dur.toFixed(1)}s`);
    h.style.setProperty('--delay', `${rand(-dur, 0).toFixed(1)}s`);
    h.style.setProperty('--alpha', rand(0.25, 0.7).toFixed(2));
    h.style.setProperty('--rot', `${rand(-25, 25).toFixed(0)}deg`);
    h.style.setProperty('--color', pick(colors));
    h.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${HEART_PATH}"/></svg>`;
    heartFrag.appendChild(h);
  }
  els.bgHearts.appendChild(heartFrag);
}

/* ---------- Botões fujões (reutilizável) ---------- */

function viewport() {
  const vv = window.visualViewport;
  return {
    w: vv ? vv.width : document.documentElement.clientWidth,
    h: vv ? vv.height : window.innerHeight,
  };
}

function overlaps(a, b, pad = 0) {
  return !(a.x + a.w + pad < b.left || a.x - pad > b.right || a.y + a.h + pad < b.top || a.y - pad > b.bottom);
}

const dodgers = [];

/**
 * Faz um botão fugir do cursor/dedo, sempre dentro da tela.
 * @param {HTMLElement} btn
 * @param {{ step: string, avoid?: () => Element[], onAttempt?: (n:number) => void }} opts
 */
function makeDodger(btn, { step, avoid = () => [], onAttempt = () => {} }) {
  const d = { btn, step, floating: false, ghost: null, last: 0, attempts: 0 };

  function float() {
    if (d.floating) return;
    const r = btn.getBoundingClientRect();
    const fs = getComputedStyle(btn).fontSize;
    const hadFocus = document.activeElement === btn;
    d.ghost = document.createElement('span');
    d.ghost.className = 'dodge-ghost';
    d.ghost.setAttribute('aria-hidden', 'true');
    d.ghost.textContent = '💨';
    d.ghost.style.width = `${r.width}px`;
    d.ghost.style.height = `${r.height}px`;
    btn.replaceWith(d.ghost);
    document.body.appendChild(btn); // sai da carta (que tem transform) e vai pro body
    btn.classList.add('is-floating');
    btn.style.fontSize = fs;
    btn.style.left = `${r.left}px`;
    btn.style.top = `${r.top}px`;
    d.floating = true;
    if (hadFocus) btn.focus({ preventScroll: true });
    void btn.offsetWidth;
  }

  function dodge(px, py, force = false) {
    const now = performance.now();
    if (!force && now - d.last < 220) return;
    d.last = now;
    d.attempts++;
    onAttempt(d.attempts);
    float();

    const { w: vw, h: vh } = viewport();
    const bw = btn.offsetWidth;
    const bh = btn.offsetHeight;
    const m = 14;
    const maxX = Math.max(m, vw - bw - m);
    const maxY = Math.max(m, vh - bh - m);
    const cur = btn.getBoundingClientRect();
    const avoidRects = avoid().map((el) => el.getBoundingClientRect());
    const minDist = Math.min(vw, vh) * 0.32;

    let best = { x: m, y: m };
    let bestScore = -Infinity;
    for (let i = 0; i < 70; i++) {
      const x = rand(m, maxX);
      const y = rand(m, maxY);
      const dPointer = Math.hypot(x + bw / 2 - px, y + bh / 2 - py);
      const dCur = Math.hypot(x - cur.left, y - cur.top);
      let score = Math.min(dPointer, minDist * 1.6) + Math.min(dCur, minDist) * 0.5;
      if (avoidRects.some((r) => overlaps({ x, y, w: bw, h: bh }, r, 14))) score -= 10000;
      if (dPointer < minDist) score -= 1000;
      if (score > bestScore) {
        bestScore = score;
        best = { x, y };
      }
    }
    btn.style.left = `${Math.round(best.x)}px`;
    btn.style.top = `${Math.round(best.y)}px`;
    btn.classList.remove('is-wiggle');
    void btn.offsetWidth;
    btn.classList.add('is-wiggle');
  }

  function dodgeFromSelf(force) {
    const r = btn.getBoundingClientRect();
    dodge(r.left + r.width / 2, r.top + r.height / 2, force);
  }

  function reset() {
    if (d.floating && d.ghost) {
      d.ghost.replaceWith(btn);
    }
    d.ghost = null;
    d.floating = false;
    d.attempts = 0;
    btn.hidden = false;
    btn.classList.remove('is-floating', 'is-wiggle');
    btn.style.left = btn.style.top = btn.style.fontSize = '';
  }

  function clamp() {
    if (!d.floating) return;
    const { w: vw, h: vh } = viewport();
    const x = Math.min(Math.max(14, parseFloat(btn.style.left) || 0), Math.max(14, vw - btn.offsetWidth - 14));
    const y = Math.min(Math.max(14, parseFloat(btn.style.top) || 0), Math.max(14, vh - btn.offsetHeight - 14));
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
  }

  btn.addEventListener('pointerenter', (e) => {
    if (e.pointerType === 'mouse' || e.pointerType === 'pen') dodge(e.clientX, e.clientY);
  });
  btn.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    dodge(e.clientX, e.clientY);
  });
  btn.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.detail === 0) {
      // teclado (Enter/Espaço): foge também, mas mantém o foco
      dodgeFromSelf(true);
      btn.focus({ preventScroll: true });
    } else {
      dodgeFromSelf(false);
    }
  });

  Object.assign(d, { dodge, reset, clamp });
  dodgers.push(d);
  return d;
}

// Com mouse, os fujões escapam quando o cursor chega perto
document.addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse' || !surveyActive()) return;
  const current = STEP_IDS[state.step];
  for (const d of dodgers) {
    if (d.step !== current || d.btn.hidden) continue;
    const r = d.btn.getBoundingClientRect();
    const pad = 24;
    if (e.clientX > r.left - pad && e.clientX < r.right + pad && e.clientY > r.top - pad && e.clientY < r.bottom + pad) {
      d.dodge(e.clientX, e.clientY);
    }
  }
});

const clampAll = () => dodgers.forEach((d) => d.clamp());
window.addEventListener('resize', clampAll);
window.visualViewport?.addEventListener('resize', clampAll);

/* ---------- Navegação entre etapas ---------- */

let isOpen = false;
let celebrating = false;
const surveyActive = () => isOpen && !els.letter.inert && !celebrating;

function stepEl(id) {
  return $(`.step[data-step="${id}"]`, els.letterInner);
}

function updateProgress() {
  const progress = $('#progress');
  const q = state.step;
  progress.classList.toggle('is-hidden', q === 0);
  $('#progressFill').style.width = `${(Math.max(q, 0) / TOTAL_QUESTIONS) * 100}%`;
  const label = q === 0 ? '' : TEXTS.progress(q, TOTAL_QUESTIONS);
  $('#progressLabel').textContent = label;
  $('#progressSr').textContent = label;
}

function showStep(index, { focus = true } = {}) {
  state.step = index;
  dodgers.forEach((d) => d.reset());
  STEP_IDS.forEach((id, i) => {
    const el = stepEl(id);
    const active = i === index;
    el.classList.toggle('is-active', active);
    el.classList.toggle('is-past', i < index);
    el.inert = !active;
    el.setAttribute('aria-hidden', String(!active));
  });
  updateProgress();
  if (focus) {
    const heading = $('.step.is-active [tabindex="-1"]', els.letterInner);
    window.setTimeout(() => heading?.focus({ preventScroll: true }), prefersReducedMotion() ? 0 : 320);
  }
}

function nextStep() {
  if (state.step < STEP_IDS.length - 1) showStep(state.step + 1);
}

function setNextEnabled(id, enabled) {
  const btn = $('[data-next]', stepEl(id));
  if (btn) btn.disabled = !enabled;
}

function say(id, text) {
  const el = $(`#${id}`);
  el.textContent = text;
  el.classList.remove('is-pop');
  void el.offsetWidth;
  el.classList.add('is-pop');
}

/* ---------- Etapa: estrelas ---------- */

function paintStars(n, { preview = false } = {}) {
  $$('.star-btn', els.letterInner).forEach((b) => {
    const on = Number(b.dataset.star) <= n;
    b.classList.toggle(preview ? 'is-preview' : 'is-on', on);
    if (!preview) b.setAttribute('aria-pressed', String(Number(b.dataset.star) === 5 && n === 5));
  });
}

function setupStars() {
  const row = $('#starsRow');
  row.addEventListener('click', (e) => {
    const b = e.target.closest('.star-btn');
    if (!b) return;
    const n = Number(b.dataset.star);
    if (n < 5) {
      b.classList.remove('is-falling');
      void b.offsetWidth;
      b.classList.add('is-falling');
      say('starsMsg', cycle(TEXTS.stars.fixes, state.counters.stars++));
    } else {
      say('starsMsg', TEXTS.stars.perfect);
    }
    // Não importa onde ela clicar: a nota vira 5 ⭐
    state.rating = 5;
    const delay = n < 5 && !prefersReducedMotion() ? 380 : 0;
    window.setTimeout(() => {
      $$('.star-btn', row).forEach((s, i) => {
        s.style.setProperty('--i', i);
      });
      paintStars(5);
      row.classList.remove('is-celebrate');
      void row.offsetWidth;
      row.classList.add('is-celebrate');
      $('#starsScore').textContent = TEXTS.stars.score;
      setNextEnabled('stars', true);
    }, delay);
  });

  // Com mouse: passar por cima de 1–4 faz a estrelinha fugir assustada
  row.addEventListener('pointerover', (e) => {
    const b = e.target.closest('.star-btn');
    if (!b || e.pointerType !== 'mouse') return;
    paintStars(5, { preview: true });
    const n = Number(b.dataset.star);
    if (n < 5 && !b.classList.contains('is-scared')) {
      b.style.setProperty('--dx', `${rand(-10, 10).toFixed(0)}px`);
      b.classList.add('is-scared');
      window.setTimeout(() => b.classList.remove('is-scared'), 520);
      if (state.rating < 5) say('starsMsg', pick(TEXTS.stars.scared));
    }
  });
  row.addEventListener('pointerleave', () => paintStars(0, { preview: true }));
}

/* ---------- Etapa: nível de amor ---------- */

function setupLove() {
  const range = $('#loveRange');
  const value = $('#loveValue');
  const heart = $('#loveHeart');
  const more = $('#loveMore');
  let snapTimer = 0;
  let anim = 0;

  const render = () => {
    const v = Number(range.value);
    const label = state.loveLevel >= 0 && v === 100 ? TEXTS.love.moreLevels[state.loveLevel] : `${v}%`;
    value.textContent = label;
    range.setAttribute('aria-valuetext', label);
    range.style.setProperty('--fill', `${v}%`);
    const boost = state.loveLevel >= 0 ? 1 + (state.loveLevel + 1) * 0.07 : 1;
    heart.style.setProperty('--scale', ((0.55 + (v / 100) * 0.45) * boost).toFixed(3));
    els.letterInner.classList.toggle('is-love-low', v < 100);
  };

  let snapping = false;
  const snapBack = () => {
    window.clearTimeout(snapTimer);
    if (snapping || Number(range.value) >= 100) return;
    say('loveMsg', cycle(TEXTS.love.snaps, state.counters.snaps++));
    if (prefersReducedMotion()) {
      range.value = 100;
      render();
      return;
    }
    cancelAnimationFrame(anim);
    snapping = true;
    const from = Number(range.value);
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / 520, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      range.value = Math.round(from + (100 - from) * eased);
      render();
      if (p < 1) {
        anim = requestAnimationFrame(step);
      } else {
        snapping = false;
        heart.classList.add('is-boing');
        window.setTimeout(() => heart.classList.remove('is-boing'), 600);
      }
    };
    anim = requestAnimationFrame(step);
  };

  range.addEventListener('input', () => {
    if (snapping) return;
    render();
    if (Number(range.value) < 100) {
      say('loveMsg', TEXTS.love.lowering);
      window.clearTimeout(snapTimer);
      snapTimer = window.setTimeout(snapBack, 650);
    }
  });
  range.addEventListener('change', snapBack);
  range.addEventListener('pointerup', snapBack);

  more.addEventListener('click', () => {
    const levels = TEXTS.love.moreLevels;
    state.loveLevel = Math.min(state.loveLevel + 1, levels.length - 1);
    range.value = 100;
    render();
    heart.classList.remove('is-boing');
    void heart.offsetWidth;
    heart.classList.add('is-boing');
    if (state.loveLevel === levels.length - 1) {
      say('loveMsg', TEXTS.love.moreDone);
      more.disabled = true;
    } else {
      say('loveMsg', `${levels[state.loveLevel]}! 🚀`);
    }
  });

  state.renderLove = render;
  render();
}

/* ---------- Etapa: o que mais gosta ---------- */

function setupLikes() {
  const step = stepEl('likes');
  const options = $$('[data-like]', step);
  const all = $('#likesAll');

  const sync = () => {
    options.forEach((b) => b.setAttribute('aria-pressed', String(state.likes.has(Number(b.dataset.like)))));
    const everything = state.likes.size === options.length;
    all.setAttribute('aria-pressed', String(everything));
    setNextEnabled('likes', state.likes.size > 0);
  };

  options.forEach((b) =>
    b.addEventListener('click', () => {
      const i = Number(b.dataset.like);
      if (state.likes.has(i)) state.likes.delete(i);
      else state.likes.add(i);
      sync();
      if (state.likes.size === 0) say('likesMsg', TEXTS.likes.needOne);
      else if (state.likes.size === options.length) say('likesMsg', 'Tudo nele, né? 😍');
      else $('#likesMsg').textContent = '';
    }),
  );

  all.addEventListener('click', () => {
    const everything = state.likes.size === options.length;
    state.likes = everything ? new Set() : new Set(options.map((b) => Number(b.dataset.like)));
    sync();
    say('likesMsg', everything ? TEXTS.likes.needOne : 'Ótima escolha! Ele é completo 😍✨');
  });

  makeDodger($('#likesNothing'), {
    step: 'likes',
    avoid: () => [$('[data-next]', step), all],
    onAttempt: () => say('likesMsg', cycle(TEXTS.likes.teases, state.counters.likes++)),
  });

  state.syncLikes = sync;
}

/* ---------- Etapa: recomendaria? ---------- */

function setupRecommend() {
  const step = stepEl('recommend');
  const mine = $('#recMine');
  mine.addEventListener('click', () => {
    state.recommend = TEXTS.recommend.mine;
    mine.setAttribute('aria-pressed', 'true');
    say('recMsg', TEXTS.recommend.correct);
    setNextEnabled('recommend', true);
  });
  makeDodger($('#recYes'), {
    step: 'recommend',
    avoid: () => [mine, $('[data-next]', step)],
    onAttempt: () => {
      say('recMsg', cycle(TEXTS.recommend.jealous, state.counters.jealous++));
      mine.classList.remove('is-nudge');
      void mine.offsetWidth;
      mine.classList.add('is-nudge');
    },
  });
}

/* ---------- Etapa: renovar contrato ---------- */

function setupRenew() {
  const step = stepEl('renew');
  const options = $$('[data-renew]', step);
  options.forEach((b) =>
    b.addEventListener('click', () => {
      state.renew = TEXTS.renew.options[Number(b.dataset.renew)];
      options.forEach((o) => o.setAttribute('aria-pressed', String(o === b)));
      say('renewMsg', 'Contrato renovado com sucesso! 📜💍');
      setNextEnabled('renew', true);
    }),
  );
  makeDodger($('#renewZero'), {
    step: 'renew',
    avoid: () => [...options, $('[data-next]', step)],
    onAttempt: () => say('renewMsg', cycle(TEXTS.renew.teases, state.counters.renew++)),
  });
}

/* ---------- Etapa: comentário ---------- */

function setupComment() {
  const box = $('#commentBox');
  const count = $('#commentCount');
  const max = Number(box.maxLength) || 160;
  let sIndex = Math.floor(Math.random() * TEXTS.comment.suggestions.length);

  const render = () => {
    state.comment = box.value.trim();
    count.textContent = `${box.value.length}/${max}`;
  };
  box.addEventListener('input', render);

  $('#suggestBtn').addEventListener('click', () => {
    const s = TEXTS.comment.suggestions[sIndex++ % TEXTS.comment.suggestions.length];
    const sep = box.value && !/\s$/.test(box.value) ? ' ' : '';
    const nextValue = `${box.value}${sep}${s}`;
    if (nextValue.length <= max) box.value = nextValue;
    else box.value = s;
    render();
    box.classList.remove('is-pop');
    void box.offsetWidth;
    box.classList.add('is-pop');
  });

  $('#submitBtn').addEventListener('click', celebrate);
  state.renderComment = render;
}

/* ---------- Abrir o envelope ---------- */

const timers = [];
const later = (fn, ms) => timers.push(window.setTimeout(fn, ms));

function openEnvelope({ viaKeyboard = false } = {}) {
  if (isOpen) return;
  isOpen = true;
  const fast = prefersReducedMotion();
  const t = fast ? { flap: 0, rise: 0, ready: 0 } : { flap: 950, rise: 1900, ready: 2750 };
  const { classList } = els.scene;

  classList.add('is-opening');
  later(() => classList.add('is-flap-back', 'is-rising'), t.flap);
  later(() => {
    classList.remove('is-rising');
    classList.add('is-out');
  }, t.rise);
  later(() => {
    els.letter.inert = false;
    if (viaKeyboard) $('[data-next]', stepEl('cover')).focus({ preventScroll: true });
  }, t.ready);
}

els.openBtn.addEventListener('click', (e) => openEnvelope({ viaKeyboard: e.detail === 0 }));

/* ---------- Comemoração ---------- */

function buildReceipt() {
  const t = TEXTS.success;
  const likes =
    state.likes.size === TEXTS.likes.options.length
      ? t.allLikes
      : [...state.likes].sort().map((i) => TEXTS.likes.options[i]).join(', ');
  const love = state.loveLevel >= 0 ? TEXTS.love.moreLevels[state.loveLevel] : '100% (no mínimo)';
  const rows = [
    [t.rows.product, `Marido (${HUSBAND_NAME})`],
    [t.rows.rating, '⭐⭐⭐⭐⭐ (5.0)'],
    [t.rows.love, love],
    [t.rows.likes, likes],
    [t.rows.recommend, state.recommend || TEXTS.recommend.mine],
    [t.rows.renew, state.renew || TEXTS.renew.options[0]],
    [t.rows.comment, state.comment ? `“${state.comment}”` : t.noComment],
  ];
  els.receipt.innerHTML = `
    <div class="receipt__head">
      <p class="receipt__title">${esc(t.receiptTitle)}</p>
      <p class="receipt__number">${esc(t.receiptNumber)} · ${esc(new Date().toLocaleDateString('pt-BR'))}</p>
    </div>
    <dl class="receipt__rows">
      ${rows.map(([k, v]) => `<div class="receipt__row"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}
    </dl>
    <div class="receipt__foot">
      <p class="receipt__approved">✅ ${esc(t.approved)}</p>
      <span class="receipt__stamp" aria-hidden="true">${esc(t.stamp)}<small>5.0 ⭐</small></span>
    </div>
  `;
}

function celebrate() {
  if (celebrating) return;
  celebrating = true;
  dodgers.forEach((d) => d.reset());
  buildReceipt();
  els.letter.inert = true;
  els.scene.classList.add('is-hidden');
  els.celebrate.inert = false;
  els.celebrate.setAttribute('aria-hidden', 'false');
  els.celebrate.classList.add('is-visible');
  els.celebrate.scrollTop = 0;
  window.setTimeout(() => els.celebrateTitle.focus({ preventScroll: true }), 300);
  confetti.start();
}

els.replayBtn.addEventListener('click', reset);

function reset() {
  timers.splice(0).forEach(clearTimeout);
  confetti.stop();
  celebrating = false;
  isOpen = false;

  Object.assign(state, { rating: 0, love: 100, loveLevel: -1, likes: new Set(), recommend: '', renew: '', comment: '' });
  Object.keys(state.counters).forEach((k) => (state.counters[k] = 0));

  // limpa a carta inteira e monta de novo (estado zerado)
  dodgers.forEach((d) => {
    d.reset();
    d.btn.remove();
  });
  dodgers.length = 0;
  initSurvey();

  els.celebrate.classList.remove('is-visible');
  els.celebrate.setAttribute('aria-hidden', 'true');
  els.celebrate.inert = true;
  els.letter.inert = true;
  els.scene.className = 'scene';
  els.openBtn.focus({ preventScroll: true });
}

/* ---------- Confete (canvas) ---------- */

const confetti = (() => {
  const canvas = els.confetti;
  const ctx = canvas.getContext('2d');
  const colors = ['#ff3d6e', '#ff6f98', '#ff8fb0', '#ffc8d8', '#ffffff', '#ffd166', '#c9a7ff'];
  let particles = [];
  let raf = 0;
  let running = false;
  let spawnUntil = 0;
  let dpr = 1;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(window.innerWidth * dpr);
    canvas.height = Math.round(window.innerHeight * dpr);
  }

  function make(x, y, burst) {
    const angle = burst ? rand(0, Math.PI * 2) : rand(Math.PI * 0.4, Math.PI * 0.6);
    const speed = burst ? rand(4, 11) : rand(1, 2.5);
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: burst ? Math.sin(angle) * speed - 3 : Math.sin(angle) * speed,
      size: rand(7, 15),
      rot: rand(0, Math.PI * 2),
      vr: rand(-0.15, 0.15),
      color: pick(colors),
      shape: Math.random() < 0.4 ? 'heart' : Math.random() < 0.3 ? 'star' : 'rect',
      life: 0,
      wobble: rand(0, Math.PI * 2),
    };
  }

  function drawHeart(s) {
    ctx.beginPath();
    ctx.moveTo(0, s * 0.3);
    ctx.bezierCurveTo(0, 0, -s * 0.5, 0, -s * 0.5, s * 0.3);
    ctx.bezierCurveTo(-s * 0.5, s * 0.6, 0, s * 0.8, 0, s);
    ctx.bezierCurveTo(0, s * 0.8, s * 0.5, s * 0.6, s * 0.5, s * 0.3);
    ctx.bezierCurveTo(s * 0.5, 0, 0, 0, 0, s * 0.3);
    ctx.fill();
  }

  function drawStar(s) {
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 ? s * 0.22 : s * 0.55;
      const a = (Math.PI / 5) * i - Math.PI / 2;
      ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
    ctx.fill();
  }

  function frame(now) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    if (now < spawnUntil && particles.length < 260) {
      for (let i = 0; i < 3; i++) particles.push(make(rand(0, w), -20, false));
    }
    particles = particles.filter((p) => p.y < h + 40 && p.life < 900);
    for (const p of particles) {
      p.life++;
      p.wobble += 0.08;
      p.vx *= 0.985;
      p.vy = Math.min(p.vy + 0.12, 4.2);
      p.x += p.vx + Math.sin(p.wobble) * 0.6;
      p.y += p.vy;
      p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.shape === 'star' ? '#ffd166' : p.color;
      if (p.shape === 'heart') {
        ctx.translate(0, -p.size / 2);
        drawHeart(p.size * 1.2);
      } else if (p.shape === 'star') {
        drawStar(p.size * 1.3);
      } else {
        ctx.scale(1, Math.abs(Math.cos(p.wobble)) * 0.8 + 0.2);
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      }
      ctx.restore();
    }
    if (particles.length || now < spawnUntil) raf = requestAnimationFrame(frame);
    else running = false;
  }

  function start() {
    if (prefersReducedMotion()) return; // sem confete para quem prefere menos movimento
    resize();
    const w = window.innerWidth;
    const h = window.innerHeight;
    for (let i = 0; i < 140; i++) particles.push(make(w / 2, h * 0.3, true));
    spawnUntil = performance.now() + 4500;
    if (!running) {
      running = true;
      raf = requestAnimationFrame(frame);
    }
  }

  function stop() {
    cancelAnimationFrame(raf);
    running = false;
    particles = [];
    spawnUntil = 0;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  window.addEventListener('resize', () => running && resize());
  return { start, stop };
})();

/* ---------- Início ---------- */

function initSurvey() {
  buildLetter();
  setupStars();
  setupLove();
  setupLikes();
  setupRecommend();
  setupRenew();
  setupComment();
  showStep(0, { focus: false });
}

function onLetterClick(e) {
  const next = e.target.closest('[data-next]');
  if (next && !next.disabled) nextStep();
}

els.letterInner.addEventListener('click', onLetterClick);
applyStaticTexts();
buildSky();
initSurvey();
