let seconds = 0;
let tens = 0;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let buttonStart = document.getElementById("btn-start");
let buttonStop = document.getElementById("btn-stop");
let buttonReset = document.getElementById("btn-reset");
let interval; // to store timer value

// ============*Function start*=================

const startTimer = () => {
    tens++;

    if (tens < 10) {
        appendTens.innerHTML = "0" + tens;
    } else {
        appendTens.innerHTML = tens;
    }
    
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "00";
    }
    
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
};

buttonStart.addEventListener("click", () => {
    clearInterval(interval); // Clear any existing interval before starting a new one
    interval = setInterval(startTimer, 10); // Corrected: specify interval time in milliseconds
});

buttonStop.addEventListener("click", () => {
    clearInterval(interval);
    buttonStart.innerHTML = "Continue";
});

buttonReset.addEventListener("click", () => {
    clearInterval(interval);
    buttonStart.innerHTML = "Start";
    tens = 0;
    seconds = 0;
    appendSeconds.innerHTML = "00";
    appendTens.innerHTML = "00";
});
