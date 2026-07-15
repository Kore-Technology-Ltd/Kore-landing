/**
 * Korè Landing Page — Interaction Layer
 * -----------------------------------------------------------------------
 * A single, self-contained module (no globals leaked except `window.Korre`
 * for debugging) that drives the carousel, navigation, reveal animations,
 * notifications, parallax, stat counters, FAQ accordion, and forms.
 *
 * Theming note: shared design tokens (easing curves, accent colors, focus
 * color) live as CSS custom properties in korre-styles.css's :root block.
 * Every value referenced here uses var(--token, fallback) so this file still
 * renders correctly on its own if that stylesheet is missing or loads late.
 *
 * Design intent: quiet, confident motion. Nothing animates just to prove
 * it can — every transition earns its place (state change, feedback, or
 * orientation). Everything respects prefers-reduced-motion and keyboard use.
 *
 * Mobile-responsive pass (this version):
 *  - Hover-driven lift/underline effects (`.korre-clickable:hover`,
 *    `.korre-nav-link:hover`) are now scoped to `@media (hover: hover) and
 *    (pointer: fine)`. Touchscreens simulate `:hover` on the first tap,
 *    so unscoped these left buttons and nav links visually "stuck" in
 *    their hover state until the visitor tapped elsewhere.
 *  - `ParallaxEffect` now checks a coarse-pointer/narrow-viewport media
 *    query before attaching its scroll listener, and re-checks on
 *    resize/orientation change. The effect is barely visible while
 *    swipe-scrolling on a phone but still costs a scroll listener and
 *    reflow, so it's off there.
 *  - The FAQ header no longer force-sets a fixed 65px height inline;
 *    it relies on the CSS class instead, and a small-viewport override
 *    lets it grow (`min-height` + `height: auto`) so a question that
 *    wraps to two lines on a narrow phone isn't clipped.
 * -----------------------------------------------------------------------
 */

