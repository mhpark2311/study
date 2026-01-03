/**
 * Array Functions Methods
 */

let iveMembers = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

console.log(iveMembers);

// push()
console.log(iveMembers.push('코드팩토리')); // 맨뒤에 코드팩토리 추가 & 총 길이 7을 반환
console.log(iveMembers); // 코드팩토리가 추가된 채 반환됨

console.log('-------------');

// pop()
console.log(iveMembers.pop()); // 마지막 값을 삭제 & 반환
console.log(iveMembers);

console.log('-------------');

//shift()
console.log(iveMembers.shift()); // 첫 값을 삭제 & 반환
console.log(iveMembers);

console.log('-------------');

//unshift()
console.log(iveMembers.unshift('안유진2')); // 맨앞에 안유진2를 추가 & 총길이 6을 반환
console.log(iveMembers);

console.log('-------------');

//splice()
iveMembers = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];
console.log('//splice()');
console.log(iveMembers.splice(2, 3)); // 인덱스 [2]값부터 3개를 삭제 후 삭제값 반환
console.log(iveMembers); // 변경됨

console.log('-------------');

console.log(iveMembers);
console.log('-------------');

//concat()
console.log(iveMembers.concat('코드팩토리')); //맨뒤에 코드팩토리 추가된 채로 반환
console.log(iveMembers); // 변경되지 않고 코드팩토리값 없음
console.log('-------------');

//slice()
iveMembers = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];
console.log('//slice()');
console.log(iveMembers.slice(2, 4)); // 인덱스 [2]값부터 인덱스 [3 (4에서 1을 뺌)]번째 값까지 반환
console.log(iveMembers); // 변경되지 않음
console.log('-------------');

// spread operator
let iveMembers2 = [...iveMembers]; // 리스트를 펼쳐서 새 리스트 안에 넣음
console.log(iveMembers2);

let iveMembers3 = [iveMembers]; // 리스트 안에 리스트가 들어가게 됨
console.log(iveMembers3);

let iveMembers4 = iveMembers;

console.log(iveMembers4 === iveMembers); // true

// console.log([...iveMembers] === iveMembers); // false
console.log([...iveMembers]);
console.log(iveMembers);

console.log(iveMembers2 === iveMembers); // false

console.log('-------------');

// join()
console.log('// join()');
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));
console.log(typeof iveMembers); // object
console.log(typeof iveMembers.join()); // string

// sort()
// 오름차순
console.log('// sort()');
iveMembers.sort(); // 반환값 없음
console.log(iveMembers);

console.log(iveMembers.reverse()); // 반대로 (내림차순)
console.log(iveMembers); // 변경됨

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

// a,b를 비교했을때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);

//반대로
//numbers.sort((a, b) => (a > b ? -1 : 1));
//console.log(numbers);
//console.log('-------------');

// map()
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));
console.log(
  iveMembers.map((x) => {
    if (x === '안유진') {
      return `아이브:${x}`;
    } else {
      return x;
    }
  })
);
console.log(iveMembers);

// filter()
console.log('filter()');
number = [1, 7, 4, 3, 2];
console.log(number.filter((x) => true)); // x에 1,7,4,3,2 모두 넣어라
console.log(number.filter((x) => false)); // 모두 넣지 마라
console.log(number.filter((x) => x % 2 === 0));

//find() // 처음 걸리는 값만 반환
console.log(number.find((x) => x % 2 === 0));

//findIndex() 처음 걸리는 값의 인덱스값을 반환
console.log(number.findIndex((x) => x % 2 === 0));

//reduce()
console.log(number.reduce((p, n) => p + n, 0));
