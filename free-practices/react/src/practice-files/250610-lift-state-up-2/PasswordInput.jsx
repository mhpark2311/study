function PasswordInput({ value, onChange }) {
  return (
    <div>
      <label>비밀번호: </label>
      <input type="password" value={value} onChange={onChange} required />
    </div>
  );
}

export default PasswordInput;
