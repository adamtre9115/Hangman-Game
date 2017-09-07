// array of artists from 2000s
var artists = ["Aaliyah", "Alicia Keys", "Jagged Edge", "Pharrell", "Beyonce", "Usher", "Terror Squad", "Yung Joc", "R Kelly", "50 Cent", "Maxwell"]
var chosenWord = "";
var wordLenth = [];
var blanksNeeded = 0;
var blankShow = [];
// Guesses in game
var guessRemain = 10;
var userGuess = "";
var guessed = [];
var wins = 0;
var losses = 0;


function playGame(){
    // randomly choose an artist
    // display underscores in amount of random artist name
    newArtist();
}

// randomly select new artist
function newArtist(){
    chosenWord = artists[Math.floor(Math.random() * artists.length)];
    console.log(chosenWord);

    // display underscores in amount of random artist name
    wordSpace = document.querySelector("#hold");
    wordLenth = chosenWord.replace(/\s/g, "-").split("");
    blanksNeeded = wordLenth.length;

    // add underscores for each letter in word
    for (var i = 0; i < blanksNeeded; i++) {
        // replace spaces with - else use _
        if (wordLenth[i] === "-") {
            blankShow.push("-");
        } else {
            blankShow.push("_");
        }
        wordSpace.innerHTML = blankShow;
    }
    // remove commas from split
    wordSpace.innerHTML = blankShow.join(" ");

}

// show guessed letters
function guessedLetters(){
    show = document.querySelector("#guessedL");
    userGuess = event.key;
    guessed.push(userGuess);
    show.innerHTML = guessed.toString();
}

// guess count starts at 10 and decreases on each guess
function guessCount(){
    var count = document.querySelector("#guessLeft");
    var loseCount = document.querySelector("#loss");
    count.innerHTML = guessRemain;
    count.onkeyup = guessRemain --;
}

function winLose() {
    if (guessRemain < 1) {
        // show game loss 
        document.getElementById('artistImg').src="assets/images/over.png";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
        
    } 
}



// as guess is correct display letter
   
// run game when any key is pressed
playGame();

document.onkeyup = function(event) {
    // caputures user input
     guessedLetters();
    // number of guesses start at 10 and decreases
        guessCount();
        winLose();
    
    
    // as guess is correct display letter 
        
    // guess count decrease as guess continues
        
    // display guessed letters

   
} 