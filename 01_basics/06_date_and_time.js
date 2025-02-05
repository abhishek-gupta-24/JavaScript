//Date 

//method 1
let todayDate=new Date();
console.log(todayDate);
console.log(todayDate.toString());
console.log(todayDate.toDateString());
console.log(todayDate.getDate());
console.log(todayDate.getDay());
console.log(todayDate.getMonth()+1);

//method 2
let date=new Date('2025-01-22');//=>YYYY-MM-DD
console.log(date.getDate());
console.log(date.toString());
console.log(date.toDateString());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());

//method 3=>MM-DD-YYYY=>same as above

//time
let myDate=new Date();
let time=Date.now();//time in ms
console.log(Math.floor(time/1000))//time in s

