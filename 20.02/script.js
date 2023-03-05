const textArray = document.querySelector(".text").innerHTML.split('');
let text = document.querySelector(".text").innerHTML;
let curentLatter = 0;


document.addEventListener("keydown", (event)=>{
    if (event.key == textArray[curentLatter]) {

        document.querySelector(".text").innerHTML = '<span class ="green-text">' + text.slice(0,curentLatter) + '</span>' + '<span class="black-text">' + text.slice(curentLatter, text.length) + '</span>';
        curentLatter++;
    }
})