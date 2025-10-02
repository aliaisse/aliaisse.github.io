/* compact horizontal icon row */
.icon-row{
  display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.25rem;
}
.icon{
  display:inline-flex; align-items:center; justify-content:center;
  width:36px; height:36px; border:1px solid #e5e5e5; border-radius:999px;
  background:#fff; text-decoration:none;
}
.icon svg{ width:18px; height:18px; }
.icon:hover{ background:#f6f8ff; }

<aside class="sidebar">
  <div class="photo">
    <img src="{{ '/assets/headshot.jpg' | relative_url }}" alt="Ali A. Isse">
  </div>

  <div class="name">Ali A. Isse</div>
  <div class="affil">
    Ph.D. Candidate, <strong>School of Public & International Affairs</strong>, <strong>Princeton University</strong><br>
    Princeton, New Jersey
  </div>

  <nav class="icon-row">
  <!-- Email -->
  <a class="icon" href="mailto:YOUR.EMAIL@UNI.EDU" aria-label="Email" title="Email">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 6h16v12H4z"/><path d="M22 6l-10 7L2 6"/>
    </svg>
  </a>

  <!-- Google Scholar -->
  <a class="icon" href="https://scholar.google.com/citations?user=YOURID" aria-label="Google Scholar" title="Google Scholar">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 3l9 6-9 6-9-6 9-6z"/><path d="M7 13v5l5 3 5-3v-5"/>
    </svg>
  </a>

  <!-- ORCID -->
  <a class="icon" href="https://orcid.org/YOUR-ORCID" aria-label="ORCID" title="ORCID">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" opacity=".15"></circle>
      <rect x="9" y="7" width="2" height="10" rx="1"></rect>
      <path d="M14 9a3 3 0 1 1 0 6h-1V9h1z"></path>
    </svg>
  </a>

  <!-- GitHub -->
  <a class="icon" href="https://github.com/aliaisse" aria-label="GitHub" title="GitHub">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.95c.58.1.79-.25.79-.56v-2.1c-3.2.7-3.88-1.39-3.88-1.39-.53-1.36-1.3-1.73-1.3-1.73-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.74 1.26 3.41.97.11-.76.41-1.26.74-1.55-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.77.11 3.06.73.8 1.17 1.82 1.17 3.07 0 4.39-2.69 5.35-5.25 5.63.42.36.79 1.08.79 2.18v3.23c0 .31.21.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/>
    </svg>
  </a>

  <!-- LinkedIn -->
  <a class="icon" href="https://www.linkedin.com/in/mehdi-i-28a95683/aria-label="LinkedIn" title="LinkedIn">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM10 9h4v2.2c.56-1.06 1.98-2.2 4.09-2.2 3.27 0 3.91 2.05 3.91 4.72V21h-4v-6.1c0-1.45-.03-3.33-2.03-3.33-2.03 0-2.34 1.58-2.34 3.22V21h-4z"/>
    </svg>
  </a>

  <!-- X / Twitter -->
  <a class="icon" href="https://x.com/IsseMehdi" aria-label="X (Twitter)" title="X (Twitter)">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H15l-3.1 4.2L8.1 2H2l7.1 9.1L2.3 22H6l3.9-5.3L14.1 22H22l-7.6-9.8L21.7 2h-2.8zm-4.1 16.6-4.4-5.7-4.6 6.1h-.3l5.8-7.7L6.1 3.4h2.8l4.1 5.3 4.2-5.3h.3l-5.5 7.3 5.5 7.6h-2.7z"/>
    </svg>
  </a>
</nav>

