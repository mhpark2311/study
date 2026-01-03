import { useState } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

function SignUpFormApp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('회원가입 정보:', { email, password });
    alert('콘솔을 확인하세요!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>회원가입 폼</h2>
      <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">회원가입</button>
    </form>
  );
}

export default SignUpFormApp;
