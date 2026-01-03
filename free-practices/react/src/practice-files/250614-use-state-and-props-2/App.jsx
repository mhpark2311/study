import ProductCounter from './ProductCounter';

function App() {
  const productName = '사과';
  return (
    <div>
      <ProductCounter productName={productName}></ProductCounter>
    </div>
  );
}

export default App;
