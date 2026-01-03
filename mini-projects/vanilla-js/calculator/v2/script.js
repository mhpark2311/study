const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach(function (btn) {
  // forEach로 각 <button> 요소를 순회하면서
  // 버튼의 표시 텍스트(textContent)를 변수 value에 저장 (ex. "1", "+", "C" 등)
  // 이 value는 클릭 이벤트 처리 분기(if 문)에서 사용됨
  const value = btn.textContent;

  // 각 버튼에 클릭 이벤트 리스너를 등록
  // 클릭 시 버튼의 종류(value)에 따라 알맞은 동작 수행
  btn.addEventListener('click', function () {
    if (value === '=') {
      // 버튼의 텍스트가 '='일 때 (계산 버튼)
      try {
        display.value = eval(display.value); // input박스에 표시된 수식을 eval로 계산하고, 결과를 다시 input박스의 값에 대입하여 계산기 상에 표시
      } catch (e) {
        alert('잘못된 수식입니다.'); // 수식이 잘못된 경우 alert를 표시하고 input 요소의 값을 초기화
        display.value = '';
      }
    } else if (value === 'C') {
      // 버튼의 텍스트가 'C'일 때 (초기화 버튼)
      display.value = ''; // input 요소의 값을 초기화
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      // 버튼의 텍스트가 '+', '-', '*', '/' 중 하나일 때 (연산자 버튼)
      let lastValue = display.value.split('')[display.value.split('').length - 1];
      if (lastValue !== '+' && lastValue !== '-' && lastValue !== '*' && lastValue !== '/') {
        // 마지막 문자가 연산자가 아닐 경우
        display.value += value; // input 요소의 값에 연산자를 추가
      }
    } else {
      // 버튼의 텍스트가 '=', 'C', '+', '-', '*', '/' 어느 것에도 해당되지 않을 때 (즉, 숫자일 때)
      display.value += value; // input 요소의 값에 숫자를 추가
    }
  });
});
