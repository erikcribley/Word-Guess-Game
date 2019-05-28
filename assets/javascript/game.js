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
var remainingGuesses = 6 
var wrongLetter = [];

var wordDisplay = document.getElementById("word-display")
var winCount = document.getElementById("win-count")
var guessesLeft = document.getElementById("guesses-left")
var lettersGuessed = document.getElementById("letters-guessed")

//Choose word at random
var randomWord = words[Math.floor(Math.random() * words.length)];

var lettersRemaining = randomWord.length

//Display word with underscores
var blanks = [];
    for (i = 0; i < randomWord.length; i++) {
        blanks[i] = ('_')
    }

document.onkeyup = function(event) {
    var guess = event.key
    if (randomWord.indexOf(guess) > -1 ) {
    for (i = 0; i < randomWord.length; i++) {
       if (guess === randomWord[i]) { 
        blanks[i] = guess;
        lettersRemaining--;
    } }
  } else {
      remainingGuesses--;
      wrongLetter.push(guess)
  } 
  if (lettersRemaining === 0) {
    wins++;
    remainingGuesses = 6;
    wrongLetter = [];
    randomWord = words[Math.floor(Math.random() * words.length)];
    blanks = [];
    for (i = 0; i < randomWord.length; i++) {
    blanks[i] = ('_')
    }
    lettersRemaining = randomWord.length
    } else if (remainingGuesses=== 0) {
    remainingGuesses = 6;
    wrongLetter = [];
    randomWord = words[Math.floor(Math.random() * words.length)];
    blanks = [];
    for (i = 0; i < randomWord.length; i++) {
    blanks[i] = ('_')
    }
    lettersRemaining = randomWord.length
    }

wordDisplay.innerHTML = blanks.join(' ')
guessesLeft.innerHTML = remainingGuesses
lettersGuessed.innerHTML = wrongLetter.join(' ')
winCount.innerHTML = wins
}  

wordDisplay.innerHTML = blanks.join(' ')
guessesLeft.innerHTML = remainingGuesses
lettersGuessed.innerHTML = wrongLetter.join(' ')
winCount.innerHTML = wins 