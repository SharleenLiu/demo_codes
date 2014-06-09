var   timerId = -1,
        interval = 25,
        ms = 0,
        seconds = 0,
        minutes = 0;

function startTimer() {
    if (timerId === -1) {
        timerId = window.setInterval("turnTimerOn()", interval);
    }
};
function displayTimer() {
    document.getElementById('milliseconds').innerHTML = ms;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('minutes').innerHTML = minutes;
};
function turnTimerOn() {
    ms += interval;
    if (ms >= 1000) {
        ms = 0;
        seconds += 1;
    }
    if (seconds >= 60) {
        ms = 0;
        seconds = 0;
        minutes += 1;
    }
    displayTimer();
};
function pauseTimer() {
    window.clearInterval(timerId);
    timerId = -1;
};
function clearTimer() {
    pauseTimer();
    ms = 0;
    seconds = 0;
    minutes = 0;
    displayTimer();
};
function init(startButton, pauseButton, clearButton) {
    document.getElementById(startButton).
                addEventListener("click", startTimer, false);
    document.getElementById(pauseButton).
                addEventListener("click", pauseTimer, false);
    document.getElementById(clearButton).
                addEventListener("click", clearTimer, false);
    displayTimer();
};
