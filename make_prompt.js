var promptData



// window.onload = function(){
// fetch('prompt.json')
// .then(Response => Response.json())
// .then(data => document.getElementById('get_prompt').onclick = function(){
//     prompt.innerHTML = `<p>You should write a story in ${data.Setting[2]}</p>`
// });

// };

const prompt = document.getElementById("prompt");

document.getElementById('get_prompt').onclick = function(){
    prompt.innerHTML = `<p>You should write a story </p>`
};