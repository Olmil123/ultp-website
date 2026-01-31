import { el } from '@/utils/createElement';
import { getLanguage, setLanguage, subscribe } from '@/utils/languageManager';

const LINKS = {
  telegram: 'https://t.me/dont_tax_me',
  linkedin: 'https://www.linkedin.com/in/svitlana-rudiuk-8b77929b',
  instagram: 'https://www.instagram.com/rudiuk_svitlana_?igsh=MTloanMxM2hiYWNqeA%3D%3D&utm_source=qr',
};

const ICONS = {
  telegram: '/assets/icons/telegram.svg',
  instagram: '/assets/icons/instagram.svg',
  linkedin: '/assets/icons/linkedin.svg',
};

function langBtn(code, label) {
  return el('button', {
    type: 'button',
    class: `lang-switch__btn ${getLanguage() === code ? 'is-active' : ''}`,
    'data-lang-switch': code,
    onClick: (e) => {
      e.stopPropagation();
      setLanguage(code);
    },
  }, label);
}

function socialLink(href, iconName, label) {
  return el('a', {
    class: 'social__btn',
    href,
    target: '_blank',
    rel: 'noreferrer',
    'aria-label': label,
  }, [
    el('img', { src: ICONS[iconName], alt: '', width: 20, height: 20, class: 'social__icon' }),
  ]);
}

export function createHeader() {
  const header = el('header', { class: 'site-header' }, [
    el('div', { class: 'header__bg' }),
    el('div', { class: 'container header__inner' }, [
      // Logo
      el('a', { href: '#', class: 'header__logo' }, [
        el('span', { class: 'logo__circle' }, [
          el('span', { class: 'logo__text' }, 'ULTP'),
        ]),
        el('span', { class: 'logo__label' }, 'ULTP'),
      ]),

      //! Desktop Nav
      el('nav', { class: 'header__nav' }, [
        el('a', { href: '#practices', 'data-lang': 'nav.practices' }),
        el('a', { href: '#practices', 'data-lang': 'nav.services' }),
        el('a', { href: '#about', 'data-lang': 'nav.about' }),
        el('a', { href: '#news', 'data-lang': 'nav.news' }),
        el('a', { href: '#cases', 'data-lang': 'nav.cases' }),
      ]),

      //* Right block
      el('div', { class: 'header__right' }, [
        el('div', { class: 'lang-switch' }, [
          langBtn('en', 'EN'),
          langBtn('uk', 'UA'),
        ]),

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
        }, [
          el('span', { class: 'hamburger__line' }),
          el('span', { class: 'hamburger__line' }),
          el('span', { class: 'hamburger__line' }),
        ]),
      ]),
    ]),

    //! Mobile nav overlay
    el('nav', { class: 'header__nav header__nav--mobile' }, [
      el('a', { href: '#practices', 'data-lang': 'nav.practices' }),
      el('a', { href: '#practices', 'data-lang': 'nav.services' }),
      el('a', { href: '#about', 'data-lang': 'nav.about' }),
      el('a', { href: '#news', 'data-lang': 'nav.news' }),
      el('a', { href: '#cases', 'data-lang': 'nav.cases' }),
    ]),
  ]);

  subscribe(() => {
    header.querySelectorAll('.lang-switch__btn').forEach((b) => {
      b.classList.remove('is-active');
    });
    const active = header.querySelector(`.lang-switch__btn[data-lang-switch="${getLanguage()}"]`);
    if (active) active.classList.add('is-active');
  });

  return header;
}
