import { routes } from '@/routes';

const normalize = (p) => (p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p || '/');

export const initRouter = (mountNode) => {
  const render = () => {
    const path = normalize(window.location.pathname || '/');
    const routeName =
      path === '/' ? 'home' : path.slice(1).replace(/[^a-z0-9-]/gi, '') || 'home';
    document.body.dataset.route = routeName;
    const factory = routes[path] || routes['/'];
    mountNode.innerHTML = '';
    mountNode.appendChild(factory());
    document.dispatchEvent(new Event('app:render'));

    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const target = document.getElementById(id);
      if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
    }
  };

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-link]');
    if (!a) return;

    const href = a.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:'))
      return;

    e.preventDefault();
    history.pushState({}, '', href);
    window.dispatchEvent(new Event('popstate'));
  });

  window.addEventListener('popstate', render);
  render();
};
