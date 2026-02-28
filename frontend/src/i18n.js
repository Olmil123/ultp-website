/*
  i18next config (EN + UK):
  - loads translations from /public/locales/{{lng}}/{{ns}}.json
  - detects language from: querystring -> localStorage -> cookie -> navigator
  - stores selected language in localStorage/cookie under "language"
  - fallback language: en
*/

import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

await i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',

    //! supported languages only
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
      //! language detection order
      order: ['querystring', 'localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie'],

      //* keep one consistent storage key instead of i18nextLng defaults
      lookupLocalStorage: 'language',
      lookupCookie: 'language',
    },
  });

export default i18next;
