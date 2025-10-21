(() => {
  const KEY = 'pref-theme';

  function setTheme(mode) {
    const dark = mode === 'dark';
    const root = document.documentElement;
    const body = document.body;
    if (dark) { root.setAttribute('data-theme','dark'); body.classList.add('dark'); }
    else { root.removeAttribute('data-theme'); body.classList.remove('dark'); }
    try { localStorage.setItem(KEY, dark ? 'dark' : 'light'); } catch {}
  }

  function getInitialTheme() {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {}
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }

  ready(() => {
    /* ---- THEME TOGGLE ---- */
    const sw = document.getElementById('themeSwitch');
    setTheme(getInitialTheme());
    if (sw) {
      sw.checked = document.documentElement.getAttribute('data-theme') === 'dark';
      sw.addEventListener('change', () => setTheme(sw.checked ? 'dark' : 'light'));
    }

    /* ---- MOBILE MENU ---- */
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
      (nav.classList.contains('open') ? closeMenu : openMenu)();
    }

    if (btn && nav){
      btn.addEventListener('click', toggleMenu);
      // Close when a nav link is clicked
      nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
      // Backdrop click closes
      if (backdrop) backdrop.addEventListener('click', closeMenu);
      // ESC closes
      window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    }
  });
})();
