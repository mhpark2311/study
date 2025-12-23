import { useState } from 'react';
function VisibilityToggle(props) {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div>
      <p>{isVisible ? '보이는 상태입니다' : '숨겨진 상태입니다'}</p>

      <button onClick={handleClick}>{isVisible ? '숨기기' : '보이기'}</button>
    </div>
  );
}

export default VisibilityToggle;
