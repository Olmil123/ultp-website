import { el } from '@/utils/createElement';
import { createBreadcrumbs } from '@/components/breadcrumbs';

const list = (baseKey, keys) =>
  el(
    'ul',
    { class: 'privacy__list' },
    keys.map((key) => el('li', { 'data-lang': `${baseKey}.${key}` })),
  );

export const createTermsPage = () =>
  el('section', { class: 'page page-privacy page-terms' }, [
    el('div', { class: 'container privacy' }, [
      createBreadcrumbs('/terms'),
      el('header', { class: 'privacy__hero' }, [
        el('div', { class: 'privacy__icon-wrap' }, [
          el('img', {
            class: 'privacy__icon',
            src: '/assets/icons/terms-document.svg',
            alt: '',
            width: 28,
            height: 28,
            loading: 'lazy',
            decoding: 'async',
          }),
        ]),
        el('div', { class: 'privacy__hero-content' }, [
          el('p', { class: 'privacy__eyebrow', 'data-lang': 'termsPage.hero.eyebrow' }),
          el('h1', { class: 'privacy__title', 'data-lang': 'termsPage.hero.title' }),
          el('p', { class: 'privacy__lead', 'data-lang': 'termsPage.hero.lead' }),
        ]),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'termsPage.sections.s1.title' }),
        el('p', { class: 'privacy__text', 'data-lang': 'termsPage.sections.s1.p1' }),
        el('p', { class: 'privacy__text', 'data-lang': 'termsPage.sections.s1.p2' }),
        list('termsPage.sections.s1.items', ['i1', 'i2', 'i3']),
        el('p', { class: 'privacy__text', 'data-lang': 'termsPage.sections.s1.p3' }),
        el('p', { class: 'privacy__text', 'data-lang': 'termsPage.sections.s1.p4' }),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'termsPage.sections.s2.title' }),
        el('p', { class: 'privacy__text', 'data-lang': 'termsPage.sections.s2.p1' }),
        list('termsPage.sections.s2.items', ['i1', 'i2', 'i3', 'i4', 'i5']),
        el('p', { class: 'privacy__text', 'data-lang': 'termsPage.sections.s2.p2' }),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'termsPage.sections.s3.title' }),
        el('p', { class: 'privacy__text', 'data-lang': 'termsPage.sections.s3.p1' }),
        list('termsPage.sections.s3.items', ['i1', 'i2', 'i3', 'i4']),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'termsPage.sections.s4.title' }),
        list('termsPage.sections.s4.items', ['i1', 'i2', 'i3']),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'termsPage.sections.s5.title' }),
        list('termsPage.sections.s5.items', ['i1', 'i2', 'i3']),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'termsPage.sections.s6.title' }),
        list('termsPage.sections.s6.items', ['i1', 'i2']),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'termsPage.sections.s7.title' }),
        list('termsPage.sections.s7.items', ['i1', 'i2', 'i3']),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'termsPage.sections.s8.title' }),
        list('termsPage.sections.s8.items', ['i1', 'i2']),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'termsPage.sections.s9.title' }),
        list('termsPage.sections.s9.items', ['i1', 'i2', 'i3']),
      ]),

      el('article', { class: 'privacy__section' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'termsPage.sections.s10.title' }),
        list('termsPage.sections.s10.items', ['i1', 'i2']),
      ]),

      el('article', { class: 'privacy__section privacy__section--contact' }, [
        el('h2', { class: 'privacy__section-title', 'data-lang': 'termsPage.sections.s11.title' }),
        el('p', { class: 'privacy__text' }, [
          el('span', { 'data-lang': 'termsPage.sections.s11.p1' }),
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
