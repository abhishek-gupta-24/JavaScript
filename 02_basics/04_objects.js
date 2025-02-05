 //const tinderuser= new Object();=>constructor 
//  const tinderuser={}
//  console.log(tinderuser)

//  tinderuser.name="abhishek"
//  tinderuser.year=3

//  console.log(tinderuser);

//  const userDetail={
//     Username:{
//         firstname:"abhishek",
//         lastname:"gupta",
//         otherdetails:{
//             like:1,
//         }
//     }
    
//  }
//  console.log(userDetail.Username.otherdetails.like);///nesting

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e"}

const obj3={obj1,obj2}
const obj4=Object.assign({},obj1,obj2)
const obj5={...obj1,...obj2}
console.log(obj3)
console.log(obj4)
console.log(obj5)


// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))
//all three returns array

//Destructuring of objects
// const info={
//     name:"abhishek",
//     year:3,
//     Branch:"CSE"
// }

// console.log(info.Branch)

// const {Branch}=info
// console.log(Branch)

// const {Branch:myBranch}=info
// console.log(myBranch)


