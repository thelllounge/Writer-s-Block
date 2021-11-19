var promptData



// window.onload = function(){
// fetch('prompt.json')
// .then(Response => Response.json())
// .then(data => document.getElementById('get_prompt').onclick = function(){
//     prompt.innerHTML = `<p>You should write a story in ${data.Setting[2]}</p>`
// });

// };

// const prompt = document.getElementById("prompt");

// document.getElementById('get_prompt').onclick = function(){
//     prompt.innerHTML = `<p>You should write a story </p>`
// };

/* Stuff I was messing with on replit updated with these IDs*/

var promptData

Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vT3pJgyMkUFc6wet1PPnyJ4AquHwmvP0NYb6rx5z1N59TngIUnqP9N5ZGLJpIGiQlF3ItQwtn5kEdYc/pub?gid=0&single=true&output=csv', {
  download: true,
  header: true,
  error: undefined,
  complete: function(results) {
    console.log(results)
    //results.data.map((data, index)=>{
    //  console.log(results);
    //  promptData = results;
    //});
    promptData = results;
    console.log(promptData.data[Math.floor(Math.random()*5)]['Genre']);
    console.log(promptData.data[Math.floor(Math.random()*5)]['Genre']);
    console.log(promptData.data[Math.floor(Math.random()*5)]['Genre']);
    console.log(promptData.data[Math.floor(Math.random()*5)]['Genre']);
    console.log(promptData.data[Math.floor(Math.random()*5)]['Genre']);
  }
})

//console.log(promptData);
let promptButton = document.getElementById('getPrompt'); 
let promptPara = document.getElementById('prompt'); 

promptButton.onclick = function(){
  promptPara.innerHTML =  "hello";
}



//console.log(Math.floor(Math.random()*5));
