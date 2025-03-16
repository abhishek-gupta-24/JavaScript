function setUsername(username){
    console.log(this);
    this.username=username;
}

function regUser(username,email,password){
    setUsername.call(this,username);
    this.email=email;
    this.password=password;
    console.log(this);
}

const newuser=new regUser("Abhishek","abhsihek@gmail.com","1234");
console.log(newuser);

