//global scope
var val=100
let a=100
if(true){
    var val=10
    let a=10
    console.log(val)
    console.log(a)

}
console.log(val)
console.log(a)


//Important=>hoisting in JS

console.log(addOne(5))
function addOne(value){
    return value+1;
}
console.log(addOne(6))


//console.log(addTwo(7))=>if we declare the function like the below one then we cannot 
//call it before its declaration
const addTwo=function(value){
    return value+2
}
console.log(addTwo(8))
console.log(addthree(8));

