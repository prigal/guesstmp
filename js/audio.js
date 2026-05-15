let ctx = null;

export function initAudio() {
  if (ctx) return ctx;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  } catch {
    ctx = null;
  }
  return ctx;
}

export function resumeAudio() {
  if (ctx && ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }
}

function tone({ freq, duration = 0.15, type = 'sine', volume = 0.2, delay = 0 }) {
  if (!ctx) return;
  const t0 = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(volume, t0 + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, t0 + duration);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + duration + 0.05);
}

export function playCorrect() {
  tone({ freq: 800, duration: 0.12, type: 'triangle', volume: 0.25 });
  tone({ freq: 1200, duration: 0.18, type: 'triangle', volume: 0.2, delay: 0.08 });
}

export function playPass() {
  tone({ freq: 220, duration: 0.2, type: 'sawtooth', volume: 0.2 });
}

export function playTick() {
  tone({ freq: 600, duration: 0.05, type: 'square', volume: 0.1 });
}

export function playEnd() {
  tone({ freq: 523, duration: 0.18, type: 'triangle', volume: 0.25 });
  tone({ freq: 659, duration: 0.18, type: 'triangle', volume: 0.25, delay: 0.18 });
  tone({ freq: 784, duration: 0.32, type: 'triangle', volume: 0.25, delay: 0.36 });
}
