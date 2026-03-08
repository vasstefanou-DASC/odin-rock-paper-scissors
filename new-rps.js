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

const humanScore = 0;
const computerScore = 0;

function playRound (human,computer) {
    if (human.value-computer.value === -1 || human.value-computer.value === 2) {
        console.log("You win " + human.choice + " beats " + computer.choice);
    } else if (human.value-computer.value === -2 || human.value-computer.value === 1) {
        console.log("You lose " + human.choice + " loses to " + computer.choice)
    } else {
        console.log("It's a Draw");
    }
}

playRound(getHumanChoice(),getComputerChoice());