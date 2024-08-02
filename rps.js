//Create function to randomize rock, paper, scissors on conputer side
function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    if (randInt === 0) {
        return `rock`
    }
    else if (randInt === 1) {
        return `paper`
    }
    else if (randInt === 2) {
        return `scissors`
    }
}

//Create function to save players input
 function getHumanChoice() {
    for (let i = 0; i < 2;) {
        let answer = prompt(`Enter Rock, Paper, or Scissors`).toLowerCase()
        if (answer === `rock` || answer === `paper` || answer === `scissors`) {
            return answer
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

 console.log(`Human chose ${humanSelection}`)
 console.log(`Computer chose ${computerSelection}`)

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

playRound(humanSelection, computerSelection)

console.log(humanScore)
console.log(computerScore)

//function for playing a game