(() => {
  'use strict';

  // ==========================================================================
  // SHARED UTILITIES
  // ==========================================================================

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const EASE = {
    luxe: 'var(--korre-ease-luxe, cubic-bezier(0.22, 1, 0.36, 1))', // slow-in, decisive-out
    snap: 'var(--korre-ease-snap, cubic-bezier(0.4, 0, 0.2, 1))',
  };

  /** Debounce: waits for a pause in calls before firing once. */
  function debounce(fn, wait = 150) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), wait);
    };
  }

  /** Throttle via rAF: at most once per animation frame, always the latest args. */
  function rafThrottle(fn) {
    let scheduled = false;
    let lastArgs;
    return (...args) => {
      lastArgs = args;
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        fn(...lastArgs);
        scheduled = false;
      });
    };
  }

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  /** Find elements whose direct text content matches a label, scoped + cached-safe. */
  function findByText(selector, label) {
    return Array.from(document.querySelectorAll(selector)).filter(
      (el) => el.textContent.trim() === label
    );
  }

  /** Lowercases, collapses whitespace, and normalizes curly quotes, so copy
   *  lookups (e.g. matching a rendered FAQ question to its answer) survive
   *  minor punctuation/casing drift between the markup and this file. */
  function normalizeText(value) {
    return value
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  /** Inject a <style> block once, keyed by id, so repeated calls are safe. */
  function injectStylesheet(id, css) {
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = css;
    document.head.appendChild(style);
  }

  // ==========================================================================
  // GLOBAL STYLES (keyframes + shared interaction classes)
  // ==========================================================================

  injectStylesheet(
    'korre-dynamic-styles',
    `
    .korre-reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.8s ${EASE.luxe}, transform 0.8s ${EASE.luxe};
      will-change: opacity, transform;
    }
    .korre-reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .korre-ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      background: rgba(255, 255, 255, 0.45);
      pointer-events: none;
      animation: korre-ripple-anim 0.6s ${EASE.snap};
    }
    @keyframes korre-ripple-anim {
      to { transform: scale(2.5); opacity: 0; }
    }

    .korre-clickable {
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: transform 0.35s ${EASE.luxe}, box-shadow 0.35s ${EASE.luxe}, opacity 0.35s ${EASE.luxe};
    }
    .korre-clickable:active {
      transform: translateY(0) scale(0.985);
    }
    .korre-clickable:focus-visible {
      outline: 2px solid var(--korre-focus-color, #d3a014);
      outline-offset: 3px;
    }

    .korre-nav-link {
      position: relative;
      transition: opacity 0.25s ${EASE.snap}, color 0.25s ${EASE.snap};
    }
    .korre-nav-link::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 100%;
      height: 1px;
      background: currentColor;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ${EASE.luxe};
    }
    .korre-nav-link.is-active::after {
      transform: scaleX(1);
    }

    /* Hover-only lift/underline effects, scoped to devices with a real
       hover state (mouse/trackpad). Without this, tapping a button or nav
       link on a touchscreen leaves it visually "stuck" in its hover state
       until the visitor taps something else, since mobile browsers simulate
       :hover on first touch. */
    @media (hover: hover) and (pointer: fine) {
      .korre-clickable:hover {
        transform: translateY(-2px) scale(1.015);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.16);
      }
      .korre-nav-link:hover::after {
        transform: scaleX(1);
      }
    }

    .korre-carousel-track {
      transition: transform 0.7s ${EASE.luxe};
    }

    .korre-carousel-dot {
      transition: transform 0.3s ${EASE.luxe}, opacity 0.3s ${EASE.luxe};
    }
    .korre-carousel-dot.is-active {
      transform: scale(1.3);
    }

    .korre-faq-card {
      overflow: hidden;
    }
    .korre-faq-card:focus-visible {
      outline: 2px solid var(--korre-focus-color, #d3a014);
      outline-offset: 3px;
    }
    .korre-faq-card.is-open {
      border-color: #3fa97e !important;
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
    }
    @media (hover: hover) and (pointer: fine) {
      .korre-faq-card:hover {
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
      }
    }
    .korre-faq-header {
      position: relative;
      height: 65px;
    }
    /* Let the header grow instead of clipping on phones, where a longer
       question is more likely to wrap onto a second line. */
    @media (max-width: 480px) {
      .korre-faq-header {
        height: auto;
        min-height: 65px;
        padding-right: 36px; /* keep clear of the toggle arrow */
      }
    }
    .korre-faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      padding: 0 20px;
    }
    .korre-faq-answer p {
      margin: 0;
    }
    .korre-faq-card.is-open .korre-faq-answer {
      padding: 16px 20px 20px;
    }
    .korre-faq-arrow {
      transition: transform 0.3s ease;
    }
    .korre-faq-card.is-open .korre-faq-arrow {
      transform: rotate(180deg);
    }

    .korre-progress-track {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      width: 100%;
      background: rgba(255, 255, 255, 0.25);
      overflow: hidden;
    }
    .korre-progress-fill {
      height: 100%;
      width: 0%;
      background: var(--korre-accent-green, #3fa97e);
      transform-origin: left;
    }

    .korre-highlight-pulse {
      animation: korre-highlight-pulse 1.1s ${EASE.snap};
    }
    @keyframes korre-highlight-pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(63, 169, 126, 0); }
      30% { box-shadow: 0 0 0 8px rgba(63, 169, 126, 0.18); }
    }

    .korre-notification-region {
      position: fixed;
      top: 20px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      z-index: 1000;
      pointer-events: none;
    }
    .korre-notification {
      pointer-events: auto;
      min-width: 260px;
      max-width: 360px;
      padding: 16px 20px;
      border-radius: 10px;
      color: #fff;
      font-family: Outfit, sans-serif;
      font-size: 14px;
      line-height: 1.4;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      opacity: 0;
      transform: translateX(40px);
      transition: opacity 0.4s ${EASE.luxe}, transform 0.4s ${EASE.luxe};
      cursor: pointer;
    }
    .korre-notification.is-visible {
      opacity: 1;
      transform: translateX(0);
    }
    .korre-notification.is-success { background: linear-gradient(135deg, #3fa97e, #2f8763); }
    .korre-notification.is-info    { background: linear-gradient(135deg, #d3a014, #b98a0e); }
    .korre-notification.is-error   { background: linear-gradient(135deg, #c0473f, #9c352e); }

    .korre-field-error {
      color: #c0473f;
      font-size: 12px;
      margin-top: 6px;
      font-family: Outfit, sans-serif;
    }

    @media (prefers-reduced-motion: reduce) {
      .korre-reveal, .korre-clickable, .korre-nav-link, .korre-carousel-track,
      .korre-carousel-dot, .korre-notification, .korre-faq-answer,
      .korre-faq-arrow, .korre-highlight-pulse, .korre-faq-card {
        transition-duration: 0.001s !important;
        animation-duration: 0.001s !important;
      }
    }
    `
  );

  // ==========================================================================
  // NOTIFICATION SYSTEM (queued, accessible, non-blocking)
  // ==========================================================================

  class NotificationCenter {
    constructor() {
      this.region = null;
    }

    ensureRegion() {
      if (this.region && document.body.contains(this.region)) return this.region;
      const region = document.createElement('div');
      region.className = 'korre-notification-region';
      region.setAttribute('role', 'status');
      region.setAttribute('aria-live', 'polite');
      document.body.appendChild(region);
      this.region = region;
      return region;
    }

    show(message, type = 'info', duration = 3200) {
      const region = this.ensureRegion();
      const note = document.createElement('div');
      note.className = `korre-notification is-${type}`;
      note.textContent = message;
      region.appendChild(note);

      // Force reflow so the enter transition actually plays.
      requestAnimationFrame(() => note.classList.add('is-visible'));

      const dismiss = () => {
        note.classList.remove('is-visible');
        note.addEventListener('transitionend', () => note.remove(), { once: true });
        // Safety net in case transitionend doesn't fire (reduced motion etc).
        setTimeout(() => note.remove(), 500);
      };

      const timer = setTimeout(dismiss, duration);
      note.addEventListener('click', () => {
        clearTimeout(timer);
        dismiss();
      });

      return note;
    }
  }

  const notifications = new NotificationCenter();

  // ==========================================================================
  // HERO CAROUSEL
  // ==========================================================================

  class HeroCarousel {
    constructor(root) {
      this.root = root;
      this.track = root.querySelector('.hero-carousel-track');
      this.dots = Array.from(root.querySelectorAll('.hero-carousel-dot'));
      this.slides = Array.from(root.querySelectorAll('.hero-slide'));
      this.totalSlides = this.slides.length || this.dots.length || 1;
      this.currentSlide = 0;
      this.autoPlayDelay = 5000;
      this.autoPlayInterval = null;
      this.progressStart = null;
      this.progressRaf = null;
      this.isDragging = false;
      this.dragStartX = 0;
      this.dragDeltaX = 0;

      if (!this.track) return; // Nothing to drive; bail out quietly.

      this.init();
    }

    init() {
      this.track.classList.add('korre-carousel-track');
      this.dots.forEach((d) => d.classList.add('korre-carousel-dot'));
      this.buildProgressBar();
      this.setupDots();
      this.setupHoverPause();
      this.setupSwipe();
      this.setupVisibilityPause();
      this.updateActiveDot();
      this.startAutoPlay();
    }

    buildProgressBar() {
      if (prefersReducedMotion) return;
      const trackEl = document.createElement('div');
      trackEl.className = 'korre-progress-track';
      const fill = document.createElement('div');
      fill.className = 'korre-progress-fill';
      trackEl.appendChild(fill);
      this.root.style.position = this.root.style.position || 'relative';
      this.root.appendChild(trackEl);
      this.progressFill = fill;
    }

    setupDots() {
      this.dots.forEach((dot, index) => {
        dot.setAttribute('role', 'button');
        dot.setAttribute('tabindex', '0');
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.addEventListener('click', () => {
          this.goToSlide(index, { userInitiated: true });
        });
        dot.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.goToSlide(index, { userInitiated: true });
          }
        });
      });
    }

    setupHoverPause() {
      this.root.addEventListener('mouseenter', () => this.stopAutoPlay());
      this.root.addEventListener('mouseleave', () => this.startAutoPlay());
      this.root.addEventListener('focusin', () => this.stopAutoPlay());
      this.root.addEventListener('focusout', () => this.startAutoPlay());
    }

    setupVisibilityPause() {
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.stopAutoPlay();
        } else {
          this.startAutoPlay();
        }
      });
    }

    setupSwipe() {
      const start = (x) => {
        this.isDragging = true;
        this.dragStartX = x;
        this.dragDeltaX = 0;
        this.stopAutoPlay();
        this.track.style.transition = 'none';
      };
      const move = (x) => {
        if (!this.isDragging) return;
        this.dragDeltaX = x - this.dragStartX;
        const base = -this.currentSlide * 100;
        const dragPercent = (this.dragDeltaX / this.root.clientWidth) * 100;
        this.track.style.transform = `translateX(${base + dragPercent}%)`;
      };
      const end = () => {
        if (!this.isDragging) return;
        this.isDragging = false;
        this.track.style.transition = '';
        const threshold = this.root.clientWidth * 0.15;
        if (this.dragDeltaX > threshold) {
          this.goToSlide(this.currentSlide - 1, { userInitiated: true });
        } else if (this.dragDeltaX < -threshold) {
          this.goToSlide(this.currentSlide + 1, { userInitiated: true });
        } else {
          this.updateCarouselPosition(); // snap back
        }
        this.startAutoPlay();
      };

      this.track.addEventListener('touchstart', (e) => start(e.touches[0].clientX), { passive: true });
      this.track.addEventListener('touchmove', (e) => move(e.touches[0].clientX), { passive: true });
      this.track.addEventListener('touchend', end);

      // Optional mouse-drag support for desktop trackpads/mice.
      this.track.addEventListener('mousedown', (e) => start(e.clientX));
      window.addEventListener('mousemove', (e) => move(e.clientX));
      window.addEventListener('mouseup', end);
    }

    goToSlide(index, { userInitiated = false } = {}) {
      const normalized = ((index % this.totalSlides) + this.totalSlides) % this.totalSlides;
      this.currentSlide = normalized;
      this.updateCarouselPosition();
      this.updateActiveDot();
      if (userInitiated) this.restartProgress();
    }

    updateCarouselPosition() {
      const offset = -this.currentSlide * 100;
      this.track.style.transform = `translateX(${offset}%)`;
    }

    updateActiveDot() {
      this.dots.forEach((dot, index) => {
        dot.classList.toggle('is-active', index === this.currentSlide);
        dot.setAttribute('aria-current', index === this.currentSlide ? 'true' : 'false');
      });
    }

    nextSlide() {
      this.goToSlide(this.currentSlide + 1);
    }

    prevSlide() {
      this.goToSlide(this.currentSlide - 1);
    }

    startAutoPlay() {
      if (this.totalSlides <= 1) return;
      this.stopAutoPlay();
      this.autoPlayInterval = setInterval(() => this.nextSlide(), this.autoPlayDelay);
      this.animateProgress();
    }

    stopAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
      }
      if (this.progressRaf) {
        cancelAnimationFrame(this.progressRaf);
        this.progressRaf = null;
      }
    }

    restartProgress() {
      if (!this.autoPlayInterval) return;
      this.startAutoPlay();
    }

    animateProgress() {
      if (!this.progressFill) return;
      this.progressStart = performance.now();
      const tick = (now) => {
        const elapsed = now - this.progressStart;
        const pct = clamp((elapsed / this.autoPlayDelay) * 100, 0, 100);
        this.progressFill.style.width = `${pct}%`;
        if (pct < 100 && this.autoPlayInterval) {
          this.progressRaf = requestAnimationFrame(tick);
        }
      };
      this.progressRaf = requestAnimationFrame(tick);
    }
  }

  // ==========================================================================
  // BUTTON & LINK INTERACTIONS
  // ==========================================================================

  class ButtonInteractions {
    constructor() {
      this.init();
    }

    init() {
      this.handleWaitlistButtons();
      this.handleNavigationLinks();
      this.handleSmoothAnchorScrolling();
    }

    /** Adds a Material-style ripple confined to the element's own bounds. */
    static attachRipple(el) {
      el.addEventListener('click', (e) => {
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const ripple = document.createElement('span');
        ripple.className = 'korre-ripple';
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        el.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
      });
    }

    handleWaitlistButtons() {
      const explicit = document.querySelectorAll('[data-action="join-waitlist"]');
      const fallbackSpans = explicit.length
        ? []
        : findByText('.text', 'Join Waitlist');
      const fallback = fallbackSpans
        .map((span) => span.closest('[role="button"], button, a') || span)
        .filter(Boolean)
        .filter((btn) => {
          // Exclude form submit buttons or buttons inside forms from scrolling to form
          if (btn.getAttribute('type') === 'submit' || btn.closest('form')) {
            return false;
          }
          return true;
        });
      const buttons = explicit.length ? Array.from(explicit) : fallback;

      buttons.forEach((btn) => {
        if (btn.dataset.korreBound) return; // avoid double-binding on re-init
        btn.dataset.korreBound = 'true';

        btn.classList.add('korre-clickable');
        btn.setAttribute('role', 'button');
        btn.setAttribute('tabindex', '0');
        btn.setAttribute('aria-label', 'Join the waitlist');

        ButtonInteractions.attachRipple(btn);

        const activate = (e) => {
          if (e) e.preventDefault();
          this.handleWaitlistClick();
        };

        btn.addEventListener('click', activate);
        btn.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            activate(e);
          }
        });
      });
    }

    handleWaitlistClick() {
      // Send the visitor straight to the real signup form instead of faking
      // an instant success — "Join Waitlist" should mean "let's get your
      // details", not a hollow confirmation.
      const formHeadings = findByText('.text', 'Join the Agricultural Revolution');
      if (!formHeadings.length) return;

      const formSection =
        formHeadings[0].closest('[style*="background-color"]') ||
        formHeadings[0].closest('section, div');
      if (!formSection) return;

      formSection.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'center',
      });

      // A brief, tasteful glow so the destination is unmistakable after the
      // scroll settles — skipped automatically under reduced motion since
      // the class is covered by the global reduced-motion override.
      formSection.classList.add('korre-highlight-pulse');
      formSection.addEventListener(
        'animationend',
        () => formSection.classList.remove('korre-highlight-pulse'),
        { once: true }
      );

      setTimeout(() => {
        const firstField = formSection.querySelector('input, select, textarea');
        firstField?.focus();
      }, 600);
    }

    handleNavigationLinks() {
      const navMap = {
        Story: 'Stop Food Waste',
        'Waste Crisis': 'The Invisible Waste',
        'Why Korè': 'Why Korè is Different',
        'How it Works?': 'Korè Flow',
        Team: 'For Society',
        FAQ: 'bottom',
        'Sell Direct': 'Why Korè is Different',
        'Pricing Tool': 'Korè Flow',
        Resources: 'The Invisible Waste',
        'Browse Picture': 'Stop Food Waste',
        Subscribe: 'Join the Agricultural Revolution',
        'Corporate Orders': 'Korè Flow',
        'About Us': 'about',
        Blog: 'Stop Food Waste',
        Careers: 'Stop Food Waste',
        Contact: 'Join the Agricultural Revolution',
        'Privacy Policy': 'privacy',
        'Terms & Condition': 'terms',
      };

      Object.keys(navMap).forEach((label) => {
        const links = findByText('.text', label);
        links.forEach((el) => {
          const target = el.closest('[role="button"], a') || el;
          if (!target || target.dataset.korreNavBound) return;
          target.dataset.korreNavBound = 'true';

          target.classList.add('korre-nav-link');
          target.style.cursor = 'pointer';
          target.setAttribute('role', target.getAttribute('role') || 'link');
          target.setAttribute('tabindex', target.getAttribute('tabindex') || '0');

          const go = () => this.navigateTo(navMap[label]);
          target.addEventListener('click', go);
          target.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              go();
            }
          });
        });
      });

      this.setupActiveNavTracking(navMap);
    }

    /** Highlights the nav link whose section is currently in view. */
    setupActiveNavTracking(navMap) {
      const entries = Object.entries(navMap).filter(([, marker]) => marker !== 'bottom');
      if (!entries.length || !('IntersectionObserver' in window)) return;

      const sectionTargets = entries
        .map(([label, marker]) => {
          const el = Array.from(document.querySelectorAll('.text')).find((n) =>
            n.textContent.includes(marker)
          );
          return el ? { label, section: el.closest('section, div') || el } : null;
        })
        .filter(Boolean);

      if (!sectionTargets.length) return;

      const observer = new IntersectionObserver(
        (observed) => {
          observed.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const match = sectionTargets.find((t) => t.section === entry.target);
            if (!match) return;
            findByText('.text', match.label).forEach((el) => {
              const link = el.closest('.korre-nav-link') || el.parentElement;
              document
                .querySelectorAll('.korre-nav-link.is-active')
                .forEach((active) => active.classList.remove('is-active'));
              link?.classList.add('is-active');
            });
          });
        },
        { threshold: 0.4 }
      );

      sectionTargets.forEach((t) => observer.observe(t.section));
    }

    navigateTo(marker) {
      if (marker === 'bottom') {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
        return;
      }

      if (marker === 'about') {
        window.location.href = 'about.html';
        return;
      }

      if (marker === 'privacy') {
        window.location.href = 'privacy.html';
        return;
      }

      if (marker === 'terms') {
        window.location.href = 'terms.html';
        return;
      }

      const targetElement = Array.from(document.querySelectorAll('.text')).find((el) =>
        el.textContent.includes(marker)
      );

      if (!targetElement) {
        notifications.show('That section is coming soon. Thanks for checking!', 'info');
        return;
      }

      const headerOffset = 88; // adjust to match a sticky header's real height
      const top =
        targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }

    handleSmoothAnchorScrolling() {
      document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;
        const id = anchor.getAttribute('href').slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      });
    }
  }

  // ==========================================================================
  // SCROLL REVEAL ANIMATIONS (staggered, one-shot)
  // ==========================================================================

  class ScrollAnimations {
    constructor() {
      if (prefersReducedMotion) return; // respect user preference — skip entirely
      this.init();
    }

    init() {
      const candidates = document.querySelectorAll(
        '.text, [style*="display: flex"], [style*="display:flex"]'
      );

      // Group elements by their parent so siblings stagger together rather
      // than every single text node animating independently (which reads
      // as noisy rather than orchestrated).
      const groups = new Map();
      candidates.forEach((el) => {
        if (!el.parentElement || el.parentElement.classList.contains('page-content')) return;
        const parent = el.parentElement;
        if (!groups.has(parent)) groups.set(parent, []);
        groups.get(parent).push(el);
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      groups.forEach((elements) => {
        elements.forEach((el, i) => {
          el.classList.add('korre-reveal');
          el.style.transitionDelay = `${Math.min(i * 60, 240)}ms`;
          observer.observe(el);
        });
      });
    }
  }

  // ==========================================================================
  // STAT COUNTERS (count up from 0 the first time a stat scrolls into view)
  // ==========================================================================

  class StatCounters {
    constructor() {
      if (prefersReducedMotion) return;
      this.stats = this.collectStats();
      if (!this.stats.length) return;
      this.observe();
    }

    /** A "stat" is short text that's essentially a number — optionally with
     *  a leading sign or trailing unit, e.g. "10,000+", "98%", "4.9★" — set
     *  in a large display size (the classic hero-metric pattern). */
    collectStats() {
      const NUMERIC_PATTERN = /^([+-]?)([\d.,]+)\s*([^\d\s]*)$/;
      return Array.from(document.querySelectorAll('.text'))
        .map((el) => {
          const raw = el.textContent.trim();
          const match = raw.match(NUMERIC_PATTERN);
          if (!match) return null;

          const fontSize = parseFloat(window.getComputedStyle(el).fontSize);
          if (!fontSize || fontSize < 32) return null; // only hero-scale numerals

          const [, sign, numberPart, suffix] = match;
          const target = parseFloat(numberPart.replace(/,/g, ''));
          if (Number.isNaN(target)) return null;

          const decimals = (numberPart.split('.')[1] || '').length;
          return { el, target, sign, suffix, decimals };
        })
        .filter(Boolean);
    }

    observe() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const stat = this.stats.find((s) => s.el === entry.target);
            if (stat) this.animate(stat);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.6 }
      );

      this.stats.forEach((s) => {
        s.el.classList.add('korre-stat');
        observer.observe(s.el);
      });
    }

    animate(stat, duration = 1400) {
      const { el, target, sign, suffix, decimals } = stat;
      const start = performance.now();
      el.classList.add('is-counting');

      const format = (value) =>
        `${sign}${value.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}${suffix}`;

      const tick = (now) => {
        const progress = clamp((now - start) / duration, 0, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = format(target * eased);
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = format(target); // land exactly on the real value
        }
      };
      requestAnimationFrame(tick);
    }
  }

  // ==========================================================================
  // FORM INTERACTIONS
  // ==========================================================================

  class FormInteractions {
    constructor() {
      this.init();
    }

    init() {
      // document.querySelectorAll('form').forEach((form) => {
      //   form.addEventListener('submit', (e) => {
      //     e.preventDefault();
      //     this.handleFormSubmit(form);
      //   });
      // });

      document
        .querySelectorAll('input[type="email"], input[type="text"], select')
        .forEach((input) => {
          input.addEventListener('focus', () => {
            input.style.borderColor = '#3fa97e';
            input.style.boxShadow = '0 0 0 3px rgba(63, 169, 126, 0.15)';
            this.clearFieldError(input);
          });
          input.addEventListener('blur', () => {
            input.style.boxShadow = 'none';
          });
        });

      this.setupRoleSelect();
    }

    /** Toggles a `.has-value` class instead of writing inline color, so the
     *  "placeholder vs chosen" styling lives in CSS and can't be fought by
     *  other rules the way an inline style + !important pair would. Wrapped
     *  defensively since it leans on a specific inline-style selector that
     *  could stop matching if the surrounding markup changes. */
    setupRoleSelect() {
      const roleSelect = document.getElementById('waitlist-role');
      if (!roleSelect) return;

      try {
        const syncRoleState = () => {
          roleSelect.classList.toggle('has-value', Boolean(roleSelect.value));
        };
        roleSelect.addEventListener('change', syncRoleState);
        syncRoleState();

        const rolePrompt = roleSelect
          .closest('div[style*="row-gap: 16px"]')
          ?.querySelector('.text');
        if (rolePrompt && rolePrompt.textContent.trim() !== "I'm a ...") {
          rolePrompt.textContent = "I'm a ...";
        }
      } catch (err) {
        console.warn('[Korre] Role select enhancement skipped:', err);
      }
    }

    clearFieldError(input) {
      const err = input.parentElement?.querySelector('.korre-field-error');
      err?.remove();
      input.style.borderColor = '';
    }

    showFieldError(input, message) {
      this.clearFieldError(input);
      input.style.borderColor = '#c0473f';
      const err = document.createElement('div');
      err.className = 'korre-field-error';
      err.textContent = message;
      input.insertAdjacentElement('afterend', err);
    }

    validate(form) {
      let valid = true;
      const email = form.querySelector('input[type="email"]');
      if (email && email.value.trim()) {
        const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
        if (!looksLikeEmail) {
          this.showFieldError(email, 'Enter a valid email address.');
          valid = false;
        }
      }
      return valid;
    }

    handleFormSubmit(form) {
      if (!this.validate(form)) {
        notifications.show('Please fix the highlighted field.', 'error');
        return;
      }

      const submitBtn = form.querySelector('[type="submit"], button');
      const originalLabel = submitBtn?.textContent;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }

      // Swap this block for a real fetch() to your endpoint:
      // const payload = Object.fromEntries(new FormData(form));
      // await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify(payload) });
      setTimeout(() => {
        notifications.show('Thanks — your submission is in.', 'success');
        form.reset();
        form.querySelector('#waitlist-role')?.classList.remove('has-value');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        }
      }, 500);
    }
  }

  // ==========================================================================
  // FAQ INTERACTIONS
  // ==========================================================================

  class FAQInteractions {
    constructor() {
      this.openPanels = new Set();
      this.init();

      window.addEventListener(
        'resize',
        debounce(() => this.recomputeOpenPanels(), 150)
      );
    }

    init() {
      const heading = findByText('.text', 'Frequently Asked Questions')[0];
      if (!heading) return;

      const faqSection = heading.closest('div')?.nextElementSibling;
      if (!faqSection) return;

      const cards = Array.from(
        faqSection.querySelectorAll(
          'div[style*="height: 65px"][style*="border-style: solid"]'
        )
      ).filter((card) => card.querySelector('.text') && card.querySelector('svg'));

      cards.forEach((card, index) => {
        if (card.dataset.faqBound) return;

        card.dataset.faqBound = 'true';
        card.classList.add('korre-faq-card');
        card.style.position = 'relative';
        card.style.height = 'auto';
        card.style.minHeight = '65px';

        const header = document.createElement('div');
        header.className = 'korre-faq-header';
        header.style.position = 'relative';
        header.style.cursor = 'pointer';
        header.setAttribute('role', 'button');
        header.setAttribute('tabindex', '0');
        header.setAttribute('aria-expanded', 'false');

        while (card.firstChild) {
          header.appendChild(card.firstChild);
        }
        card.appendChild(header);

        const question = header.querySelector('.text')?.textContent.trim() ?? '';

        const answer = document.createElement('div');
        answer.className = 'korre-faq-answer';
        answer.id = `faq-answer-${index}`;
        answer.setAttribute('role', 'region');
        answer.setAttribute('aria-hidden', 'true');
        answer.innerHTML = `${this.answerFor(question)}`;

        card.appendChild(answer);
        header.setAttribute('aria-controls', answer.id);
        card.setAttribute('aria-expanded', 'false');

        const arrow = header.querySelector('svg');
        arrow?.classList.add('korre-faq-arrow');

        answer.addEventListener('click', (e) => e.stopPropagation());

        const toggle = () => {
          const opening = !card.classList.contains('is-open');

          card.classList.toggle('is-open', opening);
          header.setAttribute('aria-expanded', opening);
          card.setAttribute('aria-expanded', opening);
          answer.setAttribute('aria-hidden', !opening);

          this.animate(answer, opening);

          if (opening) {
            this.openPanels.add(answer);

            setTimeout(() => {
              card.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth',
                block: 'nearest',
              });
            }, 180);
          } else {
            this.openPanels.delete(answer);
          }
        };

        header.addEventListener('click', toggle);
        header.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        });
      });
    }

    animate(answer, open) {
      if (open) {
        answer.style.display = 'block';
        answer.style.maxHeight = '0px';

        requestAnimationFrame(() => {
          answer.style.maxHeight = `${answer.scrollHeight}px`;
        });
      } else {
        answer.style.maxHeight = `${answer.scrollHeight}px`;

        requestAnimationFrame(() => {
          answer.style.maxHeight = '0px';
        });
      }
    }

    recomputeOpenPanels() {
      this.openPanels.forEach((answer) => {
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      });
    }

    answerFor(question) {
      const answers = {
        'when is korè launching?':
          'Korè is launching soon with a rolling pilot across key West African markets. Join the waitlist for priority access and launch updates.',

        'how much does it cost to use korè?':
          'Early access is free. Korè uses transparent transaction fees instead of hidden subscriptions, so you only pay when you transact.',

        'how do i know the produce is actually fresh?':
          'Every listing includes freshness information, timestamps, and supplier ratings to help you make informed purchasing decisions.',

        'what if i want to buy small quantities?':
          'Korè supports both bulk and small-quantity purchases by matching buyers with nearby sellers who can fulfill orders efficiently.',

        'is my payment protected?':
          'Yes. Payments are secured through our escrow system and released only after successful delivery confirmation.',

        'how does the location first discovery work?':
          'Korè prioritizes nearby suppliers first, helping buyers receive fresher produce with faster and cheaper deliveries.',

        'can i sell to both restaurants and households?':
          'Absolutely. Sellers can serve restaurants, households, retailers, and other buyers through the same marketplace.',

        "what if there's a dispute?":
          'Our support team reviews disputes fairly using transaction records and marketplace policies to protect both buyers and sellers.',
      };

      return (
        answers[normalizeText(question)] ??
        "We're still preparing the answer for this question. Please check back soon."
      );
    }
  }

  // ==========================================================================
  // PARALLAX (rAF-throttled, reduced-motion + touch/narrow-viewport aware)
  // ==========================================================================

  class ParallaxEffect {
    constructor() {
      if (prefersReducedMotion) return;
      this.elements = Array.from(document.querySelectorAll('[style*="background-image"]'));
      if (!this.elements.length) return;

      this.elements.forEach((el) => {
        el.style.willChange = 'background-position';
      });

      // A subtle desktop flourish that's barely perceptible while
      // swipe-scrolling on a phone, but still costs a scroll listener and
      // reflow there — so it's switched off on coarse-pointer devices and
      // narrow/tablet-and-below viewports, and re-checked on resize so it
      // reacts correctly to rotation or a resized window.
      this.coarseQuery = window.matchMedia('(pointer: coarse)');
      this.onScroll = rafThrottle(() => this.update());

      const recheck = () => this.bind();
      if (this.coarseQuery.addEventListener) {
        this.coarseQuery.addEventListener('change', recheck);
      } else {
        this.coarseQuery.addListener(recheck); // older Safari fallback
      }
      window.addEventListener('resize', debounce(recheck, 200));

      this.bind();
    }

    shouldRun() {
      return !this.coarseQuery.matches && window.innerWidth > 768;
    }

    bind() {
      window.removeEventListener('scroll', this.onScroll);
      if (this.shouldRun()) {
        window.addEventListener('scroll', this.onScroll, { passive: true });
        this.update();
      } else {
        // Reset to the natural position rather than leaving elements
        // parked at whatever offset they had when parallax switched off.
        this.elements.forEach((element) => {
          element.style.backgroundPosition = '';
        });
      }
    }

    update() {
      const scrollTop = window.pageYOffset;
      const viewportHeight = window.innerHeight;

      this.elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollTop;
        const elementHeight = rect.height;

        if (scrollTop + viewportHeight > elementTop && scrollTop < elementTop + elementHeight) {
          const yOffset = (scrollTop - elementTop) * 0.35;
          element.style.backgroundPosition = `center ${yOffset}px`;
        }
      });
    }
  }

  // ==========================================================================
  // KEYBOARD NAVIGATION (guarded — no more throwing on missing instance)
  // ==========================================================================

  function setupKeyboardNavigation(getCarousel) {
    document.addEventListener('keydown', (e) => {
      const carousel = getCarousel();

      if (e.key === 'Escape') {
        document.querySelectorAll('.korre-notification').forEach((n) => n.remove());
        return;
      }

      // Only steer the carousel with arrow keys when nothing more specific,
      // like a text input, currently has focus — so we don't hijack arrow
      // keys while someone is typing elsewhere on the page.
      const activeTag = document.activeElement?.tagName;
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;
      if (!carousel) return;

      if (e.key === 'ArrowLeft') {
        carousel.prevSlide();
      } else if (e.key === 'ArrowRight') {
        carousel.nextSlide();
      }
    });
  }

  // ==========================================================================
  // MAIN INITIALIZATION (single source of truth — no duplicate instances)
  // ==========================================================================

  function init() {
    const carouselRoot = document.querySelector('.hero-carousel');
    const carousel = carouselRoot ? new HeroCarousel(carouselRoot) : null;

    new ButtonInteractions();
    new ScrollAnimations();
    new StatCounters();
    new FormInteractions();
    new FAQInteractions();
    new ParallaxEffect();
    setupKeyboardNavigation(() => carousel);

    // Exposed for debugging and React integration
    window.Korre = { carousel, notifications, init };
  }

  // Auto-init for non-React environments (only if not explicitly prevented)
  if (!window.KORRE_DISABLE_AUTO_INIT) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init(); // Script loaded after DOM was already ready.
    }
  } else {
    // If auto-init is disabled, still expose init function for manual call
    window.Korre = { init };
  }
})();