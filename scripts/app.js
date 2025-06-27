import { initRouter } from './router.js';

export const appState = {
  currentRoute: 'home',
  games: {},           // Dynamisch importierte Module
  customSets: {},      // Nutzerdefinierte Wort-/Kategorien-Sets
  settings: {          // z.B. Sprache, Timer-Defaults
    language: 'de',
    defaultTimer: 60,
  },
};

const listeners = [];
export function onStateChange(fn) {
  listeners.push(fn);
}
export function setState(updates) {
  Object.assign(appState, updates);
  listeners.forEach(fn => fn(appState));
}


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
