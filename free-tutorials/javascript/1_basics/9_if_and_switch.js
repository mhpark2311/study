let number = 4;
if (number % 2 === 0) {
  console.log('짝수');
} else {
  console.log('홀수');
}

if (number % 2 === 0) {
  console.log('2의 배수');
} else if (number % 3 === 0) {
  console.log('3의 배수');
} else if (number % 4 === 0) {
  console.log('4의 배수');
} else if (number % 5 === 0) {
  console.log('5의 배수');
} else {
  console.log('2,3,4,5의 배수가 아닙니다');
}

const englishDay = 'tuesday';
let koreanDay;
switch (englishDay) {
  case 'monday': // 월요일
    koreanDay = '월요일';
    break;
  case 'tuesday': // 화요일
    koreanDay = '화요일';
    break;
  default: // 나머지 전부
    koreanDay = '수목금토일';
}
console.log(koreanDay);
