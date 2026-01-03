//null 또는 undefined 제거
const data = [1, null, 2, undefined, 3];
const cleaned = data.filter((item) => item !== null && item !== undefined);
console.log(cleaned);

// 다음 숫자 배열에서 짝수만 걸러서 새로운 배열을 만들어보세요.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const even = numbers.filter((x) => x % 2 === 0);
console.log(even);

//아래는 사용자 목록입니다. isActive가 true인 사용자만 필터링하여 새로운 배열을 만드세요.
const users = [
  { name: '지민', isActive: true },
  { name: '윤기', isActive: false },
  { name: '정국', isActive: true },
  { name: '남준', isActive: false },
];
// 여기에 filter()를 사용해서 isActive가 true인 사용자만 담기도록 하세요.
const activeUsers = users.filter((user) => user.isActive === true);
console.log(activeUsers);
// 예상 출력:
// [
//   { name: "지민", isActive: true },
//   { name: "정국", isActive: true }
// ]

//아래는 상품 리스트야. 재고 수량이 1개 이상이고, 카테고리가 "electronics"인 상품만 골라서 새로운 배열을 만들어보세요.
const products = [
  { name: 'Laptop', stock: 3, category: 'electronics' },
  { name: 'Shirt', stock: 10, category: 'clothing' },
  { name: 'TV', stock: 0, category: 'electronics' },
  { name: 'Phone', stock: 5, category: 'electronics' },
  { name: 'Jeans', stock: 2, category: 'clothing' },
];
// 여기에 filter()를 사용해 조건에 맞는 상품만 걸러보세요.
const availableElectronics = products.filter(
  (product) => product.stock >= 1 && product.category === 'electronics'
);
console.log(availableElectronics);
// 예상 출력:
// [
//   { name: "Laptop", stock: 3, category: "electronics" },
//   { name: "Phone", stock: 5, category: "electronics" }
// ]
