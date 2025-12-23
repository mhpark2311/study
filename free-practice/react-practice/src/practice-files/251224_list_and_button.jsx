function ToDoList() {
  const todos = [
    { id: 1, text: '공부하기', done: false },
    { id: 2, text: '운동하기', done: true },
  ];
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            {todo.done === true ? '✔' : null}
            <button onClick={() => console.log(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
