let revealObserver = null;

const TARGET_SELECTOR = [
  '.app-main > .hero',
  '.app-main > .section',
  '.page-services .services-hero',
  '.page-services .services-section',
  '.page-services .service-card',
  '.page-services .services-cta',
  '.page-about .about__header',
  '.page-about .about__block',
  '.page-about .about__aside',
  '.page-privacy .privacy__hero',
  '.page-privacy .privacy__section',
  '.page-case .case-hero',
  '.page-case .case-section',
  '.page-case .case-cta',
  '.page-practices .cards .card',
  '.page-practices .section__title',
  '.cases-grid .case-card',
].join(', ');

const clearObserver = () => {
  if (!revealObserver) return;
  revealObserver.disconnect();
  revealObserver = null;
};

const revealNow = (nodes) => {
  nodes.forEach((node) => {
    node.classList.add('reveal-on-scroll', 'is-revealed');
  });
};

export const initScrollReveal = () => {
  const nodes = Array.from(document.querySelectorAll(TARGET_SELECTOR));
  if (!nodes.length) {
    clearObserver();
    return;
  }

  clearObserver();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealNow(nodes);
    return;
  }

  nodes.forEach((node, index) => {
    node.classList.add('reveal-on-scroll');
    node.classList.remove('is-revealed');
    node.style.setProperty('--reveal-delay', `${(index % 4) * 50}ms`);
  });

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -8% 0px',
    },
  );

  nodes.forEach((node) => revealObserver.observe(node));
};
