// ===== Theme switch (works on every page) + simple TOC =====
(function () {
  const STORAGE_KEY = 'pref-theme';
  const root = document.documentElement;

  // Find the switch in the header
  const switchInput =
    document.getElementById('themeSwitch') ||
    document.querySelector('.theme-switch input');

  // --- Helpers
  function applyTheme(mode /* 'dark' | 'light' */) {
    if (mode === 'dark') {
      root.setAttribute('data-theme', 'dark');
      try { localStorage.setItem(STORAGE_KEY, 'dark'); } catch {}
      if (switchInput) switchInput.checked = true;
    } else {
      root.removeAttribute('data-theme');
      try { localStorage.setItem(STORAGE_KEY, 'light'); } catch {}
      if (switchInput) switchInput.checked = false;
    }
  }

  function systemPrefers() {
    return (window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
           ? 'dark' : 'light';
  }

  // --- Initial theme (saved > system)
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch {}
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved);
  } else {
    applyTheme(systemPrefers());
  }

  // --- Keep UI checkbox in sync on load
  if (switchInput) {
    switchInput.checked = root.getAttribute('data-theme') === 'dark';
    switchInput.addEventListener('change', () => {
      applyTheme(switchInput.checked ? 'dark' : 'light');
    });
  }

  // --- Follow system changes ONLY if user hasn't explicitly chosen
  try {
    const mm = window.matchMedia('(prefers-color-scheme: dark)');
    if (mm && (saved !== 'dark' && saved !== 'light')) {
      const handler = e => applyTheme(e.matches ? 'dark' : 'light');
      mm.addEventListener?.('change', handler);
      mm.addListener?.(handler); // Safari fallback
    }
  } catch {}

  // --- Build right-side TOC (if present)
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
