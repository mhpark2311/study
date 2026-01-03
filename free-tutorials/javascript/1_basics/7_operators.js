/**
 *
 * Operators
 * 연산자
 *
 * 산술연산자
 * 1.덧셈
 * 2.뺄셈
 * 3.곱셈
 * 4.나눗셈
 * 5.나머지
 *
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10); // 나머지
console.log(10 % 3);
console.log('-----------------');
/**
 * 증가와 감소
 */
let number = 3;
number++;
console.log(number);
number--;
console.log(number);

console.log('-----------------');

/**
 * 연산자의위치
 */
console.log('연산자의 위치');
number = 3;
let result = 1;
console.log(result);

result = number++; // 이퀄 연산자를 먼저 처리한 다음 ++를 처리
console.log(result, number); //3,4

result = number--;
console.log(result, number); //4,3

// result = ++number; // ++를 먼저 처리한 다음 이퀄 연산자 처리
// console.log(result, number);

// result = --number;
// console.log(result, number);

console.log('-----------------');
/**
 * 숫자타입이 아닌 타입에 +,- 사용하면?
 */

let sample = '99';

console.log(+sample); // '99'를 숫자타입 99로 변환 가능
console.log(sample);

console.log(typeof +sample); // number
console.log(typeof sample); // string

sample = true;
console.log(+sample); // true를 숫자1로 변환 가능
console.log(typeof +sample); // number
sample = false;
console.log(+sample); // 0
console.log(typeof +sample);

sample = '안유진';
console.log(+sample); // NaN -> Not a Number

sample = '99';
console.log(-sample); // '99'를 숫자타입 -99로 변환 가능
console.log(typeof -sample);
console.log('-----------------');
/**
 * 할당연산자 (assignment operator)
 *
 */
number = 100;
console.log(number);

number += 10; // number가 가지고 있던 값에 10을 더한 수를 number에 다시 할당
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);
console.log('-----------------');

/**
 * 비교연산자
 *
 * 1) 값의 비교
 * 2) 값과 타입의 비교 // 일반적으로 자주 사용
 *
 */
console.log('1) 값의 비교 // == , !=');
console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');
console.log('---------');
console.log('2) 값과 타입의 비교 // === , !==');
console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');

console.log('---------');
console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');
console.log('---------');
console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');
console.log('---------');

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 >= 1);
console.log(100 <= 1);
console.log('---------');
/**
 * 삼항 조건 연산자 (ternary operator)
 */

console.log(10 > 0 ? '10이0보다크다' : '10이0보다작다');
console.log('---------');
/**
 * 논리연산자
 *
 * 1) &&
 * 2) ||
 */

// && 조건은 모두 true여야 true를 반환
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('---------');

// ||는 하나만 true여도 true를 반환
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('---------');

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 > 1 && 20 < 2);
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 > 1 || 20 < 2);
console.log(10 < 1 || 20 < 2);

/**
 * 단축평가 (short circuit evaluation)
 *
 * &&를 사용했을때 좌측이 true면 우측값 반환
 * &&를 사용했을때 좌측이 false면 좌측값 반환
 * ||를 사용했을때 좌측이 true면 좌측값 반환
 * ||를 사용했을때 좌측이 false면 우측값 반환
 */

console.log('---------');

console.log(false && '아이브');
console.log(true && '아이브');
console.log(true || '아이브');
console.log(false || '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');
console.log('---------');
//** 지수연산자 */

console.log(2 ** 2);
console.log(10 ** 3);
console.log('---------');

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? '코드팩토리'; // name가 null or undefined일때, name에 코드팩토리를 할당
console.log(name);
name = name ?? '아이브'; // null or undefined가 아니므로 '아이브'는 할당안됨
console.log(name);

let name2;
name2 ??= '코드팩토리2'; // name2가 null or undefined일때, name2에 코드팩토리2를 할당
console.log(name2);
