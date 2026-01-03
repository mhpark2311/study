//1초 후에 "Hello, world!"를 출력해보세요.
setTimeout(() => {
  console.log('Hello, world!');
}, 1000);
setTimeout(function () {
  console.log('Hello, world!');
}, 1000);

//아래 함수를 사용해서, setTimeout으로 2초 후에 "안녕, 지민!"이 출력되도록 하세요.
// function greet(name) {
//   console.log(`안녕, ${name}!`);
// }
function greet(name) {
  console.log(`안녕, ${name}!`);
}
setTimeout(greet, 2000, '지민'); // 콜백함수의 인자는 3번째 인자로

// 다음 메시지를 차례대로 1초 간격으로 출력해보세요.
// "3"
// "2"
// "1"
// "출발!"
setTimeout(() => {
  console.log('3');
}, 1000);
setTimeout(() => {
  console.log('2');
}, 2000);
setTimeout(() => {
  console.log('1');
}, 3000);
setTimeout(() => {
  console.log('출발!');
}, 4000);
// 콜백 헬 예시
setTimeout(() => {
  console.log('3');
  setTimeout(() => {
    console.log('2');
    setTimeout(() => {
      console.log('1');
      setTimeout(() => {
        console.log('출발!');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
