import { el } from '@/utils/createElement';

export const PRACTICES = [
  {
    key: 'national',
    points: [
      'services.tax.t1',
      'services.tax.t2',
      'services.tax.t4',
      'services.tax.t5',
      'services.tax.t8',
      'services.tax.t9',
      'services.tax.t10',
    ],
  },
  {
    key: 'international',
    points: ['services.tax.t3', 'services.tax.t6', 'services.tax.t7', 'services.tax.t11'],
  },
  { key: 'technologies', points: ['services.tech.text'] },
  {
    key: 'fintech',
    points: [
      'services.fintech.f1',
      'services.fintech.f2',
      'services.fintech.f3',
      'services.fintech.f4',
      'services.fintech.f5',
    ],
  },
  { key: 'compliance', points: ['services.compliance.text'] },
];

export const createPracticeCards = (activeId = '') =>
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
  );
