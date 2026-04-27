import { el } from '@/utils/createElement';

const list = (baseKey, keys) =>
  el(
    'ul',
    { class: 'privacy__list' },
    keys.map((key) => el('li', { 'data-lang': `${baseKey}.${key}` })),
  );

export const createPrivacyPage = () =>
  el('section', { class: 'page page-privacy' }, [
    el('div', { class: 'container privacy' }, [
      el('header', { class: 'privacy__hero' }, [
        el('div', { class: 'privacy__icon-wrap' }, [
          el('img', {
            class: 'privacy__icon',
            src: '/assets/icons/privacy-shield.svg',
            alt: '',
            width: 28,
            height: 28,
            loading: 'lazy',
            decoding: 'async',
          }),
        ]),
        el('div', { class: 'privacy__hero-content' }, [
          el('p', { class: 'privacy__eyebrow', 'data-lang': 'privacy.hero.eyebrow' }),
          el('h1', { class: 'privacy__title', 'data-lang': 'privacy.hero.title' }),
          el('p', { class: 'privacy__lead', 'data-lang': 'privacy.hero.lead' }),
        ]),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'privacy.sections.s1.title' }),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s1.p1' }),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s1.p2' }),
        el('ul', { class: 'privacy__list' }, [
          el('li', { 'data-lang': 'privacy.sections.s1.items.i1' }),
          el('li', { 'data-lang': 'privacy.sections.s1.items.i2' }),
          el('li', {}, [
            el('span', { 'data-lang': 'privacy.sections.s1.items.i3' }),
            ' ',
            el(
              'a',
              { href: 'mailto:rudiuksvitlana@gmail.com', class: 'privacy__mail' },
              'rudiuksvitlana@gmail.com',
            ),
          ]),
        ]),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s1.p3' }),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'privacy.sections.s2.title' }),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s2.p1' }),
        list('privacy.sections.s2.items', ['i1', 'i2', 'i3', 'i4']),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s2.p2' }),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'privacy.sections.s3.title' }),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s3.p1' }),
        list('privacy.sections.s3.items', ['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7']),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s3.p2' }),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'privacy.sections.s4.title' }),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s4.p1' }),
        list('privacy.sections.s4.items', ['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7']),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s4.p2' }),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'privacy.sections.s5.title' }),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s5.p1' }),
        list('privacy.sections.s5.items', ['i1', 'i2', 'i3', 'i4']),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s5.p2' }),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'privacy.sections.s6.title' }),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s6.p1' }),
        list('privacy.sections.s6.items', ['i1', 'i2', 'i3', 'i4']),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s6.p2' }),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'privacy.sections.s7.title' }),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s7.p1' }),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s7.p2' }),
        list('privacy.sections.s7.items', ['i1', 'i2', 'i3']),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'privacy.sections.s8.title' }),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s8.p1' }),
        list('privacy.sections.s8.items', ['i1', 'i2', 'i3']),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s8.p2' }),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'privacy.sections.s9.title' }),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s9.p1' }),
        el('h3', { class: 'privacy__subhead', 'data-lang': 'privacy.sections.s9.eu.title' }),
        list('privacy.sections.s9.eu.items', ['i1', 'i2', 'i3']),
        el('h3', { class: 'privacy__subhead', 'data-lang': 'privacy.sections.s9.us.title' }),
        list('privacy.sections.s9.us.items', ['i1', 'i2']),
        el('h3', { class: 'privacy__subhead', 'data-lang': 'privacy.sections.s9.asia.title' }),
        list('privacy.sections.s9.asia.items', ['i1', 'i2']),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s9.p2' }),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'privacy.sections.s10.title' }),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s10.p1' }),
        list('privacy.sections.s10.items', ['i1', 'i2', 'i3', 'i4']),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'privacy.sections.s11.title' }),
        el('p', { class: 'privacy__text', 'data-lang': 'privacy.sections.s11.p1' }),
      ]),

      el('article', { class: 'privacy__section privacy__section--contact' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'privacy.sections.s12.title' }),
        el('p', { class: 'privacy__text' }, [
          el('span', { 'data-lang': 'privacy.sections.s12.p1' }),
          ' ',
          el(
            'a',
            { href: 'mailto:rudiuksvitlana@gmail.com', class: 'privacy__mail' },
            'rudiuksvitlana@gmail.com',
          ),
        ]),
      ]),
    ]),
  ]);
