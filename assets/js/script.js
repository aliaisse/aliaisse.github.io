// Theme toggle + icons on every page
(function () {
  const KEY = 'pref-theme';
  const root = document.documentElement;

  // Apply saved theme or system default
  const saved = localStorage.getItem(KEY);
  if (saved === 'dark') root.setAttribute('data-theme', 'dark');
  if (saved === 'light') root.removeAttribute('data-theme');
  if (!saved && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark');
  }

  // Helpers to render icons
  const moon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  const sun  = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9-10v2h3v-2h-3zM6.76 19.16l-1.8 1.79 1.79 1.79 1.8-1.79-1.79-1.79zM17.24 4.84l1.8-1.79 1.79 1.79-1.79 1.79-1.8-1.79zM12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14z"/></svg>';
  const magnifier = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 1 0 14 15.5l.27.28v.79L20 21.5 21.5 20l-6-6zM6.5 11a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/></svg>';

  const toggleBtn = document.getElementById('themeToggle');
  const searchBtn = document.getElementById('searchBtn');

  // Render icons if buttons exist
  if (toggleBtn) {
    const setIcon = () => {
      const dark = root.getAttribute('data-theme') === 'dark';
      toggleBtn.innerHTML = dark ? sun : moon;
    };
    setIcon();
    toggleBtn.addEventListener('click', () => {
      const dark = root.getAttribute('data-theme') === 'dark';
      if (dark) {
        root.removeAttribute('data-theme');
        localStorage.setItem(KEY, 'light');
      } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem(KEY, 'dark');
      }
      setIcon();
    });
  }

  if (searchBtn) searchBtn.innerHTML = magnifier;

  // Build TOC links (h2/h3)
  (function () {
    const toc = document.getElementById('tocList');
    if (!toc) return;
    const headers = document.querySelectorAll('.content h2, .content h3');
    headers.forEach(h => {
      if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/\s+/g, '-');
      const a = document.createElement('a');
      a.href = `#${h.id}`;
      a.textContent = h.textContent.trim();
      toc.appendChild(a);
    });
  })();
})();
