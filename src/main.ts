import './index.css';

interface PortfolioItem {
  id: string;
  index: string;
  title: string;
  src: string;
  camera: string;
  description: string;
  notes: string;
  objectPosition?: string;
}

interface EssayItem {
  id: string;
  category: string;
  title: string;
  paragraphs: string[];
}

const PORTFOLIOS: PortfolioItem[] = [
  {
    id: 'architectural',
    index: '01 / 10',
    title: 'Architectural',
    src: '/src/assets/images/portfolio_architectural_1795541787299.jpg',
    camera: '24mm Tilt-Shift · f/11 · ISO 100',
    description:
      'Perspective-corrected exterior and interior architectural studies balancing structural geometry with natural daylight.',
    notes: 'Shot at golden hour to preserve warm travertine relief while retaining deep interior shadow detail.',
  },
  {
    id: 'food-restaurant',
    index: '02 / 10',
    title: 'Food and Restaurant',
    src: '/src/assets/images/portfolio_food_restaurant_1795541787397.jpg',
    camera: '85mm · f/2.8 · ISO 400',
    description:
      'Atmospheric dining spaces and tactile culinary plating styled for hospitality brands, menus, and editorial features.',
    notes: 'Single diffused overhead key light balanced against warm ambient dining room practicals.',
  },
  {
    id: 'fashion',
    index: '03 / 10',
    title: 'Fashion',
    src: '/src/assets/images/portfolio_fashion_1795541788327.jpg',
    camera: '70-200mm · f/2.8 · ISO 200',
    description:
      'Editorial wardrobe storytelling and movement-driven fashion commissions directed on location and in studio.',
    notes: 'Open colonnade sidelight shaped with a silver reflector to accentuate tailored fabric drape.',
    objectPosition: '50% 20%',
  },
  {
    id: 'swimwear',
    index: '04 / 10',
    title: 'Swimwear',
    src: '/src/assets/images/portfolio_swimwear_1795541787628.jpg',
    camera: '50mm · f/4 · ISO 160',
    description:
      'Sun-drenched coastal and resort swimwear productions blending natural reflection with controlled fill lighting.',
    notes: 'High-speed sync strobe fill matched to late afternoon coastal horizon light.',
    objectPosition: '50% 20%',
  },
  {
    id: 'boudoir',
    index: '05 / 10',
    title: 'Boudoir',
    src: '/src/assets/images/portfolio_boudoir_1795541788139.jpg',
    camera: '50mm · f/2 · ISO 200',
    description:
      'Sculpted-light intimate portraiture focused on quiet confidence, graceful posing, and refined tonal contrast.',
    notes: 'Sheer north-facing window diffusion paired with classic monochrome silver-gelatin tonal grading.',
    objectPosition: '50% 20%',
  },
  {
    id: 'corporate-headshots',
    index: '06 / 10',
    title: 'Corporate Headshots',
    src: '/src/assets/images/portfolio_corporate_headshots_1795541788498.jpg',
    camera: '105mm · f/3.2 · ISO 250',
    description:
      'Polished executive and leadership portraits crafted for annual reports, press releases, and corporate teams.',
    notes: 'Portable feathered octa-box keyed at 45 degrees inside an architectural atrium.',
    objectPosition: '50% 20%',
  },
  {
    id: 'actor-headshots',
    index: '07 / 10',
    title: 'Actor Headshots',
    src: '/src/assets/images/portfolio_actor_headshots_1795541789467.jpg',
    camera: '85mm · f/2 · ISO 160',
    description:
      'Expressive theatrical and film casting portraits centered on authentic eye-line, presence, and character range.',
    notes: 'Clamshell fill under a gridded beauty dish to keep catchlights crisp and skin texture honest.',
    objectPosition: '50% 20%',
  },
  {
    id: 'model-headshots',
    index: '08 / 10',
    title: 'Model Headshots',
    src: '/src/assets/images/portfolio_model_headshots_1795541790356.jpg',
    camera: '90mm Macro · f/5.6 · ISO 100',
    description:
      'Clean beauty and agency-ready comp card portraits highlighting natural skin texture, symmetry, and poise.',
    notes: 'Neutral stone backdrop with wrap-around softbox lighting for agency-standard comp cards.',
    objectPosition: '50% 20%',
  },
  {
    id: 'medical',
    index: '09 / 10',
    title: 'Medical',
    src: '/src/assets/images/portfolio_medical_1795541793067.jpg',
    camera: '35mm · f/2.8 · ISO 500',
    description:
      'Authentic healthcare, clinical environment, and physician-patient storytelling for hospitals and medical practices.',
    notes: 'Color-calibrated daylight LED panel mixed smoothly with clinical ambient illumination.',
    objectPosition: '50% 25%',
  },
  {
    id: 'products',
    index: '10 / 10',
    title: 'Products',
    src: '/src/assets/images/portfolio_products_1795541791489.jpg',
    camera: '100mm · f/8 · ISO 100',
    description:
      'Precision-lit studio still life and commercial product photography tailored for campaigns, packaging, and lookbooks.',
    notes: 'Hard sunlight replica modifier casting crisp shadows across natural travertine stone.',
  },
];

