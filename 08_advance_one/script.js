const xhr=new XMLHttpRequest();
let userLink='https://api.github.com/users/abhishek-gupta-24';


xhr.open('GET',userLink);
xhr.onreadystatechange=function(){
    //console.log(xhr.readyState);
    if(xhr.readyState===4){
        
        //console.log(typeof this.response);=>string =>we need to convert this data into JSON format
        const data=JSON.parse(this.response);
        const userName=data.name;
        const followers=data.followers;
        const bio=data.bio;
        const imageUrl=data.avatar_url;
        console.log(data);
        document.querySelector('#name').innerHTML=`User name: ${userName}`;
        document.querySelector('#followers').innerHTML=`Followers: ${followers}`
        document.querySelector('#bio').innerHTML=`${bio}`;
        document.querySelector('#mainImg').setAttribute('src',imageUrl);


    }
}
xhr.send();