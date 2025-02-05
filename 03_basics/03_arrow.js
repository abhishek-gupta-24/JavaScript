const obj={
    username:"abhishek",
    info:function(){
        console.log(`${this.username} is logged in`)
        console.log(this)
    }
}

console.log(this)

function addNumber(num1,num2){
    console.log(this)
    return num1+num2
}

addNumber(2,3);

//console.log(addTwo1(3,4))=>error
const addTwo1=(num1,num2)=>{
    return num1+num2;
}

const addTwo2=(num1,num2)=>num1+num2;
const addTwo3=(num1,num2)=>(num1+num2);//we use brackets because when we return objects we need curly braces


