// プリミティブ型
let username: string = 'Taro';
let age: number = 30;
let isAdmin: boolean = false;

// 配列の型
let scores: number[] = [80, 90, 100];
let names: Array<string> = ['a', 'b'];
let scores2: Array<number> = [50, 60, 70];

console.log(scores, scores2);

// オブジェクト型
let user1: { id: number; name: string } = { id: 1, name: 'Hanako' };

// interface
interface User {
  id: number;
  name: string;
  isAdmin?: boolean; // optional
}

const user2: User = {
  id: 1,
  name: 'Tom',
};
