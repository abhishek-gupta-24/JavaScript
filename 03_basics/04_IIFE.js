//Imidiately invoked function Expressions(IIFE)

//IIFE is the function is called just after they are defined they are used to protect the code from the pollution of global scope

(function hello(){
    console.log("hello world")
})();
//we need to end the context so we use semicolon

((name)=>{
    console.log(`my name is ${name}`)
})("abhi")
