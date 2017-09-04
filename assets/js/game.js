// array of artists from 2000s
var artists = ["Aaliyah", "Alicia Keys", "Jagged Edge", "Pharrell", "Beyonce", "Usher", "Terror Squad", "Yung Joc", "R Kelly", "50 Cent", "Maxwell"]
// Guesses in game
var guessRemain = 15;
var wins = 0;
var losses = 0;


// randomly choose an artist
var artistChoice = artists[Math.floor(Math.random() * artists.length)];


// display _ _ _ in amount of artist name

// as guess is correct display letter 

// guess count decrease as guess continues

// display guessed letters

// number of guesses start at 15