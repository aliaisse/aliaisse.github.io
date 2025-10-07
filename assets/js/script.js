(() => {
  const KEY = 'pref-theme';

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
    try { localStorage.setItem(KEY, dark ? 'dark' : 'light'); } catch {}
  }

  function initialTheme() {
    let saved = null;
    try { saved = localStorage.getItem(KEY); } catch {}
    if (saved === 'dark' || saved === 'light') return saved;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(() => {
    const sw = document.getElementById('themeSwitch') || document.querySelector('.theme-switch input');

    // Set initial theme
    setTheme(initialTheme());

    // Wire the switch
    if (sw) {
      const isDark =
        document.documentElement.getAttribute('data-theme') === 'dark' ||
        document.body.classList.contains('dark');
      sw.checked = isDark;
      sw.addEventListener('change', () => setTheme(sw.checked ? 'dark' : 'light'));
    }

    // Follow system changes ONLY if user hasn't chosen
    try {
      const saved = localStorage.getItem(KEY);
      const mm = window.matchMedia('(prefers-color-scheme: dark)');
      if (mm && (saved !== 'dark' && saved !== 'light')) {
        const handler = e => setTheme(e.matches ? 'dark' : 'light');
        mm.addEventListener?.('change', handler);
        mm.addListener?.(handler); // Safari fallback
      }
    } catch {}
  });
})();
