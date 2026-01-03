// 商品情報の表示
// オブジェクト obj = { product: "PC", price: 120000 } から
// それぞれの値を取り出して、
// 「PC の価格は120000円です」と出力する。
const obj = { product: 'PC', price: 120000 };
console.log(`${obj.product}の価格は${obj.price}円です`);

// JSONデータの処理
// 文字列として渡されたJSONをパースしてオブジェクト化する。
// 無効なJSONが渡された場合は「データ形式が不正です」と出力する。
const jsonStr1 = '{"name": "Taro", "age": 25}';
const jsonStr2 = "{'name': 'Taro', 'age': 25}";

const jsonCheck = function (jsonStr) {
  try {
    const data = JSON.parse(jsonStr);
    console.log(`${data.name}は${data.age}歳です`);
  } catch (e) {
    console.log('データ形式が不正です');
    // console.error(e.message);
    console.log(e.message);
  }
};
jsonCheck(jsonStr1);
jsonCheck(jsonStr2);

// 「Animal」というクラスを作りたい。
// このクラスは次の情報を持つ：
// 動物の名前（name）
// 動物の種類（type）
// そしてインスタンスを生成して、
// 私は犬のポチです
// のように自己紹介するメソッド introduce() を作る。
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    return `私は${this.type}の${this.name}です`;
  }
}

console.log(new Animal('ポチ', '犬').introduce());

console.log('----------');
console.log('----------');
console.log('----------');

const cat = new Animal('しゃみせん', '猫');

console.log('-----console.log(cat.introduce())-----');
console.log(cat.introduce());
console.log('-----console.log(cat);-----');
console.log(cat);
console.log('-----console.log(Object.getOwnPropertyDescriptors(cat));-----');
console.log(Object.getOwnPropertyDescriptors(cat));
console.log('-----console.log(Object.getOwnPropertyDescriptors(Object.getPrototypeOf(cat)));-----');
console.log(Object.getOwnPropertyDescriptors(Object.getPrototypeOf(cat)));
console.log('-----console.log(Object.getOwnPropertyDescriptors(Animal.prototype));-----');
console.log(Object.getOwnPropertyDescriptors(Animal.prototype));
console.log('-----console.log(Object.getOwnPropertyDescriptors(cat.__proto__));-----');
console.log(Object.getOwnPropertyDescriptors(cat.__proto__));
console.log('----------');

const normalObject = {
  name: 'スペシャルウィーク',
  type: '馬',
  introduce: function (name, type) {
    return `私は${this.type}の${this.name}です`;
  },
};

console.log('-----console.log(normalObject.introduce());-----');
console.log(normalObject.introduce());
console.log('-----console.log(normalObject);-----');
console.log(normalObject);
console.log('-----console.log(Object.getOwnPropertyDescriptors(normalObject));-----');
console.log(Object.getOwnPropertyDescriptors(normalObject));
