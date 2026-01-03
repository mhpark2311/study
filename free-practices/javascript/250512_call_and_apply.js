// call()
function introduce(job) {
  console.log(`안녕하세요, 저는 ${this.name}이고 ${job}입니다.`);
}

const person1 = { name: '영희' };
const person2 = { name: '철수' };

introduce.call(person1, '개발자'); // 안녕하세요, 저는 영희이고 개발자입니다.
introduce.call(person2, '디자이너'); // 안녕하세요, 저는 철수이고 디자이너입니다.

//apply()
const nums = [3, 7, 1, 8];

console.log(Math.max(...nums)); // ES6 전개 연산자 사용
console.log(Math.max.apply(null, nums));
