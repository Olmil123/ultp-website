import { el } from '@/utils/createElement';
import { createPracticeCards } from '@/templates/practicesCards';
import { createCasesCards } from '@/templates/casesCards';

const REVIEW_SHOTS = [
  {
    src: '/assets/ico/view1.jpg',
    alt: 'Client review 1',
    width: 789,
    height: 217,
  },
  {
    src: '/assets/ico/view2.jpg',
    alt: 'Client review 2',
    width: 785,
    height: 202,
  },
  {
    src: '/assets/ico/view3.jpg',
    alt: 'Client review 3',
    width: 781,
    height: 184,
  },
];

const REVIEWS_LINK = 'https://www.linkedin.com/in/svitlana-rudiuk-8b77929b';

export const createMain = () => {
  const hero = el('section', { class: 'hero', id: 'about' }, [
    el('div', { class: 'container hero__inner' }, [
      el('div', { class: 'hero__content' }, [
        el('p', { class: 'hero__subtitle', 'data-lang': 'home.hero.subtitle' }),
        el('h2', { class: 'hero__title hero__title--blur', 'data-lang': 'home.hero.lead' }),
        el('p', { class: 'hero__lead', 'data-lang': 'home.hero.tagline' }),

        el('ul', { class: 'hero__bullets' }, [
          el('li', { class: 'hero__bullet' }, [
            el('span', { class: 'hero__check' }),
            el('span', { 'data-lang': 'home.hero.p1' }),
          ]),
          el('li', { class: 'hero__bullet' }, [
            el('span', { class: 'hero__check' }),
            el('span', { 'data-lang': 'home.hero.p2' }),
          ]),
          el('li', { class: 'hero__bullet' }, [
            el('span', { class: 'hero__check' }),
            el('span', { 'data-lang': 'home.hero.p3' }),
          ]),
          el('li', { class: 'hero__bullet' }, [
            el('span', { class: 'hero__check' }),
            el('span', { 'data-lang': 'home.hero.cta' }),
          ]),
        ]),
      ]),

      el('div', { class: 'hero__photo' }, [
        el('h1', { class: 'hero__brand-side', 'data-lang': 'home.hero.brand' }),
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
      el('h2', {
        class: 'section__title section__title--bracket',
        'data-lang': 'home.advantages.title',
      }),
      el('ul', { class: 'advantages__list' }, [
        el('li', { class: 'advantages__item', 'data-lang': 'home.advantages.a1' }),
        el('li', { class: 'advantages__item', 'data-lang': 'home.advantages.a2' }),
        el('li', { class: 'advantages__item', 'data-lang': 'home.advantages.a3' }),
      ]),
    ]),
  ]);

  const activePracticeId = window.location.hash ? window.location.hash.slice(1) : '';
  const practices = el('section', { class: 'section page-practices', id: 'practices' }, [
    el('div', { class: 'container' }, [
      el('h2', {
        class: 'section__title section__title--bracket',
        'data-lang': 'home.practices.title',
      }),
      createPracticeCards(activePracticeId),
    ]),
  ]);

  const cases = el('section', { class: 'section section--cases', id: 'cases' }, [
    el('div', { class: 'container' }, [
      el('h2', {
        class: 'section__title section__title--bracket',
        'data-lang': 'home.cases.title',
      }),
      createCasesCards({
        baseKey: 'home.cases',
        withButton: true,
        buttonHref: '/cases',
        links: {
          c1: '/cases/tokenization',
          c2: '/cases/digital-identity',
          c3: '/cases/crypto-education',
        },
      }),
    ]),
  ]);

  const reviews = el('section', { class: 'section section--reviews', id: 'reviews' }, [
    el('div', { class: 'container' }, [
      el('div', { class: 'reviews-cluster' }, [
        el('p', { class: 'reviews__eyebrow', 'data-lang': 'home.reviews.eyebrow' }),
        el('h2', { class: 'reviews__title', 'data-lang': 'home.reviews.title' }),
        el(
          'div',
          { class: 'reviews-previews' },
          REVIEW_SHOTS.map((item) =>
            el('figure', { class: 'reviews-preview' }, [
              el('div', { class: 'reviews-preview__viewport' }, [
                el('img', {
                  src: item.src,
                  alt: item.alt,
                  class: 'reviews-preview__image',
                  'data-review-image': item.src,
                  width: item.width,
                  height: item.height,
                  loading: 'lazy',
                }),
              ]),
            ]),
          ),
        ),
        el('div', { class: 'reviews-more' }, [
          el('p', { class: 'reviews-more__lead', 'data-lang': 'home.reviews.moreLead' }),
          el('div', { class: 'reviews-more__actions' }, [
            el('a', {
              class: 'reviews-more__btn',
              href: REVIEWS_LINK,
              target: '_blank',
              rel: 'noreferrer',
              'data-lang': 'home.reviews.moreButton',
            }),
          ]),
        ]),
      ]),
      el('div', { class: 'reviews-consult', id: 'consultation' }, [
        el('div', { class: 'reviews-consult__content' }, [
          el('p', {
            class: 'reviews-consult__eyebrow',
            'data-lang': 'home.reviews.consult.eyebrow',
          }),
          el('h3', { class: 'reviews-consult__title', 'data-lang': 'home.reviews.consult.title' }),
          el('p', { class: 'reviews-consult__lead', 'data-lang': 'home.reviews.consult.lead' }),
          el('button', {
            class: 'reviews-consult__btn',
            type: 'button',
            'data-open-modal': 'question',
            'data-lang': 'home.reviews.consult.button',
          }),
        ]),
        el('div', { class: 'reviews-consult__media', 'aria-hidden': 'true' }, [
          el('img', {
            src: '/assets/ico/author.png',
            alt: '',
            class: 'reviews-consult__img',
            loading: 'lazy',
          }),
        ]),
      ]),
    ]),
  ]);

  return el('main', { class: 'app-main', id: 'main-content' }, [
    hero,
    advantages,
    practices,
    cases,
    reviews,
  ]);
};

export const createModal = () => {
  const questionModal = el(
    'div',
    {
      class: 'modal is-hidden',
      id: 'questionModal',
      'aria-hidden': 'true',
    },
    [
      el('div', { class: 'modal__backdrop', 'data-close-modal': 'question' }),
      el('div', { class: 'modal__dialog', role: 'dialog', 'aria-modal': 'true' }, [
        el('div', { class: 'modal__head' }, [
          el('h3', { class: 'modal__title', 'data-lang': 'modal.title' }),
          el(
            'button',
            {
              class: 'modal__close',
              type: 'button',
              'data-close-modal': 'question',
            },
            'x',
          ),
        ]),
        el('form', { class: 'form', id: 'questionForm', 'aria-busy': 'false' }, [
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
          el('label', { class: 'form__honeypot', 'aria-hidden': 'true' }, [
            el('span', {}, 'Website'),
            el('input', {
              type: 'text',
              name: 'website',
              autocomplete: 'off',
              tabindex: '-1',
            }),
          ]),
          el('button', { class: 'btn', type: 'submit', 'data-lang': 'modal.send' }),
          el('p', { class: 'form__hint', id: 'formHint', role: 'status', 'aria-live': 'polite' }),
        ]),
      ]),
    ],
  );

  const practiceModal = el(
    'div',
    {
      class: 'modal modal--details is-hidden',
      id: 'practiceModal',
      'aria-hidden': 'true',
    },
    [
      el('div', { class: 'modal__backdrop', 'data-close-modal': 'practice' }),
      el(
        'div',
        { class: 'modal__dialog modal__dialog--wide', role: 'dialog', 'aria-modal': 'true' },
        [
          el('div', { class: 'modal__head' }, [
            el('h3', { class: 'modal__title', id: 'practiceModalTitle' }),
            el(
              'button',
              {
                class: 'modal__close',
                type: 'button',
                'data-close-modal': 'practice',
              },
              'x',
            ),
          ]),
          el('div', { class: 'modal__body', id: 'practiceModalBody' }),
        ],
      ),
    ],
  );

  const reviewImageModal = el(
    'div',
    {
      class: 'modal modal--review is-hidden',
      id: 'reviewImageModal',
      'aria-hidden': 'true',
    },
    [
      el('div', { class: 'modal__backdrop', 'data-close-modal': 'review' }),
      el(
        'div',
        { class: 'modal__dialog modal__dialog--wide', role: 'dialog', 'aria-modal': 'true' },
        [
          el('div', { class: 'modal__head' }, [
            el('h3', { class: 'modal__title', 'data-lang': 'home.reviews.title' }),
            el(
              'button',
              {
                class: 'modal__close',
                type: 'button',
                'data-close-modal': 'review',
              },
              'x',
            ),
          ]),
          el('div', { class: 'review-image-modal__stage' }, [
            el('img', {
              class: 'review-image-modal__img',
              id: 'reviewImageModalImg',
              src: '',
              alt: 'Review screenshot',
              loading: 'lazy',
            }),
          ]),
        ],
      ),
    ],
  );

  return el('div', { class: 'modal-stack' }, [questionModal, practiceModal, reviewImageModal]);
};
