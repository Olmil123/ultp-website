import i18next, { i18nReady } from '@/i18n';

const subscribers = new Set();
const LANG_SWITCH_FADE_MS = 220;
let langSwitchSeq = 0;

const sleep = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

export const getLanguage = () => i18next.language;

const notifySubscribers = (lang) => {
  subscribers.forEach((cb) => {
    try {
      cb(lang);
    } catch (e) {
      console.error(e);
    }
  });
};

export const setLanguage = async (lang) => {
  if (!['uk', 'en'].includes(lang)) {
    console.warn(`Unsupported language: ${lang}. Falling back to 'uk'.`);
    lang = 'uk';
  }

  if (i18next.language === lang) return;

  const switchId = ++langSwitchSeq;
  const startedAt = performance.now();
  document.dispatchEvent(new CustomEvent('app:language-switch-start', { detail: { lang } }));

  try {
    await i18next.changeLanguage(lang);
    localStorage.setItem('language', lang);
    notifySubscribers(lang);
  } catch (e) {
    console.error(e);
  } finally {
    const elapsed = performance.now() - startedAt;
    const waitMs = Math.max(0, LANG_SWITCH_FADE_MS - elapsed);
    if (waitMs > 0) await sleep(waitMs);

    if (switchId !== langSwitchSeq) return;
    document.dispatchEvent(new CustomEvent('app:language-switch-end', { detail: { lang } }));
  }
};

export const subscribe = (callback) => {
  subscribers.add(callback);
  if (i18next.isInitialized && i18next.language) {
    callback(i18next.language);
  }
  return () => subscribers.delete(callback);
};

i18nReady.then(() => {
  if (i18next.language) {
    notifySubscribers(i18next.language);
  }
});
