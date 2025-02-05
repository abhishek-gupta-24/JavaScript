let arr=[1,2,3,4,5];
//console.log(arr[0]);

let newarr=arr;
//shallow copies of the array is created because an array is an object in JS and the newarr 
//refers to the same array

//console.log(arr);

// arr.push(6);
// console.log(arr);

// arr.unshift(0);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// console.log(arr.includes(4));
//console.log(arr.indexOf(3));
// let myArr=arr.join();//converts the array into string separated by commas
// console.log(typeof myArr);
// console.log(myArr);

//SLICE and SPLICE
console.log("A ",arr);

let slicedArr=arr.slice(1,3);
console.log("B",arr);
console.log(slicedArr);

let splicedArr=arr.splice(1,3);
console.log("C",arr);
console.log(splicedArr);


//splice and slice are the two differnet methods
//splice manipulate the original array while slice doesn't manipulate the origianl array



