// ✅ Problem 4（static 基礎）
// クラス MathHelper を作れ。
// インスタンス化は不要（または禁止してもよい）
// static add(x, y)
// static minus(x, y)
// 2つの数値を渡して計算できるユーティリティクラスにする
// ※ 実務でも「Utility クラス風の static」はよく出てくる。
class MathHelper {
  // constructor(x, y) {
  //   this.x = x;
  //   this.y = y;
  // }
  static add(x, y) {
    return x + y;
  }
  static minus(x, y) {
    return x - y;
  }
  notStaticAdd(x, y) {
    return x + y;
  }
  get getAdd() {
    return this.x + this.y;
  }
}

console.log(MathHelper.add(3, 4));
console.log(MathHelper.minus(100, 1));

const test = new MathHelper(10, 20);
console.log(test);
console.log(test.notStaticAdd(100, 200));
console.log(test.getAdd);
console.log('----------');

// 🔵 Problem A（④：ユーティリティ static）
// クラス Formatter を作れ。
// 名前	内容
// static yen(price)	数値を「¥○○○」形式に変換
// static capital(str)	文字列の最初の1文字だけ大文字に変換
// 例
// Formatter.yen(1200);    // "¥1,200"
// Formatter.capital("apple"); // "Apple"
// ⚠ インスタンス化禁止 (new Formatter() できないようにしてOK)
class Formatter {
  constructor() {
    throw new Error('インスタンス化出来ません');
  }
  static yen(price) {
    // return `¥${price}`;
    return `¥${price.toLocaleString()}`;
  }
  static capital(str) {
    return str
      .split('')
      .map((v, i) => {
        return i === 0 ? str[i].toUpperCase() : str[i];
      })
      .join('');
  }
  static smartCapital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
console.log(Formatter.yen(555));
console.log(Formatter.capital('orange'));
console.log(Formatter.smartCapital('banana'));
console.log(Formatter.yen(99999));
// console.log(new Formatter()); // Error
console.log('-------------');

// 🟡 Problem B（③：static カウンター）
// クラス AccessLogger を作れ。
// 要素	内容
// static count	アクセス回数
// constructor	生成時に count を 1 追加
// static getCount()	現在のアクセス数を返す
// 例
// new AccessLogger();
// new AccessLogger();
// console.log(AccessLogger.getCount()); // 2
// 💡 Web では「ページアクセス数」などでよく使われる。

// NGコード
// let count = 0;
// class AccessLogger {
//   constructor() {
//     count += 1;
//   }
//   static getCount() {
//     return count;
//   }
// }
// console.log(AccessLogger.getCount());
// new AccessLogger();
// console.log(AccessLogger.getCount());
// new AccessLogger();
// console.log(AccessLogger.getCount());

// 正解
class AccessLogger2 {
  static count = 0;
  // static #count = 0;
  constructor() {
    AccessLogger2.count++;
    // AccessLogger2.#count++;
  }
  static getCount() {
    return AccessLogger2.count;
    // return AccessLogger2.#count;
  }
}
console.log(AccessLogger2.getCount());
new AccessLogger2();
console.log(AccessLogger2.getCount());
new AccessLogger2();
console.log(AccessLogger2.getCount());
// AccessLogger2.#count = 99; // SyntaxError: Private field '#count' must be declared in an enclosing class

AccessLogger2.count = 7890;
console.log(AccessLogger2.getCount());

console.log('----------');

// 🔴 Problem C（⑥：private + static）
// クラス ApiToken を作れ。
// 要素	内容
// private static #token	文字列 "XYZ-9999" を持つ
// static get()	token を返す
// static set(newToken)	token を更新
// ただし外から ApiToken.#token に直接アクセスできないこと
// 期待挙動
// console.log(ApiToken.get()); // XYZ-9999
// ApiToken.set("ABC-1234");
// console.log(ApiToken.get()); // ABC-1234
// console.log(ApiToken.#token); // ❌ エラーになる
// 🚫 private が正しく機能していないとアウト！

// NGコード
// class ApiToken {
//   static #token = 'XYZ-9999';
//   static temp = this.#token;

//   static set(newToken) {
//     this.temp = newToken;
//   }

//   static get() {
//     return this.temp;
//   }
//   // static get() {
//   //   return ApiToken.temp;
//   // }
// }
// console.log(ApiToken.get());
// ApiToken.set('ABC-1234');
// console.log(ApiToken.get());
// console.log(ApiToken.#token); // error

// 正解コード
class ApiToken2 {
  static #token = 'XYZ-9999';
  static get() {
    return this.#token;
  }
  static set(newToken) {
    this.#token = newToken;
  }
}

console.log(ApiToken2.get());
ApiToken2.set('DEF-7777');
console.log(ApiToken2.get());
// console.log(ApiToken2.#token); // error

console.log('-----------');
