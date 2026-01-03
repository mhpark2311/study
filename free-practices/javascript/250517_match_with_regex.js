//Q1. 문자열에서 모든 숫자만 추출하기
//문자열에 포함된 숫자들을 모두 배열로 추출하라.
const str = 'abc123def456ghi789';
const matched = str.match(/\d+/g);
console.log(matched);

// Q2. 해시태그만 추출하기
// 트윗처럼 생긴 문자열에서 #로 시작하는 해시태그만 모두 찾아라.
const tweet = '오늘은 #날씨가좋다 #코딩 #javascript';
const matched2 = tweet.match(/#[가-힣a-z]+/g);
console.log(matched2);

// Q3. 도메인 이름 추출하기
// URL 목록에서 도메인 이름만 추출하라.
const urls = ['https://naver.com', 'http://example.org', 'ftp://hello.net'];
const matched3 = urls.map((url) => url.match(/:\/\/(.+)/)[1]);
console.log(matched3);
