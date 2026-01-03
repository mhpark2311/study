/**
 * function -> 함수
 */

/**
 * 만약 2라는 숫자에 * 10 / 2 를 % 3 한것을 스트링으로 변환해서
 * 반환받고 싶다면?
 */

console.log((((2 * 10) / 2) % 3).toString());
console.log('---------');
/**
 * DRY
 * Don't
 * Repeat
 * Yourself
 */

function calculate() {
  console.log((((2 * 10) / 2) % 3).toString());
}

//calculate();

function calculate(number) {
  console.log((((number * 10) / 2) % 3).toString());
}
calculate(100);
console.log('---------');
/**
 * 함수에서 입력받는 값에 대한 정의 : Parameter
 *
 * 실제 입력하는 값 : Argument
 */

function multiply(x, y) {
  console.log(x * y);
}
multiply(3, 6);

function multiply(x, y = 10) {
  console.log(x * y);
}
multiply(2, 6); // 12
multiply(2); // 20
console.log('---------');

/**
 * 반환받기
 * return
 */
function multiply2(x, y) {
  return x * y;
}

const result1 = multiply2(2, 6);
console.log(result1);

const result2 = multiply2(4, 5);
console.log(result2);

/**
 * Arrow 함수
 */
const multiply3 = (x, y, z) => {
  return x * y * z;
};

console.log(multiply3(2, 4, 5));

const multiply4 = (x, y) => x * y; // 축약
console.log(multiply4(6, 7));

const multiply5 = (x) => x * 2; // 파라미터가 1개일때 (x) 괄호 생략가능
console.log(multiply5(33));

const multiply6 = (x) => (y) => (z) => `x:${x} y:${y} z:${z}`;
console.log(multiply6(1)(2)(3));

//위의 함수는 아래의 함수와 같음

function multiply7(x) {
  return function (y) {
    return function (z) {
      return `x:${x} y:${y} z:${z}`;
    };
  };
}

console.log(multiply7(1)(2)(4));

// const로 함수 선언
const multiplyTwo = function (x, y) {
  return x * y;
};
console.log(multiplyTwo(3, 5));

// arrow
const multiplyTwo2 = (x, y) => {
  return x * y;
};
console.log(multiplyTwo2(6, 6));
console.log('---------');

const multiplyThree = function (x, y, z) {
  console.log(arguments);
  return x * y * z;
};
console.log(multiplyThree(3, 5, 7));

console.log('---------');

// 무한하게 파라미터 받기
const multiplyAll = function (...arguments) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};
console.log(multiplyAll(2, 3, 4, 5, 6, 7, 8));

// 즉시 실행 함수 immediately invoked function
(function (x, y) {
  console.log(x * y);
})(4, 5);

console.log(typeof multiply);
console.log(multiply instanceof Object);
