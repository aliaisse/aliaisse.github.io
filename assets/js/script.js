(() => {
  const KEY = 'pref-theme';

  function setTheme(mode) {
    const root = document.documentElement;
    const body = document.body;
    const dark = mode === 'dark';
    if (dark) { root.setAttribute('data-theme','dark'); body.classList.add('dark'); }
    else { root.removeAttribute('data-theme'); body.classList.remove('dark'); }
    try { localStorage.setItem(KEY, dark ? 'dark' : 'light'); } catch {}
  }
  function initialTheme() {
    let saved = null;
    try { saved = localStorage.getItem(KEY); } catch {}
    if (saved === 'dark' || saved === 'light') return saved;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }
  function ready(fn){ if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn); else fn(); }

  ready(() => {
    // ===== Theme toggle
    const sw = document.getElementById('themeSwitch') || document.querySelector('.theme-switch input');
    setTheme(initialTheme());
    if (sw) {
      const isDark = document.documentElement.getAttribute('data-theme')==='dark' || document.body.classList.contains('dark');
      sw.checked = isDark;
      sw.addEventListener('change', () => setTheme(sw.checked ? 'dark' : 'light'));
    }

    // ===== Build right-side TOC
    const toc = document.getElementById('tocList');
    if (toc) {
      const headers = document.querySelectorAll('.content h2, .content h3');
      headers.forEach(h => {
        if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/\s+/g,'-');
        const a = document.createElement('a');
        a.href = `#${h.id}`;
        a.textContent = h.textContent.trim();
        toc.appendChild(a);
      });
    }

    // ===== Verify CV link and fix if needed
    (async () => {
      const links = Array.from(document.querySelectorAll('a')).filter(a =>
        /\/cv(_aliaisse)?\.pdf/i.test(a.getAttribute('href') || '')
      );
      if (!links.length) return;

      const candidates = [
        '/CV_aliaisse.pdf',
        '/cv_aliaisse.pdf',
        '/cv.pdf',
        '/CV.pdf'
      ];
      let found = null;
      for (const url of candidates) {
        try {
          const res = await fetch(url + '?t=' + Date.now(), { method: 'HEAD', cache: 'no-store' });
          if (res.ok) { found = url; break; }
        } catch {}
      }
      if (found) {
        links.forEach(a => { a.href = found + '?v=1'; });
      }
    })();

    // ===== Mobile menu toggler (hamburger)
    const btn = document.getElementById('menuToggle');
    const nav = document.getElementById('primaryNav');
    const backdrop = document.getElementById('mobileBackdrop');

    function openMenu(){
      if (!nav) return;
      nav.classList.add('open');
      if (btn) btn.setAttribute('aria-expanded','true');
      if (backdrop) backdrop.classList.add('show');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    }
    function closeMenu(){
      if (!nav) return;
      nav.classList.remove('open');
      if (btn) btn.setAttribute('aria-expanded','false');
      if (backdrop) backdrop.classList.remove('show');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    function toggleMenu(){
      if (!nav) return;
      if (nav.classList.contains('open')) closeMenu();
      else openMenu();
    }

    if (btn && nav){
      btn.addEventListener('click', toggleMenu);
      // Close when a nav link is clicked (single-page feel)
      nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
      // Close on backdrop click
      if (backdrop) backdrop.addEventListener('click', closeMenu);
      // Close on ESC
      window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeMenu(); });
    }
  });
})();
