document.querySelector("form").addEventListener("submit",loginFun);
var regdUser=JSON.parse(localStorage.getItem("userDetail"));
// console.log(regdUser);

function loginFun(){
    event.preventDefault();
    var enterEmail=document.querySelector("#email").value;
    var enterPassward=document.querySelector("#pass").value;
    console.log(enterEmail,enterPassward)

    for(var i=0;i<regdUser.length;i++)
    {
        if(regdUser[i].email==enterEmail && regdUser[i].passward==enterPassward)
        {
            alert("login sussful")
            // console.log("login sussessful")
            window.location.href="index.html";
            break;
        }
        else{
            alert("login sussessful")
            // console.log("failed")
            window.location.href="index.html";
            break;
        }
    }

}
