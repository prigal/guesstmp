import { CATEGORIES } from '../data/categories.js';
import { circuitSvg } from '../data/circuits.js';

let renderer = 'text';

export function setGameRenderer(type) {
  renderer = type || 'text';
}

export function getGameRenderer() {
  return renderer;
}

const screens = ['home', 'howto', 'setup', 'prep', 'game', 'recap'];

export function showScreen(name) {
  for (const id of screens) {
    const el = document.getElementById(`screen-${id}`);
    if (!el) continue;
    el.classList.toggle('active', id === name);
  }
  document.body.classList.toggle('in-game', name === 'game');
}

export function buildCategoryGrid(onSelect) {
  const grid = document.getElementById('category-grid');
  grid.innerHTML = '';
  for (const [key, cat] of Object.entries(CATEGORIES)) {
    const total = cat.words.facile.length + cat.words.moyen.length + cat.words.difficile.length;
    const card = document.createElement('button');
    card.className = 'category-card';
    card.dataset.key = key;
    card.style.setProperty('--cat-color', cat.color);
    card.style.borderColor = cat.color;
    card.innerHTML = `
      <div class="cat-emoji">${cat.emoji}</div>
      <div class="cat-label">${cat.label}</div>
      <div class="cat-count">${total} ${cat.unit || 'mots'}</div>
    `;
    card.addEventListener('click', () => {
      grid.querySelectorAll('.category-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      onSelect(key);
    });
    grid.appendChild(card);
  }
}

export function setGameBackground(color, mono = false) {
  const screen = document.getElementById('screen-game');
  screen.style.setProperty('--cat-color', color);
  screen.classList.toggle('game-mono', !!mono);
}

export function setWord(text) {
  const wordEl = document.getElementById('game-word');
  const figureEl = document.getElementById('game-figure');
  if (renderer === 'circuit') {
    const svg = circuitSvg(text);
    figureEl.innerHTML = svg;
    figureEl.classList.toggle('hidden', !svg || !text);
    wordEl.textContent = svg ? '' : text;
    wordEl.classList.toggle('hidden', !!svg);
  } else {
    figureEl.innerHTML = '';
    figureEl.classList.add('hidden');
    wordEl.classList.remove('hidden');
    wordEl.textContent = text;
  }
}

export function setTimer(seconds) {
  const el = document.getElementById('game-timer');
  el.textContent = Math.max(0, Math.ceil(seconds));
  el.classList.toggle('urgent', seconds <= 10);
}

export function setScore(score) {
  document.getElementById('game-score').textContent = score;
}

const FLASH_MS = 450;
let flashTimer = null;

export function flashCorrect() { flash('correct'); }
export function flashWrong() { flash('wrong'); }

function flash(kind) {
  const flashEl = document.getElementById('game-flash');
  flashEl.className = `game-flash ${kind}`;
  if (flashTimer) clearTimeout(flashTimer);
  flashTimer = setTimeout(() => {
    flashEl.className = 'game-flash';
    flashTimer = null;
  }, FLASH_MS);
}

export function showCountdown(value) {
  const el = document.getElementById('countdown');
  document.getElementById('countdown-text').textContent = value;
  el.classList.remove('hidden');
}

export function hideCountdown() {
  document.getElementById('countdown').classList.add('hidden');
}

export function showTouchControls(visible) {
  const el = document.getElementById('touch-controls');
  el.classList.toggle('visible', visible);
  el.classList.toggle('hidden', false);
}

export function renderRecap(history) {
  const correctCount = history.filter(h => h.status === 'correct').length;
  const passedCount = history.filter(h => h.status === 'passed').length;
  document.getElementById('recap-correct').textContent = correctCount;
  document.getElementById('recap-passed').textContent = passedCount;

  const list = document.getElementById('recap-list');
  list.innerHTML = '';
  if (history.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'recap-item';
    empty.textContent = 'Aucun mot joué';
    list.appendChild(empty);
    return;
  }
  for (const entry of history) {
    const li = document.createElement('li');
    li.className = `recap-item ${entry.status}`;
    li.innerHTML = `
      <span class="recap-item-word">${entry.word}</span>
      <span class="recap-item-status">${entry.status === 'correct' ? '✓' : '✗'}</span>
    `;
    list.appendChild(li);
  }
}
