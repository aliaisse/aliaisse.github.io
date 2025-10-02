<style>
  :root{
    --header-h: 64px;
  }

  /* FORCE the header to be fixed */
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

  /* push content below sticky header */
  .page-content{ padding-top: calc(var(--header-h) + 16px) !important; }

  /* smooth scroll with offset */
  html{ scroll-behavior: smooth; scroll-padding-top: calc(var(--header-h) + 8px); }

  /* optional: hide minima footer */
  .site-footer{ display:none !important; }

  /* header text colors */
  .site-header .site-title,
  .site-header .site-nav .page-link { color:#1a73e8 !important; text-decoration:none; }
  .site-header .site-title:hover,
  .site-header .site-nav .page-link:hover,
  .site-header .site-nav .page-link:focus { color:#1558b0 !important; }

  /* your two-column layout */
  .layout{
    display:grid;
    grid-template-columns: 300px 1fr;
    gap:2rem;
    margin-top:1.25rem;
  }
  @media (max-width: 860px){ .layout{ grid-template-columns:1fr; } }

  .sidebar .photo img{
    width:220px; max-width:100%;
    border-radius:10px; box-shadow:0 1px 6px rgba(0,0,0,.08);
  }
  .sidebar .name{ font-size:1.6rem; font-weight:800; margin:.85rem 0 .35rem; color:#1a73e8; }
  .sidebar .affil{ color:#444; line-height:1.4; margin:0 0 .75rem 0; }

  .icon-row{ display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.35rem; }
  .icon{
    display:inline-flex; align-items:center; justify-content:center;
    width:36px; height:36px; border:1px solid #e6e6e6; border-radius:999px;
    background:#fff; text-decoration:none; color:#111;
  }
  .icon svg{ width:18px; height:18px; }
  .icon:hover{ background:#f6f8ff; }

  .content h1{ margin-top:0; }
  .content p{ margin:.6rem 0; line-height:1.6; }
</style>

