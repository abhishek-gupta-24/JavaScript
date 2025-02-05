/**************************FOR OF**********************/

// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const name="abhishek";
// for (const ele of name) {
//     console.log(ele);
// }

//Maps

// const map=new Map();

// map.set('IN',"INDIA");
// map.set('USA',"United States of America")
// map.set('Fr',"France")

// //console.log(map)

// for (const [key,value] of map) {
//     console.log(key,':-',value);
// }

//IMPORTANT
//maps are iteratable by for of but objects are not iteratable by for of in js
// const myObj={
//     'game1':'pubg',
//     'game2':'temple Run'
// }

// for (const [key,value] of myObj) {
//     console.log(key,':-',value);
// }

//ERROR above

//we use for in to iterate over the object

/**************************FOR IN**********************/
// const myObj={
//     "l1":"Cpp",
//     "l2":"js",
//     "l3":"java",
//     "l4":"py",
// }

// for (const key in myObj) {
//     console.log(myObj[key]);
// }

// const lan=["Cpp","java","js"];

// for (const key in lan) {
//     console.log(key);//print index of array
// }


/**************************FOR EACH**********************/


const codingLan=["Cpp","java","js","ruby","python"];

// codingLan.forEach( function (item){
//     console.log(item);
// })

// codingLan.forEach((item)=>{
//     console.log(item);
// })

// function print(item){
//     console.log(item);
// }

// codingLan.forEach(print);

codingLan.forEach((item,index,arr)=>{
    console.log(item, index, arr);
}) 


