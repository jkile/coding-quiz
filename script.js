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


function stopTimer(){
    clearInterval(clock);
}

let answers = ["Option 1"];


document.getElementById("startQuiz").addEventListener("click", function () {
    document.getElementById("home").style = "display: none";
    document.getElementById("formOne").style = "display: block";
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
    
})
