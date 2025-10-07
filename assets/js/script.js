<script>
(function () {
  const STORAGE_KEY = 'pref-theme';

  function setDark(on) {
    const html = document.documentElement;
    const body = document.body;
    if (on) {
      html.setAttribute('data-theme', 'dark');
      body.classList.add('dark');
      try { localStorage.setItem(STORAGE_KEY, 'dark'); } catch(e){}
    } else {
      html.removeAttribute('data-theme');
      body.classList.remove('dark');
      try { localStorage.setItem(STORAGE_KEY, 'light'); } catch(e){}
    }
  }

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function init() {
    const sw = document.getElementById('themeSwitch') || document.querySelector('.theme-switch input');

    // initial state: saved > system
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch(e){}
    if (saved === 'dark') setDark(true);
    else if (saved === 'light') setDark(false);
    else setDark(systemPrefersDark());

    if (sw) {
      sw.checked =
        document.documentElement.getAttribute('data-theme') === 'dark' ||
        document.body.classList.contains('dark');
      sw.addEventListener('change', () => setDark(sw.checked));
    }

    // follow system changes only if user hasn't chosen
    try {
      const mm = window.matchMedia('(prefers-color-scheme: dark)');
      if (mm && (saved !== 'dark' && saved !== 'light')) {
        const handler = e => setDark(e.matches);
        mm.addEventListener?.('change', handler);
        mm.addListener?.(handler); // Safari fallback
      }
    } catch(e){}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>
