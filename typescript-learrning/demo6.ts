import { number } from "prop-types"

const numberArray: number[] = [1, 2, 3]

console.log(numberArray);


const stringArray: string[] = ['1', '2', '3']
console.log(stringArray);

const undefinedArray : undefined[] = [undefined, null, ]
console.log(undefinedArray);

type stringnumber = (string | number) //type alias 类型别名
type Lady = {name: string, age: number}
const array: stringnumber[] = [1, '1', 2]

const xiaojiejies: (Madam)[] = [
  {name: 'ly', age: 18}, 
  {name: 'timber', age: 28}
]

// 也可以使用类来使用
class Madam {
  name: string;
  age: number
}