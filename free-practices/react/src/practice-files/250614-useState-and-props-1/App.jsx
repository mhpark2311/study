import { useState } from 'react';
import LikeButton from './LikeButton';

function LikeButtonApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>좋아요 실습</h1>
      <LikeButton count={count} onClick={() => setCount(count + 1)} />
    </div>
  );
}

export default LikeButtonApp;
