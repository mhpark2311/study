import { useState } from 'react';

function ProductCounter({ productName }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>상품명: {productName}</p>
      <p>수량: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default ProductCounter;
