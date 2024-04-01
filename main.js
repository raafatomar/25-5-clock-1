let breakSessionLength = 5 * 60;
let sessionLength = 25 * 60;
let isSessionMode = true;
const resetElement = document.querySelector("#reset");
const breakLengthElement = document.getElementById("break-length");
const breakMinusButton = document.getElementById("break-decrement");
const breakPlusButton = document.getElementById("break-increment");
const sessionLengthElement = document.getElementById("session-length");
const sessionMinusButton = document.getElementById("session-decrement");
const sessionPlusButton = document.getElementById("session-increment");
const timerMinElement = document.getElementById("timer-min");
const timerSecElement = document.getElementById("timer-sec");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const title = document.getElementById("title");
let breakTimer;
let sessionTimer;
let TWINTY_FIVE = 25 * 60 ;
let FIVE = 5 * 60 ;

function startBreak() { 
        clearInterval(sessionTimer);
        isSessionMode = false;
        title.textContent = "break";
        breakTimer = setInterval(() => {
            breakSessionLength -= 1;
            updateTimer(breakSessionLength);
            if(breakLengthElement === 0) {
                startSession();
            }
        }, 1000);
}
function startSession() {
    clearInterval(breakTimer);
        isSessionMode = true;
        title.textContent = "Session";
    sessionTimer = setInterval(() => {
        sessionLength -= 1;
        updateTimer(sessionLength);
      }, 1000);
}

function updateTimer(length){
    timerMinElement.textContent = Math.floor(length / 60);
    timerSecElement.textContent = length % 60;
}
playButton.addEventListener("click", () => {
  if (isSessionMode) {
    startSession();
  } else {
    startBreak();
  }
});

pauseButton.addEventListener("click", () => {
    clearInterval(sessionTimer);
})

// reset the timer
reset.addEventListener("click", () => {
    sessionLengthElement.innerText = TWINTY_FIVE /60;
    breakLengthElement.innerText = FIVE /60;
    sessionLength = TWINTY_FIVE;
    breakSessionLength = FIVE;
    clearInterval(sessionTimer);
    updateTimer(sessionLength);
    timerSecElement.textContent = '00';
  });

// Add a click event listener to the buttons
breakPlusButton.addEventListener("click", () => {
  breakSessionLength += 60;
  breakLengthElement.textContent = breakSessionLength / 60;
});
breakMinusButton.addEventListener("click", () => {
  breakSessionLength -= 60;
  breakLengthElement.textContent = breakSessionLength / 60;
});

sessionMinusButton.addEventListener("click", () => {
  sessionLength -= 60;
  sessionLengthElement.textContent = sessionLength / 60;
  if (isSessionMode) {
    timerMinElement.textContent = sessionLength / 60;
  }
});
sessionPlusButton.addEventListener("click", () => {
  sessionLength += 60;
  sessionLengthElement.textContent = sessionLength / 60;
  if (isSessionMode) {
    timerMinElement.textContent = sessionLength / 60;
  }
});
