// Einfacher hash-basierter Router
export function initRouter(routes) {
  function onHashChange() {
    const [_, route, param] = location.hash.split('/');
    (routes[route] || routes.home)({ name: param });
  }
  window.addEventListener('hashchange', onHashChange);
  onHashChange();
}
