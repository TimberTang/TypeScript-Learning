// 接口

import { number, string } from "prop-types";


// const screenResume = (name: string, age: number, bust: number): void => {
//     age < 24 && bust > 90 && console.log(name + '进入面试');
//     age > 24 || bust < 90 || console.log(name + '不进入面试');
// }

// screenResume('打搅', 18,89)


// const getResume = (name: string, age: number, bust: number) =>  {
//     console.log(name + age + bust);
    
// }

// getResume('aaa', 18, 99)

interface XJJ {
  name: string, 
  age: number, 
  bust: number,
  waistline ?: number,

  [propname: string]: any, // propname 表示可以添加任意符合规则的属性 

  say():string
}

const girl: Teacher = {
  name: 'dj',
  age: 18, 
  bust: 94,
  sex: '女孩',
  say():string {
    console.log('say');
    return 'say method'
  },
  teach() {
    
  }
}

const getResume = function(girl: XJJ) {
  console.log(girl);
  // girl.sex && console.log(girl.sex);
}

// getResume(girl)
// console.log(girl.say());


/// 接口表示约定,约束 没有实例 和实现




class Xiaojiejie implements XJJ {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  say(): string {
    throw new Error("Method not implemented.");
  }
  constructor (name: string) {
    this.name = name
  }
}

let xjj = new Xiaojiejie('aa')
console.log(xjj);

interface Teacher extends XJJ {
    teach(): void
}

getResume(girl)