---
title: "Home"
layout: default
---

<!-- ===== All page styles live in this ONE block ===== -->
<style>
/* top row: photo left, text right */
.hero{display:flex;gap:1.25rem;align-items:center;flex-wrap:wrap;margin:0 0 1rem 0}
.hero .photo img{width:180px;max-width:100%;border-radius:8px}
.hero .text{flex:1;min-width:260px}
.hero .name{font-size:2rem;font-weight:700;margin:0}
.hero .tagline{margin:.25rem 0;color:#555}
.site-footer .p-name { display: none !important; }
.site-footer .copyright { display: none !important; }
/* Hide duplicate name in Minima footer (covers common variants) */
.site-footer .p-name,
.site-footer .h-card .p-name,
.site-footer .contact-list .p-name,
.site-footer .footer-col-1 .p-name { display: none !important; }
.site-footer .copyright { display: none !important; }
/* Make your big header name blue (the one we created in index.md) */
.hero .name { color: #1e40af; }

/* Make the site menu links (Research · Talks · Teaching · CV) blue */
.site-header .site-nav .page-link { color: #1e40af !important; }
.site-header .site-nav .page-link:hover { text-decoration: underline; }

/* (Optional) make the small site title in the top-left blue too */
.site-header .site-title,
.site-header .site-title:link,
.site-header .site-title:visited { color: #1e40af !important; }
  
/* second row: content left, sidebar right */
.grid{display:grid;grid-template-columns:1fr 260px;gap:1.5rem;margin-top:.5rem}
.card{border:1px solid #e5e5e5;border-radius:10px;padding:1rem}

/* buttons row in sidebar */
.btn-row{display:flex;flex-wrap:wrap;gap:.5rem;margin:.5rem 0 0 0}
.btn{
  display:inline-flex;align-items:center;gap:.45rem;
  padding:.45rem .75rem;border:1px solid #e5e5e5;border-radius:999px;
  background:#fff;text-decoration:none;white-space:nowrap
}
.btn svg{width:16px;height:16px}
.btn:hover{background:#f6f6f6}

/* stack the sidebar under content on phones */
@media (max-width: 820px){
  .grid{grid-template-columns:1fr}
}
</style>

<!-- ======= TOP ROW ======= -->
<div class="hero">
  <div class="photo">
    <img src="{{ '/assets/headshot.jpg' | relative_url }}" alt="Ali A. Isse">
  </div>
  <div class="text">
    <h1 class="name">Ali A. Isse</h1>
    <p class="tagline">
      Ph.D. Candidate, <strong>School of Public & International Affairs</strong>, <strong>Princeton University</strong>. Princeton, New Jersey
    </p>
  </div>
</div>

<!-- ======= SECOND ROW: MAIN CONTENT + LINKS & PROFILES ======= -->
<div class="grid">
  <div>
    <h2>About me</h2>
    <p>
      I study coercive statecraft and counterproliferation. My dissertation examines how states choose
      between sustaining diplomacy, selecting preventive force, or adopting strategic restraint when facing
      an advancing nuclear program.
    </p>
   

  </div>

  <aside class="card">
    <h3>Links &amp; Profiles</h3>

  

    <!-- external profiles as horizontal buttons with small icons -->
    <div class="btn-row">
      <!-- Email -->
      <a class="btn" href="mailto:AI.9431@pPRINCETON.EDU" aria-label="Email me">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 6h16v12H4z"/><path d="M22 6l-10 7L2 6"/>
        </svg>
        Email me
      </a>

      <!-- Google Scholar -->
      <a class="btn" href="https://scholar.google.com/citations?user=YOURID" aria-label="View my Google Scholar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 3l9 6-9 6-9-6 9-6z"/><path d="M7 13v5l5 3 5-3v-5"/>
        </svg>
        Google Scholar
      </a>

      <!-- ORCID -->
      <a class="btn" href="https://orcid.org/YOUR-ORCID" aria-label="View my ORCID">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" opacity=".15"></circle>
          <rect x="9" y="7" width="2" height="10" rx="1"></rect>
          <path d="M14 9a3 3 0 1 1 0 6h-1V9h1z"></path>
        </svg>
        ORCID
      </a>

      <!-- GitHub -->
      <a class="btn" href="https://github.com/aliaisse" aria-label="View my GitHub">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.95c.58.1.79-.25.79-.56v-2.1c-3.2.7-3.88-1.39-3.88-1.39-.53-1.36-1.3-1.73-1.3-1.73-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.74 1.26 3.41.97.11-.76.41-1.26.74-1.55-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.77.11 3.06.73.8 1.17 1.82 1.17 3.07 0 4.39-2.69 5.35-5.25 5.63.42.36.79 1.08.79 2.18v3.23c0 .31.21.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/>
        </svg>
        GitHub
      </a>

      <!-- LinkedIn -->
      <a class="btn" href="https://www.linkedin.com/in/YOURID" aria-label="View my LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM10 9h4v2.2c.56-1.06 1.98-2.2 4.09-2.2 3.27 0 3.91 2.05 3.91 4.72V21h-4v-6.1c0-1.45-.03-3.33-2.03-3.33-2.03 0-2.34 1.58-2.34 3.22V21h-4z"/>
        </svg>
        LinkedIn
      </a>

      <!-- X / Twitter -->
      <a class="btn" href="https://x.com/YOURHANDLE" aria-label="View my X profile">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.9 2H15l-3.1 4.2L8.1 2H2l7.1 9.1L2.3 22H6l3.9-5.3L14.1 22H22l-7.6-9.8L21.7 2h-2.8zm-4.1 16.6-4.4-5.7-4.6 6.1h-.3l5.8-7.7L6.1 3.4h2.8l4.1 5.3 4.2-5.3h.3l-5.5 7.3 5.5 7.6h-2.7z"/>
        </svg>
        X (Twitter)
      </a>
    </div>
  </aside>
</div>