const ESSAYS: Record<string, EssayItem> = {
  lighting: {
    id: 'lighting',
    category: 'Training · Lighting',
    title: 'Teaching Lighting Across Four Continents Without Over-Rigging',
    paragraphs: [
      'When teaching workshops across North America, Europe, Asia, and Australia, the first habit I help photographers unlearn is bringing four light stands to a scene that only asks for one disciplined modifier.',
      'Before unpacking a single strobe, read the existing directional light. Determine where shadows naturally fall, identify specular surfaces that will betray artificial spill, and decide whether your key light is replacing the ambient or extending it.',
      'A single feathered softbox or scrim placed at the edge of its beam produces cleaner tonal transitions and lets you direct your subject instead of managing cables.',
    ],
  },
  headshots: {
    id: 'headshots',
    category: 'Portfolios · Headshots',
    title: 'What Separates Actor, Model, and Corporate Headshots',
    paragraphs: [
      'Although all three live under the umbrella of headshots, an executive portrait, a theatrical casting headshot, and a model agency comp card solve entirely different visual problems.',
      'Corporate headshots prioritize approachability, authoritative posture, and environmental context that supports leadership messaging. Actor headshots strip away distraction so casting directors immediately read emotional availability and eye-line truth.',
      'Model headshots emphasize symmetry, clean skin texture, and neutral wardrobe so an agency booker can envision the talent across dozens of client campaigns.',
    ],
  },
  trust: {
    id: 'trust',
    category: 'Mentoring · Craft',
    title: 'Building Collaborative Trust Between Photographer and Model',
    paragraphs: [
      'Great portraits, fashion editorials, and boudoir commissions happen when the subject stops performing for the lens and starts collaborating with the person behind it.',
      'In our Positive Negatives mentoring sessions for both photographers and models, we break direction into clear, calm physical cues—weight distribution, chin angle, breath timing—rather than vague adjectives.',
      'When models understand how light wraps around posture and photographers explain what each frame is achieving, confidence shows immediately in the work.',
    ],
  },
};

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

  // Fallback protection for all images
  document.querySelectorAll<HTMLImageElement>('img').forEach((img) => {
    img.addEventListener('error', () => {
      img.style.opacity = '0';
    });
  });

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

  // 4. IntersectionObserver & Controls for Showreel Video
  const reelVideo = document.getElementById('showreelVideo') as HTMLVideoElement | null;
  const reelPlayBtn = document.getElementById('reelPlayBtn');
  const reelToggleBtn = document.getElementById('reelToggleBtn');
  let userPausedReel = false;

  if (reelVideo && 'IntersectionObserver' in window) {
    const videoIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            if (!userPausedReel) {
              reelVideo.play().catch(() => {});
              if (reelPlayBtn) reelPlayBtn.textContent = 'Pause';
            }
          } else {
            reelVideo.pause();
          }
        }
      },
      { threshold: [0, 0.25, 0.5] }
    );
    videoIO.observe(reelVideo);
  }

  if (reelPlayBtn && reelVideo) {
    reelPlayBtn.addEventListener('click', () => {
      if (reelVideo.paused) {
        userPausedReel = false;
        reelVideo.play().catch(() => {});
        reelPlayBtn.textContent = 'Pause';
      } else {
        userPausedReel = true;
        reelVideo.pause();
        reelPlayBtn.textContent = 'Play';
      }
    });
  }

  if (reelToggleBtn && reelVideo) {
    reelToggleBtn.addEventListener('click', () => {
      reelVideo.muted = !reelVideo.muted;
      reelToggleBtn.textContent = reelVideo.muted ? 'Unmute' : 'Mute';
    });
  }

  // 5. Interactive Portfolio Category Filtering
  const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('#portfolioFilterBar .filter-tab'));
  const allProjCards = Array.from(document.querySelectorAll<HTMLElement>('#workStack .proj'));
  const filterStatus = document.getElementById('filterStatus');
  let visibleProjCards: HTMLElement[] = [...allProjCards];

  function applyPortfolioFilter(filter: string) {
    filterButtons.forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.dataset.filter === filter ? 'true' : 'false');
    });

    visibleProjCards = [];
    allProjCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.project === filter;
      card.style.display = matches ? '' : 'none';
      if (matches) {
        visibleProjCards.push(card);
      } else {
        card.style.transform = '';
        card.style.filter = '';
      }
    });

    if (filterStatus) {
      if (filter === 'all') {
        filterStatus.textContent =
          'Viewing all 10 portfolio specialties by David Blecman / Positive Negatives. Select a discipline above or click any portfolio card below to inspect.';
      } else {
        const match = PORTFOLIOS.find((p) => p.id === filter);
        filterStatus.textContent = match
          ? `Showing ${match.title} (${match.index}) — click the series card below to inspect in full resolution.`
          : 'Viewing selected portfolio.';
      }
    }
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      applyPortfolioFilter(btn.dataset.filter || 'all');
    });
  });

  document.querySelectorAll<HTMLElement>('[data-jump-filter]').forEach((el) => {
    el.addEventListener('click', () => {
      const targetFilter = el.dataset.jumpFilter || 'all';
      applyPortfolioFilter(targetFilter);
      const workSection = document.getElementById('work');
      workSection?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

  // 6. Fullscreen Portfolio Lightbox Modal
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg') as HTMLImageElement | null;
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxNotes = document.getElementById('lightboxNotes');
  const lightboxIndex = document.getElementById('lightboxIndex');
  const lightboxCamera = document.getElementById('lightboxCamera');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  let activeLightboxIdx = 0;
  let lastFocusedEl: HTMLElement | null = null;

  function renderLightbox(idx: number) {
    activeLightboxIdx = (idx + PORTFOLIOS.length) % PORTFOLIOS.length;
    const item = PORTFOLIOS[activeLightboxIdx];
    if (lightboxImg) {
      lightboxImg.style.opacity = '1';
      lightboxImg.src = item.src;
      lightboxImg.alt = `${item.title} portfolio photograph`;
      lightboxImg.style.objectPosition = item.objectPosition || '50% 50%';
    }
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDesc) lightboxDesc.textContent = item.description;
    if (lightboxNotes) lightboxNotes.textContent = item.notes;
    if (lightboxIndex) lightboxIndex.textContent = item.index;
    if (lightboxCamera) lightboxCamera.textContent = item.camera;
  }

  function openLightbox(id: string) {
    if (!lightboxModal) return;
    lastFocusedEl = document.activeElement as HTMLElement | null;
    const foundIdx = PORTFOLIOS.findIndex((p) => p.id === id);
    renderLightbox(foundIdx >= 0 ? foundIdx : 0);
    lightboxModal.classList.add('open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose?.focus();
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastFocusedEl?.focus();
  }

  document.querySelectorAll<HTMLElement>('[data-lightbox-id]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const id = trigger.dataset.lightboxId || 'architectural';
      openLightbox(id);
    });
    if (trigger.getAttribute('role') === 'button') {
      trigger.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(trigger.dataset.lightboxId || 'architectural');
        }
      });
    }
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', () => renderLightbox(activeLightboxIdx - 1));
  lightboxNext?.addEventListener('click', () => renderLightbox(activeLightboxIdx + 1));
  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  // 7. Blog Field Note Reader Modal
  const essayModal = document.getElementById('essayModal');
  const essayCategory = document.getElementById('essayCategory');
  const essayTitle = document.getElementById('essayTitle');
  const essayBody = document.getElementById('essayBody');
  const essayClose = document.getElementById('essayClose');

  function openEssay(id: string) {
    const essay = ESSAYS[id];
    if (!essayModal || !essay) return;
    lastFocusedEl = document.activeElement as HTMLElement | null;
    if (essayCategory) essayCategory.textContent = essay.category;
    if (essayTitle) essayTitle.textContent = essay.title;
    if (essayBody) {
      essayBody.innerHTML = '';
      essay.paragraphs.forEach((pText) => {
        const p = document.createElement('p');
        p.textContent = pText;
        essayBody.appendChild(p);
      });
    }
    essayModal.classList.add('open');
    essayModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    essayClose?.focus();
  }

  function closeEssay() {
    if (!essayModal) return;
    essayModal.classList.remove('open');
    essayModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastFocusedEl?.focus();
  }

  document.querySelectorAll<HTMLElement>('[data-essay-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openEssay(btn.dataset.essayId || 'lighting');
    });
  });

  essayClose?.addEventListener('click', closeEssay);
  essayModal?.addEventListener('click', (e) => {
    if (e.target === essayModal) closeEssay();
  });

  // 8. Mobile Navigation Drawer
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');

  function setMobileDrawer(open: boolean) {
    if (!mobileDrawer || !mobileMenuBtn) return;
    mobileDrawer.classList.toggle('open', open);
    mobileDrawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    mobileMenuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      mobileCloseBtn?.focus();
    } else {
      mobileMenuBtn.focus();
    }
  }

  mobileMenuBtn?.addEventListener('click', () => setMobileDrawer(true));
  mobileCloseBtn?.addEventListener('click', () => setMobileDrawer(false));
  document.querySelectorAll<HTMLElement>('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => setMobileDrawer(false));
  });

  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (lightboxModal?.classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') renderLightbox(activeLightboxIdx - 1);
      if (e.key === 'ArrowRight') renderLightbox(activeLightboxIdx + 1);
      return;
    }
    if (essayModal?.classList.contains('open') && e.key === 'Escape') {
      closeEssay();
      return;
    }
    if (mobileDrawer?.classList.contains('open') && e.key === 'Escape') {
      setMobileDrawer(false);
    }
  });

  // 8b. Contact Form Validation & Confirmation
  const contactForm = document.getElementById('contactForm') as HTMLFormElement | null;
  const contactSuccess = document.getElementById('contactSuccess');
  const contactSuccessSummary = document.getElementById('contactSuccessSummary');
  const contactError = document.getElementById('contactError');
  const contactResetBtn = document.getElementById('contactResetBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault();
      const nameInput = document.getElementById('contactName') as HTMLInputElement | null;
      const emailInput = document.getElementById('contactEmail') as HTMLInputElement | null;
      const topicSelect = document.getElementById('contactTopic') as HTMLSelectElement | null;
      const messageInput = document.getElementById('contactMessage') as HTMLTextAreaElement | null;

      const name = nameInput?.value.trim() || '';
      const email = emailInput?.value.trim() || '';
      const topic = topicSelect?.value || 'Studio Inquiry';
      const message = messageInput?.value.trim() || '';

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!name || !emailValid || !message) {
        if (contactError) {
          contactError.textContent = !name
            ? 'Please enter your full name.'
            : !emailValid
              ? 'Please enter a valid email address.'
              : 'Please enter a short message about your project or training request.';
          contactError.classList.remove('hidden');
        }
        return;
      }

      if (contactError) contactError.classList.add('hidden');
      if (contactSuccessSummary) {
        contactSuccessSummary.textContent = `Thank you, ${name}. Your inquiry regarding "${topic}" has been prepared for David Blecman at Positive Negatives (${email}).`;
      }
      contactForm.classList.add('hidden');
      contactSuccess?.classList.remove('hidden');
    });
  }

  contactResetBtn?.addEventListener('click', () => {
    contactForm?.reset();
    contactSuccess?.classList.add('hidden');
    contactForm?.classList.remove('hidden');
  });

  // 9. Mouse X tracking for Photo Wall
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
      for (let i = 0; i < visibleProjCards.length; i++) {
        const card = visibleProjCards[i];
        const next = visibleProjCards[i + 1];
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
