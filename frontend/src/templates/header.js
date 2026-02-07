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
  { key: 'national', path: '/practices#practice-national' },
  { key: 'international', path: '/practices#practice-international' },
  { key: 'technologies', path: '/practices#practice-technologies' },
  { key: 'fintech', path: '/practices#practice-fintech' },
  { key: 'compliance', path: '/practices#practice-compliance' },
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
          el('a', { href: '/practices', 'data-link': '', 'data-lang': 'nav.practices' }),
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
        el('a', { href: '/#about', 'data-link': '', 'data-lang': 'nav.about' }),
        el('a', { href: '/#news', 'data-link': '', 'data-lang': 'nav.news' }),
        el('a', { href: '/#cases', 'data-link': '', 'data-lang': 'nav.cases' }),
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

        el(
          'button',
          {
            class: 'header__hamburger',
            type: 'button',
            'aria-label': 'Menu',
            'aria-expanded': 'false',
            'data-menu-toggle': '',
          },
        ),
      ]),
    ]),

    //* Mobile nav
    el('nav', { class: 'header__nav header__nav--mobile' }, [
      el('a', { href: '/practices', 'data-link': '', 'data-lang': 'nav.practices' }),
      el('a', { href: '/services', 'data-link': '', 'data-lang': 'nav.services' }),
      el('a', { href: '/#about', 'data-link': '', 'data-lang': 'nav.about' }),
      el('a', { href: '/#news', 'data-link': '', 'data-lang': 'nav.news' }),
      el('a', { href: '/#cases', 'data-link': '', 'data-lang': 'nav.cases' }),

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
