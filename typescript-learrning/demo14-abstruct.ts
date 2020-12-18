//  class Person {
//   constructor(public readonly name: string) {
    
//   }
// }
// const person = new Person('timber')
// console.log(person.name);


// 抽象类

abstract class Girl {
  abstract skill(): string
}

class Waiter extends Girl {
  skill() {
    return 'waiter'
  }
}

class BaseTeacher extends Girl {
  skill() {
    return 'BaseTeacher'
  }
}

class SeniorTeacher extends Girl {
  skill() {
    return 'SeniorTeacher'
  }
}

let g = new Waiter()
console.log(g.skill());
