//Variables for inputs
let humanAnswer
let computerAnswer

//Create function to randomize rock, paper, scissors on conputer side
function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    if (randInt === 0) {
        return computerAnswer = `rock`
    }
    else if (randInt === 1) {
        return computerAnswer = `paper`
    }
    else if (randInt === 2) {
        return computerAnswer = `scissors`
    }
}

//Create function to save players input
 function getHumanChoice() {
    for (let i = 0; i < 2;) {
        let answer = prompt(`Enter Rock, Paper, or Scissors`).toLowerCase()
        if (answer === `rock` || answer === `paper` || answer === `scissors`) {
            return humanAnswer = answer
        }
        else if (answer === `shoot`) {
            alert(`alright funny man`)
        }
        else {
            alert(`Please try again`)
        }
    }
 } 




//save choices
 const humanSelection = getHumanChoice()
 const computerSelection = getComputerChoice()

//keep track of players score and computers score
let humanScore = 0
let computerScore = 0

//function for playing a round
function playRound(humanChoice, computerChoice) {
    for (let i = 0; i < 2;) {
        if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')) {
                humanScore++
                return alert(`You win!, ${humanChoice} beats ${computerChoice}!`)
            }
        else if (humanChoice === computerChoice) {
            alert(`Tie! Try again`)
            computerChoice = getComputerChoice()
            humanChoice = getHumanChoice()
        }
        else {
            computerScore++
            return alert(`You lose!, ${computerChoice} beats ${humanChoice}!`)
        }
    }
}



console.log(humanScore)
console.log(computerScore)

//function for playing a game

function playGame() {
    while (humanScore < 3 && computerScore < 3) {
        playRound(humanSelection, computerSelection)
        alert(`Score is currently Player: ${humanScore} Computer: ${computerScore}`)
        if (humanScore < 3 && computerScore <3) {
            getComputerChoice()
            getHumanChoice()
        }
    }

    if (humanScore > computerScore) {
        alert(`Congratualtions! you win!`)
    }
    else {
        alert(`You lose!`)
    }
}

playGame()