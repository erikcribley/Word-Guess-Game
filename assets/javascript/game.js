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

//Establish global variables
var wins = 0;
var remainingGuesses = 6 
var wrongLetter = [];

//HTML variables
var wordDisplay = document.getElementById("word-display")
var winCount = document.getElementById("wins")
var guessesLeft = document.getElementById("remaining-guesses")
var lettersGuessed = document.getElementById("wrong-letter")
var hidePrompt = document.getElementById("hide-prompt")
var gameOver = document.getElementById("game-over")
var winImage = document.createElement("img"); 
    winImage.setAttribute("src", "assets/images/nat20.jpg")
var lossImage = document.createElement("img"); 
    lossImage.setAttribute("src", "assets/images/nat1.jpg")

//Choose word at random
var randomWord = words[Math.floor(Math.random() * words.length)];

//Set variable relevent to randomWord
var lettersRemaining = randomWord.length

//Display word with underscores
var blanks = [];
    for (i = 0; i < randomWord.length; i++) {
        blanks[i] = ('_')
    }

//Reset function
function reset () {
    gameOver.style.display = "none"
    remainingGuesses = 6;
    wrongLetter = [];
    randomWord = words[Math.floor(Math.random() * words.length)];
    blanks = [];
    for (i = 0; i < randomWord.length; i++) {
    blanks[i] = ('_')
    }
    lettersRemaining = randomWord.length
}

//Game
function game () {
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
        gameOver.appendChild(winImage)
        reset()
        } else if (remainingGuesses=== 0) {
        gameOver.appendChild(lossImage)
        reset()
    }
    wordDisplay.innerHTML = blanks.join(' ')
    guessesLeft.innerHTML = remainingGuesses
    lettersGuessed.innerHTML = wrongLetter.join(' ')
    winCount.innerHTML = wins
    }      
}

wordDisplay.innerHTML = blanks.join(' ')
guessesLeft.innerHTML = remainingGuesses
lettersGuessed.innerHTML = wrongLetter.join(' ')
winCount.innerHTML = wins 

//Press any key to start game
document.onkeyup = function(event) {
    game()
    hidePrompt.style.display = "none"
}