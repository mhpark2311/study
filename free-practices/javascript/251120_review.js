const test = function () {
  var outer = 100;
  {
    var inner = 200;
    // let inner = 300; // error
    console.log(outer);
  }
  console.log(inner);
};
test();
console.log('------------');

// result : Yujin1 // method の this は、そのメソッドを持っているオブジェクト
const person1 = {
  name: 'Yujin1',
  sayHi: function () {
    console.log(this.name);
  },
};
console.log('person1.sayHi() :');
person1.sayHi();

console.log('------------');

// result1 : undefined // hi の this は「誰も所有していない＝global or undefined」
// result2 : Yujin2 // コードはYujin1と同じ
const person2 = {
  name: 'Yujin2',
  sayHi: function () {
    console.log(this.name);
  },
};
console.log('hi() :');
const hi = person2.sayHi;
hi(); // undefined

console.log('person2.sayHi() :');
person2.sayHi(); // Yujin2

console.log('------------');

// result : undefined // Arrow 関数は this を持たない。代わりに、外側の this をそのまま引き継ぐ（固定される）
const person3 = {
  name: 'Yujin3',
  sayHi: () => {
    console.log(this.name);
  },
};
console.log('person3.sayHi() :');
person3.sayHi();
console.log('------------');

// result : Yujin4 // 「arrowFunction が 書かれた場所（定義された位置）」でthisが決まる
const person4 = {
  name: 'Yujin4',
  sayHi() {
    const arrowFunction = () => {
      console.log(this.name);
    };
    arrowFunction();
  },
};
console.log('person4.sayHi() :');
person4.sayHi();
console.log('------------');

// result : undefined
// normalFunction() のように 関数単体として呼び出された普通の function は、
// 呼び出し元オブジェクトを持たない
// なので this は「グローバル（または undefined）」になる
// → this.name は グローバルの name を参照しようとして undefined
const person5 = {
  name: 'Yujin5',
  sayHi: function () {
    const normalFunction = function () {
      console.log(this.name);
    };
    normalFunction();
  },
};
console.log('person5.sayHi() :');
person5.sayHi();
console.log('------------');

// result : Yujin6 (NGコード)
function wrapper() {
  this.name = 'Yujin6';
  const person6 = {
    sayHi: () => {
      console.log(this.name);
    },
  };
  person6.sayHi();
}
console.log('new wrapper() :');
new wrapper();
