const display = document.querySelector('input');
const buttons = document.querySelectorAll('button');

buttons[0].addEventListener('click', () => {
  display.value += '1';
});
buttons[1].addEventListener('click', () => {
  display.value += '2';
});
buttons[2].addEventListener('click', () => {
  display.value += '3';
});
buttons[3].addEventListener('click', () => {
  let lastValue = display.value.split('')[display.value.split('').length - 1];
  if (lastValue !== '+' && lastValue !== '-' && lastValue !== '*' && lastValue !== '/') {
    display.value += '+';
  }
});

buttons[4].addEventListener('click', () => {
  display.value += '4';
});
buttons[5].addEventListener('click', () => {
  display.value += '5';
});
buttons[6].addEventListener('click', () => {
  display.value += '6';
});
buttons[7].addEventListener('click', () => {
  let lastValue = display.value.split('')[display.value.split('').length - 1];
  if (lastValue !== '+' && lastValue !== '-' && lastValue !== '*' && lastValue !== '/') {
    display.value += '-';
  }
});

buttons[8].addEventListener('click', () => {
  display.value += '7';
});
buttons[9].addEventListener('click', () => {
  display.value += '8';
});
buttons[10].addEventListener('click', () => {
  display.value += '9';
});
buttons[11].addEventListener('click', () => {
  let lastValue = display.value.split('')[display.value.split('').length - 1];
  if (lastValue !== '+' && lastValue !== '-' && lastValue !== '*' && lastValue !== '/') {
    display.value += '*';
  }
});

buttons[12].addEventListener('click', () => {
  display.value += '0';
});
buttons[13].addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch (e) {
    alert('잘못된 수식입니다.');
    display.value = '';
  }
});
buttons[14].addEventListener('click', () => {
  display.value = '';
});
buttons[15].addEventListener('click', () => {
  let lastValue = display.value.split('')[display.value.split('').length - 1];
  if (lastValue !== '+' && lastValue !== '-' && lastValue !== '*' && lastValue !== '/') {
    display.value += '/';
  }
});
