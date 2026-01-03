// 문제 1: 클래스 생성과 메서드 만들기
// 다음 요구사항을 만족하는 Animal 클래스를 만들어 보세요.
// 생성자에서 name과 type을 받아 저장합니다.
// speak()라는 메서드를 만들어,
// 콘솔에 "동물 [name]은(는) [type]입니다."라고 출력합니다.
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  speak() {
    console.log(`동물 ${this.name}은(는) ${this.type}입니다.`);
  }
}
const dog = new Animal('강아지', '포유류');
dog.speak(); // 동물 강아지는(는) 포유류입니다.

// 문제 4: Rectangle 클래스 만들기
// Rectangle 클래스를 만들어보세요.
// 생성자에서 width와 height를 받아 저장합니다.
// getArea()라는 메서드를 만들어,
// 사각형의 넓이를 반환합니다.
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
const rect = new Rectangle(4, 5);
console.log(rect.getArea()); // 20

// 문제 5: Calculator 클래스 만들기
// Calculator 클래스를 만들어보세요.
// 생성자에서 아무 값도 받지 않습니다.
// 다음 메서드를 만드세요:
// add(x, y) → x + y
// subtract(x, y) → x - y
// multiply(x, y) → x * y
// divide(x, y) → x / y
class Calculator {
  constructor() {}

  add(x, y) {
    return x + y;
  }
  subtract(x, y) {
    return x - y;
  }
  multiply(x, y) {
    return x * y;
  }
  divide(x, y) {
    return x / y;
  }
}
result = new Calculator();
console.log(result.add(3, 4));
console.log(result.subtract(10, 2));
console.log(result.multiply(5, 6));
console.log(result.divide(10, 5));
