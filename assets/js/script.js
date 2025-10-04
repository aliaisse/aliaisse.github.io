// ===== All-pages script: theme toggle + icons + simple TOC =====
document.addEventListener('DOMContentLoaded', () => {
  const KEY  = 'pref-theme';
  const root = document.documentElement;

  // --- Apply saved theme (or system default on first visit)
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'dark') root.setAttribute('data-theme', 'dark');
    else if (saved === 'light') root.removeAttribute('data-theme');
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      root.setAttribute('data-theme', 'dark');
    }
  } catch (_) {}

  // --- Toggle icon swapping (moon <-> sun)
  const toggleBtn = document.getElementById('themeToggle');
  function setToggleIcon() {
    if (!toggleBtn) return;
    const dark = root.getAttribute('data-theme') === 'dark';
    toggleBtn.innerHTML = dark
      // SUN icon when in dark mode (user can click to go light)
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9-10v2h3v-2h-3zM6.76 19.16l-1.8 1.79 1.79 1.79 1.8-1.79-1.79-1.79zM17.24 4.84l1.8-1.79 1.79 1.79-1.79 1.79-1.8-1.79zM12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14z"/></svg>'
      // MOON icon when in light mode (user can click to go dark)
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
  setToggleIcon();

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const dark = root.getAttribute('data-theme') === 'dark';
      if (dark) {
        root.removeAttribute('data-theme');          // go light
        try { localStorage.setItem(KEY, 'light'); } catch (_) {}
      } else {
        root.setAttribute('data-theme', 'dark');     // go dark
        try { localStorage.setItem(KEY, 'dark'); } catch (_) {}
      }
      setToggleIcon();
    });
  }

  // --- Search icon is already inline in HTML; nothing else needed.
  // (You can later wire #searchBtn to open a modal/search UI.)

  // --- Build a simple TOC from h2/h3 in .content (if present)
  const toc = document.getElementById('tocList');
  if (toc) {
    const headers = document.querySelectorAll('.content h2, .content h3');
    headers.forEach(h => {
      if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/\s+/g, '-');
      const a = document.createElement('a');
      a.href = `#${h.id}`;
      a.textContent = h.textContent.trim();
      toc.appendChild(a);
    });
  }
});
