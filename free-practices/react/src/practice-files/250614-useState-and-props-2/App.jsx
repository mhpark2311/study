import ProductCounter from './ProductCounter';

function ProductCounterApp() {
  const productName = '사과';
  return (
    <div>
      <ProductCounter productName={productName}></ProductCounter>
    </div>
  );
}

export default ProductCounterApp;
