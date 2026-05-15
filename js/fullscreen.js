let wakeLockSentinel = null;

export async function enterFullscreen(element = document.documentElement) {
  try {
    if (element.requestFullscreen) {
      await element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      await element.webkitRequestFullscreen();
    }
  } catch {
    // Ignore — not supported / denied.
  }
}

export async function exitFullscreen() {
  try {
    if (document.fullscreenElement && document.exitFullscreen) {
      await document.exitFullscreen();
    }
  } catch {
    // ignore
  }
}

export async function lockLandscape() {
  try {
    if (screen.orientation && screen.orientation.lock) {
      await screen.orientation.lock('landscape');
    }
  } catch {
    // ignore — most desktop browsers and iOS Safari will throw
  }
}

export function unlockOrientation() {
  try {
    if (screen.orientation && screen.orientation.unlock) {
      screen.orientation.unlock();
    }
  } catch {
    // ignore
  }
}

export async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLockSentinel = await navigator.wakeLock.request('screen');
      document.addEventListener('visibilitychange', reacquireWakeLock);
    }
  } catch {
    // ignore
  }
}

async function reacquireWakeLock() {
  if (document.visibilityState === 'visible' && wakeLockSentinel !== null) {
    try {
      wakeLockSentinel = await navigator.wakeLock.request('screen');
    } catch {
      // ignore
    }
  }
}

export async function releaseWakeLock() {
  document.removeEventListener('visibilitychange', reacquireWakeLock);
  if (wakeLockSentinel) {
    try {
      await wakeLockSentinel.release();
    } catch {
      // ignore
    }
    wakeLockSentinel = null;
  }
}
