// Literal Types

const userName1 = 'Bob';

// let userName2 = 'Tom';
// userName2 = 3; //error

let userName2: string | number = 'Tom';
userName2 = 3;

type Job = 'police' | 'developer' | 'teacher';

interface User {
  name: string;
  job: Job;
}

const user: User = {
  name: 'Bob',
  job: 'teacher',
};

interface HighSchoolStudent {
  name: string;
  grade: 1 | 2 | 3; // union type
}

// Union Types
interface Car {
  name: 'car';
  color: string;
  start(): void;
}

interface Mobile {
  name: 'mobile';
  color: string;
  call(): void;
}

// 識別可能なunion type
function getGift(gift: Car | Mobile) {
  console.log(gift.color);
  // gift.start(); // Carのみstart()があるのでエラー
  if (gift.name === 'car') {
    gift.start(); // giftにマウスを置くとCarと分かる
  } else {
    gift.call(); // giftにマウスを置くとMobileと分かる
  }
}

// Intersection Types
interface Car2 {
  name: string;
  start(): void;
}

interface Toy {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car2 = {
  name: 'my car',
  start() {},
  color: 'red',
  price: 3000,
};

console.log(toyCar.name);
