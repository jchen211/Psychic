var compOptions = 
 ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
 "k","l","m","n","o","p","q","r","s","t","u","v",
 "w","x","y","z"]; 

var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessedLetter = [];

var userChoiceText = document.getElementById("userchoice-text");
var compChoiceText = document.getElementById("compchoice-text");
var winsText = document.getElementById("wins-text")  
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesText = document.getElementById("guesses-text");

document.onkeyup= function(event) {
    var userChoice = event.key;
    guessedLetter.push(userChoice);

    var compChoice = compOptions[Math.floor(Math.random() * compOptions.length)];
    
    if (userChoice === compChoice) {
    wins++;
    guessLeft = 9;
    guessedLetter.length = 0;

   } else {
     guessLeft--;
   
   } if (guessLeft === 0) {
     losses++;
     guessLeft = 9;
     guessedLetter.length = 0;
   }

    userChoiceText.textContent = "Computer Choice: " + userChoice;
    compChoiceText.textContent = "Computer Choice: " + compChoice ;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessLeft;
    guessesText.textContent = "Letters Guessed: " + (guessedLetter);
   }
