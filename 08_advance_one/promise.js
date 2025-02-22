new Promise(function(response,reject){
    setTimeout(function(){
        let error=false;
        console.log("async promise created")
        if(!error){
            response({username:"abhishek", year:"3rd"});
        }else{
            reject("Error:something went wrong");
        }
    },1000)
})
.then(function(user){
    console.log("Promise Consumed");
    return user.username;
})
.then(function(username){
    console.log(username);
})
.catch(function(err){
    console.log(err);
})