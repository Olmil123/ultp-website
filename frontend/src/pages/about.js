import { el } from '@/utils/createElement';
import { createBreadcrumbs } from '@/components/breadcrumbs';

const createPartnerCard = ({
  name,
  company,
  companyHref,
  roleKey,
  image,
  alt,
  width,
  height,
  textKey,
  linkHref,
  linkLabel,
}) =>
  el('article', { class: 'about__partner-card' }, [
    el('div', { class: 'about__partner-media' }, [
      el('img', {
        src: image,
        alt,
        class: 'about__partner-img',
        width,
        height,
        loading: 'lazy',
        decoding: 'async',
      }),
      el('div', { class: 'about__partner-overlay' }, [
        el('p', { class: 'about__partner-name' }, name),
        companyHref
          ? el(
              'a',
              {
                class: 'about__partner-company about__partner-company-link',
                href: companyHref,
                target: '_blank',
                rel: 'noreferrer',
              },
              [company],
            )
          : el('span', { class: 'about__partner-company' }, company),
      ]),
    ]),
    el('div', { class: 'about__partner-body' }, [
      el('p', {
        class: 'about__partner-role',
        'data-lang': roleKey,
      }),
      el('p', {
        class: 'about__text about__partner-text',
        'data-lang': textKey,
        'data-lang-html': '',
      }),
      el('div', { class: 'about__partner-actions' }, [
        el(
          'a',
          {
            class: 'about__partner-link',
            href: linkHref,
            target: '_blank',
            rel: 'noreferrer',
          },
          [linkLabel],
        ),
      ]),
    ]),
  ]);

export const createAboutPage = () =>
  el('section', { class: 'page page-about' }, [
    el('div', { class: 'container about' }, [
      createBreadcrumbs('/about'),
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

          el('div', { class: 'about__block about__block--web3' }, [
            el('h2', { class: 'about__subtitle', 'data-lang': 'about.web3.title' }),
            el('p', { class: 'about__text', 'data-lang': 'about.web3.text', 'data-lang-html': '' }),
          ]),

          el('div', { class: 'about__block about__block--speaker' }, [
            el('p', { class: 'about__text', 'data-lang': 'about.speaker', 'data-lang-html': '' }),
          ]),

          el('div', { class: 'about__block about__block--results' }, [
            el('h2', { class: 'about__subtitle', 'data-lang': 'about.results.title' }),
            el('div', { class: 'about__results-grid' }, [
              el('article', { class: 'about__result-card' }, [
                el('h3', { class: 'about__result-title', 'data-lang': 'about.results.i1.title' }),
                el('p', { class: 'about__result-text', 'data-lang': 'about.results.i1.text' }),
              ]),
              el('article', { class: 'about__result-card' }, [
                el('h3', { class: 'about__result-title', 'data-lang': 'about.results.i2.title' }),
                el('p', { class: 'about__result-text', 'data-lang': 'about.results.i2.text' }),
              ]),
              el('article', { class: 'about__result-card' }, [
                el('h3', { class: 'about__result-title', 'data-lang': 'about.results.i3.title' }),
                el('p', { class: 'about__result-text', 'data-lang': 'about.results.i3.text' }),
              ]),
            ]),
          ]),
        ]),

        el('aside', { class: 'about__aside' }, [
          el('div', { class: 'about__photo' }, [
            el('img', {
              src: '/assets/ico/2.jpg',
              alt: 'Svitlana Rudiuk',
              class: 'about__img',
              width: 640,
              height: 640,
              loading: 'lazy',
              decoding: 'async',
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

        el('section', { class: 'about__section about__section--partners' }, [
          el('div', { class: 'about__block about__block--partners' }, [
            el('h2', { class: 'about__subtitle', 'data-lang': 'about.partners.title' }),
            el('div', { class: 'about__partners-grid' }, [
              createPartnerCard({
                name: 'Mary Prokhorova',
                company: 'InDevLab',
                companyHref: 'https://indevlab.com/',
                roleKey: 'about.partners.maryRole',
                image: '/assets/ico/mary.jpg',
                alt: 'Mary Prokhorova',
                width: 800,
                height: 800,
                textKey: 'about.partners.mary',
                linkHref: 'https://www.linkedin.com/in/maryprokhorova/?originalSubdomain=ua',
                linkLabel: 'LinkedIn',
              }),
              createPartnerCard({
                name: 'Oleksandr Volynskiy',
                company: 'Mindtec',
                companyHref: 'https://mindtec.com.ua/',
                roleKey: 'about.partners.oleksandrRole',
                image: '/assets/ico/oleksandr.jpg',
                alt: 'Oleksandr Volynskiy',
                width: 500,
                height: 500,
                textKey: 'about.partners.oleksandr',
                linkHref: 'https://www.linkedin.com/in/oleksandr-volynskiy/',
                linkLabel: 'LinkedIn',
              }),
            ]),
          ]),
        ]),
      ]),
    ]),
  ]);
