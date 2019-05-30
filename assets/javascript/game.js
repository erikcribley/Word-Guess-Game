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
    "warlock",
]

//Create an array of acceptable inputs
var chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

//Establish global variables
var wins = 0;
var remainingGuesses = 6 
var wrongLetter = ['-'];

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
        blanks[i] = ('-')
    }

//Reset function
function reset () {
    gameOver.style.display = "none"
    randomWord = words[Math.floor(Math.random() * words.length)];
    blanks = []
    for (i = 0; i < randomWord.length; i++) {
    blanks[i] = ('_')
    }
    remainingGuesses = 6
    wrongLetter = ['-']
    lettersRemaining = randomWord.length
}

//Game function
function game () {
    document.onkeyup = function(event) {
        var guess = event.key
        if (chars.indexOf(guess) < 0) {
            alert("Choose a lower case letter") 
        } else if (randomWord.indexOf(guess) > -1 && chars.indexOf(guess > -1)) {
        for (i = 0; i < randomWord.length; i++) {
            if (guess === randomWord[i]) { 
            blanks[i] = guess;
            lettersRemaining--;
        } }
        } else if (wrongLetter.indexOf('-') > -1) {
        wrongLetter.pop()
        wrongLetter.push(guess)
        remainingGuesses--;
        } else {
        wrongLetter.push(guess)
        remainingGuesses--;
        }
        
        //win-loss conditions
        if (lettersRemaining === 0) {
            wins++;
            gameOver.appendChild(winImage)
            
            // reset()
            } else if (remainingGuesses=== 0) {
            gameOver.appendChild(lossImage)
            // reset()
        
            }

            console.log(lettersRemaining)

        

    //Display in local scope
    wordDisplay.innerHTML = blanks.join(' ')
    guessesLeft.innerHTML = remainingGuesses
    lettersGuessed.innerHTML = wrongLetter.join(' ')
    winCount.innerHTML = wins
    }      
}

//Display in global scope
wordDisplay.innerHTML = blanks.join(' ')
guessesLeft.innerHTML = remainingGuesses
lettersGuessed.innerHTML = wrongLetter.join(' ')
winCount.innerHTML = wins
hidePrompt.innerHTML = "Push any key to begin"

//Press any key to start game
document.onkeyup = function(event) {
    game()
    hidePrompt.style.display = "none"
}