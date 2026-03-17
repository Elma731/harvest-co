(function () {
  'use strict';

  /* ── Scroll-to-top button ─────────────────────────────────── */
  var scrollBtn = document.getElementById('hc-scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', function () {
      scrollBtn.classList.toggle('is-visible', window.scrollY > 300);
    }, { passive: true });

    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Scroll reveal ────────────────────────────────────────── */

  // Individual elements revealed as they enter the viewport
  var soloSelectors = [
    '.hc-hero-title__inner',
    '.hc-about-preview__content',
    '.hc-about-preview__image',
    '.hc-newsletter__inner',
    '.hc-menu-preview__header',
    '.hc-menu-preview__cta',
    '.hc-testimonials__heading',
    '.hc-gallery__heading',
    '.hc-order-hero__content',
    '.hc-how-it-works__heading',
    '.hc-fan-favourites__heading',
    '.hc-order-cta__heading',
    '.hc-order-cta__sub',
    '.hc-order-cta__btn',
    '.hc-order-home__heading',
    '.hc-order-home__sub',
    '.hc-order-home__platforms',
    '.hc-order-home__pickup-note',
    '.hc-menu-section__image',
    '.hc-menu-section__header',
    '.hc-dish-list',
    '.hc-split__content',
    '.hc-split__media',
    '.hc-story__inner',
    '.hc-contact__grid',
    '.hc-contact-hero',
    '.hc-map-placeholder',
    '.hc-page-header__title',
    '.hc-page-header__note',
  ].join(',');

  document.querySelectorAll(soloSelectors).forEach(function (el) {
    el.classList.add('reveal');
  });

  // Grid children — revealed with a stagger delay between each item
  var staggerContainers = [
    '.hc-testimonials__grid',
    '.hc-gallery__grid',
    '.hc-gallery-strip',
    '.hc-fan-favourites__grid',
    '.hc-how-it-works__steps',
    '.hc-menu-preview__grid',
    '.hc-order-options__grid',
  ];

  staggerContainers.forEach(function (selector) {
    var container = document.querySelector(selector);
    if (!container) return;
    Array.from(container.children).forEach(function (child, i) {
      child.classList.add('reveal');
      child.style.transitionDelay = (i * 0.1) + 's';
    });
  });

  /* ── IntersectionObserver ─────────────────────────────────── */
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything immediately for older browsers
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

})();

/* ── Mobile touch fix for nav toggle ────────────────────── */
(function () {
  var toggle = document.getElementById('hc-nav-toggle');
  if (toggle) {
    toggle.addEventListener('touchend', function (e) {
      e.preventDefault();
      toggle.click();
    });
  }
})();
