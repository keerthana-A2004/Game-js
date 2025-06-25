const submitButton = document.getElementById("submit");
const msg= document.getElementById("message");
const life = document.getElementById("lives");

var randomNumber = Math.round(Math.random()*100);
var lives = 5;
var message;

submitButton.onclick = () => {
    let userInput = document.getElementById("number-input").value;
    lives--;

    if(userInput ==  randomNumber)
        location.href("./win.html");
    else if(userInput > randomNumber)
        message ="Oops 😩! your guess is high";
    else if(userInput < randomNumber)
        message="Oops🥱! your guess is low";
    msg.style.display ="inherit";
    msg.innerHTML = message;
    life.innerHTML = lives;
};