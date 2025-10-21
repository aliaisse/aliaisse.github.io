(() => {
  const KEY = 'pref-theme';

  /* ===== THEME ===== */
  function setTheme(mode) {
    const dark = mode === 'dark';
    const root = document.documentElement;
    const body = document.body;
    if (dark) { root.setAttribute('data-theme','dark'); body.classList.add('dark'); }
    else { root.removeAttribute('data-theme'); body.classList.remove('dark'); }
    try { localStorage.setItem(KEY, dark ? 'dark' : 'light'); } catch {}
    // re-color accordion headers after theme change
    colorAccordions();
  }
  function getInitialTheme() {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {}
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  /* ===== ACCORDIONS ===== */
  function colorAccordions(){
    const header = document.querySelector('.site-header');
    if(!header) return;
    const bg = getComputedStyle(header).backgroundColor;
    const ink = getComputedStyle(header).color || '#ffffff';
    document.querySelectorAll('.acc__head').forEach(h=>{
      h.style.backgroundColor = bg;
      h.style.color = ink;
      const chev = h.querySelector('.acc__chev');
      if (chev) chev.style.borderColor = ink;
      const title = h.querySelector('.acc__title');
      if (title) title.style.color = ink;
    });
  }
  function initAccordions(){
    document.querySelectorAll('.acc__head').forEach(head => {
      head.addEventListener('click', () => {
        const id = head.getAttribute('data-acc');
        const panel = document.getElementById(id);
        if (panel) panel.classList.toggle('open');
      });
    });
    colorAccordions();
  }

  /* ===== TOC (optional) ===== */
  function buildTOC(){
    const toc = document.getElementById('tocList');
    if (!toc) return;
    const headers = document.querySelectorAll('.content h2, .content h3');
    headers.forEach(h => {
      if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/\s+/g,'-');
      const a = document.createElement('a');
      a.href = `#${h.id}`;
      a.textContent = h.textContent.trim();
      toc.appendChild(a);
    });
  }

  /* ===== MOBILE MENU ===== */
  function initMenu(){
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
      nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
      if (backdrop) backdrop.addEventListener('click', closeMenu);
      window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    }
  }

  /* ===== INIT ===== */
  function init(){
    // theme
    const sw = document.getElementById('themeSwitch');
    setTheme(getInitialTheme());
    if (sw) {
      sw.checked = document.documentElement.getAttribute('data-theme') === 'dark';
      sw.addEventListener('change', () => setTheme(sw.checked ? 'dark' : 'light'));
    }

    // features
    initMenu();
    initAccordions();
    buildTOC();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
