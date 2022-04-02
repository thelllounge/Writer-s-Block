let sprintSelectString = document.getElementById("select"); //this doesn't select the value.

function saveTime(){
    let timerTime;

    if(sprintSelectString.value == "Select a sprint time" && document.getElementById("rest").value == "Select a rest time"){
        document.getElementById("timeDisplay").innerHTML = "<p>Please select a sprint and rest time.</p>"
    }else if(sprintSelectString.value == "Select a sprint time"){
        document.getElementById("timeDisplay").innerHTML = "<p>Please select a sprint time.</p>"
    }else if(document.getElementById("rest").value == "Select a rest time"){
        document.getElementById("timeDisplay").innerHTML = "<p>Please select a rest time.</p>"
    }else{
        // timerTime = new Date(currentTime + (Number(document.getElementById("select").value) * 60000));
        let sprintMinutes = sprintSelectString.value.padStart(2, "0");
        document.getElementById("timeDisplay").innerHTML = `<p>00:${sprintMinutes}:00</p>`;
    }

    // if(document.getElementById("select").value != "Select a sprint time" && document.getElementById("rest").value != "Select a rest time"){
        
    // }
    

    // console.log(sprintValueString.value)
    


    // document.getElementById("timeDisplay").innerHTML = `<p>00:${sprintMinutes}:00</p>`;
}

//not 100% sure where I'm going with this but these wsill give me the time in millisends and then convert it to a readable time. 