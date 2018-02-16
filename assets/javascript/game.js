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

document.addEventListener("keydown", function(event) {
  console.log(event.which);
  if (event.which === 32) {
    startGame();
  } else {
    console.log(document.getElementsByClassName("instructions").innerHTML = "Please press the spacebar!");
  }
})

function startGame() {
  console.log('game has started');
  // console.log(document.getElementsByClassName("container").style.display = "block");
  console.log(document.getElementsByClassName("instructions").innerHTML = "This is a game of hang the man, using only a Southern Belle's circumlocution!");
  console.log(document.getElementById("wins").innerHTML = 0);
  console.log(document.getElementById("losses").innerHTML = 0);
  console.log(document.getElementById("guessesRemaining").innerHTML = 6);
  console.log(document.getElementById("priorGuess").innerHTML = 0);
  var randoWord = HMword[Math.floor(HMword.length * Math.random())];
  var werdLength = randoWord.length;
  werdLength.split('').map(function (letter) {
    // turn letter into _
    for (i = 0; i < werdLength; i++) {
      document.getElementsByClassNameById("underscores").innerHTML = 
    }
  })
  console.log(werdLength.innerHTML = split);
  // document.getElementsByClassName("underscores");
}
var userIn = document.getElementById("userIn").value;
 var output = document.getElementById("output");
 var split = new Array();
 split = userIn.split(" ");
 output.innerText = split;
