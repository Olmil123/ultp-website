import { el } from '@/utils/createElement';

const TAX_KEYS = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9', 't10', 't11', 't12'];

const FINTECH_KEYS = ['f1', 'f2', 'f3', 'f4', 'f5'];

export const createServicesPage = () =>
  el('section', { class: 'page page-services' }, [
    el('div', { class: 'container' }, [
      el('h1', { class: 'section__title', 'data-lang': 'services.title' }),

      //! Tax practice
      el('article', { class: 'service-block' }, [
        el('h2', { class: 'service-block__title', 'data-lang': 'services.tax.title' }),
        el(
          'ul',
          { class: 'list' },
          TAX_KEYS.map((k) => el('li', { 'data-lang': `services.tax.${k}` })),
        ),
      ]),

      //! Technologies
      el('article', { class: 'service-block' }, [
        el('h2', { class: 'service-block__title', 'data-lang': 'services.tech.title' }),
        el('p', { class: 'service-block__text', 'data-lang': 'services.tech.text' }),
      ]),
      //! Fintech
      el('article', { class: 'service-block' }, [
        el('h2', { class: 'service-block__title', 'data-lang': 'services.fintech.title' }),
        el(
          'ul',
          { class: 'list' },
          FINTECH_KEYS.map((k) => el('li', { 'data-lang': `services.fintech.${k}` })),
        ),
      ]),
      //! Compliance
      el('article', { class: 'service-block' }, [
        el('h2', { class: 'service-block__title', 'data-lang': 'services.compliance.title' }),
        el('p', { class: 'service-block__text', 'data-lang': 'services.compliance.text' }),
      ]),
      //! CTA
      el('div', { class: 'cta' }, [
        el('p', { 'data-lang': 'services.cta' }),
        el('button', {
          class: 'btn btn--primary',
          type: 'button',
          'data-open-modal': 'question',
          'data-lang': 'services.ctaBtn',
        }),
      ]),
    ]),
  ]);
