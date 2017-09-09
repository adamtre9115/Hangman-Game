// array of artists from 2000s
var artists = ["aaliyah", "alicia keys", "jagged edge", "pharrell", "beyonce", "usher", "terror squad", "yung joc", "r kelly", "50 cent", "maxwell"]
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

// element select 
var wordSpace = document.querySelector("#hold");
var show = document.querySelector("#guessedL");
var count = document.querySelector("#guessLeft");
var loseCount = document.querySelector("#loss");

function playGame() {
    // randomly choose an artist
    // display underscores in amount of random artist name
    newArtist();
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
    // userGuess = event.key;
    guessed.push(userGuess);
    show.innerHTML = guessed.toString();
}

// check if letter is correct or already guessed
function checkLetters() {
    // userGuess = event.key;
    console.log(chosenWord.length);
    $(chosenWord.split("")).each(function (index, character) {
        if (character == userGuess) {
            blankShow[index] = userGuess;
        }
    })
}

document.getElementById("hold").innerHTML = "hello" + blankShow.toString();
// guess count starts at 10 and decreases on each guess
function guessCount() {
    count.innerHTML = guessRemain;
    count.onkeyup = guessRemain--;
}

function winLose() {

    if (guessRemain < 1 && chosenWord === "alicia keys") {
        // show game loss
        document.getElementById('artistImg').src = "assets/images/aliciaKeys.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;

    } else if (guessRemain < 1 && chosenWord === "aaliyah") {
        // show game loss
        document.getElementById('artistImg').src = "assets/images/aaliyah.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;

    } else if (guessRemain < 1 && chosenWord === "jagged edge") {
        // show game loss
        document.getElementById('artistImg').src = "assets/images/jagged.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "pharrell") {
        // show game loss
        document.getElementById('artistImg').src = "assets/images/pharrell.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "beyonce") {
        // show game loss
        document.getElementById('artistImg').src = "assets/images/beyonce.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "usher") {
        // show game loss
        document.getElementById('artistImg').src = "assets/images/usher.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "terror squad") {
        // show game loss
        document.getElementById('artistImg').src = "assets/images/terrorsquad.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "yung joc") {
        // show game loss
        document.getElementById('artistImg').src = "assets/images/yungjoc.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "r kelly") {
        // show game loss
        document.getElementById('artistImg').src = "assets/images/rkelly.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "50 cent") {
        // show game loss
        document.getElementById('artistImg').src = "assets/images/50cent.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    } else if (guessRemain < 1 && chosenWord === "maxwell") {
        // show game loss
        document.getElementById('artistImg').src = "assets/images/maxwell.jpg";
        alert("Looks like the game is over!");
        // update loss count
        losses++;
        loseCount.innerHTML = losses;
    }
}

// document.getElementById('artistImg').src="assets/images/over.png";
// alert("Looks like the game is over!");
// // update loss count
// losses++;
// loseCount.innerHTML = losses;


// as guess is correct display letter

// run game when any key is pressed
playGame();

document.onkeyup = function (event) {
    // caputures user input
    userGuess = event.key;
    guessedLetters();
    checkLetters();
    // number of guesses start at 10 and decreases
    guessCount();
    winLose();


    // as guess is correct display letter 

    // guess count decrease as guess continues

    // display guessed letters


}