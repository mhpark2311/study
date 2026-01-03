/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 *
 */

let age = 32;
// 명시적
let stringAge = age.toString();
console.log(stringAge);
console.log(typeof stringAge);
console.log('---------');
// 암묵적
let test = age + ''; //숫자에 글자를 더하면 스트링값이 된다
console.log(typeof test, test);
console.log('98' + 2, typeof ('98' + 2));
console.log('98' * 2, typeof ('98' * 2));
console.log('98' - 2);

testValue1 = 1 + '5';
console.log(testValue1, typeof testValue1);
testValue2 = +'7';
console.log(testValue2, typeof testValue2);

console.log('---------');

/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof true.toString(), true.toString());
console.log(typeof Infinity.toString(), Infinity.toString());
console.log('---------');

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');
console.log(typeof -'1', -'1');
console.log('---------');

/**
 * Boolean 타입으로의 변환 ※실무에서 자주 사용
 */
console.log(!!'x'); // 스트링에 값이 있으면 true
console.log(!!''); // 값이 없으면 false
console.log(!!0); // 0은 false
console.log(!!'0'); // '0'은 true
console.log(!!false);
console.log(!!undefined, !!null); // undefined, null는 false

console.log(!!{}); // object는 true
console.log(!![]); // array는 true

/**
 * 1) 아무 글자도 없는 String은 False를 반환
 * 2) 값이 없는 경우 (글자없는 String, undefined, null 등) false 반환
 * 3) 0 = false
 *
 * 모두 false를 반환
 */

console.log(typeof parseInt('42px'));
console.log(typeof +'5');
console.log(typeof -'5');
