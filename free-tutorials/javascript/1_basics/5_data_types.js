/**
 * Data Types
 *
 *
 * 6개의 Primitive Type
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언) true/false
 * 4) undefined
 * 5) null
 * 6) Symbol (심볼)
 *
 *
 * 1개의 오브젝트 타입
 *
 * 7) Object (객체)
 * Function
 * Array
 * Object
 *
 */

const age = 32;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log('-----------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('-----------------');
/**
 * String 타입
 */
const codeFactory = '"코"드팩토리';
console.log(typeof codeFactory);
console.log(codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);
console.log('-----------------');
/**
 * Template Literal
 *
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) \ -> \\
 *
 *
 */

const iveYuJin = '아이브\n안유\t진\\';
console.log(iveYuJin);
const small = "아이브'장원영";
console.log(small);

//Template Literal ``
const iveWonYoung2 = `아이브
장원영 123 \'"`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = '그룹네임';
console.log(groupName + ' 이름');
console.log(`${groupName} 이름`); // `${변수}`
console.log('-----------------');

/**
 * Boolean
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('-----------------');
/**
 * undefined
 *
 * 사용자가 직접 값을 초기화하지 않았을때
 * 지정되는 값이다.
 *
 * 직접 undefined로 값을 초기화하는건 지양
 *
 */

let noInit;

console.log(noInit);
console.log(typeof noInit);
console.log('-----------------');
/**
 *
 * null타입
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * 명시적으로 없는 값으로 초기화
 *
 */
let init = null;
console.log(init);
console.log(typeof init); // object
console.log('-----------------');
/**
 * Symbol타입
 *
 * 유일무이한 값을 생성할때 사용
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 사용해서 호출
 *
 */

const tes1 = '1';
const tes2 = '1';
console.log(tes1 === tes2); // true

const symbol1 = Symbol('1'); //Symbol 함수 사용
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2); // false
console.log('-----------------');
/**
 * Object타입
 *
 * Map
 *
 * 키:벨류의 쌍으로 이루어져있다.
 * key:value
 */

const dictionary = {
  red: '빨간색',
  orange: '주황색',
  yellow: '노란색',
};
console.log(dictionary['red']);
console.log(dictionary['yellow']);
console.log(dictionary['orange']);

console.log(typeof dictionary);
console.log('-----------------');

/**
 * Array 타입
 *
 * 값을 리스트로 나열
 */

const iveMembersArray = ['안유진', '가을', '레이', '원영', '리즈', '이서'];

console.log(iveMembersArray);

/**
 * Index
 *
 */
console.log(iveMembersArray[3]);
iveMembersArray[0] = '코드팩토리';
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시를 한다. ex) C
 *
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론. ex) JavaScript
 */
