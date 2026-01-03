//Q1. 주민번호 마스킹 처리
//주민등록번호에서 뒷자리를 ******으로 바꿔라.
const ssn = '920101-1234567';
const replaced = ssn.replace(/^(\d{6}-\d)\d{6}$/, '$1******');
console.log(replaced);

// Q2. 문자열 내 연속 공백 하나로 줄이기
// 문자열에 여러 개의 공백이 있을 때, 하나의 공백으로 바꿔라.
const sentence = 'hello     world   javascript';
const replaced2 = sentence.replace(/\s+/g, ' ');
console.log(replaced2);

// Q3. html 태그 제거하기
// HTML 문자열에서 태그를 제거하고 내용만 남겨라.
const html = '<div><p>Hello</p></div>';
const replaced3 = html.replace(/<[^>]+>/g, '');
console.log(replaced3);
