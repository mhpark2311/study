// 入力チェック（文字列と条件分岐）
// 変数 name にユーザー名が入っているとする。
// name が空文字なら「名前を入力してください」
// そうでなければ「ようこそ、〇〇さん」と出力する。
let name1 = 'username123';
let name2 = '';

console.log(name1 ? 'ようこそ、' + name1 + 'さん' : '名前を入力してください');
console.log(name2 ? 'ようこそ、' + name2 + 'さん' : '名前を入力してください');

// 文字列整形（trim と toUpperCase）
// 入力された文字列 "  hello world  " の前後の空白を削除し、
// すべて大文字に変換して出力する。
let inputChar = ' hello world ';

console.log(inputChar.trim().toUpperCase());

// 成績判定
// 変数 score に点数が入っている。
// 90点以上なら「A評価」、
// 70点以上なら「B評価」、
// それ未満なら「C評価」と出力する。
let score1 = 95;
let score2 = 80;
let score3 = 65;
if (score1 >= 90) {
  console.log('A');
} else if (score1 >= 70) {
  console.log('B');
} else {
  console.log('C');
}
if (score2 >= 90) {
  console.log('A');
} else if (score2 >= 70) {
  console.log('B');
} else {
  console.log('C');
}
if (score3 >= 90) {
  console.log('A');
} else if (score3 >= 70) {
  console.log('B');
} else {
  console.log('C');
}
console.log(score1 >= 90 ? 'A' : score1 >= 70 ? 'B' : 'C');
console.log(score2 >= 90 ? 'A' : score2 >= 70 ? 'B' : 'C');
console.log(score3 >= 90 ? 'A' : score3 >= 70 ? 'B' : 'C');

function getGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 70) return 'B';
  return 'C';
}
console.log(getGrade(score1));
console.log(getGrade(score2));
console.log(getGrade(score3));

// 商品リストの表示
// 配列 fruits = ["りんご", "バナナ", "ぶどう"] がある。
// このリストを使って、
// 「フルーツ：りんご」などの形式で1行ずつ出力する。
let fruits = ['りんご', 'バナナ', 'ぶどう'];
for (let i = 0; i < fruits.length; i++) {
  console.log(`フルーツ：${fruits[i]}`);
}
for (let i in fruits) {
  console.log(`フルーツ：${fruits[i]}`);
}
for (let fruit of fruits) {
  console.log(`フルーツ：${fruit}`);
}
fruits.forEach((fruit) => console.log(`フルーツ：${fruit}`));
