/**
 * Loops
 *
 * 1) for
 * 2) while
 *
 */

for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log('---------');
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log('---------');
for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j);
  }
}
console.log('---------');

// *을 이용해서 6x6 정사각형 출력
let square = '';
let side = 6;

for (let i = 0; i < side; i++) {
  for (let j = 0; j < side; j++) {
    square += '*';
  }
  square += '\n';
}
console.log(square);
console.log('---------');

/**
 * for...in
 */
//key 변수는 오브젝트의 key값을 가져옴
const yuJin = {
  name: '안유진',
  year: 2003,
};
for (let key in yuJin) {
  console.log(key);
}
console.log('---------');
//key는 어레이의 인덱스숫자를 가져옴
const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];
for (let key in iveMembersArray) {
  // console.log(key);
  console.log(`${key} ${iveMembersArray[key]}`);
}
console.log('---------');

/**
 * for...of
 */

for (let value of iveMembersArray) {
  console.log(value);
}
console.log('---------');
/**
 * While
 */

console.log('while');

let number = 0;
while (number < 10) {
  number++;
}

console.log(number);
console.log('---------');

// let i;
// for (i = 0; i < 10; i++) {}
// console.log(i);

/**
 * do...while
 */

number = 0;
do {
  number++;
} while (number < 10);
console.log(number);
console.log('---------');

/**
 * Break
 *
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
console.log('---------');

number = 0;
while (number < 10) {
  if (number === 5) {
    break;
  }
  number++;
  console.log(number);
}
console.log('---------');

/**
 * continue
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

console.log('---------');

number = 0;
while (number < 10) {
  number++;
  if (number === 5) {
    continue;
  }

  console.log(number);
}
