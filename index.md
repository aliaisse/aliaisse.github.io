---
title: "Home"
layout: default
---

<!-- ===== page styles (self-contained) ===== -->
<style>
/* remove the bottom footer strip to avoid the duplicate name */
.site-footer { display: none !important; }

/* top header colors (title + nav) */
.site-header .site-title,
.site-header .site-nav .page-link { color:#1a73e8 !important; text-decoration:none; }
.site-header .site-title:hover,
.site-header .site-nav .page-link:hover,
.site-header .site-nav .page-link:focus { color:#1558b0 !important; }

/* two-column page: left sidebar, right content */
.layout { display:grid; grid-template-columns: 280px 1fr; gap:2rem; margin-top:1rem; }
@media (max-width: 860px){ .layout{ grid-template-columns:1fr; } }

/* left sidebar */
.sidebar { }
.sidebar .photo img { width:200px; max-width:100%; border-radius:10px; box-shadow:0 1px 4px rgba(0,0,0,.08); }
.sidebar .name { font-size:1.25rem; font-weight:700; margin:.75rem 0 .25rem; color:#1a73e8; }
.sidebar .affil { color:#555; margin:0 0 .75rem; line-height:1.35; }

/* link sections under the photo */
.section-title { font-weight:600; margin:1rem 0 .5rem; }
.linklist { display:flex; flex-direction:column; gap:.4rem; }
.linkbtn {
  display:flex; align-items:center; gap:.5rem;
  padding:.45rem .6rem; border:1px solid #e5e5e5; border-radius:10px;
  text-decoration:none; background:#fff;
}
.linkbtn:hover { background:#f6f8ff; }
.linkbtn svg { width:16px; height:16px; }

/* right column */
.content h1 { margin-top:0; }
</style>

<div class="layout">

  <!-- ========== LEFT: photo, name, affiliation, links ========== -->
  <aside class="sidebar">
    <div class="photo">
      <img src="{{ '/assets/headshot.jpg' | relative_url }}" alt="Ali A. Isse">
    </div>

    <div class="name">Ali A. Isse</div>
    <div class="affil">
      Ph.D. Candidate, <strong>School of Public & International Affairs</strong>, <strong>Princeton University</strong><br>
      Princeton, New Jersey
    </div>

    <div class="section-title">Quick links</div>
    <nav class="linklist">
      <a class="linkbtn" href="/CV/">
        <!-- document icon -->
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path></svg>
        CV
      </a>
      <a class="linkbtn" href="/Research/">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l9 6-9 6-9-6 9-6z"/><path d="M7 13v5l5 3 5-3v-5"/></svg>
        Research
      </a>
      <a class="linkbtn" href="/Teaching/">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22v-7a8 8 0 0 1 16 0v7"/><path d="M12 2v5"/></svg>
        Teaching
      </a>
      <a class="linkbtn" href="/Talks/">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"/></svg>
        Talks
      </a>
    </nav>

    <div class="section-title">Links &amp; profiles</div>
    <nav class="linklist">
      <a class="linkbtn" href="mailto:ai9431@princeton.edu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16v12H4z"/><path d="M22 6l-10 7L2 6"/></svg>
        Email me
      </a>
      <a class="linkbtn" href="https://scholar.google.com/citations?user=YOURID">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l9 6-9 6-9-6 9-6z"/><path d="M7 13v5l5 3 5-3v-5"/></svg>
        Google Scholar
      </a>
      <a class="linkbtn" href="https://orcid.org/YOUR-ORCID">
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" opacity=".15"></circle><rect x="9" y="7" width="2" height="10" rx="1"></rect><path d="M14 9a3 3 0 1 1 0 6h-1V9h1z"></path></svg>
        ORCID
      </a>
      <a class="linkbtn" href="https://github.com/aliaisse">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.95c.58.1.79-.25.79-.56v-2.1c-3.2.7-3.88-1.39-3.88-1.39-.53-1.36-1.3-1.73-1.3-1.73-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.74 1.26 3.41.97.11-.76.41-1.26.74-1.55-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.77.11 3.06.73.8 1.17 1.82 1.17 3.07 0 4.39-2.69 5.35-5.25 5.63.42.36.79 1.08.79 2.18v3.23c0 .31.21.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>
        GitHub
      </a>
      <a class="linkbtn" href="https://www.linkedin.com/in/mehdi-i-28a95683/">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM10 9h4v2.2c.56-1.06 1.98-2.2 4.09-2.2 3.27 0 3.91 2.05 3.91 4.72V21h-4v-6.1c0-1.45-.03-3.33-2.03-3.33-2.03 0-2.34 1.58-2.34 3.22V21h-4z"/></svg>
        LinkedIn
      </a>
      <a class="linkbtn" href="https://x.com/IsseMehdi">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H15l-3.1 4.2L8.1 2H2l7.1 9.1L2.3 22H6l3.9-5.3L14.1 22H22l-7.6-9.8L21.7 2h-2.8zm-4.1 16.6-4.4-5.7-4.6 6.1h-.3l5.8-7.7L6.1 3.4h2.8l4.1 5.3 4.2-5.3h.3l-5.5 7.3 5.5 7.6h-2.7z"/></svg>
        X (Twitter)
      </a>
    </nav>
  </aside>

  <!-- ========== RIGHT: page content ========== -->
  <main class="content">
    <h1>About me</h1>
    <p>
      I study coercive statecraft and counterproliferation. My dissertation examines how states choose
      between sustaining diplomacy, selecting preventive force, or adopting strategic restraint when facing
      an advancing nuclear program.
    </p>
   
  </main>

</div>
