/**
 * Scope
 */

var numberOne = 20;

// function levelOne() {
//   console.log(numberOne);
// }

// // levelOne();

// function levelOne() {
//   var numberOne = 40;
//   console.log(numberOne);
// }

// levelOne();

// console.log(numberOne);

function levelOne() {
  var numberOne = 40;

  function levelTwo() {
    var numberTwo = 99;

    console.log(`levelTwo numberTwo : ${numberTwo}`);
    console.log(`levelTwo numberOne : ${numberOne}`);
  }

  levelTwo();
  console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();
console.log(numberOne);
// console.log(numberTwo);

/**
 * JS -> Lexical Scope
 *
 * 선언된 위치가 상위 스코프를 정한다.
 */

var numberThree = 3;

function functionOne() {
  var numberThree = 100;

  functionTwo();
}

function functionTwo() {
  console.log(numberThree);
}

functionOne();

var i = 999;
//for 안에 var로 선언
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scope : ${i}`); // 10

// block level scope
i = 999;
//for 안에 let으로 선언
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scope : ${i}`); // 999

/**
 * var키워드는 함수 레벨 스코프만 만들어낸다.
 *
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */
