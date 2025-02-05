// PRIMITIVE
/*
    7 types:
    string number bigint boolean null undefined symbol
 */



//JavaScript is a dynamically typed language because we need not to define the datatype of the variable
//TypeScript is statically types language

const id=Symbol("123")
const accId=Symbol("123")

console.log(id===accId)//=> false

//NON-PRIMITIVE(Reference)
/* 
   array object functions
 */

   let array=["abhisek",123,true]
//    console.log(array)
//    console.log(typeof array)// object

   let obj={
        name:"abhishek",
        id:123
   }
   console.log(typeof obj)// object

   let functionValue=function(){
     console.log("i am inside function")
   }

   console.log(typeof functionValue)// function

   