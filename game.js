const $message1 = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");
var guessno = Math.random() * 100;
var lives = 10;
var message;
$message1.onclick = () => {
  let userinput = document.getElementById("number-input").value;
  lives--;
  if (userinput == guessno) {
    location.href = "./win.html";
  } else if (lives == 0) {
    location.href = "./lose.html";
  } else if (userinput > guessno) {
    console.log("hi0");
    message = ` Oops! your guess too high . your lives ${lives} remaining`;
  } else if (userinput < guessno) {
    message = ` Oops! your guess too low . your lives ${lives} remaining`;
  }

  $message.style.display = "inherit";
  $message.innerHTML = message;
  $lives.innerHTML = lives;
};
