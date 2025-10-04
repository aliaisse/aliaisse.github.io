// ===== Theme switch (sets BOTH html[data-theme] and body.dark) + TOC =====
(function () {
  const STORAGE_KEY = 'pref-theme';
  const html = document.documentElement;
  const body = document.body;

  // Find the switch in the header
  const sw = document.getElementById('themeSwitch') || document.querySelector('.theme-switch input');

  // Helpers
  function setDark(on) {
    if (on) {
      html.setAttribute('data-theme', 'dark');
      body.classList.add('dark');
      try { localStorage.setItem(STORAGE_KEY, 'dark'); } catch {}
      if (sw) sw.checked = true;
    } else {
      html.removeAttribute('data-theme');
      body.classList.remove('dark');
      try { localStorage.setItem(STORAGE_KEY, 'light'); } catch {}
      if (sw) sw.checked = false;
    }
  }
  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // Initial state: saved > system
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch {}
  if (saved === 'dark') setDark(true);
  else if (saved === 'light') setDark(false);
  else setDark(systemPrefersDark());

  // Wire the switch
  if (sw) {
    sw.checked = html.getAttribute('data-theme') === 'dark' || body.classList.contains('dark');
    sw.addEventListener('change', () => setDark(sw.checked));
  }

  // Follow system changes ONLY if user hasn't chosen
  try {
    const mm = window.matchMedia('(prefers-color-scheme: dark)');
    if (mm && (saved !== 'dark' && saved !== 'light')) {
      const handler = e => setDark(e.matches);
      mm.addEventListener?.('change', handler);
      mm.addListener?.(handler); // Safari fallback
    }
  } catch {}

  // Right-side TOC
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
})();
