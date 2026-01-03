const STORAGE_KEY = 'todos-v4';

const addBtn = document.querySelector('#addBtn');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');

let todos = loadFromLocalStorage();

let currentFilter = 'all';

const allFilterBtn = document.querySelector('#all');
const completeFilterBtn = document.querySelector('#complete');
const incompleteFilterBtn = document.querySelector('#incomplete');

function updateFilterStyle() {
  document.querySelectorAll('#filter span').forEach((span) => {
    span.classList.remove('active');
  });
  document.querySelector(`#${currentFilter}`).classList.add('active');
}

allFilterBtn.addEventListener('click', function () {
  currentFilter = 'all';
  renderTodoList();
  updateFilterStyle();
});

completeFilterBtn.addEventListener('click', function () {
  currentFilter = 'complete';
  renderTodoList();
  updateFilterStyle();
});

incompleteFilterBtn.addEventListener('click', function () {
  currentFilter = 'incomplete';
  renderTodoList();
  updateFilterStyle();
});

function loadFromLocalStorage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function renderTodoList() {
  todoList.innerHTML = '';

  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === 'complete') return todo.completed;
    if (currentFilter === 'incomplete') return !todo.completed;
    return true;
  });

  filteredTodos.forEach((todo, index) => {
    const li = createTodoItem(todo.text, todo.completed, todos.indexOf(todo));
    todoList.appendChild(li);
  });
  saveToLocalStorage();
}

function createTodoItem(text, completed = false, index) {
  const li = document.createElement('li');
  li.textContent = text;

  if (completed) {
    li.classList.add('completed');
  }

  const completeBtn = createCompleteToggle(li, index);
  const deleteBtn = createDeleteBtn(index);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  return li;
}

function createCompleteToggle(li, index) {
  const completeBtn = document.createElement('button');
  completeBtn.textContent = todos[index].completed ? '취소' : '완료';
  completeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    todos[index].completed = !todos[index].completed;
    renderTodoList();
  });
  return completeBtn;
}

function createDeleteBtn(index) {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '삭제';
  deleteBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    todos.splice(index, 1);
    renderTodoList();
  });
  return deleteBtn;
}

function addToDo() {
  const text = todoInput.value.trim();
  if (text === '') {
    todoInput.value = '';
    return;
  }
  todos.push({ text, completed: false });
  todoInput.value = '';
  renderTodoList();
}

addBtn.addEventListener('click', function () {
  addToDo();
});

todoInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    addToDo();
  }
});

renderTodoList();
