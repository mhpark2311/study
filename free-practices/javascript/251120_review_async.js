// function getNumber(callback) {
//   setTimeout(() => {
//     callback(123);
//   }, 300);
// }
// getNumber((result) => {
//   console.log(result);
// });

// console.log('------------');

// // Level 1：1 秒後に「Hello!」を表示せよ
// // practice
// function printHello(callback) {
//   setTimeout(callback, 500);
// }
// const testFunction = (result) => {
//   console.log('Hello!');
// };
// printHello(testFunction);

// console.log('------------');

// // Level 2：数値 456 を 2 秒後に出力する関数 getNum を作れ
// function getNum(callback) {
//   setTimeout(() => callback(456), 700);
// }
// const numFunction = (result) => {
//   console.log(result);
// };
// getNum(numFunction);

// // Level 3：callback で「A → B → C」の順に表示せよ
// function printA(callback) {
//   setTimeout(() => {
//     console.log('A');
//     callback();
//   }, 1000);
// }
// function printB(callback) {
//   setTimeout(() => {
//     console.log('B');
//     callback();
//   }, 1000);
// }
// function printC() {
//   setTimeout(() => {
//     console.log('C');
//   }, 1000);
// }
// printA(() => {
//   printB(() => {
//     printC();
//   });
// });

// // Level 4：数字を順番に表示する（1 → 2 → 3）
// function printNum(num, callback) {
//   setTimeout(() => {
//     console.log(num);
//     callback();
//   }, 500);
// }
// printNum(1, () => {
//   printNum(2, () => {
//     printNum(3, () => {
//       console.log('complete');
//     });
//   });
// });

// // Level P1：とにかく Promise で同じことをやる
// function printNumPromise(num) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }
// printNumPromise(1)
//   .then(() => printNumPromise(2))
//   .then(() => printNumPromise(3))
//   .then(() => printNumPromise(4))
//   .then(() => printNumPromise(5))
//   .then(() => console.log('done'));

// // Problem 1：500ms 後に "OK" を返す Promise 関数を作れ
// // getOk() を作り、.then() で結果を表示せよ。
// // コード1
// function getOK(char) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(char);
//       resolve();
//     }, 500);
//   });
// }
// getOK('OK1').then(() => console.log('end'));

// // コード2
// function getOK2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       // console.log('OK');
//       resolve('OK2');
//     }, 500);
//   });
// }
// getOK2().then((result) => console.log(result));

// // Level P1：とにかく Promise で同じことをやる (resolve)
// function printNumPromise(num) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(num);
//       resolve('done');
//     }, 1000);
//   });
// }
// printNumPromise(1)
//   .then(() => printNumPromise(2))
//   .then(() => printNumPromise(3))
//   .then(() => printNumPromise(4))
//   .then(() => printNumPromise(5))
//   .then((result) => console.log(result));

// Problem 2：値を受け取って 1 秒後に 2 倍して返す Promise 関数
// doubleAsync(num) を作れ
function doubleAsync2(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  });
}
doubleAsync2(35).then((result) => console.log(result));

// Problem 3：Promise チェーンで計算せよ
// Problem 2 の doubleAsync を使って
// 5 → 10 → 20 → 40 となるように .then() を 3 回つなげろ
// 最後に console.log("done") を表示せよ。
function doubleAsync3(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(num);
      resolve(num * 2);
    }, 1000);
  });
}
doubleAsync3(5)
  .then((result) => doubleAsync3(result))
  .then((result) => doubleAsync3(result))
  .then((result) => doubleAsync3(result))
  .then(() => console.log('done'));
