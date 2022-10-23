let registerForm=document.querySelector("form");
let username=document.querySelector(".username");
let password=document.querySelector(".password");
let confirmPassword=document.querySelector(".confirm")
registerForm.addEventListener("submit", (e)=>{
    if(password.value === confirmPassword.value){
        registerForm.submit();
    }
    else{
        console.log("Passwords do not match");
        alert("password do not match");
    }
    // registerForm.submit();
});

//e.preventDefault() is used to stop submition