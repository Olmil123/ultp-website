import { el } from '@/utils/createElement';

export const createFooter = () => {
  return el('footer', { class: 'footer' }, [
    el('div', { class: 'container footer__inner' }, [
      el('div', { class: 'footer__copy' }, [
        el('p', {}, ['© ', el('span', { 'data-lang': 'footer.copy' })]),
        el('p', {}, ['© ', el('span', { 'data-lang': 'footer.copy2' })]),
      ]),

      el('p', { class: 'footer__text', 'data-lang': 'footer.disclaimer1' }),
      el('p', { class: 'footer__text', 'data-lang': 'footer.disclaimer2' }),

      el('div', { class: 'footer__links' }, [
        el('a', { href: '#', class: 'footer__link', 'data-lang': 'footer.privacy' }),
        el('a', { href: '#', class: 'footer__link', 'data-lang': 'footer.terms' }),
      ]),
    ]),
  ]);
};
