// // 泛型

import { number, string } from "prop-types";

// function join<T, P>(f: T, s: P) {
//   return `${f}%=${s}`
// }


// let re = join(1, '2')

// console.log(
//   re
// );


// /// 泛型中数组的使用
// function myFun<T>(params:T[]) {
//   return params;
// }

// myFun<string>(['sss', 'sss'])

// 泛型中的类型
// 泛型约束
// interface Girl {
//   name: string 
// }
class SelectGirl<T extends number | string> {
  constructor(private girls: T[]) {

  }
  getGirl(index: number): T {
    return this.girls[index]
  }
}

const sg = new SelectGirl(['aaaa', 1])
console.log(sg.getGirl(1));




