// function add(num1,num2){
//     console.log(num1+num2);
// }
// add(2,3);

function add(num1,num2){
    return num1+num2
}
let sum=add(1,2)
console.log(sum)

function userLogin(username="abhishek"){
    return `${username} is logged in `
}
const result=userLogin("chetan")
const result2=userLogin()//by default abhishek
console.log(result)
console.log(result2)
