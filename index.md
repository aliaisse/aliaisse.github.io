---
title: "Home"
layout: default
---

<style>
  :root{
    --header-h: 64px;
    --brand: #800000;     /* UChicago maroon */
    --brand-dark: #5c0000;
    --card-bg: #ffffff;
  }

  /* global background */
  body{ background: var(--brand); }

  /* hide Minima's default footer */
  .site-footer{ display:none !important; }

  /* sticky, centered header with cap icon */
  .site-header{
    position: fixed !important;
    top: 0; left: 0; right: 0;
    height: var(--header-h);
    z-index: 9999;
    background: #ffffffcc !important;
    backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(255,255,255,.35);
  }
  .site-header .wrapper{
    min-height: var(--header-h);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .6rem;
  }
  .site-header .site-title{
    font-weight: 800;               /* bolder name */
    font-size: 1.1rem;
    display:flex; align-items:center; gap:.4rem;
    color: var(--brand) !important;
  }
  .site-header .site-title::before{
    content:"🎓";
    font-size: 1.2rem;
  }
  .site-header .site-nav .page-link {
    color: var(--brand) !important;
    text-decoration: none;
    font-weight: 700;               /* bold menu */
  }
  .site-header .site-nav .page-link:hover,
  .site-header .site-nav .page-link:focus {
    color: var(--brand-dark) !important;
  }

  .page-content{ padding-top: calc(var(--header-h) + 24px) !important; }
  html{ scroll-behavior:smooth; scroll-padding-top:calc(var(--header-h) + 8px); }

  /* white content card on maroon background */
  .card{
    max-width: 820px;
    margin: 24px auto 0;
    background: var(--card-bg);
    border-radius: 14px;
    box-shadow: 0 10px 28px rgba(0,0,0,.18);
    padding: 28px 28px 34px;
  }

  /* hero */
  .hero{ text-align:center; }
  .hero img{
    width:160px; height:160px;       /* zoomed out */
    border-radius:50%;
    box-shadow:0 2px 10px rgba(0,0,0,.12);
    object-fit:cover;
    margin-top: 6px;
  }

  /* horizontal button row — solid maroon boxes */
  .link-row{
    display:flex; flex-wrap:wrap;
    justify-content:center;
    gap:.6rem;
    margin:1rem 0 2rem;
  }
  .btn{
    padding:.55rem 1rem;
    border-radius:8px;
    font-size:.92rem;
    text-decoration:none;
    display:inline-flex; align-items:center; gap:.5rem;
    border: none;
    background: var(--brand);
    color:#fff !important;
  }
  .btn:hover{ background: var(--brand-dark); }
  .btn svg{ width:16px; height:16px; }

  /* welcome text */
  .welcome{ text-align:left; margin: 0 auto; max-width: 760px; }
  .welcome h1{
    text-align:center;
    font-size:2rem;
    margin:1rem 0;
    color: var(--brand);
    font-weight: 800;                 /* bold heading */
  }
  .welcome p{
    line-height:1.7; margin:.9rem 0; color:#222;
    text-align: justify; text-justify: inter-word; hyphens:auto;
  }

  /* ORCID button (same maroon style, a bit wider) */
  .orcid-btn{
    display:inline-block;
    background: var(--brand);
    color:#fff !important;
    padding:.7rem 1.25rem;
    border-radius:8px;
    text-decoration:none;
    font-weight:700;
    margin-top:1.2rem;
  }
  .orcid-btn:hover{ background: var(--brand-dark); }

  /* custom footer */
  .custom-footer{
    max-width:820px;
    margin:18px auto 34px;
    text-align:center;
    color:#f7eaea;
    font-size:.9rem;
  }
</style>

<div class="card">
  <div class="hero">
    <img src="{{ '/assets/headshot.jpg' | relative_url }}" alt="Ali A. Isse">

    <div class="link-row">
      <a class="btn" href="https://scholar.google.com/citations?user=YOURID">Google Scholar</a>
      <a class="btn" href="https://twitter.com/IsseMehdi">Twitter</a>
      <a class="btn" href="https://www.linkedin.com/in/mehdi-i-28a95683/">LinkedIn</a>
      <a class="btn" href="mailto:ai9431@princeton.edu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2"></rect>
          <path d="M3 7l9 6 9-6"></path>
        </svg>
        <span>ai9431@princeton.edu</span>
      </a>
    </div>

    <div class="welcome">
      <h1>Welcome to my website!</h1>

      <p>
        I am a PhD Candidate in Security Studies at Princeton University’s School of Public and International Affairs, specializing in nuclear deterrence, coercive diplomacy, and war. For 2025–2026, I am also a Visiting Scholar in the Nuclear Security Program at Yale University’s MacMillan Center (Department of Political Science).
      </p>

      <p>
        My research builds on a multidisciplinary approach that integrates international relations theory, security studies, formal modeling, computational social science, and qualitative historical analysis. In my doctoral dissertation, I use mixed methods—archival research, case studies, game theory, and statistical analysis—to study coercion, deterrence, and crisis bargaining in international security.
      </p>

      <p>
        My work contributes to understanding the strategic, political, and normative dimensions of nuclear weapons policy. It advances debates on how states can reduce the risks of nuclear use and strengthen extended deterrence commitments for allies.
      </p>

      <p>
        I earned my BA in Political Science from the University of Texas San Antonio, an MS in City and Regional Planning from The Ohio State University, an MA in Political Science (International Relations) from the University of Chicago, and an MA in Public Affairs from Princeton University.
      </p>

      <p style="text-align:center;">
        <a class="orcid-btn" href="https://orcid.org/YOUR-ORCID">Link to ORCID Profile</a>
      </p>
    </div>
  </div>
</div>

<!-- custom minimal footer -->
<div class="custom-footer">
  @2025 aaisse · Last updated: October 2, 2025
</div>
