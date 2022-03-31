document.querySelector("form").addEventListener("submit",signUpfun)

var userData=JSON.parse(localStorage.getItem("userDetail")) || [];

function signUpfun(){
    event.preventDefault();

    var obj={
        firstNmae:document.querySelector("#fname").value,
        lastName:document.querySelector("#lname").value,
        email:document.querySelector("#email").value,
        passward:document.querySelector("#pass").value,

    }
    // console.log(obj);
    userData.push(obj);
    // console.log(userData);

    localStorage.setItem("userDetail",JSON.stringify(userData));
    window.location.href="login.html"


}