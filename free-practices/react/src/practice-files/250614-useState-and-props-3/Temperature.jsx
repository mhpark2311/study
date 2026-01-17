import { useState } from 'react';

function Temperature({ location }) {
  const [temp, setTemp] = useState(20);
  const increase = () => {
    if (temp < 40) {
      setTemp(temp + 1);
    }
  };

  const decrease = () => {
    if (temp > 0) {
      setTemp(temp - 1);
    }
  };

  const tempRender = () => {
    return temp <= 10 ? (
      <span style={{ color: 'blue', fontWeight: 'bold' }}>{temp}도</span>
    ) : temp >= 30 ? (
      <span style={{ color: 'red', fontWeight: 'bold' }}>더워요! {temp}도</span>
    ) : (
      <span>{temp}도</span>
    );
  };

  return (
    <div>
      <p>장소: {location}</p>
      <p>현재 온도: {tempRender()}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default Temperature;
