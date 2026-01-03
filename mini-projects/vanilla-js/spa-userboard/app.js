import { initRouter } from './router.js';
import { addUser } from './state.js';

const $app = document.getElementById('app');

export function render(html) {
  $app.innerHTML = html;
}

window.__ADD_USER__ = function (name) {
  addUser(name);
  location.hash = '#/users';
};

initRouter();
