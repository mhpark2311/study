import { useState } from 'react';

function CountChar(props) {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    const value = e.target.value;
    // if (text.length < 20) {
    if (value.length <= 20) {
      // setText(e.target.value);
      setText(value);
    }
  };
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Character count : {text.length !== 0 ? text.length : 'no input'}</p>
    </div>
  );
}

export default CountChar;
