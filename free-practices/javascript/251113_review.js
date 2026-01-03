// 価格の抽出
// 配列 prices = [1200, 800, 3000, 1500] から、
// 1000円以上のものだけを取り出して新しい配列を作り、出力する。
let prices = [1200, 800, 3000, 1500];
let over1000 = prices.filter((x) => x >= 1000);
console.log(over1000);

// 管理者判定
// オブジェクト user = { name: "Taro", isAdmin: true } がある。
// 管理者なら「管理者です」、
// そうでなければ「一般ユーザーです」と出力する。
let user1 = { name: 'Taro', isAdmin: true };
let user2 = { name: 'Hanako', isAdmin: false };
console.log(user1['isAdmin'] ? '管理者です' : '一般ユーザーです');
console.log(user2['isAdmin'] ? '管理者です' : '一般ユーザーです');
console.log(user1.isAdmin ? '管理者です' : '一般ユーザーです');
console.log(user2.isAdmin ? '管理者です' : '一般ユーザーです');

// あいさつ関数
// 関数を作って、
// 引数に名前を受け取り「こんにちは、〇〇さん」と出力できるようにする。
const aisatsu = (name) => `こんにちは、${name}さん`;
console.log(aisatsu('test123'));

// ニックネーム表示
// 変数 nickname がnull/undefinedか空の場合は「ゲスト」と表示し、
// 値があればその値を表示する。
const nickname1 = 'myNickname'; // truthy
let nickname2; // falsy
const nickname3 = ''; // falsy
const nickname4 = ' '; // truthy
const nickname5 = null; // falsy
function render1(nickname) {
  return nickname || 'ゲスト';
}
function render2(nickname) {
  return !nickname || nickname.trim() === '' ? 'ゲスト' : nickname;
}

console.log(render1(nickname1));
console.log(render1(nickname2));
console.log(render1(nickname3));
console.log(render1(nickname4));
console.log(render1(nickname5));

console.log(render2(nickname1));
console.log(render2(nickname2));
console.log(render2(nickname3));
console.log(render2(nickname4));
console.log(render2(nickname5));
