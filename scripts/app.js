import { initRouter } from './router.js';

function renderHome() {
  document.getElementById('app').innerHTML = `
    <h2>Spiele-Auswahl</h2>
    <ul>
      <li><a href="#/game/imposter">Imposter</a></li>
      <li><a href="#/game/bomb">Bombe</a></li>
    </ul>`;
}

function mountGame(name) {
  import(`./games/${name}.js`)
    .then(mod => mod.render(document.getElementById('app')))
    .catch(() => renderHome());
}

initRouter({
  home: () => renderHome(),
  game: ({ name }) => mountGame(name),
});
