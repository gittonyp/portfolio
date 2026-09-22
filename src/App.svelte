<script>
  import { onMount } from 'svelte';

  const links = {
    github: 'https://github.com/gittonyp',
    linkedin: 'https://www.linkedin.com/in/gittonyp',
    codeforces: 'https://codeforces.com/profile/devtony',
    email: 'mailto:vqvtony@gmail.com'
  };

  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  // Add a project by appending an object here. `liveUrl` can be a GitHub Pages
  // project URL, a custom domain, or a subdomain such as https://project.example.com.
  const projects = [
    {
      number: '01',
      name: 'ManhwaVerse',
      kind: 'Content infrastructure',
      description: 'An aggregation platform built around a high-throughput, asynchronous ingestion pipeline and a reading experience that stays fast as the library grows.',
      outcomes: ['1,000+ images/min pipeline', 'S3 + CloudFront delivery'],
      stack: ['Svelte', 'Spring Boot', 'Python', 'AWS'],
      liveUrl: 'https://manhwa.tonyprajapati.in',
      repoUrl: links.github,
      tone: 'amber'
    },
    {
      number: '02',
      name: 'KinderConnect',
      kind: 'Multi-tenant SaaS',
      description: 'A role-aware school operations platform designed to make the everyday flow of information clearer for families, teachers, and administrators.',
      outcomes: ['500+ students supported', '~40% faster read paths'],
      stack: ['Svelte', 'Node.js', 'Redis', 'Docker'],
      liveUrl: '',
      repoUrl: links.github,
      tone: 'coral'
    },
    {
      number: '03',
      name: 'FocusMate',
      kind: 'Desktop productivity',
      description: 'A cross-platform focus companion that pairs low-latency application blocking with private, offline-first session insights.',
      outcomes: ['Offline-first analytics', 'Native desktop controls'],
      stack: ['Electron', 'Svelte', 'C++', 'SQLite'],
      liveUrl: '',
      repoUrl: links.github,
      tone: 'lime'
    },
    {
      number: '04',
      name: 'IUGR Detection',
      kind: 'Applied machine learning',
      description: 'A fetal-health classification workflow that turns cardiotocography signals into more interpretable clinical risk indicators.',
      outcomes: ['92% evaluated accuracy', 'Feature-driven pipeline'],
      stack: ['Python', 'scikit-learn', 'Pandas'],
      liveUrl: '',
      repoUrl: links.github,
      tone: 'blue'
    }
  ];

  const skills = [
    { label: 'Backend & systems', values: 'Go · Java · Python · Spring Boot · REST APIs · Kafka' },
    { label: 'Product engineering', values: 'Svelte · TypeScript · Node.js · Electron · React' },
    { label: 'Infrastructure', values: 'AWS · Docker · GitLab CI/CD · Linux · Redis · Valkey' },
    { label: 'Data', values: 'MongoDB · MySQL · SQLite · SQL · Pandas' }
  ];

  let menuOpen = false;
  let compactNav = false;

  onMount(() => {
    const updateNav = () => (compactNav = window.scrollY > 24);
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
    return () => window.removeEventListener('scroll', updateNav);
  });

  function closeMenu() {
    menuOpen = false;
  }
</script>

<svelte:head>
  <meta property="og:title" content="Tony Prajapati — Software Engineer" />
  <meta property="og:description" content="Building dependable systems and thoughtful tools." />
</svelte:head>

