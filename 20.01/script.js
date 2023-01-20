function updateTime() {
    const  hours = document.querySelector('.hours')
    const  minutes = document.querySelector('.minutes');
    const  seconds = document.querySelector('.seconds');
    // Здесь должен быть элемент hours 
    // Здесь должен быть элемент minutes 
    // Здесь должен быть элемент seconds
    console.log(hours,minutes,seconds);
    const clock = new Date();

    // getHours()
    hours.innerHTML = clock.getHours();
    // getMinutes()
    minutes.innerHTML = clock.getMinutes();
    // getSeconds()
    seconds.innerHTML = clock.getSeconds();

    
}
// Здесь должен быть задан интервал
setInterval(updateTime, 1000);
console.log(hours,minutes,seconds);
