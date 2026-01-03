// 예제1
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = [...new Set(nums)];
// new Set()이 반환하는건 Set객체이므로, 데이터를 처리하려면 배열로 변환 필요.
console.log([...new Set(nums)]);

// 예제2
const visited = new Set();
function visitCity(city) {
  // has : Set객체가 city를 포함하는지 확인하여 true/false 반환.
  if (visited.has(city)) {
    console.log(`${city}는 이미 방문했습니다.`);
  } else {
    // add : Set객체에 추가
    visited.add(city);
    console.log(`${city} 방문 완료!`);
  }
}
visitCity('Seoul');
visitCity('Tokyo');
visitCity('Seoul');

// 예제3
const tags = new Set(['js', 'html', 'css']);
// forEach 사용 가능
tags.forEach((tag) => {
  console.log(`#${tag}`);
});
