function ProductList(props) {
  const products = [
    { id: 1, name: '노트북', price: 1500000, soldOut: false },
    { id: 2, name: '마우스', price: 30000, soldOut: true },
    { id: 3, name: '키보드', price: 100000, soldOut: false },
  ];
  return (
    <div>
      <ul>
        {products
          .filter((product) => product.soldOut === false)
          .map((soldOutFalseProduct) => (
            <li key={soldOutFalseProduct.id}>
              {soldOutFalseProduct.name} - {soldOutFalseProduct.price}원
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ProductList;
