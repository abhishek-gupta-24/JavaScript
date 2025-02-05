//singleton
//when object is created using constructor then it is singleton
//but when created by object literals then it is not singleton

//Object.create=>contructor method

//object literals=>

const sym=Symbol("key1")

const JsUser={
    name:"abhishek",
    year:3,
    "location": "silchar",
    [sym]:"myKey1"// to use symbol
}

console.log(JsUser.name)
console.log(JsUser["name"]);
console.log(JsUser.year)
//console.log(JsUser.location)//string key can not be accessed like this=>error
console.log(JsUser["location"])
console.log(JsUser[sym])

JsUser.year=4
Object.freeze(JsUser)//=>to freeze the object i.e. we can not change the values of object now
