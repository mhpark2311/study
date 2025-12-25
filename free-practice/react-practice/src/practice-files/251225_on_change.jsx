import { useState } from 'react';

function DisplayInput() {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>入力内容：{text}</p>
    </div>
  );
}

export default DisplayInput;
