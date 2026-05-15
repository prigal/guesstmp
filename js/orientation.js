const TRIGGER_DELTA = 35;
const DEADZONE_DELTA = 15;
const COOLDOWN_MS = 700;

let onCorrect = null;
let onPass = null;
let active = false;
let neutralGamma = 0;
let inDeadzone = true;
let lastTriggerAt = 0;
let invertControls = false;
let eventReceived = false;
let listenerAttached = false;

function handleOrientation(event) {
  if (event.gamma == null) return;
  eventReceived = true;
  if (!active) return;

  const delta = event.gamma - neutralGamma;
  const now = Date.now();

  if (!inDeadzone) {
    if (Math.abs(delta) < DEADZONE_DELTA) {
      inDeadzone = true;
    }
    return;
  }

  if (now - lastTriggerAt < COOLDOWN_MS) return;

  if (delta > TRIGGER_DELTA) {
    inDeadzone = false;
    lastTriggerAt = now;
    (invertControls ? onPass : onCorrect)?.();
  } else if (delta < -TRIGGER_DELTA) {
    inDeadzone = false;
    lastTriggerAt = now;
    (invertControls ? onCorrect : onPass)?.();
  }
}

function attachListener() {
  if (listenerAttached) return;
  window.addEventListener('deviceorientation', handleOrientation);
  listenerAttached = true;
}

export async function requestOrientationPermission() {
  if (typeof DeviceOrientationEvent !== 'undefined'
      && typeof DeviceOrientationEvent.requestPermission === 'function') {
    try {
      const state = await DeviceOrientationEvent.requestPermission();
      if (state === 'granted') {
        attachListener();
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }
  // Other browsers: just attach.
  attachListener();
  return true;
}

export function calibrateNeutral(timeoutMs = 2000) {
  return new Promise((resolve) => {
    let resolved = false;
    let bestGamma = null;

    const samples = [];
    const sampler = (event) => {
      if (event.gamma == null) return;
      eventReceived = true;
      samples.push(event.gamma);
      // collect 5 samples then average
      if (samples.length >= 5) {
        finish(true);
      }
    };

    const finish = (ok) => {
      if (resolved) return;
      resolved = true;
      window.removeEventListener('deviceorientation', sampler);
      if (samples.length > 0) {
        neutralGamma = samples.reduce((a, b) => a + b, 0) / samples.length;
        resolve(true);
      } else {
        resolve(false);
      }
    };

    window.addEventListener('deviceorientation', sampler);
    setTimeout(() => finish(false), timeoutMs);
  });
}

export function startOrientationGame({ onCorrect: oc, onPass: op, invert = false }) {
  onCorrect = oc;
  onPass = op;
  invertControls = invert;
  active = true;
  inDeadzone = true;
  lastTriggerAt = 0;
}

export function stopOrientationGame() {
  active = false;
}

export function hasOrientationEvents() {
  return eventReceived;
}

export function detachOrientation() {
  if (listenerAttached) {
    window.removeEventListener('deviceorientation', handleOrientation);
    listenerAttached = false;
  }
  active = false;
  eventReceived = false;
}
