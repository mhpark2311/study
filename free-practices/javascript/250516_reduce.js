// 문제 1. 배열의 총합 구하기
const nums = [10, 20, 30, 40];
// reduce를 사용하여 총합을 구하시오.
result = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(result);

//문제 2. 가장 긴 문자열 찾기
const words = ['apple', 'banana', 'grapefruit', 'kiwi'];
// reduce를 사용하여 가장 긴 문자열을 구하시오
result = words.reduce((acc, curr) => {
  return curr.length > acc.length ? curr : acc;
}, '');
console.log(result);

// 문제 3. 객체 배열에서 특정 속성의 합 구하기
const users = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 25 },
  { name: 'Carol', age: 30 },
];
// reduce를 사용하여 모든 사용자의 나이 합을 구하시오.
result = users.reduce((acc, curr) => acc + curr.age, 0);
console.log(result);

// 문제 5. 숫자 배열을 이어붙여 문자열 만들기
const digits = [1, 2, 3, 4, 5];
// reduce를 사용하여 "12345" 문자열을 만드시오.
result = digits.reduce((acc, digit) => acc + digit, '');
console.log(result);
