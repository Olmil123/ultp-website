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
          el('div', { class: 'about__block about__block--founder' }, [
            el('h2', { class: 'about__subtitle', 'data-lang': 'about.founder.title' }),
            el('p', {
              class: 'about__text',
              'data-lang': 'about.founder.text',
              'data-lang-html': '',
            }),
            el('p', {
              class: 'about__text',
              'data-lang': 'about.founder.experience',
              'data-lang-html': '',
            }),
            el('p', {
              class: 'about__text',
              'data-lang': 'about.founder.specialization',
              'data-lang-html': '',
            }),
          ]),

          el('div', { class: 'about__block about__block--partners' }, [
            el('h2', { class: 'about__subtitle', 'data-lang': 'about.partners.title' }),
            el('p', {
              class: 'about__text',
              'data-lang': 'about.partners.lead',
            }),
            el('p', {
              class: 'about__text',
              'data-lang': 'about.partners.self',
            }),
            el('p', {
              class: 'about__text',
              'data-lang': 'about.partners.mary',
            }),
            el('p', {
              class: 'about__text',
              'data-lang': 'about.partners.oleksandr',
            }),
          ]),

          el('div', { class: 'about__block about__block--web3' }, [
            el('h2', { class: 'about__subtitle', 'data-lang': 'about.web3.title' }),
            el('p', { class: 'about__text', 'data-lang': 'about.web3.text', 'data-lang-html': '' }),
          ]),

          el('div', { class: 'about__block about__block--speaker' }, [
            el('p', { class: 'about__text', 'data-lang': 'about.speaker', 'data-lang-html': '' }),
          ]),
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
          el('div', { class: 'about__photo-meta' }, [
            el('p', { class: 'about__photo-name', 'data-lang': 'about.founder.name' }),
            el('p', { class: 'about__photo-role', 'data-lang': 'about.founder.role' }),
          ]),

          el('div', { class: 'about__credits' }, [
            el('h2', { class: 'about__subtitle', 'data-lang': 'about.credits.title' }),
            el('ul', { class: 'about__list' }, [
              el('li', {}, [
                el(
                  'a',
                  {
                    class: 'about__badge-link',
                    href: 'https://uatechnetwork.com/#about-us',
                    target: '_blank',
                    rel: 'noreferrer',
                  },
                  [el('span', { 'data-lang': 'about.credits.partner' })],
                ),
              ]),
              el('li', {}, [
                el(
                  'a',
                  {
                    class: 'about__badge-link',
                    href: 'https://iaa.international/',
                    target: '_blank',
                    rel: 'noreferrer',
                  },
                  [el('span', { 'data-lang': 'about.credits.association' })],
                ),
              ]),
              el('li', {}, [
                el(
                  'a',
                  {
                    class: 'about__badge-link',
                    href: 'https://www.instagram.com/beps_space/',
                    target: '_blank',
                    rel: 'noreferrer',
                  },
                  [el('span', { 'data-lang': 'about.credits.beps' })],
                ),
              ]),
              el('li', {}, [
                el(
                  'a',
                  {
                    class: 'about__badge-link',
                    href: 'https://elit-web.ua/ua/',
                    target: '_blank',
                    rel: 'noreferrer',
                  },
                  [el('span', { 'data-lang': 'about.credits.elit' })],
                ),
              ]),
              el('li', {}, [
                el(
                  'a',
                  {
                    class: 'about__badge-link',
                    href: 'https://sabaiprotocol.com/about',
                    target: '_blank',
                    rel: 'noreferrer',
                  },
                  [el('span', { 'data-lang': 'about.credits.sabai' })],
                ),
              ]),
              el('li', {}, [
                el(
                  'a',
                  {
                    class: 'about__badge-link',
                    href: 'https://zon-group.com/',
                    target: '_blank',
                    rel: 'noreferrer',
                  },
                  [el('span', { 'data-lang': 'about.credits.zon' })],
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ]);
