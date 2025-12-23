import React from 'react';

function NameList() {
  const names = ['지민', '윤기', '태형', '정국'];

  return (
    <div>
      <h2>이름 목록</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li> // key는 각 요소를 고유하게 식별해주는 값 (key props)
        ))}
      </ul>
    </div>
  );
}

export default NameList;
