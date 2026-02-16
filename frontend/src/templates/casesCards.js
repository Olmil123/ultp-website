import { el } from '@/utils/createElement';

const CASE_KEYS = ['c1', 'c2', 'c3'];

export const createCasesCards = ({
  baseKey,
  withButton = true,
  buttonHref = '/cases',
  links = {},
}) =>
  el(
    'div',
    { class: 'cases-grid' },
    CASE_KEYS.map((key) =>
      el('article', { class: 'case-card' }, [
        el('h3', { class: 'case-card__title', 'data-lang': `${baseKey}.items.${key}.title` }),
        el('p', { class: 'case-card__desc', 'data-lang': `${baseKey}.items.${key}.desc` }),
        withButton
          ? el(
              'a',
              {
                href: links[key] || buttonHref,
                class: 'case-card__link',
                'data-link': '',
              },
              [el('span', { class: 'case-card__link-text', 'data-lang': `${baseKey}.more` })],
            )
          : null,
      ]),
    ),
  );
