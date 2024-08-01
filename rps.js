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

console.log(`Computer chose ${getComputerChoice()}`)

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

 console.log(`Human chose ${getHumanChoice()}`)
//keep track of players score and computers score
//function for playing a round
//function for playing a game