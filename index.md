---
title: "Home"
layout: default
---

<!-- Princeton theme: fonts -->
<link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@600;700;800;900&family=Crimson+Text:wght@400;600;700&display=swap" rel="stylesheet">

<style>
  :root{
    --header-h: 64px;

    /* Princeton brand (Orange, not yellow) */
    --brand: #E87722;      /* Princeton Orange */
    --brand-dark: #C9631D; /* darker hover */
    --ink: #111111;
    --card-bg: #ffffff;

    /* Header + footer: true black */
    --header-black: #000000;
    --footer-black: #000000;
  }

  /* Page basics */
  body{
    background: #ffffff;
    color: var(--ink);
    font: 16px/1.65 "Crimson Text", Georgia, "Times New Roman", Times, serif;
  }

  /* Hide Minima footer */
  .site-footer{ display:none !important; }

  /* ===== Sticky header — black bar ===== */
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
    justify-content: space-between; /* NAME left / MENU right */
    align-items: center;
    gap: 12px;
  }

  /* ===== NAME (left): text-only in Princeton Orange ===== */
  .site-header .site-title{
    color: var(--brand) !important;
    font-weight: 900;
    font-size: 1.18rem;              /* a bit larger than menu */
    text-transform: uppercase;
    letter-spacing: .06em;
    margin: 0;
    padding: 0;
    background: transparent;         /* ensure no pill */
    border-radius: 0;
    font-family: "Libre Franklin", system-ui, -apple-system, Segoe UI, Roboto, Arial, Helvetica, sans-serif;
  }
  .site-header .site-title::before{ content: none !important; }

  /* ===== MENU (right): text-only in Princeton Orange ===== */
  .site-header .site-nav .page-link{
    color: var(--brand) !important;
    text-decoration: none;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .06em;
    margin-left: 16px;
    padding: 0 0 3px 0;              /* room for underline */
    border-bottom: 2px solid transparent;
    transition: border-color .2s ease, color .2s ease;
    background: transparent;
    border-radius: 0;
    font-family: "Libre Franklin", system-ui, -apple-system, Segoe UI, Roboto, Arial, Helvetica, sans-serif;
  }
  .site-header .site-nav .page-link:hover,
  .site-header .site-nav .page-link:focus{
    color: var(--brand) !important;           /* keep orange */
    border-bottom-color: var(--brand-dark);   /* subtle darker-orange underline */
  }

  /* Mobile tweaks */
  @media (max-width: 640px){
    .site-header .site-title{ font-size: 1.06rem; letter-spacing: .04em; }
    .site-header .site-nav .page-link{ margin-left: 12px; letter-spacing:.04em; }
  }

  .page-content{ padding-top: calc(var(--header-h) + 24px) !important; }
  html{ scroll-behavior:smooth; scroll-padding-top:calc(var(--header-h) + 8px); }

  /* ===== White content card ===== */
  .card{
    max-width: 820px;
    margin: 24px auto 0;
    background: var(--card-bg);
    border-radius: 14px;
    box-shadow: 0 10px 28px rgba(0,0,0,.14);
    padding: 28px 28px 34px;
  }

  /* Hero */
  .hero{ text-align:center; }
  .hero img{
    width:160px; height:160px;       /* shows full face */
    border-radius:50%;
    box-shadow:0 2px 10px rgba(0,0,0,.12);
    object-fit:cover;
    margin-top: 6px;
  }

  /* NEW: tagline under photo, each on its own line */
  .tagline{
    margin: 10px auto 18px;
    color:#444;
    line-height: 1.35;
    font-family: "Libre Franklin", system-ui, -apple-system, Segoe UI, Roboto, Arial, Helvetica, sans-serif;
    font-weight: 600;
    max-width: 760px;
  }

  /* Princeton-orange buttons */
  .link-row{
    display:flex; flex-wrap:wrap; justify-content:center;
    gap:.6rem; margin:1rem 0 0;  /* now at bottom of intro */
  }
  .btn{
    padding:.55rem 1rem; border-radius:8px; font-size:.92rem;
    text-decoration:none; display:inline-flex; align-items:center; gap:.5rem;
    border: none; background: var(--brand); color:#fff !important;
    font-family: "Libre Franklin", system-ui, -apple-system, Segoe UI, Roboto, Arial, Helvetica, sans-serif;
  }
  .btn:hover{ background: var(--brand-dark); }
  .btn svg{ width:16px; height:16px; }

  /* Welcome text */
  .welcome{ text-align:left; margin: 0 auto; max-width: 760px; }
  .welcome h1{
    text-align:center; font-size:2rem; margin:1rem 0;
    color: var(--brand); font-weight: 800; text-transform: uppercase; letter-spacing:.04em;
    font-family: "Libre Franklin", system-ui, -apple-system, Segoe UI, Roboto, Arial, Helvetica, sans-serif;
  }
  .welcome p{
    line-height:1.75; margin:.9rem 0; color:#222;
    text-align: justify; text-justify: inter-word; hyphens:auto;
  }

  /* ===== Custom footer — black bar with Princeton-orange text ===== */
  .custom-footer{
    width:100%; background: var(--footer-black); color: var(--brand);
    text-align:center; padding: 12px 10px; margin: 18px 0 0; font-size:.9rem;
    border-top: 1px solid rgba(255,255,255,.08);
    font-family: "Libre Franklin", system-ui, -apple-system, Segoe UI, Roboto, Arial, Helvetica, sans-serif;
  }
  .custom-footer .affils{ margin-bottom: 4px; }
</style>

<div class="card">
  <div class="hero">
    <img src="{{ '/assets/headshot.jpg' | relative_url }}" alt="Ali A. Isse">

    <!-- Tagline (each on a separate line) -->
    <div class="tagline">
      <div>Ph.D. Candidate in Security Studies</div>
      <div>School of Public &amp; International Affairs, Princeton University</div>
      <div>Robertson Hall, Princeton, NJ</div>
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

      <p>
        I hold an M.A. in Public Affairs from Princeton University; an M.A. in Political Science from the University of Chicago as a Maroon Scholar; an M.S. in City and Regional Planning from The Ohio State University, where I passed my cmprehensive exams with <em> Highest Distinction</em>; and a B.A. in Political Science from the University of Texas San Antonio, where I participated in Model United Nations and other distinguished academic programs.
      </p>

      <p>
        For more information about my research, teaching, or service, please do not hesitate to contact me.
      </p>

      <!-- MOVED: links row to the bottom, in one line -->
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
        <a class="btn" href="https://orcid.org/YOUR-ORCID">ORCID Profile</a>
      </div>
    </div>
  </div>
</div>

<!-- custom black footer -->
<div class="custom-footer">
  <div> @2025 Mehdi Isse | Ph.D. Candidate, Princeton University<div>
  <div>Last updated: October 2, 2025</div>
</div>
