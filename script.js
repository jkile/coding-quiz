let timer = 99;
let clock;

function decrementTimer() {
    timer--;
    document.getElementById("timer").innerText = `Time: ${timer}`;
    if (timer == 0) {
        alert("Time is up!");
        stopTimer();
    }
}


function stopTimer() {
    clearInterval(clock);
}

let answers = ["Option 1"];


document.getElementById("startQuiz").addEventListener("click", function () {
    document.getElementById("home").style = "display: none";
    document.getElementById("formOne").style = "display: block";
    document.getElementById("timer").style = "display: block";
    clock = setInterval(decrementTimer, 1000)
});

document.getElementById("formOne").addEventListener("click", function (e) {
    if (e.target.tagName == "INPUT") {
        document.getElementById("formOne").style = "display: none";
        document.getElementById("formTwo").style = "display: block";
        answerCheck(e.target.value);
    }
});
document.getElementById("formTwo").addEventListener("click", function (e) {
    if (e.target.tagName == "INPUT") {
        document.getElementById("formTwo").style = "display: none";
        document.getElementById("formThree").style = "display: block";
        answerCheck(e.target.value);
    }
});
document.getElementById("formThree").addEventListener("click", function (e) {
    if (e.target.tagName == "INPUT") {
        document.getElementById("formThree").style = "display: none";
        document.getElementById("formFour").style = "display: block";
        answerCheck(e.target.value);
    }
});
document.getElementById("formFour").addEventListener("click", function (e) {
    if (e.target.tagName == "INPUT") {
        document.getElementById("formFour").style = "display: none";
        document.getElementById("formFive").style = "display: block";
        answerCheck(e.target.value);
    }
});

document.getElementById("formFive").addEventListener("click", function (e) {
    if (e.target.tagName == "INPUT") {
        document.getElementById("formFive").style = "display: none";
        document.getElementById("scoreEntry").style = "display: block";
        answerCheck(e.target.value);
        stopTimer();
        document.getElementById("timer").innerText = `Time: ${timer}`;
        document.getElementById("finalScore").textContent = `Your final score is: ${timer}`;
    }
});

//function hideShow(el1, el2){
//   el1.style = "display: none";
//    el2.style = "display: block";
//
//}


function answerCheck(answer) {
    if (answers.includes(answer)) {
        document.querySelectorAll("p.answer").textContent = "Correct!";
    } else {
        document.querySelectorAll("p.answer").textContent = "Incorrect";
        timer = timer - 10;
    }
}

document.getElementById("submitHighscore").addEventListener("click", function (e) {
    e.preventDefault();

    let initials = document.getElementById("inputInitials").value;
    let namesList = JSON.parse(localStorage.getItem("userInitials")) || [];
    let scoresList = JSON.parse(localStorage.getItem("userScore")) || [];

    namesList.push(initials);
    scoresList.push(timer);

    localStorage.setItem("userInitials", JSON.stringify(namesList));
    localStorage.setItem("userScore", JSON.stringify(scoresList));

    document.getElementById("scoreEntry").style = "display: none";
    document.getElementById("highscores").style = "display: block";

    displayScores();
})

function displayScores() {

    let namesList = document.getElementById("namesList");
    let scoresList = document.getElementById("scoresList");

    while (namesList.firstChild) {
        namesList.removeChild(namesList.firstChild);
    }
    while (scoresList.firstChild) {
        scoresList.removeChild(scoresList.firstChild);
    }

    let initials = JSON.parse(localStorage.getItem("userInitials")) || [];
    let scoreArray = JSON.parse(localStorage.getItem("userScore")) || [];

    for (let i = initials.length - 1; i > -1; i--) {

        let name = document.createElement("p");
        name.textContent = initials[i];
        namesList.appendChild(name);
        name.setAttribute("class", "bg-secondary text-light rounded shadow");

        let score = document.createElement("p");
        score.textContent = scoreArray[i];
        scoresList.appendChild(score);
        score.setAttribute("class", "bg-secondary text-light rounded shadow");
    }


}

document.getElementById("clearHighscores").addEventListener("click", function () {

    localStorage.clear();
    displayScores();

});

document.getElementById("restart").addEventListener("click", function () {

    document.getElementById("highscores").style = "display: none";
    document.getElementById("home").style = "display: block";
    document.getElementById("timer").style = "display: none";
    timer = 99;

});