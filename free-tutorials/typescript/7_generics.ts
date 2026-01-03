// Generics

function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
console.log(getSize<number>(arr1));

const arr2 = ['a', 'b', 'c', 'd'];
console.log(getSize<string>(arr2));

const arr3 = [true, false, false, true, false];
console.log(getSize(arr3)); // 指定しなくてもTSが推論する

const arr4 = [{}, {}, { name: 'Tom' }, {}, { name: 'Alice' }, {}];
console.log(getSize(arr4));

const arr5 = [1, 2, {}, true, 'a', 'b', 'c'];
// arr5 の推論型に string が含まれるため、T = number | object | boolean だと型が合わず通常エラー
console.log(getSize<number | object | boolean>(arr5));

console.log('--------');

// Generics (interface)
interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

// const m1: Mobile<object> = {
const m1: Mobile<{ color: string; coupon: boolean }> = {
  name: 's21',
  price: 1000,
  option: {
    color: 'red',
    coupon: false,
  },
};

const m2: Mobile<string> = {
  name: 's22',
  price: 1200,
  option: 'Good',
};

//
interface User {
  name: string;
  age: number;
}

interface Car {
  name: string;
  color: string;
}

interface Book {
  price: number;
}

const user: User = { name: 'Tarou', age: 30 };
const car: Car = { name: 'bmw', color: 'red' };
const book: Book = { price: 3000 };

function showName<T extends { name: string }>(data: T): string {
  return data.name;
}

console.log(showName(user));
console.log(showName(car));
// showName(book); // error:bookにはnameがない
