//1-1. filter()와 조합: 숫자만 남기기
const arr = ['1', 'a', '5', 'z', '9'];
let result = arr.filter((x) => /\d/.test(x));
console.log(result); // ['1', '5', '9']

//1-2. 이메일 목록 중 유효한 이메일만 필터링
const emails = ['user1@gmail.com', 'nope', 'admin@site.co.kr'];
let valid = emails.filter((email) => /\w+@\w+\.\w+/.test(email));
console.log(valid); // ['user1@gmail.com', 'admin@site.co.kr']

//1-3. 단어 배열 중 대문자로 시작하는 단어만 추출
const words = ['Apple', 'banana', 'Cherry', 'date'];
let caps = words.filter((word) => /^[A-Z]\w+/.test(word));
console.log(caps); // ['Apple', 'Cherry']

//Q2. 한글이 포함된 문자열만 추출하기
//배열에서 한글이 하나라도 포함된 문자열만 골라라.
const words2 = ['apple', '바나나', 'grape', '복숭아'];
let hangul = words2.filter((word) => /[가-힣]/.test(word));
console.log(hangul);
