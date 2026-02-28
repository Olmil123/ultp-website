import { el } from '@/utils/createElement';
import { createPracticeCards } from '@/templates/practicesCards';

export const createPracticesPage = () => {
  const activeId = window.location.hash ? window.location.hash.slice(1) : '';

  return el('section', { class: 'page page-practices' }, [
    el('div', { class: 'container' }, [
      el('h1', { class: 'section__title', 'data-lang': 'practices.title' }),

      createPracticeCards(activeId),
    ]),
  ]);
};
