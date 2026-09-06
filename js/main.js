/* ============================================================
   MATEO ORELLANA — Portfolio JS
   Constellation particles · reveal on scroll · nav · i18n
   ============================================================ */

(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Constellation particles ---------- */
  function initStars() {
    const canvas = document.getElementById("stars");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, dots = [];
    const density = window.innerWidth < 768 ? 46 : 85;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      build();
    }
    function build() {
      dots = [];
      for (let i = 0; i < density; i++) {
        dots.push({
          x: Math.random() * W, y: Math.random() * H,
          r: Math.random() * 1.3 + 0.4,
          a: Math.random() * 0.5 + 0.15,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
        });
      }
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      const linkDist = 120;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < linkDist) {
            ctx.strokeStyle = "rgba(255,255,255," + (0.09 * (1 - d / linkDist)) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      for (const s of dots) {
        if (!prefersReduced) {
          s.x += s.vx; s.y += s.vy;
          if (s.x < -10) s.x = W + 10; if (s.x > W + 10) s.x = -10;
          if (s.y < -10) s.y = H + 10; if (s.y > H + 10) s.y = -10;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255," + s.a + ")";
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    resize(); draw();
    window.addEventListener("resize", resize);
  }
  if (!prefersReduced) initStars(); else {
    const canvas = document.getElementById("stars");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth; canvas.height = window.innerHeight;
      for (let i = 0; i < 60; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 1.2 + 0.3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255," + (Math.random() * 0.4 + 0.1) + ")";
        ctx.fill();
      }
    }
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach((el) => io.observe(el));

  /* ---------- Nav scroll state ---------- */
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 24));

  /* ---------- Footer year ---------- */
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- i18n: ES default, EN toggle ---------- */
  const translations = {
    en: {
      nav_work: "Projects", nav_tech: "Tech", nav_about: "About", nav_exp: "Experience", nav_contact: "Contact",
      hero_context: "Santiago, Chile — Looking for junior / internship roles in gameplay programming",
      hero_name: 'Mateo<br/><span class="thin">Orellana</span>',
      hero_role: "Gameplay Programmer / Game Designer / Studio Director",
      hero_tag: "I build gameplay systems, AI and multiplayer networking. I also run NOVALINK Studio, an indie studio training and connecting emerging talent.",
      cta_work: "View work", cta_contact: "Contact", cta_resume: "Download résumé (PDF)", scroll: "Scroll",
      reel_label: "Showreel 2026", work_label: "Selected Work",
      challenge_q: "Technical challenge",

      synco_name: "El Show Olvidado",
      synco_role: "Unreal Engine 5.6 · C++ · Gameplay Ability System",
      synco_desc: "First-person horror game with animatronics. I built the gameplay core in C++ using Unreal's Gameplay Ability System (GAS): a data-driven pawn mapping abilities to Enhanced Input actions, with binding lifecycle encapsulated inside each ability and automatic cleanup on end. Includes cinematic camera, line-trace interaction and UMG pickups.",
      synco_challenge: "Encapsulate each ability's input within the ability itself (not the pawn), so actions travel with the DataAsset and unlink automatically when the ability ends — preventing input binding leaks.",

      galactum_name: "Galactum — Team 3: World & Combat",
      galactum_role: "Godot 4.6 · GDScript · Networking · Client–Server · Android",
      galactum_desc: "Multiplayer space game with an authoritative client-server architecture. I designed a contract-first WebSocket protocol, a headless Godot server with tick-based loop, snapshot+delta replication (added/updated/removed with partial merge) and Area of Interest (AOI) with Spatial Hashing for network culling. The module was decoupled from 4 other teams via swappable providers (mocks).",
      galactum_challenge: "Keep a shared world consistent between client and server, resolving the 4 outside→inside/inside→outside transitions, while the module developed independently of the other 4 teams.",

      roblox_name: 'Roblox Obby — "Show Olvidado"',
      roblox_role: "Roblox Studio · Luau · Gameplay / Multiplayer",
      roblox_desc: "Persistent obby with 20+ levels, almost entirely programmed by me. Authoritative-server systems: checkpoint progression via DataStore, XP with exponential curve and movement buffs, full economy (shop, weighted loot crates, achievements), abilities (push via ApplyImpulse, freeze via network ownership transfer, double jump), and enemy AI with waypoint patrol, accelerating chase and territorial control.",
      roblox_challenge: "Make progression and economy survive servers and restarts, validating every transaction server-side and preventing client exploits (XP spoofing, duplicates, etc.).",

      deadgenre_name: "Dead Genre",
      deadgenre_role: "Godot 4.6 · GDScript · Souls-like melee",
      deadgenre_desc: "3D souls-like prototype: melee combat, parry with scaled knockback, frustum lock-on targeting, enemies with FSM (chase → orbit → attack → special), marked attack areas instanced as Area3D with ground-snapping raycast for readable AoE placement.",
      deadgenre_challenge: "Build a readable combat loop: the player must read the enemy's attack before it lands, using visual telegraph and temporal separation between warning and area detonation.",

      gamejam_name: "InterDemo — Game Jam",
      gamejam_role: "Godot · GDScript · Narrative / Horror · Shader",
      gamejam_desc: "Made in 48 hours: interrogation narrative loop, lives system, heartbeat monitor with custom GLSL shader and email transition scenes. Demonstrates delivering a complete, coherent experience under time pressure.",
      gamejam_challenge: "Ship a complete, playable experience in 48 hours, prioritizing the core loop (interrogation → heartbeat → outcome) and complementing with an atmospheric shader.",

      link_video: "Gameplay video", link_play: "Play", link_github: "GitHub",
      link_breakdown: "Technical breakdown", link_architecture: "Architecture", link_resume: "Résumé (PDF)",

      tech_label: "Tech & Skills", tech_lang: "Languages", tech_engines: "Engines",
      tech_systems: "Systems", tech_tools: "Tools",

      about_label: "About", about_h: "Programmer first, director second.",
      about_p1: "I'm a gameplay programmer and game designer. My areas are enemy AI, multiplayer networking and game mechanics in Unreal Engine (C++), Godot (GDScript) and Roblox Studio (Luau). I enjoy architecture problems: why code is organized a certain way, how client communicates with server, and how a mechanic feels in the player's hands.",
      about_p2: "I'm also founder and director of NOVALINK Studio, where I coordinate multidisciplinary teams (programming, art, animation), plan milestones, run game jams and keep relationships with indie studios. That experience taught me teamwork and how to ship — exactly what I look for in a studio.",
      about_philosophy: "What I value",
      about_li1h: "Shipped > idea.", about_li1: "4 finished projects carry more weight than 20 half-done prototypes.",
      about_li2h: "Technical honesty.", about_li2: "I say exactly what I did and what I didn't on each project.",
      about_li3h: "Game feel.", about_li3: "A mechanic is validated when it feels right, not when it compiles.",
      about_li4h: "Learn by building.", about_li4: "AI, networking, economy — I learned them by building them, not reading docs.",

      exp_label: "Experience & Leadership",
      exp_novalink_h: "Founder & Creative Director — NOVALINK Studio",
      exp_novalink_where: "Indie studio · Santiago, Chile · 2024 — present",
      exp_novalink_l1: "I run an indie studio that trains and connects emerging talent in game development.",
      exp_novalink_l2: "I coordinate programmers, artists and animators through Discord and Trello, defining milestones, tasks and production priorities.",
      exp_novalink_l3: "I organize game jams and keep collaboration with indie studios, including international contacts.",
      exp_novalink_l4: "I design and program gameplay in addition to directing — I work side by side with the team.",

      exp_team_h: "Team Lead — Galactum (Team 3: World & Combat)",
      exp_team_where: "Multi-team project · Godot 4.6",
      exp_team_l1: "Designed and implemented the client-server architecture for the module: contract-first WebSocket protocol, headless Godot server with tick loop, snapshot+delta replication with partial merge.",
      exp_team_l2: "Area of Interest (AOI) with Spatial Hashing for network culling — the server only sends what each client can see.",
      exp_team_l3: "Decoupled from the other 4 teams via swappable providers (mocks) for independent development without backend.",
      exp_team_l4: "Android target from day one: touch, resolution, memory, background/resume.",

      contact_label: "Contact",
      contact_mail: "mate.orellana@duocuc.cl",
    },
  };

  /* Default text lives in the HTML (Spanish).
     When switching to EN we apply translations; switching back to ES restores innerHTML. */
  const originals = {};
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    originals[el.dataset.i18n] = el.innerHTML;
  });

  let currentLang = "es";

  function setLang(lang) {
    currentLang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (lang === "es") {
        el.innerHTML = originals[key] || el.innerHTML;
      } else {
        const t = translations.en;
        if (t && t[key]) el.innerHTML = t[key];
      }
    });
    // toggle active state
    document.querySelectorAll(".lang").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
  }

  document.querySelectorAll(".lang").forEach((b) => {
    b.addEventListener("click", (e) => { e.preventDefault(); setLang(b.dataset.lang); });
  });
})();