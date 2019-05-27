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

var wins = 0;
var blankSpace = [];
var guesses = 6;
var rightLetter = [];
var wrongLetter = [];


var wordDisplay = document.getElementById("word-display")
var winCount = document.getElementById("win-count")
var guessesLeft = document.getElementById("guesses-left")
var lettersGuessed = document.getElementById("letters-guessed")

var randomWord = words[Math.floor(Math.random() * words.length)];

var blanks = [];
    for (i = 0; i < randomWord.length; i++) {
        blanks[i] = ('_')
    }

wordDisplay.innerHTML = blanks

document.onkeyup = function(event) {
    var userInput = event.key;
}

console.log(randomWord)