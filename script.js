let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if (humanGuess === computerGuess) {
        return true
    }
    const diffHuman = Math.abs(humanGuess - targetGuess)
    const diffComputer = Math.abs(computerGuess - targetGuess)
    if (diffHuman >= diffComputer) {
        return false
    } else {
        return true
    }
}


const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1

    } else {
        computerScore += 1
    }
}

const advanceRound = () => {
    currentRoundNumber += 1
}
