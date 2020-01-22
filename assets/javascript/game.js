//Create array of possible words
let words = [
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
  "warlock"
  ]

//Create an array of acceptable inputs
let chars = [
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
  "z"
  ]

//Establish global variables
let wins = 0;
let remainingGuesses = 6 
let wrongLetter = ['-'];

//HTML variables
let wordDisplay = document.getElementById("word-display")
let winCount = document.getElementById("wins")
let guessesLeft = document.getElementById("remaining-guesses")
let lettersGuessed = document.getElementById("wrong-letter")
let hidePrompt = document.getElementById("hide-prompt")

//Choose word at random
let randomWord = words[Math.floor(Math.random() * words.length)];

//Set variable relevent to randomWord
let lettersRemaining = randomWord.length

//Display word with underscores
let blanks = [];
  for (i = 0; i < randomWord.length; i++) {
    blanks[i] = ('-')
  }

//Reset function
reset = () => {
  randomWord = words[Math.floor(Math.random() * words.length)];
  blanks = []
  for (i = 0; i < randomWord.length; i++) {
    blanks[i] = ('_')
  }
  remainingGuesses = 6
  wrongLetter = ['-']
  lettersRemaining = randomWord.length
}

//Win-loss function
winLoss = () => {
  if (lettersRemaining === 0) {
    wins++
    reset()
  } else if (remainingGuesses === 0) {
    reset()
  }
}

//Game function
game = () => {
  document.onkeyup = (event) => {
    let guess = event.key
    if (chars.indexOf(guess) < 0) {
      alert("Choose a lower case letter") 
    } else if (randomWord.indexOf(guess) > -1) {
      for (i = 0; i < randomWord.length; i++) {
        if (guess === randomWord[i]) { 
          blanks[i] = guess;
          lettersRemaining--;                
        }    
      }
    } else if (wrongLetter.indexOf('-') > -1) {
      wrongLetter.pop()
      wrongLetter.push(guess)
      remainingGuesses--;
    } else if (wrongLetter.indexOf(guess) < 0) {
      wrongLetter.push(guess)
      remainingGuesses--;
    }
    winLoss()

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
document.onkeyup = (event) => {
  game()
  hidePrompt.style.display = "none"
}