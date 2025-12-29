let car: string = 'bmw';
console.log(car);

// car = 3; //error
car = 'test';

console.log(car);

console.log('-----------');

let age: number = 30;
let isAdult: boolean = true;
let numArr1: number[] = [1, 2, 3];
let numArr2: Array<number> = [4, 5, 6];
let strArr1: string[] = ['a', 'b', 'c'];
let strArr2: Array<string> = ['d', 'e', 'f'];

console.log(age, isAdult);
console.log(numArr1, numArr2, strArr1, strArr2);

// numArr1.push('a'); // error
numArr1.push(100);
console.log(numArr1);

console.log('-----------');

// Tuple
let strAndNumArr: [string, number];
strAndNumArr = ['abc', 123];
// strAndNumArr = [456, 'def']; // error

console.log(strAndNumArr);
console.log(strAndNumArr[0].toUpperCase());
// console.log(strAndNumArr[1].toUpperCase()); //error

console.log('-----------');

// void(returnしない場合), never(エラー、終わらない関数)
function sayHello(): void {
  console.log('Hello');
}

sayHello();

function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    // do something
  }
}
// showError();
// infLoop();

console.log('-----------');

// enum
enum Os1 {
  Windows,
  Ios = 10,
  Android,
}

console.log(Os1['10']); // Ios
console.log(Os1['Ios']); // 10
console.log(Os1['0']); // Windows
console.log(Os1['11']); // Android
console.log(Os1);

enum Os2 {
  Windows = 'win',
  Ios = 'ios',
  Android = 'and',
}

// 👆️は👇️にcompile
// const Os2 = {
//   Windows: 'win',
//   Ios: 'ios',
//   Android: 'and',
// };

console.log(Os2['Android']); // and
// console.log(Os2['and']); // error

let myOs1: Os1;
myOs1 = Os1.Windows;

let myOs2: Os1;
// myOs2 = Os1[10]; // why not Ios but error?
// myOs2 = Os1['10']; // why not Ios but error?

console.log(myOs1); // 0
console.log(Os1[10]); // Ios
console.log(Os1['Windows']); // 0

console.log('-----------');

// null, undefined
let nullVar: null = null;
let undefinedVar: undefined = undefined;

console.log(nullVar, undefinedVar);
