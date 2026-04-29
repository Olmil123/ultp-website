import { el } from '@/utils/createElement';

const BREADCRUMB_MAP = {
  '/about': [{ href: '/', label: 'ULTP' }, { langKey: 'nav.about', fallback: 'About Us' }],
  '/services': [{ href: '/', label: 'ULTP' }, { langKey: 'nav.services', fallback: 'Services' }],
  '/practices': [{ href: '/', label: 'ULTP' }, { langKey: 'nav.practices', fallback: 'Practices' }],
  '/privacy': [{ href: '/', label: 'ULTP' }, { langKey: 'footer.privacy', fallback: 'Privacy Policy' }],
  '/terms': [{ href: '/', label: 'ULTP' }, { langKey: 'footer.terms', fallback: 'Terms of Service' }],
  '/cases/tokenization': [
    { href: '/', label: 'ULTP' },
    { href: '/#cases', langKey: 'nav.cases', fallback: 'Cases' },
  ],
  '/cases/digital-identity': [
    { href: '/', label: 'ULTP' },
    { href: '/#cases', langKey: 'nav.cases', fallback: 'Cases' },
  ],
  '/cases/crypto-education': [
    { href: '/', label: 'ULTP' },
    { href: '/#cases', langKey: 'nav.cases', fallback: 'Cases' },
  ],
};

const createCrumb = (item, isCurrent) => {
  const content = item.langKey
    ? [el('span', { 'data-lang': item.langKey }, item.fallback || '')]
    : [item.label];

  if (!item.href || isCurrent) {
    return el(
      'span',
      {
        class: `breadcrumbs__current${isCurrent ? ' is-current' : ''}`,
        'aria-current': isCurrent ? 'page' : null,
      },
      content,
    );
  }

  return el(
    'a',
    {
      class: 'breadcrumbs__link',
      href: item.href,
      'data-link': '',
    },
    content,
  );
};

export const createBreadcrumbs = (path = window.location.pathname) => {
  const items = BREADCRUMB_MAP[path];
  if (!items?.length) return null;
  const isCasePath = path.startsWith('/cases/');

  return el(
    'nav',
    {
      class: `breadcrumbs${isCasePath ? ' breadcrumbs--case' : ''}`,
      'aria-label': 'Breadcrumb',
    },
    [
      el(
        'ol',
        { class: 'breadcrumbs__list' },
        items.map((item, index) =>
          el('li', { class: 'breadcrumbs__item' }, [
            createCrumb(item, index === items.length - 1),
            index < items.length - 1 ? el('span', { class: 'breadcrumbs__sep', 'aria-hidden': 'true' }, '/') : null,
          ]),
        ),
      ),
    ],
  );
};
