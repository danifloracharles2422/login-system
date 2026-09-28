
let button=document.getElementById("submit");
let message=document.getElementById("message");
button.addEventListener("click",function() {
    let email=document.getElementById("email").value;
    let name=document.getElementById("name").value;
let password=document.getElementById("password").value;

    if(name=="dani" && password=="1234" && email=="dani22@gmail.com"){
        message.innerText="Login successfull"
        message.style.color="green"
    }else{
         message.innerText="Name or Password error"
        message.style.color="red"
    }
})