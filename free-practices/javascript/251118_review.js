// ✅ Problem 1（基礎・getter）
// クラス Rectangle を作れ。
// width, height を持つ
// 面積を返す area (getter) を作る
// rect.area で呼び出せるようにする
// 実行例
// const r = new Rectangle(4, 5);
// console.log(r.area); // 20

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }

  test() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(15, 20);
console.log(rect.area);
console.log(rect.test());

console.log('---------------');

// ✅ Problem 2（基礎・setter）
// クラス User を作れ。
// firstName, lastName を持つ
// fullName setter を作り "Yamada Taro" のような文字列を入れると
// firstName, lastName がそれぞれセットされるようにする
// getter で fullName を返せるようにする

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  set fullName(yourFullname) {
    // this.firstName = yourFullname.split(' ')[1];
    // this.lastName = yourFullname.split(' ')[0];
    const [first, last] = yourFullname.split(' ');
    this.firstName = first;
    this.lastName = last;
  }
  get fullName() {
    return `私の名前は、${this.lastName} ${this.firstName}です`;
  }
}
const myName = new User('testFirstname', 'testLastname');
console.log(myName.fullName);
myName.fullName = '山田 花子';
console.log(myName.fullName);

// ✅ Problem 3（応用・setter + バリデーション）
// クラス BankAccount を作れ。
// balance をプロパティとして持つ（初期値は 0）
// deposit setter を作り、正の数だけ入金できるようにする
// 0以下の値が来たらエラーを投げる
// balance getter で残高を返す

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
  set deposit(amount) {
    if (amount < 0) {
      //this.balance = 'error';
      throw new Error('入金額は0以上です');
    } else this.balance += amount;
  }
  get deposit() {
    return `残高は${this.balance}です`;
  }
}
const myBalance = new BankAccount(10000000);
console.log(myBalance.deposit);
//myBalance.deposit = -3000;
//console.log(myBalance.deposit);
myBalance.deposit = 7000;
console.log(myBalance.deposit);
