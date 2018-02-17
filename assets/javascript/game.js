var HMword = [
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

var instructions = document.getElementsByClassName("instructions").textContent;
console.log('working??');

document.addEventListener("keydown", function(event) {
  console.log(event.which);
  if (event.which === 32) {
    startGame();
  } else {
    document.getElementById("instructions").innerHTML = "Please press the spacebar!";
  }
})

function startGame() {
  console.log('game has started');
  displayIt();
  // console.log(document.getElementsByClassName("container").style.display = "block");
}
function displayIt() {
  document.getElementById("instructions").innerHTML= "This is a game of hang the man, using only a Southern Belle's circumlocution!";
  document.getElementById("numWins").innerHTML = 0;
  document.getElementById("numLosses").innerHTML = 0;
  document.getElementById("guessesRemaining").innerHTML = 6;
  document.getElementById("priorGuess").innerHTML = 0;
  var randoWord = HMword[Math.floor(HMword.length * Math.random())];
  console.log(randoWord);
  var wordLength = randoWord.length;
  console.log(wordLength);

  for (i = 0; i < wordLength; i++) {
    document.getElementByTag("underscores").innerHTML = "_";
  }
}



function userGuess(key) {
  var chosen = event.key;
  if (chosen = HMword[i]) {
    document.getElementById("priorGuess").innerHTML = chosen;
  }
};
