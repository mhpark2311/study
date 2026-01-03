import { useState } from 'react';

function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div>
      <h2>{isLoggedIn ? '환영합니다' : '로그인이 필요합니다.'}</h2>
      <button onClick={handleClick}>{isLoggedIn ? '로그아웃' : '로그인'}</button>
    </div>
  );
}

export default LoginToggle;
