import { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`입력한 이름: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default NameForm;
