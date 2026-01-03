/**
 * Class Keyword
 */

class IdolModel {
  name; //프로퍼티 정의 생략 가능
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  //클래스 내에 함수를 선언할때는 function을 쓰지 않는다
  sayName() {
    return `안녕하세요 저는 ${this.name}입니다`;
  }
}

// constructor - 생성자

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const ray = new IdolModel('레이', 2004);
console.log(ray);
const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);
const liz = new IdolModel('리즈', 2004);
console.log(liz);
const eseo = new IdolModel('이서', 2007);
console.log(eseo);

console.log(yuJin.name);
console.log(yuJin.year);

console.log(yuJin.sayName());
console.log(wonYoung.sayName());

console.log(typeof IdolModel); // 함수
console.log(typeof yuJin); // 오브젝트
