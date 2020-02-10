let timer = 10; 

function decrementTimer(){
    setInterval(function(){
        timer--;
        document.getElementById("timer").innerText = `Time: ${timer}`;
        if(timer == 0){
            alert("Time is up!");
        }
    }, 1000);

}

decrementTimer();

