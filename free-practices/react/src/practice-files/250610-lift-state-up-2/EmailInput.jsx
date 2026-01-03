function EmailInput({ value, onChange }) {
  return (
    <div>
      <label>이메일: </label>
      <input type="email" value={value} onChange={onChange} required />
    </div>
  );
}

export default EmailInput;
