/**
 * copy by value값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 프리미티브 값은 copy by value
 * 2) 객체는 copy by reference
 */

let original = '안녕하세요';
let clone = original; // copy by value

console.log(original);
console.log(clone);

original += ' 안유진입니다.';
console.log('-------------');
console.log(original);
console.log(clone);
console.log('-------------');

let originalObj = {
  name: '안유진',
  group: '아이브',
};

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

cloneObj['group'] = '코드팩토리1';

console.log(originalObj);
console.log(cloneObj);

originalObj = {
  name: '안유진',
  group: '아이브',
};
cloneObj = {
  name: '안유진',
  group: '아이브',
};
console.log(originalObj === cloneObj);

console.log('-------------');

const yuJin1 = {
  name: '안유진',
  group: '아이브',
};
const yuJin2 = yuJin1;
const yuJin3 = {
  name: '안유진',
  group: '아이브',
};

console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false
console.log('-------------');
/**
 * Spread Operator
 */
const yuJin4 = {
  ...yuJin3,
};
console.log(yuJin4);
console.log(yuJin4 === yuJin3); // false (copy by value)

const yuJin5 = {
  year: 2003,
  ...yuJin3,
};
console.log(yuJin5);

const yuJin6 = {
  name: '코드팩토리',
  ...yuJin3,
};
console.log(yuJin6);

const yuJin7 = {
  ...yuJin3,
  name: '코드팩토리',
};
console.log(yuJin7);
console.log('-------------');

const numbers = [1, 3, 5];
const numbers2 = [10, ...numbers];
console.log(numbers2);

const numbers3 = [...numbers, 10];
console.log(numbers3);
