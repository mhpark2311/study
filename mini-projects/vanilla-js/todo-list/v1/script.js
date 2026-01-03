const todoInput = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addBtn');
const todoList = document.querySelector('#todoList');

addBtn.addEventListener('click', () => {
  // li 생성
  const newItem = document.createElement('li');
  newItem.textContent = todoInput.value;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '삭제';

  deleteBtn.addEventListener('click', () => {
    newItem.remove();
  });

  // li에 삭제 버튼 추가 후 todoList에 추가
  newItem.appendChild(deleteBtn);
  todoList.appendChild(newItem);

  todoInput.value = '';
});
