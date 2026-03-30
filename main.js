(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    function onScroll() {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initNav() {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('site-nav');
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    }

    toggle.addEventListener('click', () => {
      setOpen(!nav.classList.contains('is-open'));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.matchMedia('(max-width: 899px)').matches) {
          setOpen(false);
        }
      });
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 900px)').matches) {
        setOpen(false);
      }
    });
  }

  function initReveal() {
    if (prefersReducedMotion) return;

    const nodes = document.querySelectorAll('.reveal:not(.reveal-visible)');
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    );

    nodes.forEach((el) => io.observe(el));
  }

  function initStatCount() {
    if (prefersReducedMotion) return;

    const el = document.querySelector('[data-count-target]');
    if (!el) return;

    const target = Number(el.getAttribute('data-count-target'));
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    if (Number.isNaN(target)) return;

    const format = (n) => prefix + Math.round(n) + suffix;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          const duration = 720;
          const start = performance.now();

          function frame(now) {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = format(target * eased);
            if (t < 1) requestAnimationFrame(frame);
            else {
              el.textContent = format(target);
              el.classList.add('is-done');
            }
          }
          el.textContent = format(0);
          requestAnimationFrame(frame);
        });
      },
      { threshold: 0.2 }
    );

    io.observe(el);
  }

  /** Restrained radial highlight following pointer (desktop, no reduced motion). */
  function initMockSpotlight() {
    if (prefersReducedMotion) return;

    const wrap = document.querySelector('[data-mock-spotlight]');
    if (!wrap || window.matchMedia('(max-width: 1023px)').matches) return;

    function setSpot(clientX, clientY) {
      const r = wrap.getBoundingClientRect();
      const x = ((clientX - r.left) / Math.max(r.width, 1)) * 100;
      const y = ((clientY - r.top) / Math.max(r.height, 1)) * 100;
      wrap.style.setProperty('--spot-x', `${Math.max(0, Math.min(100, x))}%`);
      wrap.style.setProperty('--spot-y', `${Math.max(0, Math.min(100, y))}%`);
    }

    wrap.addEventListener(
      'pointermove',
      (e) => {
        setSpot(e.clientX, e.clientY);
        wrap.classList.add('is-spot-active');
      },
      { passive: true }
    );

    wrap.addEventListener('pointerleave', () => {
      wrap.classList.remove('is-spot-active');
    });
  }

  function run() {
    initHeaderScroll();
    initNav();
    initReveal();
    initStatCount();
    initMockSpotlight();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
