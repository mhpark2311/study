//다음 배열에서 첫 번째 값은 first, 나머지는 rest라는 이름의 변수에 구조분해 할당 해보세요.
const numbers = [10, 20, 30, 40];
const [first, ...rest] = numbers;
console.log(first, rest);

//객체 user에서 name과 age만 구조분해 할당해서 출력해보세요.
const user = {
  name: '안유진',
  age: 21,
  job: '아이돌',
  active: true,
};
const { name, age } = user;
console.log(name, age);

//함수 인자로 전달되는 객체에서 구조분해를 이용해 인자 값을 꺼내 출력하세요.
function introduce(user) {
  const { name, group } = user;
  console.log(`안녕하세요, 저는 ${name}이고 ${group} 소속입니다.`);
}
introduce({ name: '장원영', group: '아이브' });
// 출력: 안녕하세요, 저는 장원영이고 아이브 소속입니다.
// 함수 인자에서 바로 구조분해
function introduce({ name, group }) {
  console.log(`안녕하세요, 저는 ${name}이고 ${group} 소속입니다.`);
}
introduce({ name: '장원영', group: '아이브' });
