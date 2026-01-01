class Car {
  color: string; // TSで必要
  // TSでcolor: string指定必要
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
}

const bmw = new Car('red');

// または

class Car2 {
  // color: string;
  // public or readonly
  constructor(public color: string) {
    this.color = color; // 省略可能
  }
  start() {
    console.log('start');
  }
}

const bmw2 = new Car2('blue');

// Access modifier - public, private, protected
class Car3 {
  public readonly name: string = 'car'; // subclass, class instanceからアクセス可能
  // private name: string = 'car'; // child classやinstanceからアクセス不可
  // #name: string = 'car'; // child classやinstanceからアクセス不可
  // protected name: string = 'car'; // child classからアクセス可能。instanceからは不可
  //
  color: string;
  static wheels = 4; // static var
  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }
  start() {
    console.log('start');
    console.log(this.name);
    console.log(Car3.wheels);
  }
}

class Bmw3 extends Car3 {
  constructor(color: string, name: string) {
    super(color, name);
  }
  showName() {
    // console.log(this.#name);
    console.log(this.name);
  }
}

const z4 = new Bmw3('black', 'changed name');
console.log(z4.name);
// z4.name = 'changed name'; // readonlyなので直接変更不可
console.log(Car3.wheels);
z4.start();

console.log('--------');

// abstract class
abstract class Car4 {
  // color: string; // constructor(public color: string)なら省略可能
  constructor(public color: string) {
    // this.color = color; // constructor(public color: string)なら省略可能
  }
  start() {
    console.log('start');
  }
  abstract doSomething(): void;
}

// const car4 = new Car4{"green"}; // error: new不可。extendsしか使えない

class Bmw4 extends Car4 {
  constructor(color: string) {
    super(color);
  }
  doSomething() {
    console.log('something');
  }
}

const z44 = new Bmw4('Green');
z44.doSomething();
