import { el } from '@/utils/createElement';

const PRACTICES = [
  { key: 'national', points: ['services.tax.t1', 'services.tax.t2'] },
  { key: 'international', points: ['services.tax.t3', 'services.tax.t7'] },
  { key: 'technologies', points: ['services.tech.text'] },
  { key: 'fintech', points: ['services.fintech.f1', 'services.fintech.f3'] },
  { key: 'compliance', points: ['services.compliance.text'] },
];

export const createPracticesPage = () => {
  const activeId = window.location.hash ? window.location.hash.slice(1) : '';

  return el('section', { class: 'page page-practices' }, [
    el('div', { class: 'container' }, [
      el('h1', { class: 'section__title', 'data-lang': 'practices.title' }),

      el(
        'div',
        { class: 'cards' },
        PRACTICES.map((p, index) => {
          const id = `practice-${p.key}`;
          const isSelected = activeId === id;

          const indexLabel = `#${String(index + 1).padStart(2, '0')}`;

          return el('article', { class: `card${isSelected ? ' is-selected' : ''}`, id }, [
            el('div', { class: 'card__meta' }, [el('span', { class: 'card__index' }, indexLabel)]),
            el('h3', { class: 'card__title', 'data-lang': `practices.items.${p.key}` }),
            el(
              'ul',
              { class: 'card__list' },
              p.points.map((k) => el('li', { 'data-lang': k })),
            ),
            el('button', {
              class: 'btn btn--ghost card__btn',
              type: 'button',
              'data-open-modal': 'question',
              'data-lang': 'header.ask',
            }),
          ]);
        }),
      ),
    ]),
  ]);
};
