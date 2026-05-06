/* ============================================================
   Tweaks bridge — applies persisted defaults to <html> immediately
   on first paint so there's no flash before React mounts.
   Reads window.__TWEAK_DEFAULTS__ (defined inline in index.html).
   ============================================================ */

(function () {
  const T = window.__TWEAK_DEFAULTS__ || {};
  if (T.mood)    document.documentElement.dataset.mood    = T.mood;
  if (T.density) document.documentElement.dataset.density = T.density;
  if (T.hero)    document.documentElement.dataset.hero    = T.hero;

  // Mood-aware copy in the hero meta line.
  // The script runs in <head>, so #hero doesn't exist yet — query lazily.
  const moodCopy = {
    graphite: '# whoami — Kalol, IN · UTC+5:30',
    paper:    '# notebook — Kalol, IN · UTC+5:30',
    terminal: '$ whoami — kalol.in:~ · utc+5:30',
    midnight: '> whoami — kalol.in:~ · utc+5:30',
  };
  function getMetaEl() {
    return document.querySelector('#hero .meta span:last-child');
  }
  function writeMeta(mood) {
    const el = getMetaEl();
    if (el && moodCopy[mood]) el.textContent = moodCopy[mood];
  }

  // Update once the DOM is ready (avoids the "null on first paint" gap)
  if (T.mood) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => writeMeta(T.mood), { once: true });
    } else {
      writeMeta(T.mood);
    }
  }

  // Expose for the React panel to reuse
  window.__moodCopy = moodCopy;
  window.__applyMood = function (mood) {
    document.documentElement.dataset.mood = mood;
    writeMeta(mood);
  };
})();
