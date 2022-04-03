//Grabbing things by ID from the HTML
let sprintSelect = document.getElementById("select");
let restSelect = document.getElementById("rest");
let startButton = document.getElementById("startButton");
let pauseButton = document.getElementById("pauseButton");

//Adding functions to actions
sprintSelect.addEventListener("change", saveTime);
restSelect.addEventListener("change", saveTime);

startButton.addEventListener("click", startTimer);
// pauseButton.addEventListener("click", pauseTheTimer);

//Needed variables to make the functions work
let sprintTime = 0;
let restTime = 0;

let sprinting = false;


//This makes sure that both a sprint time and a rest time are selected, and if not reminds people to select what's missing.
//Once both are selected it displays the sprint time on the screen.
function saveTime(){

    if(sprintSelect.value == "Select a sprint time" && document.getElementById("rest").value == "Select a rest time"){
        document.getElementById("timeDisplay").innerHTML = "<p>Please select a sprint and rest time.</p>"
    }else if(sprintSelect.value == "Select a sprint time"){
        document.getElementById("timeDisplay").innerHTML = "<p>Please select a sprint time.</p>"
    }else if(document.getElementById("rest").value == "Select a rest time"){
        document.getElementById("timeDisplay").innerHTML = "<p>Please select a rest time.</p>"
    }else{
        let sprintMinutes = sprintSelect.value.padStart(2, "0");
        document.getElementById("timeDisplay").innerHTML = `<p>00:${sprintMinutes}:00</p>`;
        sprintTime = Number(sprintSelect.value * 60);
        restTime = Number(restSelect.value * 60);
    }
}

function startTimer(){
    if(sprintSelect.value == "Select a sprint time" || document.getElementById("rest").value == "Select a rest time"){
        document.getElementById("timeDisplay").innerHTML = "<p>Please select both a sprint and rest time.</p>"
    }

    const timerCountdown = setInterval(countDownSprint, 1000);
    startButton.innerHTML = 'Pause';
    
    if(sprinting == true){
        clearInterval(timerCountdown);
        sprinting == false;
        startButton.innerHTML = "Start"
    }

    sprinting = true;

}



function countDownSprint(){
    sprintTime--
    document.getElementById("timeDisplay").innerHTML = `<p>00:${String(Math.floor(sprintTime / 60)).padStart(2, "0")}:${String(sprintTime % 60).padStart(2,"0")}</p>`;
}