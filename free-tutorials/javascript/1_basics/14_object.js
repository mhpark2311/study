/**
 * object / 객체
 */

// key : value pair
let yuJin = {
  name: '안유진',
  group: '아이브',
  dance: function () {
    return `${this.name}이 춤을 춥니다`; // this는 현재 객체를 가리킴
  },
};

console.log(yuJin.name); // 변수.키
console.log(yuJin['name']); // 변수['키']

const key = 'name';
console.log(yuJin[key]); // key='name'이므로 console.log(yuJin['name'])와 같음
console.log(yuJin.dance());

console.log('----------------');

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function () {
    return `${this.name}이 춤을 춥니다`;
  },
};
console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin'; // 존재하지 않는 키를 넣으면 새로 추가됨
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);
console.log('----------------');

/**
 * const로 선언한 객체의 특징
 *
 * 1)const로 선언할 경우 객체 자체를 변경할 수는 없다
 * 2)객체 안의 프로퍼티나 메서드는 변경 가능
 */
const wonYoung = {
  name: '장원영',
  group: '아이브',
};

// wonYoung = {};
console.log(wonYoung);
wonYoung['name'] = '코드팩토리';
console.log(wonYoung);

/**
 * 모든 키 값 다 가져오기
 */
console.log(Object.keys(wonYoung));
/**
 * 모든 벨류 값 다 가져오기
 */
console.log(Object.values(wonYoung));
/**
 * 축약형
 */
const name = '안유진';
const yuJin3 = {
  name: name,
};
console.log(yuJin3);
const yuJin4 = {
  name,
};
console.log(yuJin4);
