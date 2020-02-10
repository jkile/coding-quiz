let timer = 10; 

function decrementTimer(){
    setInterval(function(){
        timer--;
        // document.getElementById("timer").innerText = `Time: ${timer}`;
        // if(timer == 0){
        //    alert("Time is up!");
        // }
    }, 1000);

}

document.getElementById("startQuiz").addEventListener("click", function(){
    document.getElementById("home").style = "display: none";
    document.getElementById("formOne").style = "display: block";
    decrementTimer();
})

document.getElementById("formOne").addEventListener("click", function(e){
    if(e.target.tagName == "INPUT"){
        document.getElementById("formOne").style = "display: none";
    }
})