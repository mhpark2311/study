// 元のコード（コピーして使っていい）
// export default function ShoppingList() {
//   return (
//     <div>
//       <h1>Shopping List</h1>

//       <div className="product">
//         <h2>Apple</h2>
//         <img
//           className="thumb"
//           src="/images/apple.jpg"
//           alt="apple"
//           width={80}
//         />
//         <p>Price: $1</p>
//         <p>Category: Fruit</p>
//       </div>

//       <div className="product">
//         <h2>Bread</h2>
//         <img
//           className="thumb"
//           src="/images/bread.jpg"
//           alt="bread"
//           width={80}
//         />
//         <p>Price: $2</p>
//         <p>Category: Bakery</p>
//       </div>

//       <div className="product">
//         <h2>Milk</h2>
//         <img
//           className="thumb"
//           src="/images/milk.jpg"
//           alt="milk"
//           width={80}
//         />
//         <p>Price: $3</p>
//         <p>Category: Dairy</p>
//       </div>
//     </div>
//   );
// }

export default function ShoppingList() {
  const apple = {
    name: 'Apple',
    imgurl: '/251127-component-extract/apple.jpg',
    price: '$1',
    category: 'Fruit',
  };
  const bread = {
    name: 'Bread',
    imgurl: '/251127-component-extract/bread.jpg',
    price: '$2',
    category: 'Bakery',
  };
  const milk = {
    name: 'Milk',
    imgurl: '/251127-component-extract/milk.jpg',
    price: '$3',
    category: 'Dairy',
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <Product item={apple} width={150}></Product>
      <Product item={bread} width={150}></Product>
      <Product item={milk}></Product>
    </div>
  );
}

// 🎯 課題
// 以下を行ってください：
// <div className="product">...</div> の重複を見つける
// Product コンポーネントを抽出する
// どの値を props として渡すべきか自分で考えて実装する
// ShoppingList から <Product /> を呼び出すように変更する

function Product({ item, width = 80 }) {
  return (
    <div className="product">
      <h2>{item.name}</h2>
      <img className="thumb" src={item.imgurl} alt={item.name.toLowerCase()} width={width} />
      <p>Price: {item.price}</p>
      <p>Category: {item.category}</p>
    </div>
  );
}
