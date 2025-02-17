document.querySelector("#red").onclick=function(){
    alert("clicked red")
}
// we dont use the above approach because it doesnt include all features
//we can also use onclick directly on html which is not good when we scale up our code

document.querySelector('#green').addEventListener('click',(e)=>{
    alert("clicked green");
},false);


//sometimes we need to include the third parameter which is false or true
// sometimes interviewer gives us application which can not be exexuted without the use of third parameter

//attachEvent() is also used
//jQuery: on

// document.querySelector('#blue').addEventListener('click',(e)=>{
//     console.log(e)
// },false);

// read more about 
//type,timeStamp,defaultPrevented
//target, toElement, srcElement, currentTarget,
//clientX, clientY, screenX, screenY
//altKey,ctrlKey,shiefKey, keyCode  

//false =>bublling event=>bubble moves from lower to higher
//true=>capturing event->capture moves from higher to lower

document.querySelector('.main_div').addEventListener('click',(e)=>{
    console.log("main Div clicked")
},false);

document.querySelector('#blue').addEventListener('click',(e)=>{
    console.log("blue color clicked");
    e.stopPropagation();
},false);

//stopPropagation is used to stop bubbling

// document.querySelector('.main_div').addEventListener('click',(e)=>{
//     console.log("main Div clicked")
// },true);

// document.querySelector('#blue').addEventListener('click',(e)=>{
//     console.log("blue color clicked");
// },true);

//e.target.parentNode;
//e.target.tagName;