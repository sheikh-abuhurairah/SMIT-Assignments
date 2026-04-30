let display = document.getElementById("display");

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let startTime;
let elapsedTime = 0;
let interval;

startBtn.addEventListener("click",start);
stopBtn.addEventListener("click",stop);
resetBtn.addEventListener("click",reset);

function start(){

startTime = Date.now() - elapsedTime;


interval = setInterval(function(){

elapsedTime = Date.now() - startTime;

let milliseconds = elapsedTime % 1000;
let seconds = Math.floor(elapsedTime / 1000) % 60;
let minutes = Math.floor(elapsedTime / 60000) % 60;
let hours = Math.floor(elapsedTime / 3600000);

display.innerText =
pad(hours) + ":" +
pad(minutes) + ":" +
pad(seconds) + ":" +
milliseconds.toString().padStart(3,"0");

},10)

}

function stop(){
clearInterval(interval);
}

function reset(){

clearInterval(interval);

elapsedTime = 0;

display.innerText = "00:00:00:000";

}

function pad(num){
return num.toString().padStart(2,"0");
}