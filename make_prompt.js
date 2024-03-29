/* a variety of variables */
var promptData;
var genreData = [];
var settingData = [];
var timeData = [];
var mainCharacterData = [];
var genreURL = [];
var goalData = [];
var conflictData = [];
var calculateTotal

/* loading the information from my Google Sheets page and putting them into the above arrays.

This allows me to access each list by itself and not have any undefined calls as I can call them by list length later.*/
Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vT3pJgyMkUFc6wet1PPnyJ4AquHwmvP0NYb6rx5z1N59TngIUnqP9N5ZGLJpIGiQlF3ItQwtn5kEdYc/pub?gid=0&single=true&output=csv', {
  download: true,
  header: true,
  error: undefined,
  complete: function(results) {
    promptData = results;
        /*make the list of genres*/
        for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Genre !== ""){genreData.push(promptData.data[i].Genre)}}
        /*make the list of genres urls*/
        for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Genre_URL !== ""){genreURL.push(promptData.data[i].Genre_URL)}}
        /*make the list of settings*/
        for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Setting !== ""){settingData.push(promptData.data[i].Setting)}}
        /*make the list of time*/
        for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Time !== ""){timeData.push(promptData.data[i].Time)}}
        /*make the list of main characters*/
        for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Main_Character !== ""){mainCharacterData.push(promptData.data[i].Main_Character)}}
        /*make the list of goals*/
        for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Goal !== ""){goalData.push(promptData.data[i].Goal)}}
        /*make the list of conflicts*/
        for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Conflict !== ""){conflictData.push(promptData.data[i].Conflict)}}
    //create total prompt count variable
    
    calculateTotal = mainCharacterData.length * goalData.length * settingData.length * timeData.length * genreData.length * conflictData.length;

    //Total prompt possibilities
    let subHeading = document.getElementById('totalPossibilites');

    document.onload = subHeading.innerHTML = 'There are currently ' + new Intl.NumberFormat().format(calculateTotal) + ' possible prompts!';}
})


// Prompt section

//necessary variables
let promptButton = document.getElementById('getPrompt'); 
let promptPara = document.getElementById('prompt'); 


/* copy text button gotten from https://www.arclab.com/en/kb/htmlcss/how-to-copy-text-from-html-element-to-clipboard.html*/
function copyPrompt(){
  /* Get the text field */
  var copyText = document.createRange();

  copyText.selectNode(document.getElementById('promptText'));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(copyText);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  //update button text
  document.getElementById('copyPrompt').innerHTML = 'Text copied!'
}


//prompt button creating randomize prompt by accessing the array variables pulled from the spreadsheet
promptButton.onclick = function(){
  let genreNumber = Math.floor(Math.random()*genreData.length)

  promptPara.innerHTML =  `<p id="promptText">Your main character should be ${mainCharacterData[Math.floor(Math.random()*mainCharacterData.length)]}. <br><br> They should be ${goalData[Math.floor(Math.random()*goalData.length)]} but ${conflictData[Math.floor(Math.random()*conflictData.length)]}. <br><br> It should be set ${settingData[Math.floor(Math.random()*settingData.length)]} ${timeData[Math.floor(Math.random()*timeData.length)]}. <br><br> It should be <a href="${genreURL[genreNumber]}" target="_blank">${genreData[genreNumber]}</a> story.</p>
  
  <br>
  
  <button id="copyPrompt" onclick="copyPrompt()">Copy to clipboard!</button>`;
}

//Seasonal options

//necessary variables
let seasonalBox = document.getElementById('seasonal');
let body = document.getElementById('body');
//adding seasonal options

$(seasonalBox).change(function() {
    if(this.checked) {

//add seasonal class to the body to change all color variables to seasonal options
      body.classList.add('seasonal');

 //add seasonal options to the prompt arrays   
      Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vT3pJgyMkUFc6wet1PPnyJ4AquHwmvP0NYb6rx5z1N59TngIUnqP9N5ZGLJpIGiQlF3ItQwtn5kEdYc/pub?gid=1497642444&single=true&output=csv', {
  download: true,
  header: true,
  error: undefined,
  complete: function(results) {
    promptData = results;
        /*make the list of genres*/
        for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Genre !== ""){genreData.push(promptData.data[i].Genre)}}
        /*make the list of genres urls*/
        for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Genre_URL !== ""){genreURL.push(promptData.data[i].Genre_URL)}}
        /*make the list of settings*/
        for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Setting !== ""){settingData.push(promptData.data[i].Setting)}}
        /*make the list of time*/
        for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Time !== ""){timeData.push(promptData.data[i].Time)}}
        /*make the list of main characters*/
        for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Main_Character !== ""){mainCharacterData.push(promptData.data[i].Main_Character)}}
        /*make the list of Goals*/
        for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Goal !== ""){goalData.push(promptData.data[i].Goal)}}
        /*make the list of conflicts*/
        for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Conflict !== ""){conflictData.push(promptData.data[i].Conflict)}}
  

    //create total prompt count variable
    
    calculateTotal = mainCharacterData.length * goalData.length * settingData.length * timeData.length * genreData.length * conflictData.length;

    //Total prompt possibilities
    let subHeading = document.getElementById('totalPossibilites');

    document.onload = subHeading.innerHTML = 'There are currently ' + new Intl.NumberFormat().format(calculateTotal) + ' possible prompts!';}
})
 } else {
//remove seasonal class to set back to normal colors
  document.body.classList.remove('seasonal');

//resets the arrays to empty
    genreData = [];
    settingData = [];
    timeData = [];
    mainCharacterData = [];
    genreURL = [];
    goalData = [];
    conflictData = [];


//repopulates the arrays with the basic prompt data
    Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vT3pJgyMkUFc6wet1PPnyJ4AquHwmvP0NYb6rx5z1N59TngIUnqP9N5ZGLJpIGiQlF3ItQwtn5kEdYc/pub?gid=0&single=true&output=csv', {
      download: true,
      header: true,
      error: undefined,
      complete: function(results) {
        promptData = results;
            /*make the list of genres*/
            for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Genre !== ""){genreData.push(promptData.data[i].Genre)}}
            /*make the list of genres urls*/
            for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Genre_URL !== ""){genreURL.push(promptData.data[i].Genre_URL)}}
            /*make the list of settings*/
            for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Setting !== ""){settingData.push(promptData.data[i].Setting)}}
            /*make the list of time*/
            for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Time !== ""){timeData.push(promptData.data[i].Time)}}
            /*make the list of main characters*/
            for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Main_Character !== ""){mainCharacterData.push(promptData.data[i].Main_Character)}}
            /*make the list of Goals*/
            for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Goal !== ""){goalData.push(promptData.data[i].Goal)}}
            /*make the list of conflicts*/
            for(i = 0; i<promptData.data.length; i++){if(promptData.data[i].Conflict !== ""){conflictData.push(promptData.data[i].Conflict)}}
        //create total prompt count variable
        
        calculateTotal = mainCharacterData.length * goalData.length * settingData.length * timeData.length * genreData.length * conflictData.length;
    
        //Total prompt possibilities
        let subHeading = document.getElementById('totalPossibilites');
    
        document.onload = subHeading.innerHTML = 'There are currently ' + new Intl.NumberFormat().format(calculateTotal) + ' possible prompts!';}
    })      
}



  });