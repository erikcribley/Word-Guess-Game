//Create array of possible words
var words = [
    "bard", 
    "barbarian",
    "cleric",
    "druid",
    "fighter",
    "monk",
    "paladin",
    "ranger",
    "rogue",
    "sorcerer",
    "wizard",
    "warlock",]

//Establish global vairiables
var wins = 0;
var guesses = 6;
var rightLetter = [];
var wrongLetter = [];

var wordDisplay = document.getElementById("word-display")
var winCount = document.getElementById("win-count")
var guessesLeft = document.getElementById("guesses-left")
var lettersGuessed = document.getElementById("letters-guessed")

//Choose word at random
var randomWord = words[Math.floor(Math.random() * words.length)];

//Display word with underscores
var blanks = [];
    for (i = 0; i < randomWord.length; i++) {
        blanks[i] = ('_')
    }

document.onkeyup = function(event) {
    var guess = event.key
    for (i = 0; i < randomWord.length; i++) {
        if (guess === randomWord[i]) {
           blanks[i] = guess
        } 
        wordDisplay.innerHTML = blanks 
    }
}

wordDisplay.innerHTML = blanks 
winCount.innerHTML = wins
guessesLeft.innerHTML = guesses
lettersGuessed.innerHTML = wrongLetter