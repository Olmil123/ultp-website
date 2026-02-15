import { el } from '@/utils/createElement';
import { getLanguage, setLanguage, subscribe } from '@/utils/languageManager';

const LINKS = {
  telegram: 'https://t.me/dont_tax_me',
  linkedin: 'https://www.linkedin.com/in/svitlana-rudiuk-8b77929b',
  instagram:
    'https://www.instagram.com/rudiuk_svitlana_?igsh=MTloanMxM2hiYWNqeA%3D%3D&utm_source=qr',
};

const ICONS = {
  telegram: '/assets/icons/telegram.svg',
  instagram: '/assets/icons/instagram.svg',
  linkedin: '/assets/icons/linkedin.svg',
};

const PRACTICES = [
  { key: 'national', path: '/#practice-national' },
  { key: 'international', path: '/#practice-international' },
  { key: 'technologies', path: '/#practice-technologies' },
  { key: 'fintech', path: '/#practice-fintech' },
  { key: 'compliance', path: '/#practice-compliance' },
];

const CASES = [
  { key: 'c1', path: '/cases/tokenization' },
  { key: 'c2', path: '/cases/digital-identity' },
  { key: 'c3', path: '/cases/crypto-education' },
];

const langBtn = (code, label) =>
  el(
    'button',
    {
      type: 'button',
      class: `lang-switch__btn ${getLanguage() === code ? 'is-active' : ''}`,
      'data-lang-switch': code,
      onClick: (e) => {
        e.stopPropagation();
        setLanguage(code);
      },
    },
    label,
  );

const socialLink = (href, iconName, label) =>
  el(
    'a',
    {
      class: 'social__btn',
      href,
      target: '_blank',
      rel: 'noreferrer',
      'aria-label': label,
    },
    [
      el('img', {
        src: ICONS[iconName],
        alt: '',
        width: 20,
        height: 20,
        class: 'social__icon',
      }),
    ],
  );

const mobileDropdown = ({ id, labelKey, href, items, itemLangKey }) =>
  el('div', { class: 'mobile-dropdown' }, [
    el('div', { class: 'mobile-dropdown__head' }, [
      el('a', { href, 'data-link': '', class: 'mobile-dropdown__link', 'data-lang': labelKey }),
      el(
        'button',
        {
          type: 'button',
          class: 'mobile-dropdown__toggle',
          'data-mobile-dropdown-toggle': id,
          'aria-expanded': 'false',
          'aria-controls': id,
          'aria-label': 'Toggle submenu',
        },
        [
          el(
            'svg',
            {
              class: 'mobile-dropdown__icon',
              viewBox: '0 0 12 12',
              'aria-hidden': 'true',
              focusable: 'false',
              svg: true,
            },
            [
              el('path', {
                d: 'M3 4.5L6 7.5L9 4.5',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-width': '1.5',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                svg: true,
              }),
            ],
          ),
        ],
      ),
    ]),
    el(
      'div',
      { class: 'mobile-dropdown__panel', id },
      items.map((item) =>
        el('a', {
          href: item.path,
          'data-link': '',
          'data-lang': itemLangKey(item),
        }),
      ),
    ),
  ]);

