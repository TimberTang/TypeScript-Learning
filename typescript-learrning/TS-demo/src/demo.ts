// // tssconfig.json

// const person: string = 'timber'

// // "include": ["demo.ts"], 包含编译的文件include进来

// // 允许你的注解类型any 不用特别表明
// // function timbert(name) {
// //   return name
// // }

// const timbert: string = null

//
interface Waiter {
  anjiao: boolean,
  say: ()=> {}
}


interface Teacher {
  anjiao: boolean,
  skill: () => {}
}

function judgeWho(animal: Waiter | Teacher) {
  //  类型断言
  if (animal.anjiao) {
    (animal as Teacher).skill()
  } else {
    (animal as Waiter).say()
  }
  // 2. in 方法断言
  if('skill' in animal) {
    animal.skill()
  } else {
    animal.say()
  }

  

}

function add(f: string | number, s: string | number) {
  // typof 断言
  if (typeof f === 'string' || typeof s === 'string') {
    return `${f}  aaa ${s}`
  } else {
    return f + s
  }
  
}
// instanceof
class NumberObj {
  count: number
}

function addObj(f: object | NumberObj, s: object | NumberObj) {
  if (f instanceof NumberObj && s instanceof NumberObj) {
      return f.count + s.count
  } else 
  {
    return '9'
  }
}