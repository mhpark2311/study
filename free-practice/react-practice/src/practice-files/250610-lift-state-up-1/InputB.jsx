function InputB({ value, onChange }) {
  return (
    <div>
      <label>입력 B: </label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default InputB;
