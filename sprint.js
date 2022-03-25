var currentTime = Date.now();

console.log(currentTime);



var currentTimeReadable = new Date(currentTime);


function saveTime(){
    let timerTime = new Date(currentTime + (Number(document.getElementById("select").value) * 60000));


    console.log(timerTime);


    //This is properly printing the difference between the current time and adding the proper amount in minutes from the sprint duration chosen.
    //However, when the minutes are a single digit it doesn't add the first 0 to make it look nice (so 1 minute is 0:1:0) this is a problem with seconds as well.
    //I also need to figure out how to do the actual countdown part as well.
    //Gotta figure out how to add sounds and restart the countdown with the rest without having to do anything.
    let countDownHours = timerTime.getHours() - currentTimeReadable.getHours();
    let countDownMinutes = timerTime.getMinutes() - currentTimeReadable.getMinutes();
    let countDownSeconds = timerTime.getSeconds() - currentTimeReadable.getSeconds();

    document.getElementById("timeDisplay").innerHTML = `<p>${countDownHours}:${countDownMinutes}:${countDownSeconds}</p>`;
}

//not 100% sure where I'm going with this but these wsill give me the time in millisends and then convert it to a readable time. 