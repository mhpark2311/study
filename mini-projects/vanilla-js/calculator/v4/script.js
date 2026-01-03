const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
const operators = ['+', '-', '*', '/'];
let currentExpression = '';
let lastInputType;

function renderDisplay() {
  display.value = currentExpression;
}

function calculate(expression) {
  try {
    let sanitized = expression.replace(/[^-()\d/*+.]/g, '');
    sanitized = sanitized.replace(/--/g, '+');
    // return new Function('return ' + sanitized)().toString();
    const result = new Function('return ' + sanitized)();
    return { result: result.toString(), success: true };
  } catch (e) {
    alert('잘못된 수식입니다.');
    // lastInputType = 'equalFail';
    // return expression;
    return { result: expression, success: false };
  }
}

buttons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (!isNaN(btn.textContent)) {
      if (lastInputType === 'equal') {
        currentExpression = '';
      }
      currentExpression += btn.textContent;
      lastInputType = 'number';
    } else if (operators.includes(btn.textContent)) {
      let lastChar = currentExpression.at(-1);
      let beforeLastChar = currentExpression.at(-2);
      if (
        (currentExpression !== '' && !operators.includes(lastChar)) ||
        (btn.textContent === '-' && currentExpression === '') ||
        (btn.textContent === '-' && operators.includes(lastChar) && !operators.includes(beforeLastChar) && currentExpression.length >= 2)
      ) {
        currentExpression += btn.textContent;
        lastInputType = 'operator';
      }
    } else if (btn.classList.contains('clear')) {
      currentExpression = '';
      lastInputType = 'clear';
    } else if (btn.classList.contains('equal')) {
      const { result, success } = calculate(currentExpression);
      currentExpression = result;
      lastInputType = success ? 'equal' : 'equalFail';
    }
    renderDisplay();
  });
});

document.addEventListener('keydown', function (e) {
  if (!isNaN(e.key)) {
    if (lastInputType === 'equal') {
      currentExpression = '';
    }
    currentExpression += e.key;
    lastInputType = 'number';
  } else if (operators.includes(e.key)) {
    let lastChar = currentExpression.at(-1);
    let beforeLastChar = currentExpression.at(-2);
    if (
      (currentExpression !== '' && !operators.includes(lastChar)) ||
      (e.key === '-' && currentExpression === '') ||
      (e.key === '-' && operators.includes(lastChar) && !operators.includes(beforeLastChar) && currentExpression.length >= 2)
    ) {
      currentExpression += e.key;
      lastInputType = 'operator';
    }
  } else if (e.key === 'Escape') {
    currentExpression = '';
    lastInputType = 'clear';
  } else if (e.key === 'Enter' || e.key === '=') {
    const { result, success } = calculate(currentExpression);
    currentExpression = result;
    lastInputType = success ? 'equal' : 'equalFail';
  } else if (e.key === 'Backspace') {
    currentExpression = currentExpression.slice(0, -1);
    lastInputType = 'backspace';
  }
  renderDisplay();
});
