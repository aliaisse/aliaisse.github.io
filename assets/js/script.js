// Real toggle switch: remembers choice across pages and sessions
document.addEventListener('DOMContentLoaded', () => {
  const KEY  = 'pref-theme';
  const root = document.documentElement;
  const sw   = document.getElementById('themeSwitch');

  // Apply saved theme (or system default on first visit)
  const saved = (() => {
    try { return localStorage.getItem(KEY); } catch { return null; }
  })();

  if (saved === 'dark') {
    root.setAttribute('data-theme', 'dark');
    if (sw) sw.checked = true;
  } else if (saved === 'light') {
    root.removeAttribute('data-theme');
    if (sw) sw.checked = false;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark');
    if (sw) sw.checked = true;
  }

  // Toggle handler
  if (sw) {
    sw.addEventListener('change', () => {
      if (sw.checked) {
        root.setAttribute('data-theme', 'dark');
        try { localStorage.setItem(KEY, 'dark'); } catch {}
      } else {
        root.removeAttribute('data-theme');
        try { localStorage.setItem(KEY, 'light'); } catch {}
      }
    });
  }

  // Build simple TOC (keeps your right-side "On this page")
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
