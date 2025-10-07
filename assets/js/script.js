(() => {
  const STORAGE_KEY = 'pref-theme';

  // Apply theme to the page + persist
  function setTheme(mode) {
    const root = document.documentElement;
    const body = document.body;
    const dark = mode === 'dark';
    if (dark) {
      root.setAttribute('data-theme', 'dark');
      body.classList.add('dark');
    } else {
      root.removeAttribute('data-theme');
      body.classList.remove('dark');
    }
    try { localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light'); } catch {}
  }

  // Decide initial theme: saved > system
  function initialTheme() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch {}
    if (saved === 'dark' || saved === 'light') return saved;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark' : 'light';
  }

  function init() {
    const sw = document.getElementById('themeSwitch') || document.querySelector('.theme-switch input');

    // set initial
    setTheme(initialTheme());

    // wire the switch
    if (sw) {
      const isDark =
        document.documentElement.getAttribute('data-theme') === 'dark' ||
        document.body.classList.contains('dark');
      sw.checked = isDark;
      sw.addEventListener('change', () => setTheme(sw.checked ? 'dark' : 'light'));
    }

    // follow system ONLY if user hasn't picked
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const mm = window.matchMedia('(prefers-color-scheme: dark)');
      if (mm && (saved !== 'dark' && saved !== 'light')) {
        const handler = e => setTheme(e.matches ? 'dark' : 'light');
        mm.addEventListener?.('change', handler);
        mm.addListener?.(handler); // Safari fallback
      }
    } catch {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
