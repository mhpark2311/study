import { useState } from 'react';

function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>State + イベントハンドラ</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <p>{count}</p>
    </div>
  );
}

export default App;
