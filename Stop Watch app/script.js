const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;

let timer = null;
let running = false;

function updateDisplay(){

    minutesDisplay.textContent =
        String(minutes).padStart(2,"0");

    secondsDisplay.textContent =
        String(seconds).padStart(2,"0");

    millisecondsDisplay.textContent =
        String(milliseconds).padStart(2,"0");
}

function startTimer(){

    if(running) return;

    running = true;

    timer = setInterval(() => {

        milliseconds++;

        if(milliseconds === 100){
            milliseconds = 0;
            seconds++;
        }

        if(seconds === 60){
            seconds = 0;
            minutes++;
        }

        updateDisplay();

    },10);
}

function pauseTimer(){

    clearInterval(timer);
    running = false;
}

function resetTimer(){

    clearInterval(timer);

    running = false;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;

    updateDisplay();
}

startBtn.addEventListener("click",startTimer);
pauseBtn.addEventListener("click",pauseTimer);
resetBtn.addEventListener("click",resetTimer);

updateDisplay();