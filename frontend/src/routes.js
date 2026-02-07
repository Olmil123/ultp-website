import { createMain } from '@/templates/main';
import { createPracticesPage } from '@/pages/practices';
import { createServicesPage } from '@/pages/services';

export const routes = {
  '/': () => createMain(),
  '/practices': () => createPracticesPage(),
  '/services': () => createServicesPage(),
};
