const STORAGE_KEY = 'todos-v3';

const addBtn = document.querySelector('#addBtn');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');

let todos = loadFromLocalStorage();

function loadFromLocalStorage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function renderTodoList() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = createTodoItem(todo.text, todo.completed, index);
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

  // 반환값을 변수에 할당해야함
  const completeBtn = createCompleteToggle(li, index);
  const deleteBtn = createDeleteBtn(index);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  return li;
}

//완료 토글 만들기 (아직 표시하지 않음)
function createCompleteToggle(li, index) {
  const completeBtn = document.createElement('button');
  // completeBtn.textContent = li.classList.contains('completed') ? '취소' : '완료';
  completeBtn.textContent = todos[index].completed ? '취소' : '완료';
  // 완료 버튼을 클릭했을때
  completeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    todos[index].completed = !todos[index].completed;
    renderTodoList();
  });
  return completeBtn;
}

//삭제 버튼 만들기 (아직 표시하지 않음)
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
  // 추가 버튼을 클릭하면 ul 하위에 li로 추가
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
