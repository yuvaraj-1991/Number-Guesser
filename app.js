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
let winningNum = 2
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

//Listen for the Guess btn

guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value)
    
    //Validate the guess from user
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter the number between ${min} and ${max}`,'red')
    }

    //Check if won 
    if(guess === winningNum){
        //Disable Input
        guessInput.disabled = true
        //Change color
        guessInput.style.borderColor = 'green'
        //Display message won
        setMessage(`${winningNum} is correct, YOU WIN`, 'green')
    }
})

function setMessage(msg, color){    
    message.style.color = color
    message.textContent = msg
}