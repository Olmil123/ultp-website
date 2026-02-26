import { el } from '@/utils/createElement';
import { createPracticeCards } from '@/templates/practicesCards';
import { createCasesCards } from '@/templates/casesCards';

const REVIEW_SHOTS = [
  {
    src: '/assets/ico/view1.jpg',
    alt: 'Відгук клієнта 1',
    width: 789,
    height: 217,
  },
  {
    src: '/assets/ico/view2.jpg',
    alt: 'Відгук клієнта 2',
    width: 785,
    height: 202,
  },
  {
    src: '/assets/ico/view3.jpg',
    alt: 'Відгук клієнта 3',
    width: 781,
    height: 184,
  },
];

const HERO_JURISDICTIONS = [
  { key: 'ua', flag: 'ua' },
  { key: 'uk', flag: 'gb' },
  { key: 'cayman', flag: 'ky' },
  { key: 'bvi', flag: 'vg' },
  { key: 'cyprus', flag: 'cy' },
  { key: 'lithuania', flag: 'lt' },
  { key: 'estonia', flag: 'ee' },
  { key: 'uae', flag: 'ae' },
  { key: 'singapore', flag: 'sg' },
  { key: 'hongKong', flag: 'hk' },
  { key: 'luxembourg', flag: 'lu' },
  { key: 'usa', flag: 'us' },
];

const REVIEWS_LINK = 'https://www.linkedin.com/in/svitlana-rudiuk-8b77929b';

const createHeroJurisdictions = () =>
  el(
    'ul',
    { class: 'hero__jurisdictions-list' },
    HERO_JURISDICTIONS.map(({ key, flag }) =>
      el('li', { class: 'hero__jurisdiction-item' }, [
        el('img', {
          class: 'hero__jurisdiction-flag',
          src: `https://flagcdn.com/w40/${flag}.png`,
          srcset: `https://flagcdn.com/w80/${flag}.png 2x`,
          width: 20,
          height: 15,
          loading: 'lazy',
          decoding: 'async',
          alt: '',
          'aria-hidden': 'true',
        }),
        el('span', { class: 'hero__jurisdiction-name', 'data-lang': `home.hero.jurisdictions.${key}` }),
      ]),
    ),
  );

export const createMain = () => {
  const hero = el('section', { class: 'hero', id: 'about' }, [
    el('div', { class: 'container hero__inner' }, [
      el('div', { class: 'hero__content' }, [
        el('p', { class: 'hero__subtitle', 'data-lang': 'home.hero.subtitle' }),
        el('div', { class: 'hero__meta' }, [
          el('span', { class: 'hero__badge', 'data-lang': 'home.hero.badge' }),
          el('span', { class: 'hero__metric', 'data-lang': 'home.hero.metric' }),
        ]),
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
        el('div', { class: 'hero__jurisdictions' }, [
          el('span', { class: 'hero__jurisdictions-label', 'data-lang': 'home.hero.jurisdictionsLabel' }),
          createHeroJurisdictions(),
          el('p', { class: 'hero__credibility', 'data-lang': 'home.hero.credibility' }),
        ]),
      ]),

      el('div', { class: 'hero__photo' }, [
        el('h1', { class: 'hero__brand-side', 'data-lang': 'home.hero.brand' }),
        el('div', { class: 'hero__photo-wrap' }, [
          el('img', { src: '/assets/ico/logo.jpg', alt: 'Світлана Рудюк', class: 'hero__img' }),
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
        el('li', { class: 'advantages__item' }, [
          el('h3', { class: 'advantages__item-title', 'data-lang': 'home.advantages.i1Title' }),
          el('p', { class: 'advantages__item-text', 'data-lang': 'home.advantages.i1Text' }),
        ]),
        el('li', { class: 'advantages__item' }, [
          el('h3', { class: 'advantages__item-title', 'data-lang': 'home.advantages.i2Title' }),
          el('p', { class: 'advantages__item-text', 'data-lang': 'home.advantages.i2Text' }),
        ]),
        el('li', { class: 'advantages__item' }, [
          el('h3', { class: 'advantages__item-title', 'data-lang': 'home.advantages.i3Title' }),
          el('p', { class: 'advantages__item-text', 'data-lang': 'home.advantages.i3Text' }),
        ]),
        el('li', { class: 'advantages__item' }, [
          el('h3', { class: 'advantages__item-title', 'data-lang': 'home.advantages.i4Title' }),
          el('p', { class: 'advantages__item-text', 'data-lang': 'home.advantages.i4Text' }),
        ]),
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
      class: 'modal modal--question is-hidden',
      id: 'questionModal',
      'aria-hidden': 'true',
    },
    [
      el('div', { class: 'modal__backdrop', 'data-close-modal': 'question' }),
      el('div', { class: 'modal__dialog modal__dialog--question', role: 'dialog', 'aria-modal': 'true' }, [
        el('div', { class: 'modal__visual', 'aria-hidden': 'true' }),
        el('div', { class: 'modal__content' }, [
          el('div', { class: 'modal__head' }, [
            el('h3', { class: 'modal__title', 'data-lang': 'modal.title' }),
            el('p', { class: 'modal__subtitle', 'data-lang': 'modal.subtitle' }),
            el(
              'button',
              {
                class: 'modal__close',
                type: 'button',
                'data-close-modal': 'question',
                'aria-label': 'Закрити',
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
              el('textarea', { name: 'message', rows: 4, maxlength: 2000, required: true }),
            ]),
            el('label', { class: 'form__honeypot', 'aria-hidden': 'true' }, [
              el('span', {}, 'Вебсайт'),
              el('input', {
                type: 'text',
                name: 'website',
                autocomplete: 'off',
                tabindex: '-1',
              }),
            ]),
            el('button', { class: 'btn', type: 'submit', 'data-lang': 'modal.send' }),
            el('p', { class: 'form__consent', 'data-lang': 'modal.consentHtml', 'data-lang-html': true }),
            el('p', { class: 'form__hint', id: 'formHint', role: 'status', 'aria-live': 'polite' }),
          ]),
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
                'aria-label': 'Закрити',
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
                'aria-label': 'Закрити',
              },
              'x',
            ),
          ]),
          el('div', { class: 'review-image-modal__stage' }, [
            el('img', {
              class: 'review-image-modal__img',
              id: 'reviewImageModalImg',
              src: '',
              alt: 'Скріншот відгуку',
              loading: 'lazy',
            }),
          ]),
        ],
      ),
    ],
  );

  return el('div', { class: 'modal-stack' }, [questionModal, practiceModal, reviewImageModal]);
};
