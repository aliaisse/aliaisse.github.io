// Theme toggle (persists in localStorage)
(function () {
  const btn = document.getElementById('themeToggle');
  const key = 'pref-theme';
  const stored = localStorage.getItem(key);
  if (stored) document.documentElement.setAttribute('data-theme', stored);
  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? '' : 'dark';
    if (next) document.documentElement.setAttribute('data-theme', next);
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem(key, next);
  });
})();

// Simple TOC from h2 elements
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

  // Highlight active section on scroll
  const links = [...toc.querySelectorAll('a')];
  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        const id = e.target.id;
        const link = links.find(l => l.hash === `#${id}`);
        if (link) {
          if (e.isIntersecting) links.forEach(x => x.classList.toggle('active', x === link));
        }
      });
    },
    { rootMargin: '0px 0px -70% 0px', threshold: 0.01 }
  );
  document.querySelectorAll('.content h2, .content h3').forEach(h => obs.observe(h));
})();

// swap the toggle icon moon/sun when theme changes
(function(){
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const setIcon = () => {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.innerHTML = dark
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9-10v2h3v-2h-3zM6.76 19.16l-1.8 1.79 1.79 1.79 1.8-1.79-1.79-1.79zM17.24 4.84l1.8-1.79 1.79 1.79-1.79 1.79-1.8-1.79zM12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14z"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  };
  setIcon();
  btn.addEventListener('click', setIcon);
})();
