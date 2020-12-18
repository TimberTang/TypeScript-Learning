// const Status = {
// }
// let result = getService(0)
// console.log(result);
var Status;
(function (Status) {
    Status[Status["MASSAGE"] = 1] = "MASSAGE";
    Status[Status["SPA"] = 2] = "SPA";
    Status[Status["DBJ"] = 3] = "DBJ";
})(Status || (Status = {}));
function getService(status) {
    switch (status) {
        case Status.MASSAGE:
            return '按摩';
            break;
        case Status.SPA:
            return 'spa';
            break;
        default:
            return '不干嘛';
            break;
    }
}
var result = getService(Status.DBJ);
console.log(result);
