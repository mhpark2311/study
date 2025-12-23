import { useState } from 'react';

export default function ButtonToggle(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = function () {
    setIsLoggedIn((prev) => !prev);
  };

  const buttonText = isLoggedIn ? '환영합니다!' : '로그인이 필요합니다.';
  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}
