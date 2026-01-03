// 예제1
const map = new Map();
map.set('name', '철수');
map.set('age', 25);
console.log(map.get('name'));

// 예제2
const userInfo = new Map([
  ['id', 'user123'],
  ['isAdmin', false],
  ['score', 87],
]);
console.log(userInfo.get('id'));

// 예제3
const user1 = { name: '영희' };
const user2 = { name: '민수' };
const visits = new Map();
visits.set(user1, 3); // 객체를 키로 사용
visits.set(user2, 5);
console.log(visits.get(user1));

// 예제4
const users = [
  { id: 1, name: '철수' },
  { id: 2, name: '영희' },
  { id: 3, name: '민수' },
];
const userMap = new Map(users.map((user) => [user.id, user]));
console.log(users.map((user) => [user.id, user]));
console.log(userMap);
