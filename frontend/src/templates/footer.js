import { el } from '@/utils/createElement';

export const createFooter = () => {
  return el('footer', { class: 'footer' }, [
    el('div', { class: 'container footer__inner' }, [
      el('div', { class: 'footer__meta' }, [
        el(
          'button',
          {
            class: 'footer__to-top',
            type: 'button',
            'aria-label': 'Повернутися вгору',
            onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
          },
          [
            el(
              'svg',
              {
                class: 'footer__to-top-icon',
                viewBox: '0 0 24 24',
                'aria-hidden': 'true',
                focusable: 'false',
                svg: true,
              },
              [
                el('path', {
                  d: 'M7 17L17 7M9 7H17V15',
                  fill: 'none',
                  stroke: 'currentColor',
                  'stroke-width': '2',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                  svg: true,
                }),
              ],
            ),
          ],
        ),

        el('div', { class: 'footer__copy' }, [
          el('p', { class: 'footer__copy-line' }, [
            '© ',
            el('span', { 'data-lang': 'footer.copy' }),
          ]),
        ]),

        el('p', { class: 'footer__text', 'data-lang': 'footer.disclaimer1' }),
        el('p', { class: 'footer__text', 'data-lang': 'footer.disclaimer2' }),

        el('div', { class: 'footer__links' }, [
          el('a', {
            href: '/privacy',
            class: 'footer__link',
            'data-link': '',
            'data-lang': 'footer.privacy',
          }),
          el('a', {
            href: '/terms',
            class: 'footer__link',
            'data-link': '',
            'data-lang': 'footer.terms',
          }),
        ]),
      ]),

      el('div', { class: 'footer__contacts' }, [
        el('h3', { class: 'footer__contacts-title', 'data-lang': 'home.contacts.title' }),
        el('ul', { class: 'footer__contacts-list' }, [
          el('li', { class: 'footer__contacts-item' }, [
            el(
              'svg',
              {
                class: 'footer__contact-icon',
                viewBox: '0 0 24 24',
                'aria-hidden': 'true',
                focusable: 'false',
                svg: true,
              },
              [
                el('path', {
                  d: 'M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Z',
                  fill: 'none',
                  stroke: 'currentColor',
                  'stroke-width': '2',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                  svg: true,
                }),
                el('path', {
                  d: 'm3.5 8.2 7.66 5.46a1.5 1.5 0 0 0 1.68 0L20.5 8.2',
                  fill: 'none',
                  stroke: 'currentColor',
                  'stroke-width': '2',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                  svg: true,
                }),
              ],
            ),
            el('span', {
              class: 'footer__contacts-label',
              'data-lang': 'home.contacts.emailLabel',
            }),
            el(
              'a',
              {
                class: 'footer__contact-link',
                href: 'mailto:rudiuksvitlana@gmail.com',
              },
              [el('span', { 'data-lang': 'home.contacts.email' })],
            ),
          ]),
          el('li', { class: 'footer__contacts-item' }, [
            el('img', {
              class: 'footer__contact-icon footer__contact-icon--invert',
              src: '/assets/icons/whatsapp.svg',
              alt: '',
              width: 18,
              height: 18,
            }),
            el('span', { class: 'footer__contacts-label', 'data-lang': 'home.contacts.telLabel' }),
            el(
              'a',
              {
                class: 'footer__contact-link',
                href: 'tel:+380633966786',
              },
              [el('span', { 'data-lang': 'home.contacts.tel' })],
            ),
          ]),
          el('li', { class: 'footer__contacts-item' }, [
            el('img', {
              class: 'footer__contact-icon footer__contact-icon--invert',
              src: '/assets/icons/telegram.svg',
              alt: '',
              width: 18,
              height: 18,
            }),
            el('span', { class: 'footer__contacts-label', 'data-lang': 'home.contacts.tgLabel' }),
            el(
              'a',
              {
                class: 'footer__contact-link',
                href: 'https://t.me/dont_tax_me',
                target: '_blank',
                rel: 'noreferrer',
              },
              [el('span', { 'data-lang': 'home.contacts.telegram' })],
            ),
          ]),
        ]),
      ]),
    ]),
  ]);
};
