import { routes } from '@/routes';

const normalize = (p) => (p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p || '/');

export const initRouter = (mountNode) => {
  let renderTimer = 0;
  let renderToken = 0;
  let isFirstRender = true;
  let enterTimer = 0;

  const showLoader = () => document.body.classList.add('is-page-loading');
  const hideLoader = () => document.body.classList.remove('is-page-loading');

  const handleScrollAfterRender = () => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const target = document.getElementById(id);
      if (target)
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
      return;
    }

    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 0);
  };

  const render = () => {
    const currentToken = ++renderToken;
    clearTimeout(renderTimer);
    if (!isFirstRender) showLoader();

    const path = normalize(window.location.pathname || '/');
    const routeName = path === '/' ? 'home' : path.slice(1).replace(/[^a-z0-9-]/gi, '') || 'home';
    document.body.dataset.route = routeName;
    const factory = routes[path] || routes['/'];
    let nextPage;
    try {
      nextPage = factory();
    } catch (error) {
      hideLoader();
      throw error;
    }

    renderTimer = window.setTimeout(() => {
      if (currentToken !== renderToken) return;

      mountNode.innerHTML = '';
      mountNode.appendChild(nextPage);
      clearTimeout(enterTimer);
      if (!isFirstRender) {
        mountNode.classList.add('is-route-entering');
        enterTimer = window.setTimeout(() => mountNode.classList.remove('is-route-entering'), 380);
      } else {
        mountNode.classList.remove('is-route-entering');
      }

      hideLoader();
      document.dispatchEvent(new Event('app:render'));
      handleScrollAfterRender();
      isFirstRender = false;
    }, 0);
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
