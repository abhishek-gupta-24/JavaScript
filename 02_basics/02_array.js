let name=["abhsihek","chetan","saket"];
let surname=["gupta","verma","kumar"];

// name.push(surname);
// console.log(name);
// in this case push not behaves like the way we think it should work

//to push the elements of one array into another we use concat and spread opertar(...);

// let fullname=name.concat(surname);
// console.log(fullname);

let newFullName=[...surname,...name]
console.log(newFullName);

//both concat and spread operation returns a new array while push works on the same array

let array=[1,2,[2,4],3,5,[6,7,[8,9]]];
//depth=3;
//flat(depth)=>we can use infinity as well but it not recommended we should always give its depth
let anotherArray=array.flat(Infinity);


console.log(Array.isArray("hello"));//check it is array or not

console.log(Array.from("abhishek"));
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));


