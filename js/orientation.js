// In landscape vertical orientation (phone held on forehead), the device's
// `gamma` axis suffers from gimbal lock: it saturates at ±90° and can't reliably
// detect tilt in both directions. We use `beta` instead, which has range
// -180..180 and remains well-behaved at the orientations we care about.

const TRIGGER_DELTA = 30;
const DEADZONE_DELTA = 12;
const COOLDOWN_MS = 700;

let onCorrect = null;
let onPass = null;
let active = false;
let neutralBeta = 0;
let inDeadzone = true;
let lastTriggerAt = 0;
let invertControls = false;
let eventReceived = false;
let listenerAttached = false;

function normalizeDelta(d) {
  while (d > 180) d -= 360;
  while (d < -180) d += 360;
  return d;
}

function handleOrientation(event) {
  if (event.beta == null) return;
  eventReceived = true;
  if (!active) return;

  const delta = normalizeDelta(event.beta - neutralBeta);
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
  attachListener();
  return true;
}

export function calibrateNeutral(timeoutMs = 2000) {
  return new Promise((resolve) => {
    let resolved = false;
    const samples = [];

    const sampler = (event) => {
      if (event.beta == null) return;
      eventReceived = true;
      samples.push(event.beta);
      if (samples.length >= 10) {
        finish(true);
      }
    };

    const finish = (ok) => {
      if (resolved) return;
      resolved = true;
      window.removeEventListener('deviceorientation', sampler);
      if (samples.length > 0) {
        neutralBeta = samples.reduce((a, b) => a + b, 0) / samples.length;
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
