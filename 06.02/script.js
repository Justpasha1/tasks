const button = document.querySelector(".button-readmore");
const text = document.querySelector(".moreText");
const dots = document.querySelector(".dots");

button.addEventListener("click", (event) =>{
    if (dots.style.display == "none") {
        button.innerHTML = 'Read more'
        dots.style.display = "inline"
        text.style.display = "none"
    }else{
        button.innerHTML = 'Read less'
        text.style.display = 'inline'
        dots.style.display = "none"
    }
});