<div class="page-shell">
  <header class:compact={compactNav}>
    <a class="brand" href="#top" aria-label="Tony Prajapati, home" on:click={closeMenu}>
      <span class="brand-mark">TP</span><span>Tony Prajapati</span>
    </a>
    <button class="menu-button" class:active={menuOpen} aria-label="Toggle menu" aria-expanded={menuOpen} on:click={() => (menuOpen = !menuOpen)}>
      <span></span><span></span>
    </button>
    <nav class:open={menuOpen} aria-label="Main navigation">
      <a href="#work" on:click={closeMenu}>Work</a>
      <a href="#about" on:click={closeMenu}>About</a>
      <a href="#contact" on:click={closeMenu}>Contact</a>
      <a class="nav-cta" href={resumeUrl} download>Download résumé <span>↓</span></a>
    </nav>
  </header>

  <main id="top">
    <section class="hero section-boundary" aria-labelledby="hero-title">
      <div class="eyebrow"><span class="pulse"></span>Available for meaningful engineering work</div>
      <div class="hero-grid">
        <div>
          <p class="kicker">Pune, India · 2026</p>
          <h1 id="hero-title">Software is<br />a system of <em>trust.</em></h1>
        </div>
        <div class="hero-aside">
          <p>I’m Tony, a software engineer who enjoys turning complicated workflows into reliable products—across backend services, cloud infrastructure, and considered interfaces.</p>
          <div class="hero-actions"><a class="arrow-link" href="#work">Explore selected work <span>↓</span></a><a class="resume-link" href={resumeUrl} download>Download résumé ↗</a></div>
        </div>
      </div>
      <div class="signal-line" aria-hidden="true"><span></span><i></i><b></b></div>
    </section>

    <section id="work" class="experience section-boundary" aria-labelledby="experience-title">
      <div class="section-heading"><p class="eyebrow">01 / Experience</p><h2 id="experience-title">Build with the whole<br />system in view.</h2></div>
      <article class="role reveal">
        <div class="role-meta"><span>2026</span><span>Pune, IN</span></div>
        <div class="role-body">
          <p class="role-company">ConnectWise</p>
          <h3>Software Development<br />Engineer Intern</h3>
          <p>Shipped production billing and product-entitlement workflows for cybersecurity integrations. I worked across Go services, REST APIs, AWS, Kafka, Docker, Valkey, and legacy web applications—from code review to QA validation and rollout.</p>
          <div class="role-notes"><span>5+ merged changes</span><span>10+ regional consoles validated</span></div>
        </div>
      </article>
      <article class="role role-secondary reveal">
        <div class="role-meta"><span>2021—2022</span><span>Jalgaon, IN</span></div>
        <div class="role-body"><p class="role-company">TechSolutions</p><h3>Systems Administrator<br />Associate</h3><p>Maintained local IT infrastructure, automated backups and recovery, and improved workstation uptime by 25% across a 20+ node network.</p></div>
      </article>
    </section>

    <section class="project-section section-boundary" aria-labelledby="projects-title">
      <div class="section-heading project-heading"><div><p class="eyebrow">02 / Selected work</p><h2 id="projects-title">Systems made<br />for people.</h2></div><p>Four projects, each an exercise in making complex operations feel direct, dependable, and quietly capable.</p></div>
      <div class="projects">
        {#each projects as project, index}
          <article class:featured={index === 0} class="project-card {project.tone}">
            <div class="project-top"><span>{project.number}</span><span>{project.kind}</span></div>
            <div class="project-diagram" aria-hidden="true">
              <div class="diagram-label">{project.name.slice(0, 3).toUpperCase()}</div><span class="node node-a"></span><span class="node node-b"></span><span class="node node-c"></span><i></i><b></b>
            </div>
            <div class="project-copy"><h3>{project.name}</h3><p>{project.description}</p></div>
            <div class="project-bottom">
              <div class="tags">{#each project.stack as item}<span>{item}</span>{/each}</div>
              <div class="project-links">
                {#if project.liveUrl}<a href={project.liveUrl} target="_blank" rel="noreferrer">Live ↗</a>{/if}
                <a href={project.repoUrl} target="_blank" rel="noreferrer">Repository ↗</a>
              </div>
            </div>
            <div class="outcomes">{#each project.outcomes as outcome}<span>{outcome}</span>{/each}</div>
          </article>
        {/each}
      </div>
    </section>

    <section id="about" class="about section-boundary" aria-labelledby="about-title">
      <div class="about-statement"><p class="eyebrow">03 / Approach</p><h2 id="about-title">Curious about the <em>edges</em>.<br />Grounded in the details.</h2></div>
      <div class="about-grid">
        <p class="lead">I learn a system by following its constraints: the points where data changes hands, the cases that fail quietly, and the people who have to live with the result.</p>
        <div class="principles"><div><span>01</span><p>Start with the real workflow, not the imagined one.</p></div><div><span>02</span><p>Make operational complexity visible and manageable.</p></div><div><span>03</span><p>Leave a system clearer than I found it.</p></div></div>
      </div>
    </section>

    <section class="capabilities section-boundary" aria-labelledby="skills-title">
      <div class="section-heading"><p class="eyebrow">04 / Capabilities</p><h2 id="skills-title">A practical stack<br />for durable work.</h2></div>
      <div class="skill-list">
        {#each skills as skill, index}<div class="skill-row"><span>0{index + 1}</span><h3>{skill.label}</h3><p>{skill.values}</p></div>{/each}
      </div>
    </section>

    <section class="credentials section-boundary" aria-labelledby="credentials-title">
      <div class="section-heading"><p class="eyebrow">05 / Proof of work</p><h2 id="credentials-title">Learn in public.<br />Ship in context.</h2></div>
      <div class="credential-grid">
        <article><p class="credential-number">1270</p><h3>Codeforces max rating</h3><p>Pupil · 135 problems solved</p><a href={links.codeforces} target="_blank" rel="noreferrer">View profile ↗</a></article>
        <article><p class="credential-number">SIH</p><h3>Internal finalist</h3><p>Smart India Hackathon · Urjasampda energy-monitoring system</p><p class="open-source">Open source contributor · credited in TinyFileManager v2.6</p></article>
        <article class="education"><p class="credential-number">PCCOE</p><h3>B.Tech, Information Technology</h3><p>2023—2027 expected · SGPA 8.1/10</p></article>
      </div>
    </section>

    <section id="contact" class="contact" aria-labelledby="contact-title">
      <p class="eyebrow">06 / Contact</p>
      <h2 id="contact-title">Have a difficult problem<br />worth solving?</h2>
      <a class="email-link" href={links.email}>vqvtony@gmail.com <span>↗</span></a>
      <div class="contact-footer"><p>Open to software engineering opportunities and thoughtful collaborations.</p><div><a href={links.github} target="_blank" rel="noreferrer">GitHub</a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={links.codeforces} target="_blank" rel="noreferrer">Codeforces</a></div></div>
    </section>
  </main>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Fraunces:opsz,wght,SOFT@9..144,500..700,0..100&display=swap');
  :global(*) { box-sizing: border-box; }
  :global(html) { scroll-behavior: smooth; background: #11110f; }
  :global(body) { margin: 0; color: #e9e6dc; background: #11110f; font-family: 'DM Sans', Arial, sans-serif; font-size: 16px; line-height: 1.5; }
  :global(a) { color: inherit; text-decoration: none; }
  .page-shell { overflow: hidden; background: radial-gradient(circle at 89% 1%, rgba(248, 112, 66, .08), transparent 22rem), #11110f; }
  header { height: 76px; position: fixed; top: 0; left: 0; right: 0; z-index: 10; padding: 0 5.25vw; display: flex; align-items: center; justify-content: space-between; transition: background .25s, border-color .25s; border-bottom: 1px solid transparent; }
  header.compact { background: rgba(17,17,15,.92); backdrop-filter: blur(16px); border-color: rgba(233,230,220,.12); }
  .brand { display: flex; align-items: center; gap: 10px; font-size: .92rem; font-weight: 600; letter-spacing: -.02em; }
  .brand-mark { display: grid; place-items: center; width: 27px; height: 27px; background: #f08b5e; color: #151310; font: 500 .62rem 'DM Mono', monospace; letter-spacing: -.09em; }
  nav { display: flex; gap: 29px; align-items: center; color: #cbc6b9; font-size: .8rem; }
  nav > a:not(.nav-cta) { transition: color .2s; } nav > a:not(.nav-cta):hover { color: #fff; }
  .nav-cta { margin-left: 8px; padding: 9px 13px; background: #e8e4d9; color: #181713; font-weight: 600; } .nav-cta span { color: #dd5f36; margin-left: 7px; }
  .menu-button { display: none; border: 0; background: none; color: inherit; padding: 7px; } .menu-button span { display: block; width: 21px; height: 1px; background: currentColor; margin: 5px; transition: transform .2s; }
  .section-boundary { padding-left: 5.25vw; padding-right: 5.25vw; border-bottom: 1px solid rgba(233,230,220,.14); }
  .hero { min-height: 100svh; padding-top: 161px; display: flex; flex-direction: column; justify-content: space-between; }
  .eyebrow, .kicker { font: 500 .66rem 'DM Mono', monospace; letter-spacing: .08em; text-transform: uppercase; color: #aca79b; }
  .eyebrow { display: flex; align-items: center; gap: 9px; } .pulse { width: 7px; height: 7px; border-radius: 50%; background: #f08b5e; box-shadow: 0 0 0 4px rgba(240,139,94,.12); animation: pulse 2.4s infinite; }
  .hero-grid { display: grid; grid-template-columns: minmax(0,1.35fr) minmax(260px,.65fr); gap: 7vw; align-items: end; margin: 8vh 0 9vh; }
  .kicker { margin: 0 0 18px; color: #e2865e; } h1,h2,h3,p { margin-top: 0; }
  h1 { color: #f4f1e9; margin-bottom: 0; font-size: clamp(3.6rem, 8.2vw, 8.5rem); line-height: .9; letter-spacing: -.072em; font-weight: 600; } h1 em, h2 em { font-family: 'Fraunces', Georgia, serif; font-weight: 500; color: #f18c61; letter-spacing: -.07em; }
  .hero-aside { max-width: 420px; padding-bottom: 8px; } .hero-aside p { color: #c5c0b5; font-size: clamp(1.02rem,1.6vw,1.25rem); line-height: 1.55; letter-spacing: -.025em; }
  .hero-actions { display:flex; align-items:center; flex-wrap:wrap; gap:20px; }.arrow-link { display: inline-flex; margin-top: 21px; gap: 12px; padding-bottom: 5px; border-bottom: 1px solid #e8e4d9; font: 500 .72rem 'DM Mono', monospace; letter-spacing: .05em; text-transform: uppercase; } .arrow-link span { color: #f18c61; }.resume-link { margin-top:21px;color:#b9b3a7;font:500 .68rem 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.04em;transition:color .2s;}.resume-link:hover{color:#f18c61;}
  .signal-line { height: 51px; border-top: 1px solid rgba(233,230,220,.2); position: relative; } .signal-line span { position: absolute; height: 1px; width: 26%; top: -1px; left: 0; background:#f18c61; } .signal-line i, .signal-line b { position: absolute; top: -5px; width: 9px; height: 9px; border-radius: 50%; background:#f18c61; } .signal-line i { left: 26%; }.signal-line b { right: 0; background:#e8e4d9; }
  .experience, .project-section, .about, .capabilities, .credentials { padding-top: clamp(75px, 10vw, 150px); padding-bottom: clamp(75px, 10vw, 150px); }
  .section-heading { display: flex; justify-content: space-between; gap: 30px; margin-bottom: clamp(45px, 7vw, 100px); }.section-heading .eyebrow { align-self: flex-start; padding-top: 14px; }.section-heading h2 { margin: 0; color:#f0ede5; font-size: clamp(2.4rem,5.1vw,5.6rem); line-height: .93; letter-spacing: -.062em; font-weight: 600; }
  .role { display: grid; grid-template-columns: 22% 1fr; padding: 25px 0 43px; border-top: 1px solid rgba(233,230,220,.25); }.role-meta { display: flex; flex-direction: column; gap: 5px; color:#aaa497; font: .67rem 'DM Mono', monospace; letter-spacing:.06em; }.role-body { max-width: 800px; }.role-company { margin-bottom: 7px; color:#f08b5e; font: 500 .68rem 'DM Mono',monospace; text-transform:uppercase; letter-spacing:.08em;}.role h3 { margin-bottom: 21px; font-size:clamp(1.75rem,3.2vw,3.65rem);line-height:.95;letter-spacing:-.055em; font-weight:600;color:#f0ede5;}.role-body > p:not(.role-company) { max-width:760px;color:#b7b2a7;font-size:1rem; }.role-notes { display:flex;gap:25px;margin-top:25px;color:#ece7db;font: .67rem 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.04em;}.role-secondary { padding-bottom: 0; }.role-secondary h3 { font-size:clamp(1.4rem,2.5vw,2.6rem); }.role-secondary .role-body > p:not(.role-company) { max-width:620px; }
  .project-heading > p { max-width:270px; color:#b7b2a7;font-size:.92rem;align-self:end; }.projects { display:grid;grid-template-columns:repeat(2,minmax(0,1fr));border-top:1px solid rgba(233,230,220,.17);border-left:1px solid rgba(233,230,220,.17); }.project-card { min-height: 580px; display:flex; flex-direction:column; padding:22px; border-right:1px solid rgba(233,230,220,.17);border-bottom:1px solid rgba(233,230,220,.17);position:relative;overflow:hidden;transition:background .25s; }.project-card:hover { background:#171714; }.project-top { display:flex;justify-content:space-between;color:#9f9b90;font: .61rem 'DM Mono',monospace;letter-spacing:.07em;text-transform:uppercase; }.project-diagram { height:200px;margin:28px 0 17px;position:relative;border:1px solid rgba(233,230,220,.18);background:linear-gradient(90deg,transparent 49.8%,rgba(233,230,220,.12) 50%,transparent 50.2%),linear-gradient(transparent 49.8%,rgba(233,230,220,.12) 50%,transparent 50.2%); background-size:30px 30px; }.diagram-label { position:absolute;top:50%;left:50%;transform:translate(-50%,-50%); color:#f5f1e8;font:500 1.5rem 'DM Mono',monospace;letter-spacing:-.1em; }.node {position:absolute;width:9px;height:9px;background:#f08b5e;}.node-a{left:19%;top:25%;}.node-b{right:16%;bottom:21%;}.node-c{left:30%;bottom:18%;}.project-diagram i,.project-diagram b{height:1px;background:rgba(240,139,94,.75);position:absolute;transform-origin:left center;}.project-diagram i{left:20%;top:28%;width:41%;transform:rotate(26deg);}.project-diagram b{left:31%;bottom:21%;width:41%;transform:rotate(-10deg);}.coral .node,.coral .project-diagram i,.coral .project-diagram b { background:#ee6c75; }.lime .node,.lime .project-diagram i,.lime .project-diagram b { background:#aabf65; }.blue .node,.blue .project-diagram i,.blue .project-diagram b { background:#8ba8dd; }.project-copy h3 {margin-bottom:10px;font-size:clamp(1.5rem,2.4vw,2.35rem);letter-spacing:-.05em;line-height:1;font-weight:600;color:#f0ede5;}.project-copy p { margin-bottom:20px;max-width:490px;color:#b7b2a7;font-size:.91rem;line-height:1.55; }.project-bottom {margin-top:auto;display:flex;justify-content:space-between;gap:15px;align-items:end;}.tags{display:flex;flex-wrap:wrap;gap:5px;}.tags span{padding:4px 6px;border:1px solid rgba(233,230,220,.2);color:#bbb5a9;font: .58rem 'DM Mono',monospace;}.project-links{display:flex;flex-direction:column;align-items:end;gap:5px;color:#f0ede5;font: .64rem 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.04em;white-space:nowrap;}.project-links a:hover{color:#f08b5e;}.outcomes {display:flex;gap:14px;position:absolute;left:22px;bottom:169px; color:#f08b5e;font: .58rem 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.04em;}.outcomes span+span:before { content:'//';color:#777267;margin-right:14px; }
  .about { background:#e9e5db;color:#171611; }.about .eyebrow{color:#6d685e;}.about-statement h2 {margin:25px 0 0;font-size:clamp(2.7rem,5.8vw,6.2rem);line-height:.92;letter-spacing:-.065em;font-weight:600;}.about h2 em{color:#be4d34;}.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:10vw;margin-top:clamp(65px,10vw,145px);}.lead{font-size:clamp(1.25rem,2vw,1.7rem);line-height:1.32;letter-spacing:-.04em;max-width:560px;}.principles>div{display:grid;grid-template-columns:60px 1fr;gap:20px;border-top:1px solid #b4b0a7;padding:13px 0 23px;}.principles span{font: .66rem 'DM Mono',monospace;color:#807a70;}.principles p{margin:0;font-size:1rem;line-height:1.4;}
  .skill-list{border-top:1px solid rgba(233,230,220,.25);}.skill-row{display:grid;grid-template-columns:9% 30% 1fr;gap:15px;align-items:baseline;padding:24px 0;border-bottom:1px solid rgba(233,230,220,.16);}.skill-row>span{color:#e28a65;font: .65rem 'DM Mono',monospace;}.skill-row h3{margin:0;color:#f0ede5;font-size:clamp(1.1rem,1.8vw,1.5rem);letter-spacing:-.03em;}.skill-row p{margin:0;color:#aca79b;font-size:.9rem;}
  .credential-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(233,230,220,.23);}.credential-grid article{min-height:250px;padding:22px;border-right:1px solid rgba(233,230,220,.18);}.credential-grid article:first-child{padding-left:0;}.credential-grid article:last-child{border:0;}.credential-number{margin:0 0 43px;color:#f18c61;font:500 clamp(1.45rem,2vw,2rem) 'DM Mono',monospace;letter-spacing:-.1em;}.credential-grid h3{margin-bottom:8px;color:#f0ede5;font-size:1.1rem;letter-spacing:-.03em;}.credential-grid article>p:not(.credential-number){color:#a9a497;font-size:.86rem;}.credential-grid a{display:inline-block;margin-top:15px;color:#ece7db;font: .65rem 'DM Mono',monospace;text-transform:uppercase;border-bottom:1px solid #ece7db;}.open-source{margin-top:20px!important;color:#e28a65!important;font: .61rem 'DM Mono',monospace!important;text-transform:uppercase;letter-spacing:.035em;}
  .contact{min-height:660px;padding:clamp(75px,10vw,130px) 5.25vw 35px;display:flex;flex-direction:column;background:#f08b5e;color:#17130f;}.contact .eyebrow{color:#5e2b21;}.contact h2{margin:30px 0 20px;font-size:clamp(2.9rem,6.5vw,7.4rem);font-weight:600;letter-spacing:-.07em;line-height:.88;}.email-link{font:500 clamp(1rem,2vw,1.65rem) 'DM Mono',monospace;letter-spacing:-.065em;border-bottom:1px solid #17130f;align-self:flex-start;padding-bottom:5px;}.email-link span{margin-left:10px;}.contact-footer{margin-top:auto;padding-top:50px;display:flex;justify-content:space-between;gap:30px;border-top:1px solid rgba(23,19,15,.3);font-size:.78rem;}.contact-footer p{max-width:310px;margin:0;}.contact-footer div{display:flex;gap:18px;font: .66rem 'DM Mono',monospace;text-transform:uppercase;}.contact-footer a:hover{text-decoration:underline;}
  @keyframes pulse { 50% { box-shadow:0 0 0 7px rgba(240,139,94,0); } }
  @media (prefers-reduced-motion:no-preference) {.project-card{animation:fade-in .5s both;}.project-card:nth-child(2){animation-delay:.08s}.project-card:nth-child(3){animation-delay:.16s}.project-card:nth-child(4){animation-delay:.24s}@keyframes fade-in{from{opacity:0;transform:translateY(13px)}to{opacity:1;transform:translateY(0)}}}
  @media (max-width: 720px) { header{height:65px;padding:0 6vw;}.menu-button{display:block;z-index:2;}nav{display:none;position:absolute;left:0;right:0;top:0;padding:86px 6vw 24px;background:#151512;border-bottom:1px solid rgba(233,230,220,.18);flex-direction:column;align-items:flex-start;gap:22px;font-size:1rem;}nav.open{display:flex;}.nav-cta{margin:0;font-size:.73rem;}.section-boundary{padding-left:6vw;padding-right:6vw;}.hero{padding-top:115px;}.hero-grid{grid-template-columns:1fr;margin:52px 0 70px;gap:39px;}.hero-aside{max-width:520px;}.section-heading{display:block;}.section-heading .eyebrow{padding:0;margin-bottom:26px;}.role{grid-template-columns:1fr;gap:19px;padding-bottom:35px;}.role-meta{flex-direction:row;justify-content:space-between;}.role-notes{flex-wrap:wrap;gap:10px 21px;}.projects{grid-template-columns:1fr;}.project-card{min-height:535px;}.project-heading>p{margin-top:25px;}.about-grid{grid-template-columns:1fr;gap:45px;}.credential-grid{grid-template-columns:1fr;}.credential-grid article,.credential-grid article:first-child{min-height:auto;padding:23px 0;border-right:0;border-bottom:1px solid rgba(233,230,220,.18);}.credential-grid article:last-child{border-bottom:0;}.credential-number{margin-bottom:25px;}.skill-row{grid-template-columns:40px 1fr;gap:8px 10px;}.skill-row p{grid-column:2;}.contact{min-height:580px;padding-left:6vw;padding-right:6vw;}.contact-footer{display:block;}.contact-footer div{margin-top:22px;flex-wrap:wrap;}.outcomes{bottom:155px;}.signal-line{height:40px;} }
  @media (max-width:400px){h1{font-size:3.25rem}.project-card{padding:17px}.outcomes{left:17px}.contact-footer div{gap:11px}.brand{font-size:.82rem}}
</style>
