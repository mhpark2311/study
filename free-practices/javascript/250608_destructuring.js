// 예제1
const user = {
  name: '홍길동',
  age: 30,
  address: {
    city: '서울',
    zip: '12345',
  },
};
const {
  name,
  address: { city },
  phone = '없음',
} = user;
console.log(name);
console.log(city);
console.log(phone);

// 예제2
const colors = ['red', 'green', 'blue', 'yellow'];
const [first, second, ...others] = colors;
console.log(first);
console.log(second);
console.log(others);

// 예제3
function greet({ name, age }) {
  console.log(`${name}입니다. 나이는 ${age}세입니다.`);
}
const user2 = { name: '지수', age: 27 };
greet(user2);

// 예제4
const product = {
  id: 1,
  name: '노트북',
  spec: {
    cpu: 'i7',
    ram: '16GB',
  },
};
const {
  spec: { cpu, gpu = '내장그래픽' },
} = product;
console.log(cpu);
console.log(gpu);
