//falsy values
//false,0,-0,0n,null,undefined,NaN,""

//truthy
//'0','false',[],{}," ",function(){};

//  let useremail=[]
// if(useremail.length===0){
//     console.log("empty array");
// }

// let empobj={};
// if(Object.keys(empobj).length===0){
//     console.log("empty objects");
// }

//Nullish coalescing Operator(??): null undefined

let val1;
val1=1??10;
console.log(val1);

let val2;
val2=null??20;
console.log(val2);

let val3;
val3=null??10??20;
console.log(val3);
