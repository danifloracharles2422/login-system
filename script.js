
let button=document.getElementById("submit");
let message=document.getElementById("message");
button.addEventListener("click",function() {
    let name=document.getElementById("name").value;
let password=document.getElementById("password").value;

    if(name=="dani" && password=="1234"){
        message.innerText="Login successfull"
        message.style.color="green"
    }else{
         message.innerText="name or password error"
        message.style.color="red"
    }
})