// Variables
var timeEl = document.querySelector("Timer");
var startEl = document.getElementById("Start");
var getQuestions = document.querySelector("Questions");
var getChoices = document.querySelector("Choices");
var getSeconds = document.getElementById("Time");
var secondsLeft = 60;
var questionsArray = 0;

// Press start button

function startBtn() {
    getSeconds.textContent = secondsLeft;
    countDown();
}
startEl.addEventListener("click", function () {
    secondsLeft--;
    startBtn();
});

// Countdown begins

function countDown() {
    var tInterval = setInterval(function () {
        secondsLeft--;
        document.getElementById("Time").textContent = secondsLeft;
        if (secondsLeft === 0)
            clearInterval(tInterval);
    }, 1000);
}

// Start quiz

function startQuiz() {
    var showQuestion = getQuestions[showQuestionIndex];

    // call for another function that gets the questions
    for (i = 0; i < getQuestions.length; i++) {
        var buttons = document.createElement("buttons");
        buttons.setAttribute("class", "choice");
    }
    buttons.onclick = userClick;
    getChoices.appendChild(buttons);

    userClick();

}
// click on answer / if answer is incorrect, deduct more time from timer
function userClick() {
    if (userClick !== getQuestions[showQuestion].answer) {
        points -= 10; {
            alert("Incorrect!");
        }
    } else {
        points += 10; {
            alert("Correct!");
        }
    }
        highScore();
}

// save to local storage

function highScore() {
    var initials = initials.value.trim();

    if (initials !== "") {
        JSON.parse(window.localStorage.getItem("highScores")) || [];
    }
}

