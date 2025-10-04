// ===== THEME TOGGLE (persistent across pages) =====
(function () {
  const KEY = 'pref-theme';
  const root = document.documentElement;

  // Apply saved theme (or system default on first visit)
  const saved = localStorage.getItem(KEY);
  if (saved === 'dark' || saved === 'light') {
    root.setAttribute('data-theme', saved === 'dark' ? 'dark' : '');
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) root.setAttribute('data-theme', 'dark');
  }

  // Find the toggle button on this page
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  // Show correct icon for the current theme
  function renderIcon() {
    const dark = root.getAttribute('data-theme') === 'dark';
    btn.innerHTML = dark
      // SUN icon when in dark mode (tap to go light)
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9-10v2h3v-2h-3zM6.76 19.16l-1.8 1.79 1.79 1.79 1.8-1.79-1.79-1.79zM17.24 4.84l1.8-1.79 1.79 1.79-1.79 1.79-1.8-1.79zM12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14z"/></svg>'
      // MOON icon when in light mode (tap to go dark)
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  // Toggle handler
  function toggleTheme() {
    const dark = root.getAttribute('data-theme') === 'dark';
    if (dark) {
      root.removeAttribute('data-theme');       // go light
      localStorage.setItem(KEY, 'light');
    } else {
      root.setAttribute('data-theme', 'dark');  // go dark
      localStorage.setItem(KEY, 'dark');
    }
    renderIcon();
  }

  renderIcon();
  btn.addEventListener('click', toggleTheme);
})();
