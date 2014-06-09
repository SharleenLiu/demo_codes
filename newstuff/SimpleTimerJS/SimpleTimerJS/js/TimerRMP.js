var TimerRMP = (function (window) {
    "use strict";
    var 
        document = window.document,
        timerId = -1,
        interval = 25,
        ms = 0,
        seconds = 0,
        minutes = 0,
        startTimer = function () {
            if(timerId === -1) {
                timerId = window.setInterval("TimerRMP.turnTimerOn()", interval);
            }
        },
        displayTimer = function () {
            document.getElementById('milliseconds').innerHTML = ms;
            document.getElementById('seconds').innerHTML = seconds;
            document.getElementById('minutes').innerHTML = minutes;
        },
        turnTimerOn = function () {
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
        },
        pauseTimer = function () {
            window.clearInterval(timerId);
            timerId = -1;
        },
        clearTimer = function () {
            pauseTimer();
            ms = 0;
            seconds = 0;
            minutes = 0;
            displayTimer();
        },
        init = function (startButton, pauseButton, clearButton) {
            document.getElementById(startButton).
                addEventListener("click", startTimer, false);
            document.getElementById(pauseButton).
                addEventListener("click", pauseTimer, false);
            document.getElementById(clearButton).
                addEventListener("click", clearTimer, false);
            displayTimer();
        };
    return {
        init: init,
        turnTimerOn: turnTimerOn
    };
} (window));