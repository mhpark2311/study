let user1: object;

user1 = {
  name: 'Tarou',
  age: 30,
};

// console.log(user1.name); //error

type Score = 'A' | 'B' | 'C' | 'F';

interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  // 1?: string; //1年生のときの成績
  // 2?: string;
  // 3?: string;
  // 4?: string;
  [grade: number]: Score;
}

let user2: User = {
  name: 'Hanako',
  age: 32,
  birthYear: 2000, //最初だけ割当可能
  1: 'A',
  2: 'C',
  3: 'B',
};
console.log(user2.name, user2.age);

user2.age = 18;
console.log(user2.age);

// interfaceにgender?(optional)がない場合はerror
user2.gender = 'female';
console.log(user2.gender);

// user2.birthYear = 1999; //readonlyの場合エラー
console.log(user2.birthYear);

console.log('----------');

interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};
console.log(add(3, 4));

interface IsAdult {
  (age: number): boolean;
}

const checkOver18: IsAdult = (age) => {
  // return age >= 18 ? true : false;
  return age >= 18;
};

console.log(checkOver18(19));
console.log(checkOver18(16));
console.log(checkOver18(18));

console.log('----------');

// implements
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color = 'red';
  wheels = 4;
  start() {
    console.log('go..');
  }
}

const bmw = new Bmw();
console.log(bmw.color);
console.log(bmw.wheels);
bmw.start();

// implements(class)
class MyCar implements Car {
  color;
  constructor(color: string) {
    this.color = color;
  }
  wheels = 3;
  start() {
    console.log('go!!');
  }
}

const blueCar = new MyCar('blue');

console.log(blueCar.color);
console.log(blueCar.wheels);
blueCar.start();

console.log('----------');

//extends
interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  door: 5,
  stop() {
    console.log('stop');
  },

  color: 'yellow',
  wheels: 6,
  start() {
    console.log('go~');
  },
};

console.log(benz.door);
benz.stop();

// 同時にextend
interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}

const toyCar: ToyCar = {
  color: 'white',
  wheels: 8,
  start() {
    console.log('go~!');
  },
  name: 'my toycar',
  price: 3000,
};

console.log(toyCar.name);
console.log(toyCar.price);
