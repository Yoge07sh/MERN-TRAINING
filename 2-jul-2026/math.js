/*let add = (a,b)=> {
let c = a+b;
console.log("this is add function")
console.log(c);
return c;
}
const subtract = (a,b) => {
    console.log("this is a substract");
    let c = a-b;
    console.log(c,"result");
    return c;
}
module.exports = {
    add,
    subtract
}*/
exports.add = (a,b)=> {
let c = a+b;
console.log("this is add function")
console.log(c);
return c;
}
exports.subtract = (a,b) => {
    console.log("this is a substract");
    let c = a-b;
    console.log(c,"result");
    return c;
}