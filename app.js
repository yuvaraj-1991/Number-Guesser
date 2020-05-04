/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct anser if loose
- Let player choose to play again
*/

//Game Values

let min = 1
let max = 10
let winningNum = getRandomNum(min,max)
let guessesLeft = 3

//UI Variables 
const game = document.querySelector('#game')
const minNum = document.querySelector('.min-num')
const maxNum = document.querySelector('.max-num')
const guessInput = document.querySelector('#guess-input')
const guessBtn = document.querySelector('#guess-btn')
const message = document.querySelector('.message')

//Assign UI min and max

minNum.textContent = min
maxNum.textContent = max

//Play again event listener
game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload()
    }
})

//Listen for the Guess btn

guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value)
    
    //Validate the guess from user
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter the number between ${min} and ${max}`,'red')
    }

    //Check if won 
    if(guess === winningNum){
        //Game over - won
        gameOver(true, `${winningNum} is correct, YOU WIN`)
    } 
    else {
        //Wrong guess
        guessesLeft = guessesLeft - 1

        if(guessesLeft === 0){
            //Game over - lost
            gameOver(false,`Game Over, YOU LOST. The correct number was ${winningNum}`)
        } else {
            //Game continues - Guess is wrong

            //Change border color
            guessInput.style.borderColor = 'red'

            //Clear the input
            guessInput.value = ''

            //Tell user the guess is wrong and number of guesses left
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`)
        }

    }
})

function gameOver(won,msg){
    let color
    won === true ? color = 'green' : color = 'red'
    //Disable Input
    guessInput.disabled = true
    //Change color
    guessInput.style.borderColor = color
    //Text color
    message.style.color = color
    //Display message won
    setMessage(msg)

    //Play Again
    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again'
}

// Get Winning Number
function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function setMessage(msg, color){    
    message.style.color = color
    message.textContent = msg
}

