var
/*
    jQuery elements
*/
    reset = $("#reset"),
    start = $("#start"),
    pause = $("#pause"),
    timeDisplay = $("#timer"),
/*
    Strings we'll be reusing
*/
    timerText = timeDisplay.text(),
    timerPrefix = "Time elapsed: ",
/*
    a variable for our interval
*/
    timerID = undefined,
/*
    storage for our time counter
*/
    timerCount = 0,
/*
    is our timer paused?
*/
    timerPaused = false,
/*
    1000 milliseconds in 1 second
*/
    second = 1000;


var clickReset = function() {
    /*
        destroy our interval timer
        stops the clock from updating any further
    */
    clearInterval(timerID);
    timerID = null;

    /*
        unpause the timer so it's ready to go on the next click
    */
    timerCount = 0;

    /*
        restore the old text in place of our counting number
    */
    timeDisplay.text(timerText);
}

var clickStart = function() {
    /*
      make sure we're unpaused
    */
    timerPaused = false;

    /*
      start a new timer
      (if we don't already have one)
    */
    if(!timerID){
        updateTimer();
        timerID = setInterval(updateTimer, 1 * second);
    }
}

var clickPause = function() {
    /*
      Change from "paused" to "unpaused" (and vice-versa)
    */
    timerPaused = !timerPaused;
}

var updateTimer = function() {
    /*
      Count up 1 second, and show the new count
      !! But only if we're not paused !!
    */
    if (!timerPaused) {
        timerCount = timerCount + 1
        timeDisplay.text(timerPrefix + timerCount);

        // or combine it into one line
        // timeDisplay.text(timerPrefix + timerCount++);
    }
}

reset.on("click", clickReset);
start.on("click", clickStart);
pause.on("click", clickPause);
