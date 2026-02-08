import { createMain } from '@/templates/main';
import { createPracticesPage } from '@/pages/practices';
import { createServicesPage } from '@/pages/services';
import { createAboutPage } from '@/pages/about';

export const routes = {
  '/': () => createMain(),
  '/about': () => createAboutPage(),
  '/practices': () => createPracticesPage(),
  '/services': () => createServicesPage(),
};
