import i18next from '@/i18n';

const subscribers = new Set();

export const getLanguage = () => i18next.language;

export const setLanguage = async (lang) => {
  if (!['uk', 'en'].includes(lang)) {
    console.warn(`Unsupported language: ${lang}. Falling back to 'uk'.`);
    lang = 'uk';
  }

  if (i18next.language === lang) return;

  await i18next.changeLanguage(lang);
  localStorage.setItem('language', lang);

  subscribers.forEach((cb) => {
    try { cb(lang); } catch (e) { console.error(e); }
  });
};

export const subscribe = (callback) => {
  subscribers.add(callback);
  return () => subscribers.delete(callback);
};
