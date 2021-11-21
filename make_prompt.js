var promptData;
var genreData = [];
var settingData = [];
var timeData = [];
var mainCharacterData = [];
var genreURL = [];


// window.onload = function(){
// fetch('prompt.json')
// .then(Response => Response.json())
// .then(data => document.getElementById('get_prompt').onclick = function(){
//     prompt.innerHTML = `<p>You should write a story in ${data.Setting[2]}</p>`
// });

// };

// const prompt = document.getElementById("prompt");

document.getElementById('getPrompt').onclick = function(){
    prompt.innerHTML = `<p>You should write a story </p>`
};

/* Stuff I was messing with on replit updated with these IDs*/


Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vT3pJgyMkUFc6wet1PPnyJ4AquHwmvP0NYb6rx5z1N59TngIUnqP9N5ZGLJpIGiQlF3ItQwtn5kEdYc/pub?gid=0&single=true&output=csv', {
  download: true,
  header: true,
  error: undefined,
  complete: function(results) {
    console.log(results)
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
  }
})

let promptButton = document.getElementById('getPrompt'); 
let promptPara = document.getElementById('prompt'); 

promptButton.onclick = function(){
  let genreNumber = Math.floor(Math.random()*genreData.length)

  promptPara.innerHTML =  `<p>Your main character should be ${mainCharacterData[Math.floor(Math.random()*mainCharacterData.length)]} who is in ${settingData[Math.floor(Math.random()*settingData.length)]} during ${timeData[Math.floor(Math.random()*timeData.length)]}. It should be <a href="${genreURL[genreNumber]}" target="_blank">${genreData[genreNumber]}</a> story.</p>`;
}