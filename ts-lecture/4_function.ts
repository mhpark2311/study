// function

function add(num1: number, num2: number): void {
  // return num1 + num2
  console.log(num1 + num2);
}
add(100, 200);

function isAdult(age: number): boolean {
  return age > 19;
}
console.log(isAdult(15));

console.log('----------');

// optional(name?)
function hello(name?: string): string {
  return `Hello, ${name || 'world'}`;
}

console.log('hello function :');
// console.log(hello(''));
console.log(hello());
console.log(hello('Tarou'));

function hello2(name = 'world'): string {
  return `Hello, ${name}`;
}
console.log('hello2 function :');
console.log(hello2());
console.log(hello2('Sam'));

function hello3(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}. age : ${age}`;
  } else {
    return `Hello, ${name}`;
  }
}
console.log('hello3 function :');
console.log(hello3('Tom'));
console.log(hello3('Alice', 20));

// ageが先なら
// function hello3(age?: number, name: string): string { // error
function hello4(age: number | undefined, name: string): string {
  if (age !== undefined) {
    return `Hello, ${name}. age : ${age}`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log('hello4 function :');
console.log(hello4(undefined, 'Hanako'));
console.log(hello4(30, 'Hanako'));

console.log('----------');

// ... and reduce
function add2(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}
console.log(add2(1, 2, 3, 4));

console.log('----------');

// this
interface User {
  name: string;
}
const Sam: User = { name: 'Sam' };

function showName(this: User, age: number, gender: 'm' | 'f') {
  console.log(this.name, age, gender);
}

const a = showName.bind(Sam);
a(20, 'f');

console.log('----------');

// overload
interface User2 {
  name: string;
  age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): User2;
function join(name: string, age: number | string): User2 | string {
  return typeof age === 'number' ? { name, age } : '年齢は数字でご入力ください';
}

const john: User2 = join('John', 30);
const jane: string = join('Jane', '30');
console.log(john);
console.log(jane);
