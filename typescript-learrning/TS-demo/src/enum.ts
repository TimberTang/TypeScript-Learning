
// const Status = {
// }


// let result = getService(0)
// console.log(result);


enum Status {
  MASSAGE = 1, SPA, DBJ
}


function getService(status: Status) {
  switch (status) {
    case Status.MASSAGE:
      return '按摩'
      break;
    case Status.SPA: 
      return 'spa'
      break
    default:
      return '不干嘛'
      break;
  }
}
let result = getService(Status.DBJ)
console.log(result);

