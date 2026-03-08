console.log("Hello World");

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);
    let computerChoice = "Something went wrong!"
    switch(randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "scissors";
            break;
        case 2:
            computerChoice = "paper";
    }
    return {value: randomNumber,choice: computerChoice};
}

function getHumanChoice() {
    const humanChoice = prompt("What is your pick? (rock,scissors,paper)").toLowerCase();
    let humanValue = -1;
    if (humanChoice==="rock"){
        humanValue = 0;
    } else if (humanChoice==="scissors") {
        humanValue = 1;
    } else if (humanChoice==="paper") {
        humanValue = 2;
    }
    return {value: humanValue,choice: humanChoice};
}

let humanScore = 0;
let computerScore = 0;

function playRound (human,computer) {
    if (human.value-computer.value === -1 || human.value-computer.value === 2) {
        console.log("You win " + human.choice + " beats " + computer.choice);
        humanScore++;
    } else if (human.value-computer.value === -2 || human.value-computer.value === 1) {
        console.log("You lose " + human.choice + " loses to " + computer.choice)
        computerScore++;
    } else {
        console.log("It's a Draw");
    }
}

function playGame(rounds) {
    let round = 1;
    while (round<=rounds) {
        playRound(getHumanChoice(),getComputerChoice());
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        round++;
    }
    if (humanScore > computerScore) {
        console.log("You win");
    } else if (humanScore < computerScore) {
        console.log("You lose");
    } else {
        console.log("It's a Draw!")
    }
}

playGame(5);