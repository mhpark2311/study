import { useState } from 'react';

export default function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button style={{ margin: '10px' }} onClick={() => setCount((prev) => prev + 1)}>
        +1
      </button>
      <button onClick={() => setCount((prev) => Math.max(0, prev - 1))}>-1</button>
    </div>
  );
}
