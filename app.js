let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let minutes = document.querySelector("#minutes");
let secondes = document.querySelector("#secondes");
let timer;

let countdwn = function countdown() {
    secondes.textContent--;
    if(secondes.textContent === "-1") {
        secondes.textContent = 59;
        minutes.textContent--;
    }
    if(minutes.textContent === "-1") {
        minutes.textContent = "25";
        secondes.textContent = "00";
        clearInterval(timer);
        start.classList.remove("invisible");
        stop.classList.remove("visible");
    }
}

function reset() {
    minutes.textContent = "00";
    secondes.textContent = "02";
}

start.addEventListener("click", function () {
    timer = setInterval(countdwn, 1000);
    console.log("JB c'est un bg ♥");
    start.classList.add("invisible");
    stop.classList.add("visible");
    
    
});


stop.addEventListener("click", function() {
    clearInterval(timer);
    reset();
    start.classList.remove("invisible");
    stop.classList.remove("visible");
})



