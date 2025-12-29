function add(num1: number, num2: number) {
  console.log(num1 + num2);
}

add(1, 2);

// error:
// add();
// add(1);
// add(3, 4, 5);
// add('hello', 'world');
// add(123, 'world');

console.log('-----------');

function showItems(arr: number[]) {
  arr.forEach((item) => {
    console.log(item);
  });
}

showItems([4, 5, 6]);
// showItems(4, 5, 6);
