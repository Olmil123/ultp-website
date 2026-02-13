import { el } from '@/utils/createElement';

export const createCaseCryptoEducationPage = () =>
  el('section', { class: 'page page-case' }, [
    el('div', { class: 'container' }, [
      el('section', { class: 'case-hero' }, [
        el('div', { class: 'case-hero__content' }, [
          el('p', { class: 'case-hero__eyebrow', 'data-lang': 'case3.hero.eyebrow' }),
          el('h1', { class: 'case-hero__title', 'data-lang': 'case3.hero.title' }),
          el('p', { class: 'case-hero__subtitle', 'data-lang': 'case3.hero.subtitle' }),
          el('p', { class: 'case-hero__lead', 'data-lang': 'case3.hero.lead' }),
        ]),
        el(
          'div',
          {
            class: 'case-hero__media',
            style: { '--case-hero-image': "url('/assets/ico/GDPR-scaled.jpg')" },
          },
          [el('span', { class: 'case-hero__badge', 'data-lang': 'case3.hero.mediaLabel' })],
        ),
      ]),

      el('section', { class: 'case-section' }, [
        el('h2', { class: 'case-section__title', 'data-lang': 'case3.overview.title' }),
        el('p', { class: 'case-section__text', 'data-lang': 'case3.overview.text' }),
      ]),

      el('section', { class: 'case-section' }, [
        el('h2', { class: 'case-section__title', 'data-lang': 'case3.solution.title' }),
        el('p', { class: 'case-section__text', 'data-lang': 'case3.solution.text' }),
        el('ul', { class: 'case-section__list' }, [
          el('li', { 'data-lang': 'case3.solution.items.i1' }),
          el('li', { 'data-lang': 'case3.solution.items.i2' }),
          el('li', { 'data-lang': 'case3.solution.items.i3' }),
          el('li', { 'data-lang': 'case3.solution.items.i4' }),
        ]),
        el('p', { class: 'case-section__text case-section__text--muted', 'data-lang': 'case3.solution.outcome' }),
      ]),

      el('section', { class: 'case-section' }, [
        el('h2', { class: 'case-section__title', 'data-lang': 'case3.result.title' }),
        el('p', { class: 'case-section__text', 'data-lang': 'case3.result.text' }),
      ]),

      el('section', { class: 'case-cta' }, [
        el('h2', { class: 'case-cta__title', 'data-lang': 'case3.cta.title' }),
        el('button', {
          class: 'btn btn--primary',
          type: 'button',
          'data-open-modal': 'question',
          'data-lang': 'case3.cta.button',
        }),
      ]),
    ]),
  ]);
