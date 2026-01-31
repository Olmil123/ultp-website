/*
  i18next config (EN + UK):
  - грузим переводы из /public/locales/{{lng}}/{{ns}}.json
  - язык берется из: querystring -> localStorage -> cookie -> navigator
  - сохраняем выбор в localStorage/cookie под ключом "language"
  - fallback: en
  - без перезагрузки (перевод обновляется через твой код, который дергает i18next.t)
*/

import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

await i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',

    //! Поддержка только этих языков!
    supportedLngs: ['en', 'uk'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',

    ns: ['common'],
    defaultNS: 'common',

    debug: false,

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    detection: {
      //! порядок определения языка
      order: ['querystring', 'localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie'],

      //* чтобы не было разных ключей типа i18nextLng
      lookupLocalStorage: 'language',
      lookupCookie: 'language',
    },
  });

export default i18next;
