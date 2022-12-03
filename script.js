let joke = document.getElementById("joke");
let jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", getJoke);

getJoke();

async function getJoke(){
    let response = await fetch("https://icanhazdadjoke.com",{
    headers:{
        Accept: "application/json",
    },
    });


let newjoke = await response.json();
joke.innerHTML = newjoke.joke;

}