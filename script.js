let min = 0;
let sec = 0;
let tens = 0;

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

const outputMin = document.getElementById("min");
const outputSec = document.getElementById("sec");
const outputTens = document.getElementById("tens");

let interval;

function startTimer() {
  tens++;

  if (tens <= 9) {
    outputTens.innerHTML = "0" + tens;
  } else if (tens <= 99) {
    outputTens.innerHTML = tens;
  }

  if (tens > 99) {
    sec++;
    outputSec.innerHTML = sec < 10 ? "0" + sec : sec;
    tens = 0;
    outputTens.innerHTML = "00";
  }

  if (sec >= 60) {
    min++;
    outputMin.innerHTML = min < 10 ? "0" + min : min;
    sec = 0;
    outputSec.innerHTML = "00";
  }
}

startBtn.addEventListener("click", function() {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", function() {
  clearInterval(interval);
});

resetBtn.addEventListener("click", function() {
  clearInterval(interval);
  min = 0;
  sec = 0;
  tens = 0;
  outputMin.innerHTML = "00";
  outputSec.innerHTML = "00";
  outputTens.innerHTML = "00";
});