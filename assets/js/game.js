// array of artists from 2000s
var artists = ["Aaliyah", "Alicia Keys", "Jagged Edge", "Pharrell", "Beyonce", "Usher", "Terror Squad", "Yung Joc", "R Kelly", "50 Cent", "Maxwell"]
var word ;
// Guesses in game
var guessRemain = 15;
var guessed = [];
var wins = 0;
var losses = 0;

// run game when any key is pressed

document.onkeyup = function(event) {
    // randomly choose an artist
        newArtist();
    // number of guesses start at 15 and decrease
        guessCount();
        
    // display underscores in amount of random artist name
        underscore();
    // as guess is correct display letter 

    // guess count decrease as guess continues
        
    // display guessed letters

   
} 

// randomly select new artist
function newArtist(){
    var artistChoice = artists[Math.floor(Math.random() * artists.length)];
    word = artistChoice;
    console.log(word);
}

// guess count starts at 15 and decreases on each guess
function guessCount(){
    var count = document.querySelector("#guessLeft");
    count.innerHTML = guessRemain;
    count.onkeyup = guessRemain -= 1;
}

// display underscores in amount of random artist name
function underscore() {
   var wordSpace = document.querySelector("#hold");
   var newUL = document.createElement("ul");

   for (var i = 0; i < word.length; i++){
       newUL.setAttribute("id", "wordHold");
       var space = document.createElement('li');
       space.setAttribute('class', 'guess');
       if (word[i] === "-") {
         space.innerHTML = "-";
       }else {
           space.innerHTML = "_";
       }

       guessed.push(space);
       wordSpace.appendChild(newUL);
       newUL.appendChild(space);
   }
}