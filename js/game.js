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
  let paused = false;
  let lastTickSecond = Math.ceil(durationSec);

  function record(status) {
    if (ended || paused) return;
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
    const curSec = Math.ceil(remainingSec);
    if (curSec !== lastTickSecond) lastTickSecond = curSec;
    if (remainingMs <= 0) end();
  }

  function start() {
    onWord?.(deck[index]);
    lastTickAt = performance.now();
    intervalId = setInterval(tickLoop, 100);
  }

  function pause() {
    if (paused || ended) return;
    paused = true;
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function resume() {
    if (!paused || ended) return;
    paused = false;
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

  // Like end(), but doesn't fire onEnd — used when the player quits or restarts
  // mid-game, so we don't navigate to the recap screen.
  function abort() {
    if (ended) return;
    ended = true;
    if (intervalId) clearInterval(intervalId);
    intervalId = null;
  }

  return {
    start,
    correct,
    pass,
    pause,
    resume,
    end,
    abort,
    isPaused: () => paused,
    isEnded: () => ended,
    getRemaining: () => remainingMs / 1000,
    getCurrentWord: () => deck[index],
    getHistory: () => history,
  };
}
