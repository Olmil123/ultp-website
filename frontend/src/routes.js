import { createMain } from '@/templates/main';
import { createPracticesPage } from '@/pages/practices';
import { createServicesPage } from '@/pages/services';
import { createAboutPage } from '@/pages/about';
import { createCaseTokenizationPage } from '@/pages/case1';
import { createCaseDigitalIdentityPage } from '@/pages/case2';
import { createCaseCryptoEducationPage } from '@/pages/case3';

export const routes = {
  '/': () => createMain(),
  '/about': () => createAboutPage(),
  '/cases/tokenization': () => createCaseTokenizationPage(),
  '/cases/digital-identity': () => createCaseDigitalIdentityPage(),
  '/cases/crypto-education': () => createCaseCryptoEducationPage(),
  '/practices': () => createPracticesPage(),
  '/services': () => createServicesPage(),
};
