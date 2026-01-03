import { addUser } from '../state.js';
import { render } from '../app.js';
import Users from './Users.js';

export default function UserNew() {
  return `
    <h1>Add User</h1>
    <form id="user-form">
      <input type="text" id="username" placeholder="Enter user name" required />
      <button type="submit">Add</button>
    </form>
  `;
}
