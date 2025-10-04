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
