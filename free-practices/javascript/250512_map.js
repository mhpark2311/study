// 숫자를 2배
let numbers = [1, 2, 3];
let doubled = numbers.map((n) => n * 2);
console.log(doubled);

// 숫자를 제곱
let num = [1, 2, 3, 4];
let squared = num.map((x) => x * x);
console.log(squared);

// 문자열 대문자로 변환
let fruits = ['apple', 'banana', 'cherry'];
let upper = fruits.map((fruit) => fruit.toUpperCase());
console.log(upper);

// 길이로 변환
let words = ['hi', 'hello', 'welcome'];
let len = words.map((word) => word.length);
console.log(len);

// 객체 배열에서 특정 속성만 추출
let users = [
  { name: 'Tom', age: 20 },
  { name: 'Jane', age: 22 },
];
let ages = users.map((userinfo) => userinfo.age);
console.log(ages);
// forEach로 재현
let ages2 = [];
users.forEach((userinfo, i) => {
  ages2.push(users[i].age);
});
console.log(ages2);

// 인덱스를 함께 사용
const letters = ['a', 'b', 'c'];
const letterandidx = letters.map((char, idx) => idx + ': ' + char);
console.log(letterandidx);

// HTML 태그로 감싸기
const items = ['pen', 'book', 'cup'];
const li = items.map((item) => `<li>${item}</li>`);
console.log(li);

// 날짜 문자열 → 날짜 객체
const dateStrings = ['2025-05-12', '2025-05-13'];
const dates = dateStrings.map((datestr) => new Date(datestr));
console.log(dates);

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
// ];
// const names = people.map((nameandage) => nameandage.name);
// console.log(names);
