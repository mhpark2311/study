function LikeButton({ count, onClick }) {
  return <button onClick={onClick}>❤ {count} 좋아요</button>;
}

export default LikeButton;
