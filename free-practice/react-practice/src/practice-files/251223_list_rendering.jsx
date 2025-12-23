import React from 'react';

function NameListRender(props) {
  const users = [
    { id: 1, name: 'Kim' },
    { id: 2, name: 'Lee' },
    { id: 3, name: 'Park' },
  ];

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameListRender;
