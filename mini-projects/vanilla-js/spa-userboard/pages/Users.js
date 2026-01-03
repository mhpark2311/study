import { state } from '../state.js';

export default function Users() {
  const users = state.users;

  if (users.length === 0) {
    return `<h1>Users</h1><p>No users found.</p>`;
  }

  const listItems = users.map((user) => `<li>${user.name}</li>`).join('');

  return `
    <h1>Users</h1>
    <ul>
      ${listItems}
    </ul>
  `;
}
