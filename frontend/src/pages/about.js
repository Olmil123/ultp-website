import { el } from '@/utils/createElement';

export const createAboutPage = () =>
  el('section', { class: 'page page-about' }, [
    el('div', { class: 'container about' }, [
      el('header', { class: 'about__header' }, [
        el('p', { class: 'about__eyebrow', 'data-lang': 'nav.about' }),
        el('h1', { class: 'about__title', 'data-lang': 'about.title' }),
        el('p', { class: 'about__lead', 'data-lang': 'about.lead', 'data-lang-html': '' }),
      ]),

      el('div', { class: 'about__layout' }, [
        el('div', { class: 'about__content' }, [
          el('h2', { class: 'about__subtitle', 'data-lang': 'about.founder.title' }),
          el('p', { class: 'about__text', 'data-lang': 'about.founder.text', 'data-lang-html': '' }),
          el('p', { class: 'about__text', 'data-lang': 'about.founder.experience', 'data-lang-html': '' }),
          el('p', {
            class: 'about__text',
            'data-lang': 'about.founder.specialization',
            'data-lang-html': '',
          }),

          el('h2', { class: 'about__subtitle', 'data-lang': 'about.web3.title' }),
          el('p', { class: 'about__text', 'data-lang': 'about.web3.text', 'data-lang-html': '' }),
          el('p', { class: 'about__text', 'data-lang': 'about.speaker', 'data-lang-html': '' }),
        ]),

        el('aside', { class: 'about__aside' }, [
          el('div', { class: 'about__photo' }, [
            el('img', {
              src: '/assets/ico/2.jpg',
              alt: 'Svitlana Rudiuk',
              class: 'about__img',
              loading: 'lazy',
            }),
          ]),

          el('div', { class: 'about__credits' }, [
            el('h2', { class: 'about__subtitle', 'data-lang': 'about.credits.title' }),
            el('ul', { class: 'about__list' }, [
              el('li', { 'data-lang': 'about.credits.partner' }),
              el('li', { 'data-lang': 'about.credits.association' }),
              el('li', { 'data-lang': 'about.credits.beps' }),
            ]),
          ]),
        ]),
      ]),
    ]),
  ]);
