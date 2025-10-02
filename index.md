---
title: "Home"
layout: default
---

<style>
  :root{ --header-h: 64px; }

  /* sticky header (unchanged) */
  .site-header{
    position: fixed !important;
    top: 0; left: 0; right: 0;
    height: var(--header-h);
    z-index: 9999;
    background: #ffffffcc !important;
    backdrop-filter: blur(8px);
    border-bottom: 1px solid #e6e8eb;
  }
  .site-header .wrapper{
    min-height: var(--header-h);
    display: flex;
    align-items: center;
  }
  .page-content{ padding-top: calc(var(--header-h) + 24px) !important; }
  html{ scroll-behavior:smooth; scroll-padding-top:calc(var(--header-h) + 8px); }

  /* center column */
  .hero{
    text-align:center;
    max-width: 760px;
    margin: 0 auto;
  }
  /* ↓ lower the photo slightly */
  .hero img{
    width:140px; height:140px;
    border-radius:50%;
    box-shadow:0 2px 10px rgba(0,0,0,.1);
    object-fit:cover;
    margin-top: 14px;     /* move the photo down a touch */
  }

  /* horizontal button row */
  .link-row{
    display:flex; flex-wrap:wrap;
    justify-content:center;
    gap:.6rem;
    margin:1rem 0 2rem;
  }
  .btn{
    border:1px solid #ccc;
    padding:.45rem .9rem;
    border-radius:6px;
    font-size:.9rem;
    text-decoration:none;
    color:#333;
    background:#fff;
    display:inline-flex; align-items:center; gap:.45rem;
  }
  .btn:hover{ background:#f6f8ff; border-color:#1a73e8; color:#1a73e8; }
  .btn svg{ width:16px; height:16px; }

  /* welcome text: justify paragraphs, keep H1 centered */
  .welcome{ text-align:left; margin: 0 auto; max-width: 760px; }
  .welcome h1{ text-align:center; font-size:1.9rem; margin:1rem 0; }
  .welcome p{
    line-height:1.7; margin:.9rem 0; color:#333;
    text-align: justify; text-justify: inter-word; hyphens: auto;
  }
</style>

<div class="hero">
  <img src="{{ '/assets/headshot.jpg' | relative_url }}" alt="Ali A. Isse">

  <div class="link-row">
    <a class="btn" href="https://scholar.google.com/citations?user=YOURID">Google Scholar</a>
    <a class="btn" href="https://twitter.com/IsseMehdi">Twitter</a>
    <a class="btn" href="https://www.linkedin.com/in/mehdi-i-28a95683/">LinkedIn</a>
    <!-- Email button shows icon + address text -->
    <a class="btn" href="mailto:YOUR.EMAIL@UNI.EDU" rel="me">
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
  </div>
</div>
