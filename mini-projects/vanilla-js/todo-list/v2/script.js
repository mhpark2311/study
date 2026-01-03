const todoInput = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addBtn');
const todoList = document.querySelector('#todoList');

function createCompleteBtn(targetLi) {
  const completeBtn = document.createElement('button');
  completeBtn.textContent = '완료';

  completeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    targetLi.classList.toggle('completed');
    if (targetLi.classList.value === 'completed') {
      completeBtn.textContent = '취소';
    } else {
      completeBtn.textContent = '완료';
    }
  });

  return completeBtn;
}

function createDeleteBtn(targetLi) {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '삭제';

  deleteBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    targetLi.remove();
  });

  return deleteBtn;
}

function createTodoItem(text) {
  const li = document.createElement('li');
  li.textContent = text;

  const completeBtn = createCompleteBtn(li);
  const deleteBtn = createDeleteBtn(li);

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  return li;
}

function addTodo() {
  const text = todoInput.value.trim();

  if (text === '') return;

  const todoItem = createTodoItem(text);
  todoList.appendChild(todoItem);
  todoInput.value = '';
}

addBtn.addEventListener('click', addTodo);
