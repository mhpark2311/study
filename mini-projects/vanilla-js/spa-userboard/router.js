import { render } from './app.js';
import Home from './pages/Home.js';
import Users from './pages/Users.js';
import UserNew from './pages/UserNew.js';
import NotFound from './pages/NotFound.js';

const routes = {
  '/': Home,
  '/users': Users,
  '/users/new': UserNew,
};

function getPath() {
  return location.hash.slice(1) || '/';
}

export function initRouter() {
  window.addEventListener('DOMContentLoaded', onRouteChange);
  window.addEventListener('hashchange', onRouteChange);
}

function onRouteChange() {
  const path = getPath();
  const page = routes[path] || NotFound;
  render(page());

  if (path === '/users/new') {
    const form = document.getElementById('user-form');
    const input = document.getElementById('username');
    if (form && input) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = input.value.trim();
        if (name) {
          window.__ADD_USER__(name);
        }
      });
    }
  }
}
