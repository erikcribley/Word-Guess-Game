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

var wordDisplay = document.getElementById("word-display")
var winCount = document.getElementById("win-count")
var guessesLeft = document.getElementById("guesses-left")
var lettersGuessed = document.getElementById("letters-guessed")

function randomWord () {
    return words[Math.floor(Math.random() * words.length)];
}

var characters = randomWord().split('') 

function blanks () {
    for (i = 0; i < characters.length; i++) {
        blankSpace.push('_')
    }
    return blankSpace;
}
 
wordDisplay.innerHTML = blanks()