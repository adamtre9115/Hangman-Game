// array of artists from 2000s
var artists = ["aaliyah", "alicia keys", "jagged edge", "pharrell", "beyonce", "usher", "terror squad", "yung joc", "r kelly", "50 cent", "maxwell"]
var chosenWord = "";
var wordLenth = [];
var blanksNeeded = 0;
var blankShow = [];
var correct = 0;
var space = 0;
// Guesses in game
var guessRemain = 12;
var userGuess = "";
var guessed = [];
var wins = 0;
var losses = 0;

// element select 
var wordSpace = document.querySelector("#hold");
var show = document.querySelector("#guessedL");
var count = document.querySelector("#guessLeft");
var loseCount = document.querySelector("#loss");
var winCount = document.querySelector("#wins");
var image = document.querySelector("#artistImg");
var tag = document.querySelector("#tag");

function playGame() {
    // randomly choose an artist
    newArtist();
    // compensate for extra count needed to correctly identify win
    if (chosenWord === "maxwell" || chosenWord === "jagged edge" || chosenWord === "pharrell") {
        space += 1;
    }
}

// randomly select new artist
function newArtist() {
    chosenWord = artists[Math.floor(Math.random() * artists.length)];
    console.log(chosenWord);
    // display underscores in amount of random artist name

    wordLenth = chosenWord.replace(/\s/g, "-").split("");
    blanksNeeded = wordLenth.length;

    // add underscores for each letter in word
    for (var i = 0; i < blanksNeeded; i++) {
        // replace spaces with - else use _
        if (wordLenth[i] === "-" || wordLenth[i] === " ") {
            blankShow.push("&nbsp;");
            space += 1;
        } else {
            blankShow.push("_");

        }
        wordSpace.innerHTML = blankShow;
    }
    // remove commas from split
    var stringWord = blankShow.join();
    wordSpace.innerHTML = stringWord.replace(/,/g, "&nbsp;");

}

// show guessed letters
function guessedLetters() {
    // if guessed letter doesn't exist in array 
    if (guessed.indexOf(userGuess) === -1) {
        // add it
        guessed.push(userGuess);
        // if guessed letter is in array
    } else if (guessed.indexOf(userGuess) > -1) {
        // subtract one from correct to compensate for point that is added
        correct--;
    }
    show.innerHTML = guessed.toString();

}

// check if letter is correct or already guessed
function checkLetters() {
    // userGuess = event.key;
    console.log(chosenWord.length);
    $(chosenWord.split("")).each(function (index, character) {
        if (character === userGuess) {
            blankShow[index] = userGuess;
            wordSpace.innerHTML = blankShow;
            correct++;
        }

    })

}

// guess count starts at 10 and decreases on each guess
function guessCount() {
    count.innerHTML = guessRemain;
    count.onkeyup = guessRemain--;

}

// reset the game
function reset() {
    wins = 0;
    winCount.innerHTML = wins;
    losses = 0;
    loseCount.innerHTML = losses;
    blankShow = [];
    userGuess = "";
    correct = 0;
    space = 0;
    guessed = [];
    show.innerHTML = guessed;
    guessRemain = 12;
    count.innerHTML = guessRemain;
    image.src = "assets/images/hangman.jpg";
    tag.innerHTML = "Bet you can't guess the word!";
    playGame();
}

function newGame() {
    blankShow = [];
    userGuess = "";
    correct = 0;
    space = 0;
    guessed = [];
    show.innerHTML = guessed;
    guessRemain = 12;
    count.innerHTML = guessRemain;
    image.src = "assets/images/hangman.jpg";
    tag.innerHTML = "Bet you can't guess the word!";
    playGame();
}

function winLose() {
    if (correct + space + 1 >= chosenWord.length && guessRemain > 0) {
        alert("You win!");
        image.src = "assets/images/winner.gif"
        wins++;
        winCount.innerHTML = wins;
        tag.innerHTML = "Click 'New Game' to play again and save progress or 'Reset' to start completely over.";

    } else if (guessRemain < 1 && chosenWord === "aaliyah") {
        // show game loss
        image.src = "assets/images/aaliyah.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;

    } else if (guessRemain < 1 && chosenWord === "jagged edge") {
        // show game loss
        image.src = "assets/images/jagged.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "pharrell") {
        // show game loss
        image.src = "assets/images/pharrell.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "beyonce") {
        // show game loss
        image.src = "assets/images/beyonce.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "usher") {
        // show game loss
        image.src = "assets/images/usher.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "terror squad") {
        // show game loss
        image.src = "assets/images/terrorsquad.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "yung joc") {
        // show game loss
        image.src = "assets/images/yungjoc.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "r kelly") {
        // show game loss
        image.src = "assets/images/rkelly.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "50 cent") {
        // show game loss
        image.src = "assets/images/50cent.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "maxwell") {
        // show game loss
        image.src = "assets/images/maxwell.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "alicia keys") {
        // show game loss
        image.src = "assets/images/aliciaKeys.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    }
}

// as guess is correct display letter

// run game when any key is pressed
playGame();

document.onkeyup = function (event) {
    // caputures user input
    userGuess = event.key.toLowerCase();
    // number of guesses start at 10 and decreases
    guessCount();
    // state win or loss of game
    winLose();
    // as guess is correct display letter 
    checkLetters();
    // guess count decrease as guess continues
    // display guessed letters
    guessedLetters();
}