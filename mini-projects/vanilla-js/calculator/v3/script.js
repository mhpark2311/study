const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const operators = ['+', '-', '*', '/'];
let currentExpression = '';

function calculate(expression) {
  try {
    let sanitized = expression.replace(/[^-()\d/*+.]/g, '');
    sanitized = sanitized.replace(/--/g, '+');
    return new Function(`return ${sanitized}`)();
  } catch (e) {
    alert('잘못된 수식입니다.');
    return '';
  }
}

buttons.forEach(function (btn) {
  const button = btn.textContent;

  btn.addEventListener('click', function () {
    if (btn.classList.contains('equal')) {
      if (currentExpression !== '') currentExpression = calculate(currentExpression).toString();
    } else if (btn.classList.contains('clear')) {
      currentExpression = '';
    } else if (btn.classList.contains('operator')) {
      let lastChar = currentExpression.at(-1);
      let beforeLastChar = currentExpression.at(-2);
      if (
        (currentExpression === '' && button === '-') ||
        (operators.includes(lastChar) && button === '-' && currentExpression.length >= 2 && !operators.includes(beforeLastChar)) ||
        (currentExpression !== '' && !operators.includes(lastChar))
      ) {
        currentExpression += button;
      }
    } else {
      currentExpression += button;
    }
    renderDisplay();
  });
});

document.addEventListener('keydown', function (e) {
  const key = e.key;
  if (!isNaN(key)) {
    currentExpression += key;
    renderDisplay();
  } else if (operators.includes(key)) {
    let lastChar = currentExpression.at(-1);
    let beforeLastChar = currentExpression.at(-2);
    if (
      (currentExpression === '' && key === '-') ||
      (operators.includes(lastChar) && key === '-' && currentExpression.length >= 2 && !operators.includes(beforeLastChar)) ||
      (currentExpression !== '' && !operators.includes(lastChar))
    ) {
      currentExpression += key;
    }
    renderDisplay();
  } else if (key === 'Enter' || key === '=') {
    if (currentExpression !== '') currentExpression = calculate(currentExpression).toString();
    renderDisplay();
  } else if (key === 'Backspace') {
    currentExpression = currentExpression.slice(0, -1);
    renderDisplay();
  } else if (key === 'Escape') {
    currentExpression = '';
    renderDisplay();
  }
});

function renderDisplay() {
  display.value = currentExpression;
}
