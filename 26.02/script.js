const buttonReg = document.querySelector('.button-reg');

function createValue() {
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
}


window.addEventListener("beforeunload", (event) => {
    createValue;

    window.localStorage.setItem("username", username.value);
    window.localStorage.setItem("email", email.value);
    window.localStorage.setItem("password", password.value);
})
document.addEventListener("DOMContentLoaded", (event) =>{
    createValue;
    username.value = window.localStorage.getItem("username");
    email.value = window.localStorage.getItem("email");
    password.value = window.localStorage.getItem("password");

})
document.addEventListener("submit", (event) =>{
    createValue
    window.localStorage.clear();
    username.value = "";
    email.value = "";
    password.value = "";
})