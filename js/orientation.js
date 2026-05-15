// We use `devicemotion` instead of `deviceorientation` because the Euler
// angles (alpha/beta/gamma) suffer from gimbal lock and axis saturation when
// the phone is held vertically in landscape — exactly the position used here.
// The gravity vector from `accelerationIncludingGravity` rotates linearly with
// device tilt regardless of orientation, so we can read tilt directly from it.
//
// When the phone is held vertically against the forehead, gravity points along
// the device's x-axis (with sign depending on landscape direction). Tilting the
// top of the phone forward/backward rotates the device around its y-axis,
// which projects a non-zero component of gravity onto the device's z-axis
// (the screen normal). We track that z-component to detect tilt direction.

const TRIGGER_DELTA = 4.0;   // m/s² ~ sin(θ) * 9.8 → ~24°
const DEADZONE_DELTA = 1.5;  // ~9°
const COOLDOWN_MS = 700;

let onCorrect = null;
let onPass = null;
let active = false;
let neutralZ = 0;
let inDeadzone = true;
let lastTriggerAt = 0;
let invertControls = false;
let eventReceived = false;
let listenerAttached = false;

function handleMotion(event) {
  const g = event.accelerationIncludingGravity;
  if (!g || g.z == null) return;
  eventReceived = true;
  if (!active) return;

  const delta = g.z - neutralZ;
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
  window.addEventListener('devicemotion', handleMotion);
  listenerAttached = true;
}

export async function requestOrientationPermission() {
  // iOS 13+ requires explicit permission for motion sensors.
  if (typeof DeviceMotionEvent !== 'undefined'
      && typeof DeviceMotionEvent.requestPermission === 'function') {
    try {
      const state = await DeviceMotionEvent.requestPermission();
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
      const g = event.accelerationIncludingGravity;
      if (!g || g.z == null) return;
      eventReceived = true;
      samples.push(g.z);
      if (samples.length >= 10) {
        finish(true);
      }
    };

    const finish = (ok) => {
      if (resolved) return;
      resolved = true;
      window.removeEventListener('devicemotion', sampler);
      if (samples.length > 0) {
        neutralZ = samples.reduce((a, b) => a + b, 0) / samples.length;
        resolve(true);
      } else {
        resolve(false);
      }
    };

    window.addEventListener('devicemotion', sampler);
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
    window.removeEventListener('devicemotion', handleMotion);
    listenerAttached = false;
  }
  active = false;
  eventReceived = false;
}
