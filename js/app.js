import { CATEGORIES } from '../data/categories.js';
import { createGame } from './game.js';
import {
  showScreen, buildCategoryGrid, setGameBackground, setWord, setTimer, setScore,
  flashCorrect, flashWrong, showCountdown, hideCountdown, showTouchControls,
  renderRecap
} from './ui.js';
import {
  initAudio, resumeAudio, playCorrect, playPass, playTick, playEnd
} from './audio.js';
import {
  requestOrientationPermission, calibrateNeutral, startOrientationGame,
  stopOrientationGame, hasOrientationEvents
} from './orientation.js';
import {
  enterFullscreen, exitFullscreen, lockLandscape, unlockOrientation,
  requestWakeLock, releaseWakeLock
} from './fullscreen.js';

const state = {
  selectedCategory: null,
  selectedDuration: 60,
  invertControls: false,
  game: null,
  score: 0,
  lastTickedSecond: null,
};

function navigateTo(name) {
  if (name === 'setup') {
    buildCategoryGrid((key) => {
      state.selectedCategory = key;
      updateContinueButton();
    });
    if (state.selectedCategory) {
      const card = document.querySelector(`.category-card[data-key="${state.selectedCategory}"]`);
      card?.classList.add('selected');
    }
    updateContinueButton();
  }
  showScreen(name);
}

function updateContinueButton() {
  document.getElementById('btn-to-prep').disabled = !state.selectedCategory;
}

function setupNavBindings() {
  document.getElementById('btn-play').addEventListener('click', () => navigateTo('setup'));
  document.getElementById('btn-howto').addEventListener('click', () => navigateTo('howto'));
  document.getElementById('btn-to-prep').addEventListener('click', () => navigateTo('prep'));
  document.getElementById('btn-start').addEventListener('click', startGame);
  document.getElementById('btn-replay').addEventListener('click', () => navigateTo('prep'));

  document.querySelectorAll('[data-nav]').forEach((el) => {
    el.addEventListener('click', () => navigateTo(el.dataset.nav));
  });

  document.querySelectorAll('#duration-row .pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#duration-row .pill').forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      state.selectedDuration = parseInt(pill.dataset.duration, 10);
    });
  });

  document.getElementById('invert-controls').addEventListener('change', (e) => {
    state.invertControls = e.target.checked;
  });

  document.getElementById('btn-correct').addEventListener('click', () => {
    state.game?.correct();
  });
  document.getElementById('btn-pass').addEventListener('click', () => {
    state.game?.pass();
  });
}

function buildGame() {
  const game = createGame({
    categoryKey: state.selectedCategory,
    durationSec: state.selectedDuration,
    onWord: (word) => setWord(word),
    onTick: (remaining) => {
      setTimer(remaining);
      const curSec = Math.ceil(remaining);
      if (state.lastTickedSecond === null) state.lastTickedSecond = curSec;
      if (curSec !== state.lastTickedSecond) {
        state.lastTickedSecond = curSec;
        if (curSec > 0 && curSec <= 5) playTick();
      }
    },
    onEnd: ({ history }) => {
      stopOrientationGame();
      playEnd();
      releaseWakeLock();
      unlockOrientation();
      exitFullscreen();
      renderRecap(history);
      setTimeout(() => showScreen('recap'), 500);
    },
  });

  // Wrap correct/pass to add flash, sound, and score.
  const origCorrect = game.correct;
  const origPass = game.pass;
  game.correct = () => {
    flashCorrect();
    playCorrect();
    state.score += 1;
    setScore(state.score);
    origCorrect();
  };
  game.pass = () => {
    flashWrong();
    playPass();
    origPass();
  };
  return game;
}

async function startGame() {
  // Audio init must be from user gesture.
  initAudio();
  resumeAudio();

  // Best-effort fullscreen + orientation lock + wake lock.
  await enterFullscreen(document.documentElement);
  await lockLandscape();
  await requestWakeLock();

  const cat = CATEGORIES[state.selectedCategory];
  setGameBackground(cat.color);
  setScore(0);
  state.score = 0;
  state.lastTickedSecond = null;
  setWord('');

  showScreen('game');

  const granted = await requestOrientationPermission();
  await runCountdown();
  const calibrated = granted ? await calibrateNeutral(1500) : false;
  const useTouch = !granted || !calibrated || !hasOrientationEvents();
  showTouchControls(useTouch);

  state.game = buildGame();
  state.game.start();

  if (granted && calibrated) {
    startOrientationGame({
      onCorrect: () => state.game?.correct(),
      onPass: () => state.game?.pass(),
      invert: state.invertControls,
    });
  }
}

function runCountdown() {
  return new Promise((resolve) => {
    let n = 3;
    showCountdown(n);
    const id = setInterval(() => {
      n -= 1;
      if (n <= 0) {
        clearInterval(id);
        hideCountdown();
        resolve();
      } else {
        showCountdown(n);
      }
    }, 1000);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setupNavBindings();
  navigateTo('home');
});
