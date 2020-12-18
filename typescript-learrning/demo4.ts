// type annotation
// type inference

let countNumber: number; // : number 注解
countNumber  = 123;

let countInference = 124; // 推断

const one = 1;

const tow = 2;
const three = one + tow;

// function getTotal<T extends number> (one: T, two: T) {
//   return one + tow
// }

// const total = getTotal(1, 2)

const xiaojj = {
  name: 'ly', 
  age: '18'
}

// ts 每一个属性类型都是固定的