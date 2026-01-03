// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// super() 復習
class Animal {
  constructor(name) {
    this.name = name;
  }
  nameIntroduce() {
    console.log(`私は${this.name}です`);
  }
}

const dogInstance = new Animal('Inu');
dogInstance.nameIntroduce();

class Cat extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  ageIntroduce() {
    console.log(`${this.name}は${this.age}歳です`);
  }
}

const catInstance = new Cat('Neko', 2);
catInstance.nameIntroduce();
catInstance.ageIntroduce();
