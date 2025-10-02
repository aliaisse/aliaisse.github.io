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

    /* Header + footer: real black */
    --header-black: #000000;
    --footer-black: #000000;
  }

  /* global background */
  body{ background: var(--brand); }

  /* hide Minima's default footer */
  .site-footer{ display:none !important; }

  /* ===== Sticky header — black bg ===== */
  .site-header{
    position: fixed !important;
    top: 0; left: 0; right: 0;
    height: var(--header-h);
    z-index: 9999;
    background: var(--header-black) !important;
    border-bottom: 1px solid rgba(255,255,255,.08);
  }
  .site-header .wrapper{
    min-height: var(--header-h);
    display: flex;
    justify-content: space-between;      /* NAME left / MENU right */
    align-items: center;
    gap: .6rem;
  }

  /* ===== NAME (left): maroon pill, white text, bigger ===== */
  .site-header .site-title{
    display:flex; align-items:center; gap:.5rem;
    text-transform: uppercase;
    letter-spacing: .06em;
    font-weight: 900;
    font-size: 1.18rem;                  /* slightly larger than menu */
    background: var(--brand);
    color:#fff !important;
    padding: 6px 12px;
    border-radius: 999px;
  }
  .site-header .site-title::before{
    content:"🎓";
    font-size: 1.2rem;
  }

  /* ===== MENU (right): maroon pills, all caps ===== */
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
    .site-header .site-title{ font-size: 1.06rem; letter-spacing: .04em; padding:6px 10px; }
    .site-header .site-nav .page-link{ margin-left: 8px; padding: 6px 9px; letter-spacing:.04em; }
  }

  .page-content{ padding-top: calc(var(--header-h) + 24px) !important; }
  html{ scroll-behavior:smooth; scroll-padding-top:calc(var(--header-h) + 8px); }

  /* ===== White content card on maroon background ===== */
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
    width:160px; height:160px;       /* shows full face */
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

  /* ===== Custom footer — black bar ===== */
  .custom-footer{
    width:100%;
    background: var(--footer-black);
    color:#ffffff;
    text-align:center;
    padding: 12px 10px;
    margin: 18px 0 0;                 /* sit flush at bottom spacing */
    font-size:.9rem;
    border-top: 1px solid rgba(255,255,255,.08);
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
      <h1>Welcome!</h1>

      <p>
        I am Mehdi! (Ali Isse) a PhD Candidate in Security Studies at Princeton University’s School of Public and International Affairs, specializing in nuclear deterrence, coercive diplomacy, and war. For 2025–2026, I am also a Visiting Scholar in the Nuclear Security Program at Yale University’s MacMillan Center (Department of Political Science).
      </p>

      <p>
        My research builds on a multidisciplinary approach that integrates international relations theory, security studies, formal modeling, computational social science, and qualitative historical analysis. In my doctoral dissertation, I use mixed methods—archival research, case studies, game theory, and statistical analysis—to study coercion, deterrence, and crisis bargaining in international security.
      </p>

      <p>
        My work contributes to understanding the strategic, political, and normative dimensions of nuclear weapons policy. It advances debates on how states can reduce the risks of nuclear use and strengthen extended deterrence commitments for allies.
      </p>

     <p> I hold an MA in Public Affairs from Princeton University; an MA in Political Science from the University of Chicago as a Maroon Scholar; an MS in City and Regional Planning with <em>Distinction</em> from The Ohio State University; and a BA in Political Science from the University of Texas San Antonio, where I participated in Model United Nations and other distinguished academic programs.</p>
     
     <p> For more information about my research, teaching, or service, please do not hesitate to contact me.</p>

      <p style="text-align:center;">
        <a class="orcid-btn" href="https://orcid.org/YOUR-ORCID">Link to ORCID Profile</a>
      </p>
    </div>
  </div>
</div>

<!-- custom black footer -->
<div class="custom-footer">
  @2025 aaisse · Last updated: October 2, 2025
</div>
