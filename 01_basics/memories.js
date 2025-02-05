//stack memory=>primitive datatype
//heap memory=>non-primitive memory
//STACK
let data=10;
let newdata=data;
newdata=20;

console.table([data,newdata]);
//copy of variable is created in stack that means 
// if we make change in newdata variable it will not change the data variable

//HEAP

let obj={
    name:"abhishek",
    id:2212064
}
let newobj=obj;
newobj.name="chetan";

console.log(newobj.name);
console.log(obj.name);
//newobj refers to the same object obj that means if me make any change in newobj the same change
//will reflect in obj=>call by reference
