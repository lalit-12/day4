const $button = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");
var guessno = Math.random() * 100;
var lives = 10;
var message;

$button.onclick = () => {
    let userinput = document.getElementById(number - input).Value();
    lives--;
    if (userinput == guessno) {
        location.href = "./win.html";
    }
    elseif(lives == 0) {

        location.href = "./lose.html";
    }
}