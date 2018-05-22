/**
 * Created by Lenovo on 19/5/2018.
 */

function inyect() {
console.log(sessionStorage.session)

    if(sessionStorage.session==null){
        console.log(sessionStorage.session)
       location.href='Login.html';
    }else{

        var ses = sessionStorage.session;
        var nom = document.getElementById("txtNom");
        nom.innerText += ses;

    }

}
function exit() {
    sessionStorage.session.clear
    location.href = "index.html";

}