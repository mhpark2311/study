function FruitList(props) {
  const fruits = ['사과', '바나나', '오렌지', '포도'];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
