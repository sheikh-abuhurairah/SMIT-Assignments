
function currenttime() {
    const h1 = document.querySelector(".clock")
    const p = document.querySelector("#date")
    const now = new Date()


    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let currentTime = ` ${h}:${m}:${s}`


    h1.textContent = currentTime



    let dayNumber = now.getDay();
    let dayName;

    switch (dayNumber) {

        case 0:
            dayName = "Sunday";
            break;

        case 1:
            dayName = "Monday";
            break;

        case 2:
            dayName = "Tuesday";
            break;

        case 3:
            dayName = "Wednesday";
            break;

        case 4:
            dayName = "Thursday";
            break;

        case 5:
            dayName = "Friday";
            break;

        case 6:
            dayName = "Saturday";
            break;

        default:
            dayName = "Invalid Day";
    }

    let date = now.getDate();

    let monthNumber = now.getMonth() + 1;
    let monthName;

    switch (monthNumber) {

        case 1:
            monthName = "January";
            break;

        case 2:
            monthName = "February";
            break;

        case 3:
            monthName = "March";
            break;

        case 4:
            monthName = "April";
            break;

        case 5:
            monthName = "May";
            break;

        case 6:
            monthName = "June";
            break;

        case 7:
            monthName = "July";
            break;

        case 8:
            monthName = "August";
            break;

        case 9:
            monthName = "September";
            break;

        case 10:
            monthName = "October";
            break;

        case 11:
            monthName = "November";
            break;

        case 12:
            monthName = "December";
            break;

        default:
            monthName = "Invalid Month";
    }

    let year = now.getFullYear();


    let currentdate = `${dayName}, ${date} ${monthName} ${year}`

    p.textContent = currentdate;

}

setInterval(currenttime, 1000)


let minutes = 0;
let seconds = 0;
let milisec = 0;

let interval;

let swMinutes = document.getElementById("sw-minutes");
let swSeconds = document.getElementById("sw-seconds");
let swMilisec = document.getElementById("sw-milisec");

let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");

function updateDisplay() {
    swMinutes.innerText = String(minutes).padStart(2, "0");
    swSeconds.innerText = String(seconds).padStart(2, "0");
    swMilisec.innerText = String(milisec).padStart(2, "0");
}

function startStopwatch() {

    if (interval) return;

    interval = setInterval(function () {

        milisec++;

        if (milisec === 100) {
            milisec = 0;
            seconds++;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        updateDisplay();

    }, 10);

}

function stopStopwatch() {
    clearInterval(interval);
    interval = null;
}

function resetStopwatch() {

    clearInterval(interval);
    interval = null;

    minutes = 0;
    seconds = 0;
    milisec = 0;

    updateDisplay();

}

startBtn.addEventListener("click", startStopwatch);
stopBtn.addEventListener("click", stopStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
