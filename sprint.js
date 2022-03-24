var currentTime = Date.now();
var sprintGoal = currentTime + 5000

console.log(currentTime);
console.log(sprintGoal);



var currentTimeReadable = new Date(currentTime);
var sprintGoalReadable = new Date(sprintGoal);

console.log(currentTimeReadable);
console.log(sprintGoalReadable);


//not 100% sure where I'm going with this but these wsill give me the time in millisends and then convert it to a readable time. 