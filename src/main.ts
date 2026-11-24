(() => {
  const html = document.documentElement;
  html.classList.add('js-active');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v: number, min = 0, max = 1): number => Math.min(max, Math.max(min, v));

  function enter(r: DOMRect, vh: number, span = 0.7): number {
    const start = vh;
    const end = vh * (1 - span);
    if (start === end) return 1;
    return clamp((start - r.top) / (start - end), 0, 1);
  }

  // 1. Dynamic fit() for Hero Name ("DAVID BLECMAN")
  const heroWrap = document.getElementById('heroNameWrap');
  const heroName = document.getElementById('heroName');

  function fit() {
    if (!heroWrap || !heroName) return;
    const width = heroWrap.clientWidth;
    if (!width) return;
    heroName.style.fontSize = '100px';
    const measured = heroName.getBoundingClientRect().width;
    if (measured > 0) {
      const size = (100 * width) / measured;
      heroName.style.fontSize = `${size.toFixed(2)}px`;
      heroName.style.marginTop = `${(heroName.offsetHeight * 0.28).toFixed(1)}px`;
    }
  }

  fit();
  window.addEventListener('resize', fit);
  window.addEventListener('load', fit);
  if (document.fonts) {
    if (document.fonts.load) {
      document.fonts.load('900 100px Archivo').then(fit, fit);
    }
    if (document.fonts.ready) {
      document.fonts.ready.then(fit).catch(() => {});
    }
  }

  // 2. IntersectionObserver for .rv reveal
  const rvEls = Array.from(document.querySelectorAll<HTMLElement>('.rv'));
  if ('IntersectionObserver' in window && !reduceMotion) {
    const rvIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            rvIO.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    rvEls.forEach((el) => rvIO.observe(el));
  } else {
    rvEls.forEach((el) => el.classList.add('in'));
  }

  // 3. IntersectionObserver for Results Count-up
  const countEls = Array.from(document.querySelectorAll<HTMLElement>('.count-num'));
  const animateCount = (el: HTMLElement) => {
    const target = Number(el.dataset.target || '0');
    const suffix = el.dataset.suffix || '';
    if (reduceMotion || target <= 0) {
      el.textContent = `${target}${suffix}`;
      return;
    }
    const duration = 1200;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = clamp((now - t0) / duration, 0, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = `${Math.round(eased * target)}${suffix}`;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window) {
    const countIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            animateCount(entry.target as HTMLElement);
            countIO.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.3 }
    );
    countEls.forEach((el) => countIO.observe(el));
  } else {
    countEls.forEach(animateCount);
  }

  // 4. IntersectionObserver for Showreel Video (25% in view)
  const reelVideo = document.getElementById('showreelVideo') as HTMLVideoElement | null;
  if (reelVideo && 'IntersectionObserver' in window) {
    const videoIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            reelVideo.play().catch(() => {});
          } else {
            reelVideo.pause();
          }
        }
      },
      { threshold: [0, 0.25, 0.5] }
    );
    videoIO.observe(reelVideo);
  }

  const reelToggleBtn = document.getElementById('reelToggleBtn');
  if (reelToggleBtn && reelVideo) {
    reelToggleBtn.addEventListener('click', () => {
      reelVideo.muted = !reelVideo.muted;
      reelToggleBtn.textContent = reelVideo.muted ? 'Unmute' : 'Mute';
    });
  }

  // 5. Mouse X tracking for Photo Wall
  let targetMouseX = 0;
  let currentMouseX = 0;
  window.addEventListener(
    'mousemove',
    (e: MouseEvent) => {
      const vw = window.innerWidth || 1;
      targetMouseX = (e.clientX / vw - 0.5) * 2;
    },
    { passive: true }
  );

  // Cached Elements for Global frame() Loop
  const progressBar = document.getElementById('progressBar');
  const siteNav = document.getElementById('siteNav');
  const heroSec = document.getElementById('hero');
  const wall = document.getElementById('photoWall');
  const wallRows = Array.from(document.querySelectorAll<HTMLElement>('#photoWall .row'));
  const parallaxImgs = Array.from(document.querySelectorAll<HTMLElement>('.pic img, .tile img'));
  const srvWipes = Array.from(document.querySelectorAll<HTMLElement>('.srv-wipe'));
  const projCards = Array.from(document.querySelectorAll<HTMLElement>('.proj'));
  const resultsBand = document.getElementById('resultsBand');

  let lastScrollY = window.scrollY;

  function frame() {
    const vh = window.innerHeight || 800;
    const sy = window.scrollY;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - vh);

    // Progress Bar
    if (progressBar) {
      const p = clamp(sy / maxScroll, 0, 1);
      progressBar.style.transform = `scaleX(${p.toFixed(4)})`;
    }

    // Navigation solid & scroll-tuck
    if (siteNav && heroSec) {
      const heroRect = heroSec.getBoundingClientRect();
      const pastHero = heroRect.bottom <= 90;
      siteNav.classList.toggle('solid', pastHero);

      const dy = sy - lastScrollY;
      if (pastHero && dy > 2 && sy > 200) {
        siteNav.classList.add('tuck');
      } else if (dy < -4 || !pastHero) {
        siteNav.classList.remove('tuck');
      }
    }
    lastScrollY = sy;

    if (!reduceMotion) {
      currentMouseX += (targetMouseX - currentMouseX) * 0.08;

      // Scroll-scrub parallax on .pic img and .tile img
      const viewMid = vh * 0.5;
      for (let i = 0; i < parallaxImgs.length; i++) {
        const img = parallaxImgs[i];
        const box = img.parentElement;
        if (!box) continue;
        const r = box.getBoundingClientRect();
        if (r.bottom < -120 || r.top > vh + 120) continue;
        const dist = (r.top + r.height * 0.5 - viewMid) / vh;
        const amp = img.dataset.parallax === 'hero' ? 46 : 24;
        const dy = -clamp(dist, -1, 1) * amp;
        const scale = img.dataset.parallax === 'hero' ? 1.12 : 1.09;
        img.style.transform = `translate3d(0, ${dy.toFixed(2)}px, 0) scale(${scale})`;
      }

      // Photo Wall alternating row horizontal drift
      if (wall && wallRows.length > 0) {
        const wr = wall.getBoundingClientRect();
        if (wr.bottom > -200 && wr.top < vh + 200) {
          const prog = enter(wr, vh, 1.0);
          for (let idx = 0; idx < wallRows.length; idx++) {
            const row = wallRows[idx];
            const dir = idx % 2 === 0 ? 1 : -1;
            const scrollShift = (prog - 0.5) * 150 * dir;
            const mouseShift = currentMouseX * (30 + (idx % 3) * 8) * dir;
            row.style.transform = `translate3d(${(scrollShift + mouseShift).toFixed(2)}px, 0, 0)`;
          }
        }
      }

      // Training / Services clip-path wipe
      for (let i = 0; i < srvWipes.length; i++) {
        const w = srvWipes[i];
        const r = w.getBoundingClientRect();
        const t = enter(r, vh, 0.55);
        const eased = 1 - Math.pow(1 - t, 2.2);
        const iy = (1 - eased) * 12;
        const ix = (1 - eased) * 14;
        const rad = (1 - eased) * 10;
        w.style.clipPath = `inset(${iy.toFixed(2)}% ${ix.toFixed(2)}% ${iy.toFixed(2)}% ${ix.toFixed(2)}% round ${rad.toFixed(1)}px)`;
      }

      // Sticky Work Stack scale (0.93) & brightness (0.65)
      for (let i = 0; i < projCards.length; i++) {
        const card = projCards[i];
        const next = projCards[i + 1];
        if (!next) {
          card.style.transform = '';
          card.style.filter = '';
          continue;
        }
        const nr = next.getBoundingClientRect();
        const p = clamp((vh - nr.top) / Math.max(1, vh - 96), 0, 1);
        card.style.transform = p ? `scale(${(1 - 0.07 * p).toFixed(4)})` : '';
        card.style.filter = p ? `brightness(${(1 - 0.35 * p).toFixed(3)})` : '';
      }

      // Results Band clip-path expansion (28px -> 0)
      if (resultsBand) {
        const rr = resultsBand.getBoundingClientRect();
        const t = enter(rr, vh, 0.6);
        const eased = 1 - Math.pow(1 - t, 2);
        const ix = (1 - eased) * 6;
        const rad = (1 - eased) * 28;
        resultsBand.style.clipPath = `inset(0 ${ix.toFixed(2)}% 0 ${ix.toFixed(2)}% round ${rad.toFixed(1)}px)`;
      }
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
})();
