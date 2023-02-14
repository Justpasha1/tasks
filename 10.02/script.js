// const window = document.defaultView()
const arrowTop = document.querySelector("#arrowTop");
const arrowDown = document.querySelector("#arrowDown");

window.addEventListener("scroll", (event) =>{
    if (window.scrollY > 500) {
        arrowDown.hidden = true
        arrowTop.hidden = false
    }
    if (window.scrollY < 500) {
        arrowDown.hidden = false
        arrowTop.hidden = true
    }
});
arrowTop.addEventListener("click",(event)=>{
    document.documentElement.scrollTop = 0;
});
arrowDown.addEventListener("click",(event)=>{
    document.documentElement.scrollTop = 1868;
});