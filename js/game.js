import { CATEGORIES } from '../data/categories.js';

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function createGame({ categoryKey, durationSec, difficulty, onTick, onWord, onEnd }) {
  const cat = CATEGORIES[categoryKey];
  if (!cat) throw new Error(`Unknown category: ${categoryKey}`);

  const words = cat.words[difficulty];
  if (!words || words.length === 0) {
    throw new Error(`No words for ${categoryKey}/${difficulty}`);
  }
  const deck = shuffle(words);
  const history = [];
  let index = 0;
  let remainingMs = durationSec * 1000;
  let lastTickAt = null;
  let intervalId = null;
  let ended = false;
  let lastTickSecond = Math.ceil(durationSec);

  function getCurrentWord() {
    return deck[index];
  }

  function record(status) {
    if (ended) return;
    const word = deck[index];
    if (word == null) return;
    history.push({ word, status });
    index++;
    if (index >= deck.length) {
      end();
    } else {
      onWord?.(deck[index]);
    }
  }

  function correct() { record('correct'); }
  function pass() { record('passed'); }

  function tickLoop() {
    const now = performance.now();
    const delta = lastTickAt == null ? 0 : now - lastTickAt;
    lastTickAt = now;
    remainingMs -= delta;
    const remainingSec = Math.max(0, remainingMs / 1000);
    onTick?.(remainingSec);
    // emit a per-second tick callback via lastTickSecond change for sound
    const curSec = Math.ceil(remainingSec);
    if (curSec !== lastTickSecond) {
      lastTickSecond = curSec;
      // expose via onTick second-boundary (caller may inspect)
    }
    if (remainingMs <= 0) end();
  }

  function start() {
    onWord?.(deck[index]);
    lastTickAt = performance.now();
    intervalId = setInterval(tickLoop, 100);
  }

  function end() {
    if (ended) return;
    ended = true;
    if (intervalId) clearInterval(intervalId);
    intervalId = null;
    onEnd?.({ history });
  }

  function getRemaining() {
    return remainingMs / 1000;
  }

  return {
    start,
    correct,
    pass,
    end,
    getRemaining,
    getCurrentWord,
    getHistory: () => history,
  };
}
