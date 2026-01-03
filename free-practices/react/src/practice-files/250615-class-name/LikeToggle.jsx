import { useState } from 'react';
import './LikeToggle.css';

function LikeToggle() {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <p className={liked ? 'liked' : 'unliked'}>{liked ? '❤ 좋아요!' : '♡ 좋아요 취소'}</p>
      <button onClick={() => setLiked(!liked)}>{liked ? '취소하기' : '좋아요'}</button>
    </div>
  );
}

export default LikeToggle;
