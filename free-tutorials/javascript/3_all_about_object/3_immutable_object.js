/**
 * Immutable Object
 */
const yuJin = {
  name: '안유진',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yuJin);

/**
 * Extensible
 */

console.log(Object.isExtensible(yuJin));

yuJin['position'] = 'vocal';
console.log(yuJin);

Object.preventExtensions(yuJin);

console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브';
console.log(yuJin);

delete yuJin['position']; // 삭제는 가능
console.log(yuJin);
console.log('------------------');

/**
 * Seal
 */

const yuJin2 = {
  name: '안유진',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yuJin2);
console.log(Object.isSealed(yuJin2));
Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));

yuJin2['groupname'] = '아이브'; // 안됨
console.log(yuJin2);

delete yuJin2['name']; // 안됨
console.log(yuJin2);

Object.defineProperty(yuJin2, 'name', {
  //  value: '코드팩토리', // 변경가능
  writable: false, // 변경가능
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name')); // Object.seal(yuJin2); 을 하면 configurable가 false로

/**
 * Freezed
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */

const yuJin3 = {
  name: '안유진',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3['groupName'] = '아이브'; // 안됨
console.log(yuJin3);
delete yuJin3['name']; // 안됨
console.log(yuJin3);

// Object.defineProperty(yuJin3, 'name', {
//   value: '코드팩토리',
// });
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));

const yuJin4 = {
  name: '안유진',
  year: 2003,
  wonYoung: {
    name: '장원영',
    year: 2002,
  },
};
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung']));
