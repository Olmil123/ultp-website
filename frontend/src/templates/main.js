import { el } from '@/utils/createElement';

export const createMain = () => {
  const hero = el('section', { class: 'hero', id: 'about' }, [
    el('div', { class: 'container hero__inner' }, [
      el('div', { class: 'hero__content' }, [
        el('p', { class: 'hero__subtitle', 'data-lang': 'home.hero.subtitle' }),
        el('h1', { class: 'hero__title hero__title--blur', 'data-lang': 'home.hero.lead' }),

        el('ul', { class: 'hero__bullets' }, [
          el('li', { class: 'hero__bullet' }, [
            el('span', { class: 'hero__check' }, '✓'),
            el('span', { 'data-lang': 'home.hero.p1' }),
          ]),
          el('li', { class: 'hero__bullet' }, [
            el('span', { class: 'hero__check' }, '✓'),
            el('span', { 'data-lang': 'home.hero.p2' }),
          ]),
          el('li', { class: 'hero__bullet' }, [
            el('span', { class: 'hero__check' }, '✓'),
            el('span', { 'data-lang': 'home.hero.p3' }),
          ]),
          el('li', { class: 'hero__bullet' }, [
            el('span', { class: 'hero__check' }, '✓'),
            el('span', { 'data-lang': 'home.hero.cta' }),
          ]),
        ]),
      ]),

      el('div', { class: 'hero__photo' }, [
        el('p', { class: 'hero__brand-side', 'data-lang': 'home.hero.brand' }),
        el('div', { class: 'hero__photo-wrap' }, [
          el('img', { src: '/assets/ico/logo.jpg', alt: 'Svitlana Rudiuk', class: 'hero__img' }),
        ]),
        el('div', { class: 'hero__card' }, [
          el('strong', { class: 'hero__card-title', 'data-lang': 'home.hero.cardName' }),
          el('span', { class: 'hero__card-desc', 'data-lang': 'home.hero.cardDesc' }),
          el('a', {
            href: '/about',
            class: 'hero__card-link',
            'data-link': '',
            'data-lang': 'home.hero.cardLink',
          }),
        ]),
      ]),
    ]),
  ]);

  const advantages = el('section', { class: 'section section--advantages', id: 'advantages' }, [
    el('div', { class: 'container' }, [
      el('h2', { class: 'section__title', 'data-lang': 'home.advantages.title' }),
      el('ul', { class: 'advantages__list' }, [
        el('li', { class: 'advantages__item', 'data-lang': 'home.advantages.a1' }),
        el('li', { class: 'advantages__item', 'data-lang': 'home.advantages.a2' }),
        el('li', { class: 'advantages__item', 'data-lang': 'home.advantages.a3' }),
      ]),
    ]),
  ]);

  const practices = el('section', { class: 'section section--alt', id: 'practices' }, [
    el('div', { class: 'container' }, [
      el('h2', { class: 'section__title', 'data-lang': 'home.practices.title' }),
      el('ul', { class: 'chips' }, [
        el('li', { class: 'chip', 'data-lang': 'home.practices.p1' }),
        el('li', { class: 'chip', 'data-lang': 'home.practices.p2' }),
        el('li', { class: 'chip', 'data-lang': 'home.practices.p3' }),
        el('li', { class: 'chip', 'data-lang': 'home.practices.p4' }),
        el('li', { class: 'chip', 'data-lang': 'home.practices.p5' }),
      ]),
    ]),
  ]);

  const news = el('section', { class: 'section section--alt', id: 'news' }, [
    el('div', { class: 'container' }, [
      el('h2', { class: 'section__title', 'data-lang': 'nav.news' }),
      el('p', { class: 'section__placeholder', 'data-lang': 'home.news.placeholder' }),
    ]),
  ]);

  const cases = el('section', { class: 'section', id: 'cases' }, [
    el('div', { class: 'container' }, [
      el('h2', { class: 'section__title', 'data-lang': 'nav.cases' }),
      el('p', { class: 'section__placeholder', 'data-lang': 'home.cases.placeholder' }),
    ]),
  ]);

  const contacts = el('section', { class: 'section', id: 'contacts' }, [
    el('div', { class: 'container' }, [
      el('h2', { class: 'section__title', 'data-lang': 'home.contacts.title' }),
      el('div', { class: 'contacts' }, [
        el('p', {}, [
          el('span', { 'data-lang': 'home.contacts.emailLabel' }),
          ' rudiuksvitlana@gmail.com',
        ]),
        el('p', {}, [
          el('span', { 'data-lang': 'home.contacts.telLabel' }),
          ' ',
          el(
            'a',
            {
              href: 'https://wa.me/380633966786',
              target: '_blank',
              rel: 'noreferrer',
              class: 'contacts__icon-link',
              'aria-label': 'WhatsApp',
            },
            [
              el('img', {
                src: '/assets/icons/whatsapp.svg',
                alt: '',
                class: 'contacts__icon',
                width: 16,
                height: 16,
              }),
            ],
          ),
          ' +380633966786',
        ]),
        el('p', {}, [el('span', { 'data-lang': 'home.contacts.tgLabel' }), ' dont_tax_me']),
      ]),
    ]),
  ]);

  return el('main', { class: 'app-main', id: 'main-content' }, [
    hero,
    advantages,
    practices,
    news,
    cases,
    contacts,
  ]);
};

export const createModal = () =>
  el(
    'div',
    {
      class: 'modal is-hidden',
      id: 'questionModal',
      'aria-hidden': 'true',
    },
    [
      el('div', { class: 'modal__backdrop', 'data-close-modal': '' }),
      el('div', { class: 'modal__dialog', role: 'dialog', 'aria-modal': 'true' }, [
        el('div', { class: 'modal__head' }, [
          el('h3', { class: 'modal__title', 'data-lang': 'modal.title' }),
          el(
            'button',
            {
              class: 'modal__close',
              type: 'button',
              'data-close-modal': '',
            },
            '✕',
          ),
        ]),
        el('form', { class: 'form', id: 'questionForm' }, [
          el('label', { class: 'form__field' }, [
            el('span', { 'data-lang': 'modal.name' }),
            el('input', { type: 'text', name: 'name', required: true }),
          ]),
          el('label', { class: 'form__field' }, [
            el('span', { 'data-lang': 'modal.email' }),
            el('input', { type: 'email', name: 'email', required: true }),
          ]),
          el('label', { class: 'form__field' }, [
            el('span', { 'data-lang': 'modal.message' }),
            el('textarea', { name: 'message', rows: 4, required: true }),
          ]),
          el('button', { class: 'btn', type: 'submit', 'data-lang': 'modal.send' }),
          el('p', { class: 'form__hint', id: 'formHint' }),
        ]),
      ]),
    ],
  );
