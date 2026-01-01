// keyof
interface User {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

const uk: UserKey = 'age';

// Partial<T>
interface User1 {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

let admin: Partial<User1> = {
  id: 1,
  name: 'Bob',
};

// Partialは下記とほぼ同じ挙動
// interface User {
//   id?: number;
//   name?: string;
//   age?: number;
//   gender?: 'm' | 'f';
// }

// Required<T>
interface User2 {
  id: number;
  name: string;
  age?: number; //optionalだが、必須になる
}

let admin2: Required<User2> = {
  id: 1,
  name: 'Bob',
  age: 30,
};

// Readonly<T>
interface User3 {
  id: number;
  name: string;
  age?: number;
}

let admin3: Readonly<User3> = {
  id: 1,
  name: 'Bob',
};

// admin3.id = 4; // Readonly<User3>なので再代入不可

// Record<K,T>
// interface Score {
//   '1': 'A' | 'B' | 'C' | 'D';
//   '2': 'A' | 'B' | 'C' | 'D';
//   '3': 'A' | 'B' | 'C' | 'D';
//   '4': 'A' | 'B' | 'C' | 'D';
// }

// const score: Score = {
//   '1': 'A',
//   '2': 'C',
//   '3': 'B',
//   '4': 'D',
// };

type Grade = '1' | '2' | '3' | '4';
type Score = 'A' | 'B' | 'C' | 'D' | 'F';

const score: Record<Grade, Score> = {
  '1': 'A',
  '2': 'C',
  '3': 'B',
  '4': 'D',
};

// Record<K,T> part2
interface User4 {
  id: number;
  name: string;
  age: number;
}

function isValid(user: User4) {
  const result: Record<keyof User4, boolean> = {
    id: user.id > 0,
    name: user.name !== '',
    age: user.age > 0,
  };
  return result;
}

// Pick<T,K>
interface User5 {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

const admin5: Pick<User5, 'id' | 'name'> = {
  id: 0,
  name: 'Bob',
};

// Omit<T,K>
interface User6 {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

const admin6: Omit<User6, 'age' | 'gender'> = {
  id: 0,
  name: 'Bob',
};

// Exclude<T1,T2>
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;

// NonNullable<Type>
type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>;
