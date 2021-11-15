document.onload = function(){

    fetch('prompt.json')
        .then(Response => Response.json())
        .then(data => console.log(data));

};
    
//it looks like an easy was to affect one page from another is using jquery and ajax so I need to learn that.




document.getElementById('get_prompt').onclick = function(){
    document.getElementById("prompt").innerHTML = `<p>Shit, I did it!</p>`
};