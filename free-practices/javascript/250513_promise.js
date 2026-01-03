// 1초 뒤 출력
function wait1sec() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('1초가 지났어요!');
    }, 1000);
  });
}
wait1sec().then((msg) => console.log(msg));

// 2초->2초->2초->3초
function wait(ms, msg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, ms);
  });
}

wait(2000, '2초')
  .then(() => wait(2000, '2초'))
  .then(() => wait(2000, '2초'))
  .then(() => wait(3000, '끝'));

// 강의 복습
const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공');
    }, seconds * 1000);
  });

getPromise(2)
  .then((res) => {
    console.log('--- first then ---');
    console.log(res);

    return getPromise(2);
  })
  .then((res) => {
    console.log('--- second then ---');
    console.log(res);

    return getPromise(2);
  })
  .then((res) => {
    console.log('--- third then ---');
    console.log(res);

    return getPromise(3);
  })
  .finally(() => {
    console.log('--- finally ---');
  });
