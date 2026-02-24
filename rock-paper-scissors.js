console.log("Hello World");

function getComputerChoice() {
    let choice = Math.random();
    if (choice * 100 <= 33) {
        return "rock";
    } else if (choice * 100 <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Choose rock , paper or scissors: ");
}

let humanScore = 0 , computerScore = 0;

function playRound(humanChoice,computerChoice) {
    let insensHumanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock.")
        } else if (computerChoice === "scissors") {
            humanScore++;
            console.log("You win! Rock beats Scissors")
        } else {
            console.log("Draw, play again!")
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats Paper.")
        } else if (computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock")
        } else {
            console.log("Draw, play again!")
        }
    }
    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            console.log("You lose! Rock beats Scissors.")
        } else if (computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissors beats Paper")
        } else {
            console.log("Draw, play again!")
        }
    }
}

function playGame() {
    for (let i=0;i<=4;i++){
        let humanPick = getHumanChoice();
        let computerPick = getComputerChoice();
        playRound(humanPick,computerPick)
    }
    console.log(humanScore);
    console.log(computerScore);
}

playGame();