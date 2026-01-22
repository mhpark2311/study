function InputA({ value, onChange }) {
  return (
    <div>
      <label>입력 A: </label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default InputA;
