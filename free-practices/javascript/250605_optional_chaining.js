// 예제1
const user = {
  name: 'Alice',
  address: {
    city: 'Seoul',
  },
};
console.log(user.address?.city); // 'Seoul'
console.log(user.address?.zipcode); // address 객체는 있으나 zipcode 프로퍼티가 없으므로 undefined
console.log(user.address.zipcode); // address 객체는 있으나 zipcode 프로퍼티가 없으므로 undefined
console.log(user.contact?.email); // contact 객체가 없으므로 옵셔널 체이닝에 의해서 undefined
// console.log(user.contact.email); // contact 객체가 없으므로 에러

console.log('----------');

// 예제2
const posts = [{ id: 1, title: 'Hello' }, null, { id: 3, title: 'World' }];
posts.forEach((post) => {
  console.log(post?.title); // post객체 (posts의 요소 객체)가 없으면 undefined 반환
});

console.log('----------');

// 예제3
const user1 = {
  sayHi: () => console.log('Hi!'),
};
const user2 = {};
user1.sayHi?.(); // 함수가 존재하므로 호출
user2.sayHi?.(); // 함수가 존재하지 않으므로 호출하지 않음
