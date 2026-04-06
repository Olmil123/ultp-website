import i18next from '@/i18n';

const SITE_NAME = 'ULTP';
const SITE_URL = 'https://ultp.com.ua';

const SEO_BY_ROUTE = {
  '/': {
    en: {
      title: 'Ukrainian Legal and Tech Partners',
      description:
        'Legal, tax, compliance, and Web3 advisory for tokenization, digital assets, fintech, and cross-border business projects.',
    },
    uk: {
      title: 'Ukrainian Legal and Tech Partners',
      description:
        'Юридичний, податковий, комплаєнс та Web3 супровід для токенізації, цифрових активів, fintech і міжнародних бізнес-проєктів.',
    },
  },
  '/about': {
    en: {
      title: 'About Us',
      description:
        'Learn more about Svitlana Rudiuk, Ukrainian Legal and Tech Partners, and the legal, compliance, and technology expertise behind the project.',
    },
    uk: {
      title: 'Про нас',
      description:
        'Дізнайтеся більше про Світлану Рудюк, Ukrainian Legal and Tech Partners та юридичну, комплаєнс і технологічну експертизу проєкту.',
    },
  },
  '/practices': {
    en: {
      title: 'Practices',
      description:
        'National and international taxation, Web3, fintech, compliance, and business structuring legal services.',
    },
    uk: {
      title: 'Практики',
      description:
        'Юридичні послуги у сферах національного та міжнародного оподаткування, Web3, fintech, комплаєнсу та структурування бізнесу.',
    },
  },
  '/services': {
    en: {
      title: 'Services',
      description:
        'Explore legal, tax, compliance, and strategic support services for technology, digital asset, and international business projects.',
    },
    uk: {
      title: 'Послуги',
      description:
        'Ознайомтеся з юридичними, податковими, комплаєнс та стратегічними послугами для технологічних, міжнародних і digital asset проєктів.',
    },
  },
  '/privacy': {
    en: {
      title: 'Privacy Policy',
      description: 'Privacy Policy of Ukrainian Legal and Tech Partners.',
    },
    uk: {
      title: 'Політика конфіденційності',
      description: 'Політика конфіденційності Ukrainian Legal and Tech Partners.',
    },
  },
  '/terms': {
    en: {
      title: 'Terms and Conditions',
      description: 'Terms and Conditions of Ukrainian Legal and Tech Partners.',
    },
    uk: {
      title: 'Умови та положення',
      description: 'Умови та положення Ukrainian Legal and Tech Partners.',
    },
  },
  '/cases/tokenization': {
    en: {
      title: 'Case Study: Tokenization',
      description:
        'Case study on tokenization, legal structuring, investor access, and compliant blockchain implementation.',
    },
    uk: {
      title: 'Кейс: Токенізація',
      description:
        'Кейс про токенізацію, юридичне структурування, доступ інвесторів та комплаєнсне впровадження blockchain-рішення.',
    },
  },
  '/cases/digital-identity': {
    en: {
      title: 'Case Study: Digital Identity',
      description:
        'Case study on digital identity, KYC/AML simplification, regulatory compliance, and Web3 user access.',
    },
    uk: {
      title: 'Кейс: Digital Identity',
      description:
        'Кейс про digital identity, спрощення KYC/AML, регуляторний комплаєнс та доступ користувачів до Web3-рішень.',
    },
  },
  '/cases/crypto-education': {
    en: {
      title: 'Case Study: Crypto Education Platform',
      description:
        'Case study on a crypto education platform, App Store launch, privacy compliance, and secure user experience.',
    },
    uk: {
      title: 'Кейс: Crypto Education Platform',
      description:
        'Кейс про crypto education platform, запуск в App Store, privacy compliance та безпечний користувацький досвід.',
    },
  },
};

const ensureMeta = (name, selector) => {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement('meta');
    node.setAttribute('name', name);
    document.head.appendChild(node);
  }
  return node;
};

const ensurePropertyMeta = (property) => {
  let node = document.head.querySelector(`meta[property="${property}"]`);
  if (!node) {
    node = document.createElement('meta');
    node.setAttribute('property', property);
    document.head.appendChild(node);
  }
  return node;
};

const ensureLink = (rel, attrs = {}) => {
  const selectorParts = [`link[rel="${rel}"]`];
  Object.entries(attrs).forEach(([key, value]) => {
    selectorParts.push(`[${key}="${value}"]`);
  });
  let node = document.head.querySelector(selectorParts.join(''));
  if (!node) {
    node = document.createElement('link');
    node.setAttribute('rel', rel);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    document.head.appendChild(node);
  }
  return node;
};

const buildAlternateUrl = (path, lang) => {
  const url = new URL(path, SITE_URL);
  url.searchParams.set('lng', lang);
  return url.toString();
};

export const updateSeo = () => {
  const path = window.location.pathname || '/';
  const lang = i18next.language === 'uk' ? 'uk' : 'en';
  const seo = SEO_BY_ROUTE[path]?.[lang] || SEO_BY_ROUTE['/'][lang];
  const title = seo.title === SITE_NAME ? SITE_NAME : `${seo.title} | ${SITE_NAME}`;

  document.title = title;

  ensureMeta('description', 'meta[name="description"]').setAttribute('content', seo.description);
  ensureMeta('robots', 'meta[name="robots"]').setAttribute('content', 'index, follow');

  ensurePropertyMeta('og:type').setAttribute('content', 'website');
  ensurePropertyMeta('og:site_name').setAttribute('content', SITE_NAME);
  ensurePropertyMeta('og:title').setAttribute('content', title);
  ensurePropertyMeta('og:description').setAttribute('content', seo.description);
  ensurePropertyMeta('og:url').setAttribute('content', buildAlternateUrl(path, lang));

  ensurePropertyMeta('twitter:card').setAttribute('content', 'summary_large_image');
  ensurePropertyMeta('twitter:title').setAttribute('content', title);
  ensurePropertyMeta('twitter:description').setAttribute('content', seo.description);

  ensureLink('canonical').setAttribute('href', buildAlternateUrl(path, lang));
  ensureLink('alternate', { hreflang: 'en' }).setAttribute('href', buildAlternateUrl(path, 'en'));
  ensureLink('alternate', { hreflang: 'uk' }).setAttribute('href', buildAlternateUrl(path, 'uk'));
  ensureLink('alternate', { hreflang: 'x-default' }).setAttribute('href', new URL(path, SITE_URL).toString());
};
