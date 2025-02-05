const accId=1234;
let accEmail="abhishek@gmail.com";//any variable declared by let is available only in the scope in which it is defined
var accPassword="12345";//any variable declared by var in a function is available throughout the function
accCity="delhi";//it doesn't give error but not recommended to use
let accState;//undefined

//accId=5;
//console.log(accId); --->error

console.table([accId,accEmail,accPassword,accCity]);


