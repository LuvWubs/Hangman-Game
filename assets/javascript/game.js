var HMword= [
  "lovely",
  "precious",
  "darling",
  "skedaddle",
  "fetching",
  "adorable",
  "cad",
  "gumption",
  "sugar",
  "bonafide",
  "soiree",
  "divine",
  "gentleman",
  "flawless",
  "delightful",
  "droll",
  "dashing",
  "sweetie",
  "beau",
  "voyage",
  "imbibe",
  "peckish",
  "honey",
  "resplendent",
  "honorable",
  "striking",
  "biscuits",
  "coquette",
  "conniption",
];

var gameStarted = false;
var wins = 0;
var losses = 0;
var remaining = null;
var prior = "";
var guessedLetters = [];
var rightGuess = 0;
var wrongGuesses = 0;
var randoWord = HMword[Math.floor(HMword.length * Math.random())];

document.addEventListener("keydown", function(event) {
  if (event.which === 32 && gameStarted === false) {
    gameStarted=true;
    startGame();
  }
  if (event.which !== 32 && gameStarted === false) {
  document.getElementById("instructions").innerHTML="Please press the spacebar!";
  }
  if (event.which !==32 && gameStarted === true) {
    // console.log("pressed key", String.fromCharCode(event.which).toLowerCase());
    var guessLetter = String.fromCharCode(event.which).toLowerCase();
    userGuess(guessLetter);
  }
})
function startGame() {
  document.getElementById("wholeEnchilada").style.display="block";
  displayIt();
}
function displayIt() {
  document.getElementById("instructions").innerHTML="This is a game of hang the man, using only a Southern Belle's circumlocution!";
  document.getElementById("compWord").innerHTML="Here is your word.. chose letters with caution or else you will hang the man!"
  document.getElementById("numWins").innerHTML="Number of wins: " + wins;
  document.getElementById("numLosses").innerHTML="Number of losses: " + losses;
  document.getElementById("guessesRemaining").innerHTML= remaining;
  document.getElementById("priorGuess").innerHTML="Letters chosen: " + prior;
  compWordChoice();
}
function compWordChoice() {
  console.log('Random word', randoWord);
  remaining = randoWord.length;
  var dashArray=[];
  for (i = 0; i < randoWord.length; i++) {
    dashArray.push("_");
  }

  var wordToGuess = dashArray.join(" ");
  document.getElementById("underscores").innerHTML = wordToGuess;
  document.getElementById("guessesRemaining").innerHTML = "Number of remaining guesses: " + remaining;
}

function userGuess(key) {
  var wrongGuess = true;
  var underscoreArray = document.getElementById("underscores").innerHTML.split(" ");
  guessedLetters.push(key);

  for (i = 0; i < randoWord.length; i++) {
    if (randoWord.charAt(i) === key.toLowerCase()) {
      wrongGuess = false;
      rightGuess++;
      underscoreArray[i] = key;
    }
  }
  if (wrongGuess) {
    remaining--;
  }
console.log(randoWord.length, rightGuess);
  if (rightGuess >= randoWord.length) {
    alert("You won!");
    wins++;
    document.getElementById("numWins").innerHTML = "Number of wins: " +wins;
    var button = document.createElement("button");
    button.innerHTML = "Play Again?";
    document.getElementById("playAgainButton").appendChild(button);
    button.addEventListener("click", function() {
      randoWord = HMword[Math.floor(HMword.length * Math.random())];
      startGame();
      var buttonContainer = document.getElementById("playAgainButton");
        buttonContainer.removeChild(buttonContainer.childNodes[0]);
        rightGuess = 0;
        wrongGuess = 0;
        guessedLetters = [];
    })
  }
  if(remaining === 0) {
    alert("you lost, play again?")
    losses++;
    document.getElementById("numLosses").innerHTML = "Number of losses: " +losses;
    var button = document.createElement("button");
    button.innerHTML = "Play Again?";
    document.getElementById("playAgainButton").appendChild(button);
    button.addEventListener("click", function() {
      randoWord = HMword[Math.floor(HMword.length * Math.random())];
      startGame();
      var buttonContainer = document.getElementById("playAgainButton");
        buttonContainer.removeChild(buttonContainer.childNodes[0]);
        rightGuess = 0;
        wrongGuess = 0;
        guessedLetters = [];
    })
  }

  var joinedLetters = underscoreArray.join(" ");
  var allLetters = guessedLetters.join("");
  document.getElementById("underscores").innerHTML = joinedLetters;
  document.getElementById("guessesRemaining").innerHTML = "Guesses Remaining: " + remaining;
  document.getElementById("priorGuess").innerHTML = "Guessed Letters: " + allLetters + " ";

};
