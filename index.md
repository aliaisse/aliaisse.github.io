---
title: "Home"
layout: default
---

<style>
  :root{
    --header-h: 64px;
    --brand: #800000;        /* UChicago maroon */
    --brand-dark: #5c0000;
    --card-bg: #ffffff;

    /* Header “midnight teal / deep teal blue” */
    --header-teal: #004E59;
  }

  /* global background */
  body{ background: var(--brand); }

  /* hide Minima's default footer */
  .site-footer{ display:none !important; }

  /* sticky header — teal bg */
  .site-header{
    position: fixed !important;
    top: 0; left: 0; right: 0;
    height: var(--header-h);
    z-index: 9999;
    background: var(--header-teal) !important;
    border-bottom: 1px solid rgba(0,0,0,.25);
  }
  .site-header .wrapper{
    min-height: var(--header-h);
    display: flex;
    justify-content: space-between;   /* NAME left / MENU right */
    align-items: center;
    gap: .6rem;
  }

  /* NAME: bold maroon, all caps */
  .site-header .site-title{
    color: var(--brand) !important;
    font-weight: 900;
    font-size: 1.05rem;
    display:flex; align-items:center; gap:.5rem;
    text-transform: uppercase;
    letter-spacing: .06em;
  }
  .site-header .site-title::before{
    content:"🎓";
    font-size: 1.2rem;
  }

  /* MENU: maroon pill background, white text, all caps */
  .site-header .site-nav .page-link{
    display:inline-block;
    background: var(--brand);
    color:#ffffff !important;
    text-decoration:none;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .06em;
    margin-left: 10px;
    padding: 6px 10px;
    border-radius: 999px;
    transition: background .2s ease, transform .1s ease;
  }
  .site-header .site-nav .page-link:hover,
  .site-header .site-nav .page-link:focus{
    background: var(--brand-dark);
    transform: translateY(-1px);
  }

  /* mobile tweaks */
  @media (max-width: 640px){
    .site-header .site-title{ font-size: .98rem; letter-spacing: .04em; }
    .site-header .site-nav .page-link{ margin-left: 8px; padding: 6px 9px; letter-spacing:.04em; }
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
    width:160px; height:160px;
    border-radius:50%;
    box-shadow:0 2px 10px rgba(0,0,0,.12);
    object-fit:cover;
    margin-top: 6px;
  }

  /* solid maroon buttons */
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
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing:.04em;
  }
  .welcome p{
    line-height:1.7; margin:.9rem 0; color:#222;
    text-align: justify; text-justify: inter-word; hyphens:auto;
  }

  /* ORCID button */
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
        I hold MA in Public Affairs from Princeton University, an MA in Political Science from the University of Chicago as a Maroon Scholar, an MS in City and Regional Planning with Highest Distinction from The Ohio State University, and a BA in Political Science from the University of Texas San Antonio where I participated in Model United Stations and other distinguished academic programs. For more information about my research, teaching, or sercive, please do not hesitate to contact me.
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
