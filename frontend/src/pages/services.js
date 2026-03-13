import { el } from '@/utils/createElement';

const WORK_STEPS = [
  { key: 'analysis', icon: '/assets/icons/services/analysis.svg' },
  { key: 'risk', icon: '/assets/icons/services/risk.svg' },
  { key: 'solution', icon: '/assets/icons/services/solution.svg' },
  { key: 'delivery', icon: '/assets/icons/services/delivery.svg' },
  { key: 'support', icon: '/assets/icons/services/support.svg' },
];

const COST_ITEMS = [
  { key: 'complexity', icon: '/assets/icons/services/solution.svg' },
  { key: 'scope', icon: '/assets/icons/services/scope.svg' },
  { key: 'timeline', icon: '/assets/icons/services/timeline.svg' },
];

export const createServicesPage = () =>
  el('section', { class: 'page page-services' }, [
    el('div', { class: 'container' }, [
      el('header', { class: 'services-hero' }, [
        el('h1', { class: 'services__title', 'data-lang': 'services.title' }),
        el('p', { class: 'services__subtitle', 'data-lang': 'services.subtitle' }),
      ]),

      el('section', { class: 'services-section' }, [
        el('h2', {
          class: 'section__title section__title--bracket',
          'data-lang': 'services.work.title',
        }),
        el(
          'div',
          { class: 'services-grid services-grid--work' },
          WORK_STEPS.map((step) =>
            el('article', { class: 'service-card' }, [
              el('div', {
                class: 'service-card__icon',
                style: { '--icon': `url('${step.icon}')` },
              }),
              el('h3', {
                class: 'service-card__title',
                'data-lang': `services.work.${step.key}.title`,
              }),
              el('p', {
                class: 'service-card__text',
                'data-lang': `services.work.${step.key}.text`,
              }),
            ]),
          ),
        ),
      ]),

      el('section', { class: 'services-section' }, [
        el('h2', {
          class: 'section__title section__title--bracket',
          'data-lang': 'services.cost.title',
        }),
        el('p', { class: 'services__lead', 'data-lang': 'services.cost.lead' }),
        el(
          'div',
          { class: 'services-grid services-grid--cost' },
          COST_ITEMS.map((item) =>
            el('article', { class: 'service-card' }, [
              el('div', {
                class: 'service-card__icon',
                style: { '--icon': `url('${item.icon}')` },
              }),
              el('h3', { class: 'service-card__title', 'data-lang': `services.cost.${item.key}` }),
            ]),
          ),
        ),
        el('p', { class: 'services__note', 'data-lang': 'services.cost.note' }),
      ]),

      el('section', { class: 'services-cta' }, [
        el('p', { class: 'services-cta__text', 'data-lang': 'services.cta' }),
        el('button', {
          class: 'btn btn--primary',
          type: 'button',
          'data-open-modal': 'question',
          'data-lang': 'services.ctaBtn',
        }),
      ]),
    ]),
  ]);