export const createHeader = () => {
  const header = el('header', { class: 'site-header' }, [
    el('div', { class: 'header__inner' }, [
      // Logo -> home
      el('a', { href: '/', 'data-link': '', class: 'header__logo' }, [
        el('span', { class: 'logo__circle' }, [el('span', { class: 'logo__text' }, 'ULTP')]),
        el('span', { class: 'logo__label' }, 'ULTP'),
      ]),

      //! Desktop nav
      el('nav', { class: 'header__nav' }, [
        // Practices dropdown
        el('div', { class: 'nav-item nav-item--has-dropdown' }, [
          el('a', { href: '/#practices', 'data-link': '', class: 'nav-item__trigger' }, [
            el('span', { 'data-lang': 'nav.practices' }),
            el(
              'svg',
              {
                class: 'nav-item__chevron',
                viewBox: '0 0 12 12',
                'aria-hidden': 'true',
                focusable: 'false',
                svg: true,
              },
              [
                el('path', {
                  d: 'M3 4.5L6 7.5L9 4.5',
                  fill: 'none',
                  stroke: 'currentColor',
                  'stroke-width': '1.5',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                  svg: true,
                }),
              ],
            ),
          ]),
          el(
            'div',
            { class: 'nav-dropdown' },
            PRACTICES.map((p) =>
              el('a', {
                href: p.path,
                'data-link': '',
                'data-lang': `practices.items.${p.key}`,
              }),
            ),
          ),
        ]),

        el('a', { href: '/services', 'data-link': '', 'data-lang': 'nav.services' }),
        el('a', { href: '/about', 'data-link': '', 'data-lang': 'nav.about' }),
        el('div', { class: 'nav-item nav-item--has-dropdown' }, [
          el('a', { href: '/#cases', 'data-link': '', class: 'nav-item__trigger' }, [
            el('span', { 'data-lang': 'nav.cases' }),
            el(
              'svg',
              {
                class: 'nav-item__chevron',
                viewBox: '0 0 12 12',
                'aria-hidden': 'true',
                focusable: 'false',
                svg: true,
              },
              [
                el('path', {
                  d: 'M3 4.5L6 7.5L9 4.5',
                  fill: 'none',
                  stroke: 'currentColor',
                  'stroke-width': '1.5',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                  svg: true,
                }),
              ],
            ),
          ]),
          el(
            'div',
            { class: 'nav-dropdown' },
            CASES.map((c) =>
              el('a', {
                href: c.path,
                'data-link': '',
                'data-lang': `home.cases.items.${c.key}.title`,
              }),
            ),
          ),
        ]),
        el(
          'a',
          { href: '/#reviews', 'data-link': '', 'data-lang': 'nav.reviewsConsult' },
          'Відгуки і консультація',
        ),
      ]),

      el('div', { class: 'header__right' }, [
        el('div', { class: 'lang-switch' }, [langBtn('en', 'EN'), langBtn('uk', 'UA')]),

        el('div', { class: 'social' }, [
          socialLink(LINKS.telegram, 'telegram', 'Telegram'),
          socialLink(LINKS.instagram, 'instagram', 'Instagram'),
          socialLink(LINKS.linkedin, 'linkedin', 'LinkedIn'),
        ]),

        el('button', {
          class: 'btn btn--primary header__cta',
          type: 'button',
          'data-open-modal': 'question',
          'data-lang': 'header.ask',
        }),

        el('button', {
          class: 'header__hamburger',
          type: 'button',
          'aria-label': 'Menu',
          'aria-expanded': 'false',
          'data-menu-toggle': '',
        }),
      ]),
    ]),

    //* Mobile nav
    el('nav', { class: 'header__nav header__nav--mobile' }, [
      mobileDropdown({
        id: 'mobile-practices-menu',
        labelKey: 'nav.practices',
        href: '/#practices',
        items: PRACTICES,
        itemLangKey: (p) => `practices.items.${p.key}`,
      }),
      el('a', { href: '/services', 'data-link': '', 'data-lang': 'nav.services' }),
      el('a', { href: '/about', 'data-link': '', 'data-lang': 'nav.about' }),
      mobileDropdown({
        id: 'mobile-cases-menu',
        labelKey: 'nav.cases',
        href: '/#cases',
        items: CASES,
        itemLangKey: (c) => `home.cases.items.${c.key}.title`,
      }),
      el(
        'a',
        { href: '/#reviews', 'data-link': '', 'data-lang': 'nav.reviewsConsult' },
        'Відгуки і консультація',
      ),

      el('button', {
        class: 'btn btn--primary',
        type: 'button',
        'data-open-modal': 'question',
        'data-lang': 'header.ask',
      }),
    ]),
  ]);

  subscribe(() => {
    header.querySelectorAll('.lang-switch__btn').forEach((b) => b.classList.remove('is-active'));
    const active = header.querySelector(`.lang-switch__btn[data-lang-switch="${getLanguage()}"]`);
    if (active) active.classList.add('is-active');
  });

  return header;
};
