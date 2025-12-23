import { useState } from 'react';

function OpenAndClose(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const buttonText = isOpen ? '닫기' : '열기';
  return (
    <div>
      <p>{isOpen ? '열려있음' : '닫혀있음'}</p>
      <br />
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default OpenAndClose;
