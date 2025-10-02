---
title: "Home"
layout: default
---

<!-- ======= PAGE STYLES (safe to keep in index.md) ======= -->
<style>
/* top row: photo left, text right */
.hero{display:flex;gap:1.25rem;align-items:center;flex-wrap:wrap;margin:0 0 1rem 0}
.hero .photo img{width:180px;max-width:100%;border-radius:8px}
.hero .text{flex:1;min-width:260px}
.hero .name{font-size:2rem;font-weight:700;margin:0}
.hero .tagline{margin:.25rem 0;color:#555}

/* second row: content left, "Follow me" sidebar right */
.grid{display:grid;grid-template-columns:1fr 260px;gap:1.5rem;margin-top:.5rem}
.card{border:1px solid #e5e5e5;border-radius:10px;padding:1rem}
.follow a{display:block;margin:.25rem 0;text-decoration:none}

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
      Ph.D. Candidate, School of <strong>Public and International Affairs</strong>, <strong>PRINCETON UNIVERSITY</strong> — Princeton, NJ
    </p>
  </div>
</div>

<!-- ======= SECOND ROW: MAIN CONTENT + FOLLOW ME ======= -->
<div class="grid">
  <div>
    <h2>About me</h2>
    <p>
      I study coercive statecraft and counterproliferation. My dissertation examines how states choose
      between sustaining diplomacy, selecting preventive force, or adopting strategic restraint when facing
      an advancing nuclear program.
    </p>

  </div>

  <aside class="card follow">
    <h3>Follow me</h3>
    <a href="/CV/">CV</a>
    <a href="/Research/">Research</a>
    <a href="/Teaching/">Teaching</a>
    <a href="/Talks/">Talks</a>
    <hr>
    <a href="mailto:YOUR.EMAIL@UNI.EDU">Email</a>
    <a href="https://scholar.google.com/citations?user=YOURID">Google Scholar</a>
    <a href="https://orcid.org/YOUR-ORCID">ORCID</a>
    <a href="https://github.com/aliaisse">GitHub</a>
    <a href="https://x.com/YOURHANDLE">X (Twitter)</a>
  </aside>
</div>
    <div class="col-photo">
      <img src="{{ '/assets/headshot.jpg' | relative_url }}" alt="Ali A. Isse" width="180">
    </div>
  </div>
</div>
